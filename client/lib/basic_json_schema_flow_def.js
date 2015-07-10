SeedData = typeof SeedData === 'undefined' ? {} : SeedData;
SeedData.basicJSONSchema = {};
SeedData.basicJSONSchema.flowDef = [
    {
        "formId": "form1",
        "schemaFormat": "JSONSchema",
        "collectionName": "People",
        "collectionId": "PersonID1",
        "nextForm": "form2",
        "schema": {
            "name": {
                "type": "string",
                "description": "Your name",
                "max": 50
            },
            "email": {
                "type": "string",
                "description": "E-mail address"
            },
            "color": {
                "type": "string",
                "description": "Favorite color",
                "default": "Orange",
                "enum": ["Purple", "Blue", "Orange"]
            }
        }
    },
    {
        "formId": "form2",
        "schemaFormat": "JSONSchema",
        "collectionName": "People",
        "collectionId": "PersonID1",
        "nextForm": "form1",
        "schema": {
            "telephone": {
                "type": "String",
                "description": "Telephone",
                "max": 50
            },
            "city": {
                "type": "String",
                "description": "City",
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

SeedData.basicJSONSchema.collectionNames = ['People'];