
const initState = {
    authError:null
}

export const authReducer = (state=initState,action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error') 
        return{
            ...state,
            authError:'login failed.'
        }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return{
                ...state, // here state is null i.e. initial state not comming from store
                authError:null // 
            }
        case 'SIGNOUT_SUCCESS': 
            console.log('logout success')
            return state;
        default:
           return state
    }
}

export default authReducer
