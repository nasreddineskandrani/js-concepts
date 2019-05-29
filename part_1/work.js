console.log('part_1 - JavaScript Hoisting / scope - start');
//// https://www.w3schools.com/js/js_hoisting.asp
//// https://www.w3schools.com/js/js_scope.asp

var t = 1;
{
  t = 2;
}
console.log('a :', t);

var t = 1;
{
  let t = 2;
}
console.log('b :', t);

var t = 1;
{
  var t = 2;
}
console.log('c :', t);

var t = 1;
{
  const t = 2;
}
console.log('d :', t);

var t = 1;
test();
function test() {
 t = 2;
};
console.log('e :', t);

var t = 1;
function test() {
 var t = 2;
};
test();
console.log('f :', t);

var t = 1;
gg();
function gg() {
 var t = 2;
};
console.log('g :', t);

/* vv is not a function
var t = 1;
vv();
var vv = function() {
 var t = 2;
};
console.log('h :', t);
*/

var yy = function() {
 return func;
 function func() { return 71; }
};
const t = yy()
console.log('i :', t());

/* Error: t is not a function
var yy = function() {
  var func = 33;
  return func;
  function func() { return 72; }
};
const t = yy();
console.log('j :', t());
*/

/*
https://www.w3schools.com/js/js_hoisting.asp
This is because only the declaration of var not the initialization is hoisted to the top.
*/
var yy = function() {
  return func;
  function func() { return 73; }
  var func = 33;
};
const t = yy();
console.log('k :', t());

/*
https://www.w3schools.com/js/js_hoisting.asp
This is because only the declaration of var not the initialization is hoisted to the top.
*/
var yy = function() {
  return func;
  var func = 33;
  function func() { return 74; }
};
const t = yy();
console.log('l :', t());

console.log('part_1 - end');