/**
 * Provides TypeScript type guards for several Foundry document model classes and objects.
 *
 * @packageDocumentation
 */

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
   isDocument,
   isDocumentClass,
   isDocumentCollection,
   isEmbeddedCollection,
   isFolder,
   isFolderClass
}
