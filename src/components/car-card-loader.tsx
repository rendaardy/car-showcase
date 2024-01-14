import ContentLoader, { type IContentLoaderProps } from "react-content-loader";

function CarCardLoader(props: IContentLoaderProps): React.ReactElement {
	const rows = 2;
	const columns = 5;
	const coverHeight = 85;
	const coverWidth = 65;
	const padding = 5;
	const speed = 1;

	const coverHeightWithPadding = coverHeight + padding;
	const coverWidthWithPadding = coverWidth + padding;
	const initial = 35;
	const covers = Array(columns * rows).fill(1);

	return (
		<section>
			<div className="home__cars-wrapper">
				{Array(6)
					.fill(1)
					.map((_, i) => (
						<ContentLoader
							/* biome-ignore lint/suspicious/noArrayIndexKey: it's ok */
							key={i}
							speed={speed}
							width={columns * coverWidthWithPadding}
							height={rows * coverHeightWithPadding}
							foregroundColor="#242b34"
							backgroundColor="#343d4c"
							{...props}
						>
							<rect
								x="0"
								y="0"
								rx="0"
								ry="0"
								width={columns * coverWidthWithPadding - padding}
								height="20"
							/>

							{covers.map((g, i) => {
								const vy =
									Math.floor(i / columns) * coverHeightWithPadding + initial;
								const vx =
									(i * coverWidthWithPadding) %
									(columns * coverWidthWithPadding);

								return (
									<rect
										/* biome-ignore lint/suspicious/noArrayIndexKey: it's ok */
										key={i}
										x={vx}
										y={vy}
										rx="0"
										ry={0}
										width={coverWidth}
										height={coverHeight}
									/>
								);
							})}
						</ContentLoader>
					))}
			</div>
		</section>
	);
}

export default CarCardLoader;
