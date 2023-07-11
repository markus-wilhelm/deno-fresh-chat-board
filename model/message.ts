import { db } from "../utils/database.js";
import { ObjectId } from "../utils/deps.js";

export interface Message {
    _id?: ObjectId;
    username: string;
    msg: string;
}

export const Message = db.collection<Message>("messages");