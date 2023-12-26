// hooks
import { useFetch } from "../hooks/useFetch";
// img
import Pastga from "../assets/icon-arrow-down.svg";
import AddPage from "../assets/favicon-32x32.png";
import Ongga from "../assets/icon-arrow-right.svg";
import { Link, Navigate } from "react-router-dom";
import { useEffect } from "react";

const url = "http://localhost:3000/data";

function Home({ setInvoiceId }) {
  const api = useFetch(url);
  const data = api.data;

  const handleId = (id) => {
    setInvoiceId(id);
  };

  useEffect(() => {
    console.log(url);
  }, [url]);
  return (
    <div className="flex flex-col w-full max-w-[800px] mx-auto">
      <div className="flex justify-between w-full max-w-[800px] mb-[65px]">
        <div className="flex flex-col gap-2">
          <h2 className="font-mono text-3xl">Invoices</h2>
          <p>There are {data ? data.length : 0} total invoices</p>
        </div>
        <div className="flex gap-10 justify-center items-center">
          <div className="flex gap-4 items-center cursor-pointer">
            <h3>Filter by status</h3>
            <img src={Pastga} alt="Pastga strelka" />
          </div>
          <button className="flex justify-center items-center rounded-[24px] gap-4 pt-2 pr-4 pb-2 pl-2 bg-[#7C5DFA]">
            <img src={AddPage} alt="" />
            <h4 className="text-white">New Invoice</h4>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {data &&
          data.map((dat) => {
            return (
              <Link
                to={`invoicepage/:${dat.id}`}
                onClick={() => handleId(dat.id)}
                className="home-invoices flex justify-around items-center bg-white py-7 rounded-[8px] cursor-pointer"
                key={dat.id}
              >
                <h2>{dat.id}</h2>
                <p>Due {dat.paymentDue}</p>
                <h2>{dat.clientName}</h2>
                <h3>${dat.total}</h3>
                {dat && dat.status === "paid" && (
                  <div className="flex justify-center items-center gap-5">
                    <button className="flex justify-center items-center gap-2 w-[104px] h-[40px] bg-green-50 rounded-[6px]">
                      <div className="w-2 h-2 rounded bg-[#33D69F]"></div>
                      <h2 className="text-[#33D69F]">{dat.status}</h2>
                    </button>
                    <img src={Ongga} alt="O'ngga strelka" />
                  </div>
                )}
                {dat && dat.status === "pending" && (
                  <div className="flex justify-center items-center gap-5">
                    <button className="flex justify-center items-center gap-2 w-[104px] h-[40px] bg-amber-50 rounded-[6px]">
                      <div className="w-2 h-2 rounded bg-[#FF8F00]"></div>
                      <h2 className="text-[#FF8F00]">{dat.status}</h2>
                    </button>
                    <img src={Ongga} alt="O'ngga strelka" />
                  </div>
                )}
                {dat && dat.status === "draft" && (
                  <div className="flex justify-center items-center gap-5">
                    <button className="flex justify-center items-center gap-2 w-[104px] h-[40px] bg-gray-100 rounded-[6px]">
                      <div className="w-2 h-2 rounded bg-[#373B53]"></div>
                      <h2 className="text-[#373B53]">{dat.status}</h2>
                    </button>
                    <img src={Ongga} alt="O'ngga strelka" />
                  </div>
                )}
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
