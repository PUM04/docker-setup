#include <stdlib.h>
#include <emscripten/emscripten.h>

#ifdef __cplusplus
#define EXTERN extern "C"
#endif

// Compile this file with
// emcc increment.cpp -o increment.js -s "EXPORTED_RUNTIME_METHODS=['ccall']" -s EXPORT_ES6=1 -s MODULARIZE=1

EXTERN EMSCRIPTEN_KEEPALIVE int increment(int i)
{
    return ++i;
}