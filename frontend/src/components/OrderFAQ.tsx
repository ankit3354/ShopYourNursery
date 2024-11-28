import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

const Queries = [
  "Status shows delivered but shipment wasn't delivered",
  "Return/ Replace item",
  "The item is missing/ damaged",
  "The item is different from what I ordered",
];

function OrderFAQ() {
  return (
    <section className="flex flex-col justify-evenly w-full md:w-[908px] h-[741px] rounded-[10px] border-[1px] border-solid border-[#CECECE] bg-#fff flex-shrink-0 font-['Poppins'] px-4 md:px-8">
      <div className="inline-flex items-center gap-6">
        <HiOutlineChevronLeft className="text-[20px]" />
        <h2 className="text-[20px] md:text-[24px] font-medium leading-normal">
          Help
        </h2>
      </div>

      <div className="flex items-center justify-center">
        <img className="bg-no-repeat" src={"../../assets/FAQ-image.png"} />
      </div>

      <div className="flex gap-6 flex-col">
        <h1 className="text-[20px] md:text-[22px] font-medium leading-normal mb-4">
          Queries related to your product
        </h1>

        <ul className="flex flex-col gap-[28px] w-full">
          {Queries.map((query) => (
            <li
              key={query}
              className="flex justify-between text:[16px] md:text-[18px]"
            >
              <p>{query}</p>
              <span>
                <HiOutlineChevronRight className="text-[20px]" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default OrderFAQ;
