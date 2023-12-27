import Ongga from "../assets/icon-arrow-right.svg";
import { Link } from "react-router-dom";

function InvoicesList({data}) {
  return (
    <div className="flex flex-col gap-4">
        {data &&
          data.map((date) => {
            return (
              <Link
                to={`invoicepage/${date.id}`}
                onClick={() => handleId(date.id)}
                className="home-invoices flex justify-around items-center bg-white py-7 rounded-[8px] cursor-pointer"
                key={date.id}>
                <h2>{date.id}</h2>
                <p>Due {date.paymentDue}</p>
                <h2>{date.clientName}</h2>
                <h3>${date.total}</h3>
                {date && date.status === "paid" && (
                  <div className="flex justify-center items-center gap-5">
                    <button className="flex justify-center items-center gap-2 w-[104px] h-[40px] bg-green-50 rounded-[6px]">
                      <div className="w-2 h-2 rounded bg-[#33D69F]"></div>
                      <h2 className="text-[#33D69F]">{date.status}</h2>
                    </button>
                    <img src={Ongga} alt="O'ngga strelka" />
                  </div>
                )}
                {date && date.status === "pending" && (
                  <div className="flex justify-center items-center gap-5">
                    <button className="flex justify-center items-center gap-2 w-[104px] h-[40px] bg-amber-50 rounded-[6px]">
                      <div className="w-2 h-2 rounded bg-[#FF8F00]"></div>
                      <h2 className="text-[#FF8F00]">{date.status}</h2>
                    </button>
                    <img src={Ongga} alt="O'ngga strelka" />
                  </div>
                )}
                {date && date.status === "draft" && (
                  <div className="flex justify-center items-center gap-5">
                    <button className="flex justify-center items-center gap-2 w-[104px] h-[40px] bg-gray-100 rounded-[6px]">
                      <div className="w-2 h-2 rounded bg-[#373B53]"></div>
                      <h2 className="text-[#373B53]">{date.status}</h2>
                    </button>
                    <img src={Ongga} alt="O'ngga strelka" />
                  </div>
                )}
              </Link>
            );
          })}
      </div>
  )
}

export default InvoicesList
