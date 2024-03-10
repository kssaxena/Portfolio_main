import { images } from "../utils/Images";

const Home = () => {
  return (
    <div>
      <section className=" name_&_photo flex text-black pt-28 bg-gray-200">
        <div className="bg-gray-200 p-44 w-full">
          <h1 className="font-medium text-2xl ">Hello</h1>
          <h1 className="text-red-500 text-8xl font-semibold">I'm Kshitij</h1>
          <h1 className="font-medium text-2xl mt-5">
            Freelanced Web Designer and Developer
          </h1>
        </div>
        <div className="bg-gray-200 w-fit pt-10 flex h-fit justify-center ">
          <img src={images[0].url} alt="#" className="w-1/2" />
        </div>
      </section>
    </div>
  );
};

export default Home;
