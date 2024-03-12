import Button from "./Button";

const Form_contact = () => {
  return (
    <form>
      <div className="mb-10">
        <div className=" bg-gray-200  w-full  p-10 rounded-3xl flex flex-col justify-center items-center">
          <label
            className="pl-28 flex w-full text-black text-sm font-normal p-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-3/4 bg-gray-300 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline p-5"
            id="name"
            type="text"
            placeholder="Full Name"
          />
          <label
            className="pl-28 flex w-full text-black text-sm font-normal p-2"
            htmlFor="email"
          >
            Mail Id
          </label>
          <input
            className="w-3/4 bg-gray-300 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline p-5"
            id="email"
            type="email"
            placeholder="Enter your E-mail"
          />
          <label
            className="pl-28 flex w-full text-black text-sm font-normal p-2"
            htmlFor="number"
          >
            Contact Number
          </label>
          <input
            className="w-3/4 bg-gray-300 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline p-5"
            id="number"
            type="#"
            placeholder="Your Contact Number"
          />
          <label
            className="pl-28 flex w-full text-black text-sm font-normal p-2"
            htmlFor="description"
          >
            Brief Description
          </label>
          <input
            className="w-3/4 h-48 bg-gray-300 border-b-2 rounded-2xl text-black leading-tight focus:outline-none focus:shadow-outline p-5 "
            id="description"
            type="text"
            placeholder="Briefly describe your need for this contact."
          />
        </div>
        <div className="flex  w-full pl-60">
          <Button name="Say Hello" toCall="#" />
        </div>
      </div>
    </form>
  );
};

export default Form_contact;