// Copyright 2017 chaishushan{AT}gmail.com. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

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
