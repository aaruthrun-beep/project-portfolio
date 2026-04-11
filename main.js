/* • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • 
   CONSTANTS & DATA
   • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •  */

const CATEGORY_COLORS = {
    college: '#6366f1',
    diploma: '#10b981',
    school: '#f59e0b'
};

const CATEGORY_LABELS = {
    college: 'College Engineering',
    diploma: 'Polytechnic Diploma',
    school: 'High School'
};

const TESLA_IMAGES = [
    'blueprint.png', 'CNPjiDqBPaPGBCrnPNuGZtKAEQ.avif', 'download (1).jpeg',
    'download (2).jpeg', 'download (3).jpeg', 'download (4).jpeg',
    'download.jpeg', 'download.png', 'images (1).jpeg', 'images.jpeg',
    'lab.png', 'Nikola-Tesla-Publicity-photo-laboratory-Colorado-Springs-December-1899-1-e1669264265908.webp',
    'portrait.png', 'Tesla_circa_1890 (1).jpeg', '_119574526_gettyimages-545337079.jpg.webp'
];

const TESLA_QUOTES = [
    "Be alone, that is when ideas are born; be alone, that is when secrets are revealed.",
    "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.",
    "The present is theirs; the future, for which I really worked, is mine.",
    "What one man calls God, another calls the laws of physics.",
    "The desire that guides me in all I do is the desire to harness the forces of nature to the service of mankind.",
    "If your hate could be turned into electricity, it would light up the whole world.",
    "One must be sane to think clearly, but one can think deeply and be quite insane.",
    "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.",
    "I do not think you can name many great inventions that have been made by married men.",
    "Science is but a perversion of itself unless it has as its ultimate goal the betterment of humanity.",
    "My brain is only a receiver, in the Universe there is a core from which we obtain knowledge, strength and inspiration.",
    "The hard work of the future will be the production of light."
];

