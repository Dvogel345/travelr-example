const router = require("./destinations");

router.post("/", (req,res) => {
    flightsModel.insertOne(req.body)
    .then(result => res.render("successPage"))
    .catch(err =>{
        res.render(400).send({"errormessage": err})
    })
})