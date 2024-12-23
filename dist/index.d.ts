/**
 * Internally to support end-to-end Typescript declarations and remain neutral to the various options for Foundry VTT
 * types available TRL uses a shim layer rather than choosing a single particular set of Foundry VTT types to associate
 * with. There are many advantages to this approach as various Foundry VTT platform type declaration efforts wax and
 * wane. This shim layer provides a minimal set of re-exported global types that are common between all known Foundry
 * VTT type efforts. This makes it easy to search the TRL codebase for where Foundry VTT platform declarations are used.
 * The TRL API docs treat these symbols as external links to the official Foundry VTT API docs providing end-to-end API
 * docs as well.
 *
 * The following sets of Foundry types are known to work:
 * - [foundry-pf2e](https://github.com/7H3LaughingMan/foundry-pf2e) (more stable / less specificity)
 * - [League's Community Types](https://github.com/League-of-Foundry-Developers/foundry-vtt-types) (detailed / often behind or broken)
 *
 * Please see the starter template repo, [template-svelte-ts](https://github.com/typhonjs-fvtt-demo/template-svelte-ts),
 * for a complete example.
 *
 * If you are using TypeScript with TRL for Foundry 3rd party development all you have to do is add in `tsconfig.json`:
 * ```jsonc
 * {
 *   "compilerOptions": {
 *     "types": [
 *       "foundry-pf2e/foundry",                   // Your chosen Foundry platform types.
 *       "@typhonjs-fvtt/runtime/types/fvtt-shim"  // The TRL FVTT API shim.
 *     ]
 *   }
 * }
 * ```
 * @internal
 *
 * @packageDocumentation
 */

declare global {
   /**
    * Re-exports global Foundry VTT types under a namespace shim to disambiguate global Foundry types referenced in TRL.
    *
    * @hidden
    */
   namespace fvtt
   {
      export { Application };
      export { ApplicationHeaderButton };
      export { ApplicationOptions };
      export { Folder };
   }
}

export {};
