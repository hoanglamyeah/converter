<template>
    <div class="container">
        <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li class="is-active">
                    <nuxt-link :to="'/'+ $route.params.type" aria-current="page">{{typeName}}</nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="columns">
            <div class="column is-8">
                <section class="fantastic mtb-2">
                    <div class="wrapper padding primary">
                        <h1 class="title is-3">{{typeName}} Converter</h1>
                        <g-input v-for="unit in units" :key="unit.slug" :unit="unit" :num="result"
                                 @convert="convert"></g-input>
                    </div>
                </section>
                <section class="has-text-left">
                    <h2 class="title is-4">Converter list</h2>
                    <table class="convert-list table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                        <tbody>
                        <tr v-for="convert in converts" v-bind:key="convert.id">
                            <td>
                                <nuxt-link
                                    :to="'/'+$route.params.type + '/' + convert[0].id + '-to-' + convert[1].id">{{
                                    convert[0].name
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
    import GInput from '../../components/general/input'
    import ultil from '../../func/until'
    import permutations from '../../func/permutations'

    export default {
        name: "index",

        head() {
            return {
                title: this.typeName + ' Converter | AIConverter',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'You are looking for '+this.typeName+' converter and have many results from google, you see me at here. That\'s lucky, I am an Artificial Intelligence for '+this.typeName+' converter!\n'
                    }
                ]
            }
        },

        data: () => {
            return {
                result: 1
            }
        },

        components: {
            'g-input': GInput
        },

        computed: {
            converts() {
                return permutations.permutations(ultil.getAll(this.$route.params.type), 2)
            },

            units() {
                return ultil.getAll(this.$route.params.type)
            },

            primary() {
                return ultil.getPrimary(this.$route.params.type)
            },

            typeName() {
                return ultil.getTypeName(this.$route.params.type)
            }
        },

        methods: {
            convert(data) {
                this.result = data
            }
        }
    }
</script>
<style>
    .input-head {
        cursor: default;
    }
</style>
