"use client";

import CustomButton from "./custom-button.tsx";

export default function Hero(): React.ReactElement {
	const handleScroll = () => {};

	return (
		<section className="hero">
			<div className="flex-1 pt-36 padding-x">
				<h1 className="hero__title">
					Find, book, or rent a car -- quickly and easily!
				</h1>
				<p className="hero__subtitle">
					Streamline your car rental experience with our effortless booking
					process.
				</p>
				<CustomButton
					type="button"
					className="bg-primary-blue text-white rounded-full mt-10"
					onClick={handleScroll}
				>
					Explore Cars
				</CustomButton>
			</div>
			<div className="hero__image-container">
				<div className="hero__image">
					<img
						src="/hero.png"
						alt="hero"
						className="w-full h-full object-contain"
					/>
				</div>
				<div className="hero__image-overlay" />
			</div>
		</section>
	);
}
