import "./style.css";

function Card({ icon, description }) {
  console.log("Icon", icon);
  console.log(description);
  return (
    <div className="card-main">
      {icon}
      {description}
    </div>
  );
}

export default Card;
