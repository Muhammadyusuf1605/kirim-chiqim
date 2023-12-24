import { Outlet } from "react-router-dom";
import Header from "../components/Header";
function RootLayout() {
  return (
    <>
      <Header />
      <main className="flex flex-grow px-5 py-[72px]">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
