const Form_contact = () => {
  return (
    <div>
      <div className=" bg-gray-200 w-1/2 p-10">
        <label className="flex w-full text-black text-sm font-bold p-5" htmlFor="name">
          Name
        </label>
        <input
          className="w-full bg-gray-300 border-b-2 border-red-500 rounded-lg text-black leading-tight focus:outline-none focus:shadow-outline p-5"
          id="name"
          type="text"
          placeholder="Your Name"
        />
        <label className="flex w-full text-black text-sm font-bold p-5" htmlFor="mail">
          Mail_Id
        </label>
        <input
          className="w-full bg-gray-300 border-b-2 border-red-500 rounded-lg text-black leading-tight focus:outline-none focus:shadow-outline p-5"
          id="mail"
          type="email"
          placeholder="Enter your email address"
        />
        <label className="flex w-full text-black text-sm font-bold p-5" htmlFor="name">
          Name
        </label>
        <input
          className="w-full bg-gray-300 border-b-2 border-red-500 rounded-lg text-black leading-tight focus:outline-none focus:shadow-outline p-5"
          id="name"
          type="text"
          placeholder="Your Name"
        />
        <label className="flex w-full text-black text-sm font-bold p-5" htmlFor="name">
          Name
        </label>
        <input
          className="w-full bg-gray-300 border-b-2 border-red-500 rounded-lg text-black leading-tight focus:outline-none focus:shadow-outline p-5"
          id="name"
          type="text"
          placeholder="Your Name"
        />
        
      </div>
    </div>
  );
};

export default Form_contact;