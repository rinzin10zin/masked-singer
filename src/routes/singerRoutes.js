import express from "express";
const router = express.Router();
import {
  getAllSingers,
  getSingerByName,
  getSingerById,
  addSinger,
  updateSinger,
  deleteSinger,
} from "../controllers/singerController.js";

router.get("/", getAllSingers);
router.get(`/`, getSingerByName);
router.get("/:id", getSingerById);
router.post(`/`, addSinger);
router.put(`/:id`, updateSinger);
router.delete(`/:id`, deleteSinger);

export default router;
