'use client'
import { useRef, useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/outline';

function ImageUpload() {
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const file = e.dataTransfer.files[0];
        setSelectedImage(file);
    };

    const handleFileChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className={`relative flex items-center justify-center min-w-2xl h-4/5 rounded-lg cursor-pointer 
            ${!selectedImage ? 'p-8 border-dashed border-2 border-slate-600 bg-slate-100' : ''} `}
            onClick={handleButtonClick}
            onDragOver={handleDragOver}
            onDrop={handleDrop}>
            <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
            {selectedImage ? (
                <img src={URL.createObjectURL(selectedImage)} alt="Imagem selecionada" className="w-full h-full object-contain" />
            ) : (
                <div className="flex flex-col items-center justify-center space-y-6">
                    <PhotoIcon className='w-8 h-8 text-slate-600' />
                    <p className="text-slate-600 text-sm">Carregue uma foto do seu produto</p>
                </div>
            )}
        </div>
    );
}

export default ImageUpload;