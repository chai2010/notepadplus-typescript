// Copyright 2017 chaishushan{AT}gmail.com. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

const fs = require('fs')

import * as fs2 from 'fs'

import {xxx} from 'fs'

namespace Math {
	export function add(x, y) { ... }
}

type Maybe<T> = T | void;
function isDefined<T>(x: Maybe<T>): x is T {
	return x !== undefined && x !== null;
}

async function printDelayed(elements: string[]) {
	for(const element of elements) {
		await delay(200);
		console.log(element);
	}
}

let symbol = new Symbol();
let map = new Map();
let list: Array<number> = [1, 2, 3];
let a: any = null

let u: undefined = undefined;

function error(message: string): never {
    throw new Error(message);
}

function f1() {}
function f2(){}

export function f3() {}
export function f4(x: number) {
	if(1 == 2) {
		//
	}
}

class class1{}

class class2{
	name = ''
}

export class class3{
	name = ''
}

class class4 {
	a = 1
	b:number = 2
	c? = 3

	get d():number{ return 1 }
	set d(x: number){}

	readonly e = 1
	public f = 1
	private g = 1
	protected h = 1

	public readonly i = 1

	get(){}
	set(){}

	@f4
	foo() {}
}
export class class5 implements pkg.interfacex {
	constructor() {

		iffoor()

		// bug
		foo()

		foo22()

		// bug
		if(1 == 2) {
			//
		}

		for() {}
		switch() {}
		forfor()

		// bug
		let x = {
			a: 1,
			b: 2,
		}
		//
	}

	method() {
	}
}
export class class6 extends pkg.classx {
	constructor() {
		//
	}
}
export class class7 extends pkg.classx[''] {
	constructor() {
		//
	}
}

function resolveAfter2Seconds(x) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(x);
		}, 2000);
	});
}

async function async_f1() {
	var x = await resolveAfter2Seconds(10);
	console.log(x); // 10
}

export async function async_f2() {
	var x = await resolveAfter2Seconds(10);
	console.log(x); // 10
}

// best: use tab as indent
interface StringerTab {
	String(): string
}

// WARNNING: indent only support tab/2space/4space
// regexp: ^(\t|[ ]{2,4})
interface Stringer2space {
  String(): string
}
interface Stringer3space {
   String(): string
}
interface Stringer4space {
    String(): string
}

class Stringer2spaceClass {
  String(): string {
    // WARNNING: also show in funclist!
    notMethod()
  }
}

// WARNNING: funclist, don't support 1space indent
interface Stringer1 {
 String(): string
}

global['aa'] = 'aa'
process.argv
console.log(1)

setTimeout()
clearTimeout()
setInterval()
clearInterval()

module
exports.hello = function(){}
__filename
__dirname
require

