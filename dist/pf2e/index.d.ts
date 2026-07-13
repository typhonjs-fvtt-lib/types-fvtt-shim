export {};
import { GamePF2e } from '@7h3laughingman/pf2e-types';

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
    export { Folder, RollTable };
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
    export { GamePF2e as Game };
    export type {
      FVTTApplication as Application,
      FVTTApplicationOptions as ApplicationOptions,
      FVTTClientDocument as ClientDocument,
      FVTTCompendiumCollection as CompendiumCollection,
      FVTTCustomFormGroup as CustomFormGroup,
      FVTTCustomFormInput as CustomFormInput,
      FontFamilyDefinition,
      FVTTApplicationHeaderButton as ApplicationHeaderButton,
      FVTTDataField as DataField,
      FVTTDataModel as DataModel,
      FVTTDataModelValidationError as DataModelValidationError,
      FVTTDataModelValidationFailure as DataModelValidationFailure,
      FVTTDocument as Document,
      FVTTDocumentConstructor as DocumentConstructor,
      FVTTDocumentCollection as DocumentCollection,
      FVTTEmbeddedCollection as EmbeddedCollection,
      FVTTFilePicker as FilePicker,
      FVTTFormGroupConfig as FormGroupConfig,
      FVTTFormInputConfig as FormInputConfig,
      EnrichmentOptions,
      FavoriteFolder,
    };
  }
}
type FVTTApplication = foundry.appv1.api.Application;
type FVTTApplicationOptions = foundry.appv1.api.ApplicationV1Options;
type FVTTApplicationHeaderButton = foundry.appv1.api.ApplicationV1HeaderButton;
type FVTTClientDocument = foundry.documents.abstract.ClientDocument;
type FVTTCompendiumCollection = foundry.documents.collections.CompendiumCollection;
type FVTTCustomFormGroup = foundry.applications.fields.CustomFormGroup;
type FVTTCustomFormInput = foundry.applications.fields.CustomFormInput;
type FVTTDataField = foundry.data.fields.DataField;
type FVTTDataModel = foundry.abstract.DataModel;
type FVTTDataModelValidationError = foundry.data.validation.DataModelValidationError;
type FVTTDataModelValidationFailure = foundry.data.validation.DataModelValidationFailure;
type FVTTDocument = foundry.abstract.Document;
type FVTTDocumentConstructor = DocumentConstructorOf<foundry.abstract.Document>;
type FVTTDocumentCollection = foundry.documents.abstract.DocumentCollection<any>;
type FVTTEmbeddedCollection = foundry.abstract.EmbeddedCollection<any>;
type FVTTFilePicker = foundry.applications.apps.FilePicker;
type FVTTFormGroupConfig = foundry.data.FormGroupConfig;
type FVTTFormInputConfig<T> = foundry.data.FormInputConfig<T>;
interface EnrichmentOptions {
  /** Include unrevealed secret tags in the final HTML? If false, unrevealed secret blocks will be removed. */
  secrets?: boolean;
  /** Replace dynamic document links? */
  documents?: boolean;
  /** Replace hyperlink content? */
  links?: boolean;
  /** Replace inline dice rolls? */
  rolls?: boolean;
  /** Replace embedded content? */
  embeds?: boolean;
  /** Apply custom enrichers? */
  custom?: boolean;
  /** The data object providing context for inline rolls, or a function that produces it. */
  rollData?: Record<string, unknown> | (() => Record<string, unknown>);
  /** A document to resolve relative UUIDs against. */
  relativeTo?: foundry.documents.abstract.ClientDocument;
}
interface FavoriteFolder {
  /** The source of the folder (e.g. "data", "public") */
  source: string;
  /** The full path to the folder */
  path: string;
  /** The label for the path */
  label: string;
}
interface FontFamilyDefinition {
  /** Whether the font is available in the rich text editor. This will also enable it for notes and drawings. */
  editor: boolean;
  fonts: FontDefinition[];
}
interface FontDefinition extends FontFaceDescriptors {
  /**
   * Individual font face definitions for this font family. If this is empty, the font family may only be loaded
   * from the client's OS-installed fonts.
   */
  urls: string[];
}
