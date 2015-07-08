//Template.everythingSimpleSchemaFormDisplay.created = function() {
//    var flowDefName = Session.get('demoName') + 'FlowDef';
//    flowJSON.set(window[flowDefName]);
//};
//
//Template.everythingSimpleSchemaFormDisplay.helpers({
//    flowDef: function () {
//        var flowDef = flowJSON.get();
//        //console.log('Running formDisplay, flowDef, flowDef[0] = ' + JSON.stringify(flowDef[0]));
//        return flowDef;
//    }
//});

Template.everythingSimpleSchemaDBValues.helpers({
    collectionContents: function() {
        var job = Jobs.findOne();
        return JSON.stringify(job, null, 4);
    }
});