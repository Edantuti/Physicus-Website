import { useWindowSize } from "@uidotdev/usehooks"
import { useRef } from "react";

const Marquee = ()=>{
	return (<div className="flex gap-10 text-5xl overflow-x-auto overflow-y-hidden">
		<MarqueeItem  />
		<MarqueeItem  />
		<MarqueeItem  />
		<MarqueeItem  />
		<MarqueeItem  />
		<MarqueeItem  />
		<MarqueeItem  />
		<MarqueeItem  />
		<MarqueeItem  />
		<MarqueeItem  />
		<MarqueeItem  />
		<MarqueeItem  />
		<MarqueeItem  />
		<MarqueeItem  />
		<MarqueeItem  />
		<MarqueeItem  />
	</div>)
}

const MarqueeItem = ({testref})=>{
	return (
        <p ref={testref} className={`text-white w-fit font-semibold uppercase`}>Events</p>
	)
}

export {
	Marquee
}
