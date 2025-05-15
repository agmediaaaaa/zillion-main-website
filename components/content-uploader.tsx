"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Upload, ImageIcon, FileText, Video } from "lucide-react"

export default function ContentUploader() {
  const [activeTab, setActiveTab] = useState("text")

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full shadow-lg"
        onClick={() => document.getElementById("content-uploader-modal")?.classList.toggle("hidden")}
      >
        <Upload className="h-5 w-5" />
      </Button>

      <div
        id="content-uploader-modal"
        className="hidden absolute bottom-16 left-0 w-80 bg-background border rounded-lg shadow-lg p-4"
      >
        <h3 className="font-medium mb-3">Upload Your Content</h3>

        <div className="flex border-b mb-4">
          <button
            className={`px-3 py-2 ${activeTab === "text" ? "border-b-2 border-primary" : ""}`}
            onClick={() => setActiveTab("text")}
          >
            <FileText className="h-4 w-4 mx-auto" />
            <span className="text-xs">Text</span>
          </button>
          <button
            className={`px-3 py-2 ${activeTab === "images" ? "border-b-2 border-primary" : ""}`}
            onClick={() => setActiveTab("images")}
          >
            <Image className="h-4 w-4 mx-auto" />
            <span className="text-xs">Images</span>
          </button>
          <button
            className={`px-3 py-2 ${activeTab === "videos" ? "border-b-2 border-primary" : ""}`}
            onClick={() => setActiveTab("videos")}
          >
            <Video className="h-4 w-4 mx-auto" />
            <span className="text-xs">Videos</span>
          </button>
        </div>

        {activeTab === "text" && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Section Title</label>
              <Input type="text" placeholder="Enter section title" />
            </div>
            <div>
              <label className="block text-sm mb-1">Content</label>
              <Textarea placeholder="Enter your content here" rows={4} />
            </div>
            <Button className="w-full">Save Content</Button>
          </div>
        )}

        {activeTab === "images" && (
          <div className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-4 text-center">
              <ImageIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">Drag and drop your images here</p>
              <Input id="image-upload" type="file" accept="image/*" className="hidden" />
              <Button size="sm" onClick={() => document.getElementById("image-upload")?.click()}>
                Browse Files
              </Button>
            </div>
            <Button className="w-full">Upload Images</Button>
          </div>
        )}

        {activeTab === "videos" && (
          <div className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-4 text-center">
              <Video className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">Drag and drop your video here</p>
              <Input id="video-upload" type="file" accept="video/*" className="hidden" />
              <Button size="sm" onClick={() => document.getElementById("video-upload")?.click()}>
                Browse Files
              </Button>
            </div>
            <div>
              <label className="block text-sm mb-1">Video URL (YouTube, Vimeo)</label>
              <Input type="text" placeholder="https://" />
            </div>
            <Button className="w-full">Add Video</Button>
          </div>
        )}
      </div>
    </div>
  )
}
