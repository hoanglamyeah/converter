<template>
    <div class="container">
        <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/json">Json</nuxt-link>
                </li>
                <li class="is-active">
                    <nuxt-link :to="'/json/json-viewer'" aria-current="page">Json Viewer</nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="columns">
            <div class="column is-8">
                <section class="fantastic mtb-2">
                    <div class="wrapper">
                        <h1 class="title is-3">Json viewer</h1>
                        <div class="field has-addons">
                            <div class="control is-expanded">
                                <input class="input" type="text" placeholder="Url api" v-model="url">
                            </div>
                            <div class="control">
                                <button class="button is-info" @click="fetchSomething">View</button>
                            </div>
                        </div>
                        <p class="has-text-centered">OR</p>
                        <div class="control">
                            <div class="mtb-2">
                                <textarea class="textarea is-hovered" v-model="data" placeholder="Hovered textarea">
                                </textarea>
                            </div>
                            <div class="box">
                                <tree-view :data="jdata" :options="options" @change-data="updateData"></tree-view>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="has-text-left">
                    <h2 class="title is-3">Definetion</h2>
                    <h4 class="title is-5">Credit:</h4>
                    <p>This tool use <a href="https://www.npmjs.com/package/vue-json-tree-view">vue-json-tree-view</a>
                        by @arvidkahl</p>
                </section>
            </div>
            <sidebar></sidebar>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",

        head() {
            return {
                title: "Json viewer Online | AIConverter",
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'You are looking for json viewer and have many results from google, you see me at here. That\'s lucky, I am here!'
                    }
                ]
            }
        },

        data: () => {
            return {
                data: "{\"sample\": \"This is sample\"}",
                url: "",
                options: {
                    maxDepth: 4,
                    rootObjectKey: "root",
                    modifiable: true
                }
            }
        },

        computed: {
            jdata() {
                try {
                    return JSON.parse(this.data)
                }
                catch (e) {
                    console.log(e)
                    return {sample: "This is sample"}
                }
            }
        },

        methods: {
            updateData(data) {
                try {
                    this.data = JSON.stringify(data)
                }
                catch (e) {
                    console.log(e)
                }

            },

            async fetchSomething() {
                const ip = await this.$axios.$get(this.url)
                try {
                    this.data = JSON.stringify(ip)
                }
                catch (e) {
                    console.log(e)
                }

            }
        }
    }
</script>

<style scoped>
    input {
        border: 0;
    }
</style>
