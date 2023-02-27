import { useState, useEffect } from "react";

interface EmscriptenFunctionModule extends EmscriptenModule {
  ccall: typeof ccall;
}

/**
 * This hook instantiates and returns an Emscripten WASM module.
 * If the module is instantiated, it is returned.
 *
 * @param createModule function which creates a new Emscripten WASM module
 * @returns EmscriptenFunctionModule
 */
export const useWasm = (
  createModule: EmscriptenModuleFactory<EmscriptenFunctionModule>
): EmscriptenFunctionModule => {
  const [wasmModule, setWasmModule] = useState<EmscriptenFunctionModule>();
  useEffect(() => {
    const loadWasm = async () => {
      const wasm = await createModule();
      setWasmModule(wasm);
    };
    loadWasm();
  }, [createModule]);
  return wasmModule as EmscriptenFunctionModule;
};

/**
 * This hook compiles and instantiates a .wasm binary and returns its exports.
 * If already instantiated, it is returned.
 *
 * @param file path to .wasm file
 * @returns exported function definitions
 */
export const useWasmFile = (file: string): Record<string, CallableFunction> => {
  const [wasmModule, setWasmModule] = useState<WebAssembly.Exports>();
  useEffect(() => {
    const loadWasm = async () => {
      const wasmContent = await fetch(file);
      const wasmModule = await WebAssembly.instantiateStreaming(wasmContent);

      if (wasmModule === undefined) throw Error("Could not load WASM.");
      setWasmModule(wasmModule.instance.exports);
    };
    loadWasm();
  }, [file]);
  return wasmModule as Record<string, CallableFunction>;
};
