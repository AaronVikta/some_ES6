function bar(val){
  console.log("Bar is called");
  return y +val
}

function foo(x=y+3, z=bar(x)){
  console.log(x,z);
}
var y =5;
foo()
foo(10)

y=6;
foo(undefined, 10)

var w=1, z=2;
function foo(x=w+1, y=x+1, z=y+1){
  console.log(w,x,z);
}
foo()

/*trying to use a variable without initialization
will always lead to a TDZ error*/
