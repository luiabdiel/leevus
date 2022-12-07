import { Link } from "react-router-dom"
import { FaBars } from 'react-icons/fa'

import LogoCoral from '../../../assets/images/logo.svg'
import IconSearch from '../../../assets/images/icon-search.svg'
import IconWishlist from '../../../assets/images/icon-wishlist.svg'
import IconProfile from '../../../assets/images/icon-profile.svg'
import IconBag from '../../../assets/images/icon-bag.svg'

import { HeaderContainer, HeaderLogo, IconsContainer, InputContainer, NavbarContainer, OpenMenuMobile } from "./styles"


interface IHeaderProps {
    setMenuIsVisible: (active: boolean) => void
}

export const Header: React.FC<IHeaderProps> = ({ setMenuIsVisible }) => {
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
            <OpenMenuMobile>
                <FaBars size={30} onClick={() => setMenuIsVisible(true)} />
            </OpenMenuMobile>
        </HeaderContainer>
    )
}