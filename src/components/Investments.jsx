import { calculateInvestmentResults, formatter } from "../util/investment";

export function Investments({ investmentData }) {
  const investments = calculateInvestmentResults({ ...investmentData });

  let initialInvestment =
    investments[0].valueEndOfYear -
    investments[0].interest -
    investments[0].annualInvestment;

  return (
    <table className="container">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investments.map((investment, index) => {
          let totalInterest =
            investment.valueEndOfYear -
            investment.annualInvestment * investment.year -
            initialInvestment;

          let totalAmountInvested = investment.valueEndOfYear - totalInterest;
          return (
            <tr key={index}>
              <td>{investment.year}</td>
              <td>{formatter.format(investment.valueEndOfYear)}</td>
              <td>{formatter.format(investment.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
