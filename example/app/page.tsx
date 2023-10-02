'use client';

import { BarChart } from 'mahogany';

export default function Home() {
	const data = [2, 5, 20, 30, 40, 50, 60, 70, 80, 100];

	return (
		<main className="flex min-h-screen justify-center items-center p-24">
			<div className="">
				<div className="border border-white/10">
					<BarChart width={300} height={300} color="#FEFAE0" data={data} />
				</div>
			</div>
		</main>
	);
}
