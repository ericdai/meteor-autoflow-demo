Template.flowDef.helpers({
    flowDef: function () {
        var demoName = Session.get('demoName');
        return JSON.stringify(SeedData[demoName].flowDef, null, 4);
    }
});

Template.flowDef.events({
    'submit form': function (e, tmpl) {
        e.preventDefault();
        var jsonInput = tmpl.find('#jsonInput').value;
        //console.log('submitted form, JSON = ' + jsonInput);
        AutoFlow.flowDef.set(JSON.parse(jsonInput));
        //AutoFlow.setFlowDef(JSON.parse(jsonInput));
        //flowJSON.set(JSON.parse(jsonInput));
    }
});