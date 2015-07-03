flowJSON = new ReactiveVar(SS_FLOW_DEF);

Template.formDisplay.helpers({
    flowDef: function () {
        var flowDef = flowJSON.get();
        //console.log('Running formDisplay, flowDef, flowDef[0] = ' + JSON.stringify(flowDef[0]));
        return flowDef;
    }
});

//Template.formDisplay.rendered = function() {
//    console.log('Running formDisplay.rendered()');
//    var newFlowJSON = flowJSON.get();
//};

Template.flowJSON.helpers({
    defaultFlowDef: function () {
        return SS_FLOW_DEF_STRING;
    }
});

Template.flowJSON.events({
    'submit form': function (e, tmpl) {
        e.preventDefault();
        var jsonInput = tmpl.find('#jsonInput').value;
        console.log('submitted form, JSON = ' + jsonInput);
        AutoFlow.flowDef.set(JSON.parse(jsonInput));
        //flowJSON.set(JSON.parse(jsonInput));
    }
});

