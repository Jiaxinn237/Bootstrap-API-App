import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

const app = createApp(App)
app.use(router)
app.config.globalProperties.$toastr = toastr;
app.mount('#app')

toastr.options = {
    positionClass: 'toast-top-center',
  };