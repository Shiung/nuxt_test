<template>
  <section class="post-list">
    <PostPreview
      v-for="item in postList"
      :key="item.id"
      :idProps='item.id'
      :is-admin='isAdmin'
      :img="item.thumbnail"
      :title="item.title"
      :previewText="item.previewText" />
  </section>
</template>

<script>
export default {
  components: {
    PostPreview: () => import('@/components/Posts/PostPreview')
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    postList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>