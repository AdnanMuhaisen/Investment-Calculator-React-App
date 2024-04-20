import { useState } from "react";
import Header from "./Header";
import { Investments } from "./Investments";
import UserInput from "./UserInput";
import InvalidUserInput from "./InvalidUserInput";

const INITIAL_INVESTMENT_INFO = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [investmentInfo, setInvestmentInfo] = useState(INITIAL_INVESTMENT_INFO);
  const isValidInputToDisplayResults = investmentInfo.duration > 0;

  function handleChangeInvestmentInfo(updatedInvestmentData) {
    setInvestmentInfo({ ...updatedInvestmentData });
  }

  return (
    <>
      <Header />
      <div className="user-inputs container">
        <UserInput
          inputDescription="initial investment"
          type="number"
          step={1}
          required
          defaultValue={investmentInfo.initialInvestment}
          name="initialInvestment"
          investmentInfo={investmentInfo}
          onValueChange={handleChangeInvestmentInfo}
        />
        <UserInput
          inputDescription="annual investment"
          type="number"
          required
          name="annualInvestment"
          defaultValue={investmentInfo.annualInvestment}
          investmentInfo={investmentInfo}
          onValueChange={handleChangeInvestmentInfo}
        />
        <UserInput
          inputDescription="expected return"
          type="number"
          required
          defaultValue={investmentInfo.expectedReturn}
          name="expectedReturn"
          investmentInfo={investmentInfo}
          onValueChange={handleChangeInvestmentInfo}
        />
        <UserInput
          inputDescription="duration"
          type="number"
          required
          step={1}
          defaultValue={investmentInfo.duration}
          name="duration"
          investmentInfo={investmentInfo}
          onValueChange={handleChangeInvestmentInfo}
        />
      </div>
      {isValidInputToDisplayResults ? (
        <Investments investmentData={investmentInfo} />
      ) : (
        <InvalidUserInput
          title="Invalid Duration Value"
          description="Duration must be a positive number"
        />
      )}
    </>
  );
}

export default App;
