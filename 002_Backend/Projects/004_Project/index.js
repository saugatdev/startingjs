import express from "express";
import users from "./MOCK_DATA.json" assert { type: "json" };

const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id===id);
  if (user) {
        return res.json(user);
    } else {
        return res.status(404).json({ error: "User not found" });
    }});

app.post('api/users',(req,res)=>{
    return res.json({status:"pending"})
})



// app.get("/users", (req, res) => {
//   const html = `
//     <ul>
//     ${users.map((users) => `<li>${users.first_name}</li>`).join("")}
//     </ul> `;
//     res.send(html)
// });

app.listen(port, () => {
  console.log(`port started at ${port}`);
});
