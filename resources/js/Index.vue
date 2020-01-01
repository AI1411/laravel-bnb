<template>
    <div class="container">
        <Navbar/>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Navbar from "./components/Navbar";

    export default {
        components: {
            Navbar
        }
    }
</script>

<style scoped>

</style>
