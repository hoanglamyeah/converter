<template>
    <div class="container">
        <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/color">Color</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/color/unit">Unit</nuxt-link>
                </li>
                <li class="is-active">
                    <nuxt-link :to="'/color/unit/'+unit.id" aria-current="page">{{unit.name}} Converter</nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="columns">
            <div class="column is-8">
                <section class="has-text-left">
                    <h1 class="title is-2">{{unit.name}} Converter</h1>
                    <p>{{unit.des}} Here are some tool that help you conver {{unit.name}} to other unit:</p>
                    <table class="convert-list table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                        <tbody>
                        <tr v-for="convert in converts" v-bind:key="convert.id">
                            <td>
                                <nuxt-link :to="'/color/' + convert[0].id + '-to-' + convert[1].id">{{ convert[0].name
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

    import ultil from '../../../func/until'

    export default {
        name: "slug",

        head() {
            return {
                title: this.unit.name + ' Converter | AIConverter',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'You are looking for '+this.unit.name+' converter and have many results from google, you see me at here. That\'s lucky, I am an Artificial Intelligence for '+this.unit.name+' converter!\n'
                    }
                ]
            }
        },

        computed: {
            converts() {
                var arr = []
                var all = ultil.getAll('color')
                for (var index in all) {
                    if (all[index].id !== this.unit.id) {
                        arr.push([this.unit, all[index]])
                    }
                }
                return arr
            },

            unit() {
                return ultil.getUnit('color', this.$route.params.slug)
            }
        },
    }
</script>

<style scoped>

</style>
