function isDocument(doc: unknown): doc is fvtt.Document
{
   return doc !== void 0 && doc !== null && doc instanceof foundry.abstract.Document;
}

function isDocumentClass(doc: unknown): doc is fvtt.DocumentConstructor
{
   return doc !== void 0 && doc !== null && Object.prototype.isPrototypeOf.call(foundry.abstract.Document, doc);
}

function isDocumentCollection(collection: unknown): collection is fvtt.DocumentCollection
{
   return collection !== void 0 && collection !== null && collection instanceof DocumentCollection;
}

function isEmbeddedCollection(collection: unknown): collection is fvtt.EmbeddedCollection
{
   return collection !== void 0 && collection !== null && collection instanceof foundry.abstract.EmbeddedCollection;
}

function isFolder(doc: unknown): doc is fvtt.Folder
{
   return doc !== void 0 && doc !== null && doc instanceof Folder;
}

function isFolderClass(doc: unknown): doc is typeof fvtt.Folder
{
   return doc !== void 0 && doc !== null && Object.prototype.isPrototypeOf.call(Folder, doc);
}

export {
   isDocument,
   isDocumentClass,
   isDocumentCollection,
   isEmbeddedCollection,
   isFolder,
   isFolderClass
}
