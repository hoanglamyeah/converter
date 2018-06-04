<template>
    <div class="container">
        <section class="mtb-2">
            <div class="columns is-vcentered">
                <div class="column is-7">
                    <h1 class="title is-4">Quick Converter</h1>
                    <quick-convert :list="['length','weight','time', 'angle','data', 'temperature']"></quick-convert>
                </div>
                <div class="column is-5">
                    <figure class="image is-4by3">
                        <img src="https://picsum.photos/300/250/?random" alt="Description">
                    </figure>
                </div>
            </div>
        </section>
        <section class="mtb-2 has-text-left">
            <div class="container mtb-2 is-fullhd fantastic">
                <div class="notification">
                    <div class="columns is-center is-centered">
                        <div class="column is-8">
                            <nav class="level">
                                <div class="level-item has-text-centered">
                                    <div>
                                        <p class="heading">Tweets</p>
                                        <p class="title">3,456</p>
                                    </div>
                                </div>
                                <div class="level-item has-text-centered">
                                    <div>
                                        <p class="heading">Following</p>
                                        <p class="title">123</p>
                                    </div>
                                </div>
                                <div class="level-item has-text-centered">
                                    <div>
                                        <p class="heading">Followers</p>
                                        <p class="title">456K</p>
                                    </div>
                                </div>
                                <div class="level-item has-text-centered">
                                    <div>
                                        <p class="heading">Likes</p>
                                        <p class="title">789</p>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <h2 class="title is-5">About</h2>
            <p>A unit is a measurement of a quantity that is defined or adopted by tradition or law. Other quantities
                can be
                expressed as a multiple of the unit.</p>
        </section>
        <section class="has-text-left">
            <h2 class="title is-5">More converter</h2>
            <div class="tile is-ancestor has-text-centered is-multiline columns">
                <div class="tile is-parent is-3 column" v-for="type in types" :key="type.id">
                    <article class="tile is-child box fantastic">
                        <p class="title">
                            <nuxt-link :to="type.slug">{{type.name}}</nuxt-link>
                        </p>
                        <p class="subtitle">Converter</p>
                    </article>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import ultil from '../func/until'

    export default {

        components: {},
        data: () => {
            return {
                isOpen: false
            }
        },

        head() {
            return {

                title: "AIConverter - Unit Converter by Artificial intelligence",
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'AIConverter is a converter using artificial intelligence, online unit conversion tool will help you convert measurement units fastest'
                    }
                ]
            }
        },

        methods: {
            converts(type) {
                return ultil.getAll(type)
            },
        },

        computed: {
            colors() {
                return ultil.getAll('color')
            },

            types() {
                return ultil.getAllType()
            }
        },

        created() {
        }

    }
</script>
