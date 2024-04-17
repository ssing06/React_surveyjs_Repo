//import React, { useEffect, useState } from "react";
import "survey-core/defaultV2.min.css";
import { Model, matrixDropdownColumnTypes,SvgRegistry } from "survey-core";
import { Survey } from "survey-react-ui";
import {sarJson} from "../Model/SarJson";
import { themeJson } from "./theme";


matrixDropdownColumnTypes.file = {};
function SarComponent(){
  const customIcon = '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M11.35 1.34999L10.65 0.649994L6.05002 5.24999L1.35002 0.649994L0.650024 1.34999L5.25002 6.04999L0.650024 10.65L1.35002 11.35L6.05002 6.74999L10.65 11.35L11.35 10.65L6.75002 6.04999L11.35 1.34999Z"/></svg>';
  SvgRegistry.registerIconFromSvg("v2check", customIcon);
    const survey = new Model(sarJson);
    survey.applyTheme(themeJson);
    survey.onComplete.add((sender, options) => {
      alert("Thank you for submitting the form");
        console.log(JSON.stringify(sender.data, null, 3));
    });


    return (<Survey model={survey} />);
}

export default SarComponent;