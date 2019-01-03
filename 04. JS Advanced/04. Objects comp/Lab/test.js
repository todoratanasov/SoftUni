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
    console.log(sortedRects)
    return sortedRects;
};
orderRectangles([[10,5], [3,20], [5,12]])
    [ { width: 5,
    height: 12,
    area: [Function: area],
compareTo: [Function: compareTo] },
{ width: 3,
    height: 20,
    area: [Function: area],
    compareTo: [Function: compareTo] },
{ width: 10,
    height: 5,
    area: [Function: area],
    compareTo: [Function: compareTo] } ]