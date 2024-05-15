import { SimpleLogger, LogMethod, MyReadOnly } from './decoratorsSimpleLogger';

@SimpleLogger
export class MyTestClass {
  constructor(public property1: string, public property2: number) {}

  @LogMethod
  method1() {
    console.log('Method1 executed');
  }

  method2() {
    console.log('Method2 executed');
  }

  private _readOnlyProperty: string = 'Read Only';

  @MyReadOnly
  get readOnlyProperty() {
    return this._readOnlyProperty;
  }
}
