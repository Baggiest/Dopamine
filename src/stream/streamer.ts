// outputs media and streams it to twitch RTMP ingest

import nms from "node-media-server"
import cp from "child_process"
import "dotenv/config"

let dick = () => {
    cp.spawn("ffmpeg", [
        '-i',
        '../baked-video/0done.mp4',
        '-vf',
        'scale=1280:960',
        '-vcodec',
        'libx264',
        '-profile:v',
        'baseline',
        '-pix_fmt',
        'yuv420p',
        '-f',
        'flv',
        'rtmp://muc01.contribute.live-video.net/app/'
    ])
}

dick()