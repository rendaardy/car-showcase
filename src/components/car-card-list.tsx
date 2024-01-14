import { env } from "node:process";

import type { Car } from "#/car.ts";
import CarCardItem from "./car-card-item.tsx";
import ShowMore from "./show-more.tsx";

export interface CarCardListProps {
	manufacturer: string;
	model: string;
	year: number;
	fuel: string;
	limit: number;
}

async function CarCardList({
	manufacturer,
	model,
	year,
	fuel,
	limit,
}: CarCardListProps): Promise<React.ReactElement> {
	const url = new URL("/v1/cars", "https://cars-by-api-ninjas.p.rapidapi.com");
	url.searchParams.set("make", manufacturer);
	url.searchParams.set("model", model);
	url.searchParams.set("year", year.toString());
	url.searchParams.set("fuel_type", fuel);
	url.searchParams.set("limit", limit.toString());

	const headers = new Headers({
		"X-RapidAPI-Key": env.RAPIDAPI_KEY ?? "",
		"X-RapidAPI-Host": env.RAPIDAPI_HOST ?? "",
	});
	const request = new Request(url, {
		headers,
		method: "GET",
	});
	const response = await fetch(request);
	const result = await response.json();
	const isDataEmpty =
		(Array.isArray(result) && result.length === 0) ||
		result?.error ||
		result?.messages;

	return (
		<>
			{!isDataEmpty ? (
				<section>
					<div className="home__cars-wrapper">
						{result.map((car: Car, i: number) => (
							<CarCardItem key={`${car.model}-${car.year}-${i}`} car={car} />
						))}
					</div>
					<ShowMore pageNumber={limit / 10} next={limit > result.length} />
				</section>
			) : (
				<div className="home__error-container">
					<h2 className="text-black text-xl font-bold">No results</h2>
					<p>We could not find any cars with that manufacturer</p>
				</div>
			)}
		</>
	);
}

export default CarCardList;
