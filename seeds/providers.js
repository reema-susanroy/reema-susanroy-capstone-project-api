/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('providers').del()
  await knex('providers').insert([
    { 
        id:1,
        service_id: 1, 
        provider_name: 'John Doe', 
        provider_address: '123 Main Street', 
        city: 'New York', 
        country: 'USA', 
        contact_phone: '+1 (123) 456-7890', 
        contact_email: 'john@example.com',
        rating: "4.5",
        availability : "yes"
    },
    { 
        id:2,
        service_id: 2, 
        provider_name: 'Jane Smith', 
        provider_address: '456 Oak Avenue', 
        city: 'Los Angeles', 
        country: 'USA', 
        contact_phone: '+1 (234) 567-8901', 
        contact_email: 'jane@example.com',
        rating: "4.2",
        availability : "yes"
    },
    { 
        id:3,
        service_id: 6, 
        provider_name: 'Michael Johnson', 
        provider_address: '789 Maple Drive', 
        city: 'Chicago', 
        country: 'USA', 
        contact_phone: '+1 (345) 678-9012', 
        contact_email: 'michael@example.com',
        rating: "4.8",
        availability : "yes"
    },
    { 
        id:4,
        service_id: 1, 
        provider_name: 'Emily Brown', 
        provider_address: '101 Elm Street', 
        city: 'San Francisco', 
        country: 'USA', 
        contact_phone: '+1 (456) 789-0123', 
        contact_email: 'emily@example.com',
        rating: "4.6",
        availability : "yes"
    },
    { 
        id:5,
        service_id: 4, 
        provider_name: 'William Davis', 
        provider_address: '202 Cedar Avenue', 
        city: 'Seattle', 
        country: 'USA', 
        contact_phone: '+1 (567) 890-1234', 
        contact_email: 'william@example.com',
        rating: "4.3",
        availability : "yes"
    },
    { 
        id:6,
        service_id: 3, 
        provider_name: 'Emma Wilson', 
        provider_address: '303 Pine Drive', 
        city: 'Miami', 
        country: 'USA', 
        contact_phone: '+1 (678) 901-2345', 
        contact_email: 'emma@example.com',
        rating: "4.9",
        availability : "yes"
    },
    { 
        id:7,
        service_id: 1, 
        provider_name: 'James Taylor', 
        provider_address: '404 Oak Street', 
        city: 'Boston', 
        country: 'USA', 
        contact_phone: '+1 (789) 012-3456', 
        contact_email: 'james@example.com',
        rating: "4.4",
        availability : "yes"
    },
    { 
        id:8,
        service_id: 2, 
        provider_name: 'Olivia Martinez', 
        provider_address: '505 Pine Avenue', 
        city: 'Dallas', 
        country: 'USA', 
        contact_phone: '+1 (890) 123-4567', 
        contact_email: 'olivia@example.com',
        rating: "4.1",
        availability : "yes"
    },
    { 
        id:9,
        service_id: 3, 
        provider_name: 'Benjamin Jones', 
        provider_address: '606 Elm Drive', 
        city: 'Houston', 
        country: 'USA', 
        contact_phone: '+1 (901) 234-5678', 
        contact_email: 'benjamin@example.com',
        rating: "4.7",
        availability : "yes"
    },
    { 
        id:10,
        service_id: 1, 
        provider_name: 'Sophia Garcia', 
        provider_address: '707 Cedar Street', 
        city: 'Philadelphia', 
        country: 'USA', 
        contact_phone: '+1 (012) 345-6789', 
        contact_email: 'sophia@example.com',
        rating: "4.5",
        availability : "yes"
    },
    { 
        id:11,
        service_id: 2, 
        provider_name: 'Liam Rodriguez', 
        provider_address: '808 Maple Avenue', 
        city: 'Atlanta', 
        country: 'USA', 
        contact_phone: '+1 (123) 456-7890', 
        contact_email: 'liam@example.com',
        rating: "4.2",
        availability : "yes"
    },
    { 
        id:12,
        service_id: 3, 
        provider_name: 'Isabella Wilson', 
        provider_address: '909 Oak Drive', 
        city: 'Phoenix', 
        country: 'USA', 
        contact_phone: '+1 (234) 567-8901', 
        contact_email: 'isabella@example.com',
        rating: "4.8",
        availability : "yes"
    },
    { 
        id:13,
        service_id: 6, 
        provider_name: 'Mason Brown', 
        provider_address: '111 Pine Street', 
        city: 'Denver', 
        country: 'USA', 
        contact_phone: '+1 (345) 678-9012', 
        contact_email: 'mason@example.com',
        rating: "4.6",
        availability : "yes"
    },
    { 
        id:14,
        service_id: 5, 
        provider_name: 'Ava Davis', 
        provider_address: '222 Elm Avenue', 
        city: 'Portland', 
        country: 'USA', 
        contact_phone: '+1 (456) 789-0123', 
        contact_email: 'ava@example.com',
        rating: "4.3",
        availability : "yes"
    },
    { 
        id:15,
        service_id: 4, 
        provider_name: 'Lucas Miller', 
        provider_address: '333 Cedar Drive', 
        city: 'San Diego', 
        country: 'USA', 
        contact_phone: '+1 (567) 890-1234', 
        contact_email: 'lucas@example.com',
        rating: "4.9",
        availability : "yes"
    }
]
);
};
