<template>
    <div class="has-text-left">
        <div class="field has-addons">
            <p class="control">
                <span class="button input-head">RGB</span>
            </p>
            <p class="control has-icons-left">
                <input class="input" type="number" placeholder="0" v-model="r" @change="putData">
                <span class="icon is-small is-left">R</span>
            </p>
            <p class="control has-icons-left">
                <input class="input" type="number" placeholder="0" v-model="g" @change="putData">
                <span class="icon is-small is-left">G</span>
            </p>
            <p class="control has-icons-left">
                <input class="input" type="number" placeholder="0" v-model="b" @change="putData">
                <span class="icon is-small is-left">B</span>
            </p>
            <p class="control">
                <button class="button">
                    <b-icon pack="fas" icon="random" size="is-small"></b-icon>
                </button>
            </p>
        </div>
    </div>
</template>

<script>
    import Converter from '../../func/ColorConverter'

    export default {
        name: 'rgb',

        props: {
            hex: {
                default: 'FFFFFF',
                type: String
            }
        },

        data: () => {
            return {
                r: 0,
                g: 0,
                b: 0
            }
        },

        methods: {
            putData() {
                this.$emit('change', Converter.RGB2HEX([parseInt(this.r), parseInt(this.g), parseInt(this.b)]))
            }
        },

        watch: {
            hex() {
                try {
                    var temp = Converter.HEX2RGB(this.hex)
                    this.r = temp[0]
                    this.g = temp[1]
                    this.b = temp[2]
                }
                catch (e) {
                    console.log(e)
                }

            }
        },

        created() {
            try {
                var temp = Converter.HEX2RGB(this.hex)
                this.r = temp[0]
                this.g = temp[1]
                this.b = temp[2]
            }
            catch (e) {
                console.log(e)
            }
        }
    }
</script>

<style scoped>

</style>
