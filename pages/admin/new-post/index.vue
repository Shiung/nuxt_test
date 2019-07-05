<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
            <adminPostForm @submit="onSubmitted"/>
        </section>        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    components: {
        adminPostForm: () => import('@/components/Admin/adminPostForm')
    },
    methods: {
        onSubmitted (val) {
            let apiUrl = 'https://nuxt-learn2-api.firebaseio.com/posts.json'
            let data = { ...val, updatedDate: new Date() }
            axios
                .post(apiUrl, data)
                .then(result => console.log('axios', result))
                .catch(e => console.log(e))           
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
