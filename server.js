import express from 'express';

const posts = [
    {
        id: 1,
        descricao: 'Uma foto teste',
        imagem: 'https://placecats.com/millie/300/150',
    },
    {
        id: 2,
        descricao: 'Gato brincando na grama',
        imagem: 'https://placecats.com/millie/300/150',
    },
    {
        id: 3,
        descricao: 'Gato olhando pela janela',
        imagem: 'https://placecats.com/millie/300/150',
    },
    {
        id: 4,
        descricao: 'Gatinho dormindo no sofá',
        imagem: 'https://placecats.com/millie/300/150',
    },
    {
        id: 5,
        descricao: 'Gato de olhos azuis',
        imagem: 'https://placecats.com/millie/300/150',
    },
    {
        id: 6,
        descricao: 'Gato preto e branco fofo',
        imagem: 'https://placecats.com/millie/300/150',
    }
];


const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor escutando...');
});

app.get('/posts', (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorId(id){
    return posts.findIndex((posts) => {
        return posts.id === Number(id)
    })
}

app.get('/posts/:id', (req, res) => {
    const index = buscarPostPorId(req.params.id)
    res.status(200).json(posts[index]);
});
