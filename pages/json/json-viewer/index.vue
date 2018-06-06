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
                    <p>This tool use <a href="https://www.npmjs.com/package/vue-json-tree-view">vue-json-tree-view</a> by @arvidkahl</p>
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
                data: "{\"widget\": { \"debug\": \"on\", \"window\": { \"title\": \"Sample Konfabulator Widget\", \"name\": \"main_window\", \"width\": 500, \"height\": 500 }, \"image\": { \"src\": \"Images/Sun.png\", \"name\": \"sun1\", \"hOffset\": 250, \"vOffset\": 250, \"alignment\": \"center\" }, \"text\": { \"data\": \"Click Here\", \"size\": 36, \"style\": \"bold\", \"name\": \"text1\", \"hOffset\": 250, \"vOffset\": 100, \"alignment\": \"center\", \"onMouseUp\": \"sun1.opacity = (sun1.opacity / 100) * 90;\" } }}",
                options: {
                    maxDepth: 4,
                    rootObjectKey: "root",
                    modifiable: true
                }
            }
        },

        computed: {
            jdata() {
                return JSON.parse(this.data)
            }
        },

        methods: {
            updateData(data) {
                this.data = JSON.stringify(data)
            }
        }
    }
</script>

<style scoped>
input {
    border: 0;
}
</style>
