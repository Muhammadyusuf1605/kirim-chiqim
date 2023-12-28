import bgimage from "../assets/illustration-empty.svg";
function NoINvoicesPage({isPending}) {
    console.log(isPending);
  return (
    <>
    {!isPending && <div className="flex flex-col w-full max-w-[800px] mx-auto">
      <img src={bgimage} alt="No Invoices" />
      <h3 className="text-5xl text-center">No Invoices</h3>
    </div>}
    </>
  )
}

export default NoINvoicesPage;
