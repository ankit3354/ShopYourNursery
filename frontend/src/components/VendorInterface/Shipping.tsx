import { useState } from "react";
import Frame from "../../assets/Frame.svg";
import Frame2 from "../../assets/Frame2.svg";
import Frame3 from "../../assets/Frame3.svg";
import Frame4 from "../../assets/Frame4.svg";

const statusArray = [
  { statusName: "Total Shipment", icon: Frame, number: "262" },
  { statusName: "Out for delivery", icon: Frame2, number: "61" },
  { statusName: "Total Shipment", icon: Frame3, number: "150" },
  { statusName: "Pending", icon: Frame4, number: "50" },
];

const shippingStatusArray = [
  {
    orderId: "#00112",
    trackingId: "TR123456",
    shippingType: "Express",
    deadline: "55 Feb",
    carrier: "FedEx",
  },
  {
    orderId: "#00113",
    trackingId: "TR123457",
    shippingType: "Standard",
    deadline: "11 Nov",
    carrier: "DHL",
  },
  {
    orderId: "#00114",
    trackingId: "TR123458",
    shippingType: "Overnight",
    deadline: "33 Dec",
    carrier: "UPS",
  },
  {
    orderId: "#00113",
    trackingId: "TR123457",
    shippingType: "Standard",
    deadline: "11 Nov",
    carrier: "DHL",
  },
  {
    orderId: "#00114",
    trackingId: "TR123458",
    shippingType: "Overnight",
    deadline: "33 Dec",
    carrier: "UPS",
  },
  {
    orderId: "#00113",
    trackingId: "TR123457",
    shippingType: "Standard",
    deadline: "11 Nov",
    carrier: "DHL",
  },
  {
    orderId: "#00114",
    trackingId: "TR123458",
    shippingType: "Overnight",
    deadline: "33 Dec",
    carrier: "UPS",
  },
  {
    orderId: "#00113",
    trackingId: "TR123457",
    shippingType: "Standard",
    deadline: "11 Nov",
    carrier: "DHL",
  },
  {
    orderId: "#00114",
    trackingId: "TR123458",
    shippingType: "Overnight",
    deadline: "33 Dec",
    carrier: "UPS",
  },
];

const carriers = ["FedEx", "DHL", "UPS", "USPS"];

