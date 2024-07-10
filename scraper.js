import https from "https";

export default function scrapWebsite(req, res) {
  const url = req.query.url;
  if (!url) {
    return res.status(400).json({ error: "Required URL." });
  }

  https
    .get(url, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        return res.status(200).json({ data: data });
      });
    })
    .on("error", (err) => {
      return res.status(500).json({ error: err.message });
    });
}
