import styled from "styled-components";
import { css } from "styled-components";
import Image from "next/image";

const headerStyle = css`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
`;
const categoryStyle = css`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
`;
const aboutStyle = css`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
`;
export const Container = styled.div<{ isHover: boolean }>`
	display: flex;
	box-sizing: border-box;
	width: 350px;
	height: fit-content;
	background: rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(3px);
	border-radius: 10px;
	padding: 27px;
	border: 1px solid transparent;
	&:hover {
		border: 1px solid #ffa500;
		cursor: pointer;
	}
	${(props) =>
		props.isHover &&
		css`
			transform: translateY(-5px);
			transition: transform 0.3s ease;
		`}
`;

export const ProductImage = styled(Image)`
	width: 95px;
	height: 95px;
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	margin-left: 22px;
`;
export const Header = styled.div<{ isHover: boolean }>`
	${headerStyle}
	color: #FFFFFF;
	leading-trim: both;
	text-edge: cap;
	letter-spacing: -0.05em;
	text-decoration: ${({ isHover }) => (isHover ? "underline" : "none")};
	color: ${({ isHover }) => (isHover ? "#FFA500" : "#FFFFFF")};
`;
export const Category = styled.div`
	${categoryStyle}
	leading-trim: both;
	text-edge: cap;
	letter-spacing: -0.05em;
	font-feature-settings: "ss06" on, "ss07" on, "ss04" on;
	color: #adadad;
	margin-top: 15px;
`;

export const About = styled.div`
	${aboutStyle}
	color: #FFFFFF;
	leading-trim: both;
	text-edge: cap;
	letter-spacing: -0.05em;
	margin-top: 18px;
`;
