import OrderCart from "../components/OrderCart";
import Frame1 from "../../assets/Frame47.png";
import Frame2 from "../../assets/Frame48.png";
import Frame3 from "../../assets/Frame49.png";
import { useState } from "react";
import OrderFAQ from "../components/OrderFAQ";

const orders = [
  {
    orderID: "SYN0112312",
    images: [Frame1, Frame2],
    deliveryDetail:
      "Preparing to pack the items (Estimated delivery by Oct 14)",
  },
  {
    orderID: "SYN0114021",
    images: [Frame1, Frame2, Frame3],
    deliveryDetail: "3 items delivered on Tue, August 8, 2024",
  },
  {
    orderID: "SYN0412177",
    images: [Frame1],
    deliveryDetail: "1 item delivered on  Mon, July 22, 2024",
  },
];

function Order() {
  const [showFAQ, setShowFAQ] = useState(false);
  return (
    <section className="Order font-['Poppins']">
      <div className="flex flex-wrap bg-[#fff] justify-evenly pt-14">
        <div className="w-full md:w-[436px] h-[641px] shrink-0 rounded-[15px] p-10 bg-[#F5F5F5]">
          <h1>Cameron Williamson</h1>
        </div>
        {!showFAQ ? (
          <div className="Order-Cart flex flex-col gap-8">
            <h1 className="text-center md:text-left text-[24px] font-medium">
              Orders
            </h1>
            {orders.map((order) => (
              <div key={order.orderID} className="">
                <OrderCart order={order} setShowFAQ={setShowFAQ} />
              </div>
            ))}
          </div>
        ) : (
          <OrderFAQ />
        )}
      </div>
    </section>
  );
}

export default Order;
