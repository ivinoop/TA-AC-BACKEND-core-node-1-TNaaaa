function square(a) {
   return a * a;
}

function rectangle(length, breadth) {
  return length * breadth;
}

function circle(radius) {
  return Math.PI * radius * radius;
}

module.exports = {
  square,
  rectangle,
  circle
};