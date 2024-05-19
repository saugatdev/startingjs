const { nanoid } = require('nanoid')
async function handleGenereateNewShortURL(req, res) {

    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "url required" })
    const shortID = nanoid(8);

    await URL.create({
        shortID: shortID,
        redirectURL:body.url,
        visitHistory:[

        ],
 });

 return  res.json({
    id:shortID
 })
}

module.exports ={
    handleGenereateNewShortURL,
}