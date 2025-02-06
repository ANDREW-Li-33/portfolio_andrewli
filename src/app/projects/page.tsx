'use client';

import { useEffect, useState } from 'react';

interface Project {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    date: string;
}

interface ProjectGridProps {
    projects: Project[];
    title: string;
    description: string;
}

export default function ProjectsPage(): JSX.Element {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const shortTermProjects: Project[] = [
        {
            title: "3D printer upgrades!",
            description: "Upgrades for my Ender 3",
            imageUrl: "/images/short_printer_upgrades.png",
            link: "/projects/short-term/printer_upgrades",
            date: "Dec 28, 2024",
        },
        {
            title: "Bed frame phone holder",
            description: "A bedfame holder for my airpods and iphone",
            imageUrl: "/images/short_iphone_bedframe_holder.png",
            link: "/projects/short-term/iphone_bedframe",
            date: "Sep 28, 2024",
        },
        {
            title: "Telemetry GUI",
            description: "GUI displaying VEX motor and sensor telemetry",
            imageUrl: "/images/short_vex_gui.png",
            link: "/projects/short-term/vex_gui",
            date: "Jan 29, 2023",
        },
    ];

    const longTermProjects: Project[] = [
        // Add your long-term projects in the same format
    ];

    const ProjectGrid = ({ projects, title, description }: ProjectGridProps): JSX.Element => (
        <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-100">{title}</h2>
            <p className="text-gray-400 mb-6">{description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <a href={project.link}>
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-purple-300 font-semibold">{project.title}</h3>
                                <span className="text-gray-400 text-sm">{project.date}</span>
                            </div>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div className="flex justify-center items-center mb-4">
                                <img
                                    className="w-64 h-40 object-cover rounded-lg"
                                    src={project.imageUrl}
                                    alt={project.title}
                                />
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );

    // Handle initial render gracefully
    if (!mounted) {
        return <div className="container mx-auto p-6">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-8 text-gray-100">My Projects</h1>
            
            <ProjectGrid
                projects={longTermProjects}
                title="Long-Term Projects"
                description="Detailed and in-depth projects that required significant development time"
            />
            
            <ProjectGrid
                projects={shortTermProjects}
                title="Short-Term Projects"
                description="Projects completed in several days or less"
            />
        </div>
    );
}