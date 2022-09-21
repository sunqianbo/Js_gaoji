/**
 * 自定义模块1
 */
function myModule(){
   var msg = 'abc'
   function daxie(){
     console.log(msg.toUpperCase());
   }
   function xiaoxie(){
    console.log(msg.toLowerCase());
   }
   return {
    daxie,
    xiaoxie
   }
}
 
// function fn(){
//   var msg = 'abc'
//   function a(){
//     console.log(msg);
//   }
//   function b(){
//     console.log(msg.toLowerCase());
//   }
//   return {
//     a,b
//   }
// }
// var f = fn()
// f.a()
// f.b()
