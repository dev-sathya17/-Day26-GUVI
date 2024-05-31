import Card from "../components/Card/Card";
import { data } from "../data/dataScience";
import "../App.css";

const DataScience = () => {
  return (
    <div className="card-container">
      {data.map((data, index) => {
        return <Card data={data} key={index} />;
      })}
    </div>
  );
};

export default DataScience;
