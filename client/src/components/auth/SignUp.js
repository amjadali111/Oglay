import React, { Component } from 'react'

export class SignUp extends Component {
    state={
        email:'',
        password:'',
        firstName:'',
        lastName:''
    }

   
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
   
    handleSubmit = (e) => {
        
        e.preventDefault();
        console.log(this.state);
    }
    
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign-Up</h5>
                   <br/><br/>
                   <div className="input-field col s6">
                        <label className="active" htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field col s6">
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                        <label className="active" htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="input-field col s6">
                        <label className="active" htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} className="validate"/>
                    </div> 
                    <div className="input-field col s6">
                        <label className="active" htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="form-control">
                        <button className="btn grey darken-1 z-depth-0">Register</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp
