import { images } from "./Images";
import Button from "./Button";


const Work_coding_area = () => {
  return (
    <section className="coding_para_photo bg-gray-200  pt-5 pb-8">
      <div className="flex p-10">
        <div className="w-1/2 ">
          <h1 className="pl-10 text-3xl font-semibold text-red-500">
            Developer__
          </h1>
          <p className="text-center text-lg p-10">
            As a passionate computer science engineering student, I'm constantly
            fascinated by the ever-evolving world of technology. I thrive on the
            challenge of solving complex problems and crafting elegant solutions
            through code. My journey in this field is fueled by a desire to
            create impactful applications that leave a positive mark on the
            world. This portfolio showcases some of my projects and demonstrates
            my growing skillset - I'm always eager to learn and collaborate, so
            feel free to reach out and connect!
          </p>
        </div>
        <div className=" flex justify-center items-center w-1/2 ">
          <img
            src={images[3].url}
            alt="coding_para_photo"
            className="w-3/4 opacity-85 rounded-2xl border-4 border-red-500 p-1"
          />
        </div>
      </div>
      <div className=" flex items-center justify-center p-2">
        <Button name="Works as a Developer" />
      </div>
    </section>
  );
};

export default Work_coding_area;
