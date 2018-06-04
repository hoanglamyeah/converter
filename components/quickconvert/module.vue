<template>
    <div>
        <div class="columns">
            <div class="column">
                <div class="control">
                    <input class="input is-focused" type="text" placeholder="0" v-model="fromData">
                </div>
            </div>
            <div class="column">
                <div class="control">
                    <input class="input is-focused" type="text" placeholder="0" v-model="toData">
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="select is-multiple">
                    <select size="3" v-model="fromSelect" class="height-100">
                        <option v-for="unit in type.data" :key="unit.id" :value="unit.value">{{ unit.name }}</option>
                    </select>
                </div>
            </div>
            <div class="column">
                <div class="select is-multiple">
                    <select size="3" v-model="toSelect" class="height-100">
                        <option v-for="unit in type.data" :key="unit.id" :value="unit.value">{{ unit.name }}</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "module",

        props: ['type'],

        data: () => {
            return {
                toData: 1,
                fromData: 1,
                toSelect: 1,
                fromSelect: 1
            }
        },

        watch: {
            toData() {
                this.fromData = this.toData * this.fromSelect / this.toSelect
            },

            fromData() {
                this.toData = this.fromData * this.toSelect / this.fromSelect
            },

            toSelect() {
                this.toData = this.fromData * this.toSelect / this.fromSelect
            },
            fromSelect() {
                this.toData = this.fromData * this.toSelect / this.fromSelect
            }

        }
    }
</script>

<style lang="scss">
    select.height-100 {
        min-height: 100px;
        padding-right: 5px !important;
    }
</style>
