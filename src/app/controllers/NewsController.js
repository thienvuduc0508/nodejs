class NewsController {
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send(' New Page detail');
    }
}
module.exports = new NewsController();
