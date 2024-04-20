import HeaderLogo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header className="container">
      <img src={HeaderLogo} alt="Investment Calculator Logo" srcset="" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
