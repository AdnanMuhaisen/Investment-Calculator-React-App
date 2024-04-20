import "../css/index.css";

export default function UserInput({
  inputDescription,
  onValueChange,
  investmentInfo,
  ...props
}) {
  function handleOnValueChange(event) {
    onValueChange({
      ...investmentInfo,
      [event.target.name]: +event.target.value,
    });
  }

  return (
    <div className="user-input">
      <label>{inputDescription.toUpperCase()}</label>
      <input type="text" {...props} onChange={handleOnValueChange} />
    </div>
  );
}
