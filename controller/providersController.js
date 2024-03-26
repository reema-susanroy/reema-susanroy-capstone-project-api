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
        res.status(500).send("Unable to fetch reviwes of the provider");
    }
}


const getAvailability = async (req,res)=>{
    try{
        const availability = await knex("availability")
            .join("providers", "providers.id", "availability.provider_id")
            .where({"provider_id" : req.params.id});

            res.json(availability);
    }
    catch(error){
        res.status(500).send("Unable to fetch reviews of the provider");
    }
}

const updateBooking = async(req,res)=>{
    try{
        const updation = await knex ("booking")
            // .where({"id": req.params.id})
            .insert(req.body);
           
     res.status(200).json(updation[0]);

    } catch (error) {
        console.error('Error updating booking:', error);
        res.status(500).json({ message: `Unable to update booking table` });
      }
}

const like =async(req,res) =>{
    try{
        const updation = await knex ("providers")
            .where({"id": req.params.id})
            .update(req.body);
           
     res.status(200).json(updation[0]);

    } catch (error) {
        console.error('Error updating booking:', error);
        res.status(500).json({ message: `Unable to update booking table` });
    }
};

const getLikes = async(req,res)=>{
    try{
        const getData=await knex ("providers")
        .select("*")
        .where ("isFavorite", 1 );
        console.log(getData);
        res.status(200).json(getData);

    }catch(error){
    console.log("Unable to fetch list");
    }
}

module.exports = {
    getProviders,
    getProvidersForService,
    getReviews,
    getAvailability,
    updateBooking,
    like,
    getLikes
}
