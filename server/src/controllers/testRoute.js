async function getTestRoute(req, res) {
    return res
    .status(200)
    .send("El ruteo basico anda xD")
}

module.exports = {
    getTestRoute
}