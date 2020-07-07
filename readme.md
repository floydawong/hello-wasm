# Rust WebAssembly
> https://developer.mozilla.org/zh-CN/docs/WebAssembly/Rust_to_wasm  


## step  
```bash
npm adduser
> Username: yournpmusername
> Password:
> Email: (this IS public) you@example.com

wasm-pack build
cd pkg
npm publish --access=public
```

## hash error  
modify `.\hello-wasm\pkg\package.json`:  
```Json
{
  "name": "hello-wasm",
  "collaborators": [
    "Floyda <floyda@163.com>"
  ],
  "description": "A sample project with wasm-pack",
  "version": "0.1.2",
  "repository": {
    "type": "git",
    "url": "https://github.com/floydawong/hello-wasm"
  },
  "files": [
    "hello_wasm_bg.wasm",
    "hello_wasm.js",
    "hello_wasm_bg.js", // add this file
    "hello_wasm.d.ts"
  ],
  "module": "hello_wasm.js",
  "types": "hello_wasm.d.ts",
  "sideEffects": false
}
```
