import formidable from "formidable";
import axios from "axios";
import fs from "fs";
const form = formidable({ multiples: false });
import FormData from "form-data";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const { files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
      }
      resolve({ files });
    });
  });

  const imageFile = files.image[0];

  const payload = {
    image: fs.createReadStream(imageFile.filepath),
    output_format: "png",
  };

  try {
    const response = await axios.postForm(
      process.env.STABILITY_API_URL,
      axios.toFormData(payload, new FormData()),
      {
        validateStatus: undefined,
        headers: {
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          Accept: "image/*",
        },
        responseType: "arraybuffer", // Alterado para arraybuffer
      }
    );

    if (response.status === 200) {
      // Converter para base64
      const base64Image = Buffer.from(response.data, "binary").toString("base64");
      return res.status(200).json({ image: `data:image/png;base64,${base64Image}` });
    } else {
      return res
        .status(response.status)
        .json({ error: `Erro ao remover o fundo. ${response.data.errors[0]}` });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Erro ao comunicar com a API. ${error.message}` });
  }
}
