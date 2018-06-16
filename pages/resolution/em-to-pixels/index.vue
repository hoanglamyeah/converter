<template>
    <div class="container">
        <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/resolution">Resolution</nuxt-link>
                </li>
                <li class="is-active">
                    <nuxt-link :to="'/resolution/'+ slug" aria-current="page">{{ title }}</nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="columns">
            <div class="column is-8">
                <section class="fantastic mtb-2 has-text-left primary">
                    <div class="wrapper">
                        <h1 class="title is-3">{{title}}</h1>
                        <div class="columns">
                            <div class="column">
                                <b-field>
                                    <p class="control">
                                        <span class="button is-static">{{from.name}}</span>
                                    </p>
                                    <b-input expanded v-model="input"></b-input>
                                </b-field>
                            </div>
                            <div class="column">
                                <b-field>
                                    <p class="control">
                                        <span class="button is-static">Default Pixel Size</span>
                                    </p>
                                    <b-input expanded v-model="dpi"></b-input>
                                </b-field>
                            </div>
                        </div>
                        <h4 class="title is-4 has-text-centered">{{input}} {{from.name}} is equal {{cm}}
                            {{to.name}}</h4>
                    </div>
                </section>
                <section class="has-text-left">
                    <h2 class="title is-4">Definition</h2>
                    <h3 class="title is-5">{{from.name}}</h3>
                    <p>{{from.des}}</p>
                    <h3 class="title is-5">{{to.name}}</h3>
                    <p>{{to.des}}</p>
                    <h2 class="title is-4">{{from.name}} to {{to.name}} Conversion table</h2>
                    <p> Bellow are pixels to inches conversion table sample with default pixel size is {{dpi}}</p>
                    <table class="table is-bordered is-fullwidth">
                        <thead>
                        <tr>
                            <th>{{from.name}}</th>
                            <th>{{to.name}}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="sample in samples" :key="sample">
                            <td>{{sample}}</td>
                            <td>{{convert(dpi,sample)}}</td>
                        </tr>
                        </tbody>
                    </table>
                </section>
            </div>
            <sidebar></sidebar>
        </div>
    </div>
</template>

<script>
    import ultil from '../../../func/until'

    export default {
        name: "index",
        head() {
            return {
                title: this.title + ' Online | AIConverter',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'You are looking for ' + this.title + ' and have many results from google, you see me at here. That\'s lucky, I am an Artificial Intelligence for ' + this.title + '!\n'
                    }
                ]
            }
        },

        data() {
            return {
                input: 1,
                dpi: 16,
                type: 'resolution',
                samples: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },

        methods: {
            convert(dpi, data) {
                return data * dpi
            }
        },

        computed: {
            to() {
                return ultil.getFrom(this.type, 'em-to-pixels')
            },

            from() {
                return ultil.getTo(this.type, 'em-to-pixels')
            },

            title() {
                return this.from.name + "s to " + this.to.name + "s Converter"
            },

            slug() {
                return this.from.id + "-to-" + this.to.id
            },
            cm() {
                return this.convert(this.dpi, this.input)
            }
        }
    }
</script>
