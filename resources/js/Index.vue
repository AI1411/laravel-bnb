<template>
    <div class="container mt-4 mb-4 pr-4 pl-4">
        <Navbar/>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';
    import Navbar from "./components/Navbar";

    export default {
        components: {
            Navbar
        },
        data() {
            return {
                lastSearch: this.$store.state.lastSearch
            }
        },
        computed: {
            ...mapState({
                lastSearchComputed: 'lastSearch'
            }),
            ...mapGetters({
               itemsInBasket : 'itemsInBasket'
            }),
            somethingElse() {
                return 1 + 2;
            }
        }
    }
</script>

<style scoped>

</style>
