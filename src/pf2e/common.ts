/**
 * @hidden
 */
declare global {
   /**
    * Re-exports common global types between `pf2e` and `league` types.
    *
    * @hidden
    */
   namespace fvtt
   {
      export {
         Application,
         ApplicationOptions,
         ClientDocument,
         CompendiumCollection,
         Folder,
         FontFamilyDefinition,   // League is not in common / remapped.
         Game,
         RollTable
      };
   }
}

export {};
