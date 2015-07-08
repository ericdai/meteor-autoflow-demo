SeedData.basicSimpleSchema = {};
SeedData.basicSimpleSchema.flowDef = [
    {
        "name": "formSchema1",
        "schemaFormat": "SimpleSchema",
        "schema": {
            "nextForm": {
                "type": "String",
                "defaultValue": "formSchema2",
                "autoflow": {
                    "hidden": true
                }
            },
            "collectionName": {
                "type": "String",
                "defaultValue": "People",
                "autoflow": {
                    "hidden": true
                }
            },
            "collectionId": {
                "type": "String",
                "defaultValue": "PersonID1",
                "autoflow": {
                    "hidden": true
                }
            },
            "name": {
                "type": "String",
                "label": "Your name",
                "max": 50
            },
            "email": {
                "type": "String",
                "label": "E-mail address"
            },
            "color": {
                "type": "String",
                "label": "Favorite Color",
                "autoform": {
                    "options": [
                        {
                            "label": "Purple",
                            "value": "Purple"
                        },
                        {
                            "label": "Blue",
                            "value": "Blue"
                        },
                        {
                            "label": "Orange",
                            "value": "Orange"
                        }
                    ]
                }
            }
        }
    },
    {
        "name": "formSchema2",
        "schemaFormat": "SimpleSchema",
        "schema": {
            "nextForm": {
                "type": "String",
                "defaultValue": "formSchema1",
                "autoflow": {
                    "hidden": true
                }
            },
            "collectionName": {
                "type": "String",
                "defaultValue": "People",
                "autoflow": {
                    "hidden": true
                }
            },
            "collectionId": {
                "type": "String",
                "defaultValue": "PersonID1",
                "autoflow": {
                    "hidden": true
                }
            },
            "telephone": {
                "type": "String",
                "label": "Telephone",
                "max": 50
            },
            "city": {
                "type": "String",
                "label": "City",
                "autoform": {
                    "defaultValue": "Berkeley",
                    "options": [
                        {
                            "label": "San Francisco",
                            "value": "San Francisco"
                        },
                        {
                            "label": "Oakland",
                            "value": "Oakland"
                        },
                        {
                            "label": "Berkeley",
                            "value": "Berkeley"
                        },
                        {
                            "label": "Alameda",
                            "value": "Alameda"
                        }
                    ]
                },
            }
        }
    }
];

SeedData.basicSimpleSchema.collectionNames = ['People'];