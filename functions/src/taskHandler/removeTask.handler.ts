import * as logger from "firebase-functions/logger";
import { db } from "../index";
import { httpCodes } from "../utils/httpCodes";
import { Request } from "firebase-functions/v2/https";
import { Response } from "firebase-functions/v1";

export const removeTaskHandler = async (req: Request, res: Response) => {
  try {
    // Init Handler
    logger.info("removeTaskHandler Executed!");

    const body = req.body;
    // Validation body content
    if (!body) {
      res.status(httpCodes.BAD_REQUEST).json({ error: "no body content" });
    }
    // Validation id
    if (typeof body.id !== "string") {
      res.status(httpCodes.BAD_REQUEST).json({ error: "error id type" });
    }
    // Document Reference
    const taskRef = db.collection("tasks").doc(body.id);
    // Delete Document
    await taskRef.delete();

    // API Response
    res.status(httpCodes.SUCCESS).json({ message: "Task Remove Successfully" });
  } catch (error) {
    logger.error("addTaskHandler Error!", error);
    res
      .status(httpCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error" });
  }
};
