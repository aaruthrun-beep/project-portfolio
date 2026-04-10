const fs = require('fs');

const path = 'main.js';
let code = fs.readFileSync(path, 'utf8');

const newProjects = `
    {
        id: 21,
        title: "Butter Milk Making Machine",
        folder: "butter mil making mac hine",
        date: "2023",
        year: "2023",
        category: "diploma",
        shortDesc: "Automated churning mechanism for rapid traditional buttermilk processing.",
        fullDesc: "Designed to scale up the traditional churning process, this machine utilizes a specialized high-speed motor coupled with customized agitator blades. By precisely tuning the rotational velocity to match fluid dynamics requirements, it perfectly separates butter from the liquid without over-whipping. This automated approach heavily reduced manual labor and significantly output yield for local processing.",
        tags: ["Fluid Dynamics", "Automation", "Mechanisms"],
        images: []
    },
    {
        id: 22,
        title: "Robot Arm V0",
        folder: "robot arm 1",
        date: "2022",
        year: "2022",
        category: "diploma",
        shortDesc: "The very first preliminary attempt at robotic articulation and joint control.",
        fullDesc: "Serving as the absolute baseline for all future robotics projects, this was the primal V0 robotic manipulator chassis. Built with fundamental materials and rudimentary actuators, it was primarily a test-bed to understand degrees of freedom, holding torque, and joint mechanical leverage. While it lacked closed-loop feedback or complex GRBL integration, the mechanical failures experienced here directly motivated the massive improvements implemented in V1 and V2.",
        tags: ["Prototyping", "Mechanics", "Exploration"],
        images: []
    },
    {
        id: 23,
        title: "Veel Koothu Installation",
        folder: "veel koothu",
        date: "2021",
        year: "2021",
        category: "school",
        shortDesc: "A cultural electro-mechanical project showcasing dynamic movement.",
        fullDesc: "A creatively motivated electro-mechanical project blending traditional elements with mechanized motion. This installation focused deeply on aesthetic visual output rather than pure utility, utilizing timed motor sequencing and structural framing to bring movement to the exhibit. It posed a unique engineering challenge: creating smooth, reliable kinetic motion while keeping the underlying mechanisms completely hidden from the viewer's perspective.",
        tags: ["Kinetic Art", "Actuation", "Cultural"],
        images: []
    }
];`;

// Find the end of the projects array and insert the new projects
code = code.replace(/}\s*\];/, `},${newProjects}`);

fs.writeFileSync(path, code);
console.log('Appended new unmapped projects directly to main.js!');
