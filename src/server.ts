import mongoose from "mongoose";
import app from "./app"
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 3000;
const databaseUrl = process.env.DATABASEURL;


async function main() {
    try {
        await mongoose.connect(databaseUrl as string);
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}

main()