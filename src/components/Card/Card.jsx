import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={data.img} alt={data.name} />
      <h3>{data.name}</h3>
    </div>
  );
};

export default Card;
