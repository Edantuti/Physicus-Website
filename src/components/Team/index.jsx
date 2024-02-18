import TeamCard from "./TeamCard"
export default ()=>{
	return	(<>

		<section className="min-h-screen max-h-full py-16 mx-96 font-inter antialiased">
			<h2 className="text-center text-white font-inter text-4xl antialiased my-10">Our Team</h2>
			<div className="grid grid-cols-3 w-fit mx-auto gap-4">
			<TeamCard name="Your Name" designation={"Your Designation"}/>
			<TeamCard name="Your Name" designation={"Your Designation"}/>
			<TeamCard name="Your Name" designation={"Your Designation"}/>
			<TeamCard name="Your Name" designation={"Your Designation"}/>
			<TeamCard name="Your Name" designation={"Your Designation"}/>
			<TeamCard name="Your Name" designation={"Your Designation"}/></div>
		</section>

	</>)
}



