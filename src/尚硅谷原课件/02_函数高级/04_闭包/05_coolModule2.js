/**
 * 自定义模块2
 */

(function(window){
    var msg = "abc";
    function daxie() {
      console.log(msg.toUpperCase());
    }
    function xiaoxie() {
      console.log(msg.toLowerCase());
    }
    window.a = {
      daxie,
      xiaoxie
    }
})(window)