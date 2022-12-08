import { Cards } from "../../../../shared/components"
import { ArrivalsContainer, CardsList } from "./styles"

export const Arrivals = () => {
  return (
    <ArrivalsContainer>
        <h1>New Arrivals</h1>
        <CardsList>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </CardsList> 
    </ArrivalsContainer>
  )
}
