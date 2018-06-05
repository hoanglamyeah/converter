<template>
    <div class="field has-addons">
        <p class="control">
            <span class="button input-head">{{unit.name}}</span>
        </p>
        <p class="control is-expanded">
            <input class="input" type="text" placeholder="1" v-model="data">
        </p>
    </div>
</template>

<script>
    import Converter from '../../func/NumberConverter'

    export default {
        name: "bin",

        props: ['unit', 'num'],

        data: () => {
            return {
                data: 1
            }
        },

        methods: {
            convert() {
                var out = 1
                switch (this.unit.id) {
                    case 'hex':
                        out = Converter.HEX2DEC(this.data)
                        break
                    case 'dec':
                        out = this.data
                        break
                    case 'oct':
                        out = Converter.OCT2DEC(this.data)
                        break
                    case 'bin':
                        out = Converter.BIN2DEC(this.data)
                        break
                }

                this.$emit('convert', out)
            },

            revert() {
                var out = 1
                switch (this.unit.id) {
                    case 'hex':
                        out = Converter.DEC2HEX(this.num).toUpperCase()
                        break
                    case 'dec':
                        out = parseInt(this.num)
                        break
                    case 'oct':
                        out = Converter.DEC2OCT(this.num)
                        break
                    case 'bin':
                        out = Converter.DEC2BIN(this.num)
                        break
                }
                this.data = out
            }

        },

        watch: {
            num() {
                this.revert()
            },

            data() {
                this.convert()
            }
        },

        created() {
            this.revert()
        }
    }
</script>

<style scoped>

</style>
