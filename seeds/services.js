/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('services').truncate()
  await knex('services').insert([
    { service_name: 'Plumbing', service_description: 'Professional plumbing services for residential and commercial properties.', service_image: 'public/images/image0.jpg' },
    { service_name: 'Electrical', service_description: 'Expert electrical repairs, installations, and maintenance for homes and businesses.', service_image: 'images/image1.jpg' },
    { service_name: 'Cleaning', service_description: 'Thorough cleaning services for homes, offices, and commercial spaces.', service_image: 'images/image2.jpg' },
    { service_name: 'Landscaping', service_description: 'Professional landscaping design, installation, and maintenance services.', service_image: 'images/image3.jpg' },
    { service_name: 'Painting', service_description: 'High-quality painting services for interiors and exteriors of residential and commercial properties.', service_image: 'public\images\image0.jpg' },
    { service_name: 'HVAC', service_description: 'Heating, ventilation, and air conditioning services for residential and commercial properties.', service_image: 'public\images\image0.jpg' },
    { service_name: 'Roofing', service_description: 'Roof repair, replacement, and installation services for all types of roofs.', service_image: 'public\images\image0.jpg' },
    { service_name: 'Carpentry', service_description: 'Skilled carpentry services for custom furniture, cabinetry, and woodworking projects.', service_image: 'public\images\image0.jpg' },
  ]);
};
