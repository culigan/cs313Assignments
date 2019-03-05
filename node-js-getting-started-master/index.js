const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index'));
app.get('/cost', function (req, res) {
    res.render('pages/viewcost', calculateCost(req.query.radio, req.query.weight));
});

        function calculateCost(type, weight) {
        
        switch (type) {
            case "stamped":
                break;
            case "metered":
                break;
            case "flats":
                break;
            case "retail":
                break;
            default:
                break;
        }
        res.render('pages/viewcost');
    }
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