function shipping() {
  const [orders, setOrders] = useState(shippingStatusArray);

  const handleCarrierChange = (index: any, newCarrier: any) => {
    try {
      const updatedOrders = [...orders];
      updatedOrders[index].carrier = newCarrier;
      setOrders(updatedOrders);
    } catch (error) {
      console.error("Error updating carrier:", error);
    }
  };

  return (
    // shipping-feature-component
    <div className="shipping-component flex font-['Poppins']">
      {/* vendor-sidebar */}
      <div className="shipping-sidebar flex justify-center w-[418px] h-[982px] shrink-0 bg-[#DDF2D0]">
        <h1>Shopyournursery</h1>
      </div>

      {/* vendor-shipping-main */}
      <div className="shipping-right-bar bg-[#F5F5F5]">
        {/* Top-bar */}
        <div className="w-[1094px] h-[100px] bg-white ">
          <h1 className="text-[24px] font-medium">Shipment & Logistics</h1>
          <div className="flex items-center gap-[25px] self-stretch"></div>
        </div>
        {/* mid-bar */}
        <div className="card-detail-holder flex mx-auto w-[1017px] flex-col items-start gap-[91px] gap-022px ">
          {/* shipping-status */}
          <div className="flex flex-col items-start gap-[22px] ">
            <h1 className="text-[32px] font-medium">Shipping Status</h1>
            <div className="flex items-center gap-[25px] self-stretch">
              {statusArray.map((card) => (
                <div
                  key={card.number}
                  className="rounded-[15px] border-[1px] border-solid border-[#C2C2C2] flex w-[234px] h-[98px] p-[15px] gap-[20px] items-center justify-center bg-[#FFF]"
                >
                  <img
                    src={card.icon}
                    alt={`${card.statusName} Icon`}
                    className="w-12 h-12"
                  />
                  <div className="flex flex-col text-[#3A3A3A]">
                    <span className="text-[16px] leading-[27.921px] font-medium self-stretch">
                      {card.statusName}
                    </span>
                    <span className="text-[24px] leading-[39.089px] font-bold">
                      {card.number}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-[24px]">
            <div className="Label-section flex w-[1011px] justify-between items-center">
              <div className="flex text-[14px] font-normal items-end gap-[13px]">
                <div className="flex w-[100px] h-[30px] p-[11px] items-center justify-center gap-[11.049px] rounded-[5.525px] bg-[#9FDD79] ">
                  <button className="leading-normal font-medium text-[12px]">
                    Create Label
                  </button>
                </div>
                <div className="flex w-[100px] h-[30px] p-[11.049px] items-center justify-center gap-[11.049px] rounded-[5.525px] bg-[#9FDD79]">
                  <button className="leading-normal font-normal text-[14px]">
                    Print Label
                  </button>
                </div>
                <select
                  name="select"
                  className="flex w-[101.652px] h-[30px] py-[5px] px-[15px] items-center justify-center gap-[11.049px] rounded-[5.525px] border-[1px] border-solid border-[#666B70]"
                >
                  <option
                    value="Select"
                    className="text-[13.259px] font-normal"
                  >
                    Select
                  </option>
                </select>
              </div>

              <div className="flex w-fit h-[30px] py-4 px-10 items-center justify-center gap-[10px] rounded-[5px] bg-[#DDF2D0]">
                <input
                  type="text"
                  placeholder="Search Order ID or Tracking ID...."
                  className="text-[#A6A6A6] bg-transparent text-[12px] font-normal leading-normal"
                />
                <img src={"../../assets/clarity_search-line.svg"} alt="" />
              </div>

              <div className="flex items-center gap-[13px]">
                <div className="flex h-[30px] px-[10px] justify-center items-center gap-[8px] rounded-[5px] bg-[#638424]">
                  <button className="text-[#FFF] text-[10px] font-normal leading-normal cursor-pointer">
                    ALL
                  </button>
                </div>
                <div className="flex h-[30px] px-[10px] justify-center items-center gap-[8px] border-[1px] border-solid rounded-[5px] border-[#7AA262]">
                  <button className="text-[#000] text-[10px] font-normal leading-normal">
                    Pending
                  </button>
                </div>
                <div className="flex h-[30px] px-[10px] justify-center items-center gap-[8px] border-[1px] border-solid rounded-[5px] border-[#7AA262]">
                  <button className="text-[#000] text-[10px] font-normal leading-normal">
                    Ready to ship
                  </button>
                </div>
                <div className="flex h-[30px] px-[10px] justify-center items-center gap-[8px] border-[1px] border-solid rounded-[5px] border-[#7AA262]">
                  <button className="text-[#000] text-[10px] font-normal leading-normal">
                    In Transit
                  </button>
                </div>
                <div className="flex h-[30px] px-[10px] justify-center items-center gap-[8px] border-[1px] border-solid rounded-[5px] border-[#7AA262]">
                  <button className="text-[#000] text-[10px] font-normal leading-normal">
                    Delivered
                  </button>
                </div>
              </div>
            </div>

            {/* Shipping-details-table  */}
            <div className="w-full">
              <table className="table-auto w-full border bg-white border-gray-300 ">
                <thead className="bg-[#E4E4E4] h-[44.197px] py-[11px] px-[13px]">
                  <tr>
                    <th className="flex p-[5.525px] border px-4 py-2 items-center justify-center gap-[11.049px] self-stretch">
                      <svg
                        width="27"
                        height="28"
                        viewBox="0 0 27 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="Vector"
                          d="M23.8587 3.9152V24.5403H3.23356V3.9152H23.8587ZM23.8587 0.96875H3.23356C1.61301 0.96875 0.287109 2.29465 0.287109 3.9152V24.5403C0.287109 26.1609 1.61301 27.4868 3.23356 27.4868H23.8587C25.4792 27.4868 26.8051 26.1609 26.8051 24.5403V3.9152C26.8051 2.29465 25.4792 0.96875 23.8587 0.96875Z"
                          fill="#85898F"
                        />
                      </svg>
                    </th>
                    <th className="self-stretch border px-4 py-2 items-start">
                      <span className="text-[#000] font-medium text-[16px] leading-[130%]">
                        Order ID
                      </span>
                    </th>
                    <th className="self-stretch border px-4 py-2 items-start">
                      <span className="text-[#000] font-medium text-[16px] leading-[130%]">
                        Tracking ID
                      </span>
                    </th>
                    <th className="self-stretch border px-4 py-2 items-start">
                      <span className="text-[#000] font-medium text-[16px] leading-[130%]">
                        Shipping Type
                      </span>
                    </th>
                    <th className="self-stretch border px-4 py-2 items-start">
                      <span className="text-[#000] font-medium text-[16px] leading-[130%]">
                        Deadline
                      </span>
                    </th>
                    <th className="self-stretch border px-4 py-2 items-start">
                      <span className="text-[#000] font-medium text-[16px] leading-[130%]">
                        Carrier
                      </span>
                    </th>
                    <th className="self-stretch border px-4 py-2 items-start">
                      <span className="text-[#000] font-medium text-[16px] leading-[130%]">
                        Create Label
                      </span>
                    </th>
                    <th className="self-stretch border px-4 py-2 items-start">
                      <span className="text-[#000] font-medium text-[16px] leading-[130%]">
                        Print Label
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {shippingStatusArray.map((order, index) => (
                    <tr key={index}>
                      <td className="flex p-[5.525px] border px-4 py-2 items-center justify-center gap-[11.049px] self-stretch">
                        <svg
                          width="27"
                          height="28"
                          viewBox="0 0 27 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="Vector"
                            d="M23.8587 3.9152V24.5403H3.23356V3.9152H23.8587ZM23.8587 0.96875H3.23356C1.61301 0.96875 0.287109 2.29465 0.287109 3.9152V24.5403C0.287109 26.1609 1.61301 27.4868 3.23356 27.4868H23.8587C25.4792 27.4868 26.8051 26.1609 26.8051 24.5403V3.9152C26.8051 2.29465 25.4792 0.96875 23.8587 0.96875Z"
                            fill="#85898F"
                          />
                        </svg>
                      </td>
                      <td className="text-[14px] border px-4 py-2">
                        {order.orderId}
                      </td>
                      <td className="text-[14px] border px-4 py-2">
                        {order.trackingId}
                      </td>
                      <td className="text-[14px] border px-4 py-2">
                        {order.shippingType}
                      </td>
                      <td className="text-[14px] border px-4 py-2">
                        {order.deadline}
                      </td>
                      <td className="text-[14px] border px-4 py-2">
                        <select
                          value={order.carrier}
                          onChange={(e) =>
                            handleCarrierChange(index, e.target.value)
                          }
                          className="text-[14px] border border-gray-300 rounded px-2 py-1"
                        >
                          {carriers.map((carrier, idx) => (
                            <option key={idx} value={carrier}>
                              {carrier}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="border px-4 py-2">
                        <button className="text-[14px] rounded-[5.525px] bg-[#9FDD79] px-2 font-normal leading-normal">
                          Create Label
                        </button>
                      </td>
                      <td className="border px-4 py-2">
                        <button className="text-[14px] rounded-[5.525px] bg-[#9FDD79] px-2 font-normal leading-normal">
                          Print Label
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default shipping;