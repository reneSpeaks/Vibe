import * as Icons from '@assets/icons';
import { IArrowRight } from '@assets/icons';
import type { SVGProps } from 'react';

type IconName = keyof typeof Icons;

export default function SettingsNavItem({ title, icon }: { title: string; icon: IconName }) {
	const Icon = Icons[icon] as React.FC<SVGProps<SVGSVGElement>>;
	return (
		<li className="settings--content--item">
			<p>
				<Icon /> <span>{title}</span>
			</p>
			<IArrowRight />
		</li>
	);
}
