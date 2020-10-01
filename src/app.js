import express from 'express'
const app = express()

const PORT = 7777
const IP_LOCAL = '127.0.0.1'

const timer = (req, res, next) => {
    const date = new Date()
    req.requestDate = date.toUTCString()
    next()
}

app.use(timer)

app.get('/', (req, res) => {
    res.send(`Exercices express partie 2`)
})
app.get('/get_current_time', (req, res) => {
    let time = req.requestDate
    res.send(`Date du jour ${req.requestDate}`)
})
app.get('/how_pass_data', (req, res) => {
    res.send(`<!DOCTYPE html>

    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Exercices express 2</title>
      </head>
    
      <body>
        <p>Nos handlers agissent ainsi comme un middleware (notion que l'on verra plus tard). \nLe principe est d'effectuer des traitements entre l'arrivée de la requête et l'envoi de notre réponse. \nLes route handlers sont exécutés dans l'ordre dans lequel ils sont déclarés, \nils prennent un paramètre supplémentaires qui est next et doivent appeller next() \npour passer à l'handler suivant lorsque le traitement est terminé.
        </p>
      </body>
    </html> 
    `)
})

app.listen(PORT, IP_LOCAL, () => {
    console.log(`Example app listening at http://${IP_LOCAL}:${PORT}`)
})
