import express from 'express';

const app = express();

app.get('/api/jokes', (req, res) => {

const jokes=[
    {
        "jokes": [
          {
            "id": 1,
            "question": "Why don't scientists trust atoms?",
            "answer": "Because they make up everything!"
          },
          {
            "id": 2,
            "question": "What did one ocean say to the other ocean?",
            "answer": "Nothing, they just waved."
          },
          {
            "id": 3,
            "question": "Why did the scarecrow win an award?",
            "answer": "Because he was outstanding in his field."
          }
        ]
      }
      
]
    
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
