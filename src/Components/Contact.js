import Form_contact from "../utils/Form_contact";
import { images } from "../utils/Images";

const Contact = () => {
  return (
    <div className="flex w-full justify-evenly bg-gray-200">
      <div className="p-14">
        <img src={images[2].url} className="rounded-full w-80" />
      </div>
      <div className="w-1/2">
      <Form_contact/>
      </div>
      {/* <h1>contact</h1> */}
    </div>
  );
};

export default Contact;
