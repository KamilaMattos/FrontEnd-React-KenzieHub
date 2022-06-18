import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { api } from "../../services/api"
import { ModalForm, ModalHeader, RegisterTech, ModalContainer } from "./style"
import { Button } from "../Button"
import { Input } from "../../components/Input"

const token = localStorage.getItem("@Kenziehub:token")

export const ModalAddTech = ({ showModalAddTech, techList, setTechList }) => {
  const { register, handleSubmit } = useForm()

  const onSubmitFunction = (data) => {
    api
      .post(
        "/users/techs",
        {
          title: data.title,
          status: data.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setTechList([...techList, res.data])
        showModalAddTech()
        toast.success("Tecnologia criada com sucesso!")
      })
      .catch((_) => toast.error("Ops! Algo deu errado"))
  }

  return (
    <RegisterTech>
      <ModalContainer>
        <ModalHeader>
          <h2>Cadastrar Tecnologia</h2>
        </ModalHeader>
        <ModalForm onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            type='text'
            name='title'
            register={register}
            label={"Nome"}
            placeholder='Digite uma tecnologia'
            required
          />
          <label>Selecionar status</label>
          <select name='status' required {...register("status")}>
            <option value='Iniciante'>Iniciante</option>
            <option value='Intermediário'>Intermediário</option>
            <option value='Avançado'>Avançado</option>
          </select>
          <Button type='submit'>Cadastrar Tecnologia</Button>
        </ModalForm>
      </ModalContainer>
    </RegisterTech>
  )
}
