function solve(arr) {
    let answer=[];

    arr.forEach((x)=>{
        let width=x[0];
        let height=x[1];
        let obj={
            width:width,
            height:height,
            area:function () {

                return this.width*this.height;
            },
            compareTo:function (other) {

                return other.area()-this.area()||other.width-this.width;
            }
        };
        answer.push(obj);
    });
    let final = answer.sort((a,b) =>a.area()-b.area()||a.height-b.height);

    return final;
}
solve([[10,5], [3,20], [5,12]]);

//Друго решение
function orderRectangles(input) {
    function createRect(width, height){
        let rect =  {
            width: width,
            height: height,
            area: function () {
                return rect.width * rect.height;
            },
            compareTo: function(other) {
                return other.area() - rect.area()|| other.width - rect.width;
            }
        };

        return rect;
    }

    let rects = [];
    for(let [width, height] of input){
        rects.push(createRect(width, height));
    }

    let sortedRects = rects.sort((a, b) => a.compareTo(b));

    return sortedRects;
};