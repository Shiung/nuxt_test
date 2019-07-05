<template>
    <div class="about_page">
        <h1>this is my about page</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, natus.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, natus.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, natus.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, natus.</p>
    </div>
</template>

<script>
export default {
    head: {
      title: 'about title'  
    },
    mounted() {
      console.log(process.env.baseUrl)  
      console.log(this)
    },
}
</script>

<style lang="scss" scoped>
.about_page{
    color:$blue;
}
</style>
