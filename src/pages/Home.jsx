// hooks
import { useFetch } from "../hooks/useFetch";
// img
import Pastga from "../assets/icon-arrow-down.svg";
import AddPage from "../assets/favicon-32x32.png";
import InvoicesList from "../components/InvoicesList";

const url = "http://localhost:3000/data";

function Home() {
  const { data, isPending, error } = useFetch(url);

  return (
    <div className="flex flex-col w-full max-w-[900px] mx-auto pl-[100px]">
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
          <button className="flex justify-center items-center rounded-[24px] gap-4 pt-2 pr-4 pb-2 pl-2">
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
                  className="btn btn-primary drawer-button">
                  <img src={AddPage} alt="" />
                  <h4>New Invoice</h4>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <h2 className="text-5xl">New Invoice</h2>
                </ul>
              </div>
            </div>
          </button>
        </div>
      </div>
      {isPending && (
        <h3 className="text-5xl flex gap-2">
          Loading
          <span className="loading loading-bars loading-lg"></span>
        </h3>
      )}
      {data && <InvoicesList data={data} />}
    </div>
  );
}

export default Home;
