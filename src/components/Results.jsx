import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

export const Results = ({ input }) => {
  const ResultData = calculateInvestmentResults(input);
  const initialInvestment =
    ResultData[0].valueEndOfYear -
    ResultData[0].interest -
    ResultData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Totally Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {ResultData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
