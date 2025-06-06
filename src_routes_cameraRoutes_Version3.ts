import { Router } from "express";
import { discoverCameras, connectCamera } from "../controllers/cameraController";

const router = Router();

// GET /api/cameras/discover
router.get("/discover", discoverCameras);

// POST /api/cameras/connect
router.post("/connect", connectCamera);

export default router;