declare function isDocument(doc: unknown): doc is fvtt.Document;
declare function isDocumentCollection(collection: unknown): collection is fvtt.DocumentCollection;
declare function isEmbeddedCollection(collection: unknown): collection is fvtt.EmbeddedCollection;

export { isDocument, isDocumentCollection, isEmbeddedCollection };
