export const ProgressBarConfig = {
	radius: 45,
	strokeWidth: 8,
	outerR: 45 + 8 / 2,
	innerR: 45 - 8 / 2
};

export const ProgressBarRingPath = [
	`M ${50 - ProgressBarConfig.outerR} 50`,
	`a ${ProgressBarConfig.outerR} ${ProgressBarConfig.outerR} 0 1 1 ${2 * ProgressBarConfig.outerR} 0`,
	`a ${ProgressBarConfig.outerR} ${ProgressBarConfig.outerR} 0 1 1 ${-2 * ProgressBarConfig.outerR} 0`,
	`M ${50 - ProgressBarConfig.innerR} 50`,
	`a ${ProgressBarConfig.innerR} ${ProgressBarConfig.innerR} 0 1 1 ${2 * ProgressBarConfig.innerR} 0`,
	`a ${ProgressBarConfig.innerR} ${ProgressBarConfig.innerR} 0 1 1 ${-2 * ProgressBarConfig.innerR} 0`
].join(' ');
