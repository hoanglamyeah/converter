<template>
    <div class="container">
        <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li class="is-active">
                    <nuxt-link to="/number" aria-current="page">Number</nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="columns">
            <div class="column is-8">
                <section class="fantastic mtb-2">
                    <div class="wrapper padding primary">
                        <h1 class="title is-3">Number Converter</h1>
                        <g-number v-for="(unit, index) in units" :unit="unit" :num="sample" @convert="updateValue" :key="index"></g-number>
                    </div>
                </section>
                <section class="has-text-left">
                    <h2 class="title is-4">Converter list</h2>
                    <table class="convert-list table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                        <tbody>
                        <tr v-for="convert in converts" v-bind:key="convert.id">
                            <td>
                                <nuxt-link :to="'/number/' + convert[0].id + '-to-' + convert[1].id">{{ convert[0].name
                                    }} to {{
                                    convert[1].name }}
                                </nuxt-link>
                            </td>
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
    import NumberGeneral from '../../components/number/general'
    import ultil from '../../func/until'
    import permutations from '../../func/permutations'

    export default {
        name: "index",
        head() {
            return {
                title: "Number Converter Online | AIConverter",
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'You are looking for number converter and have many results from google, you see me at here. That\'s lucky, I am an Artificial Intelligence for number converter!\n'
                    }
                ]
            }
        },
        components: {
            'g-number': NumberGeneral,
        },

        data: () => {
            return {
                sample: 10
            }
        },

        methods: {
            updateValue(data) {
                this.sample = data
            }
        },

        computed: {
            converts() {
                return permutations.permutations(ultil.getAll('number'), 2)
            },

            units() {
                return ultil.getAll('number')
            },
        },
        watch: {}
    }
</script>
