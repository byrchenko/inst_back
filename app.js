const express = require('express');
const generatePosts = require("./_service/posts");
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');

const POSTS = generatePosts();

app.use(bodyParser.json())
app.use(cors());

app.get("/users", (req, res) => {
    const {query: {list}} = req;
    console.log(list)
})

app.get("/posts", (req, res) => {
    const {
        query: {
            offset,
            limit
        }
    } = req;

    res.send([...POSTS].splice(offset, limit))
})

app.post("/posts/addLike/", (req, res) => {
    const {body: {user, post}} = req;
    POSTS.forEach(item => {
        if (item.id === post) {
            item.likes.push(user)
            console.log(POSTS)
        }
    })
    res.status(200);
    res.send("success")
});

app.post("/posts/removeLike/", (req, res) => {
    const {body: {user, post}} = req;
    POSTS.forEach(item => {
        if (item.id === post) {
            item.likes = item.likes.filter(item => item !== user)
            console.log(POSTS)
        }
    })
    res.status(200);
    res.send("success")
})

module.exports = app;
