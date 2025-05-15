"use client"

import { useEffect } from "react"

interface WistiaVideoProps {
  mediaId: string
  aspect?: string
}

export default function WistiaVideo({ mediaId, aspect = "1.951219512195122" }: WistiaVideoProps) {
  useEffect(() => {
    // Load Wistia scripts
    const playerScript = document.createElement("script")
    playerScript.src = "https://fast.wistia.com/player.js"
    playerScript.async = true
    document.head.appendChild(playerScript)

    const embedScript = document.createElement("script")
    embedScript.src = `https://fast.wistia.com/embed/${mediaId}.js`
    embedScript.async = true
    embedScript.type = "module"
    document.head.appendChild(embedScript)

    // Add style for placeholder
    const style = document.createElement("style")
    style.innerHTML = `
      wistia-player[media-id='${mediaId}']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:51.25%; 
      }
    `
    document.head.appendChild(style)

    return () => {
      // Clean up scripts when component unmounts
      document.head.removeChild(playerScript)
      document.head.removeChild(embedScript)
      document.head.removeChild(style)
    }
  }, [mediaId])

  return <wistia-player media-id={mediaId} aspect={aspect}></wistia-player>
}
