/**
 * Created by lamtszkuen on 16/7/5.
 */

/*
function People(name) {
    this._name = name;
}

People.prototype.say = function(){ //通过原型链添加say属性
    alert("peo-hello"+this._name);
}

function Student(name) {
    this._name = name;
}
Student.prototype = new People(); //继承
var supperSay = Student.prototype.say;
Student.prototype.say = function(){ //重写
    supperSay.call(this);
    alert("stu-hello"+this._name);
}
var s = new Student("iwen");
s.say();
*/






//下面是更加面向对象写法
(function(){
    var n = "ime";
    function People(name) {
        this._name = name;
    }

    People.prototype.say = function(){ //通过原型链添加say属性
        alert("peo-hello"+this._name+n);
    }
    window.People = People;
}());

(function(){
    function Student(name) {
        this._name = name;
    }
    Student.prototype = new People(); //继承
    var supperSay = Student.prototype.say;
    Student.prototype.say = function(){ //重写
        supperSay.call(this);
        alert("stu-hello"+this._name); //这儿不加n了 访问不到
    }
    window.Student = Student;
}());
var s = new Student("iwen");
s.say();