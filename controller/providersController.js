const knex = require("knex")(require("../knexfile"));

const getProviders = async (_req, res) => {
    try {
        const providersList = await knex("providers");
        res.json(providersList);
    } catch (error) {
        res.status(500).send("Error with database");
    }
};

const getProvidersForService = async (req, res) => {
    console.log("providers");
    try {
        const providers = await knex("providers")
            .join("services", "services.id", "providers.service_id")
            .where({"service_id" : req.params.serviceId});
            
        res.json(providers);
    } catch (error) {
        res.status(500).send("Error with database");
    }
};

module.exports = {
    getProviders,
    getProvidersForService
}
