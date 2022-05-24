import App from "@/pages/App";
import SecondPage from "@/pages/SecondPage";
import HomePage from "@/pages/HomePage";

let routes = [
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

export default routes