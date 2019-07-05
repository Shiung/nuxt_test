<template>
  <div class="home-page">
    <section class="intro">
    <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
    
      <PostList :postList="loadedPosts"/>
    </section>
  </div>
</template>

<script>
export default {
  components: {
    PostList: () => import('@/components/Posts/PostList')
  },
  // data 用async data ssr渲染 (不能使用this 來控制 components)
  asyncData(context, callback) {
    // console.log(context)
    // console.log('asyncData is excuted!')
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: '1',
            title: "First Post",
            previewText: "This is our first post!",
            thumbnail:
              "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
          },
          {
            id: '2',
            title: "Second Post",
            previewText: "This is our second post!",
            thumbnail:
              "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
          }
        ]
      });
    }, 1500)
  },
  // asyncData({params}, callback) {
  //   setTimeout(() => {
  //     callback(null, {
  //       loadedPosts: [
  //         {
  //           id: 1,
  //           title: "First Post",
  //           previewText: "This is our first post!",
  //           thumbnail:
  //             "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
  //         },
  //         {
  //           id: 2,
  //           title: "Second Post",
  //           previewText: "This is our second post!",
  //           thumbnail:
  //             "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
  //         }
  //       ]
  //     });
  //   }, 1500)
  // },

  // data () {
  //   return {
  //     loadedPosts: []
  //   }
  // },
  // mounted () {
  //   setTimeout(() => {
  //     this.loadedPosts = [
  //       {
  //         id: 1,
  //         title: 'first post',
  //         previewText: 'this is our first post',
  //         thumbnail: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
  //       },
  //       {
  //         id: 2,
  //         title: 'second post',
  //         previewText: 'this is our second post',
  //         thumbnail: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
  //       }
  //     ]
  //   }, 1500)
  // }
}
</script>

<style lang="scss" scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>