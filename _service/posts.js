function generatePosts() {
    const posts = [];

    for (let i = 0; i < 10; i++) {
        posts.push({
            id: i,
            author: {
                id: 111,
                name: "se7en.eight",
                image: "https://images.unsplash.com/photo-1555445091-5a8b655e8a4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            },
            images: [
                {
                    id: 1,
                    url: "https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
                    title: "Test image"
                },
                {
                    id: 2,
                    url: "https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
                    title: "Test image"
                }
            ],
            description: "Чекнул что там в Пионерах по еффектам #shirkach #otorva #beatmaking #dj #glow #music #pioneer",
            likes: i % 2 !== 0 ? [111] : [],
            likesCount: i,
            saved: i % 2 === 0,
            comments: [
                {
                    id: 1,
                    author: {
                        id: 1,
                        name: "se7en.eight"
                    },
                    text: "here my comment"
                },
                {
                    id: 2,
                    author: {
                        id: 1,
                        name: "se7en.eight"
                    },
                    text: "here my comment 2"
                }
            ]
        })
    }

    return posts
}

module.exports = generatePosts;