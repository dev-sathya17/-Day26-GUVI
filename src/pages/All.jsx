import { data as fsd } from "../data/fsd";
import { data as cyberSec } from "../data/cyberSecurity";
import { data as dsData } from "../data/dataScience";
import Card from "../components/Card/Card";
import "../App.css";

const All = () => {
  const data = [...fsd, ...cyberSec, ...dsData];

  return (
    <div className="card-container">
      {data.map((data, index) => {
        return <Card data={data} key={index} />;
      })}
    </div>
  );
};

export default All;
