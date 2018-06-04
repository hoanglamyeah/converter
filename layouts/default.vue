<template>
    <div class="is-fullheight is-default is-bold">
        <header class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <nuxt-link class="navbar-item" to="/">
                            <img src="../assets/logo.png" alt="Logo">
                        </nuxt-link>
                        <div class="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div id="navbarMenu" class="navbar-menu">
                        <div class="navbar-end">
                            <div class="tabs is-right">
                                <ul>
                                    <li class="is-active">
                                        <nuxt-link to="/">Home</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/about">About</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/help">Help</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <main class="hero-body">
            <div class="container has-text-centered">
                <nuxt/>
            </div>
        </main>
        <footer class="footer">
            <div class="container">
                <div class="content has-text-centered">
                    <img src="../assets/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
