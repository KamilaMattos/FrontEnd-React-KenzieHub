import { api } from "../../services/api"
import { toast } from "react-toastify"
import { FaTrashAlt } from "react-icons/fa"
import { Button } from "../Button"
import { StyledCard } from "./style"

export const Card = ({ tech, techId, addCard }) => {
  const token = localStorage.getItem("@Kenziehub:token")

  const deleteTech = () => {
    api
      .delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
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
