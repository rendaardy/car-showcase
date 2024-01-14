import type { Metadata } from "next";

import Footer from "#/components/footer.tsx";
import Navbar from "#/components/navbar.tsx";

import "./globals.css";

export const metadata: Metadata = {
	title: "Car Hub",
	description: "Discover the best car in the world",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): React.ReactElement {
	return (
		<html lang="en">
			<body className="relative">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
