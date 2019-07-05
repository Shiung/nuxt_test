import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPost: [],
            loadedPostAPI: []
        },
        mutations: {
            setPosts(state, payload) {
                state.loadedPost = payload
            },
            setPostsAPI(state, payload) {
                state.loadedPostAPI = payload
            },
            editPostAPI(state, payload) {
                const postIndex = state.loadedPostAPI.findIndex(post => post.id === payload.id)
                state.loadedPostAPI[postIndex] = payload
            }
        },
        actions: {
            // inital 抓取資料
            async nuxtServerInit(vuexContext, context) {
                await axios.get('https://nuxt-learn2-api.firebaseio.com/posts.json')
                    .then(res => {
                        let arr = []
                        for (let key in res.data) {
                            arr.push({
                                ...res.data[key],
                                id: key
                            })
                        }
                        vuexContext.commit('setPostsAPI', arr)
                    })
                    .catch(e => context.error(e))
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        // console.log(vuexContext)
                        // console.log(context)
                        vuexContext.commit("setPosts", [
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
                        ]);
                        resolve();
                    }, 1000);
                });
            },
            set_posts(context, params) {
                context.commit('setPosts', params)
            },
            set_posts_api(context, params) {
                context.commit('setPostsAPI', params)
            },
            edit_post_api(context, params) {
                return axios.put(`https://nuxt-learn2-api.firebaseio.com/posts/${params.id}.json`, params)
                    .then(res => {
                        context.commit('editPostAPI', params)
                    })
                    .catch(e => context.error(e))
            }
        },
        getters: {
            loadedPost: state => state.loadedPost,
            loadedPostAPI: state => state.loadedPostAPI
        }
    })
}

export default createStore