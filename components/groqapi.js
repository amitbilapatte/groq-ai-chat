import axios from "axios";

async function handleGroqApi({ inputValue }) {
  const response = await axios.post(`/api/groqapi`, { inputValue });
  const listingResponse = response.data.message;
  console.log("listingResponse in components folder :" + listingResponse);
  return listingResponse;
}

export const ApiServices = {
  handleGroqApi,
};

//=====================================================================================


//==========================================================================
// using Groq from "groq-sdk" . it is not safe as it required permission of "dangerouslyAllowBrowser: true"

// import Groq from "groq-sdk";
// const groq = new Groq({
//   apiKey: "SECRET_KEY",
//   dangerouslyAllowBrowser: true,
// });
// async function handleGroqApi({ inputValue }) {
//   const chatCompletion = await groq.chat.completions.create({
//     messages: [
//       {
//         role: "user",
//         content: inputValue,
//       },
//     ],
//     model: "llama3-8b-8192",
//   });
//   return chatCompletion.choices[0]?.message?.content || "";
// }

//==========================================================================
// safe approach

// async function handleGroqApi({ inputValue }) {
//   try {
//     const apiUrl = `https://api.groq.com/openai/v1/chat/completions`;
//     const requestBody = {
//       messages: [
//         {
//           role: "user",
//           content: inputValue,
//         },
//       ],
//       model: "llama3-8b-8192",
//     };
//     const response = await axios.post(apiUrl, requestBody, {
//       headers: {
//         Authorization: `Bearer ${SECRET_KEY}`,
//         "Content-Type": "application/json",
//       },
//     });
//     const listingResponse = response?.data?.choices[0]?.message?.content;
//     return listingResponse;
//     await res.status(200).json({ message: listingResponse });
//   } catch (err) {
//     response.status(500).send({ error: "failed to fetch data" });
//   }
// }