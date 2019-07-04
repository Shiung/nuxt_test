<template>
    <div class="single_post_page">
        <section class="post">
            <h1 class="post_title">{{loadedPost.title}}</h1>
            <div class="post_details">
                <div class="post_detail">Last updated on {{loadedPost.updatedDate}}</div>
                <div class="post_detail">write by {{loadedPost.author}}</div>
            </div>
            <p>{{loadedPost.content}}</p>
        </section>
        <section class="post_feedback">
            <p>let meknow what you think about the post , send a mail to <a href="mailto:feedback@google.com">feedback@google.com</a></p>
        </section>
    </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    // console.log(context)  
    setTimeout(() => {
        callback(null, {
            loadedPost: {
                id: 1,
                title: `First Post (ID:${context.params.id})`,
                previewText: "This is our first post!",
                author: 'jack',
                updatedDate: new Date(),
                content: 'jiosjadoijasodjoiasjdijc askpodoaksdopk koapskcoksapdkosk psak ',
                thumbnail: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
            }
        })
    }, 1000)
  },  
}
</script>

<style lang="scss" scoped>
.single_post_page{
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
    .post {
       width: 100%; 
    }
    @media screen and (min-width: 768px) {
        .post {
            width: 600px;
            margin: auto;
        }
    }
    .post_title{
        margin: 0;
    }

    .post_details{
        padding: 10px;
        box-sizing: border-box;
        border-bottom: 3px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column; 
        @media screen and (min-width: 768px) {
            flex-direction: row;
        }
        .post_detail{
            color: rgb(88, 88, 88);
            margin: 0 10px;
        }
    }
    .post_feedback{
        a {
            color: red;
            text-decoration: none;
            &:hover,
            &active {
                color: salmon;
            }
        }
    }
}
</style>
