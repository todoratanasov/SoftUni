function solve(a,b,oper) {
   let add= function (a,b) {
       return a+b;
   }
   let sub=(a,b) => {return a-b};
   let mult=function (a,b) {
       return a*b;
   }
   let div=(a,b) => {return a/b};

   let answer=0;

   if (oper==="+"){
       answer=add;
   }else if(oper==="-"){
       answer=sub;
   }else if(oper==="*"){
       answer=mult;
   }else if(oper==="/"){
       answer=div;
   }

    console.log(answer(a,b));;
}
solve(2,4,'*')