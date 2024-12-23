declare global {
   /**
    * Re-exports global Foundry VTT types under a namespace shim to disambiguate global Foundry types referenced in TRL.
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
