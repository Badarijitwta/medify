import { Button } from "@mui/material";

function MyButton(props) {
  return (
    <div className="button-container">
      {/* <button id="global-button-cont" style={props.style}>
        {props.text}
      </button> */}
      <Button
        size="medium"
        style={props.style}
        sx={{
          fontFamily: "Poppins",
          textTransform: "none",
          backgroundColor: "rgba(42, 168, 255, 1)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(42, 168, 255, 0.8)",
          },
        }}
      >
        {props.text}
      </Button>
    </div>
  );
}

export default MyButton;
