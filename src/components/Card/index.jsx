import { api } from "../../services/api"
import { toast } from "react-toastify"
import { FaTrashAlt } from "react-icons/fa"
import { Button } from "../Button"
import { StyledCard } from "./style"

export const Card = ({ tech, id, addCard }) => {
  const token = localStorage.getItem("@Kenziehub:token")

  const deleteTech = () => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then(() => {
        toast.success("Tecnologia apagada com sucesso")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <StyledCard onClick={addCard}>
        <div>
          <h2>{tech.title}</h2>
          <span>{tech.status}</span>
        </div>
        <Button pinkSchema='false' onClick={deleteTech}>
          <FaTrashAlt size={15} />
        </Button>
      </StyledCard>
    </>
  )
}
