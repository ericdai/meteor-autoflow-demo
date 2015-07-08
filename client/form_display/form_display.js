Template.formDisplay.helpers({
    // really not used since flow def is set with AutoFlow.flowDef.set() when nav link clicked
    flowDef: function () {
        var flowDef = AutoFlow.flowDef.get();
        //console.log('Running formDisplay, flowDef, flowDef[0] = ' + JSON.stringify(flowDef[0]));
        return flowDef;
    }
});