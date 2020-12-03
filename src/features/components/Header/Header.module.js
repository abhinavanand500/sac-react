import styled from "styled-components";
import Hero from "../img/hero.jpg";
export const HeaderOne = styled.header`
    height: 95vh;
    background-image: linear-gradient(
            to right bottom,
            rgba(126, 213, 111, 0.6),
            rgba(40, 180, 131, 0.6)
        ),
        url(${Hero});
    background-size: cover;
    background-position: top;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;
export const LogoBox = styled.div`
    position: absolute;
    top: 4rem;
    left: 4rem;
`;
export const Logo = styled.img`
    height: 3.5rem;
`;
export const TextBox = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const HeadingPrimary = styled.h1`
    color: #fff;
    text-transform: uppercase;
`;
export const HeadingPrimaryMain = styled.span`
    display: block;
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 3.5rem;
`;
export const HeadingPrimarySub = styled.span`
    display: block;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.74rem;
`;
