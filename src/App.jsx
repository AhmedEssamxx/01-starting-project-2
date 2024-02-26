import { UserInput } from "./components/UserInput";
import { Header } from "./components/Header";
import { useState } from "react";
import { Results } from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, // Convert string to number
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {userInput.duration >= 1 ? (
        <Results input={userInput} />
      ) : (
        <p className="center">Please Enter A Duration Greater Than Zero.</p>
      )}
    </>
  );
}

export default App;
