import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPost: []
        },
        mutations: {
            setPosts(state, payload) {
                state.loadedPost = payload
            }
        },
        actions: {
            // inital 抓取資料
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        // console.log(vuexContext)
                        // console.log(context)
                        vuexContext.commit("setPosts", [
                        {
                            id: 1,
                            title: "First Post",
                            previewText: "This is our first post!",
                            thumbnail:
                            "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
                        },
                        {
                            id: 2,
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
            }
        },
        getters: {
            loadedPost: state => state.loadedPost
        }
    })
}

export default createStore