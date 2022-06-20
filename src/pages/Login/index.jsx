import { useForm } from "react-hook-form"
import { Redirect, useHistory } from "react-router-dom"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Container, Content } from "./style"

export const Login = ({ authenticated, setAuthenticated }) => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo Obrigatório"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    reValidateMode: "onSubmit",
  })

  const history = useHistory()

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        localStorage.setItem("@Kenziehub:token", JSON.stringify(res.data.token))
        localStorage.setItem("@Kenziehub:id", JSON.stringify(res.data.user.id))

        setAuthenticated(true)

        return history.push("/dashboard")
      })
      .catch((_) => toast.error("Email ou senha inválidos!"))
  }

  const goRegister = () => {
    history.push("/register")
  }

  if (authenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Login</h2>
          <Input
            type='text'
            name='email'
            register={register}
            label={"Email"}
            placeholder='Digite aqui seu email'
            error={errors.email?.message}
          />
          <Input
            type='password'
            register={register}
            name='password'
            label={"Senha"}
            placeholder='Digite aqui sua senha'
            error={errors.password?.message}
          />
          <Button type='submit'>Entrar</Button>
          <p>Ainda não possui uma conta?</p>
          <div>
            <Button pinkSchema='false' onClick={goRegister} type='submit'>
              Cadastre-se
            </Button>
          </div>
        </form>
      </Content>
    </Container>
  )
}
