<template>
    <div class="container">
        <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li class="is-active">
                    <nuxt-link to="/color" aria-current="page">Color</nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="columns">
            <div class="column is-8">
                <section class="fantastic mtb-2">
                    <div class="wrapper padding primary">
                        <h1 class="title is-3">Color Converter</h1>
                        <color-hex :hex="hexCode" @change="changeColor"></color-hex>
                        <color-cmyk :hex="hexCode" @change="changeColor"></color-cmyk>
                        <color-hsl :hex="hexCode" @change="changeColor"></color-hsl>
                        <color-hsv :hex="hexCode" @change="changeColor"></color-hsv>
                        <color-rgb :hex="hexCode" @change="changeColor"></color-rgb>
                        <preview :hex="'#'+hexCode"></preview>
                        <photoshop-picker v-model="colors" @input="updateValue"></photoshop-picker>
                    </div>
                </section>
                <section class="has-text-left">
                    <h2 class="title is-4">Converter list</h2>
                    <table class="convert-list table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                        <tbody>
                        <tr v-for="convert in converts" v-bind:key="convert.id">
                            <td>
                                <nuxt-link :to="'/color/' + convert[0].id + '-to-' + convert[1].id">{{ convert[0].name
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
    import ColorHex from '../../components/color/hex'
    import ColorCMYK from '../../components/color/cmyk'
    import ColorHSL from '../../components/color/hsl'
    import ColorHSV from '../../components/color/hsv'
    import ColorRGB from '../../components/color/rgb'
    import Preview from '../../components/color/preview'
    import ultil from '../../func/until'
    import permutations from '../../func/permutations'

    let defaultProps = {
        hex: '#ffffff',
        hsl: {
            h: 150,
            s: 0.5,
            l: 0.2,
            a: 1
        },
        hsv: {
            h: 150,
            s: 0.66,
            v: 0.30,
            a: 1
        },
        rgba: {
            r: 25,
            g: 77,
            b: 51,
            a: 1
        },
        a: 1
    }
    export default {
        name: "index",
        head() {
            return {
                title: "Color Converter Online | AIConverter",
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'You are looking for color converter and have many results from google, you see me at here. That\'s lucky, I am an Artificial Intelligence for color converter!\n'
                    }
                ]
            }
        },
        components: {
            'color-hex': ColorHex,
            'color-cmyk': ColorCMYK,
            'color-hsl': ColorHSL,
            'color-hsv': ColorHSV,
            'color-rgb': ColorRGB,
            'preview': Preview
        },

        data: () => {
            return {
                hexCode: 'FFFFFF',
                colors: defaultProps
            }
        },

        methods: {
            changeColor(data) {
                this.hexCode = data.toUpperCase()
            },

            updateValue(data) {
                this.hexCode = data.hex.substring(1).toUpperCase()
            }
        },

        computed: {
            converts() {
                return permutations.permutations(ultil.getAll('color'), 2)
            }
        },
        watch: {}
    }
</script>
