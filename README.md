# @busyhe/ynn-middleware-success

封装成功的时候的response的Ynn中间件。

## Installation

```sh
$ npm install --save @busyhe/ynn-middleware-success
```

## Usage

```js
const Ynn = require( 'ynn' );
const success = require( '@busyhe/ynn-middleware-success' );
const app = new Ynn( {
    root : __dirname,
    debugging : Ynn.DEBUGGING_DANGER,
    logging : false
} );
app.use( success() );

app.use( ctx => {
    ctx.success( {
        list : []
    } );
} );

app.sham( '/' ).then( res => {
    console.log( res ); // 返回 { "status" : 0, "message" : "success", "list" : [] }
} );
```
