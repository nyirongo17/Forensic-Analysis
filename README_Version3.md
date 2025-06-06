# IoT Camera Backend Starter

## Features

- ONVIF smart camera discovery (LAN)
- Connect to camera and obtain RTSP stream URI
- TypeScript, Express, MongoDB
- Ready for extension to streaming, authentication, and more

## Usage

1. Clone the repo and run `npm install`
2. Set MongoDB URI in `.env`
3. Run in development: `npm run dev`
4. API:
   - `GET /api/cameras/discover` — discover cameras
   - `POST /api/cameras/connect` — connect, requires `{ address, port, username, password }`

## Extend

- Add RTSP/MJPEG streaming via `fluent-ffmpeg` and WebSocket
- Add authentication (JWT/Passport)
- Add camera snapshot/recording features