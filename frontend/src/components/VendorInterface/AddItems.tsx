import { useState } from "react";
import DeleteIcon from "../../../assets/ic_sharp-Cross.svg";
import AddIcon from "../../../assets/ic_sharp-add.svg";

const InventaryItem = [
  {
    ItemName: "Items Details",
    ItemQuality: "Quantity",
    ItemDesc: "Describtion",
    Prize: "Prize",
    ItemAge: "Age of the plant : ",
    Itemstock: "Min stock",
    Itemsize: "Pot size :",
    ImageName: "Image",
    EditIcon: DeleteIcon,
    EditBtn: "Delete row",
  },
  {
    ItemName: "Items Details",
    ItemQuality: "Quantity",
    ItemDesc: "Describtion",
    Prize: "Prize",
    ItemAge: "Age of the plant : ",
    Itemstock: "Min stock",
    Itemsize: "Pot size :",
    ImageName: "Image",
    EditIcon: AddIcon,
    EditBtn: "Add Row",
  },
];

function AddItems() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // Function to handle file selection
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]); // Save the selected image
    }
  };

  return (
    <div className="font-['Poppins'] bg-gray-300">
      <div className="flex w-[1094px] justify-between mx-auto mb-10">
        <span className="w-[510px] text-[#5C5C5C] text-[18px] font-semibold leading-normal">
          Add Items
        </span>
        <svg
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Vector" filter="url(#filter0_d_2136_3222)">
            <path
              d="M10.4 15.5523L14 11.844L17.6 15.5523L19 14.1102L15.4 10.4018L19 6.69347L17.6 5.25133L14 8.95969L10.4 5.25133L9 6.69347L12.6 10.4018L9 14.1102L10.4 15.5523ZM14 20.7028C12.6167 20.7028 11.3167 20.4323 10.1 19.8911C8.88334 19.35 7.825 18.6162 6.925 17.6898C6.025 16.7634 5.31267 15.6732 4.788 14.4192C4.26333 13.1652 4.00067 11.8261 4 10.4018C3.99933 8.97755 4.262 7.63842 4.788 6.38444C5.314 5.13047 6.02633 4.04028 6.925 3.11387C7.82367 2.18747 8.882 1.4537 10.1 0.912549C11.318 0.371403 12.618 0.10083 14 0.10083C15.382 0.10083 16.682 0.371403 17.9 0.912549C19.118 1.4537 20.1763 2.18747 21.075 3.11387C21.9737 4.04028 22.6863 5.13047 23.213 6.38444C23.7397 7.63842 24.002 8.97755 24 10.4018C23.998 11.8261 23.7353 13.1652 23.212 14.4192C22.6887 15.6732 21.9763 16.7634 21.075 17.6898C20.1737 18.6162 19.1153 19.3503 17.9 19.8921C16.6847 20.434 15.3847 20.7042 14 20.7028ZM14 18.6426C16.2333 18.6426 18.125 17.8443 19.675 16.2477C21.225 14.651 22 12.7024 22 10.4018C22 8.10128 21.225 6.15267 19.675 4.55601C18.125 2.95936 16.2333 2.16103 14 2.16103C11.7667 2.16103 9.875 2.95936 8.325 4.55601C6.775 6.15267 6 8.10128 6 10.4018C6 12.7024 6.775 14.651 8.325 16.2477C9.875 17.8443 11.7667 18.6426 14 18.6426Z"
              fill="#212121"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_2136_3222"
              x="0"
              y="0.10083"
              width="28"
              height="28.6021"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2136_3222"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2136_3222"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="flex w-full flex-col items-start mx-auto ">
        {InventaryItem.map((Items, i) => (
          <div key={i} className="flex flex-col mx-auto">
            <div className="flex">
              <div className="Item-Description flex flex-col">
                <div className="flex flex-col">
                  <p className="flex h-[64px] pt-[17px] pb-[23px] pl-[156px] pr-[180px] text-[16px] leading-normal font-normal items-center border-[#7A7A7A] border-solid border-l-[1px] border-b-[1px] border-t-[1px] bg-white rounded-t-[20px]">
                    {Items.ItemName}
                  </p>
                  <textarea
                    className=" border-l-[1px] border-[#7A7A7A] border-solid"
                    cols={30}
                    rows={3}
                  ></textarea>
                </div>
                <div className="flex bg-white rounded-b-[20px] w-[546px] h-[136px] pt-[18] pr-[43px] pl-[25px] border-l-[1px] border-t-[1px] border-b-[1px] border-[#7A7A7A] border-1 border-solid items-center">
                  <div className="text-[16px] font-normal leading-normal ">
                    {Items.ItemDesc}:
                  </div>
                  <textarea className="w-full" rows={4}></textarea>
                </div>
              </div>

              <div className="Quality flex flex-col w-[198.323px] h-[276px] rounded-[20px] border-[#7A7A7A] border-[1px] border-solid bg-white justify-center">
                <div className="flex h-2/4 items-center justify-between flex-col rounded-[20px] border-1 border-solid border-[#7A7A7A]">
                  <div className="flex h-[46%] items-center justify-center text-[16px] leading-normal font-normal rounded-t-[20px] border-solid border-[#7A7A7A]  w-full">
                    {Items.ItemQuality}
                  </div>
                  <div className="h-[54%] rounded-b-[20px]">
                    <input
                      type="text"
                      className="w-full min-h-full border-b-[1px] border-t-[1px] border-solid border-[#7A7A7A] rounded-b-[20px]"
                    />
                  </div>
                </div>
                <div className="h-2/4 flex flex-col items-center pt-7 gap-4 rounded-b-[20px]">
                  <div className="w-full pl-4">
                    <span className="text-[16px] leading-normal font-normal">
                      {Items.ItemAge}
                    </span>
                    <input type="text" className="w-10" />
                  </div>

                  <div className="flex w-full pl-4">
                    <span className="text-[16px] leading-normal font-normal text-red-600">
                      {Items.Itemstock}:
                    </span>
                    <input type="text" className="w-10" />
                  </div>
                </div>
              </div>

              <div className="Price-Post flex flex-col w-[198.323px] h-[276px] rounded-[20px] border-[#7A7A7A] border-[1px] border-solid bg-white justify-center">
                <div className="flex h-2/4 items-center justify-between flex-col rounded-[20px] border-1 border-solid border-[#7A7A7A]">
                  <div className="flex h-[46%] items-center justify-center text-[16px] leading-normal font-normal rounded-t-[20px] border-solid border-[#7A7A7A]  w-full">
                    {Items.Prize}
                  </div>
                  <div className="h-[54%] rounded-b-[20px]">
                    <input
                      type="text"
                      className="w-full min-h-full border-b-[1px] border-t-[1px] border-solid border-[#7A7A7A] rounded-b-[20px]"
                    />
                  </div>
                </div>
                <div className="h-2/4 flex flex-col items-center pt-7 gap-4 rounded-b-[20px]">
                  <div className="w-full pl-4">
                    <span className="text-[16px] leading-normal font-normal">
                      {Items.Itemsize}
                    </span>
                    <input type="text" className="w-10" />
                  </div>
                </div>
              </div>

              <div className="Image-Upload inline-flex flex-col w-[229px] h-[276px] rounded-[20px] border-[#7A7A7A] border-[1px] border-solid  bg-white justify-center items-center">
                <div className="flex items-center flex-col w-[172px] gap-7">
                  <div className="upload-svg">
                    <svg
                      width="64"
                      height="48"
                      viewBox="0 0 64 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="et:upload" clip-path="url(#clip0_2136_3270)">
                        <path
                          id="Vector"
                          d="M51.437 19.482C50.7965 9.564 43.8995 0 31.25 0C19.6805 0 10.7585 8.5995 10.286 20.076C3.956 22.0455 0.5 28.8195 0.5 33.75C0.5 41.3415 6.809 48 14 48H23.75C23.9489 48 24.1397 47.921 24.2803 47.7803C24.421 47.6397 24.5 47.4489 24.5 47.25C24.5 47.0511 24.421 46.8603 24.2803 46.7197C24.1397 46.579 23.9489 46.5 23.75 46.5H14C7.607 46.5 2 40.542 2 33.75C2 29.1735 6.011 21 14 21H16.25C16.4489 21 16.6397 20.921 16.7803 20.7803C16.921 20.6397 17 20.4489 17 20.25C17 20.0511 16.921 19.8603 16.7803 19.7197C16.6397 19.579 16.4489 19.5 16.25 19.5H14C13.2365 19.5 12.515 19.5855 11.8115 19.7085C12.3995 10.7235 19.229 1.5 31.25 1.5C44.132 1.5 50 11.6085 50 21V23.25C50 23.4489 50.079 23.6397 50.2197 23.7803C50.3603 23.921 50.5511 24 50.75 24C50.9489 24 51.1397 23.921 51.2803 23.7803C51.421 23.6397 51.5 23.4489 51.5 23.25V20.9865C56.0285 21.483 62 26.343 62 33.75C62 39.489 56.4635 46.5 50 46.5H38.75C33.893 46.5 32 44.607 32 39.75V19.1745L38.117 25.2795C38.1861 25.3512 38.2688 25.4085 38.3602 25.4479C38.4517 25.4873 38.55 25.5082 38.6496 25.5092C38.7492 25.5102 38.848 25.4913 38.9402 25.4537C39.0324 25.4162 39.1162 25.3606 39.1868 25.2903C39.2573 25.22 39.3131 25.1363 39.3509 25.0442C39.3888 24.9521 39.4079 24.8533 39.4072 24.7538C39.4064 24.6542 39.3859 24.5557 39.3467 24.4642C39.3075 24.3726 39.2505 24.2898 39.179 24.2205L32.4875 17.5425C31.5965 16.6545 30.905 16.6545 30.0155 17.5425L23.324 24.2205C23.1874 24.3619 23.1118 24.5514 23.1135 24.7481C23.1152 24.9447 23.1941 25.1328 23.3331 25.2719C23.4722 25.4109 23.6603 25.4898 23.8569 25.4915C24.0536 25.4932 24.243 25.4176 24.3845 25.281L30.5 19.1745V39.75C30.5 45.456 33.044 48 38.75 48H50C57.2705 48 63.5 40.164 63.5 33.75C63.5 25.9995 57.1655 19.938 51.437 19.482Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2136_3270">
                          <rect
                            width="63"
                            height="48"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <span className="self-stretch text-[14px] font-medium leading-normal text-center">
                      Image
                    </span>
                    <div className="image-uploader">
                      <button
                        onClick={() =>
                          document.getElementById("imageInput")?.click()
                        }
                        className="upload-btn text-[#0370FF] text-[12px] leading-normal font-normals"
                      >
                        Upload or Browse images
                      </button>
                      <input
                        id="imageInput"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: "none" }} // Hides the default file input
                      />

                      {selectedImage && (
                        <div className="preview">
                          <p>Selected Image: {selectedImage.name}</p>
                          <img
                            src={URL.createObjectURL(selectedImage)}
                            alt="Preview"
                            style={{ width: "200px", height: "200px" }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mb-4 flex p-[10px] items-center justify-start gap-[14px]">
              <img src={Items.EditIcon} alt={Items.EditBtn} />
              <button className="text-[12px] leading-normal font-normal">
                {Items.EditBtn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddItems;
