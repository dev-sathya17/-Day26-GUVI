import Card from "../components/Card/Card";
import { data } from "../data/cyberSecurity";
import "../App.css";
const CyberSecurity = () => {
  return (
    <div className="card-container">
      {data.map((data, index) => {
        return <Card data={data} key={index} />;
      })}
    </div>
  );
};

export default CyberSecurity;
