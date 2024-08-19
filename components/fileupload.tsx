'use client';
import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";
import { X } from "lucide-react";
import Image from "next/image";


interface FileuploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "profileImage";
}

export const Fileupload = ({
  onChange,
  value,
  endpoint
}: FileuploadProps) => {
  const fileType = value?.split(".").pop()

  if (value) {
    return (
      <div className="relative h-20 w-20 ml-40 lg:ml-52">
        <Image
            fill
            src={value}
            alt="profileImage"
            className="rounded-full"
         />
         <button className="bg-rose-500 text-white rounded-full p-1 absolute top-0 right-0 shadow-sm" type="button" onClick={() => onChange("")}>
          <X className="h-4 w-4" />
         </button>
      </div>
    )
  }

  return (
    <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
           onChange(res?.[0].url)
        }}
        onUploadError={(error: Error) => {
          console.log(error)
        }}
     />
  )
}