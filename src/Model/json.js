export const json = {

  "showProgressBar": "auto",
  "progressBarType": "pages",
  "progressBarShowPageNumbers": true,
  "progressBarShowPageTitles": true,
  "title": "Form Example",
  "completedHtml": "Form Submitted SuccessFully",
  "pages": [{
    "navigationTitle": "Overall satisfaction",
    "elements": [{
      "name": "username",
      "type": "text",
      "title": "Username",
      "maxLength": 25
    }, {
      "name": "email",
      "type": "text",
      "title": "E-mail address",
      "inputType": "email",
      "placeholder": "foobar@example.com",
      //"isRequired": true,
      "autocomplete": "email"
    }, {
      "name": "password",
      "type": "text",
      "title": "Password",
      "description": "Enter 8 characters minimum.",
      "inputType": "password",
      //"isRequired": true,
      "autocomplete": "password",
      "validators": [{
        "type": "text",
        "minLength": 8,
        "text": "Your password must be at least 8 characters long."
      }]
    }, {
      "name": "date",
      "type": "text",
      "title": "Select a date",
      "inputType": "date",
      "defaultValueExpression": "currentDate()",
      //"isRequired": true
    }, {
      "name": "url",
      "type": "text",
      "title": "URL",
      "inputType": "url",
      "placeholder": "https://www.example.com",
      "validators": [{
        "type": "regex",
        "regex": "https://.*",
        "text": "Your answer must match the URL pattern."
      }]
    }]
  },{
    "navigationTitle": "Pricing",
    "elements": [{
      "name": "number",
      "type": "text",
      "title": "Enter a number from 0 to 100",
      "inputType": "number",
      "width": "50%",
      "minWidth": "256px",
      "titleLocation": "left",
      "min": 0,
      "max": 100,
      "defaultValue": 0,
      "isRequired": true
    }, {
      "name": "range",
      "type": "text",
      "title": "Select a value",
      "inputType": "range",
      "startWithNewLine": false,
      "width": "50%",
      "minWidth": "256px",
     "titleLocation": "left",
      "min": 0,
      "max": 100,
      "step": 10,
      "defaultValue": 90
    },  {
      "name": "phone",
      "type": "text",
      "title": "Enter a phone number",
      "inputType": "tel",
      "placeholder": "+0 (000) 000-00-00",
      "autocomplete": "tel",
      "validators": [{
        "type": "regex",
       // "regex": "\\+[0-9]{1} \\([0-9]{3}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}",
        "text": "Phone number must be in the following format: +0 (000) 000-00-00"
      }]
    }, {
      "name": "color",
      "type": "text",
      "title": "Select a color",
      "inputType": "color",
      "defaultValue": "#19b394"
    }, {
      "type": "text",
      "name": "decimal",
      "title": "Decimal:",
      "maskType": "numeric",
      "maskSettings": {
        "precision": 1
      }
    }, {
      "type": "text",
      "name": "currency",
      "startWithNewLine": false,
      "title": "Currency:",
      "maskType": "currency",
      "maskSettings": {
        "prefix": "$"
      }
    }, {
      "type": "text",
      "name": "creditcard",
			"title": "Credit card number:",
      "maskType": "pattern",
      "maskSettings": {
        "pattern": "9999 9999 9999 9999"
      }
    }, {
      "type": "radiogroup",
      "name": "car",
      "title": "Which is the brand of your car?",
      "isRequired": true,
      "showNoneItem": true,
      "showOtherItem": true,
      "colCount": 1,
      "choices": [ "Ford", "Vauxhall", "Volkswagen", "Nissan", "Audi", "Mercedes-Benz", "BMW", "Peugeot", "Toyota" ],
      "separateSpecialChoices": true,
      "showClearButton": true
    },  {
      "type": "dropdown",
      "name": "car",
      "title": "Which is the brand of your car?",
      "isRequired": true,
      "showNoneItem": true,
      "showOtherItem": true,
      "choices": [ "Ford", "Vauxhall", "Volkswagen", "Nissan", "Audi", "Mercedes-Benz", "BMW", "Peugeot", "Toyota", "Citroen" ]
    }, {
      "type": "dropdown",
      "name": "country",
      "title": "Select a country",
      "description": "All country",
      "choicesByUrl": {
        "url": "https://surveyjs.io/api/CountriesExample",
        "valueName": "name"
      }
    }, {
      "type": "tagbox",
      "isRequired": true,
      "choicesByUrl": {
        "url": "https://surveyjs.io/api/CountriesExample"
      },
      "name": "countries",
      "title": "Which countries have you visited within the last three years?",
      "description": "Please select all that apply."
    },
     {
      "type": "checkbox",
      "name": "car",
      "title": "Which is the brand of your car?",
      "description": "If you own cars from multiple brands, please select all of them.",
      "choices": [ "Ford", "Volkswagen", "Peugeot", "Toyota", "Citroen" ],
      "isRequired": true,
      "colCount": 2,
      "showNoneItem": true,
      "showOtherItem": true,
      "showSelectAllItem": true,
      "separateSpecialChoices": true
    }, 
    {
      "type": "file",
      "title": "Please upload your files",
      "name": "files",
      "storeDataAsText": false,
      "waitForUpload": true,
      "allowMultiple": true,
      "maxSize": 102400,
      "maxSizeText" : "File size shoulld not exceed 100KB",
      "hideNumber": true,
      "titleLocation": "top",
      "acceptedTypes":"application/pdf" 
    }]
}],
    "showQuestionNumbers": false
  };

