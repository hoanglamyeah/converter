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
                <li class="is-active">
                    <nuxt-link :to="'/color/' + slug" aria-current="page">{{ title }}</nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="columns">
            <div class="column is-8">
                <section class="fantastic mtb-2">
                    <div class="wrapper">
                        <h1 class="title is-3">{{ from.name }} to {{ to.name }} Converter</h1>
                        <from :hex="hexCode" @change="convert"></from>
                        <to :hex="hexCode" @change="convert"></to>
                        <preview :hex="'#'+hexCode"></preview>
                        <photoshop-picker v-model="colors" @input="updateValue"></photoshop-picker>
                    </div>
                </section>
                <section class="has-text-left">
                    <h2 class="title is-3">Definetion</h2>
                    <h3 class="title is-4">{{ from.name }}</h3>
                    <p>{{ from.des }}</p>
                    <h3 class="title is-4">{{ to.name }}</h3>
                    <p>{{ to.des }}</p>
                    <h2 class="title is-3">{{ from.name }} to {{ to.name }} conversion table</h2>
                    <b-table :data="data" :columns="columns"></b-table>
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
    import ColorNCOL from '../../components/color/ncol'
    import Preview from '../../components/color/preview'
    import ultil from '../../func/until'
    import Vue from 'vue'
    import Converter from '../../func/ColorConverter'

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
        name: "slug",

        head() {
            return {
                title: this.title + ' | AIConverter',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'You are looking for '+this.title+' and have many results from google, you see me at here. That\'s lucky, I am an Artificial Intelligence for '+this.title+'!\n'
                    }
                ]
            }
        },

        components: {
            'preview': Preview
        },

        data: () => {
            return {
                hexCode: "FFFFFF",
                samples: ['f9ca33', '725fdf', 'ff0033', '99ffff', 'ffffcc', '0e1d47', '00fa9a'],
                colors: defaultProps
            }
        },

        methods: {
            convert(data) {
                this.hexCode = data
            },

            updateValue(data) {
                this.hexCode = data.hex.substring(1).toUpperCase()
            },

            convertSample(hex, kind) {
                var out = ''
                switch (kind) {
                    case 'hex':
                        return '#' + hex.toUpperCase()
                    case 'rgb':
                        out = Converter.HEX2RGB(hex)
                        return 'RGB(' + Number(out[0].toFixed(1)) + ', ' + Number(out[1].toFixed(1)) + ', ' + Number(out[2].toFixed(1)) + ')'
                    case 'hsl':
                        out = Converter.RGB2HSL(Converter.HEX2RGB(hex))
                        return 'HSL(' + Number(out[0].toFixed(1)) + ', ' + Number(out[1].toFixed(1)) + ', ' + Number(out[2].toFixed(1)) + ')'
                    case 'hsv':
                        out = Converter.RGB2HSV(Converter.HEX2RGB(hex))
                        return 'HSV(' + Number(out[0].toFixed(1)) + ', ' + Number(out[1].toFixed(1)) + ', ' + Number(out[2].toFixed(1)) + ')'
                    case 'cmyk':
                        out = Converter.RGB2CMYK(Converter.HEX2RGB(hex))
                        return 'CMYK(' + Number(out[0].toFixed(1)) + ', ' + Number(out[1].toFixed(1)) + ', ' + Number(out[2].toFixed(1)) + ', ' + Number(out[3].toFixed(1)) + ')'
                }
            }
        },

        computed: {

            data() {
                var arr = []
                for (var index in this.samples) {
                    var temp = {}
                    temp[this.from.id] = this.convertSample(this.samples[index], this.from.id)
                    temp[this.to.id] = this.convertSample(this.samples[index], this.to.id)
                    arr.push(temp)
                }

                return arr
            },

            columns() {
                var arr = []
                arr.push({
                    field: this.from.id,
                    label: this.from.name,
                    width: '50%',
                    numeric: false
                })
                arr.push({
                    field: this.to.id,
                    label: this.to.name,
                    width: '50%',
                    numeric: false
                })
                return arr
            },

            to() {
                return ultil.getFrom('color', this.$route.params.slug)
            },

            from() {
                return ultil.getTo('color', this.$route.params.slug)
            },

            toID() {
                return this.$route.params.slug.split('-to-')[1]
            },

            fromID() {
                return this.$route.params.slug.split('-to-')[0]
            },

            title() {
                return this.from.name + " to " + this.to.name + " Converter Online"
            }
        },

        created() {
            switch (this.fromID) {
                case 'hex':
                    Vue.component('from', ColorHex)
                    break
                case 'rgb':
                    Vue.component('from', ColorRGB)
                    break
                case 'cmyk':
                    Vue.component('from', ColorCMYK)
                    break
                case 'hsl':
                    Vue.component('from', ColorHSL)
                    break
                case 'hsv':
                    Vue.component('from', ColorHSV)
                    break
                case 'ncol':
                    Vue.component('from', ColorNCOL)

            }
            switch (this.toID) {
                case 'hex':
                    Vue.component('to', ColorHex)
                    break
                case 'rgb':
                    Vue.component('to', ColorRGB)
                    break
                case 'cmyk':
                    Vue.component('to', ColorCMYK)
                    break
                case 'hsl':
                    Vue.component('to', ColorHSL)
                    break
                case 'hsv':
                    Vue.component('to', ColorHSV)
                    break
                case 'ncol':
                    Vue.component('to', ColorNCOL)

            }
        }
    }
</script>

<style scoped>

</style>
