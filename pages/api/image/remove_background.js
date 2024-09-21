import formidable from "formidable";
import axios from "axios";
const form = formidable({ multiples: false });

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

  const formData = new FormData();
  formData.append("image", imageFile.filepath);

  try {
    const response = await axios.post(
      `https://api.stability.ai/v2beta/stable-image/edit/remove-background`,
      formData,
      {
        headers: {
          ...formData.getHeaders(), // Inclui os cabeçalhos corretos do FormData
          Authorization: `Bearer sk-MYAPIKEY`,
          Accept: "image/*",
        },
        responseType: "arraybuffer", // Espera um buffer como resposta
      }
    );

    // Resposta da API da Stability.ai
    if (response.status === 200) {
      res.setHeader("Content-Type", "image/png");
      res.send(response.data);
    } else {
      res.status(response.status).json({ error: "Erro ao remover o fundo." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao comunicar com a API." });
  }
}
