<template>
    <div class="admin-post-page">
        <section class="update-form">
            <adminPostForm :post="loadedPost" @submit="onSubmitted"/>
        </section>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'
export default {
    middleware: ['auth'],
    components: {
        adminPostForm: () => import('@/components/Admin/adminPostForm')
    },
    // data () {
    //     return {
    //         loadedPost: {
    //             author: 'Maximilian',
    //             title: 'My awesome Post',
    //             content: 'Super amazing, thanks for that!',
    //             thumbnail: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
    //             previewText: "This is our first post!"
    //         } 
    //     }
    // }
    asyncData(context) {
        // return axios.get(`https://nuxt-learn2-api.firebaseio.com/posts/${context.params.postId}.json`)
        return context.app.$axios.$get(`/posts/${context.params.postId}.json`)
            .then(data => {
                return data
                    ? { loadedPost: data }
                    : {
                        loadedPost: {
                            id: 1,
                            title: `First Post (ID:${context.params.postId})`,
                            previewText: "This is our first post!",
                            author: 'jack',
                            updatedDate: new Date(),
                            content: 'jiosjadoijasodjoiasjdijc askpodoaksdopk koapskcoksapdkosk psak ',
                            thumbnail: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
                        }
                    }
            })
            .catch(e => context.error(e))
    },
    methods: {
        ...mapActions(['edit_post_api']),
        onSubmitted (val) {
            // console.log(val)
            let data = {
                ...val,
                id: this.$route.params.postId,
                updatedDate: new Date()
            }
            this.edit_post_api(data).then(() => {
                this.$router.push('/admin')
            }).catch(e => console.log('這是error',e)) 
        } 
    }
}
</script>