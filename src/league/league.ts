import './common';

/**
 * Re-exports global Foundry VTT types under a namespace shim to disambiguate global Foundry types referenced in TRL.
 *
 * @hidden
 *
 * @packageDocumentation
 */
declare global {
   /**
    * @hidden
    */
   namespace fvtt
   {
      export {
         ApplicationHeaderButton,
         FVTTDocument as Document,
         FVTTDocumentConstructor as DocumentConstructor,
         FVTTDocumentCollection as DocumentCollection,
         FVTTEmbeddedCollection as EmbeddedCollection,
         EnrichmentOptions,
         FavoriteFolder,
         FontFamilyDefinition
      };
   }
}

// Generic types -----------------------------------------------------------------------------------------------------

type FVTTDocumentCollection = DocumentCollection<any, any>
type FVTTEmbeddedCollection = foundry.abstract.EmbeddedCollection<any, any>;

// Remapped types ----------------------------------------------------------------------------------------------------

type ApplicationHeaderButton = Application.HeaderButton;
type EnrichmentOptions = TextEditor.EnrichmentOptions;
type FavoriteFolder = FilePicker.FavoriteFolder;
type FVTTDocument = foundry.abstract.Document.Any;
type FVTTDocumentConstructor = foundry.abstract.Document.AnyConstructor;
type FontFamilyDefinition = CONFIG.Font.FamilyDefinition;

export {};
