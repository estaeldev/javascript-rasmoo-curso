import express, { json } from "express";
import { healthRoutes } from "./route/HealthRoute";
import { investmentRoute } from "./route/InvestmentRoute";

const app = express();

app.use(json());
app.use(healthRoutes);
app.use(investmentRoute);

app.listen(3000, () => {
    console.log("Server is running!");
});



