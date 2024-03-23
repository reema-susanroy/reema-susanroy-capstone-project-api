/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('reviews').del()
  await knex('reviews').insert([
    {
      id: 1,
      provider_id: 1,
      user_name: 'John Doe',
      user_review: "Excellent service, fixed my plumbing issue quickly and efficiently.",
    },
    {
      id: 2,
      provider_id: 1,
      user_name: 'Anna',
      user_review:"Great experience with this provider, they were very professional and knowledgeable.",
    },
    {
      id: 3,
      provider_id: 2,
      user_name: 'Christin',
      user_review:"Highly recommend this provider for electrical work, they did a fantastic job installing new lighting fixtures",
    },
    {
      id: 4,
      provider_id: 3,
      user_name: 'Rose',
      user_review:"Outstanding cleaning service, my office has never looked better!",
    },
    {
      id: 5,
      provider_id: 4,
      user_name: 'Christin',
      user_review:"Very thorough and reliable cleaning service, they pay attention to detail.",
    },
    {
      id: 6,
      provider_id: 5,
      user_name: 'Lisa',
      user_review:"Impressed with the professionalism and quality of work from this cleaning provider.",
    },
    {
      id: 7,
      provider_id: 4,
      user_name: 'Christin',
      user_review:"Fantastic landscaping job, transformed my backyard into a beautiful oasis.",
    },
    {
      id: 8,
      provider_id: 6,
      user_name: 'Christin',
      user_review:"Great communication throughout the project, very happy with the results",
    },
    {
      id: 9,
      provider_id: 8,
      user_name: 'James',
      user_review:"Impressed with the attention to detail and commitment to customer satisfaction",
    },
    
  ]);
};
