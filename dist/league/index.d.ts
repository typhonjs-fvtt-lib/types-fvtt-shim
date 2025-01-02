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
    export type {
      ApplicationHeaderButton,
      FVTTDocument as Document,
      FVTTDocumentConstructor as DocumentConstructor,
      FVTTDocumentCollection as DocumentCollection,
      EnrichmentOptions,
      FavoriteFolder,
    };
  }
}
type FVTTDocumentCollection = DocumentCollection<any, any>;
type ApplicationHeaderButton = Application.HeaderButton;
type EnrichmentOptions = TextEditor.EnrichmentOptions;
type FavoriteFolder = FilePicker.FavoriteFolder;
type FVTTDocument = foundry.abstract.Document.Any;
type FVTTDocumentConstructor = foundry.abstract.Document.AnyConstructor;
