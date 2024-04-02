/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('reviews').del()
  await knex('reviews').insert(
    [
      {
        "id": 1,
        "provider_id": 1,
        "user_name": "John Doe",
        "user_review": "Excellent service, fixed my plumbing issue quickly and efficiently."
      },
      {
        "id": 2,
        "provider_id": 1,
        "user_name": "Jane Smith",
        "user_review": "Great job! Very professional and friendly service."
      },
      {
        "id": 3,
        "provider_id": 1,
        "user_name": "Alex Johnson",
        "user_review": "Highly recommended! Quick response and top-notch work."
      },
      {
        "id": 4,
        "provider_id": 2,
        "user_name": "Emily Brown",
        "user_review": "Outstanding service! Solved my issue in no time."
      },
      {
        "id": 5,
        "provider_id": 2,
        "user_name": "Michael Wilson",
        "user_review": "Very satisfied with the work done. Will call again if needed."
      },
      {
        "id": 6,
        "provider_id": 2,
        "user_name": "Sophia Martinez",
        "user_review": "Professional and courteous. Fixed the problem efficiently."
      },
      {
        "id": 7,
        "provider_id": 3,
        "user_name": "Ethan Anderson",
        "user_review": "Excellent service! Went above and beyond to help."
      },
      {
        "id": 8,
        "provider_id": 3,
        "user_name": "Olivia Taylor",
        "user_review": "Impressed with the quality of work. Highly recommended!"
      },
      {
        "id": 9,
        "provider_id": 3,
        "user_name": "Liam Thomas",
        "user_review": "Friendly and professional. Fixed the issue quickly."
      },
      {
        "id": 10,
        "provider_id": 4,
        "user_name": "Ava White",
        "user_review": "Very happy with the service provided. Will use again."
      },
      {
        "id": 11,
        "provider_id": 4,
        "user_name": "Noah Harris",
        "user_review": "Prompt response and great workmanship. Highly recommended!"
      },
      {
        "id": 12,
        "provider_id": 4,
        "user_name": "Emma Martin",
        "user_review": "Professional and reliable service. Thank you!"
      },
      {
        "id": 13,
        "provider_id": 5,
        "user_name": "William Garcia",
        "user_review": "Excellent work! Knowledgeable and efficient."
      },
      {
        "id": 14,
        "provider_id": 5,
        "user_name": "Isabella Rodriguez",
        "user_review": "Solved the problem quickly. Very satisfied with the service."
      },
      {
        "id": 15,
        "provider_id": 5,
        "user_name": "Mason Martinez",
        "user_review": "Friendly and professional service. Will definitely call again."
      },
      {
        "id": 16,
        "provider_id": 6,
        "user_name": "Sophia Lee",
        "user_review": "Highly skilled and efficient. Fixed the issue perfectly."
      },
      {
        "id": 17,
        "provider_id": 6,
        "user_name": "Logan Clark",
        "user_review": "Great service! Arrived on time and completed the job quickly."
      },
      {
        "id": 18,
        "provider_id": 6,
        "user_name": "Amelia Hall",
        "user_review": "Very satisfied with the service. Professional and courteous."
      },
      {
        "id": 19,
        "provider_id": 7,
        "user_name": "James Baker",
        "user_review": "Prompt response and excellent workmanship. Thank you!"
      },
      {
        "id": 20,
        "provider_id": 7,
        "user_name": "Avery Hill",
        "user_review": "Impressed with the quality of service provided. Highly recommended."
      },
      {
        "id": 21,
        "provider_id": 7,
        "user_name": "Evelyn Young",
        "user_review": "Friendly and professional. Solved the issue efficiently."
      },
      {
        "id": 22,
        "provider_id": 8,
        "user_name": "David Rodriguez",
        "user_review": "Excellent service! Knowledgeable and courteous."
      },
      {
        "id": 23,
        "provider_id": 8,
        "user_name": "Sofia Scott",
        "user_review": "Great experience! Solved the problem quickly and efficiently."
      },
      {
        "id": 24,
        "provider_id": 8,
        "user_name": "Jackson Green",
        "user_review": "Very satisfied with the service provided. Will use again."
      },
      {
        "id": 25,
        "provider_id": 9,
        "user_name": "Emma Rodriguez",
        "user_review": "Professional and reliable service. Fixed the issue in no time."
      },
      {
        "id": 26,
        "provider_id": 9,
        "user_name": "Lucas Hall",
        "user_review": "Impressed with the quality of work. Highly recommended!"
      },
      {
        "id": 27,
        "provider_id": 9,
        "user_name": "Avery Young",
        "user_review": "Prompt and efficient service. Solved the problem quickly."
      },
      {
        "id": 28,
        "provider_id": 10,
        "user_name": "Benjamin Baker",
        "user_review": "Excellent service! Knowledgeable and professional."
      },
      {
        "id": 29,
        "provider_id": 10,
        "user_name": "Mia King",
        "user_review": "Great experience! Solved the issue in no time."
      },
      {
        "id": 30,
        "provider_id": 10,
        "user_name": "Ethan Rivera",
        "user_review": "Very satisfied with the service provided. Will call again if needed."
      },
      {
        "id": 31,
        "provider_id": 11,
        "user_name": "Charlotte Phillips",
        "user_review": "Prompt response and professional service. Highly recommended!"
      },
      {
        "id": 32,
        "provider_id": 11,
        "user_name": "Liam Bailey",
        "user_review": "Friendly and efficient. Fixed the issue quickly."
      },
      {
        "id": 33,
        "provider_id": 11,
        "user_name": "Harper Foster",
        "user_review": "Excellent work! Solved the problem effectively."
      },
      {
        "id": 34,
        "provider_id": 12,
        "user_name": "Luna Bennett",
        "user_review": "Very satisfied with the service provided. Will use again."
      },
      {
        "id": 35,
        "provider_id": 12,
        "user_name": "Elijah Murphy",
        "user_review": "Professional and reliable. Solved the issue quickly."
      },
      {
        "id": 36,
        "provider_id": 12,
        "user_name": "Scarlett Collins",
        "user_review": "Friendly and professional service. Highly recommended!"
      },
      {
        "id": 37,
        "provider_id": 13,
        "user_name": "Aiden Cook",
        "user_review": "Excellent service! Knowledgeable and courteous."
      },
      {
        "id": 38,
        "provider_id": 13,
        "user_name": "Layla Sanders",
        "user_review": "Prompt response and great workmanship. Thank you!"
      },
      {
        "id": 39,
        "provider_id": 13,
        "user_name": "Carter Perry",
        "user_review": "Very satisfied with the service provided. Will use again."
      },
      {
        "id": 40,
        "provider_id": 14,
        "user_name": "Mila Bennett",
        "user_review": "Prompt and efficient service. Solved the issue quickly."
      },
      {
        "id": 41,
        "provider_id": 14,
        "user_name": "Grayson Brooks",
        "user_review": "Excellent service! Knowledgeable and professional."
      },
      {
        "id": 42,
        "provider_id": 14,
        "user_name": "Aria Sanders",
        "user_review": "Great experience! Solved the issue in no time."
      },
      {
        "id": 43,
        "provider_id": 15,
        "user_name": "Zoey Foster",
        "user_review": "Very satisfied with the service provided. Will call again if needed."
      },
      {
        "id": 44,
        "provider_id": 15,
        "user_name": "Caleb Cox",
        "user_review": "Prompt response and professional service. Highly recommended!"
      },
      {
        "id": 45,
        "provider_id": 15,
        "user_name": "Nora Perry",
        "user_review": "Friendly and efficient. Fixed the issue quickly."
      },
      {
        "id": 46,
        "provider_id": 16,
        "user_name": "Liam Reed",
        "user_review": "Excellent service! Knowledgeable and professional."
      },
      {
        "id": 47,
        "provider_id": 16,
        "user_name": "Ava Evans",
        "user_review": "Great experience! Solved the issue efficiently."
      },
      {
        "id": 48,
        "provider_id": 16,
        "user_name": "Evelyn Parker",
        "user_review": "Prompt response and friendly service. Thank you!"
      },
      {
        "id": 49,
        "provider_id": 17,
        "user_name": "Benjamin Richardson",
        "user_review": "Very satisfied with the service provided. Will use again."
      },
      {
        "id": 50,
        "provider_id": 17,
        "user_name": "Mia Long",
        "user_review": "Professional and reliable. Fixed the issue quickly."
      },
      {
        "id": 51,
        "provider_id": 17,
        "user_name": "Ethan Hughes",
        "user_review": "Friendly and professional service. Highly recommended!"
      },
      {
        "id": 52,
        "provider_id": 18,
        "user_name": "Charlotte Powell",
        "user_review": "Prompt and efficient service. Solved the problem quickly."
      },
      {
        "id": 53,
        "provider_id": 18,
        "user_name": "Liam Simmons",
        "user_review": "Excellent service! Knowledgeable and courteous."
      },
      {
        "id": 54,
        "provider_id": 18,
        "user_name": "Harper Reed",
        "user_review": "Great experience! Solved the issue effectively."
      },
      {
        "id": 55,
        "provider_id": 19,
        "user_name": "Luna Fisher",
        "user_review": "Prompt response and professional service. Highly recommended!"
      },
      {
        "id": 56,
        "provider_id": 19,
        "user_name": "Elijah Price",
        "user_review": "Friendly and efficient. Fixed the issue quickly."
      },
      {
        "id": 57,
        "provider_id": 19,
        "user_name": "Scarlett Cox",
        "user_review": "Excellent work! Solved the problem effectively."
      },
      {
        "id": 58,
        "provider_id": 20,
        "user_name": "Aiden Richardson",
        "user_review": "Very satisfied with the service provided. Will call again if needed."
      },
      {
        "id": 59,
        "provider_id": 20,
        "user_name": "Layla Long",
        "user_review": "Prompt response and professional service. Highly recommended!"
      },
      {
        "id": 60,
        "provider_id": 20,
        "user_name": "Carter Hughes",
        "user_review": "Friendly and efficient. Fixed the issue quickly."
      }
    ]
    
  );
};
