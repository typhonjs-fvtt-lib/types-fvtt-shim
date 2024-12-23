# types-fvtt-shim
Provides a shim to namespace the various global Foundry VTT types accessed in TRL. This is an internal utility set of types making it easy to search the TRL codebase where Foundry VTT symbols are used.

The namespace is `fvtt` and it simply re-exports the global reference defined by most Foundry VTT typing efforts. The
following sets of Foundry types are known to work:
- [foundry-pf2e](https://github.com/7H3LaughingMan/foundry-pf2e) (more stable / less specificity)
- [League's Community Types](https://github.com/League-of-Foundry-Developers/foundry-vtt-types) (detailed / often behind or broken)


