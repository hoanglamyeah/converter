<template>
    <div class="column is-4 sidebar">
        <b-collapse class="card" v-for="convert in converts" :key="convert.slug" :open="false">
            <div slot="trigger" slot-scope="props" class="card-header">
                <h4 class="card-header-title">
                    {{ convert.name }}
                </h4>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content has-text-left">
                <div class="content">
                    <ul>
                        <li v-for="unit in convert.data" :key="unit.id">
                            <nuxt-link :to="'/' + convert.slug + '/unit/' + unit.id">{{unit.name}} Converter</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </b-collapse>
    </div>
</template>

<script>
    import Data from '../../data/description';

    export default {
        name: "index",
        data() {
            return {
                converts: Data
            }
        }
    }
</script>

<style scoped>
    .sidebar .card-content {
        padding: 10px;
    }
</style>
