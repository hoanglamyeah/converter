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
                    <nuxt-link :to="'/json/json-to-xml'" aria-current="page">JSON to XML</nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="columns">
            <div class="column is-8">
                <section class="fantastic mtb-2">
                    <div class="wrapper">
                        <h1 class="title is-3">Json to XML</h1>
                        <p>Thank for using!</p>
                        <div class="control">
                            <div class="mtb-2">
                                <textarea class="textarea is-hovered" v-model="data" placeholder="Hovered textarea">
                                </textarea>
                            </div>
                            <codemirror v-model="xmlData" :options="cmOption"></codemirror>
                        </div>
                    </div>
                </section>
                <section class="has-text-left">
                    <h2 class="title is-3">Definetion</h2>
                    <h3 class="title is-4">What is json?</h3>
                    <p>In computing, JavaScript Object Notation or JSON is an open-standard file format that uses human-readable text to transmit data objects consisting of attribute–value pairs and array data types.</p>
                    <h3 class="title is-4">What is xml?</h3>
                    <p>In computing, Extensible Markup Language is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.</p>
                    <h3 class="title is-4">Why we need to convert JSON to XML</h3>
                    <ul>
                        <li>XPath/XQuery for extracting information in deeply nested structures.</li>
                        <li>XSLT for transformation into different output formats</li>
                        <li>XML Schema for datatype, structure validation. Makes it also possible to create new datatypes</li>
                        <li>Generalized markup; it is possible to create "dialects" for any kind of purpose</li>
                    </ul>
                </section>
            </div>
            <sidebar></sidebar>
        </div>
    </div>
</template>

<script>
    import JSONConverter from '../../../func/Json'
    import beautify from 'xml-beautifier'

    export default {
        name: "index",

        head() {
            return {
                title: "Json to Xml Converter Online | AIConverter",
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'You are looking for json to xml converter and have many results from google, you see me at here. That\'s lucky, I am an Artificial Intelligence for json to xml converter!'
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
                },
                cmOption: {
                    tabSize: 4,
                    styleActiveLine: true,
                    lineNumbers: true,
                    autoCloseTags: true,
                    line: true,
                    mode: 'text/html',
                    theme: 'ambiance'
                }
            }
        },

        computed: {
            jdata() {
                if (this.data == null || this.data === '') {
                    return {}
                } else {
                    return JSON.parse(this.data)
                }
            },

            xmlData() {
                return beautify(JSONConverter.toXML(this.jdata))
            }
        },

        methods: {
            updateData(data) {
                this.data = JSON.stringify(data)
            }
        },

        created() {
            console.log(JSONConverter.toXML(this.jdata))
        }
    }
</script>

<style scoped>
    input {
        border: 0;
    }
</style>
