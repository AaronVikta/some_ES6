// use 'strict'
console.log(" working with spread and rest operators");

function foo(x,y,z){
  console.log(x,y,z)
}

foo(...[1,2,3])

console.log("\n");
console.log("using a spread for concatenation of arrays");

var a =[2,3,4]
var b =[1,...a,5];

console.log(b);

console.log("\n when ... is used as a rest(to gather a set of values)");

function foo(x,y,...z){
  console.log(x,y,z);
}
foo(1,2,3,4,5,6);

/*if you don't have any named parameters
the ... gathers all the arguments*/
function bar(...args){
  console.log("initial args");
  console.log(args);
  console.log("\n performing a shift on the args")
  args.shift()
  console.log(...args);
}
bar(1,3,5,7,9,11);
