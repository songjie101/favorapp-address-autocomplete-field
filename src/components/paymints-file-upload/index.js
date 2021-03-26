import React from 'react'
import { useDropzone } from 'react-dropzone'

export default function FavorAppsFileUpload({ onDropFiles, textInfo }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: onDropFiles })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>{textInfo ? textInfo : 'Drop the files here ...'}</p>
      ) : (
          <p>{textInfo ? textInfo : 'Drag and drop some files here, or click to select files'}</p>
        )}
    </div>
  )
}
