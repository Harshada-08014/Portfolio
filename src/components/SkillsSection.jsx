import { useState } from "react"
import { cn } from "@/lib/utils"

const skills = [
    // frontend
    { name: "HTML/CSS", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    //   { name: "Next.js", category: "frontend" },

    // backend
    { name: "MySQL", category: "backend" },
    { name: "PHP", category: "backend" },
    { name: "Python", category: "backend" },

    // tools
    { name: "Git/GitHub", category: "tools" },
    //   { name: "Docker", level: 70, category: "tools" },
    { name: "Figma", category: "tools" },
    { name: "VS Code", category: "tools" },
]

const categories = ["all", "frontend", "backend", "tools"];




export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary/70 text-forefround hover:bd-secondary"
                        )}
                    >
                        {category}
                    </button>

                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div
                        key={key}
                        className=" p-4 rounded-lg shadow-xs card-hover"
                        // style={{ backgroundColor: "#6752d0" }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#8f7cf3")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--card)")}
                    >

                        <div className="text-left mb-2 ">
                            <h3 className="font-semibold text-lg text-center">
                                {skill.name}
                            </h3>
                        </div>
                        {/* <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                style={{ width: skill.level + "%" }} >
                                .bg-card {
                                background-color: hsl(265.94deg 49.49% 41.68%);
                                }

                            </div>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    </section>
}