<template>
    <b-tabs class="block fantastic">
        <b-tab-item v-for="item in types" :label="item.name" :key="item.slug">
            <module :type="item"></module>
        </b-tab-item>
    </b-tabs>
</template>

<script>
    import Module from './module'
    import ultil from '../../func/until'
    export default {
        name: "index",
        components: {'module': Module},
        props: ['list'],
        computed: {
            types() {
                var arr = []
                for (var index in this.list) {
                    arr.push(ultil.getType(this.list[index]))
                }
                return arr
            }
        }
    }
</script>

<style scoped>

</style>
