"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyReadOnly = exports.LogMethod = exports.SimpleLogger = void 0;
function SimpleLogger(constructor) {
    var original = constructor;
    function construct(constructor, args) {
        console.log("New instance created with args: ".concat(JSON.stringify(args)));
        return new (constructor.bind.apply(constructor, __spreadArray([void 0], args, false)))();
    }
    var newConstructor = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return construct(original, args);
    };
    newConstructor.prototype = original.prototype;
    return newConstructor;
}
exports.SimpleLogger = SimpleLogger;
function LogMethod(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Method ".concat(propertyKey, " called with args: ").concat(JSON.stringify(args)));
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
exports.LogMethod = LogMethod;
function MyReadOnly(target, propertyKey, descriptor) {
    descriptor.set = function () {
        throw new Error("".concat(propertyKey, " is read-only"));
    };
    return descriptor;
}
exports.MyReadOnly = MyReadOnly;
