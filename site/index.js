const js = import("./node_modules/@floyda/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});
