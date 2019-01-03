function solve(arr) {
    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
    function createTable(arr1){
        let firstRow="<tr>";
        for (token of arr1){
            firstRow+=`<th>${token}</th>`
        }
        firstRow+="</tr>";
        return firstRow;
    }
    function createRows(arr2){
        let rows="<tr>";
        for (let token of arr2){
            rows+=`<td>${token}</td>`;
        }
        rows+="</tr>";
        return rows;
    }
    let input=JSON.parse(arr);
    let answer=[];
    console.log("<table>")
    for (let token of input.slice(0,1)){
        let obj={};
        let keys=Object.keys(token).map((x)=>{
            return escapeHtml(x);
        });
        console.log(createTable(keys));

    };
    for (let token of input.slice(0)){
        let values=Object.values(token).map((x)=>{
            return escapeHtml(x.toString());
        });
        console.log(createRows(values))
    }
    console.log("</table>")


}
solve(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']
)