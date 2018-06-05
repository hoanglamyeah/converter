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

        data: () => {
            return {
                data: "{ \"glossary\": { \"title\": \"example glossary\", \"GlossDiv\": { \"title\": \"S\", \"GlossList\": { \"GlossEntry\": { \"ID\": \"SGML\", \"SortAs\": \"SGML\", \"GlossTerm\": \"Standard Generalized Markup Language\", \"Acronym\": \"SGML\", \"Abbrev\": \"ISO 8879:1986\", \"GlossDef\": { \"para\": \"A meta-markup language, used to create markup languages such as DocBook.\", \"GlossSeeAlso\": [\"GML\", \"XML\"] }, \"GlossSee\": \"markup\" } } } } }",
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
