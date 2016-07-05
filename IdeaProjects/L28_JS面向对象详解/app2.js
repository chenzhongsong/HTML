/**
 * Created by lamtszkuen on 16/7/5.
 */

(function(){
    var n = "ime";
    function Person(name){
        var _this = {}
        _this._name = name;
        _this.sayHello = function(){
            alert("sayHello,"+_this._name+","+n);
        }
        return _this;
    }
    window.Person = Person;
}());


function Teacher(name){
    var _this = Person(name);
    var supperSay = _this.sayHello;
    _this.sayHello = function(){ //重写
        supperSay.call(_this);//先调用父类的
        alert("teacher.hello,"+_this._name);
    }
    return _this;
}
var t = Teacher("iwen");
t.sayHello();