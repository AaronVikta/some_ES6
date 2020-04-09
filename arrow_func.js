console.log("Arrow Functions")
var f1 =()=>12;
var f2 =x=>x*2;
var f3 =(x,y)=>{
  var z= x*2+y;
  y++;
  x*=3;
  return (x+y+z)/2
}

console.log(f3(2,3));
var a =[1,2,3,4,5]
a= a.map(v=>v*2)
console.log(a);

// dollabillsall
// var dollabillsall= (strings,...values){
//   strings.reduce((s,v,idx)=>{
//     if(idx>0){
//       if(typeof values[idx-1]==="number"){
//         s += `$${values[idx-1].toFixed(2)}`
//       }
//       else{
//         s +=values[idx-1]
//       }
//     }
//     return s+v
//   }, "")
// }

var alphas = ["a","b","c","d","e"]
for (var letter in alphas){
  console.log(letter);
}
for (var val of alphas){
  console.log(val);
}

// pre ES6 for..of
var alphas =["a","b","c","d","e"]
k= Object.keys(alphas);

for (var val, i=0; i<k.length; i++){
  val= alphas[k[i]]
  console.log(val);
}

// ES6 non for ..of equivalent
var alphas= ["a", "b", "c","d","e"]
  for (var val, ret, it = alphas[Symbol.iterator]();
  !(ret = it.next()) &&!ret.done;
){
  val = ret.value;
  console.log("\n");
  console.log(val);
}
// Here’s how to loop over the characters in
//  a primitive string:
for (var c of "hello") {
console.log( c );
}
