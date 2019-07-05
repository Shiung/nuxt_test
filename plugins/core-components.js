// component 聚集 在nuxt.config 引入plug 全域

import Vue from 'vue'

import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'


Vue.component('AppControlInput', AppControlInput)
Vue.component('AppButton', AppButton)