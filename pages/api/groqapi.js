import axios from "axios";
const SECRET_KEY = process.env.API_KEY;

export default async function handler(req, res) {
  console.log("in real  api");
  console.log(req);
  try {
    const apiUrl = `https://api.groq.com/openai/v1/chat/completions`;
    const requestBody = {
      messages: [
        {
          role: "user",
          content: req.body.inputValue,
        },
      ],
      model: "llama3-8b-8192",
    };
    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        Authorization: `Bearer ${SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    });
    console.log("response in api folder :" + response);
    const listingResponse = response?.data?.choices[0]?.message?.content;
    console.log("listingResponse in api folder :" + listingResponse);
    await res.status(200).json({ message: listingResponse });
  } catch (err) {
    response.status(500).send({ error: "failed to fetch data" });
  }
}