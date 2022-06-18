import { Card } from "../Card"
import { Container, StyledCardList } from "./style"

export const CardList = ({
  techList,
  addCard,
  techCard,
  setTechId,
  techId,
  setTechList,
  user,
}) => {
  return (
    <StyledCardList>
      {techList?.map((tech) => {
        return (
          <Container
            key={tech.id}
            onClick={() => {
              setTechId(tech.id)
            }}
          >
            <Card
              id={tech.id}
              tech={tech}
              techCard={techCard}
              techId={techId}
              setTechList={setTechList}
              techList={techList}
              user={user}
              addCard={addCard}
            />
          </Container>
        )
      })}
    </StyledCardList>
  )
}
