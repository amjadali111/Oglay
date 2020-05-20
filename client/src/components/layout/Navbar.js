import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux';
import { render } from 'react-dom';

export const Navbar = (props) => {
    const {auth} = props;
    console.log(auth);
    //const {links} = auth.uid?<SignedInLinks/>:<SignedOutLinks/>
    return (
        <nav className="nav-wrapper blue ">
            <div className="container ">
                <Link to='/' className="brand-logo">OGLAY</Link>
                <div className="tabs tabs-transparent">
                    <SignedInLinks/>
                    <SignedOutLinks/>
                </div>
            </div>
        </nav>
    )
}
const mapStateToProps = (state) =>{
    console.log(state);
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)
