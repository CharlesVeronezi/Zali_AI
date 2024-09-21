"use client";
import { useEffect, useRef, useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { ErrorAlert } from "@/utility/alerts";

function ImageUpload({ selectedImage, setSelectedImage }) {
  const fileInputRef = useRef(null);
  const acceptedFileTypes = ["image/jpeg", "image/png", "image/webp"];

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files[0];
    if (acceptedFileTypes.includes(file.type)) {
      setSelectedImage(file);
    } else {
      ErrorAlert(
        "Tipo de imagem inválido. Por favor selecione uma imagem no formato JPEG, PNG, ou WEBP"
      );
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (acceptedFileTypes.includes(file.type)) {
        setSelectedImage(file);
      } else {
        ErrorAlert(
          "Tipo de imagem inválido. Por favor selecione uma imagem no formato JPEG, PNG, ou WEBP"
        );
        e.target.value = "";
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className={`relative flex items-center justify-center md:w-[500px] md:h-[400px] max-w-sm rounded-lg cursor-pointer 
                 ${
                   !selectedImage
                     ? "p-8 border-dashed border-2 border-slate-600 bg-slate-100"
                     : ""
                 } 
              `}
      onClick={handleButtonClick}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
        accept={acceptedFileTypes.join(",")}
      />
      {selectedImage ? (
        <img
          src={URL.createObjectURL(selectedImage)}
          alt="Imagem selecionada"
          className="w-full h-full object-contain"
        />
      ) : (
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <PhotoIcon className="w-8 h-8 text-slate-600" />
          <p className="text-slate-600 text-sm">
            Solte sua imagem aqui ou clique para selecionar uma imagem.
          </p>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
