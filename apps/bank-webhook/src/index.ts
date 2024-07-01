import express from "express";
import db from "@repo/db/client";
const app = express();

app.use(express.json());

app.post("/hdfcWebhook", async (req, res) => {
    
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };

    if (!paymentInformation.token || typeof paymentInformation.token !== "string" || paymentInformation.token.trim() === "") {
        return res.status(400).json({
            message: "Invalid token"
        });
    }

    try {
        // Check if the token exists in the database
        const tokenExists = await db.onRampTransaction.findUnique({
            where: {
                token: paymentInformation.token
            }
        });

        if (!tokenExists) {
            return res.status(404).json({
                message: "Token not found"
            });
        }

        // Perform the transactions
        await db.$transaction([
            db.balance.updateMany({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                data: {
                    amount: {
                        increment: Number(paymentInformation.amount)
                    }
                }
            }),
            db.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                }, 
                data: {
                    status: "Success",
                }
            })
        ]);

        res.json({
            message: "Captured"
        });
    } catch(e) {
        console.error(e);
        res.status(500).json({
            message: "Error while processing webhook"
        });
    }
});

app.listen(3003, () => {
    console.log("Server is running on port 3003");
});
