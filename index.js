const express = require('express');
const routes = require('./routes/index');
const path = require('path')

const app = express()

routes(app);

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/src')));

const port = 3000;

app.listen(port, () => {
    console.log(`rodando:
    http://localhost:3000/`)
    app.use(function(req, res, next) {
        res.status(404)

        if(req.accepts('html')) {
            var error = [{
                title: "404 not found",
                message: "Page not found"
            }]
            res.render('/src/views/error', {data:error});
        }
    })
})

module.exports = app