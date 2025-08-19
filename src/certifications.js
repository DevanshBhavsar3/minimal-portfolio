const certificates = [
  {
    name: "CVM University Hackathon 2025",
    url: "https://3kzwnzp8m3.ufs.sh/f/RUEHGMs1XJU6OKNOzAhicA0gzmWZ4XrJYxLvjh6EMBKU8e5k",
  },
  {
    name: "Harvard CS50's Introduction to Python",
    url: "https://3kzwnzp8m3.ufs.sh/f/RUEHGMs1XJU6GLCd2no3lwCaO54YvS1m6yuMEhfF0IqZ7Ni9",
  },
];

document.querySelector("#certificates").innerHTML = certificates
  .map((certificate) => {
    return `
        <li>
          <a href="${certificate.url}" target="_blank" class="hover:underline">
              ${certificate.name}
          </a>
        </li>
  `;
  })
  .join("");
