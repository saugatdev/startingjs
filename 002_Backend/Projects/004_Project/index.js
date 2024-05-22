import express from "express";
import users from "./MOCK_DATA.json" assert { type: "json" };
import fs from "fs/promises";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/users", (req, res) => {
  const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
  res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  if (user) {
    return res.json(user);
  } else {
    return res.status(404).json({ error: "User not found" });
  }
});

app.post("/api/users", async (req, res) => {
  const newUser = req.body;
  users.push({ ...newUser, id: users.length + 1 });
  try {
    await fs.writeFile("./MOCK_DATA.json", JSON.stringify(users));
    console.log(newUser);
    return res.status(201).json({ status: "success", user: newUser });
  } catch (error) {
    console.error("Error writing to file", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
