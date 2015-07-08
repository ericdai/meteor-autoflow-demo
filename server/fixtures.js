var starterJob = {
    "_id" : "JobID1",
    "Simulations" : {
        "FluidSimulation" : {
            "Materials" : {
                "FluidType" : "Carbonated Water"
            },
            "BoundaryConditions" : {
                "UseContinuousSource" : "true",
                "OutputFileType" : {
                    "Pressure" : "pvd",
                    "Velocity" : "pvd"
                },
                "FlowRate" : {
                    "1" : "140.0"
                }
            }
        },
        "ProppantTransportSimulation" : {
            "InjectionRate" : "17",
            "Materials" : {
                "FluidType" : "Carbonated Water",
                "ProppantType" : "3"
            },
            "DiffusionCoefficient" : "0.2",
            "InjectionTime" : "600"
        }
    },
    "Status" : {
        "HydraulicFractureSimulation": "off",
        "HydraulicFractureSimulationInit": "off",
        "HydraulicFractureSimulationMesh": "off",
        "WellLogAnalysisRefinement": "off",
        "ProppantTransportSimulation": "off"
    }
};

var starterPerson = {
    _id: 'PersonID1',
    name: 'Dave Allen',
    email: 'test@test.com',
    color: 'blue',
    telephone: '867-5309',
    city: 'Berkeley'
};

var reseed = function reseed() {
    Jobs.remove({});
    Jobs.insert(starterJob);
    People.remove({});
    People.insert(starterPerson);
};

Meteor.startup(function () {
    reseed();
    if (Meteor.isClient) AutoFlow.flowDef.set(SeedData.basicSimpleSchema.flowDef);
});

Meteor.methods({
    'reseed': reseed
});