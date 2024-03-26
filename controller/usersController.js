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
            .where({"user_id" : req.params.id});
        
        res.json(booking);
    } catch (error) {
        res.status(500).send("Unable to retrieve details of the provider");
    }
};

// const getFavoriteStatus =async ()=>{
//     try {
//         const favorites = await knex("favorite")
//             .join("services", "services.id", "favorite.service_id")
//             // .join("providers", "providers.id", "favorite.provider_id")
//             .where({"user_id" : req.params.userId});
//         if(favorites.length===0){
//             console.log("here")
//             return res.status(404).json({message: "No Favorites"});
//         }
//         res.json(favorites);
//     } catch (error) {
//         res.status(500).send("Unable to retrieve details of the provider");
//     }
// }

// const like =async(req,res) =>{
//     console.log("like")
//     try{
//         const checkData= await knex("favorite").where({"provider_id": req.params.id});

//         if(checkData.length===0){
//             console.log("update?")
//             const updation = await knex ("favorite")
//             // .where({"provider_id": req.params.id})
//             .insert(req.body);
            

//             return res.status(200).json(req.body);
//         }
//         else{
//             console.log("insert?")
            
//             const updation = await knex ("favorite")
//             .where({"provider_id": req.params.id})
//             .update(req.body);
//             return res.status(200).json(req.body);
//         }                 
//     //  res.status(200).json(updation[0]);
//     } catch (error) {
//         console.error('Error updating booking:', error);
//         res.status(500).json({ message: `Unable to update booking table` });
//     }
// }
module.exports = {
    userLogin,
    userRegister,
    getBooking,
    // getFavoriteStatus,
    // like
}