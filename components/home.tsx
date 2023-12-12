import Image, { StaticImageData } from "next/image";
import React from "react";
import chandan from "../img/chandan_0.jpeg";
import chandan_1 from "../img/chandan_1.jpeg";

const Home = () => {
  return (
    <div className=" w-[100vw] flex justify-center  rounded-3xl">
      <div className="w-[100vw] h-[100%] max-w-[1000px] bg-slate-500 p-4 rounded-3xl flex justify-start items-center flex-col gap-y-10 ">
        <div className="w-[100%] flex justify-center items-start flex-col md:flex-row">
          <div className="w-[100%] md:w-[50%] h-[100%]">
            <h2 className=" uppercase font-extrabold text-xl">
              chandan meravi
            </h2>
            <h4>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              eligendi reiciendis voluptas quis laboriosam aut. Maiores optio
              animi labore temporibus quisquam esse atque cumque veritatis velit
            </h4>
          </div>
          <div className="w-[100%] md:w-[50%] rounded-md overflow-hidden ">
            <Image
              alt="image"
              className=" object-cover w-[100%] h-[100%]"
              src={chandan}
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <ParaGraph />
        <Section img={chandan_1} />
        <ParaGraph />
      </div>
    </div>
  );
};

export default Home;

const ParaGraph = () => {
  return (
    <div className=" w-full text-center">
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
        cupiditate aliquid eveniet sint veniam, vel eum, qui quod consequatur
        mollitia nesciunt animi molestiae quia quasi quam maxime nobis omnis
        magnam repellendus voluptatibus. Soluta vero autem ut sit dignissimos
        mollitia consequuntur, commodi sint voluptatum quod est illum recusandae
        explicabo molestiae quidem beatae deserunt modi magnam velit saepe
        dolorum. Dignissimos dolore delectus harum voluptatibus numquam officia
        dicta in voluptatem quae, repellendus id autem placeat illo quo debitis
        explicabo alias eius maiores ipsum consectetur laudantium eaque.
        Accusamus perferendis eligendi optio non error inventore facere ullam
        quod cum minima nesciunt rem vitae, ex expedita?
      </h4>
    </div>
  );
};

const Section = ({ img }: { img: StaticImageData }) => {
  return (
    <div className="w-[100%] flex justify-center items-start flex-col md:flex-row">
      <div className="w-[100%] md:w-[50%] h-[100%]">
        <h4>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
          eligendi reiciendis voluptas quis laboriosam aut. Maiores optio animi
          labore temporibus quisquam esse atque cumque veritatis velit
        </h4>
      </div>
      <div className="w-[100%] md:w-[50%] object-cover flex justify-center items-center rounded-md overflow-hidden  ">
        <Image
          alt="image"
          className="object-cover"
          src={img}
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};
