const express=require('express');
const WorkoutLogModel = require('../models/workout-log-model')//така си взимам модела, който ще използвам за запис в базата (за създаването на инстанцията, която ще ми пази инфото)
const workoutLogRouter = express.Router(); //това позволява, ако има други пътища в модела те да си стоят в един и същи файл и след това закачам на него всичко и само router export-вам

workoutLogRouter.post('/create', (req, res)=>{//ще записваме така в базата
    //реално трием /workoutlog защото в mvc.js съм го задал като дифолтен
    
    const {name, exercises} = req.body; //деструкторираме body-то

    const mappedExercises = exercises.map((exercise)=>{
        return Object.assign({},exercise,{  //Object.assign е метод за копиране на обекти
            reps:Number(exercise.reps),   //тези неща се копират и се assign-ват и по-долу ги подаваме, за запазване в базата
            sets:Number(exercise.reps)
        })
    })
    const newWorkoutLog=new WorkoutLogModel({   //създаваме си каквото ще записваме в базата по точния начин, по който е модела!!!    
            name,               //името тук би трябвало да дойде от map-ването горе, ама не мисля, че ще стане
            date: new Date(),
            exercises:mappedExercises //това идва от по-горе променливата, която прави всъщност копие на requesta (в който се очаква да има нали тези данни)
    });

    newWorkoutLog.save(()=>{
        res.redirect('/')
    }); // по този начин това, кеото създадохме горе си го вкарваме в базата и връщаме съобщения някакво
    
})
.get('/create', (req, res)=>{ //реално трием /workoutlog защото в mvc.js съм го задал като дифолтен
    res.redirect('/');              //redirect ни праща на нов адрес след като нещо се случи
})
.get('/all', (req,res)=>{
    const query = WorkoutLogModel.find({}); //тук присвояваме цялата база по този начин
    query.limit[20];        //слагаме лимит някакъв, който не знам как работи
    query.exec((err,logs)=>{    //тук е все едно then. След като се върне базата правим callback-a
        if(err){
            throw err;
        }
        res.render("workout-logs",{ //пишем си кое view ще ползваме, а в mvc.js сме посочили в коя папка да ги търси
            logs:logs //създавайки анонимен обект с пропърти logs и подавайки му като value това, което ни връща базата всъщност пропъртито logs си го пишем в .hbs файла като {{#each logs}}
        })
    })
})
.get('/:logId',(req, res)=>{ //реално трием /workoutlog защото в mvc.js съм го задал като дифолтен
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
})
.get('/foo', (req,res)=>{        //Responsess - по този начин директно ще върнем на всеки достъпил този адрес файла в res.download()
        //реално трием /workoutlog защото в mvc.js съм го задал като дифолтен
        res.download('/app.js');
        //res.end();                    //понякога, ако не работи значи респонса преди това сам затваря res-а и второ затваряне ще го счупи
    })
    
    

    module.exports = workoutLogRouter;