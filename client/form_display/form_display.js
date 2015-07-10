Template.formDisplay.helpers({
    // not actually used since flow def is set with AutoFlow.flowDef.set() when nav link clicked
    flowDef: function () {
        var flowDef = AutoFlow.flowDef.get();
        return flowDef;
    }
});