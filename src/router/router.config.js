import App from 'src/App'
// 代码分割  按需加载 =>require.ensure(dependencies: String[], callback: function(require), chunkName: String)
const newpage = () => import(/* webpackChunkName: "new" */ 'page/new')
const home = () => import(/* webpackChunkName: "home" */ 'page/home')
const test = () => import(/* webpackChunkName: "test" */ 'page/test')
const main = () => import(/* webpackChunkName: "main" */ 'page/main')
const clock = () => import(/* webpackChunkName: "clock" */ 'page/clock')
const boardOne = () =>
  import(/* webpackChunkName: "board_one" */ 'page/board_one')
const customFunction = () =>
  import(/* webpackChunkName: "custom_function" */ 'components/common/custom_function')

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        name: 'new',
        path: '/new',
        component: newpage
      },
      {
        name: 'clock',
        path: '/clock',
        component: clock
      },
      {
        name: 'board_one',
        path: '/board_one',
        component: boardOne,
        children: [
          {
            path: 'model1',
            component: customFunction
          },
          {
            path: 'model2',
            component: customFunction
          },
          {
            path: 'model3',
            component: customFunction
          }
        ]
      },
      {
        name: 'home',
        path: '/home',
        component: home,
        children: [
          {
            name: 'test',
            path: 'test',
            component: test
          },
          {
            name: 'main',
            path: 'main',
            component: main
          },
          {
            name: 'sub_home',
            path: 'home',
            component: home
          }
        ]
      },
      {
        path: '/test',
        component: test
      },
      {
        path: '/main',
        component: main
      },
      {
        path: '*',
        redirect: '/home'
      }
    ]
  }
]
