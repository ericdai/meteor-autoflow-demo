var isCheatSheetHidden = true;

Template.main.created = function() {
    Meteor.call('reseed');
    Session.set('demoName', 'basicSimpleSchema');
    AutoFlow.flowDef.set(SeedData.basicSimpleSchema.flowDef);
};

Template.main.helpers({
    active: function(currentDemo) {
        return Session.equals('demoName', currentDemo) ? 'active': '';
    }
});


Template.main.events({
    'click .nav-link': function(event, template) {
        var demoName = $(event.target).data('demo-name'),
            flowDef = SeedData[demoName].flowDef,
            formId = flowDef[0] && flowDef[0].formId;

        event.preventDefault();

        Session.set('demoName', demoName);
        AutoFlow.flowDef.set(flowDef);
        AutoFlow.currentFormId.set(formId);
    },
    'click #cheat-sheet-link': function(event, template) {
        if (isCheatSheetHidden) {
            $('#cheat-sheet').toggle();
            $('#cheat-sheet').animate({right: '0px'},500);
            isCheatSheetHidden = false;
        } else {
            $('#cheat-sheet').animate({right: '-840px'},500);
            Meteor.setTimeout(function() {
                $('#cheat-sheet').toggle();
            }, 500);
            isCheatSheetHidden = true;
        }
    }
});