// var Point = /** @class */ (function () {
//     function Point() {
//     }
//     return Point;
// }());
// var point = new Point();
// point.x = 1;
// point.x = 3;
// // class Rect { x1: number;  x2: number; y1: number; y2: number;}
// // let rect: Rect=new Rect();
// // rect.x1 = 1;
// // rect.x2 = 3;
// // rect.y1 = 9;
// // rect.y2 = 6;
// var Rect = /** @class */ (function () {
//     function Rect(x, y) {
//         this.MAX_COORD = 1000;
//         this.x1 = x;
//         this.x2 = x;
//         this.y1 = y;
//         this.y2 = y;
//     }
//     Rect.prototype.square = function () {
//         return Math.abs(this.x1 - this.x2) * Math.abs(this.y1 - this.y2);
//     };
//     return Rect;
// }());
// var rect1 = new Rect(10, 20);
// rect1.x1 = 5;
// rect1.x2 = 5;


class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}


class Triangle {
  constructor(point1, point2, point3) {
    this.point1 = point1;
    this.point2 = point2;
    this.point3 = point3;
  }
}


var triangle1 = new Triangle();


var point1 = new Point(0, 0);
var point2 = new Point(1, 0);
var point3 = new Point(0, 1);
var triangle2 = new Triangle(point1, point2, point3);


console.log("Triangle 1:");
console.log("Point 1:", triangle1.point1);
console.log("Point 2:", triangle1.point2);
console.log("Point 3:", triangle1.point3);

console.log("Triangle 2:");
console.log("Point 1:", triangle2.point1);
console.log("Point 2:", triangle2.point2);
console.log("Point 3:", triangle2.point3);


