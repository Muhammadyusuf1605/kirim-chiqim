// rrd import
import { Link } from "react-router-dom";
// hooks
import { useEffect, useState } from "react";
function InvoisePage({ invoiceId }) {
  const [url, setUrl] = useState(null);
  if (!invoiceId === null) {
    const url1 = `http://localhost:3000/data/:${invoiceId}`;
    const api1 = useFetch(url1);
    setUrl(api1);
  }
  useEffect(() => {
    console.log(url);
  }, [url]);
  return (
    <div className="flex flex-col w-full max-w-[800px] mx-auto">
      <Link to="/">Go To Home</Link>
      <div>
        <span>
          <h3>STATUS</h3>
          {url && url.status === "paid" && (
            <div className="flex justify-center items-center gap-5">
              <button className="flex justify-center items-center gap-2 w-[104px] h-[40px] bg-green-50 rounded-[6px]">
                <div className="w-2 h-2 rounded bg-[#33D69F]"></div>
                <h2 className="text-[#33Durl1]">{url.status}</h2>
              </button>
              <img src={Ongga} alt="O'ngga strelka" />
            </div>
          )}
          {url && url.status === "pending" && (
            <div className="flex justify-center items-center gap-5">
              <button className="flex justify-center items-center gap-2 w-[104px] h-[40px] bg-amber-50 rounded-[6px]">
                <div className="w-2 h-2 rounded bg-[#FF8F00]"></div>
                <h2 className="text-[#FF8url1]">{url.status}</h2>
              </button>
              <img src={Ongga} alt="O'ngga strelka" />
            </div>
          )}
          {url && url.status === "draft" && (
            <div className="flex justify-center items-center gap-5">
              <button className="flex justify-center items-center gap-2 w-[104px] h-[40px] bg-gray-100 rounded-[6px]">
                <div className="w-2 h-2 rounded bg-[#373B53]"></div>
                <h2 className="text-[#373url1]">{url.status}</h2>
              </button>
              <img src={Ongga} alt="O'ngga strelka" />
            </div>
          )}
        </span>
      </div>
    </div>
  );
}

export default InvoisePage;
