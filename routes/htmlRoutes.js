const router = require("express").Router();
const path = require("path")

console.log("THE HTML ROUTE HAS BEEN HIT, IT HAS BEEN HIT")

router.use("/sophia/:password", (req,res)=> {
    res.json(req.params.password === "123" ? "WELCOME SOPHIA" : "NEW PHONE WHO DIS?")
})

router.use("/*", (req, res) => {
    res.json("hi")
})
//router.get("*", (req,res)=>{
    //res.sendFile(path.join(__dirname, "../client/build/index.html"))
//})

module.exports = router;