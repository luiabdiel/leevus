import { Link } from "react-router-dom"

import LogoCoral from '../../../assets/images/logo.svg'
import IconSearch from '../../../assets/images/icon-search.svg'
import IconWishlist from '../../../assets/images/icon-wishlist.svg'
import IconProfile from '../../../assets/images/icon-profile.svg'
import IconBag from '../../../assets/images/icon-bag.svg'

import { HeaderContainer, HeaderLogo, IconsContainer, InputContainer, NavbarContainer } from "./styles"

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLogo>
                <img src={LogoCoral} alt="" />
            </HeaderLogo>

            <NavbarContainer>
                <Link to='/'>Handbags</Link>
                <Link to='/'>Watches</Link>
                <Link to='/'>Skincare</Link>
                <Link to='/'>Jewellery</Link>
                <Link to='/'>Apparels</Link>
            </NavbarContainer>

            <InputContainer>
                <img src={IconSearch} alt="" />
                <input type="text" placeholder="Search for products or brands....." />
            </InputContainer>

            <IconsContainer>
                <img src={IconWishlist} alt="" />
                <img src={IconProfile} alt="" />
                <img src={IconBag} alt="" />
            </IconsContainer>
        </HeaderContainer>
    )
}