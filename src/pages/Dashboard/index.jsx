import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Redirect } from "react-router-dom"
import { FaPlus } from "react-icons/fa"
import { api } from "../../services/api"
import { ModalAddTech } from "../../components/ModalAddTech"
import { CardList } from "../../components/CardList"
import { Header, Container, InfoUser, HeaderList } from "./style"
import { Button } from "../../components/Button"

export const Dashboard = ({ authenticated, setAuthenticated }) => {
  const [user, setUser] = useState([])
  const [techList, setTechList] = useState([])
  const [modal, setModal] = useState(false)
  const [techCard, setTechCard] = useState(false)
  const [techId, setTechId] = useState("")
  const [update, setUpdate] = useState(false)

  const userId = JSON.parse(localStorage.getItem("@Kenziehub:id"))
  const history = useHistory()

  useEffect(() => {
    api
      .get(`/users/${userId}`)
      .then((res) => {
        setUser(res.data)
        setTechList(res.data.techs)
      })
      .catch((err) => console.log(err))
  }, [userId])

  useEffect(() => {
    api
      .get(`/users/${userId}`)
      .then((res) => {
        setTechList(res.data.techs)
        setUpdate(!update)
      })
      .catch((err) => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update])

  const showModalAddTech = () => {
    setModal(!modal)
  }

  const addCard = () => {
    setTechCard(true)
  }

  if (!authenticated) {
    return <Redirect to='/login' />
  }

  const logout = () => {
    localStorage.clear()
    setAuthenticated(false)
    return history.push("/")
  }

  return (
    <Container>
      <Header>
        <h1>Kenzie Hub</h1>
        <Button onClick={logout} pinkSchema='false'>
          Sair
        </Button>
      </Header>
      <InfoUser>
        <h2>Olá, {user.name}</h2>
        <p>{user.course_module}</p>
      </InfoUser>
      <HeaderList>
        <h3>Tecnologias</h3>
        <Button onClick={showModalAddTech} pinkSchema='false'>
          <FaPlus size={20} />
        </Button>
      </HeaderList>
      <CardList
        techList={techList}
        addCard={addCard}
        techCard={techCard}
        setTechId={setTechId}
        techId={techId}
        setTechList={setTechList}
        user={user}
      />
      {modal && (
        <ModalAddTech
          showModalAddTech={showModalAddTech}
          techList={techList}
          setTechList={setTechList}
        />
      )}
    </Container>
  )
}
