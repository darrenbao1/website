import { useState } from "react";
import { product } from "../../types/interfaces";
import {
	Container,
	ProductImage,
	ContentContainer,
	Header,
	About,
	Category,
} from "./ProductCard.styles";
interface Props {
	product: product;
}
export const ProductCard = (props: Props) => {
	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = () => {
		setIsHover(true);
	};

	const handleMouseLeave = () => {
		setIsHover(false);
	};
	const handleClick = () => {
		window.open(props.product.link, "_blank");
	};
	return (
		<Container
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			isHover={isHover}
			onClick={handleClick}>
			<ProductImage
				src={props.product.imageUrl}
				alt={props.product.name}
				width={100}
				height={100}
			/>
			<ContentContainer>
				<Header isHover={isHover}>{props.product.name}</Header>
				<Category>{props.product.category}</Category>
				<About>{props.product.about}</About>
			</ContentContainer>
		</Container>
	);
};
