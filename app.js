const express = require('express');
const routes = require('./routes/index');

const app = express()

routes(app);

app.use(express.urlencoded({extended:true}));

const port = 3000;

app.listen(port, () => {
    console.log(`rodando:
    http://localhost:3000/`)
    app.use(express.static('./'));
    app.use(function(req, res, next) {
        res.status(404)

        if(req.accepts('html')) {
            var error = [{
                title: "404 not found",
                message: "Page not found"
            }]
            res.render('./public/src/views/error', {data:error});
        }
    })
})

module.exports = app