export default function ShortTermProjectsPage(): JSX.Element {
    const projects = [
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

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-100">Short-Term Projects</h1>
            <p className="text-gray-400">Projects completed in several days or less</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <a href={project.link}>
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-purple-300 font-semibold">{project.title}</h2>
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
}