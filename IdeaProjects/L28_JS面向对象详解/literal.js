/**
 * Created by lamtszkuen on 16/7/5.
 */

    //2、基本面向对象
var person = {
    name:"iwen",
    age:29,
    eat:function(){
        alert("能吃")
    }
}
person.height = 178;
//alert(person.height);


//3、函数构造器构造对象
//第二种创建对象方法
function Person() {

}
Person.prototype = { //原型链
    name:"iwen",
    age:29,
    eat:function(){
        alert("好好吃")
    }
}
var p = new Person();
p.eat();