import "./style.css";
function Button(props) {
  return (
    <div className="button-container">
      <button id="global-button-cont" style={props.style}>
        {props.text}
      </button>
    </div>
  );
}

export default Button;
