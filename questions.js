// questions.js - Все 248 вопросов из PDF
const questions = [
    {
        id: 1,
        section: "INTERACTION DESIGN INTRO",
        text: "According to the course, technology should bring people:",
        options: [
            { id: "a", text: "Apathy." },
            { id: "b", text: "Dependence." },
            { id: "c", text: "Joy." },
            { id: "d", text: "Confusion." },
            { id: "e", text: "Frustration." },
            { id: "f", text: "Complexity." }
        ],
        correctAnswer: "c",
        difficulty: "EASY"
    },
    {
        id: 2,
        section: "INTERACTION DESIGN INTRO",
        text: "Collaborative Software helps designers:",
        options: [
            { id: "a", text: "Share and iterate on designs with distributed teams." },
            { id: "b", text: "Mine cryptocurrency." },
            { id: "c", text: "Automate the entire design process." },
            { id: "d", text: "Replace the need for human communication." },
            { id: "e", text: "Prevent others from viewing their work." },
            { id: "f", text: "Encrypt files for security only." }
        ],
        correctAnswer: "a",
        difficulty: "EASY"
    },
    {
        id: 3,
        section: "INTERACTION DESIGN INTRO",
        text: "Good interaction design relies on understanding principles of:",
        options: [
            { id: "a", text: "Corporate finance." },
            { id: "b", text: "Compiler optimization." },
            { id: "c", text: "Microprocessor architecture." },
            { id: "d", text: "Network latency." },
            { id: "e", text: "Global supply chains." },
            { id: "f", text: "Perception and cognition." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 4,
        section: "INTERACTION DESIGN INTRO",
        text: "In the context of Interaction Design, why is 'prototyping' considered essential?",
        options: [
            { id: "a", text: "It is the only way to generate final production code." },
            { id: "b", text: "It allows designers to quickly test ideas and get feedback from users and teammates." },
            { id: "c", text: "It increases the cost of development significantly." },
            { id: "d", text: "It eliminates the need for any user research." },
            { id: "e", text: "It guarantees that the first design idea will be the correct one." },
            { id: "f", text: "It serves as the final documentation for the project." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 5,
        section: "INTERACTION DESIGN INTRO",
        text: "Interaction Design focuses on designing user experiences that are:",
        options: [
            { id: "a", text: "Designed primarily for automated bots." },
            { id: "b", text: "Based entirely on legacy systems." },
            { id: "c", text: "Solely functional with no regard for aesthetics." },
            { id: "d", text: "Complex and feature-heavy." },
            { id: "e", text: "Difficult to master but powerful." },
            { id: "f", text: "Joyful and frustration-free." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 6,
        section: "INTERACTION DESIGN INTRO",
        text: "Statistical Analysis is relevant to Interaction Design for:",
        options: [
            { id: "a", text: "Determining the salary of designers." },
            { id: "b", text: "Analyzing data from user experiments and A/B tests." },
            { id: "c", text: "Writing CSS stylesheets." },
            { id: "d", text: "Calculating the color values of pixels." },
            { id: "e", text: "Configuring web servers." },
            { id: "f", text: "Designing vector icons." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 7,
        section: "INTERACTION DESIGN INTRO",
        text: "Telecommuting tools are studied in Interaction Design to:",
        options: [
            { id: "a", text: "Monitor employee keystrokes." },
            { id: "b", text: "Reduce internet bandwidth." },
            { id: "c", text: "Improve the experience of remote collaboration." },
            { id: "d", text: "Replace video conferencing with text only." },
            { id: "e", text: "Eliminate the need for managers." },
            { id: "f", text: "Force everyone to work from the office." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 8,
        section: "INTERACTION DESIGN INTRO",
        text: "The concept of 'Needfinding' involves:",
        options: [
            { id: "a", text: "Reviewing outdated documentation." },
            { id: "b", text: "Ignoring user complaints." },
            { id: "c", text: "Guessing what users want." },
            { id: "d", text: "Copying features from other apps." },
            { id: "e", text: "Observing and observing users to discover unmet needs." },
            { id: "f", text: "Asking developers what is easiest to build." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 9,
        section: "INTERACTION DESIGN INTRO",
        text: "The specialization emphasizes that design ideas should originate from:",
        options: [
            { id: "a", text: "Real-world needs and user observations." },
            { id: "b", text: "Guesswork without data." },
            { id: "c", text: "Direct orders from upper management only." },
            { id: "d", text: "Random generation." },
            { id: "e", text: "Strict adherence to legacy software patterns." },
            { id: "f", text: "The designer's personal preference only." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 10,
        section: "INTERACTION DESIGN INTRO",
        text: "User Experience Design encompasses:",
        options: [
            { id: "a", text: "Only the checkout process." },
            { id: "b", text: "Only the logo design." },
            { id: "c", text: "All aspects of the end-user's interaction with the company and its services." },
            { id: "d", text: "Only the packaging of the product." },
            { id: "e", text: "Only the color scheme of the website." },
            { id: "f", text: "Only the customer support phone line." }
        ],
        correctAnswer: "c",
        difficulty: "EASY"
    },
    {
        id: 11,
        section: "INTERACTION DESIGN INTRO",
        text: "What distinguishes 'User Experience (UX) Design' from pure 'Visual Design'?",
        options: [
            { id: "a", text: "Visual Design focuses on usability testing." },
            { id: "b", text: "UX Design does not involve users." },
            { id: "c", text: "They are exactly the same thing." },
            { id: "d", text: "UX is only about coding, Visual Design is only about art." },
            { id: "e", text: "Visual design is more important than UX." },
            { id: "f", text: "UX covers the entire user journey and functionality, not just the look." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 12,
        section: "INTERACTION DESIGN INTRO",
        text: "What is 'Ideation' in the context of Interaction Design?",
        options: [
            { id: "a", text: "The legal protection of intellectual property." },
            { id: "b", text: "The process of generating broad concepts and design ideas." },
            { id: "c", text: "The phase of final bug fixing." },
            { id: "d", text: "The calculation of project budgets." },
            { id: "e", text: "The rigid implementation of a single specification." },
            { id: "f", text: "The installation of software dependencies." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 13,
        section: "INTERACTION DESIGN INTRO",
        text: "What is a 'Mockup'?",
        options: [
            { id: "a", text: "A coding error." },
            { id: "b", text: "A static visual representation of a design often used for feedback." },
            { id: "c", text: "A database schema diagram." },
            { id: "d", text: "A type of user interview." },
            { id: "e", text: "A fully functional production app." },
            { id: "f", text: "A marketing strategy." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 14,
        section: "INTERACTION DESIGN INTRO",
        text: "What is the 'Capstone Project' in the specialization intended to demonstrate?",
        options: [
            { id: "a", text: "Ability to write a 100-page academic thesis." },
            { id: "b", text: "Certification in project management software." },
            { id: "c", text: "Memorization of historical dates." },
            { id: "d", text: "Skill in hardware assembly." },
            { id: "e", text: "Application of skills from needfinding to visual design on a comprehensive project." },
            { id: "f", text: "Proficiency in advanced calculus." }
        ],
        correctAnswer: "e",
        difficulty: "EASY"
    },
    {
        id: 15,
        section: "INTERACTION DESIGN INTRO",
        text: "What is the key takeaway from the specialization's introduction?",
        options: [
            { id: "a", text: "Design is a linear process with no backtracking." },
            { id: "b", text: "Users should adapt to the software." },
            { id: "c", text: "Prototyping is a waste of time." },
            { id: "d", text: "Technology is more important than people." },
            { id: "e", text: "Design should be human-centered and iterative." },
            { id: "f", text: "The first idea is always the best." }
        ],
        correctAnswer: "e",
        difficulty: "EASY"
    },
    {
        id: 16,
        section: "INTERACTION DESIGN INTRO",
        text: "What is the main benefit of 'Storyboarding' in interaction design?",
        options: [
            { id: "a", text: "It serves as a legally binding contract." },
            { id: "b", text: "It generates production-ready graphics." },
            { id: "c", text: "It proves the mathematical correctness of an algorithm." },
            { id: "d", text: "It optimizes database query performance." },
            { id: "e", text: "It replaces the need for coding." },
            { id: "f", text: "It helps visualize the user's journey and context of use." }
        ],
        correctAnswer: "f",
        difficulty: "EASY"
    },
    {
        id: 17,
        section: "INTERACTION DESIGN INTRO",
        text: "What is the primary goal of Interaction Design as defined in the specialization?",
        options: [
            { id: "a", text: "To maximize the commercial revenue of a digital product." },
            { id: "b", text: "To design technologies that bring people joy rather than frustration." },
            { id: "c", text: "To create the most aesthetically pleasing interfaces possible." },
            { id: "d", text: "To minimize the amount of code required for a user interface." },
            { id: "e", text: "To focus solely on the hardware constraints of the device." },
            { id: "f", text: "To strictly follow the latest visual trends without deviation." }
        ],
        correctAnswer: "b",
        difficulty: "EASY"
    },
    {
        id: 18,
        section: "INTERACTION DESIGN INTRO",
        text: "What is the primary output of the 'Ideation' phase?",
        options: [
            { id: "a", text: "A termination letter." },
            { id: "b", text: "A single perfect solution." },
            { id: "c", text: "A final bill for the client." },
            { id: "d", text: "A completed codebase." },
            { id: "e", text: "A large quantity of diverse design ideas." },
            { id: "f", text: "A bug report." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 19,
        section: "INTERACTION DESIGN INTRO",
        text: "What is the relationship between 'visual design' and 'interaction design'?",
        options: [
            { id: "a", text: "Visual design principles inform effective interaction design by aiding perception." },
            { id: "b", text: "Visual design is the final step and does not affect usability." },
            { id: "c", text: "They are completely separate disciplines with no overlap." },
            { id: "d", text: "Interaction design is strictly code-based, while visual design is art." },
            { id: "e", text: "Visual design is only about marketing, not interaction." },
            { id: "f", text: "Interaction design replaces the need for visual design." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 20,
        section: "INTERACTION DESIGN INTRO",
        text: "What role does 'cognition' play in effective interaction design?",
        options: [
            { id: "a", text: "It is irrelevant to the visual layout of a screen." },
            { id: "b", text: "It restricts the use of color in user interfaces." },
            { id: "c", text: "It acts as a substitute for visual design principles." },
            { id: "d", text: "It only applies to mobile device interfaces." },
            { id: "e", text: "It informs how users perceive and understand interfaces, guiding intuitive design." },
            { id: "f", text: "It determines the processing speed of the application." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 21,
        section: "INTERACTION DESIGN INTRO",
        text: "When should 'Usability Testing' ideally occur?",
        options: [
            { id: "a", text: "Throughout the design process, including early prototypes." },
            { id: "b", text: "It is generally unnecessary for modern apps." },
            { id: "c", text: "Only after the product has launched." },
            { id: "d", text: "Before any design work has started." },
            { id: "e", text: "Only by the developers themselves." },
            { id: "f", text: "Solely during the final quality assurance phase." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 22,
        section: "INTERACTION DESIGN INTRO",
        text: "Which of the following best describes the 'Iterative Design' process?",
        options: [
            { id: "a", text: "Focusing only on the first idea generated." },
            { id: "b", text: "Designing once and releasing the product immediately." },
            { id: "c", text: "Copying the design of a competitor exactly." },
            { id: "d", text: "Changing the design randomly without user feedback." },
            { id: "e", text: "Refusing to make changes after the initial mockup." },
            { id: "f", text: "Designing, prototyping, testing, and refining in cycles." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 23,
        section: "INTERACTION DESIGN INTRO",
        text: "Which of the following is a key component of the Interaction Design process mentioned in the curriculum?",
        options: [
            { id: "a", text: "Writing production-ready code from the very first draft." },
            { id: "b", text: "Designing in isolation to preserve artistic integrity." },
            { id: "c", text: "Avoiding low-fidelity mockups in favor of high-fidelity designs." },
            { id: "d", text: "Ignoring user feedback until the final release." },
            { id: "e", text: "Rapid prototyping to get feedback from stakeholders." },
            { id: "f", text: "Focusing exclusively on back-end server logic." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 24,
        section: "INTERACTION DESIGN INTRO",
        text: "Which of the following is an example of an Interaction Design deliverable?",
        options: [
            { id: "a", text: "Compiler Warning" },
            { id: "b", text: "Legal Disclaimer." },
            { id: "c", text: "Interactive Prototype." },
            { id: "d", text: "Hardware Spec." },
            { id: "e", text: "Server Log." },
            { id: "f", text: "Financial Statement." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 25,
        section: "INTERACTION DESIGN INTRO",
        text: "Which prototyping technique involves simulating a working system without writing code?",
        options: [
            { id: "a", text: "Object-Oriented Programming." },
            { id: "b", text: "Load Balancing." },
            { id: "c", text: "Database Sharding." },
            { id: "d", text: "Wizard of Oz Prototyping." },
            { id: "e", text: "Continuous Integration." },
            { id: "f", text: "Unit Testing." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 26,
        section: "INTERACTION DESIGN INTRO",
        text: "Which skill is NOT categorized under 'Interaction Design' in the specialization introduction?",
        options: [
            { id: "a", text: "User Experience Design." },
            { id: "b", text: "Storyboarding." },
            { id: "c", text: "Prototyping." },
            { id: "d", text: "Database normalization." },
            { id: "e", text: "Heuristic evaluation." },
            { id: "f", text: "Usability Testing." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 27,
        section: "INTERACTION DESIGN INTRO",
        text: "Which stakeholder group is NOT typically a primary source of feedback for prototypes?",
        options: [
            { id: "a", text: "Potential or actual users." },
            { id: "b", text: "The design team itself." },
            { id: "c", text: "Teammates and colleagues." },
            { id: "d", text: "Product managers." },
            { id: "e", text: "Clients or business stakeholders." },
            { id: "f", text: "Competitors' legal teams." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 28,
        section: "INTERACTION DESIGN INTRO",
        text: "Why do interaction designers use 'A/B Testing'?",
        options: [
            { id: "a", text: "To verify the battery life of a mobile device." },
            { id: "b", text: "To assign difficulty levels to different features." },
            { id: "c", text: "To test the alphabetical ordering of database records." },
            { id: "d", text: "To compare two versions of a design to see which performs better with users." },
            { id: "e", text: "To check for syntax errors in the backend code." },
            { id: "f", text: "To audit the security vulnerabilities of an app." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 29,
        section: "INTERACTION DESIGN INTRO",
        text: "Why is 'Design Thinking' valuable?",
        options: [
            { id: "a", text: "It focuses solely on the aesthetics of the logo." },
            { id: "b", text: "It eliminates the need for any thinking." },
            { id: "c", text: "It prioritizes business goals over user needs." },
            { id: "d", text: "It provides a problem-solving framework focused on user needs." },
            { id: "e", text: "It restricts creativity to predefined templates." },
            { id: "f", text: "It is a rigid set of rules that cannot be broken." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 30,
        section: "INTERACTION DESIGN INTRO",
        text: "Why study 'Perception' in Interaction Design?",
        options: [
            { id: "a", text: "To understand how users physically see and process visual elements." },
            { id: "b", text: "To learn how to draw realistic portraits." },
            { id: "c", text: "To reduce electricity consumption." },
            { id: "d", text: "To improve server downtime." },
            { id: "e", text: "To measure the brightness of screens." },
            { id: "f", text: "To encrypt user passwords." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 31,
        section: "HUMAN-CENTERED DESIGN",
        text: "A 'Low-Fidelity Mockup' is useful for:",
        options: [
            { id: "a", text: "Testing server load capacity." },
            { id: "b", text: "Checking font rendering on different browsers." },
            { id: "c", text: "Testing specific color shades." },
            { id: "d", text: "Testing high-level concepts without getting distracted by visual details." },
            { id: "e", text: "Selling the final visual design to the client." },
            { id: "f", text: "Verifying pixel-perfect alignment." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 32,
        section: "HUMAN-CENTERED DESIGN",
        text: "According to the course, when should you start getting feedback on design ideas?",
        options: [
            { id: "a", text: "As early as possible, even on rough concepts." },
            { id: "b", text: "Never, designers know best." },
            { id: "c", text: "Only when the beta version is released." },
            { id: "d", text: "Once the code is fully optimized." },
            { id: "e", text: "When the client approves the budget." },
            { id: "f", text: "After the marketing campaign begins." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 33,
        section: "HUMAN-CENTERED DESIGN",
        text: "Does the course suggest that prototypes must always follow needfinding?",
        options: [
            { id: "a", text: "While beneficial, it's not strictly required; effective design can start various ways." },
            { id: "b", text: "Prototypes should never be based on needfinding." },
            { id: "c", text: "Prototypes are the only thing that matters." },
            { id: "d", text: "Needfinding is practically optional." },
            { id: "e", text: "Yes, it is a rigid law of nature." },
            { id: "f", text: "No, needfinding is useless." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 34,
        section: "HUMAN-CENTERED DESIGN",
        text: "Effective interaction design focuses on 'real people', meaning:",
        options: [
            { id: "a", text: "Designing for people who don't use technology." },
            { id: "b", text: "Designing for the CEO's preferences only." },
            { id: "c", text: "Understanding the actual users, not just assumed 'average' users." },
            { id: "d", text: "Designing for theoretical robots." },
            { id: "e", text: "Ignoring user demographics." },
            { id: "f", text: "Only designing for the developers themselves." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 35,
        section: "HUMAN-CENTERED DESIGN",
        text: "HCD stands for:",
        options: [
            { id: "a", text: "Host-Client Data." },
            { id: "b", text: "Hybrid-Cloud Deployment." },
            { id: "c", text: "Human-Centered Design." },
            { id: "d", text: "High-Component Design." },
            { id: "e", text: "Human-Computer Development." },
            { id: "f", text: "Hardware-Central Development." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 36,
        section: "HUMAN-CENTERED DESIGN",
        text: "Helping people 'recover from errors' refers to which heuristic concept?",
        options: [
            { id: "a", text: "Preventing the user from ever making a mistake." },
            { id: "b", text: "Creating unrecoverable fatal errors." },
            { id: "c", text: "Blaming the user for the mistake." },
            { id: "d", text: "Hiding errors so the user doesn't see them." },
            { id: "e", text: "Good error messages and undo functions." },
            { id: "f", text: "Automatically rebooting the computer." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 37,
        section: "HUMAN-CENTERED DESIGN",
        text: "Heuristic Evaluation involves:",
        options: [
            { id: "a", text: "Evaluating a user interface against a set of established usability principles." },
            { id: "b", text: "Running automated unit tests." },
            { id: "c", text: "Asked users to score the design." },
            { id: "d", text: "Calculating the financial ROI." },
            { id: "e", text: "Checking the code for syntax errors." },
            { id: "f", text: "Measuring the time to load a page." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 38,
        section: "HUMAN-CENTERED DESIGN",
        text: "Heuristics in interaction design are:",
        options: [
            { id: "a", text: "Rules of thumb or guidelines for good design." },
            { id: "b", text: "Arbitrary opinions of the boss." },
            { id: "c", text: "Strict laws that can never be broken." },
            { id: "d", text: "Marketing slogans." },
            { id: "e", text: "Complex mathematical formulas." },
            { id: "f", text: "Hardware specifications." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 39,
        section: "HUMAN-CENTERED DESIGN",
        text: "In HCD, 'Interviewing Skills' are crucial for:",
        options: [
            { id: "a", text: "Speaking to the press." },
            { id: "b", text: "Extracting unbiased and useful information from users." },
            { id: "c", text: "Hiring new employees." },
            { id: "d", text: "Teaching a class." },
            { id: "e", text: "Interrogating suspects." },
            { id: "f", text: "Debating with colleagues." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 40,
        section: "HUMAN-CENTERED DESIGN",
        text: "Interaction Design Specialization includes a focus on:",
        options: [
            { id: "a", text: "Designing technologies that are hard to use." },
            { id: "b", text: "Designing compiler infrastructure." },
            { id: "c", text: "Designing technologies that bring joy." },
            { id: "d", text: "Designing technologies for machines only." },
            { id: "e", text: "Designing hardware circuits." },
            { id: "f", text: "Designing technologies that manipulate users." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 41,
        section: "HUMAN-CENTERED DESIGN",
        text: "Iterative design implies that you should:",
        options: [
            { id: "a", text: "Release the first draft as the final product." },
            { id: "b", text: "Avoid testing until the end." },
            { id: "c", text: "Stick to your original plan no matter what." },
            { id: "d", text: "Change the design everyday for no reason." },
            { id: "e", text: "Never show incomplete work to anyone." },
            { id: "f", text: "Revise your ideas as much as you like based on feedback." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 42,
        section: "HUMAN-CENTERED DESIGN",
        text: "One of the key heuristics mentioned is 'Feedback'. What does this mean?",
        options: [
            { id: "a", text: "The system should clearly communicate what is happening to the user." },
            { id: "b", text: "The system sends error logs to the server." },
            { id: "c", text: "The user should give feedback to the developer." },
            { id: "d", text: "The microphone creates a loud noise." },
            { id: "e", text: "The screen vibrates constantly." },
            { id: "f", text: "The user feedback form is visible." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 43,
        section: "HUMAN-CENTERED DESIGN",
        text: "Polishing a design is meant to:",
        options: [
            { id: "a", text: "Hide the flaws." },
            { id: "b", text: "Make it run slower." },
            { id: "c", text: "Make it look expensive." },
            { id: "d", text: "Confuse individual users." },
            { id: "e", text: "Double the price." },
            { id: "f", text: "Get the design right after finding the right design." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 44,
        section: "HUMAN-CENTERED DESIGN",
        text: "The course states that good ideas come from:",
        options: [
            { id: "a", text: "Lots of places, but especially observation and talking to people." },
            { id: "b", text: "A random number generator." },
            { id: "c", text: "Strictly from copying competitors." },
            { id: "d", text: "Only from textbooks." },
            { id: "e", text: "Only from senior management." },
            { id: "f", text: "Divination." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 45,
        section: "HUMAN-CENTERED DESIGN",
        text: "User Research is categorized as:",
        options: [
            { id: "a", text: "A technical engineering task." },
            { id: "b", text: "An optional add-on." },
            { id: "c", text: "A legal requirement." },
            { id: "d", text: "A marketing activity only." },
            { id: "e", text: "A visual design task." },
            { id: "f", text: "A fundamental skill for understanding user needs." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 46,
        section: "HUMAN-CENTERED DESIGN",
        text: "What does 'Needfinding' directly inform?",
        options: [
            { id: "a", text: "The choice of programming language." },
            { id: "b", text: "The server architecture." },
            { id: "c", text: "The office seating chart." },
            { id: "d", text: "The generation of design goals and ideas." },
            { id: "e", text: "The payroll system." },
            { id: "f", text: "The legal terms of service." }
        ],
        correctAnswer: "d",
        difficulty: "EASY"
    },
    {
        id: 47,
        section: "HUMAN-CENTERED DESIGN",
        text: "What is 'Participant Observation'?",
        options: [
            { id: "a", text: "Watching people in their real-world context to understand their needs." },
            { id: "b", text: "Reading books about user behavior." },
            { id: "c", text: "Analyzing server logs." },
            { id: "d", text: "Asked people to fill out a written survey." },
            { id: "e", text: "Watching video tutorials." },
            { id: "f", text: "Observing other designers at work." }
        ],
        correctAnswer: "a",
        difficulty: "EASY"
    },
    {
        id: 48,
        section: "HUMAN-CENTERED DESIGN",
        text: "What is a major benefit of 'Paper Prototyping'?",
        options: [
            { id: "a", text: "It looks exactly like the final app." },
            { id: "b", text: "It can be compiled into code." },
            { id: "c", text: "It is resistant to physical damage." },
            { id: "d", text: "It is low-cost and allows for easy changes during early stages." },
            { id: "e", text: "It requires expensive software licenses." },
            { id: "f", text: "It supports complex animations naturally." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 49,
        section: "HUMAN-CENTERED DESIGN",
        text: "What is the 'Wizard of Oz' prototyping technique?",
        options: [
            { id: "a", text: "An automated AI testing framework." },
            { id: "b", text: "A design style based on fantasy movies." },
            { id: "c", text: "A way to build fully functional backends quickly." },
            { id: "d", text: "A rigorous statistical method." },
            { id: "e", text: "A method where a human simulates the response of a system behind the scenes." },
            { id: "f", text: "A magical software tool that generates code." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 50,
        section: "HUMAN-CENTERED DESIGN",
        text: "What is the difference between 'Needfinding' and 'Prototyping'?",
        options: [
            { id: "a", text: "Prototyping comes before Needfinding." },
            { id: "b", text: "Needfinding is expensive; Prototyping is free." },
            { id: "c", text: "Prototyping is for users; Needfinding is for managers." },
            { id: "d", text: "Needfinding identifies the problem; Prototyping explores the solution." },
            { id: "e", text: "They are synonymous." },
            { id: "f", text: "Needfinding is for code; Prototyping is for design." }
        ],
        correctAnswer: "d",
        difficulty: "EASY"
    },
    {
        id: 51,
        section: "HUMAN-CENTERED DESIGN",
        text: "What is the main goal of 'Brainstorming'?",
        options: [
            { id: "a", text: "To finalize the budget." },
            { id: "b", text: "To document existing features." },
            { id: "c", text: "To create a silent working environment." },
            { id: "d", text: "To generate a large volume of ideas without immediate judgment." },
            { id: "e", text: "To criticize every idea immediately." },
            { id: "f", text: "To find the one correct answer." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 52,
        section: "HUMAN-CENTERED DESIGN",
        text: "What is the purpose of 'Storyboarding' in an HCD context?",
        options: [
            { id: "a", text: "To describe the user experience flow over time." },
            { id: "b", text: "To plan the company retreat." },
            { id: "c", text: "To design the database schema." },
            { id: "d", text: "To create marketing billboards." },
            { id: "e", text: "To write the dialogue for a movie." },
            { id: "f", text: "To detailedly document the code functions." }
        ],
        correctAnswer: "a",
        difficulty: "EASY"
    },
    {
        id: 53,
        section: "HUMAN-CENTERED DESIGN",
        text: "What is the relationship between 'Prototypes' and 'Stakeholders'?",
        options: [
            { id: "a", text: "Prototypes help achieve common ground and facilitate communication." },
            { id: "b", text: "Stakeholders build the prototypes." },
            { id: "c", text: "Prototypes confuse stakeholders." },
            { id: "d", text: "Stakeholders should never see prototypes." },
            { id: "e", text: "Prototypes are only for user testing, not business checks." },
            { id: "f", text: "Stakeholders only care about the final code." }
        ],
        correctAnswer: "a",
        difficulty: "EASY"
    },
    {
        id: 54,
        section: "HUMAN-CENTERED DESIGN",
        text: "What is the role of 'Fieldwork' in HCD?",
        options: [
            { id: "a", text: "Planting trees in a field." },
            { id: "b", text: "Testing Wi-Fi signal strength outdoors." },
            { id: "c", text: "Working remotely from a park." },
            { id: "d", text: "Going out into the real world to observe users in their environment." },
            { id: "e", text: "Reading textbooks in a library." },
            { id: "f", text: "Writing code in a coffee shop." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 55,
        section: "HUMAN-CENTERED DESIGN",
        text: "Which is NOT a module in the HCD course?",
        options: [
            { id: "a", text: "Advanced Kernel compilation." },
            { id: "b", text: "Heuristics." },
            { id: "c", text: "Needfinding." },
            { id: "d", text: "Design Principles (is a separate course)." },
            { id: "e", text: "Prototyping." },
            { id: "f", text: "Input and Interaction (is a separate course)." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 56,
        section: "HUMAN-CENTERED DESIGN",
        text: "Which is a valid deliverable for 'Storyboarding'?",
        options: [
            { id: "a", text: "A UML class diagram." },
            { id: "b", text: "A 3D printed model." },
            { id: "c", text: "A compiled Java JAR file." },
            { id: "d", text: "A SQL database script." },
            { id: "e", text: "A financial spreadsheet." },
            { id: "f", text: "A comic-strip style sequence of user actions." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 57,
        section: "HUMAN-CENTERED DESIGN",
        text: "Which of the following describes a 'Wizard of Oz' experiment?",
        options: [
            { id: "a", text: "A computer generates random responses." },
            { id: "b", text: "A fully automated AI handles the interaction." },
            { id: "c", text: "The interface is controlled by eye tracking." },
            { id: "d", text: "A user watches a movie about a wizard." },
            { id: "e", text: "A user interacts with a voice system, but a human types the responses." },
            { id: "f", text: "The user is hypnotized." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 58,
        section: "HUMAN-CENTERED DESIGN",
        text: "Why combine 'Observation' with 'Interviewing'?",
        options: [
            { id: "a", text: "Observation is not reliable on its own." },
            { id: "b", text: "It creates more paperwork." },
            { id: "c", text: "Observation shows what people do; interviewing reveals why they do it." },
            { id: "d", text: "It fills up the time allotted for research." },
            { id: "e", text: "Interviewing distracts the user during observation." },
            { id: "f", text: "It is required for IRB approval only." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 59,
        section: "HUMAN-CENTERED DESIGN",
        text: "Why do we create 'Design Goals'?",
        options: [
            { id: "a", text: "To choose the font family first." },
            { id: "b", text: "To inflate the project scope." },
            { id: "c", text: "To determine the lunch menu." },
            { id: "d", text: "To satisfy bureaucratic requirements." },
            { id: "e", text: "To bridge the gap between high-level needs and concrete ideas." },
            { id: "f", text: "To restrict the creativity of the team." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 60,
        section: "HUMAN-CENTERED DESIGN",
        text: "Why is 'Rapid Prototyping' essential to Human-Centered Design?",
        options: [
            { id: "a", text: "It allows for evaluating multiple alternatives quickly." },
            { id: "b", text: "It creates the final product in one step." },
            { id: "c", text: "It eliminates the need for user testing." },
            { id: "d", text: "It is required by law." },
            { id: "e", text: "It uses the most expensive materials." },
            { id: "f", text: "It guarantees zero bugs." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 61,
        section: "HUMAN-CENTERED DESIGN",
        text: "Why is it recommended to generate 'multiple interface alternatives'?",
        options: [
            { id: "a", text: "To keep the design team busy." },
            { id: "b", text: "To delay the project launch." },
            { id: "c", text: "To use up the budget." },
            { id: "d", text: "Because the first idea is rarely the best, and comparison reveals strengths." },
            { id: "e", text: "To ensure job security." },
            { id: "f", text: "To confuse the client." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 62,
        section: "HUMAN-CENTERED DESIGN",
        text: "Why use 'Video' in prototyping?",
        options: [
            { id: "a", text: "To test the camera hardware." },
            { id: "b", text: "To ensure high frame rates." },
            { id: "c", text: "To demonstrate the context and flow of usage simply." },
            { id: "d", text: "To win an Oscar." },
            { id: "e", text: "To record meetings." },
            { id: "f", text: "To replace the user manual." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 63,
        section: "DESIGN PRINCIPLES",
        text: "'Layout' in design refers to:",
        options: [
            { id: "a", text: "The folder structure of the code." },
            { id: "b", text: "The network topology." },
            { id: "c", text: "The seating arrangement in the office." },
            { id: "d", text: "The manufacturing process." },
            { id: "e", text: "The database schema." },
            { id: "f", text: "The spatial arrangement of elements on the screen." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 64,
        section: "DESIGN PRINCIPLES",
        text: "'Usability Testing' often involves tasks that:",
        options: [
            { id: "a", text: "Test the durability of the mouse." },
            { id: "b", text: "Ask users to complete specific actions while observing difficulties." },
            { id: "c", text: "Measure the user's typing speed only." },
            { id: "d", text: "Ask users to pay for the software." },
            { id: "e", text: "Ask users to redesign the logo." },
            { id: "f", text: "Require users to write code." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 65,
        section: "DESIGN PRINCIPLES",
        text: "A 'Grid System' helps in:",
        options: [
            { id: "a", text: "Encrypting passwords." },
            { id: "b", text: "Blocking spam." },
            { id: "c", text: "Creating balanced and aligned layouts." },
            { id: "d", text: "Generating electricity." },
            { id: "e", text: "Locking the screen." },
            { id: "f", text: "Compressing video files." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 66,
        section: "DESIGN PRINCIPLES",
        text: "Cognition in interaction design refers to:",
        options: [
            { id: "a", text: "The battery capacity of the device." },
            { id: "b", text: "The physical durability of the screen." },
            { id: "c", text: "The heat generated by the CPU." },
            { id: "d", text: "The refresh rate of the monitor." },
            { id: "e", text: "The compilation time of the software." },
            { id: "f", text: "How users process, remember, and make decisions based on information." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 67,
        section: "DESIGN PRINCIPLES",
        text: "Design Research typically includes:",
        options: [
            { id: "a", text: "Checking stock prices." },
            { id: "b", text: "Understanding user behaviors, needs, and motivations." },
            { id: "c", text: "Finding the cheapest hosting provider." },
            { id: "d", text: "Looking up syntax in documentation." },
            { id: "e", text: "Reading sci-fi novels." },
            { id: "f", text: "Researching new processor speeds." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 68,
        section: "DESIGN PRINCIPLES",
        text: "Design principles apply to:",
        options: [
            { id: "a", text: "Any technology, not just the web." },
            { id: "b", text: "Only print media." },
            { id: "c", text: "Only hardware devices." },
            { id: "d", text: "Only desktop software." },
            { id: "e", text: "Only mobile apps." },
            { id: "f", text: "Only websites." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 69,
        section: "DESIGN PRINCIPLES",
        text: "Design principles help organize information to reduce:",
        options: [
            { id: "a", text: "Developer salary." },
            { id: "b", text: "Electricity usage." },
            { id: "c", text: "User confusion and cognitive load." },
            { id: "d", text: "The number of users." },
            { id: "e", text: "Network traffic." },
            { id: "f", text: "Server disk space." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 70,
        section: "DESIGN PRINCIPLES",
        text: "Effectively evaluating work with users helps to:",
        options: [
            { id: "a", text: "Prove the users are wrong." },
            { id: "b", text: "Reduce the software quality." },
            { id: "c", text: "Generate artificial traffic." },
            { id: "d", text: "Increase the development time." },
            { id: "e", text: "Validate design decisions and identify usability issues." },
            { id: "f", text: "Hide features from the public." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 71,
        section: "DESIGN PRINCIPLES",
        text: "Evaluating 'whether one design works better than another' typically involves:",
        options: [
            { id: "a", text: "Counting the number of pixels." },
            { id: "b", text: "A/B testing or comparative evaluation." },
            { id: "c", text: "Asked the CEO." },
            { id: "d", text: "Flipping a coin." },
            { id: "e", text: "Checking the file size." },
            { id: "f", text: "Guessing." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 72,
        section: "DESIGN PRINCIPLES",
        text: "How does 'Typography' influence the user interface?",
        options: [
            { id: "a", text: "It affects readability, tone, and the hierarchy of information." },
            { id: "b", text: "It is only decorative and has no functional value." },
            { id: "c", text: "It automatically generates content." },
            { id: "d", text: "It prevents security breaches." },
            { id: "e", text: "It replaces using images entirely." },
            { id: "f", text: "It increases the download speed of the app." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 73,
        section: "DESIGN PRINCIPLES",
        text: "In the context of design principles, why is 'Perception' important?",
        options: [
            { id: "a", text: "It is a legal requirement for copyright." },
            { id: "b", text: "It controls the speed of the internet connection." },
            { id: "c", text: "It is only relevant for virtual reality." },
            { id: "d", text: "It replaces the need for user testing." },
            { id: "e", text: "It is used to calculate the budget." },
            { id: "f", text: "It determines how users physically register information from the interface." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 74,
        section: "DESIGN PRINCIPLES",
        text: "In visual design, 'Contrast' is used to:",
        options: [
            { id: "a", text: "Reduce the file size of images." },
            { id: "b", text: "Hide important information." },
            { id: "c", text: "Make the text unreadable." },
            { id: "d", text: "Make everything look the same." },
            { id: "e", text: "Distinguish elements and direct attention." },
            { id: "f", text: "Blur the background." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 75,
        section: "DESIGN PRINCIPLES",
        text: "Perception and Cognition informs:",
        options: [
            { id: "a", text: "Office aesthetics." },
            { id: "b", text: "Supply chain logistics." },
            { id: "c", text: "Legal compliance." },
            { id: "d", text: "Effective interaction design decisions." },
            { id: "e", text: "Hardware pricing." },
            { id: "f", text: "Customer support scripts." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 76,
        section: "DESIGN PRINCIPLES",
        text: "The principle of 'Feedback' ensures that:",
        options: [
            { id: "a", text: "The screen turns off to save power." },
            { id: "b", text: "The system automatically shuts down." },
            { id: "c", text: "The sound volume is always at maximum." },
            { id: "d", text: "The developer receives a bug report." },
            { id: "e", text: "The user knows the outcome of their action immediately." },
            { id: "f", text: "The user is forced to rate the app." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 77,
        section: "DESIGN PRINCIPLES",
        text: "The ultimate goal of applying design principles is to:",
        options: [
            { id: "a", text: "Make the product expensive." },
            { id: "b", text: "Confuse the user." },
            { id: "c", text: "Use the most colors possible." },
            { id: "d", text: "Create art for galleries." },
            { id: "e", text: "Create excellent interfaces with any technology." },
            { id: "f", text: "Win design awards only." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 78,
        section: "DESIGN PRINCIPLES",
        text: "Understanding 'Perception' helps designers:",
        options: [
            { id: "a", text: "Fix hardware bugs." },
            { id: "b", text: "Ensure key information is noticed and legible." },
            { id: "c", text: "Manage project timelines." },
            { id: "d", text: "Write better database queries." },
            { id: "e", text: "Negotiate contracts." },
            { id: "f", text: "Predict stock market trends." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 79,
        section: "DESIGN PRINCIPLES",
        text: "Visual Design principles are essential because:",
        options: [
            { id: "a", text: "They make the file size larger." },
            { id: "b", text: "They are required by the government." },
            { id: "c", text: "They allow the designer to show off." },
            { id: "d", text: "They facilitate communication and usability through clear presentation." },
            { id: "e", text: "They prevent the software from crashing." },
            { id: "f", text: "They increase battery usage." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 80,
        section: "DESIGN PRINCIPLES",
        text: "Web technologies are mentioned in the course primarily to:",
        options: [
            { id: "a", text: "Replace native app development." },
            { id: "b", text: "Discourage mobile usage." },
            { id: "c", text: "Promote a specific browser." },
            { id: "d", text: "Focus solely on backend logic." },
            { id: "e", text: "Support the goal of building general human-centered design skills." },
            { id: "f", text: "Teach advanced JavaScript frameworks." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 81,
        section: "DESIGN PRINCIPLES",
        text: "What defines a 'Human-Centered' approach compared to 'Technology-Centered'?",
        options: [
            { id: "a", text: "It prioritizes system efficiency over usability." },
            { id: "b", text: "It adapts technology to people, rather than forcing people to adapt to technology." },
            { id: "c", text: "It requires users to learn complex code." },
            { id: "d", text: "It designs for machines first." },
            { id: "e", text: "It ignores accessibility." },
            { id: "f", text: "It focuses on using the newest features regardless of need." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 82,
        section: "DESIGN PRINCIPLES",
        text: "What does 'Affordance' refer to in design?",
        options: [
            { id: "a", text: "The legal ownership of the code." },
            { id: "b", text: "Clues about how an object should be used (e.g., a button looks clickable)." },
            { id: "c", text: "The salary of the designer." },
            { id: "d", text: "The price of the software." },
            { id: "e", text: "The load capacity of the server." },
            { id: "f", text: "The backward compatibility of the OS." }
        ],
        correctAnswer: "b",
        difficulty: "EASY"
    },
    {
        id: 83,
        section: "DESIGN PRINCIPLES",
        text: "What does 'Experimentation' allow designers to do?",
        options: [
            { id: "a", text: "Ignore user needs." },
            { id: "b", text: "Delay the release indefinitely." },
            { id: "c", text: "Avoid making any decisions." },
            { id: "d", text: "Make random changes for fun." },
            { id: "e", text: "Increase the bug count." },
            { id: "f", text: "Test hypotheses about design effectiveness with data." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 84,
        section: "DESIGN PRINCIPLES",
        text: "What does a 'Human-Centered Design' approach primarily prioritize?",
        options: [
            { id: "a", text: "Strict adherence to legacy software manuals." },
            { id: "b", text: "The cheapest possible manufacturing method." },
            { id: "c", text: "The personal artistic vision of the CEO." },
            { id: "d", text: "The needs, abilities, and limitations of the human users." },
            { id: "e", text: "The aesthetics of the code structure." },
            { id: "f", text: "The preferences of the database administrator." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 85,
        section: "DESIGN PRINCIPLES",
        text: "What is the goal of an 'Intuitive Interface'?",
        options: [
            { id: "a", text: "To allow users to operate it effectively with minimal instruction." },
            { id: "b", text: "To require a thick user manual." },
            { id: "c", text: "To look as complex as possible." },
            { id: "d", text: "To force users to memorize keyboard shortcuts." },
            { id: "e", text: "To hide all functionality behind varying menus." },
            { id: "f", text: "To prevent unauthorized access." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 86,
        section: "DESIGN PRINCIPLES",
        text: "What is the primary purpose of 'Controlled Experiments' in design?",
        options: [
            { id: "a", text: "To stress test the server hardware." },
            { id: "b", text: "To create chaos in the database." },
            { id: "c", text: "To scientifically compare design alternatives under specific conditions." },
            { id: "d", text: "To manipulate users into buying products." },
            { id: "e", text: "To hack into competitor systems." },
            { id: "f", text: "To replace the need for designers." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 87,
        section: "DESIGN PRINCIPLES",
        text: "When organizing information, 'Proximity' means:",
        options: [
            { id: "a", text: "Overlapping all text." },
            { id: "b", text: "Putting everything far apart." },
            { id: "c", text: "Making all fonts the same size." },
            { id: "d", text: "Grouping related items close together." },
            { id: "e", text: "Using the same color for everything." },
            { id: "f", text: "Hiding items in submenus." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 88,
        section: "DESIGN PRINCIPLES",
        text: "Which design principle helps users organize and understand information efficiently?",
        options: [
            { id: "a", text: "Visual Hierarchy." },
            { id: "b", text: "Randomization." },
            { id: "c", text: "Compression." },
            { id: "d", text: "Encryption." },
            { id: "e", text: "Obfuscation." },
            { id: "f", text: "Virtualization." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 89,
        section: "DESIGN PRINCIPLES",
        text: "Which element is crucial for establishing 'Visual Design' consistency?",
        options: [
            { id: "a", text: "Using every color available in the spectrum." },
            { id: "b", text: "Using a different font on every page." },
            { id: "c", text: "A consistent color palette and grid system." },
            { id: "d", text: "Avoiding alignment of elements." },
            { id: "e", text: "Changing the logo size arbitrarily." },
            { id: "f", text: "Randomizing button locations." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 90,
        section: "DESIGN PRINCIPLES",
        text: "Which factor relates to 'Cognitive Load'?",
        options: [
            { id: "a", text: "The electricity bill." },
            { id: "b", text: "The weight of the computer." },
            { id: "c", text: "The number of lines of code." },
            { id: "d", text: "The speed of the processor." },
            { id: "e", text: "The number of pixels on the screen." },
            { id: "f", text: "The amount of mental effort required to use the interface." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 91,
        section: "DESIGN PRINCIPLES",
        text: "Which is NOT a fundamental principle of visual design?",
        options: [
            { id: "a", text: "Contrast." },
            { id: "b", text: "Repetition." },
            { id: "c", text: "Proximity." },
            { id: "d", text: "Alignment." },
            { id: "e", text: "Balance." },
            { id: "f", text: "Compiler Optimization." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 92,
        section: "DESIGN PRINCIPLES",
        text: "Which of the following describes 'Mental Models'?",
        options: [
            { id: "a", text: "A 3D printed prototype." },
            { id: "b", text: "A psychological disorder." },
            { id: "c", text: "A legal contract between designer and client." },
            { id: "d", text: "A flowchart of the backend architecture." },
            { id: "e", text: "A feature of the CPU." },
            { id: "f", text: "A user's internal understanding of how a system works based on prior experience." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 93,
        section: "DESIGN PRINCIPLES",
        text: "Why is 'Information Architecture' important?",
        options: [
            { id: "a", text: "It designs the aesthetic logo." },
            { id: "b", text: "It manages the payroll." },
            { id: "c", text: "It writes the marketing copy." },
            { id: "d", text: "It structures content so users can find what they need easily." },
            { id: "e", text: "It compiles the source code." },
            { id: "f", text: "It builds the physical servers." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 94,
        section: "DESIGN PRINCIPLES",
        text: "Why use 'Web Design' as an anchoring domain for learning interaction design?",
        options: [
            { id: "a", text: "Because web browsers are the only software in existence." },
            { id: "b", text: "Because the web is the only platform that matters." },
            { id: "c", text: "Because web design is easier than everything else." },
            { id: "d", text: "Because the instructors only know HTML." },
            { id: "e", text: "Because mobile apps are becoming obsolete." },
            { id: "f", text: "Because web examples are ubiquitous and the principles apply universally." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 95,
        section: "SOCIAL COMPUTING",
        text: "A key issue in 'Remote Access Systems' for work is:",
        options: [
            { id: "a", text: "Providing free coffee." },
            { id: "b", text: "Buying comfortable chairs." },
            { id: "c", text: "Parking space allocation." },
            { id: "d", text: "Cleaning the office." },
            { id: "e", text: "Office temperature control." },
            { id: "f", text: "Maintaining productivity and connection without physical oversight." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 96,
        section: "SOCIAL COMPUTING",
        text: "A professional crowdworker's perspective is valuable to:",
        options: [
            { id: "a", text: "Trick them into working for free." },
            { id: "b", text: "Ignore their complaints." },
            { id: "c", text: "Reduce their pay." },
            { id: "d", text: "Ban them from the platform." },
            { id: "e", text: "Understand what makes tasks successful and fair." },
            { id: "f", text: "Exploit them more effectively." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 97,
        section: "SOCIAL COMPUTING",
        text: "Being 'instantly reachable from anywhere' differs from 'being there' because:",
        options: [
            { id: "a", text: "It is faster." },
            { id: "b", text: "It lacks the rich context and nuance of physical presence." },
            { id: "c", text: "It is illegal." },
            { id: "d", text: "It uses more data." },
            { id: "e", text: "It requires a passport." },
            { id: "f", text: "It is more expensive." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 98,
        section: "SOCIAL COMPUTING",
        text: "Collaborative software goes beyond 'being there' by:",
        options: [
            { id: "a", text: "Teleporting molecules." },
            { id: "b", text: "Creating a physical hologram." },
            { id: "c", text: "Replacing humans with AI entirely." },
            { id: "d", text: "Enabling asynchronous work and global reach." },
            { id: "e", text: "Stopping time." },
            { id: "f", text: "Cloning employees." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 99,
        section: "SOCIAL COMPUTING",
        text: "Crowdsourcing can be limited by:",
        options: [
            { id: "a", text: "The unlimited intelligence of the crowd." },
            { id: "b", text: "The infinite speed of the internet." },
            { id: "c", text: "The lack of computers in the world." },
            { id: "d", text: "The absence of electricity." },
            { id: "e", text: "The complexity of tasks that cannot be easily broken down." },
            { id: "f", text: "The flawless nature of all humans." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 100,
        section: "SOCIAL COMPUTING",
        text: "Crowdsourcing involves:",
        options: [
            { id: "a", text: "Slicing challenging problems into pieces and distributing them to many people." },
            { id: "b", text: "Creating a large crowd in a virtual reality game." },
            { id: "c", text: "Running a computer cluster in the cloud." },
            { id: "d", text: "Funding a project through banks." },
            { id: "e", text: "Asking a single expert for help." },
            { id: "f", text: "Hosting a physical conference." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 101,
        section: "SOCIAL COMPUTING",
        text: "Designing for 'this reality' of distance involves:",
        options: [
            { id: "a", text: "Using only paper mail." },
            { id: "b", text: "Pretending everyone is in the same room." },
            { id: "c", text: "Forcing everyone to move to one city." },
            { id: "d", text: "Ignoring the distance." },
            { id: "e", text: "Stopping all remote work." },
            { id: "f", text: "Creating tools that bridge the gap of physical separation." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 102,
        section: "SOCIAL COMPUTING",
        text: "In crowdsourcing, a 'microtask' is:",
        options: [
            { id: "a", text: "A very small computer." },
            { id: "b", text: "A task that takes 1 microsecond." },
            { id: "c", text: "A hidden background process." },
            { id: "d", text: "A microscope analysis." },
            { id: "e", text: "A task for ants." },
            { id: "f", text: "A tiny piece of a larger problem distributed to workers." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 103,
        section: "SOCIAL COMPUTING",
        text: "One assignment in Social Computing involves:",
        options: [
            { id: "a", text: "Hacking a website." },
            { id: "b", text: "Building a server farm." },
            { id: "c", text: "Mining Bitcoin." },
            { id: "d", text: "Installing Windows." },
            { id: "e", text: "Repairing a keyboard." },
            { id: "f", text: "Trying out crowdsourcing yourself." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 104,
        section: "SOCIAL COMPUTING",
        text: "Online communities allow for:",
        options: [
            { id: "a", text: "Connections across geographic boundaries." },
            { id: "b", text: "Sharing physical food." },
            { id: "c", text: "Smelling the environment." },
            { id: "d", text: "Direct physical conflict." },
            { id: "e", text: "Physical handshakes." },
            { id: "f", text: "Touch-based healing." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 105,
        section: "SOCIAL COMPUTING",
        text: "Social Computing design must consider:",
        options: [
            { id: "a", text: "Social norms and group dynamics." },
            { id: "b", text: "Only the color blue." },
            { id: "c", text: "Only database schema efficiency." },
            { id: "d", text: "Only offline modes." },
            { id: "e", text: "Only single-user scenarios." },
            { id: "f", text: "Only hardware drivers." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 106,
        section: "SOCIAL COMPUTING",
        text: "Social Impact of computing refers to:",
        options: [
            { id: "a", text: "How technology affects society and human relationships." },
            { id: "b", text: "The sound of the keyboard." },
            { id: "c", text: "The brand of the monitor." },
            { id: "d", text: "The color of the computer case." },
            { id: "e", text: "The heat output of the server farm." },
            { id: "f", text: "The physical weight of the computer on a desk." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 107,
        section: "SOCIAL COMPUTING",
        text: "Social Network Analysis focuses on:",
        options: [
            { id: "a", text: "Hacking social media accounts." },
            { id: "b", text: "Critiquing the UI of Facebook." },
            { id: "c", text: "Analyzing the structures and relationships within social groups." },
            { id: "d", text: "Installing routers." },
            { id: "e", text: "Counting the number of likes manually." },
            { id: "f", text: "Repairing network cables." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 108,
        section: "SOCIAL COMPUTING",
        text: "Social Network Analysis helps visualize:",
        options: [
            { id: "a", text: "The traffic on a highway." },
            { id: "b", text: "The flow of information and influence between nodes (people)." },
            { id: "c", text: "The flow of water." },
            { id: "d", text: "The logic of a CPU." },
            { id: "e", text: "The memory usage of an app." },
            { id: "f", text: "The flow of electricity." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 109,
        section: "SOCIAL COMPUTING",
        text: "Successful crowdsourcing requires:",
        options: [
            { id: "a", text: "Using a single worker." },
            { id: "b", text: "Paying zero money." },
            { id: "c", text: "Banning all communication." },
            { id: "d", text: "Hiding the instructions." },
            { id: "e", text: "Strategies for quality control and worker motivation." },
            { id: "f", text: "Ignoring the results." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 110,
        section: "SOCIAL COMPUTING",
        text: "Technology has made collaboration at a distance:",
        options: [
            { id: "a", text: "Impossible." },
            { id: "b", text: "Worse than ever." },
            { id: "c", text: "Possible in new ways." },
            { id: "d", text: "Illegal globally." },
            { id: "e", text: "Non-existent." },
            { id: "f", text: "Unnecessary." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 111,
        section: "SOCIAL COMPUTING",
        text: "The 'Modern Internet' reflects that humans are:",
        options: [
            { id: "a", text: "Disconnected entities." },
            { id: "b", text: "Solitary beings." },
            { id: "c", text: "Purely logical machines." },
            { id: "d", text: "Identical clones." },
            { id: "e", text: "Social creatures." },
            { id: "f", text: "Silent observers." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 112,
        section: "SOCIAL COMPUTING",
        text: "The 'universe of social media' described in the course includes:",
        options: [
            { id: "a", text: "Only email." },
            { id: "b", text: "Only SMS." },
            { id: "c", text: "Only LinkedIn." },
            { id: "d", text: "Much more than just Facebook and Twitter." },
            { id: "e", text: "Only Facebook." },
            { id: "f", text: "Only Twitter." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 113,
        section: "SOCIAL COMPUTING",
        text: "The course asks: What are the challenges to success for:",
        options: [
            { id: "a", text: "Single-player games." },
            { id: "b", text: "Digital watches." },
            { id: "c", text: "Microwaves." },
            { id: "d", text: "Calculators." },
            { id: "e", text: "Traffic lights." },
            { id: "f", text: "Collaborative software." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 114,
        section: "SOCIAL COMPUTING",
        text: "The course states that most everything we do has a social component that is:",
        options: [
            { id: "a", text: "Unrelated to technology." },
            { id: "b", text: "Completely isolated." },
            { id: "c", text: "Impossible to capture online." },
            { id: "d", text: "Mediated by some technology." },
            { id: "e", text: "Restricted to face-to-face interaction." },
            { id: "f", text: "Only relevant for teenagers." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 115,
        section: "SOCIAL COMPUTING",
        text: "Understanding 'Group Behavior' is central to:",
        options: [
            { id: "a", text: "Computer Graphics." },
            { id: "b", text: "Compiler Design." },
            { id: "c", text: "Embedded Systems." },
            { id: "d", text: "Network Security." },
            { id: "e", text: "Social Computing." },
            { id: "f", text: "Operating Systems." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 116,
        section: "SOCIAL COMPUTING",
        text: "What challenge does 'Telecommuting' present?",
        options: [
            { id: "a", text: "Wearing a suit every day." },
            { id: "b", text: "Too much office noise." },
            { id: "c", text: "Isolation and lack of informal communication." },
            { id: "d", text: "Commuting traffic jams." },
            { id: "e", text: "Lack of internet at the office." },
            { id: "f", text: "Finding a parking spot." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 117,
        section: "SOCIAL COMPUTING",
        text: "What does 'Digital Collaboration' frame similarly to?",
        options: [
            { id: "a", text: "Cooking." },
            { id: "b", text: "Sleeping." },
            { id: "c", text: "Physical collaboration." },
            { id: "d", text: "Running." },
            { id: "e", text: "Gardening." },
            { id: "f", text: "Painting." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 118,
        section: "SOCIAL COMPUTING",
        text: "What does the course say about 'Collaboration at a Distance'?",
        options: [
            { id: "a", text: "It solves all management problems." },
            { id: "b", text: "It is impossible to work effectively remotely." },
            { id: "c", text: "It removes all need for communication." },
            { id: "d", text: "It requires VR headsets for everyone." },
            { id: "e", text: "It is exactly the same as face-to-face." },
            { id: "f", text: "It presents unique challenges but allows for new forms of interaction." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 119,
        section: "SOCIAL COMPUTING",
        text: "What is 'Digital Communications' in this context?",
        options: [
            { id: "a", text: "Using a telegraph." },
            { id: "b", text: "Speaking in binary code." },
            { id: "c", text: "Sending paper mail." },
            { id: "d", text: "Yelling at a computer." },
            { id: "e", text: "Talking to a robot." },
            { id: "f", text: "Exchange of information through digital platforms." }
        ],
        correctAnswer: "f",
        difficulty: "EASY"
    },
    {
        id: 120,
        section: "SOCIAL COMPUTING",
        text: "What is 'Social Computing'?",
        options: [
            { id: "a", text: "The study of how technology mediates social interaction and collaboration." },
            { id: "b", text: "A government program for free internet." },
            { id: "c", text: "Repairing computers for charity." },
            { id: "d", text: "Building computers with friends." },
            { id: "e", text: "Computing done at a party." },
            { id: "f", text: "Using social media for marketing only." }
        ],
        correctAnswer: "a",
        difficulty: "EASY"
    },
    {
        id: 121,
        section: "SOCIAL COMPUTING",
        text: "Which is a major platform type for Social Computing?",
        options: [
            { id: "a", text: "Social Networks." },
            { id: "b", text: "Disk Defragmenters." },
            { id: "c", text: "Compilers." },
            { id: "d", text: "Bios settings." },
            { id: "e", text: "Bootloaders." },
            { id: "f", text: "Spreadsheets (standalone)." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 122,
        section: "SOCIAL COMPUTING",
        text: "Which is an example of 'Social Software'?",
        options: [
            { id: "a", text: "A desktop antivirus scanner." },
            { id: "b", text: "Microsoft Word 95 (offline)." },
            { id: "c", text: "A compiler." },
            { id: "d", text: "A heavy calculator app." },
            { id: "e", text: "Wikis, social networks, and collaborative editors." },
            { id: "f", text: "A single-player offline game." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 123,
        section: "SOCIAL COMPUTING",
        text: "Which of the following is a key challenge in online communities?",
        options: [
            { id: "a", text: "Buying the domain name." },
            { id: "b", text: "Choosing a logo color." },
            { id: "c", text: "Establishing trust and managing conflict at a distance." },
            { id: "d", text: "Installing the software." },
            { id: "e", text: "Connecting to Wi-Fi." },
            { id: "f", text: "Compressing images." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 124,
        section: "SOCIAL COMPUTING",
        text: "Which technology is an example of 'Collaborative Software'?",
        options: [
            { id: "a", text: "Windows Notepad." },
            { id: "b", text: "WinZip." },
            { id: "c", text: "Screensaver." },
            { id: "d", text: "Google Docs." },
            { id: "e", text: "Calculator." },
            { id: "f", text: "Disconnect." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 125,
        section: "SOCIAL COMPUTING",
        text: "Who is the instructor for Social Computing?",
        options: [
            { id: "a", text: "Bill Gates." },
            { id: "b", text: "Steve Jobs." },
            { id: "c", text: "Scott Klemmer." },
            { id: "d", text: "Elon Musk." },
            { id: "e", text: "Tim Berners-Lee." },
            { id: "f", text: "Mark Zuckerberg." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 126,
        section: "SOCIAL COMPUTING",
        text: "Why is 'Driving Engagement' important in social computing?",
        options: [
            { id: "a", text: "It drains the battery." },
            { id: "b", text: "It forces users to pay." },
            { id: "c", text: "It prevents users from logging off." },
            { id: "d", text: "It increases server load unnecessarily." },
            { id: "e", text: "It annoys users effectively." },
            { id: "f", text: "It ensures the community remains active and sustainable." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 127,
        section: "INPUT & INTERACTION",
        text: "A 'Natural' interface typically aims to:",
        options: [
            { id: "a", text: "Work without electricity." },
            { id: "b", text: "Grow like a plant." },
            { id: "c", text: "Use green colors." },
            { id: "d", text: "Be made of wood." },
            { id: "e", text: "Mimic real-world interactions (like grasping/pointing)." },
            { id: "f", text: "Be biodegradable." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 128,
        section: "INPUT & INTERACTION",
        text: "A 'touch point' in prototyping refers to:",
        options: [
            { id: "a", text: "The power button." },
            { id: "b", text: "A finger on the screen." },
            { id: "c", text: "The charging port." },
            { id: "d", text: "A warm area of the device." },
            { id: "e", text: "Specific moments where a user interacts with the system/service." },
            { id: "f", text: "A broken pixel." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 129,
        section: "INPUT & INTERACTION",
        text: "Designing 'smart things' implies:",
        options: [
            { id: "a", text: "Ignoring the user." },
            { id: "b", text: "Making things expensive." },
            { id: "c", text: "Designing hardware/software hybrids with usability in mind." },
            { id: "d", text: "Only using voice control." },
            { id: "e", text: "Removing all buttons." },
            { id: "f", text: "Using AI for everything." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 130,
        section: "INPUT & INTERACTION",
        text: "Effectively evaluating multiple interface alternatives is:",
        options: [
            { id: "a", text: "Impossible." },
            { id: "b", text: "Too expensive." },
            { id: "c", text: "Critical for selecting the best design." },
            { id: "d", text: "A waste of time." },
            { id: "e", text: "Only for research labs." },
            { id: "f", text: "Illegal." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 131,
        section: "INPUT & INTERACTION",
        text: "Fitts' Law is likely used to model:",
        options: [
            { id: "a", text: "The probability of a server crash." },
            { id: "b", text: "The time required to rapidly move to a target area (e.g., a button)." },
            { id: "c", text: "The pixel density of screens." },
            { id: "d", text: "The legal copyright duration." },
            { id: "e", text: "The growth of transistor density." },
            { id: "f", text: "The price of hardware over time." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 132,
        section: "INPUT & INTERACTION",
        text: "Gestural interfaces are often described as:",
        options: [
            { id: "a", text: "Slow and clunky." },
            { id: "b", text: "Only for gaming." },
            { id: "c", text: "Non-interactive." },
            { id: "d", text: "Solely text-based." },
            { id: "e", text: "More direct and natural than WIMP but harder to learn." },
            { id: "f", text: "Impossible to implement." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 133,
        section: "INPUT & INTERACTION",
        text: "Good input design considers:",
        options: [
            { id: "a", text: "Only what looks cool." },
            { id: "b", text: "More than just preference; it includes performance and ergonomics." },
            { id: "c", text: "Only what the developer likes." },
            { id: "d", text: "Only what is patented." },
            { id: "e", text: "The oldest technology available." },
            { id: "f", text: "The most expensive option." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 134,
        section: "INPUT & INTERACTION",
        text: "Good search design helps users:",
        options: [
            { id: "a", text: "Defragment the disk." },
            { id: "b", text: "Buy more ads." },
            { id: "c", text: "Reset their password." },
            { id: "d", text: "Crash the browser." },
            { id: "e", text: "Navigate vast amounts of data efficiently." },
            { id: "f", text: "Get lost." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 135,
        section: "INPUT & INTERACTION",
        text: "Human Factors engineering applies knowledge of:",
        options: [
            { id: "a", text: "Human capabilities and limitations to system design." },
            { id: "b", text: "History of art." },
            { id: "c", text: "Astronomy." },
            { id: "d", text: "Political science." },
            { id: "e", text: "Stock market trends." },
            { id: "f", text: "Geology." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 136,
        section: "INPUT & INTERACTION",
        text: "Human-Computer Interaction (HCI) fundamentals include:",
        options: [
            { id: "a", text: "Perception, cognition, and motor performance." },
            { id: "b", text: "Voltage, Amperage." },
            { id: "c", text: "HTML, CSS, and JS." },
            { id: "d", text: "Java, Python, C++." },
            { id: "e", text: "SQL, NoSQL." },
            { id: "f", text: "TCP/IP." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 137,
        section: "INPUT & INTERACTION",
        text: "Information Architecture (IA) in the context of Input helps:",
        options: [
            { id: "a", text: "Design the microchip." },
            { id: "b", text: "Write the EULA." },
            { id: "c", text: "Manage the payroll." },
            { id: "d", text: "Structure how finding and asking for information works." },
            { id: "e", text: "Compile the code." },
            { id: "f", text: "Build the computer case." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 138,
        section: "INPUT & INTERACTION",
        text: "Input devices mentioned in the context of diversity include:",
        options: [
            { id: "a", text: "Only keyboards." },
            { id: "b", text: "Only punch cards." },
            { id: "c", text: "Only MRI scanners." },
            { id: "d", text: "Only joysticks." },
            { id: "e", text: "Only voice commands." },
            { id: "f", text: "Fingertips, pointers, and gestures." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 139,
        section: "INPUT & INTERACTION",
        text: "Input techniques should be evaluated based on:",
        options: [
            { id: "a", text: "Their relative merits for the specific task." },
            { id: "b", text: "If they use a touchscreen." },
            { id: "c", text: "How expensive they are." },
            { id: "d", text: "If they are wireless." },
            { id: "e", text: "How futuristic they look." },
            { id: "f", text: "If they are brand new." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 140,
        section: "INPUT & INTERACTION",
        text: "Prototyping input techniques helps to:",
        options: [
            { id: "a", text: "Verify the plastic quality." },
            { id: "b", text: "None of the above." },
            { id: "c", text: "Ensure the logo is visible." },
            { id: "d", text: "Make the device heavier." },
            { id: "e", text: "Check the battery life." },
            { id: "f", text: "Test the feel and efficiency before manufacturing." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 141,
        section: "INPUT & INTERACTION",
        text: "Search design is central to 21st-century HCI because:",
        options: [
            { id: "a", text: "Users love typing." },
            { id: "b", text: "It replaces the operating system." },
            { id: "c", text: "Finding what we want in an information-rich world is a primary difficulty." },
            { id: "d", text: "It makes the screen brighter." },
            { id: "e", text: "Google pays for it." },
            { id: "f", text: "It is required for SQL." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 142,
        section: "INPUT & INTERACTION",
        text: "The 'command line' interface is characterized by:",
        options: [
            { id: "a", text: "Drag and drop." },
            { id: "b", text: "Voice control." },
            { id: "c", text: "Touch gestures." },
            { id: "d", text: "Mind control." },
            { id: "e", text: "Text-based input commands." },
            { id: "f", text: "3D graphics." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 143,
        section: "INPUT & INTERACTION",
        text: "The course argues that 'Input' deserves to be on equal footing with:",
        options: [
            { id: "a", text: "Output." },
            { id: "b", text: "Storage." },
            { id: "c", text: "Networking." },
            { id: "d", text: "Processing." },
            { id: "e", text: "Marketing." },
            { id: "f", text: "Finance." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 144,
        section: "INPUT & INTERACTION",
        text: "The diversity of input devices allows for:",
        options: [
            { id: "a", text: "User confusion." },
            { id: "b", text: "Vendor lock-in." },
            { id: "c", text: "Different interaction styles suitable for different contexts." },
            { id: "d", text: "Higher prices." },
            { id: "e", text: "Slower computers." },
            { id: "f", text: "More cables." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 145,
        section: "INPUT & INTERACTION",
        text: "The physical action of 'clicking' is constrained by:",
        options: [
            { id: "a", text: "The copyright law." },
            { id: "b", text: "The font size." },
            { id: "c", text: "The color of the mouse." },
            { id: "d", text: "Human biomechanics." },
            { id: "e", text: "The internet speed." },
            { id: "f", text: "The weather." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 146,
        section: "INPUT & INTERACTION",
        text: "The transition from Command Line to WIMP took:",
        options: [
            { id: "a", text: "5 minutes." },
            { id: "b", text: "100 years." },
            { id: "c", text: "1 year." },
            { id: "d", text: "It never happened." },
            { id: "e", text: "It happened instantly." },
            { id: "f", text: "Approx. 20 years to go from labs to homes." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 147,
        section: "INPUT & INTERACTION",
        text: "Tracing input 'from the fingertip to the screen' involves:",
        options: [
            { id: "a", text: "Touching the screen constantly." },
            { id: "b", text: "Cleaning the screen." },
            { id: "c", text: "Using a stylus only." },
            { id: "d", text: "Wearing gloves." },
            { id: "e", text: "Using a fingerprint scanner." },
            { id: "f", text: "Understanding the entire stack of hardware and software processing interaction." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 148,
        section: "INPUT & INTERACTION",
        text: "User Interface (UI) design focuses on:",
        options: [
            { id: "a", text: "The HR department." },
            { id: "b", text: "The server room layout." },
            { id: "c", text: "The backend database." },
            { id: "d", text: "The marketing strategy." },
            { id: "e", text: "The cafeteria menu." },
            { id: "f", text: "The visual and interactive elements of software interaction." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 149,
        section: "INPUT & INTERACTION",
        text: "What is 'WIMP' relevant to in interaction history?",
        options: [
            { id: "a", text: "Wireless Internet Mobile Protocol." },
            { id: "b", text: "Web Interface Management Platform." },
            { id: "c", text: "Windows, Icons, Menus, Pointer." },
            { id: "d", text: "Wide Input Mouse Pad." },
            { id: "e", text: "Whitespace, Indentation, Margins, Padding." },
            { id: "f", text: "Writing, Imaging, Managing, Printing." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 150,
        section: "INPUT & INTERACTION",
        text: "What is a potential downside of 'Gestural Interfaces' compared to WIMP?",
        options: [
            { id: "a", text: "They are only for old computers." },
            { id: "b", text: "They can be frustrating if not designed well (lack of affordance/feedback)." },
            { id: "c", text: "They never fail." },
            { id: "d", text: "They require a keyboard." },
            { id: "e", text: "They are too cheap to produce." },
            { id: "f", text: "They are too precise." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 151,
        section: "INPUT & INTERACTION",
        text: "What is the hardest part of interaction in an information-rich world?",
        options: [
            { id: "a", text: "Turning the computer on." },
            { id: "b", text: "Typing fast enough." },
            { id: "c", text: "Installing the OS." },
            { id: "d", text: "Finding what we want or knowing what to ask for." },
            { id: "e", text: "Buying the device." },
            { id: "f", text: "Reading the text." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 152,
        section: "INPUT & INTERACTION",
        text: "Which is NOT part of WIMP?",
        options: [
            { id: "a", text: "Pointer." },
            { id: "b", text: "Keyboard shortcuts only." },
            { id: "c", text: "Menus." },
            { id: "d", text: "Icons." },
            { id: "e", text: "Windows." },
            { id: "f", text: "GUI elements." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 153,
        section: "INPUT & INTERACTION",
        text: "Which is an example of a Human Factor in design?",
        options: [
            { id: "a", text: "Reaction time and accuracy." },
            { id: "b", text: "Screen resolution." },
            { id: "c", text: "Network bandwidth." },
            { id: "d", text: "CPU clock speed." },
            { id: "e", text: "Hard drive size." },
            { id: "f", text: "RAM capacity." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 154,
        section: "INPUT & INTERACTION",
        text: "Why can input be modeled mathematically?",
        options: [
            { id: "a", text: "Because users are robots." },
            { id: "b", text: "Because computers are good at math." },
            { id: "c", text: "Because keyboards have numbers." },
            { id: "d", text: "It cannot be modeled." },
            { id: "e", text: "Because human motor movement follows predictable physical laws." },
            { id: "f", text: "Because math is required for coding." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 155,
        section: "INPUT & INTERACTION",
        text: "Why is 'Human Motor Performance' relevant to effective interaction design?",
        options: [
            { id: "a", text: "It is only relevant for robotics." },
            { id: "b", text: "It determines how fast the motor in the fan spins." },
            { id: "c", text: "It speeds up the CPU." },
            { id: "d", text: "It informs how quickly and accurately users can perform input tasks (e.g., clicking)." },
            { id: "e", text: "It is used to calculate car mileage." },
            { id: "f", text: "It replaces the need for a mouse." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 156,
        section: "INPUT & INTERACTION",
        text: "Why is 'Output' often more popular than 'Input'?",
        options: [
            { id: "a", text: "Because visual displays are flashy and obvious." },
            { id: "b", text: "Because keyboards are ugly." },
            { id: "c", text: "Because screens are cheap." },
            { id: "d", text: "Because sound is annoying." },
            { id: "e", text: "Because input is useless." },
            { id: "f", text: "Because users don't interact." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 157,
        section: "UX RESEARCH",
        text: "'Synthesis' involves:",
        options: [
            { id: "a", text: "Encrypting data." },
            { id: "b", text: "Printing data." },
            { id: "c", text: "Deleting data." },
            { id: "d", text: "Making sense of rich data to turn it into insights." },
            { id: "e", text: "Creating fake data." },
            { id: "f", text: "Writing a summary." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 158,
        section: "UX RESEARCH",
        text: "A 'Journey Map' is used to:",
        options: [
            { id: "a", text: "Track the project timeline." },
            { id: "b", text: "Navigate the file system." },
            { id: "c", text: "Visualize the user's experience over time across different touchpoints." },
            { id: "d", text: "Design the database schema." },
            { id: "e", text: "Plan a road trip." },
            { id: "f", text: "Map the office layout." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 159,
        section: "UX RESEARCH",
        text: "A 'Walkthrough' prototype involves:",
        options: [
            { id: "a", text: "Walking the dog." },
            { id: "b", text: "Walking in the park." },
            { id: "c", text: "Touring the office." },
            { id: "d", text: "A video game walkthrough." },
            { id: "e", text: "Walking away." },
            { id: "f", text: "Stepping through the user's process physically or mentally." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 160,
        section: "UX RESEARCH",
        text: "An 'actionable insight' is:",
        options: [
            { id: "a", text: "A bug report." },
            { id: "b", text: "A random fact." },
            { id: "c", text: "A compliment." },
            { id: "d", text: "A statistic." },
            { id: "e", text: "A complaint." },
            { id: "f", text: "A finding that points directly to a design opportunity." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 161,
        section: "UX RESEARCH",
        text: "Design Thinking emphasizes:",
        options: [
            { id: "a", text: "Profit margins." },
            { id: "b", text: "Empathy for the user." },
            { id: "c", text: "Code efficiency." },
            { id: "d", text: "Visual aesthetics only." },
            { id: "e", text: "Hardware speed." },
            { id: "f", text: "Brand loyalty." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 162,
        section: "UX RESEARCH",
        text: "Generating lists of questions happens:",
        options: [
            { id: "a", text: "Never." },
            { id: "b", text: "After launch." },
            { id: "c", text: "In the shower." },
            { id: "d", text: "Before and during the research phase." },
            { id: "e", text: "Only at the end." },
            { id: "f", text: "During the holiday party." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 163,
        section: "UX RESEARCH",
        text: "Going out to talk to people in their everyday context provides:",
        options: [
            { id: "a", text: "A new perspective free from assumptions." },
            { id: "b", text: "Free lunch." },
            { id: "c", text: "Nothing useful." },
            { id: "d", text: "Distraction." },
            { id: "e", text: "Stress." },
            { id: "f", text: "Exercise." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 164,
        section: "UX RESEARCH",
        text: "Ideation techniques help designers:",
        options: [
            { id: "a", text: "Clean the office." },
            { id: "b", text: "Hire staff." },
            { id: "c", text: "Generate a wide variety of solutions." },
            { id: "d", text: "Determine the budget." },
            { id: "e", text: "Minimize the number of ideas." },
            { id: "f", text: "Pick colors." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 165,
        section: "UX RESEARCH",
        text: "Identifying an 'Opportunity Area' includes defining:",
        options: [
            { id: "a", text: "A focus, a stakeholder, a need, and an insight." },
            { id: "b", text: "A logo and color." },
            { id: "c", text: "A competitor and market." },
            { id: "d", text: "A manager and developer." },
            { id: "e", text: "A budget and timeline." },
            { id: "f", text: "A server and database." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 166,
        section: "UX RESEARCH",
        text: "Innovation in UX often comes from:",
        options: [
            { id: "a", text: "Changing the font." },
            { id: "b", text: "Working harder." },
            { id: "c", text: "Using blockchain." },
            { id: "d", text: "Reframing the problem based on user insights." },
            { id: "e", text: "Buying new computers." },
            { id: "f", text: "Ignoring users." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 167,
        section: "UX RESEARCH",
        text: "Judgment during brainstorming should be:",
        options: [
            { id: "a", text: "Harsh." },
            { id: "b", text: "Immediate." },
            { id: "c", text: "Suspended/Deferred." },
            { id: "d", text: "Required." },
            { id: "e", text: "Encouraged." },
            { id: "f", text: "Final." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 168,
        section: "UX RESEARCH",
        text: "Making ideas 'tangible' means:",
        options: [
            { id: "a", text: "Deleting them." },
            { id: "b", text: "Patenting them." },
            { id: "c", text: "Thinking about them." },
            { id: "d", text: "Selling them." },
            { id: "e", text: "Writing them down." },
            { id: "f", text: "Creating physical or visual representations (prototypes)." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 169,
        section: "UX RESEARCH",
        text: "Role-playing is a form of prototyping that helps to:",
        options: [
            { id: "a", text: "Review code." },
            { id: "b", text: "Write screenplays." },
            { id: "c", text: "Test server load." },
            { id: "d", text: "Play games." },
            { id: "e", text: "Act out interaction scenarios to uncover issues." },
            { id: "f", text: "Train for acting careers." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 170,
        section: "UX RESEARCH",
        text: "Sticky notes are commonly used for:",
        options: [
            { id: "a", text: "Decorating walls." },
            { id: "b", text: "Affinity diagramming and ideation." },
            { id: "c", text: "Labeling food." },
            { id: "d", text: "Writing grocery lists." },
            { id: "e", text: "Bookmark pages." },
            { id: "f", text: "Cleaning monitors." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 171,
        section: "UX RESEARCH",
        text: "Testing ideas with different people helps to:",
        options: [
            { id: "a", text: "Answer critical questions and push the idea forward." },
            { id: "b", text: "Sell product." },
            { id: "c", text: "Show off." },
            { id: "d", text: "Recruit them." },
            { id: "e", text: "Prove them wrong." },
            { id: "f", text: "Annoy them." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 172,
        section: "UX RESEARCH",
        text: "The first step for generating great user experiences is:",
        options: [
            { id: "a", text: "Understanding what people do, think, say, and feel." },
            { id: "b", text: "Designing the logo." },
            { id: "c", text: "Assuming you know what they want." },
            { id: "d", text: "Picking a color palette." },
            { id: "e", text: "Hiring a marketing team." },
            { id: "f", text: "Writing code immediately." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 173,
        section: "UX RESEARCH",
        text: "Understanding the 'larger systems' in which users interact is part of:",
        options: [
            { id: "a", text: "Coding." },
            { id: "b", text: "Unit Testing." },
            { id: "c", text: "Research/Observation." },
            { id: "d", text: "Deploying." },
            { id: "e", text: "Graphic Design." },
            { id: "f", text: "Debugging." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 174,
        section: "UX RESEARCH",
        text: "User Centered Design puts the user at the:",
        options: [
            { id: "a", text: "Outside of the building." },
            { id: "b", text: "End of the line." },
            { id: "c", text: "Bottom of the hierarchy." },
            { id: "d", text: "Back of the room." },
            { id: "e", text: "Center of the development process." },
            { id: "f", text: "In the cloud." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 175,
        section: "UX RESEARCH",
        text: "Validating user experiences requires:",
        options: [
            { id: "a", text: "Reviewing requirements." },
            { id: "b", text: "Testing with actual users." },
            { id: "c", text: "Passing unit tests." },
            { id: "d", text: "Assuming success." },
            { id: "e", text: "Asked the developer." },
            { id: "f", text: "Checking compliance." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 176,
        section: "UX RESEARCH",
        text: "What is 'Fixation' in ideation?",
        options: [
            { id: "a", text: "A stable release." },
            { id: "b", text: "Fixing bugs." },
            { id: "c", text: "A permanent job." },
            { id: "d", text: "A pitfall where designers get stuck on their first idea." },
            { id: "e", text: "Glueing the prototype together." },
            { id: "f", text: "Staring at the screen." }
        ],
        correctAnswer: "d",
        difficulty: "EASY"
    },
    {
        id: 177,
        section: "UX RESEARCH",
        text: "What is a 'Persona' in UX research?",
        options: [
            { id: "a", text: "The brand mascot." },
            { id: "b", text: "The personality of the CEO." },
            { id: "c", text: "A masked user." },
            { id: "d", text: "A real specific person's biography." },
            { id: "e", text: "Anonymous login." },
            { id: "f", text: "A fictional character created to represent a user type." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 178,
        section: "UX RESEARCH",
        text: "What is the purpose of a '2x2 Matrix' in synthesis?",
        options: [
            { id: "a", text: "To multiply numbers." },
            { id: "b", text: "To organize data along two axes to find patterns or opportunities." },
            { id: "c", text: "To play tic-tac-toe." },
            { id: "d", text: "To create a spreadsheet." },
            { id: "e", text: "To measure screen resolution." },
            { id: "f", text: "To draw a box." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 179,
        section: "UX RESEARCH",
        text: "What is the thrill mentioned in the research module?",
        options: [
            { id: "a", text: "Designing the icon." },
            { id: "b", text: "Getting paid." },
            { id: "c", text: "Writing perfect code." },
            { id: "d", text: "Talking to and learning from people in their environment." },
            { id: "e", text: "Launching the app." },
            { id: "f", text: "Leaving work early." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 180,
        section: "UX RESEARCH",
        text: "Which is NOT a synthesis technique mentioned?",
        options: [
            { id: "a", text: "Affinity Diagramming (implied)." },
            { id: "b", text: "Compiler optimization." },
            { id: "c", text: "2x2 Matrix." },
            { id: "d", text: "Personas." },
            { id: "e", text: "Journey Maps." },
            { id: "f", text: "Diagramming." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 181,
        section: "UX RESEARCH",
        text: "Which material is suggested for prototyping 'without coding'?",
        options: [
            { id: "a", text: "Glass blowing." },
            { id: "b", text: "Laser cutters." },
            { id: "c", text: "Materials found around your home (sticky notes, paper)." },
            { id: "d", text: "Steel and welding." },
            { id: "e", text: "Advanced 3D printers." },
            { id: "f", text: "Expensive software." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 182,
        section: "UX RESEARCH",
        text: "Which rule is recommended for brainstorming?",
        options: [
            { id: "a", text: "Judge every idea immediately." },
            { id: "b", text: "Only write down perfect ideas." },
            { id: "c", text: "Criticize others." },
            { id: "d", text: "Only the boss speaks." },
            { id: "e", text: "Remain silent." },
            { id: "f", text: "Get every idea out regardless of whether it's good or bad." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 183,
        section: "UX RESEARCH",
        text: "Who should be included in the brainstorming process?",
        options: [
            { id: "a", text: "Only the designers." },
            { id: "b", text: "Strangers only." },
            { id: "c", text: "Humans and AI." },
            { id: "d", text: "Only the boss." },
            { id: "e", text: "A diverse group of stakeholders/teammates." },
            { id: "f", text: "Only the intern." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 184,
        section: "UX RESEARCH",
        text: "Why iterate?",
        options: [
            { id: "a", text: "To move closer to a meaningful and accessible experience." },
            { id: "b", text: "To increase costs." },
            { id: "c", text: "No reason." },
            { id: "d", text: "To delay work." },
            { id: "e", text: "Because it's fun." },
            { id: "f", text: "To copy others." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 185,
        section: "UX RESEARCH",
        text: "Why make many prototypes?",
        options: [
            { id: "a", text: "To confuse stakeholders." },
            { id: "b", text: "Because the first one always fails." },
            { id: "c", text: "To avoid getting attached to one idea and to test different aspects." },
            { id: "d", text: "To clutter the office." },
            { id: "e", text: "To look busy." },
            { id: "f", text: "To waste materials." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 186,
        section: "UX RESEARCH",
        text: "Why provide 'only essential details' in a prototype?",
        options: [
            { id: "a", text: "To make it abstract." },
            { id: "b", text: "To hide flaws." },
            { id: "c", text: "Because the designer is lazy." },
            { id: "d", text: "To prevent copying." },
            { id: "e", text: "To focus feedback on the core concept, not the finish." },
            { id: "f", text: "To save ink." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 187,
        section: "INFORMATION DESIGN",
        text: "A 'Wireframe' primarily defines:",
        options: [
            { id: "a", text: "The final images." },
            { id: "b", text: "The hosting provider." },
            { id: "c", text: "The marketing copy." },
            { id: "d", text: "The backend logic." },
            { id: "e", text: "The color palette." },
            { id: "f", text: "The skeletal framework and content layout of a page." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 188,
        section: "INFORMATION DESIGN",
        text: "A 'blank canvas' represents:",
        options: [
            { id: "a", text: "Possibility regarding how to turn an idea into an interface." },
            { id: "b", text: "An empty database." },
            { id: "c", text: "A missing file." },
            { id: "d", text: "Writer's block." },
            { id: "e", text: "A broken monitor." },
            { id: "f", text: "A clean desk." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 189,
        section: "INFORMATION DESIGN",
        text: "A 'family' interface strategy means:",
        options: [
            { id: "a", text: "Parental controls." },
            { id: "b", text: "Local networking." },
            { id: "c", text: "Group discounts." },
            { id: "d", text: "Designing for families." },
            { id: "e", text: "Consistent experience across different devices." },
            { id: "f", text: "Shared passwords." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 190,
        section: "INFORMATION DESIGN",
        text: "Ben Fry is an expert in:",
        options: [
            { id: "a", text: "Opera." },
            { id: "b", text: "Visualization." },
            { id: "c", text: "Cooking." },
            { id: "d", text: "Carpentry." },
            { id: "e", text: "Gardening." },
            { id: "f", text: "Skiing." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 191,
        section: "INFORMATION DESIGN",
        text: "Designing for a 'modern context' implies handling:",
        options: [
            { id: "a", text: "Only desktop PCs." },
            { id: "b", text: "Only English speakers." },
            { id: "c", text: "Only iPhones." },
            { id: "d", text: "Only rich users." },
            { id: "e", text: "Diversity of devices and users." },
            { id: "f", text: "Only experts." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 192,
        section: "INFORMATION DESIGN",
        text: "Don't jump into code just yet implies:",
        options: [
            { id: "a", text: "Quit the job." },
            { id: "b", text: "Code is dangerous." },
            { id: "c", text: "Prototype visually first to figure out look and feel." },
            { id: "d", text: "Sleep on it." },
            { id: "e", text: "Never code." },
            { id: "f", text: "Wait for permission." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 193,
        section: "INFORMATION DESIGN",
        text: "Effective pixel prototyping is useful for communication within:",
        options: [
            { id: "a", text: "A dream." },
            { id: "b", text: "A silence retreat." },
            { id: "c", text: "A solitary confinement." },
            { id: "d", text: "A family." },
            { id: "e", text: "A design team." },
            { id: "f", text: "Space." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 194,
        section: "INFORMATION DESIGN",
        text: "Hierarchy in typography is achieved by:",
        options: [
            { id: "a", text: "Using 10 different fonts." },
            { id: "b", text: "Using size, weight, and color to indicate importance." },
            { id: "c", text: "Making everything bold." },
            { id: "d", text: "Hiding titles." },
            { id: "e", text: "Capitalizing everything." },
            { id: "f", text: "Underlining all text." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 195,
        section: "INFORMATION DESIGN",
        text: "Information Design bridges the gap between:",
        options: [
            { id: "a", text: "Mac and PC." },
            { id: "b", text: "Manager and Employee." },
            { id: "c", text: "Java and C++." },
            { id: "d", text: "Data and human understanding." },
            { id: "e", text: "Past and Future." },
            { id: "f", text: "Input and Output." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 196,
        section: "INFORMATION DESIGN",
        text: "Information Design covers principles of:",
        options: [
            { id: "a", text: "Hardware assembly." },
            { id: "b", text: "Network security." },
            { id: "c", text: "Visual design, layout, color, and hierarchy." },
            { id: "d", text: "Database indexing." },
            { id: "e", text: "Server administration." },
            { id: "f", text: "Cable management." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 197,
        section: "INFORMATION DESIGN",
        text: "Internationalization (i18n) prepares a design for:",
        options: [
            { id: "a", text: "One specific country." },
            { id: "b", text: "Time zones." },
            { id: "c", text: "Global warming." },
            { id: "d", text: "Local travel." },
            { id: "e", text: "Space travel." },
            { id: "f", text: "Multiple languages and cultural norms." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 198,
        section: "INFORMATION DESIGN",
        text: "Mockups are typically:",
        options: [
            { id: "a", text: "User interviews." },
            { id: "b", text: "Database tables." },
            { id: "c", text: "Sketches." },
            { id: "d", text: "Functional apps." },
            { id: "e", text: "Code snippets." },
            { id: "f", text: "Static high-fidelity designs." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 199,
        section: "INFORMATION DESIGN",
        text: "New device contexts include:",
        options: [
            { id: "a", text: "Old mainframes." },
            { id: "b", text: "Tablets, walls, watches." },
            { id: "c", text: "Telegraphs." },
            { id: "d", text: "Fax machines." },
            { id: "e", text: "Typewriters." },
            { id: "f", text: "Calculators." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 200,
        section: "INFORMATION DESIGN",
        text: "Pixel prototyping tools (like software tools) allow for:",
        options: [
            { id: "a", text: "Database management." },
            { id: "b", text: "Writing C++ code." },
            { id: "c", text: "3D modeling for architecture." },
            { id: "d", text: "High-fidelity visual representations." },
            { id: "e", text: "Video editing." },
            { id: "f", text: "Sound mixing." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 201,
        section: "INFORMATION DESIGN",
        text: "Prototyping 'before implementation' saves:",
        options: [
            { id: "a", text: "User data." },
            { id: "b", text: "Nothing." },
            { id: "c", text: "Development time and cost." },
            { id: "d", text: "Disk space." },
            { id: "e", text: "Electricity." },
            { id: "f", text: "Paper." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 202,
        section: "INFORMATION DESIGN",
        text: "Rapid prototypes for 'communication' are used to:",
        options: [
            { id: "a", text: "Make phone calls." },
            { id: "b", text: "Get buy-in from stakeholders." },
            { id: "c", text: "Send emails." },
            { id: "d", text: "Broadcast news." },
            { id: "e", text: "Chat with friends." },
            { id: "f", text: "Write letters." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 203,
        section: "INFORMATION DESIGN",
        text: "Responsive design helps accommodate:",
        options: [
            { id: "a", text: "Old browsers." },
            { id: "b", text: "Bad eyesight." },
            { id: "c", text: "Viruses." },
            { id: "d", text: "Increasingly diverse form factors." },
            { id: "e", text: "Slow internet." },
            { id: "f", text: "Bored users." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 204,
        section: "INFORMATION DESIGN",
        text: "Script direction (e.g., RTL vs LTR) affects:",
        options: [
            { id: "a", text: "Internet speed." },
            { id: "b", text: "Monitor brightness." },
            { id: "c", text: "Computer weight." },
            { id: "d", text: "Interface layout and information flow." },
            { id: "e", text: "Audio quality." },
            { id: "f", text: "Battery life." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 205,
        section: "INFORMATION DESIGN",
        text: "The choice of color impacts:",
        options: [
            { id: "a", text: "Privacy policy." },
            { id: "b", text: "Download time." },
            { id: "c", text: "Server speed." },
            { id: "d", text: "Hardware version." },
            { id: "e", text: "Emotion, readability, and brand recognition." },
            { id: "f", text: "Code quality." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 206,
        section: "INFORMATION DESIGN",
        text: "The goal of Information Design is to:",
        options: [
            { id: "a", text: "Confuse readers." },
            { id: "b", text: "Delete content." },
            { id: "c", text: "Effectively organize and present information." },
            { id: "d", text: "Create abstract art." },
            { id: "e", text: "Hide information." },
            { id: "f", text: "Write huge blocks of text." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 207,
        section: "INFORMATION DESIGN",
        text: "The term '1337 h4x0rs' in the text refers to:",
        options: [
            { id: "a", text: "A design tool." },
            { id: "b", text: "A color code." },
            { id: "c", text: "Leetspeak hackers (humorous context for tech jargon)." },
            { id: "d", text: "A specific virus." },
            { id: "e", text: "A font name." },
            { id: "f", text: "A new device." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 208,
        section: "INFORMATION DESIGN",
        text: "Typography in UI deals with:",
        options: [
            { id: "a", text: "Writing stories." },
            { id: "b", text: "Typing speed." },
            { id: "c", text: "Correcting spelling." },
            { id: "d", text: "Collecting stamps." },
            { id: "e", text: "The style, arrangement, and appearance of text." },
            { id: "f", text: "Printing photos." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 209,
        section: "INFORMATION DESIGN",
        text: "Visual design helps effective presentation by:",
        options: [
            { id: "a", text: "Encrypting text." },
            { id: "b", text: "Using invisible ink." },
            { id: "c", text: "Organizing information logically." },
            { id: "d", text: "Making it chaotic." },
            { id: "e", text: "Deleting paragraphs." },
            { id: "f", text: "Using tiny fonts." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 210,
        section: "INFORMATION DESIGN",
        text: "Visualization expert Ben Fry discusses designing with:",
        options: [
            { id: "a", text: "Speed in mind." },
            { id: "b", text: "Usability in mind." },
            { id: "c", text: "Profit in mind." },
            { id: "d", text: "Shapes in mind." },
            { id: "e", text: "Colors in mind." },
            { id: "f", text: "Code in mind." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 211,
        section: "INFORMATION DESIGN",
        text: "What does a 'smart thing' generally refer to here?",
        options: [
            { id: "a", text: "A library card." },
            { id: "b", text: "A clever joke." },
            { id: "c", text: "A diploma." },
            { id: "d", text: "A fast car." },
            { id: "e", text: "Connected devices or IoT with designed interfaces." },
            { id: "f", text: "A smart person." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 212,
        section: "INFORMATION DESIGN",
        text: "What is 'Responsive Design'?",
        options: [
            { id: "a", text: "A printed collection." },
            { id: "b", text: "A voice-activated app." },
            { id: "c", text: "A customer support chat." },
            { id: "d", text: "A design that talks back." },
            { id: "e", text: "An interface strategy that adapts (grows/shrinks) to device form factors." },
            { id: "f", text: "A fast-loading site." }
        ],
        correctAnswer: "e",
        difficulty: "EASY"
    },
    {
        id: 213,
        section: "INFORMATION DESIGN",
        text: "What is 'White Space' in layout?",
        options: [
            { id: "a", text: "A mistake." },
            { id: "b", text: "Something to fill with ads." },
            { id: "c", text: "Empty space used to separate and organize elements." },
            { id: "d", text: "The background color only." },
            { id: "e", text: "A missing image." },
            { id: "f", text: "Wasted space." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 214,
        section: "INFORMATION DESIGN",
        text: "What is the purpose of 'Layout Design'?",
        options: [
            { id: "a", text: "Overlapping text." },
            { id: "b", text: "Hiding navigation." },
            { id: "c", text: "Arranging elements for clarity and usability." },
            { id: "d", text: "Random placement." },
            { id: "e", text: "Minimizing whitespace." },
            { id: "f", text: "Filling every pixel." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 215,
        section: "INFORMATION DESIGN",
        text: "Why design 'flexibly' for diverse devices?",
        options: [
            { id: "a", text: "Because code is flexible." },
            { id: "b", text: "Because one-size-fits-all does not work for 7 billion people/devices." },
            { id: "c", text: "Because the internet is slow." },
            { id: "d", text: "Because it's trendy." },
            { id: "e", text: "Because screens are expensive." },
            { id: "f", text: "Because diversity is a buzzword." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 216,
        section: "INFORMATION DESIGN",
        text: "ii Sn refers to:",
        options: [
            { id: "a", text: "Information 18." },
            { id: "b", text: "Internet version 18." },
            { id: "c", text: "Iteration 18." },
            { id: "d", text: "Interaction 18." },
            { id: "e", text: "Innovation 18." },
            { id: "f", text: "Internationalization." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 217,
        section: "EXPERIMENTS & ANALYSIS",
        text: "A 'Null Hypothesis' typically states:",
        options: [
            { id: "a", text: "That the computer is off." },
            { id: "b", text: "That the experiment will fail." },
            { id: "c", text: "That the effect is huge." },
            { id: "d", text: "That the hypothesis is missing." },
            { id: "e", text: "That there is no significant difference or effect." },
            { id: "f", text: "That the data is zero." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 218,
        section: "EXPERIMENTS & ANALYSIS",
        text: "A 'confound' in an experiment is:",
        options: [
            { id: "a", text: "A founding member of the team." },
            { id: "b", text: "A lost participant." },
            { id: "c", text: "A type of font." },
            { id: "d", text: "An extraneous variable that correlates with both the dependent and independent variables, confusing results." },
            { id: "e", text: "A broken computer." },
            { id: "f", text: "A surprisingly good result." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 219,
        section: "EXPERIMENTS & ANALYSIS",
        text: "A 'p-value' helps researchers determine:",
        options: [
            { id: "a", text: "The price of the software." },
            { id: "b", text: "If the null hypothesis can be rejected." },
            { id: "c", text: "The power consumption." },
            { id: "d", text: "The percentage of battery left." },
            { id: "e", text: "The priority of the bug." },
            { id: "f", text: "The number of pixels." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 220,
        section: "EXPERIMENTS & ANALYSIS",
        text: "A t-test is commonly used to compare:",
        options: [
            { id: "a", text: "The means of two groups." },
            { id: "b", text: "The temperature." },
            { id: "c", text: "The time." },
            { id: "d", text: "Three or more groups (that's ANOVA)." },
            { id: "e", text: "Tea brands." },
            { id: "f", text: "The text size." }
        ],
        correctAnswer: "a",
        difficulty: "HARD"
    },
    {
        id: 221,
        section: "EXPERIMENTS & ANALYSIS",
        text: "ANOVA stands for:",
        options: [
            { id: "a", text: "Annual Validation of Assets." },
            { id: "b", text: "Algorithm for Numerical Optimization." },
            { id: "c", text: "Abstract Node Object Validation." },
            { id: "d", text: "Another Variable Assessment." },
            { id: "e", text: "Analysis of Variance." },
            { id: "f", text: "Automated Network Analysis." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 222,
        section: "EXPERIMENTS & ANALYSIS",
        text: "An 'A/B Test' typically compares:",
        options: [
            { id: "a", text: "Authorized vs Blocked users." },
            { id: "b", text: "The alphabet from A to B." },
            { id: "c", text: "Apples and Bananas." },
            { id: "d", text: "Two different programming languages." },
            { id: "e", text: "Analog vs Digital signals." },
            { id: "f", text: "Two versions of a design to see which performs better on a specific metric." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 223,
        section: "EXPERIMENTS & ANALYSIS",
        text: "Chi-Square tests are often used for:",
        options: [
            { id: "a", text: "Compiling Java code." },
            { id: "b", text: "Designing 3D models." },
            { id: "c", text: "Analyzing categorical data (e.g., user preferences or counts)." },
            { id: "d", text: "Testing internet speed." },
            { id: "e", text: "Calculating the square root of Pi." },
            { id: "f", text: "Measuring screen brightness." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 224,
        section: "EXPERIMENTS & ANALYSIS",
        text: "Counterbalancing is used in Within-Subjects designs to:",
        options: [
            { id: "a", text: "Make the screen level." },
            { id: "b", text: "Ensure equal gender representation only." },
            { id: "c", text: "Compare weights." },
            { id: "d", text: "Avoid carryover effects (like learning or fatigue) from one condition to another." },
            { id: "e", text: "Balance the colors." },
            { id: "f", text: "Balance the budget." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 225,
        section: "EXPERIMENTS & ANALYSIS",
        text: "Crowdsourcing experimentation platforms (like MTurk) allow for:",
        options: [
            { id: "a", text: "Meeting people in person." },
            { id: "b", text: "Generating bitcoins." },
            { id: "c", text: "Avoiding ethics reviews." },
            { id: "d", text: "Hosting websites." },
            { id: "e", text: "Free labor." },
            { id: "f", text: "Running large-scale experiments remotely." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 226,
        section: "EXPERIMENTS & ANALYSIS",
        text: "Ecological Validity refers to:",
        options: [
            { id: "a", text: "Testing on animals." },
            { id: "b", text: "Being green." },
            { id: "c", text: "Testing in a forest." },
            { id: "d", text: "Using recycled paper." },
            { id: "e", text: "Saving energy." },
            { id: "f", text: "The extent to which experimental findings apply to real-world settings." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 227,
        section: "EXPERIMENTS & ANALYSIS",
        text: "Ethics in experiments ensures:",
        options: [
            { id: "a", text: "Faster publication." },
            { id: "b", text: "Respect for persons, beneficence, and justice." },
            { id: "c", text: "Cheaper labor." },
            { id: "d", text: "Less paperwork." },
            { id: "e", text: "More data." },
            { id: "f", text: "Higher profits." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 228,
        section: "EXPERIMENTS & ANALYSIS",
        text: "Experimental design is critical because:",
        options: [
            { id: "a", text: "It requires a PhD." },
            { id: "b", text: "It looks professional." },
            { id: "c", text: "It uses more paper." },
            { id: "d", text: "Poor design leads to invalid conclusions, no matter how good the analysis." },
            { id: "e", text: "It makes the graphs pretty." },
            { id: "f", text: "It takes more time." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 229,
        section: "EXPERIMENTS & ANALYSIS",
        text: "Informed consent is important because:",
        options: [
            { id: "a", text: "It binds the user to pay money." },
            { id: "b", text: "Participants must know the risks and agree to participate voluntarily." },
            { id: "c", text: "It prevents lawsuits only." },
            { id: "d", text: "It is a formality that can be skipped." },
            { id: "e", text: "It allows the researcher to hide the truth." },
            { id: "f", text: "It gives the researcher ownership of the user's house." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 230,
        section: "EXPERIMENTS & ANALYSIS",
        text: "Inclusion criteria define:",
        options: [
            { id: "a", text: "Who gets hired." },
            { id: "b", text: "Who is excluded only." },
            { id: "c", text: "What costs are covered." },
            { id: "d", text: "What software is included." },
            { id: "e", text: "The font size." },
            { id: "f", text: "Who makes the cut to be a participant in the study." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 231,
        section: "EXPERIMENTS & ANALYSIS",
        text: "Likert-type scales are often used to measure:",
        options: [
            { id: "a", text: "Weight." },
            { id: "b", text: "Subjective attitudes or preferences (e.g., 'Strongly Agree' to 'Strongly Disagree')." },
            { id: "c", text: "Time." },
            { id: "d", text: "Distance." },
            { id: "e", text: "Height." },
            { id: "f", text: "CPU speed." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 232,
        section: "EXPERIMENTS & ANALYSIS",
        text: "Post-hoc comparisons are performed:",
        options: [
            { id: "a", text: "Before the experiment starts." },
            { id: "b", text: "To check for viruses." },
            { id: "c", text: "Instead of an ANOVA." },
            { id: "d", text: "To verify the participant's ID." },
            { id: "e", text: "After an ANOVA finds a significant difference, to see specifically which groups differ." },
            { id: "f", text: "To post results on social media." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 233,
        section: "EXPERIMENTS & ANALYSIS",
        text: "Practical Significance vs Statistical Significance:",
        options: [
            { id: "a", text: "They are the same." },
            { id: "b", text: "Practical is for managers, Statistical is for nerds." },
            { id: "c", text: "Practical means easy to calculate." },
            { id: "d", text: "Statistical is useless." },
            { id: "e", text: "Statistical significance implies reliability; Practical significance implies the effect is large enough to matter in real life." },
            { id: "f", text: "Statistical means valid." }
        ],
        correctAnswer: "e",
        difficulty: "MEDIUM"
    },
    {
        id: 234,
        section: "EXPERIMENTS & ANALYSIS",
        text: "Quantitative analysis in UX often involves:",
        options: [
            { id: "a", text: "Color theory." },
            { id: "b", text: "Guessing." },
            { id: "c", text: "Writing poetry." },
            { id: "d", text: "Sketching." },
            { id: "e", text: "Subjective feelings only." },
            { id: "f", text: "Numerical data like task completion time or error rates." }
        ],
        correctAnswer: "f",
        difficulty: "MEDIUM"
    },
    {
        id: 235,
        section: "EXPERIMENTS & ANALYSIS",
        text: "Regression Analysis allows us to:",
        options: [
            { id: "a", text: "Delete old data." },
            { id: "b", text: "Regret our decisions." },
            { id: "c", text: "Understand the relationship between independent and dependent variables." },
            { id: "d", text: "Format the hard drive." },
            { id: "e", text: "Go back to a previous version of the code." },
            { id: "f", text: "Restart the computer." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 236,
        section: "EXPERIMENTS & ANALYSIS",
        text: "Reliability in measurement means:",
        options: [
            { id: "a", text: "Speed of the test." },
            { id: "b", text: "Accuracy of the truth." },
            { id: "c", text: "Consistency of the measure across repeated tests." },
            { id: "d", text: "Difficulty of the test." },
            { id: "e", text: "Cost of the test." },
            { id: "f", text: "Length of the test." }
        ],
        correctAnswer: "c",
        difficulty: "MEDIUM"
    },
    {
        id: 237,
        section: "EXPERIMENTS & ANALYSIS",
        text: "The 'R' programming language is used in this course for:",
        options: [
            { id: "a", text: "Database management." },
            { id: "b", text: "Statistical analysis of experimental data." },
            { id: "c", text: "Writing operating systems." },
            { id: "d", text: "Web frontend design." },
            { id: "e", text: "Creating music." },
            { id: "f", text: "Building 3D games." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 238,
        section: "EXPERIMENTS & ANALYSIS",
        text: "The Mann-Whitney U test is a nonparametric alternative to:",
        options: [
            { id: "a", text: "The Chi-Square." },
            { id: "b", text: "The independent-samples t-test." },
            { id: "c", text: "The print command." },
            { id: "d", text: "The regression." },
            { id: "e", text: "The logout button." },
            { id: "f", text: "The ANOVA." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 239,
        section: "EXPERIMENTS & ANALYSIS",
        text: "Validity in measurement means:",
        options: [
            { id: "a", text: "The extent to which the tool measures what it claims to measure." },
            { id: "b", text: "If the tool is popular." },
            { id: "c", text: "If the tool is new." },
            { id: "d", text: "If the tool is expensive." },
            { id: "e", text: "If the tool is digital." },
            { id: "f", text: "If the tool is fast." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 240,
        section: "EXPERIMENTS & ANALYSIS",
        text: "What does 'Statistical Significance' indicate in an experiment?",
        options: [
            { id: "a", text: "The importance of the project to the CEO." },
            { id: "b", text: "The number of participants." },
            { id: "c", text: "The speed of the server." },
            { id: "d", text: "The likelihood that the difference observed is not due to random chance." },
            { id: "e", text: "The quality of the graphics." },
            { id: "f", text: "The financial cost of the error." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 241,
        section: "EXPERIMENTS & ANALYSIS",
        text: "What is 'Task Completion Time' used for?",
        options: [
            { id: "a", text: "Measuring network lag." },
            { id: "b", text: "Measuring efficiency." },
            { id: "c", text: "Measuring memory usage." },
            { id: "d", text: "Measuring error rate." },
            { id: "e", text: "Measuring screen size." },
            { id: "f", text: "Measuring happiness." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 242,
        section: "EXPERIMENTS & ANALYSIS",
        text: "What is a 'Dependent Variable'?",
        options: [
            { id: "a", text: "The funding source." },
            { id: "b", text: "The weather." },
            { id: "c", text: "The variable changed by the researcher." },
            { id: "d", text: "The outcome measured to see the effect of the manipulation." },
            { id: "e", text: "The lab equipment." },
            { id: "f", text: "The location." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 243,
        section: "EXPERIMENTS & ANALYSIS",
        text: "What is an 'Independent Variable'?",
        options: [
            { id: "a", text: "The result measured." },
            { id: "b", text: "The variable manipulated by the researcher." },
            { id: "c", text: "A constant value." },
            { id: "d", text: "The participant's name." },
            { id: "e", text: "A variable that doesn't matter." },
            { id: "f", text: "The time of day." }
        ],
        correctAnswer: "b",
        difficulty: "MEDIUM"
    },
    {
        id: 244,
        section: "EXPERIMENTS & ANALYSIS",
        text: "What is reliable 'Experimental Control'?",
        options: [
            { id: "a", text: "Keeping all variables constant except the one being tested to ensure validity." },
            { id: "b", text: "Turning off the lights." },
            { id: "c", text: "Forcing users to finish the task." },
            { id: "d", text: "Controlling the participants' minds." },
            { id: "e", text: "Locking the laboratory doors." },
            { id: "f", text: "Using a remote control." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 245,
        section: "EXPERIMENTS & ANALYSIS",
        text: "What is the difference between 'Between-Subjects' and 'Within-Subjects' design?",
        options: [
            { id: "a", text: "Between-subjects is cheaper." },
            { id: "b", text: "There is no difference." },
            { id: "c", text: "Within-subjects requires no participants." },
            { id: "d", text: "Between-subjects uses different people for each condition; Within-subjects uses the same people for all conditions." },
            { id: "e", text: "Within-subjects involves internal medical scans." },
            { id: "f", text: "Between-subjects is for mobile, Within-subjects is for desktop." }
        ],
        correctAnswer: "d",
        difficulty: "MEDIUM"
    },
    {
        id: 246,
        section: "EXPERIMENTS & ANALYSIS",
        text: "Why analyze residuals?",
        options: [
            { id: "a", text: "To check if the assumptions of the statistical model (like normality) are met." },
            { id: "b", text: "To find hidden files." },
            { id: "c", text: "To see what's left over for lunch." },
            { id: "d", text: "To clean the data." },
            { id: "e", text: "To delete errors." },
            { id: "f", text: "To compress the results." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 247,
        section: "EXPERIMENTS & ANALYSIS",
        text: "Why is testing with users considered essential in UX?",
        options: [
            { id: "a", text: "You can never be certain of an experience's effectiveness until it is validated with real users." },
            { id: "b", text: "It is the only way to get a promotion." },
            { id: "c", text: "It replaces the need for design." },
            { id: "d", text: "It is a legal requirement." },
            { id: "e", text: "It costs nothing." },
            { id: "f", text: "It is required for compiling code." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    },
    {
        id: 248,
        section: "EXPERIMENTS & ANALYSIS",
        text: "Why use 'Mixed Effects Models'?",
        options: [
            { id: "a", text: "To account for both fixed effects (experiment conditions) and random effects (participant variation)." },
            { id: "b", text: "To combine audio tracks." },
            { id: "c", text: "To cook data." },
            { id: "d", text: "To confuse the reader." },
            { id: "e", text: "To mix different colors." },
            { id: "f", text: "To use mixed media." }
        ],
        correctAnswer: "a",
        difficulty: "MEDIUM"
    }
];