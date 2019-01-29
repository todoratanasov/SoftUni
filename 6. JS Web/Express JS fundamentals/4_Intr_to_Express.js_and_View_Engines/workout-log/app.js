const express = require('express');
const app = express();
const port= 3000
const initData=require('./data'); //взимаме си функцията, която ни дава връзката с базата
const WorkoutLogModel = require('./data/models/workout-log-model')//така си взимам модела, който ще използвам за запис в базата (за създаването на инстанцията, която ще ми пази инфото)

initData();//извикваме си връзката към базата

app.get('/', (req, res)=>{              //по този начин слуша за '/' заявка и рендерира res.send() като ЗАДЪЛЖИТЕЛНО req и res са в този ред!!!!
    res.status(200)
    res.send('Hello world');
});
app.post('/workoutlog/create', (req, res)=>{//ще записваме така в базата

    const newWorkoutLog=new WorkoutLogModel({   //създаваме си каквото ще записваме в базата по точния начин, по който е модела!!!    
            name: "Back and biceps",
            date: new Date(),
            exercises:[
                {
                    name: "Pullups",
                    reps: 10,
                    sets: 10
                }
            ]        
    });

    newWorkoutLog.save(()=>{
        res.send("Successfuly created log")
    }); // по този начин това, кеото създадохме горе си го вкарваме в базата и връщаме съобщения някакво
    
});

app.get('/workoutlog/:logId',(req, res)=>{
    const logId=req.params.logId;           //request-а има проперти params и вътре logId

    const query = WorkoutLogModel.findById(logId) //WorkOutModel има пропърти logId (не знам как, тъй като не сме го задали ръчно)
    query.limit(1);                 //по този начин си лимитирам, ако искам резултатите до 1
    query.exec((err,result)=>{
        if(err){
            throw err
        };
        res.send(result);           //това би трябвало да е съдържанието срещу id-то 
    });
    //т.е. в случая, ако изпратим GET заявка на адрес http://localhost:3000/workoutlog/самото_ID ще върне съдържанието на това ID
});

app.get('/foo', (req,res)=>{        //Responsess - по този начин директно ще върнем на всеки достъпил този адрес файла в res.download()
    res.download('./app.js');
    //res.end();                    //понякога, ако не работи значи респонса преди това сам затваря res-а и второ затваряне ще го счупи
})

app.get('/workoutlog/create', (req, res)=>{
    res.redirect('/');              //redirect ни праща на нов адрес след като нещо се случи
})
app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
})