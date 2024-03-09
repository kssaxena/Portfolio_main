const Edu_card = ({ course_name, description }) => {
  return (
    <div className="bg-gray-200 rounded-xl text-black shadow-sm hover:shadow-[#0c0b1e] duration-100 ease-in-out">
      <h1>{course_name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Edu_card;
