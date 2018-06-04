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
                    <nuxt-link to="/color/unit" aria-current="page">Unit</nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="columns">
            <div class="column is-8">
                <section class="has-text-left">
                    <h1 class="title is-2">Color Unit</h1>
                    <table class="convert-list table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                        <tbody>
                        <tr v-for="unit in units" :key="unit.id">
                            <td>
                                <nuxt-link :to="'/color/unit/'+unit.id">{{unit.name}} Converter</nuxt-link>
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
        name: "index",

        head() {
            return {
                title: 'Color Unit | AIConverter',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Here are all color unit and tool for convert their!'}
                ]
            }
        },

        computed: {
            units() {
                return ultil.getAll('color')
            }
        }
    }
</script>

<style scoped>

</style>
