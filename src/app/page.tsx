import { Suspense } from "react";

import CarCardList from "#/components/car-card-list.tsx";
import CarCardLoader from "#/components/car-card-loader.tsx";
import CustomFilter from "#/components/custom-filter.tsx";
import Hero from "#/components/hero.tsx";
import SearchBar from "#/components/search-bar.tsx";
import { fuels, yearsOfProduction } from "#/constants.ts";

interface HomeProps {
	searchParams: { [key: string]: string | undefined };
}

export default function Home({ searchParams }: HomeProps): React.ReactElement {
	const manufacturer = searchParams?.manufacturer ?? "Volkswagen";
	const model = searchParams?.model ?? "";
	const year = Number.parseInt(searchParams?.year ?? "2022");
	const fuel = searchParams?.fuel ?? "";
	const limit = Number.parseInt(searchParams?.limit ?? "10");

	return (
		<main className="overflow-hidden">
			<Hero />
			<div className="mt-12 padding-x padding-y max-width" id="discover">
				<div className="home__text-container">
					<h1 className="text-4xl font-bold">Car Catalogue</h1>
					<p>Explore the cars you might like</p>
				</div>
				<div className="home__filters">
					<SearchBar />
					<div className="home__filter-container">
						<CustomFilter title="fuel" options={fuels} />
						<CustomFilter title="year" options={yearsOfProduction} />
					</div>
				</div>
				<Suspense
					key={`${manufacturer}-${model}-${year}-${fuel}`}
					fallback={<CarCardLoader />}
				>
					<CarCardList
						manufacturer={manufacturer}
						model={model}
						year={year}
						fuel={fuel}
						limit={limit}
					/>
				</Suspense>
			</div>
		</main>
	);
}
