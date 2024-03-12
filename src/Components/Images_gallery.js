import { images } from "../utils/Images";

const Images_gallery = () => {
  return (
    <div className="flex justify-center items-center w-fit">
      <div className="border-4 border-red-500 w-full rounded-3xl">
        <div className=" w-full flex justify-evenly">
          <div className=" w-1/2 flex flex-col justify-evenly ">
            <img src={images[9].url} className="w-fit p-1 rounded-2xl" />
            <img src={images[1].url} className="w-fit p-1 rounded-2xl" />
          </div>
          <div className=" w-1/2 flex flex-col justify-evenly ">
            <img src={images[4].url} className="w-fit p-1 rounded-2xl" />
            <img src={images[8].url} className="w-fit p-1 rounded-2xl" />
          </div>
          <div className=" w-1/2 flex flex-col justify-evenly ">
            <img src={images[2].url} className="w-fit p-1 rounded-2xl" />
            <img src={images[7].url} className="w-fit p-1 rounded-2xl" />
          </div>
          <div className=" w-1/2 flex flex-col justify-evenly ">
            <img src={images[6].url} className="w-fit p-1 rounded-2xl" />
            <img src={images[5].url} className="w-fit p-1 rounded-2xl" />
            {/* <img src={images[3].url} className="w-fit" /> */}
          </div>
        </div>
      </div>
      {/* <div className="bg-red-500 w-1/2 p-10">
        <div className=" w-1/2 flex flex-col ">
          <div className="bg-yellow-400 w-1/5">
            <img src={images[0].url} className="w-fit" />
          </div>
          <div className="bg-yellow-400 w-1/5">
            <img src={images[0].url} className="w-fit" />
          </div>
          <div className="bg-yellow-400 w-1/5">
            <img src={images[0].url} className="w-fit" />
          </div>
          <div className="bg-yellow-400 w-1/5">
            <img src={images[0].url} className="w-fit" />
          </div>
        </div>
      </div> */}
    </div>
    //   <div className="flex bg-red-400 ">
    //     <div>
    //       <img src={images[0].url} />
    //     </div>
    //     <div>
    //       <img src={images[1].url} />
    //     </div>
    //     <div>
    //       <img src={images[2].url} className="p-10"/>
    //     </div>
    //     <div>
    //       <img src={images[3].url} />
    //     </div>
    //     <div>
    //       <img src={images[4].url} />
    //     </div>
    //   </div>
  );
};

export default Images_gallery;
