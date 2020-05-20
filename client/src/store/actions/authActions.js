
export const signIn = (credentials) => {
    return (dispatch, getState,{getFirebase})=>{
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type: 'LOGIN_SUCCESS'})// dispatch will send action over reducer i.e. authReducer
        }).catch((err)=>{
            dispatch({type:'LOGIN_ERROR',err})
        })
    }
}

export const signOut = () =>{
    return (dispatch, getState,{getFirebase})=>{
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'})
        })
    }
}

//export default signOut
