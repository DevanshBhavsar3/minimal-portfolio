const education = [
  {
    name: "GLS University",
    description: "Computer Science",
    duration: "April 2024 - Present",
  },
  {
    name: "100xDevs Cohort 3",
    description: "Web Development And DevOps",
    duration: "January 2025- Present",
  },
  {
    name: "Harvard University",
    description: "CS50P: Introduction to Programming with Python",
    duration: "2022 - 2024",
  },
];

document.querySelector("#education").innerHTML = education
  .map((course) => {
    return `
        <div class="grid gap-1">
          <h3 class="text-xl font-medium flex gap-3 items-baseline">
            ${course.name}
            <span class="text-sm text-gray-500">${course.duration}</span>
          </h3>
          <p class="text-gray-800">${course.description}</p>
        </div>
  `;
  })
  .join("");
