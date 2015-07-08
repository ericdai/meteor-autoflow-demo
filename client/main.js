Template.main.created = function() {
    Meteor.call('reseed');
    Session.set('demoName', 'basicSimpleSchema');
    AutoFlow.flowDef.set(SeedData.basicSimpleSchema.flowDef);
};

Template.main.helpers({
    active: function(currentDemo) {
        return Session.equals('demoName', currentDemo) ? 'active': '';
    },
    flowDefTemplateName: function() {
        return Session.get('demoName') + 'FlowDef';
    },
    formDisplayTemplateName: function() {
        return Session.get('demoName') + 'FormDisplay';
    },
    dbValuesTemplateName: function() {
        return Session.get('demoName') + 'DBValues';
    }
});

Template.main.events({
    'click .nav-link': function(event, template) {
        var demoName = $(event.target).data('demo-name');
        console.log('Clicked on a nav link, data-name = ' + demoName);
        Session.set('demoName', demoName);
        var flowDef = SeedData[demoName].flowDef;
        AutoFlow.flowDef.set(flowDef);
        var formName = flowDef[0] && flowDef[0].name;
        AutoFlow.currentFormName.set(formName);
    }
});