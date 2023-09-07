import Cookies from 'js-cookie'

export const isAuth = () => {
    const isAuth = JSON.parse(localStorage.getItem('isAuth'))
    const token = Cookies.get('token')
    const localToken = JSON.parse(localStorage.getItem('token'))
    return  !!(isAuth && token && localToken)
}