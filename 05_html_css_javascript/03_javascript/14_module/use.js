// use.js  외부 모듈 사용하는 파일

import {num,fun} from './a.js';
import {Person,fun2} from './b.js';

import kkk from './c.js';

console.log(num);
fun2();
var p = new Person();
console.log(kkk, kkk.name, kkk.age);