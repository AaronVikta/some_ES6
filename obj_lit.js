/*ES6 adds a number of important convenience
the humble {..} object literal. Enjoy*/
console.log("Concise Properties");
var x =2, y=3;
o = {
  x,
  y
}
// as opposed to
o={
  x:x,
  y:y
}

console.log("concise Methods");

var a = {
  x(){
    console.log("this is the x function");
  },
  y(){
    console.log("this is y function");
  }
}
console.log(a.x());

// as opposed to
var b ={
  x:function(){

  },
  y:function(){

  }
}

console.log("\nConcisely unnamed");
// function runSomething(o){
//   var x= Math.random()
//   var y = Math.random()
//   return o.something(x,y)
// }
//
// runSomething({
//   something:function something(x,y){
//     if(x>y){
//       // recursively call with 'x'
//       // and 'y' swaped
//       return something(y,x)
//     }
//     return y-x
//   }
// })

/* You should only use concise methods if you
are not going to do an event binding or a
recursion*/
console.log("Getters and Setters");
console.log(`this is the basics of
getters and setters`);

var item={
  __id:10,
  get id(){ return this.__id++},
  set id(v){ this.__id =v}
}

console.log(item.id);
console.log(item.id);
item.id = 30;
console.log(item.id);
console.log(item.__id);
console.log(item.__id);

console.log("computed property names");
var prefix ="user_";
var o = {
  baz:function(){},
  [prefix+"foo"]:function(){},
  [prefix+"bar"]:function(){}
}

console.log("Setting [[Prototype]]");
var o1 ={

};
var o2={
  __proto__:o1
}
// there is an Objec.setPrototypeOf method
// will be examined in chapter 6

console.log("Object Super");
var food1 = {
  foo(){
    console.log("food1:foo");
  }
}
var food2 = {
  foo(){
    super.foo();
      console.log("food2:foo");
  }
}

Object.setPrototypeOf(food2,food1)
food2.foo()
