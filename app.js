document.addEventListener("DOMContentLoaded", function () {
    console.log("HW8 JavaScript Loaded Successfully.");


    const name = "Marcell Kapas";

    function timeBasedGreeting(name) {
        const hour = new Date().getHours();
        let greetingPrefix;
        if (hour < 12) greetingPrefix = "Good Morning, ";
        else if (hour < 18) greetingPrefix = "Good Afternoon, ";
        else greetingPrefix = "Good Evening, ";
        return `${greetingPrefix}my name is ${name}! Welcome to my portfolio!`;
    }

    const greetingElement = document.getElementById("greetingMessage");
    if (greetingElement) {
        greetingElement.textContent = timeBasedGreeting(name);
    } else {
        console.error("Greeting element not found!");
    }


    const addSkillBtn = document.getElementById("addSkillBtn");
    if (addSkillBtn) {
        addSkillBtn.addEventListener("click", function () {
            const newSkillInput = document.getElementById("newSkillInput");
            const newSkill = newSkillInput.value.trim();

            if (newSkill) {
                const skillContainer = document.querySelector("#skills .row");
                const newSkillCol = document.createElement("div");
                newSkillCol.className = "col-md-3 col-sm-6";

                const badge = document.createElement("div");
                badge.className = "badge bg-primary p-3 w-100 fs-6";
                badge.textContent = newSkill;

                newSkillCol.appendChild(badge);
                skillContainer.appendChild(newSkillCol);
                newSkillInput.value = ""; 
            } else {
                alert("Please enter a valid skill!");
            }
        });
    }


    const projectTitles = ["Portfolio Website", "Homepage Design", "Contact Page"];
    const projectDescriptions = [
        "A responsive personal website to showcase projects and skills.",
        "A structured homepage designed using modern Bootstrap components.",
        "A mobile-friendly contact form for users to reach out easily."
    ];
    const projectDeadlines = ["2025-02-10", "2024-11-30", "2024-12-15"];

    const projectsContainer = document.querySelector("#projects .row");

    if (projectsContainer) {
        projectsContainer.innerHTML = ""; 
        for (let i = 0; i < projectTitles.length; i++) {
            const deadline = new Date(projectDeadlines[i]);
            const now = new Date();
            const status = deadline > now ? "Ongoing" : "Completed";

            const projectCard = document.createElement("div");
            projectCard.className = "col-md-4";

            projectCard.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">${projectTitles[i]}</h5>
                        <p class="card-text">${projectDescriptions[i]}</p>
                        <p class="fw-bold text-primary">Status: ${status}</p>
                        <p class="text-muted">Deadline: ${projectDeadlines[i]}</p>
                    </div>
                </div>
            `;
            projectsContainer.appendChild(projectCard);
        }
    } else {
        console.error("Projects section not found.");
    }


    let resumeDownloadCount = 0;
    let hasDownloadedResume = false;
    const resumeButton = document.querySelector("footer a.btn-light");
    const downloadCountDisplay = document.getElementById("downloadCountDisplay");

    if (resumeButton) {
        resumeButton.addEventListener("click", function () {
            resumeDownloadCount++;

            if (downloadCountDisplay) {
                downloadCountDisplay.textContent = `Resume downloaded: ${resumeDownloadCount} time${resumeDownloadCount > 1 ? "s" : ""}`;
            }

            if (!hasDownloadedResume) {
                hasDownloadedResume = true;
                setTimeout(() => {
                    alert("The resume has downloaded successfully!");
                }, 1500);
            }
        });
    }


    const educationData = [
        { institution: "Northern Arizona University", degree: "B.S. in Informatics", duration: "2023 - Present" }
    ];
    const experienceData = [
        { role: "Informatics Student", description: "CS 105, 126, 136, 200, 205, 212, 305", duration: "2023 - Present" }
    ];

    const educationSection = document.getElementById("education");
    if (educationSection) {
        const eduTable = document.createElement("table");
        eduTable.className = "table table-striped table-hover align-middle text-center shadow-sm";
        eduTable.innerHTML = `
            <thead class="table-dark">
                <tr>
                    <th>Institution</th>
                    <th>Degree / Field</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                ${educationData.map(e =>
            `<tr><td>${e.institution}</td><td>${e.degree}</td><td>${e.duration}</td></tr>`
        ).join("")}
            </tbody>
        `;
        educationSection.appendChild(eduTable);
    }

    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
        const expTable = document.createElement("table");
        expTable.className = "table table-bordered align-middle text-center shadow-sm";
        expTable.innerHTML = `
            <thead class="table-light fw-bold">
                <tr>
                    <th>Role</th>
                    <th>Description</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                ${experienceData.map(e =>
            `<tr><td>${e.role}</td><td>${e.description}</td><td>${e.duration}</td></tr>`
        ).join("")}
            </tbody>
        `;
        experienceSection.appendChild(expTable);
    }


    const toggleThemeBtn = document.getElementById("toggleThemeBtn");
    if (toggleThemeBtn) {
        toggleThemeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-theme");
        });
    }


    console.log("HW8 functions executed successfully.");
});