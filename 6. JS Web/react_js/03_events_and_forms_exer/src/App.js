import React, {Component} from 'react';
import './App.css';
import AppHeader from "./App/AppHeader";
import AppContent from "./App/AppContent";
import AppFooter from "./App/AppFooter";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {            
            user: null,
            games: [],
            hasFetched: false,
            loginForm: false,
        }
    }
    
    registerUser(user) {
        // TODO: register a user and login
        //steps13 тук закачайки тази функция от state получаваме данните на user-a като обект, които ще предадем на бекенда, за да ни върне той нещо
        //steps14 правим си логиката за дърпане от базата като url-а си го събираме от rout-а на бекенда
        console.log(user)
        fetch('http://localhost:9999/auth/signup', {
            method:"POST",//казваме, че метода ще е post
            headers:{
                "content-type":"application/json"//това е стандартен хедър
            },
            body:JSON.stringify(user)
        })
        .then(response => response.json())//парсваме респонса защото идва json
        .then(body=>{
            if(body.errors){//проверка за грешки, които бекенда връща като обект
                body.errors.forEach(error=>{
                    console.log(error)
                })
            }
            else{//steps15 добавяме потребителя в локал сторидж
                localStorage.setItem('username', body.username)//по този начин вкарвам в local-а username и userId на мястото на токен, който трябва да върне бекенда
                localStorage.setItem('userId', body.userId);
                this.setState({//записваме в state-а user-а, който ни се връща при регистрацията
                    user:body.username
                })
            }
        })
    }

    loginUser(user) {
        // TODO: login a user and set sessionStorage items username and token
        //steps24 тук си kopy/paste начина на постване към бекенда и си нанасяме промените
        fetch('http://localhost:9999/auth/signin', {
            method:"POST",//казваме, че метода ще е post
            headers:{
                "content-type":"application/json"//това е стандартен хедър
            },
            body:JSON.stringify(user)
        })
        .then(response => response.json())//парсваме респонса защото идва json
        .then(body=>{
            if(body.errors){//проверка за грешки, които бекенда връща като обект
                body.errors.forEach(error=>{
                    console.log(error)
                })
            }
            else{
                localStorage.setItem('username', body.username)//по този начин вкарвам в local-а username и userId на мястото на токен, който трябва да върне бекенда
                localStorage.setItem('userId', body.userId);
                this.setState({//записваме в state-а user-а, който ни се връща при регистрацията
                    user:body.username
                })
            }
        });
    }

    logout(event) {
       // TODO: prevent the default state
       // TODO: delete the data from the sessionStorage
       // TODO: update the state (user: null)
        // steps25 сега ще оправим logout-a като в този случай трябва да трием от localStorage и сетваме в state
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        this.setState({
            user:null
        })

    }

    componentWillMount() {
        // TODO: check if there is a logged in user using the sessionStorage (if so, update the state, otherwise set the user to null)
        //steps17 тук сетваме, че ако има в localstorage username да го закачи към state, за да си стои там
        const localUsername = localStorage.getItem('username');
        if(localStorage.getItem('username')){
            this.setState({
                user:localUsername,
            })
        }
       // TODO: fetch all the games
    //    steps31 тук ще трябва да се викне отново функцията, която да изтегля игри от базата
    this.fetchGames();
    }

    createGame(data) {
        // TODO: create a game using fetch with a post method then fetch all the games and update the state 
        // steps29 от тук ще пратим новата игра към бекенда
        fetch('http://localhost:9999/feed/game/create', {
            method:"POST",//казваме, че метода ще е post
            headers:{
                "content-type":"application/json"//това е стандартен хедър
            },
            body:JSON.stringify(data)
        })
        .then(response => response.json())//парсваме респонса защото идва json
        .then(body=>{
            if(body.errors){//проверка за грешки, които бекенда връща като обект
                body.errors.forEach(error=>{
                    console.log(error)
                })
            }
            else{
                this.fetchGames();
            }
        });
    }
    // steps30 взимаме с тази функция игрите записани в базата

    fetchGames(){
        fetch('http://localhost:9999/feed/games')
            .then(rawData => rawData.json())
            .then(body=>{
                this.setState({
                    games:body.games
                })
            })
    }

    switchForm() {
        // TODO: switch the value of the loginForm property
        //steps18 тук ще използваме тази функция, за да може при клик да се сменя цялата форма на логин и регистер. Там това се случва с тернарен оператор

        this.setState({
            loginForm: !this.state.loginForm,//по този начин всеки път ще подава различна от моментата bool стойност
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


