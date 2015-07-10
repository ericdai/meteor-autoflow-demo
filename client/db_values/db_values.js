var getCollectionName = function getCollectionName() {
    var demoName = Session.get('demoName');
    return SeedData[demoName] && SeedData[demoName].collectionNames[0];
};

Template.dbValues.helpers({
    collectionName: function() {
        return getCollectionName();
    },
    collectionContents: function() {
        var collectionName = getCollectionName();
        if (!collectionName) return;
        var doc = window[getCollectionName()].findOne();
        return JSON.stringify(doc, null, 4);
    }
});