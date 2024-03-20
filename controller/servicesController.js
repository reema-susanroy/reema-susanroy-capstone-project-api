const knex = require("knex")(require("../knexfile"));

const getServices = async (_req, res) => {
    try {
        const servicesList = await knex("services");
        res.json(servicesList);
    } catch (error) {
        res.status(500).send("Error with database");
    }
};

const getOneService = async (req, res) => {
    console.log("controller");
    try {
        const servicesFound = await knex("services")
                .where({ id: req.params.id });
        console.log(servicesFound)

        if(servicesFound.length === 0){
            return res.status(404).json({message: `Service with ID ${req.params.id} not found` });
        }
        const serviceData = servicesFound[0];
        res.status(200).json(serviceData);
    } catch (error) {
        res.status(500).json({message: `Unable to retrieve warehouse data for warehouse with ID ${req.params.id}`});
    }
};

module.exports = {
    getServices,
    getOneService
}