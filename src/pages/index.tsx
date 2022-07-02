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
			<Box className="relative top-0 left-0 w-full h-52" />
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto gap-5 p-10 ">
				{apartments.map((apartment, idx) => {
					return (
						<div key={idx} className="p-5 ">
							<h1>{apartment.name}</h1>
							<div className="relative min-h-[20rem]">
								<Image
									src="/assets/apartment1.jpg"
									alt="Picture of something nice"
									layout="fill"
									objectFit="cover"
									className="rounded-md"
								/>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Home;
