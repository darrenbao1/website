import { product } from "../types/interfaces";
import styles from "../styles/products.module.css";
import { ProductCard } from "../components/ProductCard/ProductCard";
export default function products() {
	const products: product[] = [
		{
			name: "Souk",
			category: "Infrastructure & Tooling",
			about:
				"A protocol on StarkNet that powers the next generation of dApps utilising ERC-2114",
			imageUrl: "/SoukLogo.png",
			link: "https://twitter.com/SoukProtocol",
		},
		{
			name: "Starkpilled",
			category: "Digital Avatar Collection",
			about:
				"Pioneering the use of ERC-2114, Starkpilled is a PFP collection that celebrates the StarkNet ecosystem. Avatars (Pills) are able to equip, unequip traits, and engage in the world of on-chain reputation by 'faming' or 'defaming' other Pills.",
			imageUrl: "/Starkpilled.png",
			link: "https://starkpill.clinic",
		},
		{
			name: "Seraphie",
			category: "Gaming NFT Collection",
			about: "-Coming Soon-",
			imageUrl: "/SeraphieLogo.png",
			link: "https://twitter.com/SeraphieGame",
		},
	];
	return (
		<>
			<div className={styles.cardContainer}>
				<span className={styles.header}>Products</span>
				{products.map((product, index) => (
					<ProductCard product={product} key={index} />
				))}
			</div>
			<div className="backgroundBlur"></div>
		</>
	);
}
