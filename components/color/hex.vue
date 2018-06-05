<template>
    <div class="has-text-left">
        <div class="field has-addons">
            <p class="control">
                <span class="button input-head">Hex</span>
            </p>
            <p class="control has-icons-left is-expanded">
                <input class="input" type="text" placeholder="FFFFFF" v-model="temp" @change="putData">
                <span class="icon is-small is-left">#</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'hex',

        props: ['hex'],

        data: () => {
            return {
                temp: ""
            }
        },

        created() {
            this.temp = this.hex
        },

        watch: {
            hex() {
                this.temp = this.hex

            }
        },
        methods: {
            putData() {
                this.$emit('change', this.temp)
            }
        }
    }
</script>

<style scoped>

</style>
