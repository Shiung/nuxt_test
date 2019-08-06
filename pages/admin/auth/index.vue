<template>
    <div class="admin-auth-page">
      <div class="auth-container">
        <form @submit.prevent="onSubmit">
          <AppControlInput type="email" v-model="email">E-Mail Address</AppControlInput>
          <AppControlInput type="password" v-model="password">Password</AppControlInput>
          <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
          <AppButton
            type="button"
            btn-style="inverted"
            style="margin-left: 10px"
            @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex'
  export default {
    name: 'AdminAuthPage',
    data() {
      return {
        isLogin: true,
        email: '',
        password: ''
      }
    },
    methods: {
      ...mapActions(['authenticateUser']),
      onSubmit () {
        // let authUrl = this.isLogin
        //   ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.firebaseAPIKey}`
        //   : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.firebaseAPIKey}`
        // console.log(authUrl)  
        // // 註冊 https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY] from firebase auth rest api document
        // // 登入 https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY] from firebase auth rest api document
        // this.$axios.$post( authUrl, {
        //   email: this.email,
        //   password: this.password,
        //   returnSecureToken: true
        // }).then(result => {
        //   console.log(result)
        // }).catch(e => console.log(e))
        this.authenticateUser({
          isLogin: this.isLogin,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push('/admin')
        })
      }
    }
  }
  </script>
  
  <style scoped>
  .admin-auth-page {
    padding: 20px;
  }
  
  .auth-container {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 2px #ccc;
    width: 300px;
    margin: auto;
    padding: 10px;
    box-sizing: border-box;
  }
  </style>
  
  