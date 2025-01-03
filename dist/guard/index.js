function isDocument(doc) {
    return doc !== void 0 && doc instanceof foundry.abstract.Document;
}
function isDocumentCollection(collection) {
    return collection !== void 0 && collection instanceof DocumentCollection;
}
function isEmbeddedCollection(collection) {
    return collection !== void 0 && collection instanceof foundry.abstract.EmbeddedCollection;
}

export { isDocument, isDocumentCollection, isEmbeddedCollection };
//# sourceMappingURL=index.js.map
