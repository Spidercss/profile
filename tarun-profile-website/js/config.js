/* ===================================
   CONFIGURATION FILE
   Edit this file to customize your portfolio
   =================================== */

const CONFIG = {
    // Personal Information
    personal: {
        name: "Tarun Garg",
        title: "B.Tech Graduate",
        greeting: "Hello, I'm",
        description: "B.Tech Graduate passionate about technology and innovation. Building the future, one line of code at a time.",
        
        // Typing Animation Text (will cycle through these)
        typingTexts: [
            "Software Developer",
            "Problem Solver",
            "Tech Enthusiast",
            "Full Stack Developer"
        ],
        
        // Profile Image - Replace with your image path or keep placeholder
        profileImage: null, // Set to "assets/profile.jpg" if you have an image
        profilePlaceholder: "TG" // Shows when no image is set
    },

    // About Section
    about: {
        paragraphs: [
            "I'm a recent B.Tech graduate with a passion for creating innovative solutions and exploring cutting-edge technologies. My journey in technology has been driven by curiosity and a desire to make a meaningful impact.",
            "Throughout my academic career, I've developed strong problem-solving skills and a deep understanding of software development principles. I'm always eager to learn new technologies and take on challenging projects."
        ],
        stats: [
            { number: 4, label: "Years of Study" },
            { number: 20, label: "Projects Completed" },
            { number: 10, label: "Technologies" }
        ]
    },

    // Skills Section
    skills: [
        {
            icon: "💻",
            title: "Programming",
            items: ["Python", "Java", "C++", "JavaScript"]
        },
        {
            icon: "🌐",
            title: "Web Development",
            items: ["HTML/CSS", "React", "Node.js", "MongoDB"]
        },
        {
            icon: "🗄️",
            title: "Database",
            items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
        },
        {
            icon: "🛠️",
            title: "Tools & Others",
            items: ["Git", "Docker", "Linux", "AWS"]
        }
    ],

    // Education Section
    education: [
        {
            date: "2020 - 2024",
            title: "Bachelor of Technology (B.Tech)",
            institution: "Your University Name",
            description: "Completed B.Tech degree with focus on Computer Science and Engineering. Gained comprehensive knowledge in software development, algorithms, data structures, and modern technologies."
        },
        {
            date: "2018 - 2020",
            title: "Higher Secondary Education",
            institution: "Your School Name",
            description: "Completed higher secondary education with focus on Science and Mathematics."
        }
    ],

    // Projects Section
    projects: [
        {
            icon: "🚀",
            title: "Project One",
            description: "A comprehensive web application built with modern technologies. Features include user authentication, real-time updates, and responsive design.",
            tags: ["React", "Node.js", "MongoDB"],
            demoLink: "#",
            sourceLink: "#"
        },
        {
            icon: "📱",
            title: "Project Two",
            description: "Mobile-first application with intuitive UI/UX. Implements advanced features like offline support and push notifications.",
            tags: ["Flutter", "Firebase", "API"],
            demoLink: "#",
            sourceLink: "#"
        },
        {
            icon: "🤖",
            title: "Project Three",
            description: "Machine learning project focused on solving real-world problems. Utilizes advanced algorithms for data analysis and prediction.",
            tags: ["Python", "TensorFlow", "ML"],
            demoLink: "#",
            sourceLink: "#"
        }
    ],

    // Contact Information
    contact: {
        subtitle: "Let's Connect",
        description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
        details: [
            {
                icon: "📧",
                title: "Email",
                value: "tarun.garg@example.com"
            },
            {
                icon: "📱",
                title: "Phone",
                value: "+91 XXXXX XXXXX"
            },
            {
                icon: "📍",
                title: "Location",
                value: "India"
            }
        ],
        social: [
            { name: "LinkedIn", icon: "in", url: "https://linkedin.com/in/yourprofile" },
            { name: "GitHub", icon: "gh", url: "https://github.com/yourprofile" },
            { name: "Twitter", icon: "tw", url: "https://twitter.com/yourprofile" },
            { name: "Instagram", icon: "ig", url: "https://instagram.com/yourprofile" }
        ]
    },

    // Footer
    footer: {
        text: "© 2024 Tarun Garg. All rights reserved.",
        subtext: "Built with ❤️ and creativity"
    },

    // Theme Colors (Optional - Advanced customization)
    // Uncomment and modify to change color scheme
    /*
    theme: {
        primaryColor: "#6366f1",
        secondaryColor: "#8b5cf6",
        accentColor: "#ec4899",
        bgPrimary: "#0f0f1e",
        bgSecondary: "#1a1a2e",
        bgCard: "#16213e"
    }
    */
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
