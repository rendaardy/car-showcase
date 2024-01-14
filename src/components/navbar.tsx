import Link from "next/link";

import CustomButton from "#/components/custom-button.tsx";

function Navbar(): React.ReactElement {
	return (
		<header className="w-full absolute z-10">
			<nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
				<Link
					href="/"
					className="flex justify-center items-center"
					aria-label="Car Hub Logo"
				>
					<img
						src="/logo.svg"
						alt="Car Hub Logo"
						width={118}
						height={18}
						className="object-contain"
					/>
				</Link>
				<CustomButton className="text-primary-blue bg-white rounded-full min-w-[130px]">
					Sign In
				</CustomButton>
			</nav>
		</header>
	);
}

export default Navbar;
