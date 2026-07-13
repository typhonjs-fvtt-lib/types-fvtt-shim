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
    export { Application, ClientDocument, CompendiumCollection, FilePicker, Folder, Game, RollTable };
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
      FVTTApplicationOptions as ApplicationOptions,
      FVTTCustomFormGroup as CustomFormGroup,
      FVTTCustomFormInput as CustomFormInput,
      FVTTDataField as DataField,
      FVTTDataModel as DataModel,
      FVTTDataModelValidationError as DataModelValidationError,
      FVTTDataModelValidationFailure as DataModelValidationFailure,
      FVTTDocument as Document,
      FVTTDocumentConstructor as DocumentConstructor,
      FVTTDocumentCollection as DocumentCollection,
      FVTTEmbeddedCollection as EmbeddedCollection,
      FVTTFormGroupConfig as FormGroupConfig,
      FVTTFormInputConfig as FormInputConfig,
      EnrichmentOptions,
      FavoriteFolder,
      FontFamilyDefinition,
    };
  }
}
type FVTTApplicationOptions = Application.Options;
type FVTTCustomFormGroup = foundry.applications.fields.CustomFormGroup;
type FVTTCustomFormInput = foundry.applications.fields.CustomFormInput;
type FVTTDataModel = foundry.abstract.DataModel<any>;
type FVTTDataField = foundry.data.fields.DataField;
type FVTTDataModelValidationError = foundry.data.validation.DataModelValidationError;
type FVTTDataModelValidationFailure = foundry.data.validation.DataModelValidationFailure;
type FVTTDocumentCollection = foundry.documents.abstract.DocumentCollection<any, any>;
type FVTTEmbeddedCollection = foundry.abstract.EmbeddedCollection<any, any>;
type FVTTFormGroupConfig = foundry.applications.fields.FormGroupConfig;
type FVTTFormInputConfig<T> = foundry.applications.fields.FormInputConfig<T>;
type ApplicationHeaderButton = Application.HeaderButton;
type EnrichmentOptions = TextEditor.EnrichmentOptions;
type FavoriteFolder = FilePicker.FavoriteFolder;
type FVTTDocument = foundry.abstract.Document.Any;
type FVTTDocumentConstructor = foundry.abstract.Document.AnyConstructor;
type FontFamilyDefinition = CONFIG.Font.FamilyDefinition;
