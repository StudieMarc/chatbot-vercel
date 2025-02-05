export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send({ message: "Method not allowed" });

  const { message } = req.body;
  const apiKey = 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

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: message }],
      max_tokens: 100,
    }),
  });

  const data = await response.json();
  res.status(200).json({ reply: data.choices[0].message.content });
}
