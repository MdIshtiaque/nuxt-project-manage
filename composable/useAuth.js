import useAxios from "~/composable/useAxios.js";

export default function useAuth() {
    const user = useState('auth-user', () => null);

    const {api, csrf} = useAxios()

    const errorBag = useState('auth-error-bag', () => ({
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    }))

    function login(userForm) {
        csrf().then(() => {
            api.post('/api/login', userForm).then(({data}) => {
                console.log("data: ", data)
            }).catch(err => {
                console.log("error: ", err)
            })
        })
    }
    function register(userForm) {

    }
    function logout() {

    }

    return {login, register, logout, errorBag}
}