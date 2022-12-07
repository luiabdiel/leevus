import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { MenuMobilineContainer, NavMobileContainer } from "./styles"

interface IMenuMobileProps {
    menuIsVisible: boolean
    setMenuIsVisible: (active: boolean) => void
}

export const MenuMobile:React.FC<IMenuMobileProps> = ({menuIsVisible, setMenuIsVisible}) => {
    return (
        <MenuMobilineContainer isVisible={menuIsVisible} >
            <FaTimes size={30} onClick={() => setMenuIsVisible(false)} />
            <NavMobileContainer>
                <Link to='/'>Handbags</Link>
                <Link to='/'>Watches</Link>
                <Link to='/'>Skincare</Link>
                <Link to='/'>Jewellery</Link>
                <Link to='/'>Apparels</Link>
            </NavMobileContainer>
        </MenuMobilineContainer>
    )
}