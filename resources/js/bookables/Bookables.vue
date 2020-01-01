<template>
    <div class="container">
        <h1>Title</h1>
        <bookable-list-item
            :item-title="bookable1.title"
            :item-content="bookable1.content"
            :price="1500">
        </bookable-list-item>
    </div>
</template>

<script>
    import BookableListItem from "./BookableListItem";

    export default {
        components: {
            BookableListItem
        },
        data() {
            return {
                bookable1: {
                    title: null,
                    content: null
                },
                bookable2: {
                    title: 'kdvna:',
                    content: 'dkanv;kd'
                }
            }
        },
        created() {
            console.log(this.bookable1);
            console.log(this.bookable2);

            setTimeout(() => {
                this.bookable1 = {
                    title :'Expensive villa',
                    content: 'a very cheap villa'
                }
            }, 5000)
        }
    }
</script>

<style scoped>

</style>
