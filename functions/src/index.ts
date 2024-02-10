import { onRequest } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { addTaskHandler } from "./taskHandler/addTask.handler";
import { listTasksHandler } from "./taskHandler/listTasks.handler";
import { completeTaskHandler } from "./taskHandler/completeTask.handler";
import { removeTaskHandler } from "./taskHandler/removeTask.handler";

// Initialize Firebase
initializeApp();

// SDK FireStore
export const db = getFirestore();

// API EndPoints
exports.addTask = onRequest((req, res) => {
  addTaskHandler(req, res);
});

exports.listTasks = onRequest((req, res) => {
  listTasksHandler(req, res);
});

exports.completeTask = onRequest((req, res) => {
  completeTaskHandler(req, res);
});

exports.removeTask = onRequest((req, res) => {
  removeTaskHandler(req, res);
});
