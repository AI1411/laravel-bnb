<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary mb-4">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link :to="{name: 'home'}" class="nav-link">
                        Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li>
                    <router-link class="btn nav-button" :to="{name: 'basket'}">
                        Basket
                        <span v-if="itemsInBasket" class="badge badge-secondary">{{ itemsInBasket }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        computed: {
            ...mapGetters({
                itemsInBasket: 'itemsInBasket'
            })
        }
    }
</script>

<style scoped>

</style>
