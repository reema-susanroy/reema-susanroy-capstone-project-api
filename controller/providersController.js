const knex = require("knex")(require("../knexfile"));

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/uploads/');
    },
    filename: (req, file, callback) => {
        videoId = crypto.randomUUID();
        const extPath = path.extname(file.originalname);
        const newName = `${videoId}${extPath}`
        callback(null, newName);
    },
});
const upload = multer({ storage: storage });

const getProviders = async (_req, res) => {
    try {
        const providersList = await knex("providers");
        res.json(providersList);
    } catch (error) {
        res.status(500).send("Unable to retrieve providers list");
    }
};

const getProviderDetails = async (req, res) => {
    try {
        const providerData = await knex("providers")
            .join("services", "services.id", "providers.service_id")
            .where({ "providers.id": req.params.id });
        res.json(providerData);
    } catch (error) {
        res.status(500).send("Unable to retrieve provider data");
    }
};

const getProvidersForService = async (req, res) => {
    try {
        const providers = await knex("providers")
            .select("providers.*")
            .join("services", "services.id", "providers.service_id")
            .where({ "service_id": req.params.serviceId });
        res.json(providers);
    } catch (error) {
        res.status(500).send("Unable to retrieve details of the provider");
    }
};

const getReviews = async (req, res) => {
    try {
        const reviews = await knex("reviews")
            .join("providers", "providers.id", "reviews.provider_id")
            .where({ "provider_id": req.params.id });

        res.json(reviews);
    }
    catch (error) {
        res.status(500).send("Unable to fetch reviwes of the provider");
    }
}


const getAvailability = async (req, res) => {
    try {
        const availability = await knex("availability")
            .join("providers", "providers.id", "availability.provider_id")
            .where({ "provider_id": req.params.id });

        res.json(availability);
    }
    catch (error) {
        res.status(500).send("Unable to fetch reviews of the provider");
    }
}

const updateBooking = async (req, res) => {
    upload.single('image')(req, res, async (err) => {
        if (err) {
            console.error('Error uploading file:', err);
            return res.status(400).json({ message: 'Error uploading file' });
        }

        const imagePath = req.file ? req.file.path : '';
        const match = imagePath.match(/\\uploads\\(.+)/);
        const extractedPath = match ? match[0] : null;

        try {

            const updation = await knex("booking")
                .insert({ ...req.body, image: extractedPath });

            res.status(200).json(updation[0]);

        } catch (error) {
            console.error('Error updating booking:', error);
            res.status(500).json({ message: `Unable to update booking table` });
        }
    })

}

const like = async (req, res) => {
    try {
        const updation = await knex("providers")
            .where({ "id": req.params.id })
            .update(req.body);

        res.status(200).json(updation[0]);

    } catch (error) {
        console.error('Error updating booking:', error);
        res.status(500).json({ message: `Unable to update booking table` });
    }
};

const getLikes = async (req, res) => {
    try {
        const getData = await knex("providers")
            // .join("services", "service.id","providers.service_id")
            .select("*")
            .where("isFavorite", 1);
        res.status(200).json(getData);

    } catch (error) {
        console.log("Unable to fetch list");
    }
}

module.exports = {
    getProviders,
    getProviderDetails,
    getProvidersForService,
    getReviews,
    getAvailability,
    updateBooking,
    like,
    getLikes
}
