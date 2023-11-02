import React, { useState } from "react";
import "./AgeCalculator.css";
import AgeResult from "./AgeResult";
import AgeCalc from "./AgeCalc";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";
const AgeCalculator = () => {
  const [age, setage] = useState(null);

  const calculateage = (birthdate) => {
    const today = new Date();
    const birthdateobj = new Date(birthdate);
    const ageyears = differenceInYears(today, birthdateobj);
    const agemonths = differenceInMonths(today, birthdateobj) % 12;
    const agedays = differenceInDays(
      today,
      new Date(today.getFullYear(), today.getMonth(), birthdateobj.getDate())
    );

    setage({
      years: ageyears,
      months: agemonths,
      days: agedays,
    });
  };
  return (
    <div className="ageCalc">
      <h1>Age Calculator</h1>
      <p>Write Your date of birth</p>
      <AgeCalc calculateage={calculateage} />
      {age && <AgeResult age={age} />}
    </div>
  );
};

export default AgeCalculator;
