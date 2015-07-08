//Template.basicSimpleSchemaFormDisplay.created = function() {
//    var flowDefName = Session.get('demoName') + 'FlowDef';
//    flowJSON.set(window[flowDefName]);
//};
//
//Template.basicSimpleSchemaFormDisplay.helpers({
//    flowDef: function () {
//        var flowDef = flowJSON.get();
//        //console.log('Running formDisplay, flowDef, flowDef[0] = ' + JSON.stringify(flowDef[0]));
//        return flowDef;
//    }
//});

Template.basicSimpleSchemaDBValues.helpers({
    collectionContents: function() {
        var person = People.findOne();
        return JSON.stringify(person, null, 4);
    }
});