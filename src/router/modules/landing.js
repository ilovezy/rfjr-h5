let landingRoute = [
  {
    path: '/landing/inviteFriend',
    name: 'inviteFriend',//更多
    meta: {
      title: '更多'
    },
    component: resolve => require(['@/views/landing/inviteFriendPage'], resolve)
  },
]
export default landingRoute
