import express from "express";
import cors from "cors";
// Importing directly from the local workspace!
import { COMPANY_NAME, User } from "@repo/shared";

const app = express();
const port = 3001; // We use 3001 because the frontend usually takes 3000 or 5173

app.use(cors());

app.get("/", (req, res) => {
  // We can type-check this object using the interface from 'shared'
  const adminUser: User = {
    id: "u_123",
    username: "sachintha",
    email: "admin@ict.sachintha.lk",
  };

  res.json({
    message: `Welcome to the ${COMPANY_NAME} API`,
    data: adminUser,
  });
});

app.listen(port, () => {
  console.log(`SERVER: Listening on http://localhost:${port}`);
});
