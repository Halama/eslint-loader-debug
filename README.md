# eslint-loader-debug
Demo of eslint-loader error after upgrading Babel to version 6. Related to issue https://github.com/MoOx/eslint-loader/issues/66

This is picked from real application and only minimal relevant parts to the bug are left.

## Instalation

* clone the repo
* run npm install

## Error simulation

`npm start` - will run webpack with `eslint-loader` as preloader and `babel` as loader and will cause following error:

```
➜  elist-loader-debug git:(master) npm start

> eslint-loader-debug@1.0.0 start /Users/martinhalamicek/Development/sandbox/elist-loader-debug
> webpack-dev-server --config webpack-dev-server.js --hot --progress --colors --port 3000 --inline

 70% 1/1 build moduleshttp://localhost:3000/
webpack result is served from /scripts/
content is served from /Users/martinhalamicek/Development/sandbox/elist-loader-debug
 46% 3/5 build modulesThe react/jsx-quotes rule is deprecated. Please use the jsx-quotes rule instead.
Hash: 2e6d846ece12ed8494fc  
Version: webpack 1.12.3
Time: 2767ms
chunk    {0} bundle.js (bundle) 220 kB [rendered]
    [0] multi bundle 76 bytes {0} [built] [1 error]
    [1] (webpack)-dev-server/client?http://localhost:3000 2.14 kB {0} [built]
       [61] (webpack)/hot/only-dev-server.js 2.25 kB {0} [built]

ERROR in ./src/main.js
Module build failed: SyntaxError: /Users/martinhalamicek/Development/sandbox/elist-loader-debug/node_modules/eslint-loader/index.js!/Users/martinhalamicek/Development/sandbox/elist-loader-debug/src/main.js: Unexpected token (5:16)
  3 | import App from './App';
  4 | 
> 5 | ReactDOM.render(<App />, document.getElementById('app'));
    |                 ^
    at Parser.pp.raise (/Users/martinhalamicek/Development/sandbox/elist-loader-debug/node_modules/babylon/lib/parser/location.js:24:13)
    at Parser.pp.unexpected (/Users/martinhalamicek/Development/sandbox/elist-loader-debug/node_modules/babylon/lib/parser/util.js:91:8)
    at Parser.pp.parseExprAtom (/Users/martinhalamicek/Development/sandbox/elist-loader-debug/node_modules/babylon/lib/parser/expression.js:514:12)
    at Parser.pp.parseExprSubscripts (/Users/martinhalamicek/Development/sandbox/elist-loader-debug/node_modules/babylon/lib/parser/expression.js:267:19)
    at Parser.pp.parseMaybeUnary (/Users/martinhalamicek/Development/sandbox/elist-loader-debug/node_modules/babylon/lib/parser/expression.js:247:19)
    at Parser.pp.parseExprOps (/Users/martinhalamicek/Development/sandbox/elist-loader-debug/node_modules/babylon/lib/parser/expression.js:178:19)
    at Parser.pp.parseMaybeConditional (/Users/martinhalamicek/Development/sandbox/elist-loader-debug/node_modules/babylon/lib/parser/expression.js:160:19)
    at Parser.pp.parseMaybeAssign (/Users/martinhalamicek/Development/sandbox/elist-loader-debug/node_modules/babylon/lib/parser/expression.js:123:19)
    at Parser.pp.parseExprListItem (/Users/martinhalamicek/Development/sandbox/elist-loader-debug/node_modules/babylon/lib/parser/expression.js:978:16)
    at Parser.pp.parseCallExpressionArguments (/Users/martinhalamicek/Development/sandbox/elist-loader-debug/node_modules/babylon/lib/parser/expression.js:343:20)
 @ multi bundle
webpack: bundle is now VALID.
```

`npm run start-wo-eslint` Starts the same without `eslint-loader`. Everything is ok application is build and started.

`npm run lint` Runs only standalone `eslint` with same settings. It is also ok.

