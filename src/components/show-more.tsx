"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import CustomButton from "./custom-button.tsx";

export interface ShowMoreProps {
	pageNumber: number;
	next: boolean;
}

function ShowMore({ pageNumber, next }: ShowMoreProps): React.ReactElement {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const fetchMore = () => {
		const newPage = (pageNumber + 1) * 10;
		const params = new URLSearchParams(searchParams);
		params.set("limit", newPage.toString());

		router.replace(`${pathname}?${params}`, { scroll: false });
	};

	return (
		<div className="w-full flex-center gap-5 mt-10">
			{!next && (
				<CustomButton
					type="submit"
					className="bg-primary-blue rounded-full text-white"
					onClick={fetchMore}
				>
					Show More
				</CustomButton>
			)}
		</div>
	);
}

export default ShowMore;
