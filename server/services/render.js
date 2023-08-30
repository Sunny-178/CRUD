const axios = require("axios");

exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get("http://crud1708.cyclic.app/api/users")
    .then(function(response) {
        res.render("index", {users: response.data});
    })
    .catch(err => {
        res.send(err);
    })
}

exports.add_user = (req, res) => {
    res.render("add_user");
}

exports.update_user = (req, res) => {
    axios.get("http://crud1708.cyclic.app/users",{params: {id: req.query.id}})
    .then(function(userdata) {
        res.render("update_user", {user: userdata.data})
    })
    .catch(err => {
        console.log(err);
    });
}
