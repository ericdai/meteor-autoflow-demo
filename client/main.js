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
        var demoName = $(event.target).data('demo-name'),
            flowDef = SeedData[demoName].flowDef,
            formId = flowDef[0] && flowDef[0].formId;

        event.preventDefault();

        Session.set('demoName', demoName);
        AutoFlow.flowDef.set(flowDef);
        AutoFlow.currentFormId.set(formId);
    }
});