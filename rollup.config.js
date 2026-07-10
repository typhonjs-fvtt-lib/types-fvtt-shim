import typescript       from '@rollup/plugin-typescript';
import { generateDTS }  from '@typhonjs-build-test/esm-d-ts';

// Produce sourcemaps or not.
const sourcemap = true;

/**
 * @returns {import('rollup').RollupOptions[]}
 */
export default () =>
{
   return [
      // Main Distribution -------------------------------------------------------------------------------------------
      {
         input: 'src/predicate/index.ts',
         output: [{
            file: './dist/predicate/index.js',
            format: 'es',
            generatedCode: { constBindings: true },
            sourcemap,
         }],
         plugins: [
            typescript({ tsconfig: './src/predicate/tsconfig.json' }),
            generateDTS.plugin({ tsDiagnosticLog: false }),
         ]
      }
   ];
}
