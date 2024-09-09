import { IoMdCheckmarkCircle } from "react-icons/io";
import PropTypes from "prop-types";

const Features = ({features}) => {
    return (
        <div className="px-8 flex text-center items-center">
            
            <IoMdCheckmarkCircle className="text-red-700" />
            <h1>Feature: {features}</h1>
            
        </div>
    );
};
Features.propTypes = {
    features: PropTypes.string, 
    
  }
export default Features;