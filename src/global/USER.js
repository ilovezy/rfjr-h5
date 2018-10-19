let USER = {
  setToken(str) {
    localStorage.setItem('token', str)
  },
  getToken() {
    return localStorage.getItem('token')
  },
  isLogin() {
    return !!localStorage.getItem('token')
  },
  setLoginName(str) {
    localStorage.setItem('loginName', str)
  },

  getLoginName() {
    return localStorage.getItem('loginName')
  },

  setPassword(str) {
    localStorage.setItem('password', str)
  },
  getPassword() {
    return localStorage.getItem('password')
  },

  setHebaoCode(str) {
    localStorage.setItem('hebaoCode', str)
  },

  getHebaoCode() {
    return localStorage.getItem('hebaoCode')
  },

  removeHebaoCode(){
    localStorage.removeItem('hebaoCode')
  },

  setSelectProductTab(str){
    localStorage.setItem('selectProductTab', str)
  },

  getSelectProductTab(){
    return localStorage.getItem('selectProductTab')
  },
  removeSelectProductTab(){
     localStorage.removeItem('selectProductTab')
  },
  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('loginName')
    localStorage.removeItem('password')
    localStorage.removeItem('hebaoCode')
  }
}

export default USER
