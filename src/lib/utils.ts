import type { Car } from "../car.ts";

export function calculateCarRent(cityMpg: number, year: number): string {
	const basePricePerDay = 50; // Base rental price per day in dollars
	const mileageFactor = 0.1; // Additional rate per mile driven
	const ageFactor = 0.05; // Additional rate per year of vehicle age

	// Calculate additional rate based on mileage and age
	const mileageRate = cityMpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;

	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return rentalRatePerDay.toFixed(0);
}

export function generateCarImageUrl({
	make,
	year,
	model,
	angle,
}: Pick<Car, "make" | "year" | "model"> & { angle: string }): string {
	const url = new URL("https://cdn.imagin.studio/getimage");
	url.searchParams.set("customer", "hrjavascript-mastery");
	url.searchParams.set("modelFamily", model.split(" ").at(0) ?? "");
	url.searchParams.set("zoomType", "fullscreen");
	url.searchParams.set("modelYear", year.toString());
	url.searchParams.set("angle", angle);

	return url.href;
}
