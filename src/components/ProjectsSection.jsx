import { ArrowBigRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Elite Prestige",
        description: "A visually rich, responsive landing page for a luxury real estate project.",
        image: "/projects/elite.PNG",
        demoUrl: "https://ep-omega.vercel.app/",
        githubUrl: "https://github.com/Harshada-08014/ep",
    },
    {
        id: 2,
        title: "NewsMonk",
        description: "A React-based news app using NewsAPI to deliver real-time U.S. and global headlines, category filters, and a responsive design.",
        image: "/projects/newsmonk.PNG",
        // tags: ["React", "BootStrap CSS", "API Integration"],
        demoUrl: "https://www.linkedin.com/posts/harshada-kotawadekar-b6a047312_reactjs-frontenddevelopment-webdevelopment-activity-7366135825773797376-UbfI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE9iWcIBbOL-xN1mnf6QeUwp7cKKPl4rHrg",
        githubUrl: "https://github.com/Harshada-08014/NewsMonk",
    },
    {
        id: 3,
        title: "TadkaDish",
        description: "Developed a full-stack online food delivery platform with intuitive UI, simulated payments, and full admin & client-side management.",
        image: "/projects/tadkadish.PNG",
        // tags: ["HTML5", "CSS3", "Javascript", "PHP", "MySQL"],
        demoUrl: "https://www.linkedin.com/posts/harshada-kotawadekar-b6a047312_fooddelivery-webdevelopment-php-activity-7313999206048821249-Tt9Z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE9iWcIBbOL-xN1mnf6QeUwp7cKKPl4rHrg",
        githubUrl: "https://github.com/Harshada-08014/TadkaDish",

    },
]

export const ProjectsSection = (() => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully
                crafted with attention to detail, performance, and user experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                {projects.map((project, key) => (
                    <div key={key}
                        className="group bg-card/70 rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>


                        <div className="p-4">
                            {/* <div className="flex flex-wrap gap-4 mb-2">

                                {project.tags.map((tag) => (
                                    <span className="px-6 py-1.5 text-xs  font-medium border rounded-full  text-secondary-foreground" style={{ backgroundColor: "#6752d0" }}>
                                        {tag}
                                    </span>
                                ))}

                            </div> */}


                            <h3 className="text-xl font-semibold mt-5 mb-2 ">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl}
                                        target="_blank"
                                        className="mt-3.5 mb-2 text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.githubUrl}
                                        target="_blank"
                                        className=" mt-3.5 mb-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>



                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/Harshada-08014">
                    Check My Github <ArrowBigRight size={16} />

                </a>
            </div>
        </div>

    </section>
})