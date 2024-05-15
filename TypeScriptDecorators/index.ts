import { MyTestClass } from './MyTestClass';

const myTestClassInstance = new MyTestClass('Test', 123);
myTestClassInstance.method1();
myTestClassInstance.method2();
console.log(myTestClassInstance.readOnlyProperty);
