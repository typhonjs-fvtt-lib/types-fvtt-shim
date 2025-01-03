# types-fvtt-shim
DO NOT USE / INSTALL

This is a utility package that is included in TRL via:
- `@typhonjs-fvtt/runtime/types/fvtt-shim/league`
- `@typhonjs-fvtt/runtime/types/fvtt-shim/pf2e`

Internally to support end-to-end Typescript declarations and remain neutral to the various options for Foundry VTT
types available TRL uses a shim layer rather than choosing a single particular set of Foundry VTT types to associate
with. There are many advantages to this approach as various Foundry VTT platform type declaration efforts wax and
wane. This shim layer provides a minimal set of re-exported global types that are common between all known Foundry
VTT type efforts. This makes it easy to search the TRL codebase for where Foundry VTT platform declarations are used.
The TRL API docs treat these symbols as external links to the official Foundry VTT API docs providing end-to-end API
docs as well.

The following sets of Foundry types are known to work:
- [League's Community Types](https://github.com/League-of-Foundry-Developers/foundry-vtt-types) (detailed / often behind or broken)
- [foundry-pf2e](https://github.com/7H3LaughingMan/foundry-pf2e) (more stable / less specificity)

Please see the starter template repos for complete examples:
- [Coming Soon!] [template-svelte-ts-league (League's Community Types)](https://github.com/typhonjs-fvtt-demo/template-svelte-ts),
- [template-svelte-ts-pf2e (PF2E Types)](https://github.com/typhonjs-fvtt-demo/template-svelte-ts),


If you are using TypeScript with TRL for Foundry 3rd party development all you have to do is add in `tsconfig.json`:

#### League's Community Types:
```jsonc
{
  "compilerOptions": {
    "types": [
      "@league-of-foundry-developers/foundry-vtt-types",  // League Types.
      "@typhonjs-fvtt/runtime/types/fvtt-shim/league"     // The TRL FVTT API shim.
    ]
  }
}
```

#### PF2E Types:
```jsonc
{
  "compilerOptions": {
    "types": [
      "foundry-pf2e/foundry",                       // PF2E Types.
      "@typhonjs-fvtt/runtime/types/fvtt-shim/pf2e" // The TRL FVTT API shim.
    ]
  }
}
```
