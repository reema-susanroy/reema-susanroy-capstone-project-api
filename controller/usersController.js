const knex = require("knex")(require("../knexfile"));

const userLogin = async (req, res) => {
    const {user_name, contact_email, password} = req.body;
    try {
        const checkUser = await knex("users")
        .where({user_name, contact_email, password})
        .select("id")
        .first();

        if(!checkUser){
            return res.status(404).json({error: `User with email ${req.params.id} not found. Kindly register` });
        }
        res.status(200).json({message : 'Login Successful',user: checkUser });

    } catch (error) {
        res.status(500).json({error : "Internal server error"});
    }
};

const userRegister = async (req, res) => {
    const {user_name, contact_email, password} = req.body;
    try {
        const checkUser = await knex("users")
        .where({user_name, contact_email, password});
        if(checkUser.length===0){
            const [id] = await knex("users")
                .insert(req.body);
            console.log(id)
                return res.status(200).json({message : 'Registered Successful',id});
        }
        res.status(404).json({message : 'User already registered' });

    } catch (error) {
        res.status(500).json({error : "Internal server error"});
    }
};

const getBooking = async (req, res) => {
    try {
        const booking = await knex("booking")
            .join("services", "services.id", "booking.service_id")
            .join("providers", "providers.id", "booking.provider_id")
            .select("booking.id","booking.booked_on","services.service_name","providers.provider_name")
            .where({"user_id" : req.params.id});
            res.json(booking);
    } catch (error) {
        res.status(500).send("Unable to retrieve details of the provider");
    }
};

const getUserDetails = async (req, res) =>{
    try{
        const user=await knex("users")
            .select("users.*")
            .where({"id" : req.params.id});

        res.status(200).json(user);
    }catch(error){
        res.status(500).send("Unable to retrieve details of the user");
    }

}

const postUserDetails = async (req, res) =>{
    try{
        const user=await knex("users")
            .where({"id" : req.params.id})
            .update(req.body);

        res.status(200).json(user);
    }catch(error){
        res.status(500).send("Unable to update details of the user");
    }

}

const deleteBooking = async (req,res) =>{
    console.log("called delete")
    try{
        console.log(req.params.id);
        const deleteItem = await knex ("booking")
            .where({"id" : req.params.id})
            .delete();

            if (deleteItem === 0) {
                return res.status(404).json({
                  message: `Booking not found`,
                });
              }
        res.sendStatus(204);
    }catch(error){
        res.status(500).send("Unable to delete the booking");
    }
}
module.exports = {
    userLogin,
    userRegister,
    getBooking,
    getUserDetails,
    postUserDetails,
    deleteBooking
}