const  express = require('express');
const app = express();
const PORT = 3002;

const contact =[
    {
        id: 1,
        Prénom: "Jean",
        Nom: "Dupont",
        email: "",
        num:"0600000000"
    },
    {
        id: 2,
        Prénom: "Marie",
        Nom: "Curie",
        email: "marie.cuirie@exemple.com",
        num:"0600000000"
    }  ,
    {
        id: 3,
        Prénom: "Albert",
        Nom: "Einstein",
        email: "albert.einstein@exemple.com",
        num:"0600054000"
    }
]
app.get('/contacts', (req, res) => {
    res.json(contact);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});