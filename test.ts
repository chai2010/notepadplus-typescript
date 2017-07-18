// Copyright 2017 chaishushan{AT}gmail.com. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

const fs = require('fs')

import * as fs2 from 'fs'

function f1() {}
function f2(){}

export function f3() {}
export function f4(x: number) {}

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

