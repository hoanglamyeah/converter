<template>
    <div class="container">
        <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li class="is-active">
                    <nuxt-link to="/json">JSON</nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="columns">
            <div class="column is-8">
                <section class="has-text-left">
                    <h1 class="title is-3">JSON Converter</h1>
                    <p>In computing, JavaScript Object Notation or JSON is an open-standard file format that uses human-readable text to transmit data objects consisting of attribute–value pairs and array data types.</p>
                    <h2 class="title is-4">Json converters and tools</h2>
                    <table class="convert-list table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                        <tbody>
                        <tr>
                            <td>
                                <nuxt-link to="/json/json-viewer">
                                    JSON Viewer
                                </nuxt-link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <nuxt-link to="/json/json-to-xml">
                                    JSON to XML
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
    export default {
        name: "index",
        head() {
            return {
                title: "Json Converter | AIConverter",
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'You are looking for json converter and have many results from google, you see me at here. That\'s lucky, I am an Artificial Intelligence for json converter!\n'
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>
