Template.everythingJSONSchemaFlowDef.helpers({
    defaultFlowDef: function () {
        return EVERYTHING_SIMPLE_SCHEMA_FLOW_DEF_STRING;
    }
});

Template.everythingJSONSchemaFlowDef.events({
    'submit form': function (e, tmpl) {
        e.preventDefault();
        var jsonInput = tmpl.find('#jsonInput').value;
        //console.log('submitted form, JSON = ' + jsonInput);
        AutoFlow.flowDef.set(JSON.parse(jsonInput));
        //flowJSON.set(JSON.parse(jsonInput));
    }
});

Template.everythingJSONSchemaFormDisplay.created = function() {
    flowJSON.set(everythingSimpleSchemaFlowDef);
};

Template.everythingJSONSchemaFormDisplay.helpers({
    flowDef: function () {
        var flowDef = flowJSON.get();
        //console.log('Running formDisplay, flowDef, flowDef[0] = ' + JSON.stringify(flowDef[0]));
        return flowDef;
    }
});

Template.everythingJSONSchemaDBValues.helpers({
    collectionContents: function() {
        var job = Jobs.findOne();
        return JSON.stringify(job, null, 4);
    }
});