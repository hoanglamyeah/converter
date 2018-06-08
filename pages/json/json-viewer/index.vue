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
                        <b-field>
                            <b-input placeholder="http://ip.jsontest.com/"
                                     type="URL"
                                     icon="magnify"
                                     v-model="url"
                                     expanded>
                            </b-input>
                            <p class="control">
                                <button class="button is-primary" @click="fetchSomething">View</button>
                            </p>
                        </b-field>
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
                <section class="has-text-left content">
                    <h2 class="title is-3">Definetion</h2>
                    <p>In computing, JavaScript Object Notation or JSON is an open-standard file format that uses human-readable text to transmit data objects consisting of attribute–value pairs and array data types.</p>
                    <h2 class="title is-3">Json viewer features:</h2>
                    <ul>
                        <li>Once you have created JSON Data. You can download as a file or
                            save as link and Share.
                        </li>
                        <li>Beautify/Format your JSON.</li>
                        <li>Parse and Display your JSON in a tree view.</li>
                        <li>JSON Viewer works well on Windows, MAC, Chrome, and Firefox.</li>
                    </ul>
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
                url: "http://ip.jsontest.com/",
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
