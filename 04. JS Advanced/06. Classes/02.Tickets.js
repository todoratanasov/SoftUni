function ticket(arr,sortType) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = +price;
            this.status = status;
        }
    }
    let result=[];
    arr.forEach((x)=>{
        let input=x.split("|");
        let ticket=new Ticket(input[0],input[1],input[2]);
        result.push(ticket)
    });
    return result.sort((a,b)=>a[sortType]>b[sortType]);
}

ticket(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
)