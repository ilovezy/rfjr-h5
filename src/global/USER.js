let USER = {
  setToken(str) {
    localStorage.setItem('rfjr-h5-token', str)
  },
  getToken() {
    return localStorage.getItem('rfjr-h5-token')
  },
  isLogin() {
    return !!localStorage.getItem('rfjr-h5-token')
  },
  setLoginName(str) {
    localStorage.setItem('rfjr-h5-loginName', str)
  },

  getLoginName() {
    return localStorage.getItem('rfjr-h5-loginName')
  },

  logout() {
    localStorage.removeItem('rfjr-h5-token')
    localStorage.removeItem('rfjr-h5-loginName')
  }
}

export default USER
