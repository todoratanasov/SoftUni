function BMI() {

function getStatus() {
    if (bmi<18.5){
        return "underweight"
    } else if (bmi<25){
        return "normal"
    } else if(bmi<30){
        return "overweight";
    } else {
        return "obese"
    }
}
    let [name,age,weight,height]=arguments;
    let heightInMeters = height/100;
    let bmi=Math.round(weight/Math.pow(heightInMeters,2));

    let status = getStatus();
    //тук като стринг, е това, което е върнала getStatus функцията

    let evaluation = {
        name: name,
        personalInfo:{
            age:age,
            weight:weight,
            height:height
        },
        BMI:bmi,
        status:status
    };

    if (status==="obese"){
        evaluation.recommendation="admission required";
    }

    return evaluation;

}
BMI('Peter', 29, 75, 182)