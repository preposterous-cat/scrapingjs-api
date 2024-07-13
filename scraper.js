import https from "https";

export default function scrapWebsite(req, res) {
  const url = req.query.url;
  if (!url) {
    return res.status(400).json({ error: "Required URL." });
  }
  const tag = req.query.tag ?? "div";
  const className = req.query.class ?? "";
  const id = req.query.id ?? "";

  https
    .get(url, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        return res
          .status(200)
          .json({ data: processData(data, tag, className, id) });
      });
    })
    .on("error", (err) => {
      return res.status(500).json({ error: err.message });
    });
}

function processData(rawData, tag, className, id) {
  // Buat regex dinamis berdasarkan input pengguna
  let regexString = `<${tag}\\b`;
  if (className) {
    regexString += `[^>]*?class=["'].*?\\b${className}\\b.*?["']`;
  }
  if (id) {
    regexString += `[^>]*?id=["']${id}["']`;
  }
  regexString += `[^>]*>(.*?)</${tag}>`;

  const regex = new RegExp(regexString, "gs");
  let data = [];
  let match;

  // Ekstrak dan simpan isi dari setiap elemen yang ditangkap oleh regex
  while ((match = regex.exec(rawData)) !== null) {
    const cleanText = removeHtmlTags(
      match[1].replace(/\n/g, " ").replace(/\s+/g, " ").trim()
    );
    data.push(cleanText);
  }

  return data;
}

// Fungsi untuk menghapus tag HTML
function removeHtmlTags(str) {
  return str.replace(/<[^>]*>/g, "");
}
