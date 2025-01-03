function isDocument(doc: unknown): doc is fvtt.Document
{
   return doc !== void 0 && doc instanceof foundry.abstract.Document;
}

function isDocumentCollection(collection: unknown): collection is fvtt.DocumentCollection
{
   return collection !== void 0 && collection instanceof DocumentCollection;
}

function isEmbeddedCollection(collection: unknown): collection is fvtt.EmbeddedCollection
{
   return collection !== void 0 && collection instanceof foundry.abstract.EmbeddedCollection;
}

export {
   isDocument,
   isDocumentCollection,
   isEmbeddedCollection
}
