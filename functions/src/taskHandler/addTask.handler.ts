import * as logger from "firebase-functions/logger";
import { db } from "../index";
import { httpCodes } from "../utils/httpCodes";
import { Request } from "firebase-functions/v2/https";
import { Response } from "firebase-functions/v1";

export const addTaskHandler = async (req: Request, res: Response) => {
  try {
    // Init Handler
    logger.info("addTaskHandler Executed!");
    const body: ITask = req.body;

    // VALIDATIONS
    if (!body) {
      res.status(httpCodes.BAD_REQUEST).json({ error: "no body content" });
    }
    if (typeof body.description !== "string") {
      res
        .status(httpCodes.BAD_REQUEST)
        .json({ error: "error description type" });
    }
    if (typeof body.status !== "boolean") {
      res.status(httpCodes.BAD_REQUEST).json({ error: "error status type" });
    }
    if (typeof body.title !== "string") {
      res.status(httpCodes.BAD_REQUEST).json({ error: "error title type" });
    }

    // Create Document and persist ID
    const taskRef = await db.collection("tasks").add(req.body);

    // This is not necessary but it's helpful for testing!
    await taskRef.update({
      id: taskRef.id,
    });

    // API RESPONSE
    res.status(httpCodes.SUCCESS).json({ message: "OK" });
  } catch (error) {
    logger.error("addTaskHandler Error!", error);
    res
      .status(httpCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error" });
  }
};
