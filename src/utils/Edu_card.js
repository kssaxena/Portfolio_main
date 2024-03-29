const Edu_card = ({ course_name, description }) => {
  return (
    <div className="bg-gray-200 rounded-lg w-3/4 h-1/4 text-black  mb-5 shadow-sm shadow-gray-900 hover:shadow-black hover:scale-105 duration-100 ease-in-out">
      <h1 className="text-red-500 font-semibold text-2xl p-5">{course_name}</h1>
      <p className="p-5 mb-3 text-base">{description}</p>
    </div>
  );
};

export default Edu_card;
