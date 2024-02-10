import * as logger from "firebase-functions/logger";
import { db } from "../index";
import { httpCodes } from "../utils/httpCodes";
import { Request } from "firebase-functions/v2/https";
import { Response } from "firebase-functions/v1";

export const listTasksHandler = async (req: Request, res: Response) => {
  try {
    // Init Handler
    logger.info("listTasksHandler Executed!");

    // Get Collection
    const query = db.collection("tasks");
    const tasks = await query.get();

    // Push data of firebase Response into a JS object
    const data: ITask[] = [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tasks.forEach((doc: any) => {
      data.push(doc.data());
    });

    // API Response
    res.status(httpCodes.SUCCESS).json(data);
  } catch (error) {
    logger.error("addTaskHandler Error!", error);
    res
      .status(httpCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error" });
  }
};
