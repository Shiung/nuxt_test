<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
            <adminPostForm @submit="onSubmitted"/>
        </section>        
    </div>
</template>

<script>
// import axios from 'axios'
import { mapActions } from 'vuex'
export default {
    middleware: ['check-auth', 'auth'],
    components: {
        adminPostForm: () => import('@/components/Admin/adminPostForm')
    },
    methods: {
        ...mapActions(['add_post_api']),
        onSubmitted (val) {
            // let apiUrl = 'https://nuxt-learn2-api.firebaseio.com/posts.json'
            // let data = { ...val, updatedDate: new Date() }
            // axios
            //     .post(apiUrl, data)
            //     .then(result => console.log('axios', result))
            //     .catch(e => console.log(e))
            this.add_post_api(val)
                .then(() => {
                    this.$router.push('/admin')
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
    @media (min-width: 768px) {
        width: 500px;
    }
}

</style>
