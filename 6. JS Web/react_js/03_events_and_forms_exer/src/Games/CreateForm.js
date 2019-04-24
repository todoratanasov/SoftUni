import React from 'react';

//steps26 тук ще си създадем формата за създаване на игри, но тъй като това не е class компонент си изнасяме функциите извън компонената
const innerState = {
    title:null,
    description:null,
    imageUrl:null
}

const handleChange = (event)=>{
    // this.setState({
    //     [event.target.name]:event.target.value
    // })
    // steps29 ъпдейтваме innerstate с информацията, която получаваме от от onChange
    innerState[event.target.name]=event.target.value;
}

const CreateForm = (props) => {
   

    return (
        <div className="create-form">
            <h1>Create game</h1>
            <form onSubmit={(event) => {
                // TODO: prevent the default behaviour of the click event, call the createGame function and pass it the data from the form
                //steps27 спираме дифолтното поведение
                event.preventDefault();
                // steps30 викаме си функцията, която сме подали на props във формата
                props.createGame(innerState);
                
            }}>
            {/* steps28 добавяме си функцита onChange, която ще ни променя state-а и си добавяме name атрибутите*/}
                <label>Title</label>
                <input type="text" name="title" onChange={handleChange} id="title"/>
                <label>Description</label>
                <textarea type="text" name="description" onChange={handleChange}  id="description"/>
                <label>ImageUrl</label>
                <input type="text" name="imageUrl" onChange={handleChange}  id="imageUrl"/>
                <input type="submit" value="Create"/>
            </form>
        </div>
    )
};

export default CreateForm;