const projects = [
    {
        "id": 1,
        "title": "Smart Rover Monitoring",
        "folder": "smart rover",
        "year": "2018",
        "date": "2018 · GRADE 7",
        "category": "school",
        "tags": [
            "FIRST MECHATRONICS"

        ],
        "shortDesc": "My first mechatronics build — a wired manually controlled rover using salvaged RO pump motors and discrete transistor circuits.",
        "fullDesc": "This project marks my first hands-on experience in mechatronics, built during Grade 7 using salvaged components from a discarded RO water purifier.\n\nThe rover was powered by 12V DC motors taken from RO pump systems. Motion control was achieved through a wired setup using toggle switches, where polarity reversal was used to control direction (forward and reverse).\n\nMotor driving was implemented using basic transistor-based switching circuits, as dedicated motor driver ICs were not used.\n\nI also experimented with simple environmental sensing circuits using BC547 transistors configured in amplification stages to detect changes in temperature, moisture, and fire conditions. These were not highly accurate but were able to indicate environmental variations.\n\nThe entire system was manually fabricated and assembled without prior formal knowledge of electronics or robotics.\n\nThis project introduced me to fundamental concepts such as DC motor control, polarity switching, basic analog electronics, and system-level integration.",
        "images": [
            "smart rover/IMG-20200831-WA0003.jpg",
            "smart rover/IMG-20200831-WA0009.jpg",
            "smart rover/IMG-20200831-WA0013.jpg",
            "smart rover/IMG-20200831-WA0015.jpg",
            "smart rover/IMG-20200831-WA0016.jpg",
            "smart rover/IMG-20200831-WA0017.jpg",
            "smart rover/IMG-20200831-WA0018.jpg",
            "smart rover/IMG-20200901-WA0000.jpg",
            "smart rover/IMG-20200901-WA0003.jpg",
            "smart rover/IMG-20200901-WA0004.jpg",
            "https://drive.google.com/file/d/19HA0UDf4_SR6jmkufVUmYPXSJ7pScMna/view",
            "smart rover/WhatsApp Image 2026-03-19 at 9.12.03 PM.jpeg",
            "smart rover/WhatsApp Image 2026-03-19 at 9.12.04 PM (1).jpeg",
            "smart rover/WhatsApp Image 2026-03-19 at 9.12.04 PM.jpeg",
            "smart rover/WhatsApp Image 2026-04-08 at 8.00.22 PM.jpeg",
            "smart rover/WhatsApp Image 2026-04-09 at 5.00.58 PM.jpeg"
        ]
    },
    {
        "id": 2,
        "title": "Robotic Manipulator V1",
        "folder": "robot arm 1",
        "year": "2018",
        "date": "2018-2019 · GRADE 7",
        "category": "school",
        "tags": [
            "Early Robotics",
            "DC Motor Actuation",
            "Thread Drive",
            "Basic Fabrication"
        ],
        "shortDesc": "My first robotic arm — a basic DC motor-driven manipulator built using simple thread-based actuation and manual fabrication.",
        "fullDesc": "This project was my first attempt at building a robotic manipulator during Grade 7. The system was constructed using simple materials and basic fabrication methods without any formal design knowledge.\n\nActuation was achieved using DC motors, with motion transmitted through thread/lead-based mechanisms to create joint movement. The structure was assembled using basic mechanical fastening methods such as bolts and improvised joints.\n\nThe system had significant limitations in terms of stability, control, and precision. There was noticeable play in the joints, inconsistent motion, and very low load-handling capability. However, it successfully demonstrated basic multi-joint movement using motor-driven actuation.\n\nThis project introduced me to fundamental concepts such as motion transmission, mechanical linkage behavior, and the challenges of controlling multiple axes using simple drive systems.\n\nIt marked the starting point of my robotics journey and led to more advanced robotic arm designs in later projects."
        , "images": [
            "robot arm 1/WhatsApp Image 2026-03-03 at 5.03.57 PM.jpeg"
        ]
    },
    {
        "id": 3,
        "title": "Vel Kotthu (Multi-Tool)",
        "folder": "vel koothu",
        "year": "2019",
        "date": "2019-2020 · GRADE 8",
        "category": "school",
        "tags": [

            "HAND FORGE"

        ],
        "shortDesc": "The first tool made with my father — hand-forged steel, oil-quenched, and still used daily on our farm.",
        "fullDesc": "The Vel kotthu is named after the curved Tamil 'Vel' spear—is the founding artifact of my journey. Designed by my father and forged by both of us, it is made from hand-shaped EN8 carbon steel.\n\nWe rough-cut the steel plate, shaped the profile manually, and ground the edge into a curved cutting form. Heat treatment was performed using a coal forge, where the metal was heated until red-hot and then quenched in used engine oil.\n\nThe tool serves as a multi-purpose agricultural implement for cutting, scraping, and soil work. It represents a purely mechanical solution built directly for field use.\n\nMore than a project, it marks the beginning of my journey—before electronics and automation—rooted in materials, tools, and real-world application. It is still in daily use on our farm today."
        , "images": [
            "veel koothu/IMG-20210305-WA0000.jpg",
            "veel koothu/IMG-20210306-WA0007.jpg",
            "veel koothu/IMG-20210306-WA0009.jpg",
            "veel koothu/IMG-20210306-WA0010.jpg",
            "veel koothu/IMG-20210306-WA0013.jpg",
            "veel koothu/IMG-20210306-WA0014.jpg",
            "veel koothu/IMG-20210306-WA0015.jpg",
            "veel koothu/IMG-20210306-WA0017.jpg",
            "veel koothu/IMG-20210307-WA0001.jpg",
            "veel koothu/IMG-20210321-WA0039.jpg",
            "veel koothu/IMG-20210321-WA0042.jpg",
            "veel koothu/IMG-20210322-WA0011.jpg",
            "veel koothu/WhatsApp Image 2026-03-27 at 9.35.06 PM.jpeg",
            "veel koothu/WhatsApp Image 2026-04-09 at 5.00.49 PM.jpeg",
            "veel koothu/WhatsApp Image 2026-04-09 at 5.00.50 PM.jpeg",
            "veel koothu/WhatsApp Image 2026-04-09 at 5.00.52 PM.jpeg",
            "veel koothu/WhatsApp Image 2026-04-09 at 5.00.57 PM.jpeg",
            "https://drive.google.com/file/d/11jDjc8wvOSIDo512-em06ApCxxe8phGN/view",
            "https://drive.google.com/file/d/1s-kLi6IU8mE-PVoJPgiJ_1P6XU6pGSdc/view",
            "https://drive.google.com/file/d/1I1lUDPXB6jt-JHchnMv1nkXN9U-nLWl4/view"
        ]
    },
    {
        "id": 4,
        "title": "Butter extraction Machine",
        "folder": "butter mil making mac hine",
        "year": "2019",
        "date": "2019-2020 · GRADE 8",
        "category": "school",
        "tags": [
            "FOOD-GRADE",
            "GEARMOTOR",
            "ITERATIVE DESIGN"
        ],
        "shortDesc": "Built 4 buttermilk machines using a sealed stainless steel drum with a motor-driven churning system at ~180 RPM.",
        "fullDesc": "During the COVID lockdown, I observed my grandmother manually churning buttermilk for around 30 minutes every morning. I analyzed the process to determine a suitable rotational speed for consistent churning without excessive aeration.\n\nI designed a compact buttermilk making machine using a food-grade sealed stainless steel drum with a motor-driven shaft operating at approximately 180 RPM. The system was kept simple and reliable, with direct coupling between the motor and the churning mechanism, making it easy to use and maintain for non-technical users.\n\nAfter successfully building the first unit for home use, I produced three additional units for relatives based on demand. This project was my first experience with practical product design, iterative improvements, and low-volume manufacturing.",
        "images": [
            "butter mil making mac hine/WhatsApp Image 2026-04-09 at 4.59.15 PM.jpeg",
            "butter mil making mac hine/WhatsApp Image 2026-04-09 at 4.59.27 PM.jpeg",
            "butter mil making mac hine/WhatsApp Image 2026-04-09 at 5.00.32 PM.jpeg",
            "butter mil making mac hine/WhatsApp Image 2026-04-09 at 5.00.35 PM.jpeg",
            "butter mil making mac hine/WhatsApp Image 2026-04-09 at 5.00.54 PM.jpeg"
        ]
    },
    {
        "id": 5,
        "title": "Single Wheel Weeder (Manual)",
        "folder": "single wheel weeder",
        "year": "2019",
        "date": "2019-2020 · GRADE 8",
        "category": "school",
        "tags": [
            "MANUAL AGRI",
            "MECHANICS"
        ],
        "shortDesc": "Manual agricultural weeder designed for precise inter-row topsoil agitation.",
        "fullDesc": "To solve the problem of quick weed control in narrow crop rows, I designed this manual weeder. It uses a single large-diameter wheel to reduce rolling resistance on rough soil while concentrating the user's pushing force onto a set of interchangeable scraping tilling blades. The geometry was optimized for an upright posture to reduce lower-back strain. This project was my first venture into agricultural ergonomics, proving that even a tool with no motor requires precise mechanical design to be effective.",
        "images": [
            "single wheel weeder/IMG-20210306-WA0011.jpg",
            "single wheel weeder/IMG-20210306-WA0012.jpg",
            "https://drive.google.com/file/d/1qlYxW2owric0YihaelTV7311McBhJmjX/view"
        ]
    },
    {
        "id": 6,
        "title": "Mobile Brush Cutter (Electric)",
        "folder": "mobile brush cutter",
        "year": "2020",
        "date": "2020-2021 · GRADE 9",
        "category": "school",
        "tags": [
            "ELECTRIC CUTTER",
            "AUTOMOTIVE MOTORS",
            "ERGONOMICS"
        ],
        "shortDesc": "Electric wheeled brush cutter using automotive fan motors — eliminates shoulder-strap strain entirely.",
        "fullDesc": "Traditional petrol brush cutters are a major cause of 'White Finger Syndrome' due to high-frequency vibration and heavy shoulder-loading. I designed this electric replacement using two salvaged 12V automotive cooling fan motors from a radiator assembly. Mounted on a balanced three-wheel chassis, it transfers all mass and vibration to the ground. The dual-motor setup provides high-speed cutting for light brush and grass while operating silently compared to petrol equivalents. It was my first major effort to solve an occupational health hazard through better hardware architecture.",
        "images": [
            "mobile brush cutter/WhatsApp Image 2026-03-27 at 9.35.14 PM.jpeg"
        ]
    },
    {
        "id": 7,
        "title": "Paper Pen Making Machine",
        "folder": "paper pen amking machine",
        "year": "2020",
        "date": "2020-2021 · GRADE 9",
        "category": "school",
        "tags": [
            "AUTOMATION",
            "ECO DESIGN",

        ],
        "shortDesc": "Multi-stage machine that produces eco-friendly paper pens from recycled paper.",
        "fullDesc": "To combat plastic waste, I built a multi-stage machine to produce paper pens from recycled office paper. The machine carries out multiple operations including paper feeding/cutting, core-refill insertion, adhesive application, and rolling/pressing to form the final pen. This project helped me understand multi-stage machine design, basic automation flow, and mechanical integration.",
        "images": [
            "paper pen amking machine/20210417_094042.jpg",
            "paper pen amking machine/20210417_094046.jpg",
            "paper pen amking machine/IMG-20201230-WA0001.jpg",
            "paper pen amking machine/IMG-20201230-WA0002.jpg",
            "paper pen amking machine/IMG-20210209-WA0012.jpg",
            "paper pen amking machine/IMG-20210209-WA0014.jpg",
            "paper pen amking machine/IMG-20210209-WA0016.jpg",
            "paper pen amking machine/IMG-20210402-WA0016.jpg",
            "paper pen amking machine/IMG-20210408-WA0001.jpeg",
            "paper pen amking machine/IMG-20210408-WA0002.jpg",
            "paper pen amking machine/IMG-20210408-WA0003.jpeg",
            "paper pen amking machine/IMG-20210408-WA0004.jpg",
            "paper pen amking machine/IMG-20210408-WA0006.jpg",
            "paper pen amking machine/IMG-20210410-WA0011.jpg",
            "paper pen amking machine/IMG-20210410-WA0012.jpg",
            "paper pen amking machine/IMG-20210412-WA0001.jpg",
            "paper pen amking machine/IMG-20210412-WA0002.jpg",
            "paper pen amking machine/IMG-20210417-WA0000.jpg",
            "paper pen amking machine/IMG-20210417-WA0001.jpg",
            "paper pen amking machine/IMG-20210419-WA0006.jpeg",
            "paper pen amking machine/IMG-20210419-WA0007.jpg",
            "paper pen amking machine/IMG-20210420-WA0002.jpeg",
            "paper pen amking machine/IMG-20210420-WA0003.jpg",
            "paper pen amking machine/IMG-20210420-WA0004.jpeg",
            "paper pen amking machine/IMG-20210420-WA0005.jpg",
            "paper pen amking machine/IMG-20210420-WA0006.jpg",
            "paper pen amking machine/IMG-20210420-WA0007.jpg",
            "paper pen amking machine/IMG-20210420-WA0008.jpg",
            "paper pen amking machine/IMG-20210420-WA0009.jpg",
            "paper pen amking machine/IMG-20210420-WA0013.jpg",
            "paper pen amking machine/IMG-20210427-WA0019.jpeg",
            "paper pen amking machine/IMG-20210517-WA0010.jpg",
            "paper pen amking machine/IMG-20210517-WA0012.jpg",
            "paper pen amking machine/IMG-20210517-WA0014.jpg",
            "paper pen amking machine/IMG-20210519-WA0002.jpg",
            "paper pen amking machine/IMG-20210519-WA0004.jpg",
            "paper pen amking machine/IMG-20210519-WA0006.jpg",
            "paper pen amking machine/IMG-20210807-WA0016.jpg",
            "paper pen amking machine/IMG-20210807-WA0019.jpg",
            "paper pen amking machine/IMG-20210807-WA0020.jpg",
            "paper pen amking machine/IMG-20210812-WA0015.jpg",
            "paper pen amking machine/IMG-20210812-WA0016.jpg",
            "paper pen amking machine/IMG-20210812-WA0017.jpg",
            "paper pen amking machine/IMG-20210812-WA0018.jpg",
            "paper pen amking machine/IMG-20210812-WA0019.jpg",
            "paper pen amking machine/IMG-20210812-WA0020.jpg",
            "paper pen amking machine/IMG-20210812-WA0023.jpg",
            "paper pen amking machine/IMG-20211227-WA0003.jpg",
            "paper pen amking machine/IMG-20220101-WA0035.jpg",
            "paper pen amking machine/IMG-20220830-WA0009.jpg",
            "paper pen amking machine/IMG-20220830-WA0010.jpg",
            "paper pen amking machine/IMG-20220830-WA0011.jpg",
            "paper pen amking machine/WhatsApp Image 2026-03-27 at 9.31.57 PM.jpeg",
            "paper pen amking machine/WhatsApp Image 2026-04-09 at 5.00.33 PM.jpeg",
            "paper pen amking machine/WhatsApp Image 2026-04-09 at 5.00.57 PM.jpeg",
            "https://drive.google.com/file/d/1Yzl8Ly1cSuNdDSsVZGp41fe-SlTHX38j/view"
        ]
    },
    {
        "id": 8,
        "title": "Trolley Mounted Sprayer",
        "folder": "mobile sprayer",
        "year": "2021",
        "date": "2021-2022 · GRADE 10",
        "category": "school",
        "tags": [
            "FLUID SYSTEMS",
            ,

        ],
        "shortDesc": "150L mobile sprayer with folding boom for field spraying.",
        "fullDesc": "Spraying a full acre with a 15-liter backpack sprayer requires constant refills and physical effort. I built this 150-liter trolley-mounted sprayer to address that. It uses a 12V diaphragm pump and a fabricated folding boom for wider coverage, which can be collapsed for transport through narrow farm paths. This project focused on improving spraying efficiency and reducing manual effort during farm operations.",
        "images": [
            "mobile sprayer/WhatsApp Image 2026-04-09 at 5.00.54 PM.jpeg",
            "mobile sprayer/WhatsApp Image 2026-04-09 at 5.00.55 PM.jpeg",
            "https://drive.google.com/file/d/1nnQYvH6G8Df_L_LxZPOJIu4QblTpyGUK/view"
        ]
    },
    {
        "id": 9,
        "title": "Motorized Single Wheel Weeder",
        "folder": "motorized single wheel weeder",
        "year": "2021",
        "date": "2021-2022 · GRADE 10",
        "category": "school",
        "tags": [
            "POWERED AGRI",


        ],
        "shortDesc": "Powered version of the single wheel weeder to reduce manual effort.",
        "fullDesc": "This was the powered version of my Grade 8 single wheel weeder, which was working well but fully dependent on human effort. To reduce that, I attached a 350-watt DC motor from an electric cycle conversion kit. The motor has a built-in gearbox and was used to assist the weeding operation. This improved usability by reducing the physical effort required during operation.",
        "images": [
            "motorized single wheel weeder/WhatsApp Image 2026-03-27 at 9.17.40 PM.jpeg",
            "motorized single wheel weeder/WhatsApp Image 2026-03-27 at 9.17.41 PM.jpeg",
            "motorized single wheel weeder/WhatsApp Image 2026-03-27 at 9.17.42 PM.jpeg",
            "motorized single wheel weeder/WhatsApp Image 2026-03-27 at 9.17.48 PM.jpeg",
            "motorized single wheel weeder/WhatsApp Image 2026-03-27 at 9.18.00 PM.jpeg",
            "motorized single wheel weeder/WhatsApp Image 2026-04-09 at 4.59.18 PM.jpeg",
            "https://drive.google.com/file/d/1_ditOojxiATHmztEERZ-H5xXCF_jFca8/view",
            "https://drive.google.com/file/d/11_LJWPGtTbkmDio77TWUGAcP3hqISghB/view",
            "https://drive.google.com/file/d/1yQp7mdMx4GsrG2lN4uiLAazGaJLx8jUK/view",
            "https://drive.google.com/file/d/1Miw3EhunzmVwIzWhnPC9LNRKcNFH7XdZ/view",
            "https://drive.google.com/file/d/1hOpyAG6P4PkFJTAP2lsQlyW_VJRxpnY0/view"
        ]
    },
    {
        "id": 10,
        "title": "Handheld Finger Weeder",
        "folder": "hand heldfinger weeder",
        "year": "2022",
        "date": "2022-23 · GRADE 10/DIPLOMA",
        "category": "diploma",
        "tags": [


            "PROTOTYPE"
        ],
        "shortDesc": "Handheld weeder using spring tines for inter-row weed removal.",
        "fullDesc": "Watching laborers remove weeds manually between crops led to the development of this tool. It uses multiple piano-wire tines arranged to pass through topsoil and remove weeds while minimizing disturbance to nearby plants. This project served as an initial prototype to explore mechanical weeding concepts using flexible tine elements.",
        "images": [
            "hand heldfinger weeder/WhatsApp Image 2026-03-27 at 9.17.56 PM.jpeg",
            "hand heldfinger weeder/WhatsApp Image 2026-03-27 at 9.17.57 PM.jpeg",
            "hand heldfinger weeder/WhatsApp Image 2026-03-27 at 9.18.01 PM.jpeg",
            "hand heldfinger weeder/WhatsApp Image 2026-04-09 at 4.59.21 PM.jpeg",
            "hand heldfinger weeder/WhatsApp Image 2026-04-09 at 5.00.14 PM.jpeg",
            "hand heldfinger weeder/WhatsApp Image 2026-04-09 at 5.00.34 PM.jpeg",
            "https://drive.google.com/file/d/180hlWMX3Ypo1zaGIoyjLwJxPr6MIFI5I/view",
            "https://drive.google.com/file/d/1zuz7q9YPXMcjZ4MQ_T4NX2E59aTitUq1/view",
            "https://drive.google.com/file/d/1IppFyBGrQBEWB9DZF_PDRPKUu8K7TKbs/view",
            "https://drive.google.com/file/d/1UF1SaeMkFJhlu7J5iNzW_njg5tQ7PUPT/view",
            "https://drive.google.com/file/d/1VcT1PTctaLUKWx50HI9AUMf1MPMUsEOG/view",
            "https://drive.google.com/file/d/1bxQOZkchu3CWGTSAqXJrpDKeagC6upGI/view",
            "https://drive.google.com/file/d/17h_ONTdoYeGpjL5xGT7yDfM1xRk-cpKi/view"
        ]
    },
    {
        "id": 11,
        "title": "Pen Plotter V1 (Origin)",
        "folder": "pen plotter 1",
        "year": "2022",
        "date": "2022-2023 · DIPLOMA YEAR 1",
        "category": "diploma",
        "tags": [
            "GRBL",


        ],
        "shortDesc": "First CNC machine built from wooden blocks and syringe-cap bearings.",
        "fullDesc": "Built from wooden boards, hot glue, and an absolute engineering first: linear bearings made from lubricated syringe-plunger caps. This was my first foray into CNC logic (GRBL firmware). It was technically inadequate, imprecise, and slow—but it was a machine that could move itself in two axes with 0.5mm repeatability. It proved that if you understand the underlying mathematics of motion, you can build a working industrial machine from hospital waste.",
        "images": [
            "https://drive.google.com/file/d/1-QXfZsW6vd7IOokMDhAM6747hGoxLs_G/view"
        ]
    },
    {
        "id": 12,
        "title": "Motorized Earth Auger",
        "folder": "earth hogger",
        "year": "2022",
        "date": "2022-2023 · DIPLOMA YEAR 1",
        "category": "diploma",
        "tags": [

            "AGRI-TECH"
        ],
        "shortDesc": "Motorized earth auger for drilling holes in farm soil.",
        "fullDesc": "I built this motorized earth auger as an alternative to manual digging for applications like fence posts. It uses a DC motor (from an electric cycle conversion setup) to drive the auger mechanism. The system was designed to reduce manual effort and improve consistency while drilling holes in farm soil. This project focused on applying motorized assistance to a physically intensive agricultural task.",
        "images": [
            "https://drive.google.com/file/d/18HwrMohWJ60XKIXgsRSkUD3desjyf1tJ/view",
            "https://drive.google.com/file/d/1kMLFtRYaM5fUVRy5jxTnl8gWdT65FHdT/view"
        ]
    },
    {
        "id": 13,
        "title": "Mobile Finger Weeder (Cam-Action)",
        "folder": "mobile finger weeder",
        "year": "2023",
        "date": "2023-2024 · DIPLOMA YEAR 2",
        "category": "diploma",
        "tags": [

        ],
        "shortDesc": "Battery-powered mobile finger weeder for reducing manual effort in inter-row weeding.",
        "fullDesc": "This was a mobile version of the finger weeder concept, designed to reduce manual effort during operation. The system is powered by a battery-driven motor running at approximately 150 RPM. It was developed for practical use in farm conditions with a focus on ease of use and reducing operator strain.",
        "images": [
            "https://drive.google.com/file/d/1FfscSrd71hr0IvVHbK4DpD64y44lBe9l/view"
        ]
    },
    {
        "id": 14,
        "title": "Robotic Arm 2 (Scrap Spark)",
        "folder": "robot arm 2",
        "year": "2023",
        "date": "2023-2024 · DIPLOMA YEAR 2",
        "category": "diploma",
        "tags": [
            "WINDSHIELD MOTOR",
            "RELAY H-BRIDGE",
            "INDUSTRIAL POWER"
        ],
        "shortDesc": "Industrial-power arm driven by windshield wiper motors with an 8-relay hand-soldered H-bridge panel.",
        "fullDesc": "A brute-force exercise in industrial scrap reclamation. Driven by three automotive windshield wiper motors and controlled by a hand-soldered console of 8 high-current relays, this arm could lift 12kg at full extension. It was not built for precision; it was built for torque. It taught me how to manage high-current DC systems and why relay-based logic still has a place in heavy-duty robotics where semiconductor drivers can fail due to back-EMF.",
        "images": [
            "robot arm 2/20231210_114905.mp4",
            "robot arm 2/20231225_122606.jpg",
            "robot arm 2/20231228_122943.jpg",
            "robot arm 2/20231228_122946.mp4",
            "robot arm 2/20231228_150825.jpg",
            "robot arm 2/20231228_162122.jpg",
            "robot arm 2/20231228_162124.jpg",
            "robot arm 2/20231228_162125.jpg",
            "robot arm 2/20231228_162126.jpg",
            "robot arm 2/20231228_162128.jpg",
            "robot arm 2/20231228_163142.mp4",
            "robot arm 2/20231228_163155.mp4",
            "robot arm 2/20231228_163308.jpg",
            "robot arm 2/20231228_163316.jpg",
            "robot arm 2/20231228_163324.jpg",
            "robot arm 2/20240302_160351.mp4",
            "robot arm 2/20240302_160355.mp4",
            "robot arm 2/20240302_160440.mp4",
            "robot arm 2/WhatsApp Image 2026-04-09 at 5.00.31 PM.jpeg",
            "robot arm 2/WhatsApp Image 2026-04-09 at 5.00.42 PM.jpeg",
            "https://drive.google.com/file/d/16vVSE631qEaBF9aOzRMjsB_GQAchmz2t/view"
        ]
    },
    {
        "id": 15,
        "title": "Pen Plotter 2 (Enhanced)",
        "folder": "pen plotter 2",
        "year": "2023",
        "date": "2023-2024 · DIPLOMA YEAR 2",
        "category": "diploma",
        "tags": [

            "GRBL",

        ],
        "shortDesc": "Low-cost V-plotter built using 28BYJ-48 stepper motors.",
        "fullDesc": "This project is a low-cost V-plotter built using 28BYJ-48 stepper motors. The system was developed to achieve basic 2D plotting using inexpensive and easily available components. It focuses on simple motion control and cost-effective implementation of a plotting mechanism.",
        "images": [
            "pen plotter 2/ai_thumbnail.png",
            "pen plotter 2/WhatsApp Image 2026-04-10 at 8.33.08 AM.jpeg",
            "pen plotter 2/WhatsApp Image 2026-04-10 at 8.33.09 AM.jpeg",
            "pen plotter 2/WhatsApp Image 2026-04-10 at 8.33.20 AM.jpeg",
            "https://drive.google.com/file/d/1d8PKTjU_nuFglAf3J8LW1rdnxcc_6y_c/view",
            "https://drive.google.com/file/d/1yxfu0eDwek-MP6uXH23_leSXLa-MqK65/view"
        ]
    },
    {
        "id": 16,
        "title": "Robotic Arm 3 (Scrap X6)",
        "folder": "robot arm 3",
        "year": "2024",
        "date": "2024-2025 · DIPLOMA YEAR 3",
        "category": "diploma",
        "tags": [
            "6-AXIS",
            "ZERO-BACKLASH",
            "D-H KINEMATICS"
        ],
        "shortDesc": "6-axis robotic arm built using scrap motors and components.",
        "fullDesc": "This project is a 6-axis robotic arm built using a combination of scrap motors including stepper motors and geared DC motors. The system was developed to study multi-axis motion and basic robotic arm control. It represents a practical implementation of robotic mechanisms using available materials and components.",
        "images": [
            "robot arm 3/WhatsApp Image 2026-02-06 at 9.10.57 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-02-17 at 7.42.05 AM.jpeg",
            "robot arm 3/WhatsApp Image 2026-02-17 at 7.42.13 AM.jpeg",
            "robot arm 3/WhatsApp Image 2026-02-17 at 7.42.23 AM.jpeg",
            "robot arm 3/WhatsApp Image 2026-02-17 at 7.42.26 AM.jpeg",
            "robot arm 3/WhatsApp Image 2026-02-17 at 7.42.30 AM.jpeg",
            "robot arm 3/WhatsApp Image 2026-03-17 at 10.02.19 PM (1).jpeg",
            "robot arm 3/WhatsApp Image 2026-03-17 at 10.02.19 PM (2).jpeg",
            "robot arm 3/WhatsApp Image 2026-03-17 at 10.02.19 PM (3).jpeg",
            "robot arm 3/WhatsApp Image 2026-03-17 at 10.02.19 PM (4).jpeg",
            "robot arm 3/WhatsApp Image 2026-03-17 at 10.02.19 PM (5).jpeg",
            "robot arm 3/WhatsApp Image 2026-03-17 at 10.02.19 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-03-17 at 9.46.42 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-03-27 at 9.17.42 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-08 at 6.38.58 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-08 at 6.39.00 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-08 at 6.42.10 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-08 at 6.42.11 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-08 at 6.42.13 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-08 at 6.42.14 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-08 at 6.42.15 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-08 at 6.42.16 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-08 at 6.42.17 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-08 at 6.42.18 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-09 at 4.57.34 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-09 at 4.57.40 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-09 at 4.58.25 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-09 at 4.58.46 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-09 at 4.58.52 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-09 at 4.59.03 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-09 at 4.59.13 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-09 at 4.59.38 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-09 at 4.59.41 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-09 at 5.00.12 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-09 at 5.00.18 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-09 at 5.00.30 PM.jpeg",
            "robot arm 3/WhatsApp Image 2026-04-09 at 5.00.38 PM.jpeg",
            "https://drive.google.com/file/d/1QDPdyV1WwWyaCB8HJkpNop6jGK6Dr0zu/view",
            "https://drive.google.com/file/d/1HggYtrzABUxBqcIycukxqv3pTlU_4raL/view",
            "https://drive.google.com/file/d/1ehnfic5Mu36QVL7HUnkezrg9ex0fxJzj/view",
            "https://drive.google.com/file/d/1Qstdh4SymzSCcZqzhcEkE2p9hQFM4sbC/view",
            "https://drive.google.com/file/d/1NSzzOhbVH0-lCWtT-EKo5XEkJMta5wQp/view",
            "https://drive.google.com/file/d/1hJJTNvdxwJ6ua6KAGBylMhqjLTm-o0kd/view",
            "https://drive.google.com/file/d/1zvphopBhE4Md_KZKvPTKzkRkvef_VCtY/view"
        ]
    },
    {
        "id": 17,
        "title": "Printer 1 (DIY Build)",
        "folder": "printer 1",
        "year": "2024",
        "date": "2024-2025 · DIPLOMA YEAR 3",
        "category": "diploma",
        "tags": [
            "PCB DESIGN",
            "CUSTOM FRAME",
            "HEATED BED"
        ],
        "shortDesc": "First 3D printer build — telescopic drawer slide frame, self-etched PCB heated bed.",
        "fullDesc": "Built during a period of component scarcity, this printer used industrial telescopic drawer slides as linear rails and a custom PCB as the heated bed . Running Marlin firmware on a arduino mega, it produced its own upgrade parts. It was the machine that manufactured the components for everything that followed, closing the loop on my self-sustaining workshop.",
        "images": [
            "printer 1/ai_thumbnail.png",
            "printer 1/asc.mp4",
            "printer 1/ascasc.jpeg",
            "https://drive.google.com/file/d/1xcXZm5ViyOuT0yLc8l6hTEjIH5YBqYJD/view",
            "printer 1/das.jpeg",
            "printer 1/sad.jpeg",
            "https://drive.google.com/file/d/1VDQ6pHFxb8UFqHbdwHSgO4_52b8CvoNY/view",
            "printer 1/saxasc.jpeg",
            "printer 1/sdas.jpeg",
            "printer 1/sdx.jpeg",
            "printer 1/WhatsApp Image 2026-04-10 at 5.27.47 AM.jpeg",
            "printer 1/WhatsApp Image 2026-04-10 at 5.27.49 AM.jpeg",
            "https://drive.google.com/file/d/1u4lApe8kK_3Ov_dTFP3loq4KenqgY3lj/view",
            "https://drive.google.com/file/d/1doqgqRDMPWmi_715-ZDQ1RGugP6Uis0A/view",
            "https://drive.google.com/file/d/13u9TQa-f6S8B7O_mO-hMqBpXAM1Fa1gD/view",
            "https://drive.google.com/file/d/1OV9qq_uf5jCc-KSUkovszj06fRXWJw0V/view",
            "https://drive.google.com/file/d/1Ff6DnnkzY-9pR5U5PKJNbV6ig4xEXJRO/view",
            "https://drive.google.com/file/d/1cM9FvgfKyg2goeY3cqg5ucvxGBtLEUdb/view",
            "https://drive.google.com/file/d/1wxH0Nc3eJU_L4FjLRoeCH3u_W9q39tXd/view",
            "https://drive.google.com/file/d/1qx7DmXBEA79l-OKhdFhsTlLCTXK8WJu_/view",
            "https://drive.google.com/file/d/1-fBvFLAnLhXzq4PUgsQci9xVaJMWi2Vc/view"
        ]
    },
    {
        "id": 18,
        "title": "Battlebot Alpha",
        "folder": "battle bot",
        "year": "2025",
        "date": "2025-2026 · ENGINEERING YEAR 2",
        "category": "college",
        "tags": [
            "COMBAT ROBOTICS",
            "DYNAMICS",
            "MODULAR"
        ],
        "shortDesc": "Combat robot built for durability and high-torque mechanical interaction.",
        "fullDesc": "An exercise in structural optimization for high-impact environments. Battlebot Alpha was designed to survive 10G collisions using a unified space-frame chassis and a modular drive pod system. It taught me about shock-mounting electronics and the extreme edge cases of motor torque-to-weight ratios. While most of my work focuses on agriculture, this project pushed my understanding of mechanical failure limits.",
        "images": [
            "battle bot/drhdr.jpeg",
            "battle bot/rdydr.jpeg",
            "https://drive.google.com/file/d/1hmCuC6gghbvKcXjaHq_-Oib-L4GP0xk5/view",
            "battle bot/WhatsApp Image 2026-04-09 at 11.39.18 PM.jpeg"
        ]
    },
    {
        "id": 19,
        "title": "Classroom Line Follower (PID)",
        "folder": "line follower",
        "year": "2025",
        "date": "2025-2026 · ENGINEERING YEAR 2",
        "category": "college",
        "tags": [
            "PID CONTROL",
            "CUSTOM PCB",
            "IR ARRAY"
        ],
        "shortDesc": "PID-tuned high-speed line follower on a custom PCB — tuned using Ziegler-Nichols method.",
        "fullDesc": "Built from scratch (not a kit), this line follower features a custom 8-element IR sensor array and a full PID control loop. I performed manual tuning using the Ziegler-Nichols method to achieve a critically damped response, allowing the robot to navigate tight curves at full speed without oscillation. It was a rigorous test of my embedded C skills and my ability to map control theory into real-time silicon execution.",
        "images": [
            "line follower/WhatsApp Image 2026-04-10 at 12.48.24 PM (1).jpeg",
            "line follower/WhatsApp Image 2026-04-10 at 12.48.25 PM.jpeg",
            "https://drive.google.com/file/d/1eklvKnw1uSMSG6Jckttpa-OiJ2ogELp3/view"
        ]
    },
    {
        "id": 20,
        "title": "Micro Pen Plotter (E-Waste)",
        "folder": "pen plotter 3'",
        "year": "2025",
        "date": "2025-2026 · ENGINEERING YEAR 2",
        "category": "college",
        "tags": [

        ],
        "shortDesc": "millimeter precision mini CNC built entirely from salvaged DVD optical drive stages.",
        "fullDesc": "The XY stages of this plotter were salvaged from two broken DVD optical drives. Because these drives are designed to read tracks just a few mmwide, their lead-screw assemblies offer incredible precision (theoretically <1 mm). By coupling them to A4988 drivers with 1/16th microstepping, I created a plotter capable of drawing technical icons the size of a grain of rice. It is the ultimate proof that precision isn't about cost; it's about the intelligence of the reclamation.",
        "images": [
            "pen plotter 3'/WhatsApp Image 2026-04-09 at 11.43.09 PM.jpeg",
            "pen plotter 3'/WhatsApp Image 2026-04-09 at 11.43.11 PM.jpeg",
            "pen plotter 3'/WhatsApp Image 2026-04-09 at 11.43.12 PM.jpeg",
            "pen plotter 3'/WhatsApp Image 2026-04-09 at 11.43.13 PM.jpeg",
            "pen plotter 3'/WhatsApp Image 2026-04-09 at 11.43.14 PM.jpeg",
            "pen plotter 3'/WhatsApp Image 2026-04-09 at 11.43.15 PM.jpeg",
            "https://drive.google.com/file/d/1t8aNOlWueTXiEUiF6_YREhF6PjYEhaUS/view",
            "https://drive.google.com/file/d/14Lkbvanpcl6RGt6pfiY_xwGqLCLd0zVA/view",
            "https://drive.google.com/file/d/1yrLJ7_qtzF_8NXnu786LDqE_M093hr7q/view"
        ]
    },
    {
        "id": 21,
        "title": "Hang Plotter V4 (Polargraph)",
        "folder": "hang plotter",
        "year": "2025",
        "date": "2025-2026 · ENGINEERING YEAR 2",
        "category": "college",
        "tags": [
            "POLAR KINEMATICS",


        ],
        "shortDesc": "Fourth-generation cable-driven wall plotter with real-time sag compensation.",
        "fullDesc": "A polargraph wall plotter that solves the problem of gondola sag through real-time kinematic calculations. As the cables extend, the geometry of the triangle changes; I implemented a sag-aware firmware that adjusts the motor steps based on the calculated weight-tension curve. It can draw murals up to 2 meters wide on any vertical surface, utilizing high-torque steppers and an ESP32-based controller for wireless G-code streaming.",
        "images": [
            "hang plotter/Screenshot 2026-04-10 125106.png",
            "https://drive.google.com/file/d/1scD2JMlRauTaNxfDWu4yu_NEMwKAm_Y1/view",
            "https://drive.google.com/file/d/1OdPXvQl4hw5Y1eQxl9crg5AwKEf48vj8/view"
        ]
    },
    {
        "id": 22,
        "title": "CAT Autonomous Rover",
        "folder": "cat rover",
        "year": "2025",
        "date": "2025-2026 · ENGINEERING YEAR 2",
        "category": "college",
        "tags": [
            "TEAM PROJECT",
            "AUTONOMOUS",
            "TIG WELDING"
        ],
        "shortDesc": "Team-built Caterpillar Autonomy Challenge rover. My role: Manufacturing & Mechanical Design.",
        "fullDesc": "A full-scale, autonomous mobile platform engineered for the Caterpillar Autonomy Challenge. As the lead of the manufacturing sub-team, I was responsible for the structural integrity of the TIG-welded steel chassis and the integration of the four-wheel independence suspension. The project involved intensive coordination between mechanical mounting points and sensor field-of-view (LIDAR/Depth Cameras). It is the most complex collaborative engineering project of my career to date.",
        "images": [
            "cat rover/20251214_153039.mp4",
            "cat rover/20251214_153629.mp4",
            "cat rover/20251214_153839.mp4",
            "cat rover/20251214_155553.mp4",
            "cat rover/20251214_155558.jpg",
            "cat rover/20251214_155610.jpg",
            "cat rover/Base_V5_2025-Nov-08_03-20-37AM-000_CustomizedView472429728.png",
            "cat rover/Base_V5_2025-Nov-08_03-26-12AM-000_CustomizedView472429728_jpg.jpg",
            "cat rover/Base_V5_2025-Nov-08_03-39-15AM-000_CustomizedView14988829567_jpg.jpg",
            "cat rover/Base_V5_2025-Nov-08_04-12-19AM-000_CustomizedView16434160842_jpg.jpg",
            "cat rover/Base_V5_2025-Nov-08_04-13-12AM-000_CustomizedView30647240976_jpg.jpg",
            "cat rover/Base_V5_2025-Nov-08_04-13-50AM-000_CustomizedView16290210911_jpg.jpg",
            "cat rover/Base_V5_2025-Nov-08_04-14-23AM-000_CustomizedView27029332276_jpg.jpg",
            "cat rover/Base_V5_2025-Nov-08_04-14-59AM-000_CustomizedView44273864750_jpg.jpg",
            "cat rover/Base_V5_2025-Nov-08_04-15-33AM-000_CustomizedView36099446252_jpg.jpg",
            "cat rover/Base_V5_2025-Nov-08_04-16-57AM-000_CustomizedView15522263585_jpg.jpg",
            "cat rover/Base_V5_2025-Nov-08_04-23-06AM-000_CustomizedView7212114244_jpg.jpg",
            "cat rover/Base_V5_2025-Nov-08_04-24-27AM-000_CustomizedView2802137486_jpg.jpg",
            "cat rover/Base_V5_2025-Nov-08_04-32-14AM-000_CustomizedView3291554445_jpg.jpg",
            "cat rover/Base_V5_2025-Nov-08_04-34-49AM-000_CustomizedView6851405723_jpg.jpg",
            "https://drive.google.com/file/d/1Vcnik-idLdByHgaDm6IUTfwsUOVrkwfz/view",
            "cat rover/IMG20251214155600.jpg",
            "cat rover/IMG20251214155607.jpg",
            "https://drive.google.com/file/d/1S-dG6e_kdFT0M1sG5uclAfsfleg_5xvR/view",
            "https://drive.google.com/file/d/1ZCQmHWOHjz0MnJzk1cYJ_kEO8VLBHEG9/view",
            "https://drive.google.com/file/d/1rX1baI7LE-FBj1ioSMy1CdgGOspe4wZs/view",
            "cat rover/WhatsApp Image 2026-04-10 at 8.35.36 AM.jpeg",
            "https://drive.google.com/file/d/1RmjW3DxD3hD_DQjzC5ApHwfQTfawRupt/view",
            "https://drive.google.com/file/d/1nygCKrA-8pikx74-bWFz7GJW7BIbGs32/view",
            "https://drive.google.com/file/d/1U6YIjO9CRzN1IBCfi4DjKAHF2CjatpNe/view"
        ]
    },
    {
        "id": 23,
        "title": "Titan-Klipper 3D Printer",
        "folder": "printer 2",
        "year": "2025",
        "date": "2025-2026 · ENGINEERING YEAR 2",
        "category": "college",
        "tags": [
            "KLIPPER",
            "COREXY",
            "GLOBAL ACCESS"
        ],
        "shortDesc": "High-performance custom 3D printer with globally accessible Klipper firmware and VPN remote control.",
        "fullDesc": "My current primary manufacturing tool. Built as a CoreXY machine for maximum print speed (up to 200mm/s), it runs Klipper firmware on a old laptop. I configured a Tailscale mesh VPN node on the machine, giving me global monitoring and control via the Moonraker API and Mainsail UI from anywhere in the world. It is a fully industrial-connected manufacturing node, capable of 100+ hour continuous prints with sub-0.05mm tolerances.",
        "images": [
            "printer 2/DV.jpeg",
            "printer 2/DZDC.jpeg",
            "printer 2/WhatsApp Image 2026-03-20 at 10.18.55 PM.jpeg",
            "printer 2/WhatsApp Image 2026-03-20 at 10.19.15 PM (1).jpeg",
            "printer 2/WhatsApp Image 2026-03-20 at 10.19.15 PM (2).jpeg",
            "printer 2/WhatsApp Image 2026-03-20 at 10.19.15 PM.jpeg",
            "printer 2/WhatsApp Image 2026-03-20 at 10.19.16 PM.jpeg",
            "printer 2/WhatsApp Image 2026-03-20 at 5.37.51 PM.jpeg",
            "printer 2/WhatsApp Image 2026-03-20 at 5.37.57 PM.jpeg",
            "printer 2/WhatsApp Image 2026-03-20 at 8.45.20 PM.jpeg",
            "printer 2/WhatsApp Image 2026-04-10 at 8.35.43 AM.jpeg",
            "https://drive.google.com/file/d/1AL7LLmk6L9xeuxa2-1h-_cjXk3wrzj_J/view",
            "https://drive.google.com/file/d/1IfX_kG-SyMWlooreL168j-8y9AIsXoDo/view",
            "https://drive.google.com/file/d/1iPTWShwM_-G4MbUx-ohIFt8nw2cccwvI/view"
        ]
    },
    /* {
         "id": 24,
         "title": "Planetary Gearbox Actuator",
         "folder": "gearbox",
         "year": "2025",
         "date": "2025-2026 · ENGINEERING YEAR 2",
         "category": "college",
         "tags": [
             "GEARBOX",
             "ACTUATOR",
             "TORQUE"
         ],
         "shortDesc": "NEMA 17 coupled 35:1 dual planetary stage gearbox for high-torque robotic joints.",
         "fullDesc": "To achieve the torque densities required for high-performance robot joints without the cost of industrial harmonic drives, I designed this dual-stage planetary reducer. It features a 35.2:1 reduction ratio with a custom-profile involute gear set that I optimized for minimum backlash and maximum tooth-engagement surface area. The entire assembly integrates directly with a NEMA 17 motor and features an integrated output bearing block to handle high radial loads.",
         "images": []
     },
     {
         "id": 25,
         "title": "Follower Driver",
         "folder": "follower driver",
         "year": "2025",
         "date": "2025-2026 · ENGINEERING YEAR 2",
         "category": "college",
         "tags": [
             "PCB",
             "DRIVER",
             "POWER ELECT"
         ],
         "shortDesc": "Custom high-current motor driver board for sub-millisecond control response.",
         "fullDesc": "Standard motor drivers have inherent propagation delays and current limits that stifle high-speed line following. I designed this 50A peak H-bridge driver board using discrete MOSFETs and a high-speed gate driver IC. The PCB layout was optimized for thermal dissipation and low-inductance switching, achieving a sub-millisecond current-loop response time. This board is what allows my line follower to maintain critical damping even during erratic transition maneuvers.",
         "images": []
     }*/
];



