"use client";
import * as React from "react";
import ImageUpload from "./image-upload";
import { TemperatureSelector } from "./temperature-selector";
import { ErrorAlert, SuccessAlert } from "@/utility/alerts";
import axios from "axios";

export function Playgrounder() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const ImageRemoveBackground = async () => {
    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await axios({
        url: "/api/image/remove_background",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      });
      if (response.status == 200) {
        SuccessAlert("Fundo removido com sucesso");
      }
    } catch (error) {
      ErrorAlert("Erro ao remover o fundo da imagem");
    }
  };

  return (
    <>
      <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
        <div className=" flex flex-col space-y-4 md:order-2">
          <div className="grid gap-2">
            <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Mode
            </span>
          </div>
          <TemperatureSelector defaultValue={[0.56]} />
        </div>
        <div className="md:order-1">
          <div className="flex h-full flex-col space-y-4 ">
            <div className="border border-slate-300 min-h-[300px] sm:min-h-[90%] rounded-2xl flex justify-center items-center">
              <ImageUpload
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
            </div>
            <div className="flex items-center sm:space-x-2 flex-col sm:flex-row text-sm sm:text-lg space-y-4 sm:space-y-0">
              <button className="px-4 py-2 border border-green-800 bg-green-200 text-green-800 rounded-xl min-w-full sm:min-w-40 font-semibold hover:bg-green-100">
                Gerar Imagem
              </button>
              <button
                className="px-4 py-2 border border-slate-800 bg-slate-200 text-slate-800 rounded-xl min-w-full sm:min-w-40 font-semibold hover:bg-slate-100"
                onClick={ImageRemoveBackground}
              >
                Remover Fundo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
