import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPost: [],
            loadedPostAPI: [],
            token: null
        },
        mutations: {
            setPosts(state, payload) {
                state.loadedPost = payload
            },
            setPostsAPI(state, payload) {
                state.loadedPostAPI = payload
            },
            addPostAPI (state, payload) {
                state.loadedPostAPI.push(payload)
            },
            editPostAPI(state, payload) {
                const postIndex = state.loadedPostAPI.findIndex(post => post.id === payload.id)
                state.loadedPostAPI[postIndex] = payload
            },
            setToken(state, payload) {
                state.token = payload
            }
        },
        actions: {
            // inital 抓取資料
            async nuxtServerInit(vuexContext, context) {
                // await axios.get('https://nuxt-learn2-api.firebaseio.com/posts.json')
                await context.app.$axios.$get('/posts.json')
                    .then(data => {
                        let arr = []
                        for (let key in data) {
                            arr.push({
                                ...data[key],
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
                // return axios.put(`https://nuxt-learn2-api.firebaseio.com/posts/${params.id}.json`, params)
                // 寫入firebase db 權限加入 auth 確認 https://<DATABASE_NAME>.firebaseio.com/post/name.json?auth=<ID_TOKEN>
                return this.$axios.$put(`https://nuxt-learn2-api.firebaseio.com/posts/${params.id}.json?auth=${context.state.token}`, params)
                    .then(res => {
                        context.commit('editPostAPI', params)
                    })
                    .catch(e => context.error(e))
            },
            add_post_api(context, params) {
                const createPost = {
                    ...params,
                    updatedDate: new Date()
                }
                return this.$axios.$post(`https://nuxt-learn2-api.firebaseio.com/posts.json?auth=${context.state.token}`, createPost)
                    .then(res => {
                        context.commit('addPostAPI', {
                            ...createPost,
                            id: res.name
                        })
                    })
                    .catch(e => context.error(e))
            },
            // 使用者權限
            authenticateUser(context, params) {
                let authUrl = params.isLogin
                    ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.firebaseAPIKey}`
                    : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.firebaseAPIKey}`  
                // 註冊 https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY] from firebase auth rest api document
                // 登入 https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY] from firebase auth rest api document
                return this.$axios.$post( authUrl, {
                    email: params.email,
                    password: params.password,
                    returnSecureToken: true
                }).then(result => {
                    context.commit('setToken', result.idToken)
                }).catch(e => console.log(e))
            }
        },
        getters: {
            loadedPost: state => state.loadedPost,
            loadedPostAPI: state => state.loadedPostAPI
        }
    })
}

export default createStore