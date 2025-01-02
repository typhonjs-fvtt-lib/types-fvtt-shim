/**
 * Re-exports global Foundry VTT types under a namespace shim to disambiguate global Foundry types referenced in TRL.
 *
 * @hidden
 *
 * @packageDocumentation
 */
export {};
/**
 * @hidden
 */
declare global {
  /**
   * Re-exports common global types between `pf2e` and `league` types.
   *
   * @hidden
   */
  namespace fvtt {
    export { ClientDocument, Application, ApplicationOptions, Folder, Game };
  }
}

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
  namespace fvtt {
    export {
      ApplicationHeaderButton,
      type FVTTDocument as Document,
      type FVTTDocumentConstructor as DocumentConstructor,
      type FVTTDocumentCollection as DocumentCollection,
      EnrichmentOptions,
      type FavoriteFolder,
    };
  }
}
type FVTTDocument = foundry.abstract.Document<any, any>;
type FVTTDocumentConstructor = DocumentConstructorOf<foundry.abstract.Document>;
type FVTTDocumentCollection = DocumentCollection<any>;
interface FavoriteFolder {
  /** The source of the folder (e.g. "data", "public") */
  source: string;
  /** The full path to the folder */
  path: string;
  /** The label for the path */
  label: string;
}
