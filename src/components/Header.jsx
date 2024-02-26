import logo from "../assets/investment-calculator-logo.png";

export const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="Logo show a money bag" />
      <h1>React Investment Calculator</h1>
      <p>Created by: Ahmed Essam</p>
    </header>
  );
};
