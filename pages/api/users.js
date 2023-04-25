import { genUUID } from "../../util/cryptoUtils"

const users = [
  { id: genUUID(), name: "Lucas Pereira de Oliveira" },
  { id: genUUID(), name: "Mylena Glaucia Marques de Albuquerque" },
  { id: genUUID(), name: "Monique Geovana" },
  { id: genUUID(), name: "Marcela Glauci" },
]

export default function handler(req, res) {

  if (req.method === 'POST') {
    let body = JSON.parse(req.body)
    body.id = genUUID()
    console.log(body)
    users.push(body)
    return res.status(201).json({ message: "Created!"})
  } 

  res.status(200).json(users)
}
