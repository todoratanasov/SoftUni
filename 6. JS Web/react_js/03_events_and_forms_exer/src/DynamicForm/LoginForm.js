import React from 'react';
import './login.css';

class LogInForm extends React.Component {
    //steps20 тук копираме просто всичко от registerForm-ата и си го дооправяме, за да може да не се рефрешва всеки път браузъра
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {        
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <div className="Login">
                <h1>Login</h1>
                <form onSubmit={(event) => {
                    // TODO: prevent the default behavior of the event and use the loginUser function by passing it the data from the form
                    //steps21 спираме и тук дифолтното поведение на формата
                    event.preventDefault();
                    // steps24 тук вече извикваме onSubmit логин функцията
                    this.props.loginUser(this.state)
                }}>
                {/* steps22 тук отново си добавяме name атрибутите, и функцията, която ги хендълва за да работи формата */}
                    <label>Usersname</label>
                    <input type="text" onChange={this.handleChange} name="username" id="usernameLogin" />
                    <label>Password</label>
                    <input type="password" onChange={this.handleChange} name="password" id="passwordLogin" />
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

export default LogInForm;
