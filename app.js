const express = require('express');
const app = express();
const port = 3000;

app.get('/match/:user_id', (req, res) => {
  const userId = Number(req.params.user_id);
  const meetHobbies = ["Music", "Chess", "Drawing"];
  const otherUsers = [
    {
      id: 2,
      name: "Pari Singh",
      hobbies: ["Music", "Cooking", "Reading"]
    },
    {
      id: 3,
      name: "Naina Patel",
      hobbies: ["Music", "Chess", "Dance"]
    },
    {
      id: 4,
      name: "Amy Bhatt",
      hobbies: ["Cooking"]
    }
  ];

  const potentialMatches = otherUsers
    .filter(user => user.id !== userId && user.id !== 4) // Exclude current user and user with ID 4
    .map(user => ({
      id: user.id,
      name: user.name,
      hobbies: user.hobbies
    }));

  res.json(potentialMatches);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
