function solve(arr) {
    let input=JSON.parse(arr);
    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
    console.log("<table>");
    console.log("<tr><th>name</th><th>score</th></tr>")
    for (let token of input){
        console.log(`<tr><td>${escapeHtml(token.name)}</td><td>${token.score}</td></tr>`);
    }
    console.log("</table>")
}
solve(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]'])