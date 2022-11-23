'use client'

import Hls from 'hls.js'
import { useEffect, useRef } from 'react'

const STREAM_URL = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'

export default function Page () {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      return
    }

    const hls = new Hls()
    hls.attachMedia(video)
    hls.loadSource(STREAM_URL)

    return () => {
      hls.destroy()
    }
  }, [videoRef.current])

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'grid', placeContent: 'center', textAlign: 'center' }}>
      <div>Video</div>

      <video
        ref={videoRef}
        controls={true}
        style={{
          width: '1200px',
          maxWidth: '100%',
          aspectRatio: '16/9'
        }}
      />
    </div>
  )
}
