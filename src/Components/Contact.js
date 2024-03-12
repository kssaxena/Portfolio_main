import Form_contact from "../utils/Form_contact";
import { images } from "../utils/Images";

const Contact = () => {
  return (
    <div>
      <div className="flex w-full justify-center bg-gray-200">
        <div className="p-14 pt-40">
          <img src={images[2].url} className="rounded-full w-80" />
        </div>
        <div className="w-1/2">
          <h1 className="pt-10 bg-gray-200 text-center text-red-500 text-2xl h-fit p-5 font-semibold w-full">
            Drop Your Query here...
          </h1>
          <Form_contact />
        </div>
      </div>
    </div>
  );
};

export default Contact;
