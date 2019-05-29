console.log('part_1 - JavaScript Hoisting / scope - start');
//// https://www.w3schools.com/js/js_hoisting.asp
//// https://www.w3schools.com/js/js_scope.asp

var a = 1;
{
  a = 2;
}
console.log('a :', a);

var b = 1;
{
  let b = 2;
}
console.log('b :', b);

var c = 1;
{
  var c = 2;
}
console.log('c :', c);

var d = 1;
{
  const d = 2;
}
console.log('d :', d);

/* Error: e is not defined
test();
function test() {
 e = 2;
};
console.log('e :', e);
*/

var f = 1;
function test() {
 var f = 2;
};
test();
console.log('f :', f);

var g = 1;
gg();
function gg() {
 var g = 2;
};
console.log('g :', g);

/* vv is not a function
var h = 1;
hh();
var hh = function() {
 var h = 2;
};
console.log('h :', h);
*/

var ii = function() {
 return iii;
 function iii() { return 71; }
};
const i = ii();
console.log('i :', i());

/* Error: t is not a function
var jj = function() {
  var jjj = 33;
  return jjj;
  function jjj() { return 72; }
};
const j = jj();
console.log('j :', j());
*/

/*
https://www.w3schools.com/js/js_hoisting.asp
This is because only the declaration of var not the initialization is hoisted to the top.
*/
var kk = function() {
  return kkk;
  function kkk() { return 73; }
  var kkk = 33;
};
const k = kk();
console.log('k :', k());

/*
https://www.w3schools.com/js/js_hoisting.asp
This is because only the declaration of var not the initialization is hoisted to the top.
*/
var ll = function() {
  return lll;
  var lll = 33;
  function lll() { return 74; }
};
const l = ll();
console.log('l :', l());

console.log('part_1 - end');