import Vue from 'vue'
import Sidebar from '../components/sidebar/index.vue'
import QuickConvert from '../components/quickconvert/index.vue'
import { Slider } from 'vue-color'
Vue.component('sidebar', Sidebar)
Vue.component('quick-convert', QuickConvert)
Vue.component('photoshop-picker', Slider)
