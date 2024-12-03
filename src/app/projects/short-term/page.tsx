export default function ShortTermProjectsPage(): JSX.Element {
  const projects = [
      {
          title: "Thanksgiving gifts!",
          description: "A brief description of Project 1.",
          videoUrl: "https://link-to-video.com",
          link: "/projects/short-term/project1",
      },
      {
          title: "Telemetry GUI",
          description: "A brief description of Project 2.",
          videoUrl: "https://link-to-video.com",
          link: "/projects/short-term/project2",
      },
      {
          title: "Bed frame phone holder",
          description: "A brief description of Project 3.",
          videoUrl: "https://link-to-video.com",
          link: "/projects/short-term/project3",
      },
  ];

  return (
      <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">Short-Term Projects</h1>
          <p>Projects completed in several days or less</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {projects.map((project, index) => (
                  <div
                      key={index}
                      className="bg-[#ffefc2] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                      <a href={project.link}>
                          <h2 className="text-purple-800 font-semibold mb-2">{project.title}</h2>
                          <p className="text-gray-700 mb-4">{project.description}</p>
                          <div className="aspect-w-16 aspect-h-9 mb-4">
                              <iframe
                                  className="w-full h-full rounded-lg"
                                  src={project.videoUrl}
                                  title={project.title}
                                  allowFullScreen
                              ></iframe>
                          </div>
                      </a>
                  </div>
              ))}
          </div>
      </div>
  );
}
