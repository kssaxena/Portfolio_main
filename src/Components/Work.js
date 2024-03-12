import Hire_me from "../utils/Hire_me";
import Work_photography_area from "../utils/Work_Photography_area";
import Work_coding_area from "../utils/Work_coding_area";



const Work = () => {
  return (
    <div className="bg-gray-200">
      <Work_coding_area/>
      <Work_photography_area/>
      <Hire_me/>
    </div>
  );
};

export default Work;