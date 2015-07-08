Template.dbValues.helpers({
    collectionContents: function() {
        var demoName = Session.get('demoName');
        var collectionName = SeedData[demoName].collectionNames[0];
        var doc = window[collectionName].findOne();
        return JSON.stringify(doc, null, 4);
        //var person = People.findOne();
        //return JSON.stringify(person, null, 4);
    }
});