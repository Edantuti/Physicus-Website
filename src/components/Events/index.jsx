import { Marquee } from "../Utils"

export default ()=>{
  return (
    <>
      <Marquee/>
      <section className="max-h-full min-h-40">
        <div className="my-48 flex flex-col gap-5 mx-auto w-fit">
           <div className="flex gap-5 h-64">
            <p className="hover:ring hover:ring-white bg-[#515188] w-[800px] rounded transition-transform duration-200 hover:-translate-y-1">Event 1</p>
            <p className="bg-[#282862] w-96 rounded transition-all duration-200 hover:-translate-y-1"> </p>
            </div> 
           <div className="flex gap-5 h-64">
            <p className="bg-[#282862] w-96 rounded transition-transform duration-200 hover:-translate-y-1"> </p>
            <p className="hover:ring hover:ring-white bg-[#515188] w-[800px] rounded transition-transform duration-200 hover:-translate-y-1">Event 1</p>
            </div> 
        </div>
      </section>
      <Marquee/>
    </>
  )
}
