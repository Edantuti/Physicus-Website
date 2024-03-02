export default ()=>{
	return (
		<section className="py-20 space-y-10">
			<h2 className="text-center font-inter text-5xl text-white font-semibold uppercase">What we do</h2>
			<div className="flex gap-10 items-center justify-center">
			<div className="flex items-center gap-40 relative group">
				<h3 className="text-4xl top-0 text-white text-center absolute">Activity 1</h3>
				<img src="" alt="Activiy 1" className="bg-gray-400 rounded group-hover:scale-90 group-hover:translate-y-6 group-hover:-translate-x-6 transition-all z-10" width={500} height={250} />

			</div>
			<div className=" flex items-center gap-40 relative group">
				<h3 className="text-4xl top-0 text-white text-center absolute">Activity 2</h3>
				<img src="" alt="Activiy 2" className="bg-gray-400 rounded group-hover:scale-90 group-hover:translate-y-6 group-hover:-translate-x-6 transition-all z-10" width={500} height={250} />
			</div>
			</div>
		</section>
	)
}
