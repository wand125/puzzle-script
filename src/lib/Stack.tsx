export class Stack {
  private __a: Array<any>;
  constructor() {
    this.__a = [];
  }

  set(list: Array<any>) {
    this.__a = list;
  }

  push(o: any) {
    if (this.__a.length > 1000) {
      this.__a.shift();
    }
    this.__a.push(o);
  }
  pop() {
    if (this.__a.length > 0) {
      return this.__a.pop();
    }
    return null;
  }
  size() {
    return this.__a.length;
  }
  toString() {
    return "[" + this.__a.join(",") + "]";
  }
}
