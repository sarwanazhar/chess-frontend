'use client'

import { UploadDropzone } from "@/lib/uploadthing";
import { FileIcon, X } from "lucide-react";
import Image from "next/image";


interface FileUploadProps {
    onChange: (url?:string) => void;
    value: string;
    endpoint: 'profileImage';
}

const Fileupload = ({
    onChange,
    value, 
    endpoint
}: FileUploadProps) => {
    const fileType = value?.split(".").pop();

    if (value && fileType !== 'pdf') {
        return (
            <>
             <div className="relative h-20 w-20">
                <Image fill src={value} alt="upload" className="rounded-full" />
                <button className="bg-rose-500 text-white rounded-full absolute top-0 right-0 p-1 shadow-sm" type="button" onClick={() => onChange('')}>
                    <X className="h-4 w-4"/>
                </button>
             </div>
            </>
        )
    }

    return ( 
        <UploadDropzone 
          endpoint={endpoint}
          onClientUploadComplete={(res: any) => {
            onChange(res?.[0].url)
          }} 
          onUploadError={(error:Error) => {
            console.log(error)
          }}
        />
     );
}
 
export default Fileupload;