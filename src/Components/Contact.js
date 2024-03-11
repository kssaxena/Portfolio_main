import Form_contact from "../utils/Form_contact";
import { images } from "../utils/Images";

const Contact = () => {
  return (
    <div>
      <h1 className="bg-gray-200 text-center text-red-500 text-4xl h-fit p-10 font-semibold">Drop Your Query here...</h1>
      <div className="flex w-full justify-evenly bg-gray-200">
        <div className="p-14">
          <img src={images[2].url} className="rounded-full w-80" />
        </div>
        <div className="w-1/2">
          <Form_contact />
        </div>
        {/* <h1>contact</h1> */}
      </div>
    </div>
  );
};

export default Contact;
