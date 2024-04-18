export const sarJson = {

  "title": "Suspecious Activity Report",
  "showQuestionNumbers": "off",
  "questionErrorLocation": "bottom",
  "widthMode": "responsive",
  "showProgressBar": "auto",
  "progressBarType": "pages",
  "progressBarShowPageNumbers": true,
  "progressBarShowPageTitles": true,
  "widthMode": "static",
  "width": "90%",
  "fitToContainer": true,
  "showPrevButton":false,
  "showCompleteButton":true,
  "showNavigationButtons":true,
    //"showTOC": true,
  "completedHtml": "Form Submitted SuccessFully",
  "pages": [
    {
      "navigationTitle": "Home",
      "elements": [{
          "type": "panel",
          "elements": [
            {
              "type": "html",
              "name": "logo",
              "html":" <div style='display:flex;'> <img src='/logoSar.png' style='width:100px; height:auto;' alt='logo'/> <h3 style='margin-left:25px; color:#233142;'>Suspicious Activity Report </h3></div>",
            },
            
            {
              "type": "html",
              "name":"paragraph",
              "html" : "<div style = 'border:1px solid black; background: white; width: 610px;'>\<p><strong>Filing Instructions:</strong></p></div>\
               <div style= 'border:1px solid black; background: white; padding: 5px; width: 600px;'>\ <p>1.Complete the report in its entirety with all requested or required data known to the filer.<br> 2.Click Validate to ensure proper formatting and that all required fields are completed.<br>3.Click Sign with Pin and Enter your 8-digit PIN to electronically sign the report.</br>4. Click Save to save a local copy of the report.</br>5. Click Print (Optional) to print a paper copy of the report for record keeping purposes.</br>6. Click Submit and go to your Track Status to confirm acceptance.</p>\ </div>",
            },
            
            {
              "type": "text",
              "name": "filling Name",
              "width": "30%",
              "minWidth": "220px",
              "title": "filling Name",
              "titleLocation": "left",
              "cssClass":"custom-input",
              "isRequired": true
            },
            {
              "type": "checkbox",
              "name": "Type of filling",
              "description": "(checks all that apply)",
              // "width": "50%",
              // "minWidth": "256px",
              //"startWithNewLine": false,
              "titleLocation": "left",
              "title": "1 Type of filling",
              "choices": [ "Initial report", "Correct/Amend prior report", "Continuining Activity report", "Joint report"],
              "colCount": 2,
              "isRequired": true
            },
            {
              "type": "text",
              "name": "prd",
              "width": "50%",
              "minWidth": "256px",
              "title": "Prior report Document Control Number/BSA Identifier",
              "titleLocation": "left",
              "isRequired": true,
            },
            {
              "type": "file",
              "title": "Attachment",
              "name": "files",
              "storeDataAsText": false,
              "waitForUpload": true,
              "allowMultiple": true,
              "maxSize": 102400,
              "maxSizeText" : "File size shoulld not exceed 100KB",
              "hideNumber": true,
              "titleLocation": "left",
              "acceptedTypes":"application/pdf",
              // "isRequired": true,
            },
            {
              "type": "html",
              "name":"btn",
              "html" : "<div style='display:flex;'> <button style='background-color:lightgray; color:black; margin-left:40px;' onClick='customFunction1()'> Save</button><button style='background-color:lightgray; color:black;  margin-left:40px;' onClick='customFunction2()'> Validate</button> <button style='background-color:lightgray; color:black; margin-left:40px;' onClick='customFunction3()'> Submit</button><button style='background-color:lightgray; color:black; margin-left:40px;' onClick='customFunction4()'> Print</button></div>",
          
           
            },
            // {
            //   "type": "html",
            //   "name":"btn",
            //   "html" : "<button style='background-color:lightgray; color:black;' onClick='customFunction()'> Validate</button>",
            //   "startWithNewLine": "false",
            //   "indent":"5",
            // },
            // {
            //   "type": "html",
            //   "name":"btn",
            //   "html" : "<button style='background-color:lightgray; color:black;' onClick='customFunction()'> Submit</button>",
            //   "startWithNewLine": "false",
            //   "indent":"1",
            // },
            // {
            //   "type": "html",
            //   "name":"btn",
            //   "html" : "<button style='background-color:lightgray; color:black;' onClick='customFunction()'> Print</button>",
            //   "startWithNewLine": "false",
            //   "indent":"1",
            // },
            {
              "type": "html",
              "name":"paragraph",
              "html" : "<div style = 'border:1px solid #ccc; padding: 10px; '>\ <p>By providing my PIN ,I acknowledge that I am electronically signing the BSA report.</p>\
               <hr style='margin':10 0px;'>\ <button  style=' background-color:lightgray; color:black;' id='sign'  type='button'> Sign with Pin</button>\ </div>",
            },
            
            {
              "type": "signaturepad",
              "name": "signature",
              "title": "please sign here",
              "signatureWidth": 600,
              "visibleIf" : "{sign} = true",
            },
          ],
          "onAfterRender" : "function(survey){\
            $('#sign').click(function(){\
             survey.setValue('sign',true);\
             survey.render();\
            });\
           }"

        }], //page1 end
        
      },{
          "navigationTitle": "Step1.Filling Institution Contact Information",
          "elements": [
            {
              "type": "panel",
              "title": "Part lV Filling Institution Contact Information",
              "elements": [
                {
                  "type": "text",
                  "width": "42%",
                  "minWidth": "256px",
                  "title": "82 Types of Financial Institution",
                  "titleLocation": "left",
                },
                {
                  "type": "text",
                  "width": "50%",
                  "minWidth": "256px",
                  //"startWithNewLine": false,
                  "titleLocation": "left",
                  "title": "78 Primary federal regulator",
                  //"isRequired": true
                },
                {
                  "type": "text",
                  "name": "ssn",
                  "width": "50%",
                  "minWidth": "256px",
                  "description": "(Holding company, lead finincial institution, or agency, if applicable)",
                  "title": "79 Filer name",
                  "titleLocation": "left",
                },
                {
                  "type": "text",
                  "title": "80 TIN",
                  "titleLocation": "left",
                  "width": "50%",
                  "minWidth": "256px",
                  
                },{
                  "type": "text",
                  "title": "81 TIN Type",
                  "titleLocation": "left",
                  "width": "50%",
                  "minWidth": "256px",
                  "startWithNewLine": "false",
                },
                {
                  "type": "checkbox",
                  "title": "83 Types of securities and future institution or individual filling this report - check boxes for functions that apply to this report",
                  "titleLocation": "left",
                  "width": "50%",
                  "minWidth": "256px",
                  "choices": [ "Clearing Broker Securities", "Introducing broker-securities", "SRO Securities", "CPO/CTA", "Investment Advisier", "Subsidiary of financial/bank holding company", "Future Commission Merchant", "Investement Company", "Holding Company","Retail Foreign Exchange dealer", "Introducing broker commodities","SRO Future","Other"],
                  "colCount": 3,
                },
                {
                  "type": "multipletext",
                  "title": "84 Financial Institution identification",
                  "titleLocation": "left",
                  "width": "40%",
                },
                {
                  "type": "text",
                  "title": "Type",
                  "titleLocation": "left",
                  "width": "60%",
                  "minWidth": "400px",
                  "startWithNewLine": "false",
                },
                {
                  "type": "text",
                  "title": "Number",
                  "titleLocation": "left",
                  "width": "50%",
                  "minWidth": "256px",
                  "startWithNewLine": "true",
                  "indent": "17",
                },
                {
                  "type": "text",
                  "title": "85 Address",
                  "titleLocation": "left",
                  "width": "50%",
                },
                {
                  "type": "text",
                  "title": "86 City",
                  "titleLocation": "left",
                  "width": "50%",
                },
                {
                  "type": "text",
                  "title": "87 State",
                  "titleLocation": "left",
                  //"width": "50%",
                },
                {
                  "type": "text",
                  "title": "88 Zip/Postal Code",
                  "titleLocation": "left",
                  //"width": "50%",
                  "startWithNewLine": "false",
                },
                {
                  "type": "text",
                  "title": "89 Country",
                  "titleLocation": "left",
                  //"width": "50%",
                  "startWithNewLine": "false",
                },
                {
                  "type": "text",
                  "title": "90 Alternate name",
                  "titleLocation": "left",
                  "description": "eg. AKA - Individual or Trade name, DBA - entity",
                  "startWithNewLine": "false",
                },
                {
                  "type": "text",
                  "title": "91 Internal control/File number",
                  "titleLocation": "left",
                },
                {
                  "type": "text",
                  "title": "92 LE contact Agency",
                  "titleLocation": "left",
                },
                {
                  "type": "text",
                  "title": "93 LE contact Name",
                  "titleLocation": "left",
                },
                {
                  "type": "text",
                  "title": "94 LE contact phone number",
                  "description": "(Include area code)",
                  "titleLocation": "left",
                  "width": "65%",
                },
                {
                  "type": "text",
                  "title": "Ext.",
                  "startWithNewLine":"false",
                  "titleLocation": "left",
                  //"width": "1%",
                },
                {
                  "name": "95 LE Contact Date",
                  "type": "text",
                  "title": "95 LE Contact Date",
                  "titleLocation": "left",
                  "inputType": "date",
                  "defaultValueExpression": "currentDate()",
                  //"isRequired": true
                },
                {
                  "type": "text",
                  "title": "96 filling Instition contact office",
                  "titleLocation": "left",
                  //"width": "1%",
                },
                {
                  "type": "text",
                  "title": "97 filling Instition contact phone number",
                  "titleLocation": "left",
                  "width": "65%",
                  "description": "(Include area code)",
                },
                {
                  "type": "text",
                  "title": "Ext.",
                  "startWithNewLine":"false",
                  "titleLocation": "left",
                  //"width": "1%",
                },
                {
                  "name": "Date",
                  "type": "text",
                  "title": "98 Date field",
                  "titleLocation": "left",
                  "inputType": "date",
                  //"defaultValueExpression": "currentDate()",
                  "description": "(Date field will be auto-populated when the form is signed)",
                },
            ],
    
            }],  //elements 1st

},{
  "navigationTitle": "Step2.Filling Institution Where activity occured",
  "elements": [
    {
      "type": "panel",
      "title": "Part lll Information about Institution Where activity occured",
      "elements": [
        {
          "type": "text",
          "width": "65%",
          // "minWidth": "256px",
          "title": "47 Types of Financial Institution",
          "titleLocation": "left",
        },
        {
          "type": "text",
          "startWithNewLine": false,
          "titleLocation": "hidden",
          "title": "2nd input",
          //"isRequired": true
        },
        {
          "type": "text",
          "width": "50%",
          "minWidth": "256px",
          //"startWithNewLine": false,
          "titleLocation": "left",
          "title": "48 Primary federal regulator",
          //"isRequired": true
        },
        {
          "type": "checkBox",
          "titleLocation": "left",
          "title": "49 Types of gaming Institution",
          "choices": [ "State licensed casino", "Tribal Authorised casino", "Card club", "other(Please specify)"],
          "colCount": 4,
          //"isRequired": true
        },
        {
          "type": "checkBox",
          "titleLocation": "left",
          "showOtherItem": true,
          "title": "50 Types of Securities and Futures Institution or Individual where activity occured -check box(es) that apply to this report",
          "choices": [ "Clearing broker-Securities", "Introducing broker-Securities", "Subsidiary of financial/bank holding Company", "Future commission Merchant","Investment Advisior","Retail foreign exchange dealer","Holding Company","Investment company","Introducing Broker commodities"],
          "colCount": 3,
          //"isRequired": true
        },
        {
          "type": "multipletext",
          "title": "51 Financial Institution identification",
          "titleLocation": "left",
          "width": "40%",
        },
        {
          "type": "text",
          "title": "Type",
          "titleLocation": "left",
          "width": "60%",
          "minWidth": "400px",
          "startWithNewLine": "false",
        },
        {
          "type": "text",
          "title": "Number",
          "titleLocation": "left",
          "width": "50%",
          "minWidth": "256px",
          "startWithNewLine": "true",
          "indent": "17",
        },
        {
          "type": "checkBox",
          "title": "52 Financial Institution's role in transaction",
          "titleLocation": "left",
          "width": "50%",
          "minWidth": "256px",
          "choices": [ "Selling location","Paying location", "Both"],
          "colCount": 3,
        },
        {
          "type": "checkBox",
          "name":"unknown",
          "titleLocation": "right",
          "width": "50%",
          "minWidth": "256px",
          "colCount": 1,
          "choices":["unknown"],
        },
        {
          "type": "text",
          "title": "57. Legal name of financial Institution",
          "titleLocation": "left",
          "width": "50%",
          "minWidth": "256px",
          "enableIf": "{unknown}=true",
          "startWithNewLine": "false",
        },
        
      ],
}],
},{
  "navigationTitle": "Step3.Subject Information",
  "elements": [
    {
      "type": "panel",
      "title": "Part l Subject Information",
      "elements": [
        {
          "type": "text",
          "width": "65%",
          // "minWidth": "256px",
          "title": "47 Types of Financial Institution",
          "titleLocation": "left",
        },
        {
          "type": "text",
          "startWithNewLine": false,
          "titleLocation": "hidden",
          "title": "2nd input",
          //"isRequired": true
        },
        {
          "type": "text",
          "width": "50%",
          "minWidth": "256px",
          //"startWithNewLine": false,
          "titleLocation": "left",
          "title": "48 Primary federal regulator",
          //"isRequired": true
        },
        {
          "type": "checkBox",
          "titleLocation": "left",
          "title": "49 Types of gaming Institution",
          "choices": [ "State licensed casino", "Tribal Authorised casino", "Card club", "other(Please specify)"],
          "colCount": 4,
          //"isRequired": true
        },
        {
          "type": "checkBox",
          "titleLocation": "left",
          "showOtherItem": true,
          "title": "50 Types of Securities and Futures Institution or Individual where activity occured -check box(es) that apply to this report",
          "choices": [ "Clearing broker-Securities", "Introducing broker-Securities", "Subsidiary of financial/bank holding Company", "Future commission Merchant","Investment Advisior","Retail foreign exchange dealer","Holding Company","Investment company","Introducing Broker commodities"],
          "colCount": 3,
          //"isRequired": true
        },
        {
          "type": "multipletext",
          "title": "51 Financial Institution identification",
          "titleLocation": "left",
          "width": "40%",
        },
        {
          "type": "text",
          "title": "Type",
          "titleLocation": "left",
          "width": "60%",
          "minWidth": "400px",
          "startWithNewLine": "false",
        },
        {
          "type": "text",
          "title": "Number",
          "titleLocation": "left",
          "width": "50%",
          "minWidth": "256px",
          "startWithNewLine": "true",
          "indent": "17",
        },
        {
          "type": "checkBox",
          "title": "52 Financial Institution's role in transaction",
          "titleLocation": "left",
          "width": "50%",
          "minWidth": "256px",
          "choices": [ "Selling location","Paying location", "Both"],
          "colCount": 3,
        },
        
      ],
}],
},
{
  "navigationTitle": "Step4. Suspicious Activity Information",
  "elements": [
    {
      "type": "panel",
      "title": "Part ll Suspicious Activity Information",
      "elements": [
        {
          "type": "text",
          "width": "65%",
          // "minWidth": "256px",
          "title": "47 Types of Financial Institution",
          "titleLocation": "left",
        },
        {
          "type": "text",
          "startWithNewLine": false,
          "titleLocation": "hidden",
          "title": "2nd input",
          //"isRequired": true
        },
        {
          "type": "text",
          "width": "50%",
          "minWidth": "256px",
          //"startWithNewLine": false,
          "titleLocation": "left",
          "title": "48 Primary federal regulator",
          //"isRequired": true
        },
        {
          "type": "checkBox",
          "titleLocation": "left",
          "title": "49 Types of gaming Institution",
          "choices": [ "State licensed casino", "Tribal Authorised casino", "Card club", "other(Please specify)"],
          "colCount": 4,
          //"isRequired": true
        },
        {
          "type": "checkBox",
          "titleLocation": "left",
          "showOtherItem": true,
          "title": "50 Types of Securities and Futures Institution or Individual where activity occured -check box(es) that apply to this report",
          "choices": [ "Clearing broker-Securities", "Introducing broker-Securities", "Subsidiary of financial/bank holding Company", "Future commission Merchant","Investment Advisior","Retail foreign exchange dealer","Holding Company","Investment company","Introducing Broker commodities"],
          "colCount": 3,
          //"isRequired": true
        },
        {
          "type": "multipletext",
          "title": "51 Financial Institution identification",
          "titleLocation": "left",
          "width": "40%",
        },
        {
          "type": "text",
          "title": "Type",
          "titleLocation": "left",
          "width": "60%",
          "minWidth": "400px",
          "startWithNewLine": "false",
        },
        {
          "type": "text",
          "title": "Number",
          "titleLocation": "left",
          "width": "50%",
          "minWidth": "256px",
          "startWithNewLine": "true",
          "indent": "17",
        },
        {
          "type": "checkBox",
          "title": "52 Financial Institution's role in transaction",
          "titleLocation": "left",
          "width": "50%",
          "minWidth": "256px",
          "choices": [ "Selling location","Paying location", "Both"],
          "colCount": 3,
        },
        
      ],
}],
},
{
  "navigationTitle": "Step5. Narrative",
  "elements": [
    {
      "type": "panel",
      "title": "Part V Suspicious Activity Information - Narrative",
      "elements": [
        {
          "type": "comment",
          "width": "65%",
          "title": "comment",
          "titleLocation": "hidden",
          "isRequired":true,
          "Validators":[
            {
            "type":"text",
            "minLength":0,
            "maxLength":100,
            "renderWidth":"streach",
            }
          ]
        },
             ],
}],
}

], //pages
};
