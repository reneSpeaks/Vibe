import type { SVGProps } from 'react';

export function IPlusCircle(props: SVGProps<SVGSVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
			<g
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={props.strokeWidth ? props.strokeWidth : 2}>
				<path strokeDasharray={60} d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z">
					<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="60;0"></animate>
				</path>
				<g strokeDasharray={12} strokeDashoffset={12}>
					<path d="M7 12h10">
						<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" to={0}></animate>
					</path>
					<path d="M12 7v10">
						<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" to={0}></animate>
					</path>
				</g>
			</g>
		</svg>
	);
}
