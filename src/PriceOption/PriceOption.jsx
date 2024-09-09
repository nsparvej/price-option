import PropTypes from "prop-types";
import Features from "../components/Features/Features";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;

  return (
    <div className="text-white bg-blue-500 border flex flex-col gap-3 ">
      <h4 className="text-5xl font-bold text-center pt-10 mb-10"> {price}</h4>
      <h3 className="text-3xl font-bold text-center text-purple-900 mb-6">
        {name}
      </h3>
      <div className="pl-6 flex-grow">
        {features.map((features, index) => (
          <Features features={features} key={index}></Features>
        ))}
      </div>

      <button className="border p-4 hover:bg-green-900 m-8">Bye Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
