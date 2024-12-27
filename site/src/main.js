import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';
import '@/assets/css/global.css';

const app = createApp(App)
app.config.globalProperties.$apiUrl = "https://localhost:5000/"; //flask api url
app.use(router)
app.mount('#app')
