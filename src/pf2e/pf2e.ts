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
      };
   }
}

// Generic types -----------------------------------------------------------------------------------------------------

type FVTTDocument = foundry.abstract.Document;
type FVTTDocumentConstructor = DocumentConstructorOf<foundry.abstract.Document> & typeof foundry.abstract.Document;
type FVTTDocumentCollection = DocumentCollection<any>
type FVTTEmbeddedCollection = foundry.abstract.EmbeddedCollection<any>;

// Missing declarations ----------------------------------------------------------------------------------------------

interface FavoriteFolder {
   /** The source of the folder (e.g. "data", "public") */
   source: string;
   /** The full path to the folder */
   path: string;
   /** The label for the path */
   label: string;
}
