import { Request, Response } from "express";
import { Cam } from "onvif";

// Basic ONVIF discovery (LAN cameras)
export const discoverCameras = async (_req: Request, res: Response) => {
  Cam.discover((cams: any[]) => {
    const result = cams.map((cam) => ({
      name: cam.name,
      address: cam.address,
      port: cam.port,
      hardware: cam.hardware,
      manufacturer: cam.info?.manufacturer,
      model: cam.info?.model,
    }));
    res.json(result);
  });
};

// Connect and get stream URI (RTSP)
export const connectCamera = async (req: Request, res: Response) => {
  const { address, port, username, password } = req.body;
  try {
    new Cam(
      {
        hostname: address,
        port,
        username,
        password,
      },
      function (err) {
        if (err) return res.status(400).json({ error: err.message });
        this.getStreamUri({ protocol: "RTSP" }, (err: any, stream: any) => {
          if (err) return res.status(400).json({ error: err.message });
          res.json({ streamUrl: stream.uri });
        });
      }
    );
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Unknown error" });
  }
};