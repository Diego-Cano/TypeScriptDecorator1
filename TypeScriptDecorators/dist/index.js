"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyTestClass_1 = require("./MyTestClass");
var myTestClassInstance = new MyTestClass_1.MyTestClass('Test', 123);
myTestClassInstance.method1();
myTestClassInstance.method2();
console.log(myTestClassInstance.readOnlyProperty);
