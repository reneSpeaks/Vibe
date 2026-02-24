export default function CheckInButton() {
	return (
		<>
			<button className="cursor-pointer">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="50px"
					height="50px"
					viewBox="0 0 24 24"
					fill="white"
					className="group duration-300 hover:rotate-90">
					<path
						stroke="black"
						d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
						strokeWidth="1"></path>
					<path stroke="black" d="M8 12H16" strokeWidth="1"></path>
					<path stroke="black" d="M12 16V8" strokeWidth="1"></path>
				</svg>
				<h4>Check in</h4>
			</button>
		</>
	);
}
