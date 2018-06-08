<template>
    <div class="container">
        <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/number" aria-current="page">Number</nuxt-link>
                </li>
                <li class="is-active">
                    <nuxt-link :to="'/number/'+ slug" aria-current="page">{{ title }}</nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="columns">
            <div class="column is-8">
                <section class="fantastic mtb-2">
                    <div class="wrapper padding primary">
                        <h1 class="title is-3">{{ title }}</h1>
                        <div class="field has-addons">
                            <p class="control">
                                <span class="button input-head">{{from.name}}</span>
                            </p>
                            <p class="control is-expanded">
                                <input class="input" type="text" placeholder="1" v-model="fromData">
                            </p>
                            <p class="control">
                                <button class="button"><i class="fa fa-random"></i></button>
                            </p>
                        </div>
                        <div class="field has-addons">
                            <p class="control">
                                <span class="button input-head">{{to.name}}</span>
                            </p>
                            <p class="control is-expanded">
                                <input class="input" type="text" placeholder="1" v-model="toData">
                            </p>
                            <p class="control">
                                <button class="button"><i class="fa fa-random"></i></button>
                            </p>
                        </div>
                    </div>
                </section>
                <section class="has-text-left">
                    <h2 class="title is-3">How many {{to.name}} in a {{from.name}}</h2>
                    <p>1 {{from.name}} = {{percent}} {{to.name}}</p>
                    <h2 class="title is-3">Definetion</h2>
                    <h3 class="title is-4">{{from.name}}</h3>
                    <p>{{from.des}}</p>
                    <h3 class="title is-4">{{to.name}}</h3>
                    <p>{{to.des}}</p>
                    <h2 class="title is-3">{{ from.name }}s to {{ to.name }}s conversion table</h2>
                    <b-table :data="data" :columns="columns" :bordered="true"></b-table>
                </section>
            </div>
            <sidebar></sidebar>
        </div>
    </div>
</template>

<script>
    import ultil from '../../func/until'
    import Converter from '../../func/NumberConverter'
    export default {
        name: "slug",

        head() {
            return {
                title: this.title + ' Online | AIConverter',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'You are looking for ' + this.title + ' and have many results from google, you see me at here. That\'s lucky, I am an Artificial Intelligence for ' + this.title + '!\n'
                    }
                ]
            }
        },

        data: () => {
            return {
                toData: 1,
                fromData: 1,
                samples: [1, 10, 13, 15, 60, 73, 75],
                type: 'number'
            }
        },

        watch: {
            toData() {
                var decTemp = null
                switch (this.to.id) {
                    case 'hex':
                        decTemp = Converter.HEX2DEC(this.toData)
                        break
                    case 'dec':
                        decTemp = parseInt(this.toData)
                        break
                    case 'oct':
                        decTemp = Converter.OCT2DEC(parseInt(this.toData))
                        break
                    case 'bin':
                        decTemp = Converter.BIN2DEC(parseInt(this.toData))
                        break
                }

                switch (this.from.id) {
                    case 'hex':
                        this.fromData = Converter.DEC2HEX(decTemp).toUpperCase()
                        break
                    case 'dec':
                        this.fromData = decTemp
                        break
                    case 'oct':
                        this.fromData = Converter.DEC2OCT(decTemp)
                        break
                    case 'bin':
                        this.fromData = Converter.DEC2BIN(decTemp)
                        break
                }
            },

            fromData() {
                var decTemp = null
                switch (this.from.id) {
                    case 'hex':
                        decTemp = Converter.HEX2DEC(this.fromData)
                        break
                    case 'dec':
                        decTemp = parseInt(this.fromData)
                        break
                    case 'oct':
                        decTemp = Converter.OCT2DEC(parseInt(this.fromData))
                        break
                    case 'bin':
                        decTemp = Converter.BIN2DEC(parseInt(this.fromData))
                        break
                }

                switch (this.to.id) {
                    case 'hex':
                        this.toData = Converter.DEC2HEX(decTemp).toUpperCase()
                        break
                    case 'dec':
                        this.toData = decTemp
                        break
                    case 'oct':
                        this.toData = Converter.DEC2OCT(decTemp)
                        break
                    case 'bin':
                        this.toData = Converter.DEC2BIN(decTemp)
                        break
                }
            }
        },

        methods: {
            convertSample(hex) {
                var decTemp = null
                switch (this.from.id) {
                    case 'hex':
                        decTemp = Converter.HEX2DEC(hex)
                        break
                    case 'dec':
                        decTemp = hex
                        break
                    case 'oct':
                        decTemp = Converter.OCT2DEC(hex)
                        break
                    case 'bin':
                        decTemp = Converter.BIN2DEC(hex)
                        break
                }

                switch (this.to.id) {
                    case 'hex':
                        return Converter.DEC2HEX(decTemp).toUpperCase()
                    case 'dec':
                        return decTemp
                    case 'oct':
                        return Converter.DEC2OCT(decTemp)
                    case 'bin':
                        return Converter.DEC2BIN(decTemp)
                }
            }
        },

        computed: {
            to() {
                return ultil.getFrom(this.type, this.$route.params.slug)
            },

            from() {
                return ultil.getTo(this.type, this.$route.params.slug)
            },

            title() {
                return this.from.name + "s to " + this.to.name + "s Converter"
            },

            slug() {
                return this.from.id + "-to-" + this.to.id
            },

            primary() {
                return ultil.getPrimary(this.type)
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

            data() {
                var arr = []
                for (var index in this.samples) {
                    var temp = {}
                    temp[this.from.id] = this.samples[index]
                    temp[this.to.id] = this.convertSample(this.samples[index])
                    arr.push(temp)
                }

                return arr
            },

            units() {
                return ultil.getAll(this.type)
            },

            typeName() {
                return ultil.getTypeName(this.type)
            },

            percent() {
                return this.to.value / this.from.value
            }

        },

        created() {
            var temp = this.fromData / this.from.value
            this.toData = temp * this.to.value
        }
    }
</script>

<style lang="scss">

</style>
