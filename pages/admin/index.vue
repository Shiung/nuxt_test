<template>
    <div class="admin_page">
        <section class="new-post">
            <AppButton 
                style="margin-top:10px;"
                @click="$router.push('/admin/new-post')"
            >Create Post</AppButton>
        </section> 
        <section class="existing-post">
            <h1>Exsiting Post</h1>
            <PostList :isAdmin='true'/>
        </section> 
    </div>
</template>

<script>
export default {
    components: {
        PostList: () => import('@/components/Posts/PostList'),
        AppButton: () => import('@/components/UI/AppButton')
    }
}
</script>

<style lang="scss" scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
