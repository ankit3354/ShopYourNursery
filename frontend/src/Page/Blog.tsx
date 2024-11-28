interface ImageData {
  Name: string;
  imageUrl: string;
  title: string;
}

interface VegetableImage {
  Tagline: string;
  imageUrl: string;
  title: string;
  PostDetail: string;
  IntroduceBy: string;
}

const Flowerimages: ImageData[] = [
  { Name: "Gardening", title: "image 1", imageUrl: "../assets/image 25.png" },
  { Name: "Vegetables", title: "image 2", imageUrl: "../assets/image 27.png" },
  { Name: "Flowers", title: "image 3", imageUrl: "../assets/image 29.png" },
  { Name: "Perennials", title: "image 4", imageUrl: "../assets/image 30.png" },
  { Name: "Fruits", title: "image 5", imageUrl: "../assets/image 31.png" },
];

const Vegetableimages: VegetableImage[] = [
  {
    Tagline: "How href Grow and Care for Lacecap Hydrangea",
    title: "image1",
    imageUrl: "../assets/image 32.png",
    PostDetail: "Posted in gardening",
    IntroduceBy: "By Reta potts",
  },
  {
    Tagline: "Miniature Baby Vegetables",
    title: "image 2",
    imageUrl: "../assets/image 33.png",
    PostDetail: "Posted in Vegetables",
    IntroduceBy: "By Reta potts",
  },
  {
    Tagline: "When and How href Amend Soil",
    title: "image3",
    imageUrl: "../assets/image 34.png",
    PostDetail: "Posted in Vegetables",
    IntroduceBy: "By Reta potts",
  },
  {
    Tagline: "How href Grow and Care for Lacecap Hydrangea",
    title: "image4",
    imageUrl: "../assets/image 32.png",
    PostDetail: "Posted in gardening",
    IntroduceBy: "By Reta potts",
  },
  {
    Tagline: "Miniature Baby Vegetables",
    title: "image5",
    imageUrl: "../assets/image 33.png",
    PostDetail: "Posted in Vegetables",
    IntroduceBy: "By Reta potts",
  },
  {
    Tagline: "When and How href Amend Soil",
    title: "image6",
    imageUrl: "../assets/image 34.png",
    PostDetail: "Posted in Vegetables",
    IntroduceBy: "By Reta potts",
  },
];

function Blog() {
  return (
    <section>
      <div className="Hero-image-section flex relative items-center justify-center w-full ">
        <img
          src="../assets/image 24.png"
          alt="PlantImage"
          className="w-full h-screen"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#fff] rounded-[20px] py-[50px] px-[18px]">
          <div className="flex items-center justify-center gap-[20px] self-stretch flex-col">
            <h2 className="text-[18px] text-center font-semibold leading-normal ">
              Garden Guide
            </h2>
            <p className="text-[14px]  font-normal w-[612px] text-center ">
              Tend your garden like a pro with help from our expert writers and
              Master Gardeners. Learn how href do everyday tasks, pick out the
              best plants, and everything in between.
            </p>
          </div>
        </div>
      </div>

      <div className="Categoies-section w-full bg-[#D7FFBF] flex flex-col  items-start gap-[60px] py-[30px] px-[50px]">
        <div className="flex w-full pl-[32.5px] justify-end items-center gap-[48.5px]">
          <h1 className="text-[#2E5A13] text-[60px] font-bold font-['Philosopher']">
            Categoies
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1091"
            height="5"
            viewBox="0 0 1093 5"
            fill="none"
          >
            <path
              d="M2 3L1093 2.96636"
              stroke="#69BA38"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="flex flex-wrap items-center gap-[90px] self-stretch">
          {Flowerimages.map((image) => (
            <div
              key={image.Name}
              className="flex flex-col justify-center items-center gap-5"
            >
              <img
                src={image.imageUrl}
                alt={image.Name + "Plant"}
                title={image.title}
                className="rounded-[50%] repeat-none"
              />
              <h3 className="text-[18px] font-semibold leading-normal text-center">
                {image.Name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="Vegetable-section flex flex-wrap py-[40px] px-[50ox] items-center justify-center gap-[41px]">
        {Vegetableimages.map((vegetable) => (
          <div
            key={vegetable.title}
            className="flex flex-col gap-[30px] items-start"
          >
            <img
              className="w-[381px] self-stretch rounded-[15px] bg-no-repeat"
              src={vegetable.imageUrl}
              alt={vegetable.title}
            />
            <div>
              <span className="text-[14px] font-normal text-[#969696]  leading-normal">
                {vegetable.PostDetail}
              </span>
              <h1 className="text-[18px] font-semibold text-center ">
                {vegetable.Tagline}
              </h1>
              <span className="text-[14px] font-normal text-[#969696]  leading-normal">
                {vegetable.IntroduceBy}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
