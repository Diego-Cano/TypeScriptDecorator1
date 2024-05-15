"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyTestClass = void 0;
var decoratorsSimpleLogger_1 = require("./decoratorsSimpleLogger");
var MyTestClass = /** @class */ (function () {
    function MyTestClass(property1, property2) {
        this.property1 = property1;
        this.property2 = property2;
        this._readOnlyProperty = 'Read Only';
    }
    MyTestClass.prototype.method1 = function () {
        console.log('Method1 executed');
    };
    MyTestClass.prototype.method2 = function () {
        console.log('Method2 executed');
    };
    Object.defineProperty(MyTestClass.prototype, "readOnlyProperty", {
        get: function () {
            return this._readOnlyProperty;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        decoratorsSimpleLogger_1.LogMethod
    ], MyTestClass.prototype, "method1", null);
    __decorate([
        decoratorsSimpleLogger_1.MyReadOnly
    ], MyTestClass.prototype, "readOnlyProperty", null);
    MyTestClass = __decorate([
        decoratorsSimpleLogger_1.SimpleLogger
    ], MyTestClass);
    return MyTestClass;
}());
exports.MyTestClass = MyTestClass;
