import { images } from "../utils/Images";
import Edu_card from "../utils/Edu_card";
import Hire_me from "../utils/Hire_me";

const About = () => {
  return (
    <div>
      <section className="about_me_and_photo bg-gray-200 flex">
        <div className=" w-1/2 flex justify-center items-center p-10">
          <img src={images[1].url} className="w-96 rounded-full p-10" />
        </div>
        <div className=" w-full p-20">
          <h1 className="text-red-500 text-5xl">__About me</h1>
          <p className="mt-10 p-5">
            I am Kshitij Saxena, a highly motivated web developer with a strong
            foundation in crafting user-centric and responsive websites. I
            possess a deep understanding of best practices in web development,
            including HTML, CSS, JavaScript, and various front-end frameworks.
            My passion lies in tackling complex challenges and transforming them
            into elegant and functional online experiences. Throughout my 3
            months at Coding Club, I played a key role in developing several
            award-winning e-commerce, tutoring platforms and many more. I
            spearheaded the development of the user interface (UI) and user
            experience (UX) for their flagship store, resulting in a 25%
            increase in online conversions and a significant improvement in
            customer satisfaction. I am a strong believer in the power of
            collaboration and enjoy working closely with designers and other
            developers to bring projects to life. Dive into my portfolio to see
            how my skills and experience can elevate your next web project!
          </p>
        </div>
      </section>
      <section className="get_resume_button">
        <div className="bg-gray-200 flex p-5 justify-center ">
          <button className="text-black font-semibold text-xl w-1/3 bg-gray-200 p-3 rounded-2xl border-2 border-red-500 hover:bg-red-500 duration-150 ease-in-out hover:text-white hover:rounded-3xl scale-110">
            Get My Resume
          </button>
        </div>
      </section>
      <section className="bg-gray-200 p-16">
        <h1 className="text-center text-5xl mb-10">__Few_Formal_Details__</h1>
        <div className="flex justify-evenly text-2xl">
          <div className="flex flex-col items-center  w-full">
            <h1 className="mb-10">Education : </h1>
            <Edu_card
              course_name={"Bachelor in computer science"}
              description={"Pursuing Btech CSE from Usha Martin university"}
            />
            <Edu_card
              course_name={"Intermidiate"}
              description={"Completed intermidiate from St.Xavier's College"}
            />
            <Edu_card
              course_name={"Matriculation"}
              description={"Completed Matriculation from BridgeFord School"}
            />
          </div>
          <div className="flex flex-col items-center  w-full">
            <h1 className="mb-10"> Experience : </h1>
            <Edu_card
              course_name={"College Project"}
              description={"An ongoing project for the University."}
            />
            <Edu_card
              course_name={"Bharat Intern"}
              description={"An online Internship completed by the end of the February 2024, on with core HTML and CSS."}
            />
            {/* <Edu_card
              course_name={"Matriculation"}
              description={"Completed Matriculation from BridgeFord School"}
            /> */}
          </div>
        </div>
      </section>
      <section>
        <Hire_me />
      </section>
    </div>
  );
};

export default About;
