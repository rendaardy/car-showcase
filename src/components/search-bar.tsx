"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import SearchManufacturer from "./search-manufacturer.tsx";

function SearchButton({
	className,
	children,
}: React.HTMLAttributes<HTMLButtonElement>): React.ReactElement {
	return (
		<button type="submit" className={`-ml-3 z-10 ${className}`}>
			{children}
		</button>
	);
}

function SearchBar(): React.ReactElement {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = e.currentTarget as HTMLFormElement;
		const formData = new FormData(form);
		const params = new URLSearchParams(searchParams);

		for (const [key, value] of formData.entries()) {
			if (value && value !== "") {
				params.set(key, value.toString());
			} else {
				params.delete(key);
			}
		}

		router.replace(`${pathname}?${params.toString()}`, { scroll: false });
	};

	return (
		<form className="searchbar" onSubmit={handleSearch}>
			<div className="searchbar__item">
				<SearchManufacturer />
				<SearchButton className="sm:hidden">
					<img
						src="/magnifying-glass.svg"
						alt="magnifying glass"
						width={40}
						height={40}
						className="object-contain"
					/>
				</SearchButton>
			</div>
			<div className="searchbar__item">
				<img
					src="/model-icon.png"
					alt="car model"
					width={25}
					height={25}
					className="absolute ml-4"
				/>
				<input
					type="text"
					name="model"
					placeholder="Tiguan"
					className="searchbar__input"
				/>
				<SearchButton className="sm:hidden">
					<img
						src="/magnifying-glass.svg"
						alt="magnifying glass"
						width={40}
						height={40}
						className="object-contain"
					/>
				</SearchButton>
			</div>
			<SearchButton className="max-sm:hidden">
				<img
					src="/magnifying-glass.svg"
					alt="magnifying glass"
					width={40}
					height={40}
					className="object-contain"
				/>
			</SearchButton>
		</form>
	);
}

export default SearchBar;
