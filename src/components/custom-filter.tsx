"use client";

import { Listbox, Transition } from "@headlessui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

export interface CustomFilterProps {
	title: string;
	options: Array<{ title: string; value: string }>;
}

function CustomFilter({
	title,
	options,
}: CustomFilterProps): React.ReactElement {
	const [selected, setSelected] = useState(options[0]);
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const router = useRouter();

	useEffect(() => {
		const params = new URLSearchParams(searchParams);

		if (selected.value && selected.value !== "") {
			params.set(title, selected.value);
		} else {
			params.delete(title);
		}

		router.replace(`${pathname}?${params.toString()}`, { scroll: false });
	}, [selected, pathname, searchParams, router, title]);

	return (
		<div className="w-fit">
			<Listbox value={selected} onChange={(e) => setSelected(e)}>
				<div className="relative w-fit z-10">
					<Listbox.Button className="custom-filter__btn">
						<span className="block truncate">{selected.title}</span>
						<img
							src="/chevron-up-down.svg"
							alt="chevron up down"
							width={20}
							height={20}
							className="ml-4 object-contain"
						/>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options className="custom-filter__options">
							{options.map((option) => (
								<Listbox.Option
									key={option.title}
									className={({ active }) =>
										`relative cursor-default select-none py-2 px-4 ${
											active ? "bg-primary-blue text-white" : "text-gray-900"
										}`
									}
									value={option}
								>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${
													selected ? "font-medium" : "font-normal"
												}`}
											>
												{option.title}
											</span>
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
}

export default CustomFilter;
