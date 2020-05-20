import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'

export class SignIn extends Component {
    state={
        email:'',
        password:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
   
    handleSubmit = (e) => {
        e.preventDefault();
       // console.log(this.state);
       this.props.signIn(this.state);
    }

    render() {
        const {authError} = this.props;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign-In</h5>
                   <br/><br/>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div> 
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">LogIn</button>
                    </div>
                    <div className="red-text">
                        { authError? <p className="center">{authError}</p> : null }
                    </div>
                </form>
            </div>
        )
    }
}
const maptStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signIn: (creds) => dispatch(signIn(creds))// signIn: (creds) called and passed argument from the component
                                                  // dispatch(signIn(creds)) passes creds to signIn() action then to reducer  
    }
}

export default connect(maptStateToProps, mapDispatchToProps)(SignIn)
