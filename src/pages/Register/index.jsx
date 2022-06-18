import { useForm } from "react-hook-form"
import { Redirect, useHistory } from "react-router-dom"
import { toast } from "react-toastify"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../../services/api"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Container } from "./style"

export const Register = ({ authenticated }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "Sua senha deve ter o mínimo de 8 dígitos")
      .required("Campo Obrigatório"),
    validationPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas Diferentes!")
      .required("Campo Obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    modulo: yup.string(),
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

  const onSubmitFunction = ({
    name,
    password,
    email,
    bio,
    contact,
    course_module,
  }) => {
    const user = { name, password, email, bio, contact, course_module }
    api
      .post("/users", user)
      .then((_) => {
        toast.success("Conta criada com sucesso!")
        return history.push("/login")
      })
      .catch((err) => toast.error(err.message))
  }

  if (authenticated) {
    return <Redirect to='/dashboard' />
  }

  const goBack = () => {
    history.push("/")
  }

  return (
    <>
      <Container>
        <header>
          <h1>Kenzie Hub</h1>
          <Button onClick={goBack} pinkSchema='false'>
            Voltar
          </Button>
        </header>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Crie sua conta</h2>
          <p>Rápido e grátis, vamos nessa</p>
          <Input
            type='text'
            label={"Nome"}
            placeholder='Digite aqui seu nome'
            register={register}
            name='name'
            error={errors.name?.message}
          />
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
          <Input
            type='password'
            register={register}
            name='validationPassword'
            label={"Confirmar Senha"}
            placeholder='Confirme sua senha'
            error={errors.validationPassword?.message}
          />
          <Input
            type='text'
            label={"Bio"}
            placeholder='Fale sobre você'
            register={register}
            name='bio'
          />
          <Input
            type='text'
            label={"Contato"}
            register={register}
            name='contact'
            placeholder='Opção de contato'
          />
          <div>
            <label>Selecionar Módulo</label>
            <select
              name='course_module'
              required
              {...register("course_module")}
            >
              <option value=''>Módulo Atual</option>
              <option value='Primeiro módulo (Introdução ao Frontend)'>
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value='Segundo módulo (Frontend Avançado)'>
                Segundo módulo (Frontend Avançado)
              </option>
              <option value='Terceiro módulo (Introdução ao Backend)'>
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value=' Quarto módulo (Backend Avançado)'>
                Quarto módulo (Backend Avançado)
              </option>
            </select>
          </div>
          <Button type='submit'>Cadastrar</Button>
        </form>
      </Container>
    </>
  )
}
