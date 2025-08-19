const projects = [
  {
    name: "Drawify",
    description:
      "A collaborative drawing. Draw, shape, and co-create with friends. Utilize powerful AI tools to generate shapes and enhance your artistic workflow.",
    website: "https://drawify.devanshbhavsar.tech",
    github: "https://github.com/DevanshBhavsar3/excalidraw",
    image: "/drawify-demo.jpeg",
  },
  {
    name: "Brainly",
    description:
      "Save links from anywhere, watch YouTube videos directly, tag your content for easy retrieval, and share your curated collections with friends.",
    website: "https://brainly.devanshbhavsar.tech",
    github: "https://github.com/DevanshBhavsar3/Brainly",
    image: "/brainly-demo.png",
  },
  {
    name: "Coursify - Frontend",
    description:
      "A Frontend for a course discovery platform. Explore courses, read reviews, and find the perfect fit for your learning journey.",
    website: "https://coursify-sage.vercel.app/",
    github: "https://github.com/DevanshBhavsar3/Coursify",
    image: "/coursify-demo.png",
  },
];

document.querySelector("#projects").innerHTML = projects
  .map((project) => {
    return `<div class="grid gap-3">
    <h3 class="text-xl font-medium">${project.name}</h3>
        <a href=${project.website} target="_blank" class="cursor-pointer" >
          <img
            src="${project.image}"
            alt="${project.name} Screenshot"
            class="aspect-video border border-gray-300 pointer-events-none select-none"
          />
        </a>
        <p class="text-balance">
          ${project.description}
        </p>
        <div class="flex gap-3">
          <a
            href="${project.website}"
            target="_blank"
            class="text-blue-500 hover:underline"
            >Website</a
          >
          <a
            href="${project.github}"
            target="_blank"
            class="text-blue-500 hover:underline"
            >Code</a
          >
        </div>
  </div>
  `;
  })
  .join("");
