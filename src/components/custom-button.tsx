"use client";

import { forwardRef } from "react";

export interface CustomButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export default forwardRef(function CustomButton(
	{ className, ...props }: CustomButtonProps,
	ref: React.Ref<HTMLButtonElement>,
): React.ReactElement {
	return (
		<button
			type="button"
			className={`custom-btn ${className}`}
			ref={ref}
			{...props}
		/>
	);
});
