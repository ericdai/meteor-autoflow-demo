SeedData = typeof SeedData === 'undefined' ? {} : SeedData;
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
                "defaultValue": "Orange",
                "allowedValues": ["Purple", "Blue", "Orange", "Green"]
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
                            "value": "SF"
                        },
                        {
                            "label": "Oakland",
                            "value": "Oaktown"
                        },
                        {
                            "label": "Berkeley",
                            "value": "Berserkely"
                        },
                        {
                            "label": "Alameda",
                            "value": "ATown"
                        }
                    ]
                },
            }
        }
    }
];

SeedData.basicSimpleSchema.collectionNames = ['People'];