SeedData.basicSimpleSchema = {};
SeedData.basicSimpleSchema.flowDef = [
    {
        "formId": "form1",
        "schemaFormat": "SimpleSchema",
        "collectionName": "People",
        "collectionId": "PersonID1",
        "nextForm": "form2",
        "schema": {
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
                "label": "Favorite color",
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
        "formId": "form2",
        "schemaFormat": "SimpleSchema",
        "collectionName": "People",
        "collectionId": "PersonID1",
        "nextForm": "form1",
        "schema": {
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