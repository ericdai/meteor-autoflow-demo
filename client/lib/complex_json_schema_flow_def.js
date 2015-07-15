/*
 * The flowDef is a mess and is nowhere near ready to be used
 */
SeedData = typeof SeedData === 'undefined' ? {} : SeedData;
SeedData.complexJSONSchema = {};
SeedData.complexJSONSchema.flowDef = [
    {
        formId: "form1",
        schemaFormat: "JSONSchema",
        "nextForm": "form2",
        "nextRoute": "fracsim",
        "collectionName": "Jobs",
        "collectionId": "JobID1",
        schema: {
            "Status_HydraulicFractureSimulation": {
                "type": "string",
                "default": "submitted",
                "autoflow": {
                    "mapTo": "Status.HydraulicFractureSimulation",
                    "hidden": true
                }
            },
            "Status_ProppantTransportSimulation": {
                "type": "string",
                "default": "submitted",
                "autoflow": {
                    "mapTo": "Status.ProppantTransportSimulation",
                    "hidden": true
                }
            },
            "demoMode": {
                "type": "string",
                "default": 1,
                "autoflow": {
                    "hidden": true
                }
            },
            "Hydraulic Fracture": {
                "type": "object"
            },
            "Hydraulic Fracture.injectionRate": {
                "type": "string",
                "label": "Injection Rate",
                "default": "40",
                "autoflow": {
                    "mapTo": "Simulations.FluidSimulation.BoundaryConditions.FlowRate",
                    "units": "kg/s"
                }
            },
            "Hydraulic Fracture.fluidType": {
                "type": "string",
                "label": "Fluid Type",
                "properties": {
                    "autoform": {
                        "type": "object",
                        "properties": {
                            "default": {
                                "type": "string",
                                "default": "Water"
                            },
                            "options": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "enum": [
                                        {
                                            "1": {
                                                "type": "object",
                                                "enum": [
                                                    {
                                                        "label": {
                                                            "type": "string",
                                                            "default": "Water"
                                                        }
                                                    },
                                                    {
                                                        "value": {
                                                            "type": "string",
                                                            "default": "Water"
                                                        }
                                                    },
                                                    {
                                                        "density": {
                                                            "type": "string",
                                                            "default": "1000 kg m^{-3}"
                                                        }
                                                    },
                                                    {
                                                        "viscosity": {
                                                            "type": "string",
                                                            "default": "0.001 Pa s"
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "2": {
                                                "type": "object",
                                                "enum": [
                                                    {
                                                        "label": {
                                                            "type": "string",
                                                            "default": "Slick Stuff"
                                                        }
                                                    },
                                                    {
                                                        "value": {
                                                            "type": "string",
                                                            "default": "SlickStuff"
                                                        }
                                                    },
                                                    {
                                                        "density": {
                                                            "type": "string",
                                                            "default": "800 kg m^{-3}"
                                                        }
                                                    },
                                                    {
                                                        "viscosity": {
                                                            "type": "string",
                                                            "default": "0.005 Pa s"
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "autoflow": {
                        "type": "object",
                        "properties": {
                            "mapTo": {
                                "type": "string",
                                "default": "Status.ProppantTransportSimulation"
                            }
                        }
                    }
                }
            },
            "Hydraulic Fracture.density": {
                "type": "string",
                "label": "Density",
                "optional": true,
                "autoflow": {
                    "displayOnly": true,
                    "selectionDep": "Hydraulic Fracture.fluidType",
                    "selectionDepProperty": "density",
                    "type": "object"
                }
            },
            "Hydraulic Fracture.viscosity": {
                "type": "string",
                "label": "Viscosity",
                "optional": true,
                "autoflow": {
                    "displayOnly": true,
                    "selectionDep": "Hydraulic Fracture.fluidType",
                    "selectionDepProperty": "viscosity"
                }
            },
            "Proppant": {
                "type": "object"
            },
            "Proppant.injectionTime": {
                "type": "string",
                "label": "Injection Time",
                "default": "600",
                "autoflow": {
                    "type": "object",
                    "properties": {
                        "mapTo": {
                            "type": "string",
                            "default": "Simulations.ProppantTransportSimulation.InjectionTime"
                        },
                        "units": {
                            "type": "string",
                            "default": "s"
                        }
                    }
                }
            },
            "Proppant.injectionRate": {
                "type": "string",
                "label": "Injection Rate",
                "default": "17",
                "autoflow": {
                    "type": "object",
                    "properties": {
                        "mapTo": {
                            "type": "string",
                            "default": "Simulations.ProppantTransportSimulation.InjectionRate"
                        },
                        "units": {
                            "type": "string",
                            "default": "kg/s"
                        }
                    }
                }
            },
            "Proppant.amount": {
                "type": "string",
                "label": "Amount",
                "optional": true,
                "autoflow": {
                    "displayOnly": true,
                    "formula": "[Proppant.injectionTime] * [Proppant.injectionRate]",
                    "units": "kg"
                }
            },
            "Proppant.proppantType": {
                "type": "string",
                "label": "Proppant Type",
                "autoform": {
                    "default": "Melior60",
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
                "autoflow": {
                    "mapTo": "Simulations.ProppantTransportSimulation.Materials.ProppantType"
                }
            },
            "Proppant.density": {
                "type": "string",
                "label": "Density",
                "optional": true,
                "autoflow": {
                    "displayOnly": true,
                    "selectionDep": "Proppant.proppantType",
                    "selectionDepProperty": "density"
                }
            },
            "Proppant.diameter": {
                "type": "string",
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
        formId: "form2",
        schemaFormat: "SimpleSchema",
        nextForm: "form3",
        schema: {
            name: {
                type: "string",
                label: "Your name",
                maximum: 50
            },
            email: {
                type: "string",
                label: "E-mail address"
            },
            message: {
                type: "string",
                label: "Message",
                optional: true,
                maximum: 1000
            }
        }
    },
    {
        formId: "form3",
        schemaFormat: "SimpleSchema",
        nextForm: "form1",
        schema: {
            "testField2": {
                "type": "string",
                "label": "Best NBA Team",
                "default": "Warriors"
            },
            "testField3": {
                "type": "string",
                "label": "Best Futbol Club",
                "default": "Barcelona"
            }
        }
    }
];

SeedData.complexJSONSchema.collectionNames = ['Jobs'];