const $bgDecor = document.getElementById('bg-decor');
const $timeline = document.getElementById('timeline');
const $overlay = document.getElementById('detail-overlay');
const $closeBtn = document.getElementById('close-overlay');
const $details = document.getElementById('project-details');
const $progress = document.getElementById('scroll-progress');
const $timelineFill = document.getElementById('timeline-fill');
const $header = document.getElementById('header');

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • 
//  DRIFTING TECH TELEMETRY
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • 
const TECH_SNIPPETS = [
    "G0 X120.4 Y50.2 Z5.0", "M3 S12000", "IF ($VEL > 50) GOTO 10",
    "G1 F500.0 X200", "STEP_RES: 1/16", "TORQUE_LIMIT: 85%",
    "LINK_STATE: SYNC", "IK_SOLVER: READY", "PID_P: 1.25",
    "VOLTAGE: 24.02V", "THERMAL: 34.5 °C", "LOAD: 12% @ CORE"
];

function initTechTelemetry() {
    if (!$bgDecor) return;
    for (let i = 0; i < 20; i++) {
        const span = document.createElement('span');
        span.className = 'bg-tech-telemetry';
        span.innerText = TECH_SNIPPETS[Math.floor(Math.random() * TECH_SNIPPETS.length)];
        span.style.left = Math.random() * 100 + '%';
        span.style.top = Math.random() * (document.body.scrollHeight || 12000) + 'px';
        span.style.opacity = (Math.random() * 0.05 + 0.02).toFixed(3);
        $bgDecor.appendChild(span);
    }
}
initTechTelemetry();
// Tesla Background Generator purged.

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • 
//  TESLA BACKGROUND GENERATOR (Grid-Sectoring)
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • 
// Tesla Parallax removed.

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • 
//  SCROLL EFFECTS
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • 
function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPerc = (scrollTop / docHeight) * 100;

    if ($progress) $progress.style.width = Math.min(100, scrollPerc) + '%';

    if ($header) $header.classList.toggle('scrolled', scrollTop > 40);

    const ts = document.getElementById('timeline-section');
    if (ts && $timelineFill) {
        const rect = ts.getBoundingClientRect();
        const total = ts.offsetHeight;
        const passed = Math.max(0, -rect.top + window.innerHeight * 0.4);
        $timelineFill.style.height = Math.min(100, (passed / total) * 100) + '%';
    }
}
window.addEventListener('scroll', onScroll, { passive: true });

