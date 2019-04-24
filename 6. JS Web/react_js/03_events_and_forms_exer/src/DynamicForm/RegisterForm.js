import React from 'react';
import './register.css';

class RegisterForm extends React.Component {
    //steps3 правим си initial state в този клас
    constructor(props){
        super(props);
        this.state={
            username: null,
            password: null,
            email:null
        }
        //steps7 bind-ваме си функцията както и всяка друга
        this.handleChange=this.handleChange.bind(this);
        

    }
    //steps4 тук си създаваме функция, която да ни променя стейта взимайки стойностите от някъде (формата) взимайки данните от name: полетата на input-a
    handleChange(event){
        //steps8 слагаме console.log, за да си проверим дали минават някакви данни през тази функция по този начин като event.target.name всъщност е името на инпут полето, което е активно, а event.target.value е стойността му:
        console.log(event.target.name, '=>', event.target.value );
        // steps9 по този начин си променяме state-а
        this.setState({
            [event.target.name]:event.target.value,
        })
    }
    render() {
        return (
            <div className="Register">
                <h1>Sign Up</h1>
                <form onSubmit={(event) => {
                    // TODO: second prevent the default behavior of the event and use the registerUser function by passing it the data from the form
                    event.preventDefault();//steps2 по този начин караме формата да не рефрешва страницата защото сме в SPA
                    console.log(this.state)//steps3 тук всъщност ще праща стейта при всеки събмит
                    //steps12 тук си извикваме registerUser като подаваме state
                    this.props.registerUser(this.state)
                }}>
                
                    {/* steps5 тук добавяме name атрибутите, за да може да вземем стойностите */}
                    {/* steps6 добавяме onChange евент на всяко поле, който ще минава през нашия метод handleChange */}
                    
                    <label>Username</label>
                    <input type="text" onChange={this.handleChange} name="username" id="usernameReg"/>
                    <label>Email</label>
                    <input type="text" onChange={this.handleChange} name="email" id="emailReg"/>
                    <label>Password</label>
                    <input type="password" onChange={this.handleChange} name="password" id="passwordReg"/>
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }
}
export default RegisterForm;