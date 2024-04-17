export const SurveyModel = {

  "showProgressBar": "auto",
  "progressBarType": "pages",
  "progressBarShowPageNumbers": true,
  "progressBarShowPageTitles": true,
  "title": "Form Example",
  "completedHtml": "Form Submitted SuccessFully",
  "pages": [{
    "navigationTitle": "client survey",
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
    }]
  }]
  };