// •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  
//  INTERSECTION OBSERVER
// •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); fadeObserver.unobserve(e.target); }
    });
}, { threshold: 0.1 });

// •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  
//  HELPERS
// •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  
function isVideo(path) {
    return (path.match(/\.(mp4|webm|avi|mkv)$/i) !== null);
}

function isYouTube(url) {
    return url.includes('youtube.com') || url.includes('youtu.be');
}

function getYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

function isGoogleDrive(url) {
    return url.includes('drive.google.com');
}

function getDriveId(url) {
    const match = url.match(/\/d\/(.+?)\/(view|preview|edit)?/);
    return match ? match[1] : null;
}

function encodeImagePath(path) {
    if (isYouTube(path) || isGoogleDrive(path)) return path;
    return path.split('/').map(encodeURIComponent).join('/').replace(/'/g, '%27');
}

// •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  
//  VIDEO PLAYBACK LOGIC (Smart Control)
// •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  •  
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
            video.play().catch(() => { }); // Autoplay visible
        } else {
            video.pause(); // Pause hidden
        }
    });
}, { threshold: 0.6 });

window.openProject = function (id) {
    console.log("Opening project:", id);
    const numericId = Number(id);
    const p = projects.find(x => x.id === numericId);
    if (!p) return;

    // Build Gallery
    let galleryHtml = '';
    if (p.images && p.images.length > 0) {
        galleryHtml = '<div class="project-gallery">';
        p.images.forEach(img => {
            const url = encodeImagePath(img);
            if (isYouTube(url)) {
                const id = getYouTubeId(url);
                galleryHtml += `
                    <div class="gallery-item video-container">
                        <iframe class="project-video youtube-embed" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>`;
            } else if (isVideo(url)) {
                galleryHtml += `
                    <div class="gallery-item video-container">
                        <video src="${url}" controls muted preload="auto" loop playsinline class="project-video"></video>
                    </div>`;
            } else if (isGoogleDrive(url)) {
                const driveId = getDriveId(url);
                galleryHtml += `
                    <div class="gallery-item video-container">
                        <iframe src="https://drive.google.com/file/d/${driveId}/preview" width="100%" height="400" frameborder="0" allow="autoplay" allowfullscreen></iframe>
                    </div>`;
            } else {
                galleryHtml += `
                    <div class="gallery-item">
                        <img src="${url}" alt="${p.title}" loading="lazy">
                    </div>`;
            }
        });
        galleryHtml += '</div>';
    }

    $details.innerHTML = `
        <div class="project-header">
            <span class="p-date" style="color: ${CATEGORY_COLORS[p.category]}">${p.date}   ${CATEGORY_LABELS[p.category]}</span>
            <h1>${p.title}</h1>
            <div class="p-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        </div>
        <div class="p-full-desc">${p.fullDesc}</div>
        ${galleryHtml}
    `;

    $overlay.classList.remove('hidden');

    const $overlayContent = $overlay.querySelector('.overlay-content');
    $overlayContent.scrollTop = 0;

    // Attach observer to new videos
    $overlay.querySelectorAll('.project-video').forEach(v => videoObserver.observe(v));

    $overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';

    // Auto-play the first video if it exists
    const firstVideo = $overlay.querySelector('.project-video');
    if (firstVideo) {
        setTimeout(() => firstVideo.play().catch(() => { }), 500);
    }
}

