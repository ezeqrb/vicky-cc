import * as logger from "firebase-functions/logger";
import { db } from "../index";
import { httpCodes } from "../utils/httpCodes";
import { Request } from "firebase-functions/v2/https";
import { Response } from "firebase-functions/v1";

export const completeTaskHandler = async (req: Request, res: Response) => {
  try {
    // Init Handler
    logger.info("completeTask Executed!");
    const body = req.body;

    if (!body) {
      res.status(httpCodes.BAD_REQUEST).json({ error: "no body content" });
    }

    // Document Reference
    const taskRef = db.collection("tasks").doc(body.id);
    // Obtain Document
    const doc = await taskRef.get();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let task: ITask | any;
    // Validation document Exist
    if (!doc.exists) {
      res
        .status(httpCodes.BAD_REQUEST)
        .json({ message: "the task does not exist" });
    } else {
      task = doc.data();
    }
    // Validation docuemnt status
    if (task.status == true) {
      res
        .status(httpCodes.BAD_REQUEST)
        .json({ message: "task its already complete" });
    } else {
      // Update Task Status
      await taskRef.update({
        status: true,
      });
    }
    // API Success Response
    res.status(httpCodes.SUCCESS).json({ message: "task Updated" });
  } catch (error) {
    logger.error("addTaskHandler Error!", error);
    res
      .status(httpCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error" });
  }
};
