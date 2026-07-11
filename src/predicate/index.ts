/**
 * Provides TypeScript type guards / predicates for several Foundry document model classes and objects.
 *
 * @packageDocumentation
 */

/**
 * @param data - A potential Foundry DataField.
 *
 * @returns Whether the given object is a Foundry DataField instance.
 */
function isDataField(data: unknown): data is fvtt.DataField
{
   return data !== void 0 && data !== null && data instanceof foundry.data.fields.DataField;
}

/**
 * @param data - A potential Foundry DataModel base class instance.
 *
 * @returns Whether the given object is a Foundry DataModel instance.
 */
function isDataModel(data: unknown): data is fvtt.DataModel
{
   return data !== void 0 && data !== null && data instanceof foundry.abstract.DataModel;
}

/**
 * @param err - A potential Foundry DataModelValidationError instance.
 *
 * @returns Whether the given object is a Foundry DataModelValidationError instance.
 */
function isDataModelValidationError(err: unknown): err is fvtt.DataModelValidationError
{
   return err !== void 0 && err !== null && err instanceof foundry.data.validation.DataModelValidationFailure;
}

/**
 * @param err - A potential Foundry DataModelValidationFailure instance.
 *
 * @returns Whether the given object is a Foundry DataModelValidationFailure instance.
 */
function isDataModelValidationFailure(err: unknown): err is fvtt.DataModelValidationFailure
{
   return err !== void 0 && err !== null && err instanceof foundry.data.validation.DataModelValidationFailure;
}

/**
 * @param doc - A potential Foundry document.
 *
 * @returns Whether the given object is a Foundry document.
 */
function isDocument(doc: unknown): doc is fvtt.Document
{
   return doc !== void 0 && doc !== null && doc instanceof foundry.abstract.Document;
}

/**
 * @param doc - A potential Foundry document class.
 *
 * @returns Whether the given object is a Foundry document class.
 */
function isDocumentClass(doc: unknown): doc is fvtt.DocumentConstructor
{
   return doc !== void 0 && doc !== null && Object.prototype.isPrototypeOf.call(foundry.abstract.Document, doc);
}

/**
 * @param collection - A potential Foundry document collection.
 *
 * @returns Whether the given object is a Foundry document collection.
 */
function isDocumentCollection(collection: unknown): collection is fvtt.DocumentCollection
{
   return collection !== void 0 && collection !== null &&
    collection instanceof foundry.documents.abstract.DocumentCollection;
}

/**
 * @param collection - A potential Foundry embedded collection.
 *
 * @returns Whether the given object is a Foundry embedded collection.
 */
function isEmbeddedCollection(collection: unknown): collection is fvtt.EmbeddedCollection
{
   return collection !== void 0 && collection !== null && collection instanceof foundry.abstract.EmbeddedCollection;
}

/**
 * @param doc - A potential Foundry folder.
 *
 * @returns Whether the given object is a Foundry folder.
 */
function isFolder(doc: unknown): doc is fvtt.Folder
{
   return doc !== void 0 && doc !== null && doc instanceof foundry.documents.Folder;
}

/**
 * @param doc - A potential Foundry folder class.
 *
 * @returns Whether the given object is a Foundry folder class.
 */
function isFolderClass(doc: unknown): doc is typeof fvtt.Folder
{
   return doc !== void 0 && doc !== null && Object.prototype.isPrototypeOf.call(foundry.documents.Folder, doc);
}

export {
   isDataField,
   isDataModel,
   isDataModelValidationError,
   isDataModelValidationFailure,
   isDocument,
   isDocumentClass,
   isDocumentCollection,
   isEmbeddedCollection,
   isFolder,
   isFolderClass
}
