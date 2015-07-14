var isCheatSheetHidden = true;

var adjustPageHeight = function adjustPageHeight() {
    var cheatSheetHeight = $('#cheat-sheet').height();
    var $body = $('body');
    var bodyHeight = $body.height();
    if (cheatSheetHeight > bodyHeight) $body.height(cheatSheetHeight);
};

var removeBodyHeight = function removeBodyHeight() {
    $('body').removeAttr('style');
};

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
            adjustPageHeight();
            isCheatSheetHidden = false;
        } else {
            $('#cheat-sheet').animate({right: '-840px'},500);
            Meteor.setTimeout(function() {
                $('#cheat-sheet').toggle();
                removeBodyHeight();
            }, 500);
            isCheatSheetHidden = true;
        }
    }
});