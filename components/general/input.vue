<template>
    <div class="field has-addons">
        <p class="control">
            <span class="button input-head">{{unit.name}}</span>
        </p>
        <p class="control is-expanded">
            <input class="input" type="text" placeholder="1" v-model="data">
        </p>
        <p class="control">
            <button class="button">Transfer</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "g-input",

        props: ['unit', 'num'],

        data: () => {
            return {
                data: 0
            }
        },

        methods: {
            convert() {
                var out = this.data / this.unit.value
                this.$emit('convert', out)
            },

            revert() {
                this.data = this.num * this.unit.value
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
