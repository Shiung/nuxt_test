export default function ({$axios, redirect}) {
    $axios.onRequest(config => {
        // console.log('Making request to ' + config.url)
    })
    $axios.onResponse(res => {
        // console.log(`nuxtaxios res :`,res)
    })
    $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/400')
        }
    })
}