<template>
    <div class="container">
        <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li class="is-active">
                    <nuxt-link to="/resolution">Resolution</nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="columns">
            <div class="column is-8">
                <section class="has-text-left">
                    <h1 class="title is-3">Resolution Converter</h1>
                    <p>Sometime we need to know how many pixels in a centimetre or in a inch have how many pixel, Resolution Converter was created to help you answer that. Here are some tool that you need.</p>
                    <h2 class="title is-4">Resolution converters and tools</h2>
                    <table class="convert-list table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                        <tbody>
                        <tr>
                            <td>
                                <nuxt-link to="/resolution/ppi-dpi-calculator">
                                    PPI/DPI Calculator
                                </nuxt-link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <nuxt-link to="/resolution/pixels-to-cm">
                                    Pixels to Centimeter
                                </nuxt-link>
                            </td>
                        </tr>
                         <tr>
                            <td>
                                <nuxt-link to="/resolution/cm-to-pixels">
                                    Centimeter to Pixels
                                </nuxt-link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <nuxt-link to="/resolution/pixels-to-inches">
                                    Pixels to Inches
                                </nuxt-link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <nuxt-link to="/resolution/inches-to-pixels">
                                    Inches to Pixels
                                </nuxt-link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <nuxt-link to="/resolution/pixels-to-em">
                                    Pixels to em
                                </nuxt-link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <nuxt-link to="/resolution/em-to-pixels">
                                    em to Pixels
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
                title: "Resolution Converter Online | AIConverter",
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'You are looking for resolution converter and have many results from google, you see me at here. That\'s lucky, I am an Artificial Intelligence for resolution converter!\n'
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>
