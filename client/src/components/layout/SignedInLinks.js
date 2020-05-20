import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import { signOut } from '../../store/actions/authActions'


export const SignedInLinks = (props) => {
    console.log(props.signOut)
    return (
        <ul className="right ">
           <li className="tab" ><NavLink to='/create'>New Project</NavLink></li> 
           <li className="tab" ><a onClick= {props.signOut}>Log Out</a></li> 
           <li><NavLink to='/' className="btn btn-floating pink lighten-1">No Where</NavLink></li> 
        </ul>
    )
}
const mapDispatchToProps = (dispatch) =>{
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)
