//Template.basicJSONSchemaFlowDef.helpers({
//    defaultFlowDef: function () {
//        return BASIC_SIMPLE_SCHEMA_FLOW_DEF_STRING;
//    }
//});
//
//Template.basicJSONSchemaFlowDef.events({
//    'submit form': function (e, tmpl) {
//        e.preventDefault();
//        var jsonInput = tmpl.find('#jsonInput').value;
//        //console.log('submitted form, JSON = ' + jsonInput);
//        AutoFlow.flowDef.set(JSON.parse(jsonInput));
//        //flowJSON.set(JSON.parse(jsonInput));
//    }
//});

Template.basicJSONSchemaDBValues.helpers({
    collectionContents: function() {
        var job = Jobs.findOne();
        return JSON.stringify(job, null, 4);
    }
});