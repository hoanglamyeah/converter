<template>
    <div class="has-text-left">
        <div class="field has-addons">
            <p class="control">
                <span class="button input-head">HSL</span>
            </p>
            <p class="control has-icons-left">
                <input class="input" type="text" placeholder="0" v-model="h" @change="putData">
                <span class="icon is-small is-left">H</span>
            </p>
            <p class="control has-icons-left">
                <input class="input" type="text" placeholder="0" v-model="s" @change="putData">
                <span class="icon is-small is-left">S</span>
            </p>
            <p class="control has-icons-left">
                <input class="input" type="text" placeholder="0" v-model="l" @change="putData">
                <span class="icon is-small is-left">L</span>
            </p>
            <p class="control">
                <button class="button"><i class="fas fa-random"></i></button>
            </p>
        </div>
    </div>
</template>

<script>
    import Converter from '../../func/ColorConverter'

    export default {
        name: "hsl",

        props: {
            hex: {
                default: 'FFFFFF',
                type: String
            }
        },

        data: () => {
            return {
                h: 0,
                s: 0,
                l: 0
            }
        },

        methods: {
            putData() {
                this.$emit('change', Converter.RGB2HEX(Converter.HSL2RGB([parseInt(this.h), parseInt(this.s), parseInt(this.l)])))
            }
        },

        watch: {
            hex() {
                try {
                    var temp = Converter.RGB2HSL(Converter.HEX2RGB(this.hex))
                    this.h = temp[0]
                    this.s = temp[1]
                    this.l = temp[2]
                }
                catch (e) {
                    console.log(e)
                }

            }
        },

        created() {
            try {
                var temp = Converter.RGB2HSL(Converter.HEX2RGB(this.hex))
                this.h = temp[0]
                this.s = temp[1]
                this.l = temp[2]
            }
            catch (e) {
                console.log(e)
            }
        }
    }
</script>

<style scoped>

</style>
