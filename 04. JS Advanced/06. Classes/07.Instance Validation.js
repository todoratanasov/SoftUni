class CheckingAccount {
    constructor(clientId,email,firstName,lastName){
        this.clientId=clientId;
        this.email=email;
        this.firstName=firstName;
        this.lastName=lastName
    }
    get clientId(){
        return this._clientId;
    }
    set clientId(val){
        
        if(!/^\d{6}$/.test(val)){
            throw new TypeError("Client ID must be a 6-digit number")
        }
        this._clientId=val;
    }
    get email(){
        return this._email;
    }
    set email(val){
        if (!/^[a-zA-Z0-9]{1,}@[a-z.]+$/.test(val)){        //по този начин пишем регекс, който тества
                                                            //contain at least one alphanumeric character, followed
                                                            // by the @ symbol, followed by one or more letters or
                                                            //periods; all letters must be Latin;
            throw new TypeError("Invalid e-mail");
        }
        this._email=val;
    }
    get firstName(){
        return this._fristName;
    }
    set firstName(val){
        if (val.length<3||val.length>20){
            throw new TypeError("First name must be between 3 and 20 characters long")
        }
        if (!/^[a-zA-Z]{3,20}$/.test(val)) {                //Регекс, който тества само латински с дължина от 3 до 20
            throw new TypeError(`First name must contain only Latin characters`)
        }
        this._firstName = val;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(val){
        if (val.length<3||val.length>20){
            throw new TypeError(`Last name must be between 3 and 20 characters long`)
        }
        if (!/^[a-zA-Z]{3,20}$/.test(val)) {                //Регекс, който тества само латински с дължина от 3 до 20
            throw new TypeError(`Last name must contain only Latin characters`)
        }
        this._lastName = val;
    }

}