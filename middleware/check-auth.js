export default function (context) {
    console.log("[Middleware] Check Auth")
    // 要確認是否為client 端模式 ,如果沒有此判斷會在 server side 的時候找不到localstorage 發生error
    if (process.client) {
        context.store.dispatch('initAuth')
    }
}