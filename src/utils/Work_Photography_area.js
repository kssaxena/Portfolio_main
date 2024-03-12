
import Button from "./Button";
import Images_gallery from "../Components/Images_gallery";

const Work_photography_area = () => {
  return (
    <section className="coding_para_photo bg-gray-200 border-b-2 border-gray-400 pt-5 pb-8">
      <div className="flex p-10">
        <div className=" flex justify-center items-center w-1/2 ">
          <Images_gallery/>
        </div>
        <div className="w-1/2 ">
          <h1 className="pr-10 text-3xl font-semibold text-right text-red-500">
            __Photographer
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
      </div>
      <div className=" flex items-center justify-center p-10 ml-48 mr-48">
        <Button name="Have a look on my Static Gallery" />
      </div>
    </section>
  );
};

export default Work_photography_area;
