/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('services').del()
  await knex('services').insert([
    { 
      id: 1, 
      service_name: 'Plumbing', 
      service_description: 'Plumbing involves the installation, repair, and maintenance of pipes, fixtures, and fittings for water supply and drainage systems in residential and commercial buildings. It encompasses tasks such as pipe repair, fixture installation, drain cleaning, and water heater repair.', 
      service_need: 'Plumbing tasks are typically done by licensed plumbers who use specialized tools and equipment. The process involves assessing the plumbing system, identifying issues, and performing necessary repairs or installations.',
      service_image: 'public/images/image0.jpg', 
      service_provided: JSON.stringify(['Pipe repair', 'Fixture installation', 'Drain cleaning', 'Water heater repair']) 
    },
    
    { 
      id: 2, 
      service_name: 'Electrical', 
      service_description: 'Electrical services include the installation, repair, and maintenance of electrical wiring, fixtures, and appliances in homes, offices, and industrial buildings. It encompasses tasks such as wiring installation, lighting fixtures, electrical panel upgrades, and outlet repairs. Electrical work is carried out by qualified electricians who follow safety standards and regulations.', 
      service_need:'Electrical services are crucial for ensuring safety, providing power for lighting, heating, and operating appliances. Proper electrical installations prevent accidents like electric shocks, fires, and short circuits.',
      service_image: 'images/image1.jpg', 
      service_provided: JSON.stringify(['Wiring installation', 'Lighting fixtures', 'Electrical panel upgrades', 'Outlet repairs']) 
    },
    { 
      id: 3, 
      service_name: 'Cleaning', 
      service_description: 'Cleaning services encompass a wide range of tasks including house cleaning, office cleaning, carpet cleaning, and janitorial services. It involves thorough cleaning of surfaces, floors, carpets, and other areas to maintain cleanliness and hygiene. ', 
      service_need:'Cleaning services are important for maintaining cleanliness, hygiene, and a healthy environment. Regular cleaning prevents the spread of diseases, removes allergens and pollutants, and improves indoor air quality.',
      service_image: 'images/image2.jpg', 
      service_provided: JSON.stringify(['House cleaning', 'Office cleaning', 'Carpet cleaning', 'Janitorial services']) 
    },
    { 
      id: 4, 
      service_name: 'Landscaping', 
      service_description: 'Landscaping involves the design, installation, and maintenance of outdoor spaces including gardens, lawns, patios, and hardscapes. It encompasses tasks such as lawn care, garden design, hardscaping, and tree trimming. Landscaping is typically done by landscapers who assess the outdoor space, plan the design, and execute the installation and maintenance tasks.', 
      service_need:'Landscaping enhances the aesthetic appeal of properties, increases property value, and provides recreational spaces. Well-designed landscapes also contribute to environmental conservation by reducing soil erosion and improving biodiversity.',
      service_image: 'images/image3.jpg', 
      service_provided: JSON.stringify(['Lawn care', 'Garden design', 'Hardscaping', 'Tree trimming']) 
    },
    { 
      id: 5, 
      service_name: 'Painting', 
      service_description: 'Painting services include interior and exterior painting of residential and commercial properties, as well as surface preparation and color consultations. Painters use brushes, rollers, or spray guns to apply paint evenly to surfaces, ensuring smooth coverage and proper finish.', 
      service_need:'They may also use masking tape and drop cloths to protect adjacent surfaces from paint splatters. Painting protects surfaces from damage, weathering, and corrosion while enhancing their appearance. It also allows customization of interior spaces, reflects personal style, and creates a pleasant atmosphere.',
      service_image: 'public\images\image0.jpg', 
      service_provided: JSON.stringify(['Interior painting', 'Exterior painting', 'Color consultations', 'Surface preparation']) 
    },
    { 
      id: 6, 
      service_name: 'HVAC', 
      service_description: 'HVAC (Heating, Ventilation, and Air Conditioning) services involve the installation, repair, and maintenance of heating, cooling, and ventilation systems. It encompasses tasks such as HVAC repair, AC installation, duct cleaning, and thermostat replacement. The process includes tasks like installing ductwork, connecting HVAC units, testing system performance, and adjusting airflow.',
      service_need:'Technicians use tools like gauges, thermometers, and HVAC diagnostic equipment to ensure proper system functioning. HVAC systems regulate indoor temperature, humidity, and air quality, providing comfort and health benefits. Proper HVAC maintenance ensures energy efficiency, reduces utility costs, and extends equipment lifespan.' ,
      service_image: 'public\images\image0.jpg', 
      service_provided: JSON.stringify(['HVAC repair', 'AC installation', 'Duct cleaning', 'Thermostat replacement']) 
    },
    { 
      id: 7, 
      service_name: 'Roofing', 
      service_description: 'Roofing services include roof repair, replacement, and installation for residential and commercial buildings, covering various types of roofs like shingles, tiles, and flat roofs. It involves inspecting, repairing, and installing roofs to protect buildings from weather elements. Roofing tasks are performed by roofing contractors who assess the roof condition, remove old roofing materials, and install new roofing materials.', 
      service_need:'The process includes tasks like sheathing installation, underlayment placement, shingle laying, and flashing installation. Roofers use tools like hammers, nail guns, roofing knives, and safety equipment for working at heights. Roofing protects buildings from weather elements such as rain, snow, wind, and sunlight.',
      service_image: 'public\images\image0.jpg', 
      service_provided: JSON.stringify(['Roof inspection', 'Shingle replacement', 'Flat roof repair', 'Gutter cleaning']) 
    },
    { 
      id: 8, 
      service_name: 'Carpentry', 
      service_description: 'Carpentry services encompass woodworking tasks such as custom furniture making, cabinetry, trim work, and wood floor installation. It involves shaping, cutting, and assembling wood to create functional and aesthetic elements for homes and businesses.', 
      service_need: 'Carpenters use hand tools like saws, chisels, and planes, as well as power tools like drills, sanders, and routers. Carpentry adds functionality, beauty, and personality to spaces through custom-made furniture, storage solutions, and architectural details.',
      service_image: 'public\images\image0.jpg', 
      service_provided: JSON.stringify(['Custom furniture', 'Cabinet making', 'Trim work', 'Wood floor installation']) 
    },
  ]);
};
