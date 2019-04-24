import React from "react";
import RegisterForm from "./RegisterForm";
import LogInForm from "./LoginForm";
import CreateForm from "../Games/CreateForm";

class DynamicForm extends React.Component {

    render() {
        return (
            <div>
                <div>
                    {
                        /*TODO: first render a form depending on wheather the loginForm property is true*/
                        // steps1 по този начин показваме register form-a защото го взимаме от другия файл където имаме компонент с това име и го подаваме на този компонент, който се рендва в App.js слагайки registerForm
                        // steps11 това, което копирахме от 10 го закачаме на формата
                        //steps 19 тук сега ще избираме дали да се показва login формата или register формата
                        // steps23 добавяме функцията, която ще ни хендълва логването loginUser={this.props.loginUser}
                        //steps24 сега ще направим проверка, ако сме логнати да се покаже формата за добавяне на игри
                        // steps29 подаваме на CreateForm функцията createGame={this.props.createGame} като props, за да може да си я викнем в createform.js
                        this.props.user ?
                        <CreateForm createGame={this.props.createGame}/>
                        :
                        (
                            this.props.loginForm ? (<LogInForm loginUser={this.props.loginUser}/>):
                            (<RegisterForm registerUser={this.props.registerUser}/>)
                        )

                    }
                </div>
            </div>
        )
    }
}

export default DynamicForm