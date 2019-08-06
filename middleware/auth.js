export default function (context) {
    console.log("[Middleware] Just Auth");
    !context.store.getters.isAuthenticated && context.redirect('/admin/auth')
}