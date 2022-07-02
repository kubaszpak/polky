import Box from "@/components/box";
import type { NextPage } from "next";
import Image from "next/image";

const apartments = [
	{
		name: "Apartament Legnicka",
		price: 300,
		people: 3,
	},
	{
		name: "Domek Przedmiejska",
		price: 200,
		people: 4,
	},
	{
		name: "Domek Sezamkowa",
		price: 200,
		people: 4,
	},
	{
		name: "Mieszkanie Klonowa",
		price: 200,
		people: 4,
	},
	{
		name: "Domek Plac Legionów",
		price: 200,
		people: 4,
	},
	{
		name: "Domek Armia Krajowa",
		price: 200,
		people: 4,
	},
];

const Home: NextPage = () => {
	return (
		<>
			<Box className="flex w-full p-10 justify-between">
				<div className="max-w-[240px]">
					<Image width={586} height={154} src="/logo.png" alt="Domky" />
				</div>
				<div>
					<ul className="flex gap-5">
						<li>Home</li>
						<li>About</li>
					</ul>
				</div>
			</Box>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto gap-5 p-10 ">
				{apartments.map((apartment, idx) => {
					return (
						<div key={idx} className="p-5 ">
							<div className="relative min-h-[20rem]">
								<Image
									src="/assets/apartment1.jpg"
									alt="Picture of something nice"
									layout="fill"
									objectFit="cover"
									className="rounded-md"
								/>
							</div>
							<h1>{apartment.name}</h1>
							<h2>{apartment.price}</h2>
							<h2>{apartment.people}</h2>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Home;
