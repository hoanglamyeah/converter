<template>
    <div class="has-text-left">
        <div class="field has-addons">
            <p class="control">
                <span class="button input-head">CMYK</span>
            </p>
            <p class="control has-icons-left">
                <input class="input" type="text" placeholder="0" v-model="c" @change="putData">
                <span class="icon is-small is-left">C</span>
            </p>
            <p class="control has-icons-left">
                <input class="input" type="text" placeholder="0" v-model="m" @change="putData">
                <span class="icon is-small is-left">M</span>
            </p>
            <p class="control has-icons-left">
                <input class="input" type="text" placeholder="0" v-model="y" @change="putData">
                <span class="icon is-small is-left">Y</span>
            </p>
            <p class="control has-icons-left">
                <input class="input" type="text" placeholder="0" v-model="k" @change="putData">
                <span class="icon is-small is-left">K</span>
            </p>
            <p class="control">
                <button class="button">
                    <i class="fas fa-random"></i>
                </button>
            </p>
        </div>
    </div>
</template>

<script>
    import Converter from '../../func/ColorConverter'

    export default {
        name: "cmyk",

        props: {
            hex: {
                default: 'FFFFFF',
                type: String
            }
        },

        data: () => {
            return {
                c: 0,
                m: 0,
                y: 0,
                k: 0
            }
        },

        methods: {
            putData() {
                this.$emit('change', Converter.RGB2HEX(Converter.CMYK2RGB([parseInt(this.c),
                    parseInt(this.m), parseInt(this.y), parseInt(this.k)])))
            }
        },

        watch: {
            hex() {
                try {
                    var temp = Converter.RGB2CMYK(Converter.HEX2RGB(this.hex))
                    this.c = temp[0]
                    this.m = temp[1]
                    this.y = temp[2]
                    this.k = temp[3]
                }
                catch (e) {
                    console.log(e)
                }

            }
        },

        created() {
            try {
                var temp = Converter.RGB2CMYK(Converter.HEX2RGB(this.hex))
                this.c = temp[0]
                this.m = temp[1]
                this.y = temp[2]
                this.k = temp[3]
            }
            catch (e) {
                console.log(e)
            }
        }


    }
</script>

<style scoped>

</style>
