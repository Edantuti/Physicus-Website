
export default ()=>{
	return (
		<section className="mb-40 mt-20 py-20 text-white antialiased font-inter">
			<h2 className="text-4xl text-center font-medium">Past Events</h2>
			<div className="bg-white h-96 w-[800px] rounded mx-auto my-10 relative overflow-hidden">
				<div className={` text-black absolute grid grid-cols-2 grid-rows-2 p-10 w-full h-full bg-gray-200 backdrop-blur transition-opacity hover:opacity-100 opacity-0`}>
					<h3 className="text-3xl font-semibold">JamShack</h3>
					<div></div>
					<p className="text-md">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
					</p>
					<div className="text-right">
						<p className="text-4xl ">500+ Participants</p>
						<a href="https://jamshack.in" target="_blank">Link Here</a>
					</div>
				</div>
			</div>	
		</section>
	)
}
