# How to stream IP Camera into browser

## Stream IP Camera to VLC player
- For the case of `TP-Link C200` model the URL I used = `rtsp://{username}:{password}@{ip}:554/stream1`
- Input the URL in Network Stream



## Convert stream to HLS
Execute FFMPEG command after installing ffmpeg in local machine. Link - https://phoenixnap.com/kb/ffmpeg-windows

`ffmpeg -i rtsp://{username}:{password}@{ip}:554/stream1 -fflags flush_packets -max_delay 5 -flags -global_header -hls_time 5 -hls_list_size 3 -vcodec copy -y .\videos\ipcam\index.m3u8`

After successful execution, we should see the converted video files (`index.m3u8 *.ts`)




## Cleanup streamed `.ts` files
- Open new terminal tab
- Go inside server folder
- Run `.\node_modules\.bin\nodemon .\cleaner.js`
- This will delete the streamed/served `.ts` files from local directory to save the space

## Serve the auto generated hls (m3u8) file
- Open new terminal tab
- Go inside server folder
- Run  `.\node_modules\.bin\nodemon .\hls-server.js`

## Test hls file in browser
- Visit [`cookpete.com/react-player`](https://cookpete.com/react-player).
- Input the m3u8 url [http://localhost:4000/index.m3u8] and press `Load` 



Packages installed - express, nodemon, mongoose, mongodb, express-async-errors, dotenv, find-remove
ffmpeg

<!-- .\libs\ffmpeg.exe -i rtsp://admin:10iLtxyh@192.168.29.79/live/ch00_1 -fflags flush_packets -max_delay 5 -flags -global_header -hls_time 5 -hls_list_size 3 -vcodec copy -y .\videos\ipcam\index.m3u8 -->


<!-- ffmpeg -i rtsp://admin:10iLtxyh@192.168.29.79/live/ch00_1 -fflags flush_packets -max_delay 5 -flags -global_header -hls_time 5 -hls_list_size 3 -vcodec copy -y .\videos\ipcam\index.m3u8 -->