$closeBtn.addEventListener('click', () => {
    $overlay.classList.remove('visible');
    $overlay.classList.add('hidden');
    document.body.style.overflow = '';
});

$overlay.addEventListener('click', (e) => {
    if (e.target === $overlay) {
        $overlay.classList.remove('visible');
        $overlay.classList.add('hidden');
        document.body.style.overflow = '';
    }
});

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • 
//  BUILD TIMELINE
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • 
function buildTimeline() {
    let lastYear = null;

    projects.forEach((project, index) => {
        const color = CATEGORY_COLORS[project.category];
        const label = CATEGORY_LABELS[project.category];
        const hasImages = project.images && project.images.length > 0;
        let thumbUrl = null;
        let thumbIsVideo = false;

        if (hasImages) {
            thumbUrl = encodeImagePath(project.images[0]);
            if (isGoogleDrive(thumbUrl)) {
                const driveId = getDriveId(thumbUrl);
                // Try to use a direct thumbnail link for Drive items
                thumbUrl = `https://drive.google.com/uc?export=view&id=${driveId}`;
            }
            thumbIsVideo = isVideo(thumbUrl);
        }

        let thumbContentHtml = '';
        let thumbPreviewHtml = '';

        if (thumbUrl && !thumbIsVideo) {
            thumbContentHtml = `<div class="event-thumb" style="background-image:url('${thumbUrl}')"></div>`;
            thumbPreviewHtml = `<div class="preview-thumb" style="background-image:url('${thumbUrl}')"></div>`;
        } else if (thumbUrl && thumbIsVideo) {
            thumbContentHtml = `<video class="event-thumb" src="${thumbUrl}" autoplay muted loop playsinline style="object-fit:cover; pointer-events:none;"></video>`;
            thumbPreviewHtml = `<video class="preview-thumb" src="${thumbUrl}" autoplay muted loop playsinline style="object-fit:cover; pointer-events:none;"></video>`;
        } else {
            const r1 = Math.floor(Math.random() * 360);
            const gradStyle = `background: linear-gradient(135deg, hsl(${r1}, 80%, 30%), hsl(${r1 + 45}, 80%, 15%)); display:flex; align-items:center; justify-content:center;`;
            thumbContentHtml = `<div class="event-thumb" style="${gradStyle}"></div>`;
            thumbPreviewHtml = `<div class="preview-thumb" style="${gradStyle}"></div>`;
        }

        if (project.year !== lastYear) {
            lastYear = project.year;
            const divider = document.createElement('div');
            divider.className = 'year-divider';
            divider.innerHTML = `<span>${project.year}</span>`;
            $timeline.appendChild(divider);
            fadeObserver.observe(divider);
        }

        const el = document.createElement('div');
        el.className = 'event';
        el.setAttribute('data-category', project.category);
        el.style.transitionDelay = `${(index % 2) * 0.08}s`;

        const tagsHtml = project.tags.map(t => `<span class="tag">${t}</span>`).join('');

        el.innerHTML = `
            <div class="event-dot" style="background:${color}; box-shadow: 0 0 0 4px ${color}25;"></div>
            <div class="event-card" id="proj-${project.id}" tabindex="0">
                ${thumbContentHtml}
                <div class="event-card-body">
                    <span class="event-date">${project.date}</span>
                    <span class="event-category-tag" style="color:${color}; border-color:${color}30;">${label}</span>
                    <h3 class="event-title">${project.title}</h3>
                    <p class="event-short-desc">${project.shortDesc}</p>
                    <div class="event-tags">${tagsHtml}</div>
                    <div class="event-cta" style="color:${color};">View Full Project <span class="cta-arrow">→</span></div>
                </div>
            </div>
        `;

        $timeline.appendChild(el);
        fadeObserver.observe(el);
    });

    // Global Click Delegation for Project Overlays (Far more robust)
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.event-card');
        if (card) {
            const id = card.id.replace('proj-', '');
            window.openProject(id);
        }
    });
}

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • 
//  INIT & EVENTS
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • 
buildTimeline();
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });


