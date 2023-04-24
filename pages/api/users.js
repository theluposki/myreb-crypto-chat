import { randomUUID } from "node:crypto"

const users = [
  { id: randomUUID(), name: "Lucas Pereira de Oliveira" },
  { id: randomUUID(), name: "Mylena Glaucia Marques de Albuquerque" },
  { id: randomUUID(), name: "Monique Geovana" },
  { id: randomUUID(), name: "Marcela Glauci" },
]

export default function handler(req, res) {

  if (req.method === 'POST') {
    let body = JSON.parse(req.body)
    body.id = randomUUID()
    console.log(body)
    users.push(body)
    return res.status(201).json({ message: "Created!"})
  } 

  res.status(200).json(users)
}
