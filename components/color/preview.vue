<template>
    <div class="preview" v-bind:style="{ background: hex }"></div>
</template>

<script>
    export default {
        name: "preview",

        props: ['hex'],
    }
</script>

<style scoped>
    .preview {
        height: 50px;
        border-radius: 3px;
    }
</style>
