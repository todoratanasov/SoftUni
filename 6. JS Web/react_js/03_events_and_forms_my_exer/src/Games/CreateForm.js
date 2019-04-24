import React from 'react';

const innerState = { //по този начин си симулираме state
    title:null,
    description:null,
    imageUrl:null
}

   
const handleChangeEvent=(event)=>{
    
    innerState[event.target.name] = event.target.value
}
const CreateForm = (props) => {
 


    return (
        <div className="create-form">
            <h1>Create game</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                // TODO: prevent the default behaviour of the click event, call the createGame function and pass it the data from the form
                props.createGame(innerState)
            }}>
                <label>Title</label>
                <input type="text" name="title" onChange={handleChangeEvent} id="title"/>
                <label>Description</label>
                <textarea type="text" name="description" onChange={handleChangeEvent} id="description"/>
                <label>ImageUrl</label>
                <input type="text" name="imageUrl" onChange={handleChangeEvent} id="imageUrl"/>
                <input type="submit" value="Create"/>
            </form>
        </div>
    )
};

export default CreateForm;

