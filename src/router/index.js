import VueRouter from "vue-router";
import home from 'view/b-home';
import App from '@/App';
const comment = () =>
    import ("view/b-comment")
const detail = () =>
    import ("view/b-comment")
const item = () =>
    import ("view/b-item")
const mark = () =>
    import ("view/b-mark")
const tag = () =>

    import ("view/arti-tag")
const article = () =>
    import ("view/b-article")
const picture = () =>
    import ("view/childCom/b-picture.vue")
export default new VueRouter({
    routes: [{
        path: '/',
        component: App,
        children: [{
            path: '',
            redirect: 'home'
        }, {
            path: '/home',
            component: home,
            children: [{
                    path: '',
                    redirect: 'article',
                },
                {
                    path: 'article',
                    component: article
                }, {
                    path: 'comment',
                    component: comment
                }, {
                    path: 'item',
                    component: item
                }, {
                    path: 'mark',
                    component: mark
                }, {
                    path: 'tag',
                    component: tag
                }
            ]
        }, {
            path: '/detail',
            component: detail
        }, {
            path: '/picture',
            component: picture
        }]

    }],
    mode: 'history',

})