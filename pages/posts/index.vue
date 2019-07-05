<template>
    <div class="post_page">
        <postlist :postList='loadedPostAPI'/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    components: {
       postlist: () => import('@/components/Posts/PostList')
    },
    // 1. asyncdata mounted or created 加入 vuex
    // asyncData(context) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve({
    //                 loadedPosts: [
    //                     {
    //                         id: 1,
    //                         title: "First Post",
    //                         previewText: "This is our first post!",
    //                         thumbnail:
    //                             "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
    //                     },
    //                     {
    //                         id: 2,
    //                         title: "Second Post",
    //                         previewText: "This is our second post!",
    //                         thumbnail:
    //                             "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
    //                     }
    //                 ]
    //             })
    //         }, 1000)
    //         // reject(new Error())
    //     })
    //     .then(data => {
    //         return data
    //     })
    //     .catch(e => {
    //         contex.error(e)
    //     })
    // },
    // mounted () {
    //     // console.log(this.$store)
    //     this.$store.dispatch('set_posts', this.loadedPosts)
    // }
    // 2. fetch 執行vuex 在抓職
    // fetch(context) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve({
    //                 loadedPosts: [
    //                     {
    //                         id: 1,
    //                         title: "First Post",
    //                         previewText: "This is our first post!",
    //                         thumbnail:
    //                             "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
    //                     },
    //                     {
    //                         id: 2,
    //                         title: "Second Post",
    //                         previewText: "This is our second post!",
    //                         thumbnail:
    //                             "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
    //                     }
    //                 ]
    //             })
    //         }, 1000)
    //         // reject(new Error())
    //     })
    //     .then(data => {
    //         // return data
    //         context.store.dispatch('set_posts', data.loadedPosts)
    //     })
    //     .catch(e => {
    //         context.error(e)
    //     })
    // },
    computed: {
        ...mapGetters(['loadedPost', 'loadedPostAPI'])
    }
}
</script>

<style lang="scss" scoped>
.post_page{
    display: flex;
    justify-content: center;
    align-items: center;
    color:$blue;
}
</style>
