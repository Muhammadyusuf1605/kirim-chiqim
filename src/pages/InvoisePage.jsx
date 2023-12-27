import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function InvoisePage() {
  const { id } = useParams();
  const url = "http://localhost:3000/data/" + id;
  const { data, isPending, error } = useFetch(url);
  console.log(data);
  return (
    <>
      {isPending && (
        <h2 className="text-5xl flex gap-2">
          Loading
          <span className="loading loading-bars loading-lg"></span>
        </h2>
      )}
      {data && (
        <div className="flex flex-col w-full max-w-[800px] mx-auto">
          <div className="flex justify-between w-full max-w-[800px] mb-[65px] px-8 py-5 border-radius bg-slate-50">
            <div className="flex gap-4 justify-center items-center">
              <h2 className="font-mono text-3xl text-[#858BB2]">Status</h2>
              {data.status && data.status === "paid" && (
                <div className="flex justify-center items-center gap-5">
                  <button className="flex justify-center items-center gap-2 w-[104px] h-[40px] bg-green-50 rounded-[6px]">
                    <div className="w-2 h-2 rounded bg-[#33D69F]"></div>
                    <h2 className="text-[#33D69F]">{data.status}</h2>
                  </button>
                </div>
              )}
              {data.status && data.status === "pending" && (
                <div className="flex justify-center items-center gap-5">
                  <button className="flex justify-center items-center gap-2 w-[104px] h-[40px] bg-amber-50 rounded-[6px]">
                    <div className="w-2 h-2 rounded bg-[#FF8F00]"></div>
                    <h2 className="text-[#FF8F00]">{data.status}</h2>
                  </button>
                </div>
              )}
              {data.status && data.status === "draft" && (
                <div className="flex justify-center items-center gap-5">
                  <button className="flex justify-center items-center gap-2 w-[104px] h-[40px] bg-gray-100 rounded-[6px]">
                    <div className="w-2 h-2 rounded bg-[#373B53]"></div>
                    <h2 className="text-[#373B53]">{data.status}</h2>
                  </button>
                </div>
              )}
            </div>
            <div className="flex gap-2 justify-center items-center">
              <button className="flex justify-center items-center rounded-[24px] gap-4 pt-4 pr-6 pb-4 pl-6 bg-[#F9FAFE]">
                <h4 className="text-[#7E88C3]">
                  <div className="drawer">
                    <input
                      id="my-drawer"
                      type="checkbox"
                      className="drawer-toggle"
                    />
                    <div className="drawer-content">
                      {/* Page content here */}
                      <label
                        htmlFor="my-drawer"
                        className="btn drawer-button">
                        Edit
                      </label>
                    </div>
                    <div className="drawer-side">
                      <label
                        htmlFor="my-drawer"
                        aria-label="close sidebar"
                        className="drawer-overlay"></label>
                      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <h2 className="text-5xl">Edit #{data.id ? data.id : "No id"}</h2>
                      </ul>
                    </div>
                  </div>
                </h4>
              </button>
              <button className="flex justify-center items-center rounded-[24px] gap-4 pt-4 pr-6 pb-4 pl-6 bg-[#EC5757]">
                <h4 className="text-white">Delete</h4>
              </button>
              <button className="flex justify-center items-center rounded-[24px] gap-4 pt-4 pr-6 pb-4 pl-6 bg-[#7C5DFA]">
                <h4 className="text-white">Mark as Paid</h4>
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full max-w-[800px] mx-auto mt-8 px-12 py-12 border-radius bg-slate-50">
            <div className="flex justify-between mb-5">
              <span className="flex flex-col gap-2">
                <h2 className="font-bold text-[20px] text-[#0C0E16]">
                  {data.id ? data.id : "No id"}
                </h2>
                <p className="text-[#7E88C3]">
                  {data.description ? data.description : "No Description"}
                </p>
              </span>
              <span className="text-[#7E88C3] text-right">
                <h3>
                  {data.senderAddress.street
                    ? data.senderAddress.street
                    : "No Addres"}
                </h3>
                <h3>
                  {data.senderAddress.city
                    ? data.senderAddress.city
                    : "No Addres"}
                </h3>
                <h3>
                  {data.senderAddress.postCode
                    ? data.senderAddress.postCode
                    : "No Addres"}
                </h3>
                <h3>
                  {data.senderAddress.country
                    ? data.senderAddress.country
                    : "No Addres"}
                </h3>
              </span>
            </div>
            <div className="flex items-center mb-2">
              <span className="mr-24">
                <h3 className="text-[#7E88C3]">Invoice Date</h3>
                <h3 className="font-bold text-[20px] text-[#0C0E16]">
                  {data.createdAt ? data.createdAt : "No"}
                </h3>
              </span>
              <span className="mr-32">
                <h3 className="text-[#7E88C3]">Bill To</h3>
                <h3 className="font-bold text-[20px] text-[#0C0E16]">
                  {data.clientName ? data.clientName : "No"}
                </h3>
              </span>
              <span>
                <h3 className="text-[#7E88C3]">Sent to</h3>
                <h3 className="font-bold text-[20px] text-[#0C0E16]">
                  {data.clientEmail ? data.clientEmail : "No Email"}
                </h3>
              </span>
            </div>
            <div className="flex items-center mb-11">
              <span className="mr-24">
                <h3 className="text-[#7E88C3]">Payment Due</h3>
                <h3 className="font-bold text-[20px] text-[#0C0E16]">
                  {data.paymentDue ? data.paymentDue : "No"}
                </h3>
              </span>
              <span>
                <h3 className="text-[#7E88C3]">
                  {data.clientAddress.street
                    ? data.clientAddress.street
                    : "No"}
                </h3>
                <h3 className="text-[#7E88C3]">
                  {data.clientAddress.city
                    ? data.clientAddress.city
                    : "No"}
                </h3>
                <h3 className="text-[#7E88C3]">
                  {data.clientAddress.postCode
                    ? data.clientAddress.postCode
                    : "No"}
                </h3>
                <h3 className="text-[#7E88C3]">
                  {data.clientAddress.country
                    ? data.clientAddress.country
                    : "No"}
                </h3>
              </span>
            </div>
            <div className="pt-8 pr-8 pb-10 pl-8 bg-[#F9FAFE] border-top-radius">
              <div className="flex items-center mb-8">
                <h3 className="mr-56 text-[#7E88C3]">Item Name</h3>
                <h3 className="mr-[89px] text-[#7E88C3]">QTY.</h3>
                <h3 className="mr-[108px] text-[#7E88C3]">Price</h3>
                <h3 className="ml-auto text-[#7E88C3]">Total</h3>
              </div>
              {data.items[0] && (
                <div className="flex items-center mb-8">
                  <h3 className="mr-[204px] font-bold text-[20px] text-[#0C0E16]">
                    {data.items[0].name ? data.items[0].name : "No"}
                  </h3>
                  <h3 className="mr-[74px] text-[#7E88C3]">
                    {data.items[0].quantity
                      ? data.items[0].quantity
                      : "No"}
                  </h3>
                  <h3 className="mr-[80px] text-[#7E88C3]">
                    ${data.items[0].price ? data.items[0].price : "000"}.00
                  </h3>
                  <h3 className="ml-auto font-bold text-[20px] text-[#0C0E16]">
                    ${data.items[0].total ? data.items[0].total : "000"}.00
                  </h3>
                </div>
              )}
              {data.items[1] && (
                <div className="flex items-center mb-10">
                  <h3 className="mr-[204px] font-bold text-[20px] text-[#0C0E16]">
                    {data.items[1].name ? data.items[1].name : "000"}
                  </h3>
                  <h3 className="mr-[74px] text-[#7E88C3]">
                    {data.items[1].quantity
                      ? data.items[1].quantity
                      : "000"}
                  </h3>
                  <h3 className="mr-[80px] text-[#7E88C3]">
                    ${data.items[1].price ? data.items[1].price : "000"}.00
                  </h3>
                  <h3 className="ml-auto font-bold text-[20px] text-[#0C0E16]">
                    ${data.items[1].total ? data.items[1].total : "000"}.00
                  </h3>
                </div>
              )}
            </div>
            <div className="flex justify-between px-[31px] py-[32px] bg-[#373B53] border-bottom-radius">
              <h3 className="text-white">Amount Due</h3>
              <h2 className="text-white text-4xl">
                ${data.total ? data.total : "000"}.00
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InvoisePage;
