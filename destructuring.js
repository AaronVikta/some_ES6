// pre ES6
 function foo(){
  return [1,2,3]
}

// var tmp = foo()
// a = tmp[0], b=tmp[1], c= tmp[2]

// console.log(a,b,c);

function bar(){
  return {
    x:4,
    y:5,
    z:6
  }
}

// var tmp = bar(),
// x=tmp.x, y=tmp.y, z= tmp.z
//
// console.log(x,y,z);

console.log("with ES6");
var [a,b,c] = foo()
console.log(a,b,c);

var {x:x, y:y, z:z} =bar()
console.log(x,y,z);

/* Object literals is in the form of
target:source while object destructuring
assignment are source:target an example of this
is shown below*/

var aa= 10, bb = 20;
var o ={u:aa, v:bb};
var {u:AA, v:BB} = o

// console.log(u,v);
console.log(AA,BB);

var o ={a:1, b:2, c:3}, a,b,c,p;
p = {a,b,c}=o;
console.log(a,b,c);
p===0

var o= {a:1, b:2, c:3},
p=[4,5,6],
a,b,c,x,y,z;
({a} ={b,c}= o);
[x,y]= [z]=p;

console.log(a,b,c);
console.log(x,y,z);

// var b = [ 1, ...a, 5 ];
// console.log( b ); // [1,2,3,4,5]
// Here we see that ...a
//  is spreading a out, since it appears
//  in the array [ .. ] value
// position. If ...a appears in an
// array destructuring position, it performs
//  the gather
// behavior:
// var a = [2,3,4];
// var [b, ...c] = a;
// console.log( b, c ); // 2 [3,4]

console.log("Default value assignment")
var [ a=3,b=6, c=9,d=12 ] = foo()
var {x=5, y=10, z=15, w=20}=bar()

console.log(a,b,c,d);
console.log(x,y,z,w);

console.log("Nested Destructuring");
var a1= [1,[2,3,4],5]
var o1 ={x:{y:{z:6}}}

var [a,[b,c,d],e]= a1;
var {x:{y:{z:w}}}= o1
console.log(a,b,c,d,e);
console.log(w);

console.log("Destructuring Parameters");
function gulp(x){
  console.log(x);
}
gulp(42)
// An array destructuring for Parameters
function dest_param([x,y]){
  console.log(x,y);
}
dest_param("\n",[1,2])
dest_param([1])
dest_param([])

function obj_param_dest({x,y}){
  console.log(x,y);
}
obj_param_dest({y:1,x:2})
obj_param_dest({y:42})
obj_param_dest({})
