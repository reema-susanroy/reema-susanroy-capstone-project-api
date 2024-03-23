const knex = require("knex")(require("../knexfile"));

const getProviders = async (_req, res) => {
    try {
        const providersList = await knex("providers");
        res.json(providersList);
    } catch (error) {
        res.status(500).send("Unable to retrieve providers list");
    }
};

const getProvidersForService = async (req, res) => {
    try {
        const providers = await knex("providers")
            .join("services", "services.id", "providers.service_id")
            .where({"service_id" : req.params.serviceId});
        
        res.json(providers);
    } catch (error) {
        res.status(500).send("Unable to retrieve details of the provider");
    }
};

const getReviews= async (req,res)=>{
    try{
        const reviews = await knex("reviews")
            .join("providers", "providers.id", "reviews.provider_id")
            .where({"provider_id" : req.params.id});
            
            res.json(reviews);
    }
    catch(error){
        res.status(500).send("Unable to fetch revies of thee provider");
    }
}

module.exports = {
    getProviders,
    getProvidersForService,
    getReviews
}
