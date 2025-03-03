/* Change this file to get your personal Portfolio */
// To change portfolio colors globally go to the  _globalColor.scss file
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "W. Barrett Anderson",
  title: "Hi, I'm Barrett!",
  subTitle: emoji(
    "I am a dedicated Full Stack Software Developer with experience in creating Web and Mobile applications using JavaScript, React.js, Node.js, and various other exciting libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/barrett38",
  linkedin: "https://www.linkedin.com/in/barrett1614/",
  gmail: "barrett1614@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "My Expertise",
  subTitle: "PASSIONATE FULL STACK DEVELOPER EAGER TO MASTER EVERY TECH STACK",
  skills: [
    emoji(
      "+ Crafting highly engaging Front end / User Interfaces for web and mobile platforms"
    ),
    emoji(
      "+ Building Progressive Web Applications (PWA) in traditional and SPA frameworks"
    ),
    emoji("+ Integrating third-party services like AWS")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "DevMountain with Strayer University",
      logo: require("./assets/images/DevMtn-Pic.png"),
      subHeader: "Web Development Program",
      duration: "May 2024"
      // desc: "Participated in the research of XXX and published 3 papers."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Belmont University",
      logo: require("./assets/images/belmont-logo2.jpeg"),
      subHeader: "Bachelor of Fine Arts",
      duration: "May 2009"
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Playing Tic-Tac-Toe with a Pokemon twist!",
      company: "Tic-Tac-Poke-Toe",
      companylogo: require("./assets/images/ash-pokeball.png"),
      // date: "JavaScript | React | CSS | HTML | Vercel | Pokemon API | Axios | Semantic UI | Git | GitHub | Supabase"
      desc: "JavaScript | React | CSS | HTML | Vercel | Pokemon API | Axios | Semantic UI | Git | GitHub | Supabase"
    },
    {
      role: "A Pokedex that allows you to search for Pokemon by Stats!",
      company: "Pokedex",
      companylogo: require("./assets/images/pokeBackground.jpg"),
      // date: "JavaScript | React | CSS | HTML | Vercel | Pokemon API | Axios | Semantic UI | Git | GitHub"
      desc: "JavaScript | React | CSS | HTML | Vercel | Pokemon API | Axios | Semantic UI | Git | GitHub"
    },
    {
      role: "Shows step-by-step instructions on how to pray the Servite Rosary!",
      company: "The Servite Rosary",
      companylogo: require("./assets/images/servite.jpg"),
      // date: "JavaScript | React | CSS | HTML | Vercel | Pokemon API | Axios | Semantic UI | Git | GitHub"
      desc: "JavaScript | React | CSS | HTML | Vercel | Pokemon API | Axios | Semantic UI | Git | GitHub"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle: "HERE ARE SOME PROJECTS I HAVE WORKED ON RECENTLY",
  projects: [
    {
      image: require("./assets/images/ash-pokeball.png"),
      projectName: "Tic-Tac-Poke-Toe",
      projectDesc: "Playing Tic-Tac-Toe with a Pokemon twist!",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tic-tac-poke-toe.vercel.app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/pokeBackground.jpg"),
      projectName: "Pokedex",
      projectDesc: "A Pokedex that allows you to search for Pokemon by Stats.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://capstone-pokedex.vercel.app"
        }
      ]
    },
    {
      image: require("./assets/images/servite.jpg"),
      projectName: "Servite Rosary",
      projectDesc:
        "Basic steps on how to pray the Servite Rosary. Simplicity is the theme of this project.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://catholic-prayers.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/carousel-main.png"),
      projectName: "Timed Carousel",
      projectDesc:
        "Timed Carousel that displays images and text in a timed sequence.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://timed-carousel.vercel.app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    // {
    //   title: "Google Code-In Finalist",
    //   subtitle:
    //     "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/codeInLogo.webp"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
    //     },
    //     {
    //       name: "Award Letter",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     },
    //     {
    //       name: "Google Code-in Blog",
    //       url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
    //     }
    //   ]
    // },
    {
      title: "DevMountain Web Development Program",
      subtitle:
        "Completed the Web Development Program at DevMountain with Strayer University.",
      image: require("./assets/images/devMtnCertComplete.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/178bMoPBXA-gdhbjPuu3UtXPaxKNOaMWB/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1kAFIDbUT8f1wtbrFWWK5klzyt9hVWeLd/view?usp=sharing"
        }
      ]
    },
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },

    {
      title: "Crash Course on Python",
      subtitle:
        "Completed the Google IT Automation with Python Professional Certificate.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/c400769ef95e93179aff96e8d93ff24e"
        }
      ]
    },
    {
      title: "Using Python to Interact with the Operating System",
      subtitle:
        "Completed the Google IT Operating Systems with Python Professional Certificate.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/6100b9ed9fcbba274a3c0b79b8a24336"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+1 (615) 208-3520",
  email_address: "barrett1614@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
