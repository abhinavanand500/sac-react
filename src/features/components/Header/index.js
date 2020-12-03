import React from "react";
import imgSrc from "../img/logo-white.png";
import {
    HeaderOne,
    LogoBox,
    Logo,
    TextBox,
    HeadingPrimary,
    HeadingPrimaryMain,
    HeadingPrimarySub,
} from "./Header.module";
const Header = () => {
    return (
        <>
            <HeaderOne>
                <LogoBox>
                    <Logo src={imgSrc} alt='Logo' />
                </LogoBox>
                <TextBox>
                    <HeadingPrimary>
                        <HeadingPrimaryMain>SACATE</HeadingPrimaryMain>
                        <HeadingPrimarySub>
                            is where Life happens
                        </HeadingPrimarySub>
                    </HeadingPrimary>
                </TextBox>
            </HeaderOne>
        </>
    );
};

export default Header;
