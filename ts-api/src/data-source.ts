import "reflect-metadata"
import { DataSource } from "typeorm"
import { Artist } from "./models/artist"
import { Song } from "./models/song"

const AppDataSource = new DataSource({
    type:"postgres",
    host:process.env.DB_HOST||"localhost",
    port:parseInt(process.env.DB_PORT||"5432"),
    username:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
    synchronize:true,
    logging:false,
    entities:[Artist,Song]
})

const initDB = async() => {
  try {
    console.log("connecting to db>>>");
    await AppDataSource.initialize()
    console.log("DB Connected");
    return AppDataSource
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}

export {AppDataSource,initDB}