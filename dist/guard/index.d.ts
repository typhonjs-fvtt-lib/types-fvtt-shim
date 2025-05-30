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
declare function isDocument(doc: unknown): doc is fvtt.Document;
/**
 * @param doc - A potential Foundry document class.
 *
 * @returns Whether the given object is a Foundry document class.
 */
declare function isDocumentClass(doc: unknown): doc is fvtt.DocumentConstructor;
/**
 * @param collection - A potential Foundry document collection.
 *
 * @returns Whether the given object is a Foundry document collection.
 */
declare function isDocumentCollection(collection: unknown): collection is fvtt.DocumentCollection;
/**
 * @param collection - A potential Foundry embedded collection.
 *
 * @returns Whether the given object is a Foundry embedded collection.
 */
declare function isEmbeddedCollection(collection: unknown): collection is fvtt.EmbeddedCollection;
/**
 * @param doc - A potential Foundry folder.
 *
 * @returns Whether the given object is a Foundry folder.
 */
declare function isFolder(doc: unknown): doc is fvtt.Folder;
/**
 * @param doc - A potential Foundry folder class.
 *
 * @returns Whether the given object is a Foundry folder class.
 */
declare function isFolderClass(doc: unknown): doc is typeof fvtt.Folder;

export { isDocument, isDocumentClass, isDocumentCollection, isEmbeddedCollection, isFolder, isFolderClass };
