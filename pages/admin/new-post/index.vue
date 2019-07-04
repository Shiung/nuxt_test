<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
            <adminPostForm/>
        </section>        
    </div>
</template>

<script>
export default {
    components: {
        adminPostForm: () => import('@/components/Admin/adminPostForm')
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
