function solve(arr) {
    let answer=[];
    arr.forEach((x)=>{
        let input=x.split(/[\W]+/).map((b)=>{
            if (b!=""){
                return b.toLowerCase();
            }
        });

        for (let word of input){
            if (!answer.includes(word)&&word!=undefined) {
                answer.push(word)
            }
        }
    });

    console.log(answer.join(", "))
}
solve(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']
)