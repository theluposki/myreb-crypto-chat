

export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "Lucas Pereira de Oliveira" },
    { id: 2, name: "Mylena Glaucia Marques de Albuquerque" },
    { id: 3, name: "Monique Geovana" },
    { id: 4, name: "Marcela Glauci" },
  ])
}
