<template>
    <div class="admin-post-page">
        <section class="update-form">
            <adminPostForm :post="loadedPost"/>
        </section>
    </div>
</template>

<script>
export default {
    components: {
        adminPostForm: () => import('@/components/Admin/adminPostForm')
    },
    data () {
        return {
            loadedPost: {
                author: 'Maximilian',
                title: 'My awesome Post',
                content: 'Super amazing, thanks for that!',
                thumbnailLink: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
            } 
        }
    }
}
</script>