import { useEffect, useState } from "react";

interface IProps {
  setImage: (file: File) => void;
}

export default function (props: IProps) {
  const [file, setFile] = useState<File>();
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    props.setImage(file);
  }, [file]);

  return (
    <div className="p-4 rounded-xl bg-card w-full max-w-sm">
      <input
        type="file"
        onChange={(e) => {
          const selectedFile = e.target.files[0];
          if (selectedFile) {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
          }
        }}
        className="hidden"
        id="fileInput"
      />
      <label
        htmlFor="fileInput"
        className="block text-center py-2 border border-dashed border-primary/50 rounded-lg cursor-pointer hover:bg-background text-foreground/60 text-xs"
      >
        {file && <p>Click to change</p>}
        {file ? file.name : "Choose an image"}
      </label>
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="mt-2 mx-auto w-1/2 aspect-square object-contain rounded-lg"
        />
      )}
    </div>
  );
}
