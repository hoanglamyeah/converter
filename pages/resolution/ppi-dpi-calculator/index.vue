<template>
    <div class="container">
        <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/resolution">Resolution</nuxt-link>
                </li>
                <li class="is-active">
                    <nuxt-link :to="'/resolution/ppi-dpi-calculator'" aria-current="page">DPI/PPI Calculator</nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="columns">
            <div class="column is-8">
                <section class="fantastic mtb-2 primary">
                    <div class="wrapper">
                        <h1 class="title is-3">DPI/PPI Calculator</h1>
                        <p>Thank for using!</p>
                        <div class="columns">
                            <div class="column">
                                <b-field>
                                    <p class="control">
                                        <span class="button is-static">Width</span>
                                    </p>
                                    <b-input expanded v-model="screen.width"></b-input>
                                </b-field>
                            </div>
                            <div class="column">
                                <b-field>
                                    <p class="control">
                                        <span class="button is-static">Height</span>
                                    </p>
                                    <b-input expanded v-model="screen.height"></b-input>
                                </b-field>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column">
                                <b-field>
                                    <p class="control">
                                        <span class="button is-static">Diagonal</span>
                                    </p>
                                    <b-input expanded v-model="screen.diagonal"></b-input>
                                </b-field>
                            </div>
                            <div class="column">
                                <div class="control">
                                    <div class="tags has-addons">
                                        <span class="tag result-size">DPI</span>
                                        <span class="tag is-primary result-size">{{dpi}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="has-text-left">
                    <h2 class="title is-3">DPI Table</h2>
                    <table class="table is-bordered">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Width</th>
                            <th>Height</th>
                            <th>Diagonal</th>
                            <th>DPI</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(device, index) in devices" :key="index">
                            <td>{{device.name}}</td>
                            <td>{{device.w}}</td>
                            <td>{{device.h}}</td>
                            <td>{{device.d}}</td>
                            <td>{{ getDPI(device.w, device.h, device.d)}}</td>
                        </tr>
                        </tbody>
                    </table>
                    <h2 class="title is-3">Definition</h2>
                    <h3 class="title is-4">What is DPI/PPI?</h3>
                    <p>Dots per inch is a measure of spatial printing or video or image scanner dot density, in
                        particular the number of individual dots that can be placed in a line within the span of 1
                        inch.</p>
                    <p>Pixels per inch (PPI) or pixels per centimeter (PPCM) are measurements of the pixel density
                        (resolution) of an electronic image device, such as a computer monitor or television display, or
                        image digitizing device such as a camera or image scanner.</p>
                    <h2 class="title is-3">How to calculate DPI?</h2>
                    <p>Just simple, We have: <b>DPI = SQRT(Width² * Height²) / Diagonal</b></p>
                </section>
            </div>
            <sidebar></sidebar>
        </div>
    </div>
</template>

<script>
    import devices from '../../../data/devices'

    export default {
        name: "index",

        head() {
            return {
                title: "DPI/PPI Calculator | AIConverter",
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'You are looking for PPI calculator or DPI calculator and have many results from google, you see me at here.'
                    }
                ]
            }
        },

        data: () => {
            return {
                screen: {
                    diagonal: 13.3,
                    width: 0,
                    height: 0
                },
                guessPPI: 0,

                columns: [
                    {
                        field: 'name',
                        label: 'Name',
                        numeric: false
                    },
                    {
                        field: 'w',
                        label: 'Width',
                        numeric: true
                    },
                    {
                        field: 'h',
                        label: 'Height',
                        numeric: true
                    },
                    {
                        field: 'd',
                        label: 'Diagonal',
                        numeric: true
                    },
                    {
                        field: 'dpi',
                        label: 'DPI',
                        numeric: true
                    },
                ]
            }
        },

        computed: {
            dpi() {
                return this.getDPI(this.screen.width, this.screen.height, this.screen.diagonal)
            },

            devices() {
                return devices.device
            }
        },

        methods: {
            getDPI(w, h, d) {
                var out = Math.sqrt(w * w + h * h) / d
                return Math.round(out)
            }
        },

        created() {
            if (process.browser) {
                var dppx = window.devicePixelRatio ||
                    (window.matchMedia && window.matchMedia("(min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches ? 2 : 1) ||
                    1;
                this.screen.width = screen.width * dppx;
                this.screen.height = screen.height * dppx;
            }
        }
    }
</script>
<style lang="scss">
    .result-size {
        font-size: 17px !important;
    }
</style>
