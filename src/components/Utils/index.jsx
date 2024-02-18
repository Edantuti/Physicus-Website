
const Marquee = ()=>{
	
	return (<div className="flex gap-10 text-5xl overflow-x-auto overflow-y-hidden">
		<MarqueeItem />
		<MarqueeItem />
		<MarqueeItem />
		<MarqueeItem />
		<MarqueeItem />
		<MarqueeItem />
		<MarqueeItem />
		<MarqueeItem />
		<MarqueeItem />
		<MarqueeItem />
		<MarqueeItem />
	</div>)
}

const MarqueeItem = ()=>{
	return (
        <p className={`text-white w-fit font-semibold uppercase`}>Events</p>
	)
}

export {
	Marquee
}
