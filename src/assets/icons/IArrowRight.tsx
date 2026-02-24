import type { SVGProps } from 'react';

export function IArrowRight(props: SVGProps<SVGSVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M4 12h16m0 0l-6-6m6 6l-6 6"></path>
		</svg>
	);
}
