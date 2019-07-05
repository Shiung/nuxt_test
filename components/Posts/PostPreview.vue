<template>
    <!-- <nuxt-link :to="idProps | linkPath" class="post-preview"> -->
    <nuxt-link :to="postLink" class="post-preview">
        <article>
            <div 
                class="post-thumbnail" 
                :style="imgStyle"></div>
            <div class="post-content">
                <h1>{{title}}</h1>
                <p>{{previewText}}</p>
            </div>
        </article>
    </nuxt-link>
</template>

<script>
export default {
    name: 'PostPreview',
    props: {
        idProps: {
            // type: Number,
            // default: 0
            type: String,
            required: true
        },
        title: {
            type: String,
            default: 'this is title'
        },
        previewText: {
            type: String,
            default: 'this is preview text'
        },
        img: {
            type: String,
            default: null
        },
        isAdmin: {
            type: Boolean,
            required: true
        }
    },
    filters: {
        linkPath (val) {
            return  `/posts/${val}`
        }
    },
    computed: {
        imgStyle () {
            if (this.img === null) return null
            return {
                backgroundImage: `url(${this.img})`
            }
        },
        postLink () {
            return this.isAdmin ? `/admin/${this.idProps}` : `/posts/${this.idProps}`
        }
    }
}
</script>

<style lang="scss" scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
