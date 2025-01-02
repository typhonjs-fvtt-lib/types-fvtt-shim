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
 * @internal
 *
 * @packageDocumentation
 */
declare global {
   /**
    * Foundry VTT types used in comments / `{@link ...}` tags only.
    */
   namespace trl_fvttc {

   }

   /**
    * Re-exports global Foundry VTT types under a namespace shim to disambiguate global Foundry types referenced in TRL.
    *
    * @hidden
    */
   namespace fvtt
   {
      export {
         ClientDocument,
         Application,
         ApplicationOptions,
         Folder,
         Game,
      };
   }
}

// ['__global.Application', 'https://foundryvtt.com/api/classes/client.Application.html'],
// ['__global.ApplicationHeaderButton', 'https://foundryvtt.com/api/types/hookEvents.ApplicationHeaderButton.html'],
// ['__global.ApplicationOptions', 'https://foundryvtt.com/api/interfaces/client.ApplicationOptions.html'],
// ['__global.foundry.abstract.Document', 'https://foundryvtt.com/api/classes/foundry.abstract.Document.html'],
// ['__global.game', 'https://foundryvtt.com/api/classes/client.Game.html'],
// ['__global.DocumentCollection', 'https://foundryvtt.com/api/classes/client.DocumentCollection.html'],
// ['__global.EnrichmentOptions', 'https://foundryvtt.com/api/interfaces/client.EnrichmentOptions.html'],
// ['__global.FavoriteFolder', 'https://foundryvtt.com/api/interfaces/client.FavoriteFolder.html'],
// ['__global.Folder', 'https://foundryvtt.com/api/classes/client.Folder.html'],
// ['__global.FontFamilyDefinition', 'https://foundryvtt.com/api/interfaces/client.FontFamilyDefinition.html'],
// ['__global.RollTable', 'https://foundryvtt.com/api/classes/client.RollTable.html'],

export {};
