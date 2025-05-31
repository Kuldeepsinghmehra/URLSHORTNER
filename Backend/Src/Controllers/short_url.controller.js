export const createShortUrl = async (req, res) => {
    try {
        const { url } = req.body;
        const shortUrl = nanoid(7);

        const newUrl = new Url({
            full_url: url,
            short_url: shortUrl
        });

        await newUrl.save();

        res.status(201).send(shortUrl);
    } catch (error) {
        console.error('Error creating short URL:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};