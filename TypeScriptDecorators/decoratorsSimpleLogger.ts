export function SimpleLogger<T extends { new(...args: any[]): {} }>(constructor: T) {
    const original = constructor;
  
    function construct(constructor: T, args: any[]) {
      console.log(`New instance created with args: ${JSON.stringify(args)}`);
      return new constructor(...args);
    }
  
    const newConstructor: any = function (...args: any[]) {
      return construct(original, args);
    }
  
    newConstructor.prototype = original.prototype;
    return newConstructor;
  }
  
  export function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
      console.log(`Method ${propertyKey} called with args: ${JSON.stringify(args)}`);
      return originalMethod.apply(this, args);
    };
  
    return descriptor;
  }
  
  export function MyReadOnly(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.set = function() {
      throw new Error(`${propertyKey} is read-only`);
    };
    return descriptor;
  }
  