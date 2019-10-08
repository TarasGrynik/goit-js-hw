/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
class StringBuilder {
  constructor(str) {
    this._value = str;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value = this._value.split(' ');
    this._value.push(str);
    this._value = this._value.join('');
  }

  prepend(str) {
    this._value = this._value.split('');
    this._value.unshift(str);
    this._value = this._value.join('');
  }

  pad(str) {
    this._value = this._value.split('');
    this._value.unshift(str);
    this._value.push(str);
    this._value = this._value.join('');
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value);

builder.prepend('^');
console.log(builder.value);

builder.pad('=');
console.log(builder.value);
