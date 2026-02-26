export const ProgressBarConfig = {
	radius: 42,
	strokeWidth: 9,
	outerR: 42 + 9 / 2,
	innerR: 42 - 9 / 2
};

export const ProgressBarRingPath = [
	`M ${50 - ProgressBarConfig.outerR} 50`,
	`a ${ProgressBarConfig.outerR} ${ProgressBarConfig.outerR} 0 1 1 ${2 * ProgressBarConfig.outerR} 0`,
	`a ${ProgressBarConfig.outerR} ${ProgressBarConfig.outerR} 0 1 1 ${-2 * ProgressBarConfig.outerR} 0`,
	`M ${50 - ProgressBarConfig.innerR} 50`,
	`a ${ProgressBarConfig.innerR} ${ProgressBarConfig.innerR} 0 1 1 ${2 * ProgressBarConfig.innerR} 0`,
	`a ${ProgressBarConfig.innerR} ${ProgressBarConfig.innerR} 0 1 1 ${-2 * ProgressBarConfig.innerR} 0`
].join(' ');
