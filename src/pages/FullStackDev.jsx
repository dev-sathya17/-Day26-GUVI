import Card from "../components/Card/Card";
import { data } from "../data/fsd";
import "../App.css";

const FullStackDev = () => {
  return (
    <div className="card-container">
      {data.map((data, index) => {
        return <Card data={data} key={index} />;
      })}
    </div>
  );
};

export default FullStackDev;
