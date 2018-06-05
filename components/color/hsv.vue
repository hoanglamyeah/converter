<template>
    <div class="has-text-left">
        <div class="field has-addons">
            <p class="control">
                <span class="button input-head">HSV</span>
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
                <input class="input" type="text" placeholder="0" v-model="v" @change="putData">
                <span class="icon is-small is-left">V</span>
            </p>
        </div>
    </div>
</template>

<script>
    import Converter from '../../func/ColorConverter'

    export default {
        name: "hsv",
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
                v: 0
            }
        },

        methods: {
            putData() {
                var RGB = Converter.HSV2RGB([parseFloat(this.h), parseFloat(this.s), parseFloat(this.v)])
                this.$emit('change', Converter.RGB2HEX(RGB))
            }
        },

        watch: {
            hex() {
                try {
                    var RGB = Converter.HEX2RGB(this.hex)
                    var temp = Converter.RGB2HSV(RGB)
                    this.h = temp[0]
                    this.s = temp[1]
                    this.v = temp[2]
                }
                catch (e) {
                    console.log(e)
                }

            }
        },

        created() {
            try {
                var RGB = Converter.HEX2RGB(this.hex)
                var temp = Converter.RGB2HSV(RGB)
                this.h = temp[0]
                this.s = temp[1]
                this.v = temp[2]
            }
            catch (e) {
                console.log(e)
            }
        }
    }
</script>

<style scoped>

</style>
