import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from "@/components/HelloWorld"
import App from "@/pages/App";
import HomePage from "@/pages/HomePage";
import SecondPage from "@/pages/SecondPage";

Vue.use(Router)

export default new Router({
    routes: [

        {
            name: 'App'
            , path: '/'
            , component: App
        },

        {
            name: 'HomePage'
            , path: '/homepage'
            , component: HomePage
        },

        {
            name: 'SecondPage'
            , path: '/secondpage'
            , component: SecondPage
        }
    ]
})