/** @type {import('@typhonjs-build-test/esm-d-ts').GenerateConfig[]} */
const configs = [
   { input: './src/league/league.ts', output: './dist/league/index.d.ts', tsconfig: 'src/league/tsconfig.json', prependString: ['export {};'] },
   { input: './src/pf2e/pf2e.ts', output: './dist/pf2e/index.d.ts', tsconfig: 'src/pf2e/tsconfig.json', prependString: ['export {};'] },
];

export default configs;
