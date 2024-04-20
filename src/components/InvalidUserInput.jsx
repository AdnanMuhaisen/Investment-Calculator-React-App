import "../css/index.css";

export default function InvalidUserInput({ title, description }) {
  return (
    <div className="invalid-user-input">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
