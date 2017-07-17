// Copyright 2017 chaishushan{AT}gmail.com. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// https://github.com/chai2010/hello-ng2

import * as ngCore                   from '@angular/core'
import * as ngPlatformBrowser        from '@angular/platform-browser'
import * as ngPlatformBrowserDynamic from '@angular/platform-browser-dynamic'

@ngCore.Component({
	selector: 'my-app',
	template: `
		<h1>你好, {{name}}! - V1</h1>
	`,
	styles: [
		`h1 {color: #369; font-family: Arial, Helvetica, sans-serif; font-size: 250%;}`,
	],
})
export class MainComponent {
	name = '世界'
	size: number = 1024

	method() {}
}

@ngCore.NgModule({
	imports: [ ngPlatformBrowser.BrowserModule ],
	declarations: [ MainComponent ],
	bootstrap: [ MainComponent ],
})
export class MainModule {
	constructor() {
		//
	}
}

export function main() {
	ngPlatformBrowserDynamic.platformBrowserDynamic().bootstrapModule(MainModule)
}
