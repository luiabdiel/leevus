import HeroImg from '../../../assets/images/hero.svg'

import IconArrow from '../../../assets/images/icon-arrow.svg'

import { BaseImage, HeroButton, HeroContainer, HeroText } from './styles'

export const Hero = () => {
    return  (
        <HeroContainer>
            <BaseImage>
                <img src={HeroImg} alt="" />
            </BaseImage>
            <HeroText>
                <h1>Carry your Funk</h1>
                <h2>Trendy handbags collection for your</h2>
                <h2>party animal</h2>
                <HeroButton>
                    <img src={IconArrow} alt="" />
                    See more
                </HeroButton>
            </HeroText>
        </HeroContainer>
    )
}