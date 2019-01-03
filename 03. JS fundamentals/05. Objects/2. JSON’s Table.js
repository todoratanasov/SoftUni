function solve(arr) {
    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
    console.log("<table>")
    arr.forEach((x)=>{
        let input=JSON.parse(x);
        console.log("   <tr>");
        for (let token in input){

            console.log(`        <td>${escapeHtml(input[token].toString())}</td>`)
        };
        console.log("   </tr>")

    });
    console.log("</table>")
}
solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
)