SeedData.everythingSimpleSchema = {};
SeedData.everythingSimpleSchema.flowDef = [
    //{
    //    name: "formSchema1",
    //    schemaFormat: "SimpleSchema",
    //    schema: {
    //        "nextForm": {
    //            "type": "String",
    //            "defaultValue": "formSchema2",
    //            "autoflow": {
    //                "hidden": true
    //            }
    //        },
    //        "nextRoute": {
    //            "type": "String",
    //            "defaultValue": "fracsim",
    //            "autoflow": {
    //                "hidden": true
    //            }
    //        },
    //        "collectionName": {
    //            "type": "String",
    //            "defaultValue": "Jobs",
    //            "autoflow": {
    //                "hidden": true
    //            }
    //        },
    //        "collectionId": {
    //            "type": "String",
    //            "defaultValue": "JobId1",
    //            "autoflow": {
    //                "hidden": true
    //            }
    //        },
    //        "Status_ProppantTransportSimulation:mapTo": {
    //            "type": "String",
    //            "defaultValue": "Status.ProppantTransportSimulation",
    //            "autoflow": {
    //                "hidden": true
    //            }
    //        },
    //        "Status_ProppantTransportSimulation": {
    //            "type": "String",
    //            "defaultValue": "submitted",
    //            "autoflow": {
    //                "hidden": true
    //            }
    //        },
    //        "demoMode": {
    //            "type": "String",
    //            defaultValue: 1,
    //            "autoflow": {
    //                "hidden": true
    //            }
    //        },
    //        "injectionTime:mapTo": {
    //            "type": "String",
    //            "defaultValue": "Simulations.ProppantTransportSimulation.InjectionTime",
    //            "autoflow": {
    //                "hidden": true
    //            }
    //        },
    //        "injectionTime": {
    //            "type": "String",
    //            "label": "Injection Time",
    //            "defaultValue": "600",
    //            "autoflow": {
    //                "units": "s"
    //            }
    //        },
    //        "injectionRate:mapTo": {
    //            "type": "String",
    //            "defaultValue": "Simulations.ProppantTransportSimulation.InjectionRate",
    //            "autoflow": {
    //                "hidden": true
    //            }
    //        },
    //        "injectionRate": {
    //            "type": "String",
    //            "label": "Injection Rate",
    //            "defaultValue": "17",
    //            "autoflow": {
    //                "units": "kg/s"
    //            }
    //        },
    //        "amount": {
    //            "type": "String",
    //            "label": "Amount",
    //            "optional": true,
    //            "autoflow": {
    //                "readOnly": true,
    //                "formulaDep": "[injectionTime] * [injectionRate]",
    //                "units": "kg"
    //            }
    //        },
    //        "proppantType:mapTo": {
    //            "type": "String",
    //            "defaultValue": "Other.ProppantType",
    //            "autoflow": {
    //                "hidden": true
    //            }
    //        },
    //        "proppantType": {
    //            "type": "String",
    //            "label": "Proppant Type",
    //            "autoform": {
    //                "defaultValue": "Melior60",
    //                "options": [
    //                    {
    //                        "label": "WhiteSand100",
    //                        "value": "WhiteSand100",
    //                        "density": "2650 kg m^{-3}",
    //                        "diameter": "0.00015 m"
    //                    },
    //                    {
    //                        "label": "Kryptosphere25",
    //                        "value": "Kryptosphere25",
    //                        "density": "3900 kg m^{-3}",
    //                        "diameter": "0.00078 m"
    //                    },
    //                    {
    //                        "label": "WhiteSand30",
    //                        "value": "WhiteSand30",
    //                        "density": "2650 kg m^{-3}",
    //                        "diameter": "0.000595 m"
    //                    },
    //                    {
    //                        "label": "Melior60",
    //                        "value": "Melior60",
    //                        "density": "1980 kg m^{-3}",
    //                        "diameter": "0.00025 m"
    //                    }
    //                ]
    //            },
    //            "autoflow": {}
    //        },
    //        "density": {
    //            "type": "String",
    //            "label": "Density",
    //            "optional": true,
    //            "autoflow": {
    //                "readOnly": true,
    //                "selectionDep": "proppantType",
    //                "selectionDepProperty": "density"
    //            }
    //        },
    //        "diameter": {
    //            "type": "String",
    //            "label": "Diameter",
    //            "optional": true,
    //            "autoflow": {
    //                "readOnly": true,
    //                "selectionDep": "proppantType",
    //                "selectionDepProperty": "diameter"
    //            }
    //        }
    //    }
    //},
    {
        name: "formSchema1",
        schemaFormat: "SimpleSchema",
        schema: {
            "nextForm": {
                "type": "String",
                "defaultValue": "formSchema2",
                "autoflow": {
                    "hidden": true
                }
            },
            "nextRoute": {
                "type": "String",
                "defaultValue": "fracsim",
                "autoflow": {
                    "hidden": true
                }
            },
            "collectionName": {
                "type": "String",
                "defaultValue": "Jobs",
                "autoflow": {
                    "hidden": true
                }
            },
            "collectionId": {
                "type": "String",
                "defaultValue": "JobID1",
                "autoflow": {
                    "hidden": true
                }
            },
            "Status_HydraulicFractureSimulation:mapTo": {
                "type": "String",
                "defaultValue": "Status.HydraulicFractureSimulation",
                "autoflow": {
                    "hidden": true
                }
            },
            "Status_HydraulicFractureSimulation": {
                "type": "String",
                "defaultValue": "submitted",
                "autoflow": {
                    "hidden": true
                }
            },
            "Status_ProppantTransportSimulation:mapTo": {
                "type": "String",
                "defaultValue": "Status.ProppantTransportSimulation",
                "autoflow": {
                    "hidden": true
                }
            },
            "Status_ProppantTransportSimulation": {
                "type": "String",
                "defaultValue": "submitted",
                "autoflow": {
                    "hidden": true
                }
            },
            "demoMode": {
                "type": "String",
                defaultValue: 1,
                "autoflow": {
                    "hidden": true
                }
            },
            "Hydraulic Fracture": {
                "type": "Object",
            },
            "Hydraulic Fracture:injectionRate:mapTo": {
                "type": "String",
                "defaultValue": "Simulations.FluidSimulation.BoundaryConditions.FlowRate",
                "autoflow": {
                    "hidden": true
                }
            },
            "Hydraulic Fracture.injectionRate": {
                "type": "String",
                "label": "Injection Rate",
                "defaultValue": "40",
                "autoflow": {
                    "units": "kg/s"
                }
            },
            "Hydraulic Fracture:fluidType:mapTo": {
                "type": "String",
                "defaultValue": "Simulations.FluidSimulation.Materials.FluidType",
                "autoflow": {
                    "hidden": true
                }
            },
            "Hydraulic Fracture.fluidType": {
                "type": "String",
                "label": "Fluid Type",
                "autoform": {
                    "defaultValue": "Water",
                    "options": [
                        {
                            "label": "Water",
                            "value": "Water",
                            "density": "1000 kg m^{-3}",
                            "viscosity": "0.001 Pa s"
                        },
                        {
                            "label": "Slick Stuff",
                            "value": "Slick Stuff",
                            "density": "20",
                            "viscosity": "30"
                        }
                    ]
                },
                "autoflow": {}
            },
            "Hydraulic Fracture.density": {
                "type": "String",
                "label": "Density",
                "optional": true,
                "autoflow": {
                    "displayOnly": true,
                    "selectionDep": "Hydraulic Fracture.fluidType",
                    "selectionDepProperty": "density"
                }
            },
            "Hydraulic Fracture.viscosity": {
                "type": "String",
                "label": "Viscosity",
                "optional": true,
                "autoflow": {
                    "displayOnly": true,
                    "selectionDep": "Hydraulic Fracture.fluidType",
                    "selectionDepProperty": "viscosity"
                }
            },
            "Proppant": {
                "type": "Object",
            },
            "Proppant:injectionTime:mapTo": {
                "type": "String",
                "defaultValue": "Simulations.ProppantTransportSimulation.InjectionTime",
                "autoflow": {
                    "hidden": true
                }
            },
            "Proppant.injectionTime": {
                "type": "String",
                "label": "Injection Time",
                "defaultValue": "600",
                "autoflow": {
                    "units": "s"
                }
            },
            "Proppant:injectionRate:mapTo": {
                "type": "String",
                "defaultValue": "Simulations.ProppantTransportSimulation.InjectionRate",
                "autoflow": {
                    "hidden": true
                }
            },
            "Proppant.injectionRate": {
                "type": "String",
                "label": "Injection Rate",
                "defaultValue": "17",
                "autoflow": {
                    "units": "kg/s"
                }
            },
            "Proppant.amount": {
                "type": "String",
                "label": "Amount",
                "optional": true,
                "autoflow": {
                    "displayOnly": true,
                    "formulaDep": "[Proppant.injectionTime] * [Proppant.injectionRate]",
                    "units": "kg"
                }
            },
            "Proppant:proppantType:mapTo": {
                "type": "String",
                "defaultValue": "Simulations.ProppantTransportSimulation.Materials.ProppantType",
                "autoflow": {
                    "hidden": true
                }
            },
            "Proppant.proppantType": {
                "type": "String",
                "label": "Proppant Type",
                "autoform": {
                    "defaultValue": "Melior60",
                    "options": [
                        {
                            "label": "WhiteSand100",
                            "value": "WhiteSand100",
                            "density": "2650 kg m^{-3}",
                            "diameter": "0.00015 m"
                        },
                        {
                            "label": "Kryptosphere25",
                            "value": "Kryptosphere25",
                            "density": "3900 kg m^{-3}",
                            "diameter": "0.00078 m"
                        },
                        {
                            "label": "WhiteSand30",
                            "value": "WhiteSand30",
                            "density": "2650 kg m^{-3}",
                            "diameter": "0.000595 m"
                        },
                        {
                            "label": "Melior60",
                            "value": "Melior60",
                            "density": "1980 kg m^{-3}",
                            "diameter": "0.00025 m"
                        }
                    ]
                },
                "autoflow": {}
            },
            "Proppant.density": {
                "type": "String",
                "label": "Density",
                "optional": true,
                "autoflow": {
                    "displayOnly": true,
                    "selectionDep": "Proppant.proppantType",
                    "selectionDepProperty": "density"
                }
            },
            "Proppant.diameter": {
                "type": "String",
                "label": "Diameter",
                "optional": true,
                "autoflow": {
                    "displayOnly": true,
                    "selectionDep": "Proppant.proppantType",
                    "selectionDepProperty": "diameter"
                }
            }
        }
    },
    {
        name: "formSchema2",
        schemaFormat: "SimpleSchema",
        schema: {
            "nextForm": {
                "type": "String",
                "defaultValue": "formSchema3",
                "autoflow": {
                    "hidden": true
                }
            },
            "nextRoute": {
                "type": "String",
                "defaultValue": "proppantsim",
                "autoflow": {
                    "hidden": true
                }
            },
            name: {
                type: "String",
                label: "Your name",
                max: 50
            },
            email: {
                type: "String",
                label: "E-mail address"
            },
            message: {
                type: "String",
                label: "Message",
                optional: true,
                max: 1000
            }
        }
    },
    {
        name: "formSchema3",
        schemaFormat: "SimpleSchema",
        schema: {
            "nextForm": {
                "type": "String",
                "defaultValue": "formSchema1",
                "autoflow": {
                    "hidden": true
                }
            },
            "nextRoute": {
                "type": "String",
                "defaultValue": "proppantsim",
                "autoflow": {
                    "hidden": true
                }
            },
            "testField2": {
                "type": "String",
                "label": "NBA Team",
                "defaultValue": "Warriors"
            },
            "testField3": {
                "type": "String",
                "label": "Futbol Club",
                "defaultValue": "Barcelona"
            }
        }
    }
];

SeedData.everythingSimpleSchema.collectionNames = ['Jobs'];