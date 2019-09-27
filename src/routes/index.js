
const routes = [
  {
    path: 'home',
    name: '主页'
  },
  {
    path: '',
    name: '',
    meta: {
      permission: [10]
    },
    children: [
      {
        path: '',
        name: '',
        meta: {
          permission: [10]
        }
      }
    ]
  }
];

export default routes;
