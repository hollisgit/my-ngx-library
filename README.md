<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/hollisgit/angular/master/demo/src/assets/logo.svg">
</p>

# angular - Angular library built with ❤ using ngx-library yeoman generator.

[![npm version](https://badge.fury.io/js/angular.svg)](https://badge.fury.io/js/angular),
[![Build Status](https://travis-ci.org/hollisgit/angular.svg?branch=master)](https://travis-ci.org/hollisgit/angular)
[![Coverage Status](https://coveralls.io/repos/github/hollisgit/angular/badge.svg?branch=master)](https://coveralls.io/github/hollisgit/angular?branch=master)
[![dependency Status](https://david-dm.org/hollisgit/angular/status.svg)](https://david-dm.org/hollisgit/angular)
[![devDependency Status](https://david-dm.org/hollisgit/angular/dev-status.svg?branch=master)](https://david-dm.org/hollisgit/angular#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/hollisgit/angular.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://hollisgit.github.io/angular

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `my-ngx-library` via:
```shell
npm install --save my-ngx-library
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `my-ngx-library`:
```js
map: {
  'my-ngx-library': 'node_modules/my-ngx-library/bundles/my-ngx-library.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'my-ngx-library';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'my-ngx-library';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'my-ngx-library';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2018 NGUYEN Khue. Licensed under the MIT License (MIT)

"# angular" 
