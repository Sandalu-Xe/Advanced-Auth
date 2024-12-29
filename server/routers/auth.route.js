import express  from 'express';

const router = express.Router();

router.get("/signup", (req, res) => {

    res.render("signup route");
});

router.get("/login", (req, res) => {

    res.render("login route");
});

router.get("/logout", (req, res) => { 

    res.render("logout route");
});

export default router;