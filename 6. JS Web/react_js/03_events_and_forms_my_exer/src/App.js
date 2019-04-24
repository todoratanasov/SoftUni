import React, {Component} from 'react';
import './App.css';
import AppHeader from "./App/AppHeader";
import AppContent from "./App/AppContent";
import AppFooter from "./App/AppFooter";
import RegisterForm from './DynamicForm/RegisterForm'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user:null,
            games: [],
            hasFetched: false,
            loginForm: false,
        }
        this.fetchGames = this.fetchGames.bind(this);
    }

    registerUser(user) {
        // TODO: register a user and login        
        fetch('http://localhost:9999/auth/signup', {//по този начин се пращат данни към бекенда
            method: 'POST',//метода
            headers:{
                "Content-Type":"application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
                    },
            body:JSON.stringify(user)//stringify данни (в случая стейта)
        })
        .then(response=>response.json())
        .then(body=>{
            if(body.errors){
                body.errors.forEach((error)=>{
                    console.log(error)
                })
            }else{//когато се върне респонса от регистрацията си логвам в локалсториджа данните с цел да служат като токен
                localStorage.setItem('username', body.username);
                localStorage.setItem('userId', body.userId);
                this.setState({//тук добавяме новия потребител в state, за да може да се ползва (в случая за welcome user)
                    user:body.username
                })
            }

        })
    }

    loginUser(user) {
        // TODO: login a user and set sessionStorage items username and token
        fetch('http://localhost:9999/auth/signin', {//по този начин се пращат данни към бекенда
            method: 'POST',//метода
            headers:{
                "Content-Type":"application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
                    },
            body:JSON.stringify(user)//stringify данни (в случая стейта)
        })
        .then(response=>response.json())
        .then(body=>{
            if(body.errors){
                body.errors.forEach((error)=>{
                    console.log(error)
                })
            }else{//когато се върне респонса от регистрацията си логвам в локалсториджа данните с цел да служат като токен
                localStorage.setItem('username', body.username);
                localStorage.setItem('userId', body.userId);
                this.setState({//тук добавяме новия потребител в state, за да може да се ползва (в случая за welcome user)
                    user:body.username
                })
            }

        })
    }
    

    logout(event) {
       // TODO: prevent the default state
       // TODO: delete the data from the sessionStorage
       // TODO: update the state (user: null)
       localStorage.removeItem('username');
       localStorage.removeItem('userId');
       this.setState({
           user:null
       });
    }

    componentWillMount() {
        // TODO: check if there is a logged in user using the sessionStorage (if so, update the state, otherwise set the user to null)
        const localUsername = localStorage.getItem('username')
        if(localUsername ){
            this.setState({
                user: localUsername
            })
        }
       // TODO: fetch all the games
       this.fetchGames();
    }

    createGame(data) {
        // TODO: create a game using fetch with a post method then fetch all the games and update the state 
        fetch('http://localhost:9999/feed/game/create', {//по този начин се пращат данни към бекенда
            method: 'POST',//метода
            headers:{
                "Content-Type":"application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
                    },
            body:JSON.stringify(data)//stringify данни (в случая стейта)
        })
        .then(response=>response.json())
        .then(body=>{
            if(body.errors){
                body.errors.forEach((error)=>{
                    console.log(error)
                })
            }else{
                this.fetchGames();
            }

        })
    }

    fetchGames(){
        fetch('http://localhost:9999/feed/games')
            .then(rawData => rawData.json())
            .then(body=>this.setState({
                games:body.games
            }))
    }

    switchForm() {
        // TODO: switch the value of the loginForm property
        this.setState({//по този начин при викане на тази функция ще променя bool на loginform в стейта
            loginForm: !this.state.loginForm
        })
    }

    render() {
        return (
            <main>
                <AppHeader
                    user={this.state.user}
                    logout={this.logout.bind(this)}
                    switchForm={this.switchForm.bind(this)}
                    loginForm={this.state.loginForm}
                />
                <AppContent
                    registerUser={this.registerUser.bind(this)}
                    loginUser={this.loginUser.bind(this)}
                    games={this.state.games}
                    createGame={this.createGame.bind(this)}
                    user={this.state.user}
                    loginForm={this.state.loginForm}
                />
                <AppFooter/>
            </main>
        )
    }
}

export default App;


