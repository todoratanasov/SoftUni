import React from 'react';
import './login.css';

class LogInForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:null,
            password:null,
        }
        this.handleChangeEvent = this.handleChangeEvent.bind(this)
    }
        handleChangeEvent(event){
            this.setState({
                [event.target.name]:event.target.value
            })
    
        }
    render() {
        return (
            <div className="Login">
                <h1>Login</h1>
                <form onSubmit={(event) => {
                    event.preventDefault();
                   // TODO: prevent the default behavior of the event and use the loginUser function by passing it the data from the form
                    this.props.loginUser(this.state)
                }}>
                    <label>Usersname</label>
                    <input type="text" name="username" onChange={this.handleChangeEvent} id="usernameLogin"/>
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.handleChangeEvent} id="passwordLogin"/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default LogInForm;
