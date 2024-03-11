const Button = ({ size, name, toCall }) => {
  return (
    <div className="w-fit h-10 text-black border-2 border-gray-700 rounded-xl text-base flex justify-center items-center hover:border-2 hover:border-red-500 hover:rounded-2xl hover:bg-red-500 duration-150 ease-in-out hover:text-white hover:scale-110 drop-shadow-lg hover:drop-shadow-2xl">
      <button className={`name-${size} m-4`} onClick={toCall}>
        {name}
      </button>
    </div>
  );
};

export default Button;
