"use client";

import { useMemo, useState } from "react";

import { calculateCarRent, generateCarImageUrl } from "#/lib/utils.ts";
import CarDetails from "./car-details.tsx";
import CustomButton from "./custom-button.tsx";

import type { Car } from "#/car.ts";

export interface CarCardItemProps {
	car: Car;
}

function CarCardItem({ car }: CarCardItemProps): React.ReactElement {
	const carRent = useMemo(
		() => calculateCarRent(car.city_mpg, car.year),
		[car],
	);
	const [open, setOpen] = useState(false);

	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

	return (
		<article className="car-card group">
			<div className="car-card__content">
				<h2 className="car-card__content-title">
					{car.make} {car.model}
				</h2>
			</div>
			<p className="flex mt-6 text-[32px] font-extrabold">
				<span className="self-start text-[14px] font-semibold">$</span>
				{carRent}
				<span className="self-end text-[14px] font-medium">/day</span>
			</p>
			<figure className="relative w-full h-40 my-3 object-contain">
				<img
					src={generateCarImageUrl({
						make: car.make,
						year: car.year,
						model: car.model,
						angle: "0",
					})}
					alt="car model"
					className="w-full h-full object-contain"
					loading="lazy"
				/>
			</figure>
			<div className="relative flex w-full mt-2">
				<div className="w-full flex justify-between text-gray group-hover:invisible">
					<div className="flex flex-col justify-center items-center gap-2">
						<img
							src="/steering-wheel.svg"
							alt="steering wheel"
							width={20}
							height={20}
						/>
						<p className="text-[14px]">
							{car.transmission === "a" ? "Automatic" : "Manual"}
						</p>
					</div>
					<div className="flex flex-col justify-center items-center gap-2">
						<img src="/tire.svg" alt="tire" width={20} height={20} />
						<p className="text-[14px]">{car.drive.toUpperCase()}</p>
					</div>
					<div className="flex flex-col justify-center items-center gap-2">
						<img src="/gas.svg" alt="gas" width={20} height={20} />
						<p className="text-[14px]">{car.city_mpg} MPG</p>
					</div>
				</div>
				<div className="car-card__btn-container">
					<CustomButton
						className="w-full py-[16px] rounded-full bg-primary-blue text-[14px] text-white leading-[17px] font-bold"
						onClick={openModal}
					>
						<span className="flex-1">View More</span>
						<div className="relative w-6 h-6">
							<img
								src="/right-arrow.svg"
								alt="right arrow"
								className="w-full h-full object-contain"
							/>
						</div>
					</CustomButton>
				</div>
			</div>
			<CarDetails car={car} onClose={closeModal} open={open} />
		</article>
	);
}

export default CarCardItem;
