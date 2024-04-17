import React, { useEffect, useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { json } from "../Model/json";
import { SurveyModel } from "../Model/SurveyModel";
import "survey-core/defaultV2.min.css";

function SurveyComponent() {

//   const [surveyJSON, setSurveyJSON] = useState({});
//   useEffect(() => {
//     const mergeJson = {pages: [...json.pages, ...SurveyModel.pages]
//   };
//   setSurveyJSON(mergeJson);
// },[]);

    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
      alert("Thank you for submitting the form");
        console.log(JSON.stringify(sender.data, null, 3));
    });

    //Survey.StyleManager.applyTheme("modern");
    // survey.onUpdateQuestionCssClasses.add(function(sender,options){
    // var classes= options.cssClasses;
    // classes.root ="sv-root sv_default_css top_right_buttons";
    // });

survey.onUploadFiles.add((_, options) => {
  console.log("uploaded file:", options.value);
  const formData = new FormData();
  options.files.forEach((file) => {
      formData.append(file.name, file);
  });
  fetch("https://api.surveyjs.io/private/Surveys/uploadTempFiles", {
    method: "POST",
    body: formData
})
.then((response) => response.json())
            .then((data) => {
                options.callback(
                    options.files.map((file) => {
                        return {
                            file: file,
                            content: "https://api.surveyjs.io/private/Surveys/getTempFile?name=" + data[file.name]
                        };
                    })
                );
            })
            .catch((error) => {
                console.error("Error: ", error);
                options.callback([], [ 'An error occurred during file upload.' ]);
            });
    });
   
   return (<Survey model={survey} />);
  }
export default SurveyComponent;



//After a respondent submits a form, the results are available within the onComplete event handler.
// In real-world applications, you should send the results to a server where they will be stored in a database and processed:
