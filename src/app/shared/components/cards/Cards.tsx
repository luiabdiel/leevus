import IconWishlist from '../../../assets/images/icon-wishlist.svg'
import Bag from '../../../assets/images/bag.svg'
import { CardContainer, CardContent } from './styles'

export const Cards = () => {
  return (
    <CardContainer>
        <div>
            <img src={Bag} alt="" />
        </div>
        <CardContent>
            <div>
                <span>Grande</span>
                <img src={IconWishlist} alt="" />
            </div>
            <p>Blossom Pouch</p>
            <strong>$39.49</strong>
        </CardContent>
    </CardContainer>
  )
}
