import Card from "../components/Card/Card";
import { data } from "../data/fsd";

const FullStackDev = () => {
  return (
    <div>
      {data.map((data, index) => {
        return <Card data={data} key={index} />;
      })}
    </div>
  );
};

export default FullStackDev;
