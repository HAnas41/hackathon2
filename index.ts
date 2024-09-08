document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    
    form.addEventListener("submit", function (event: Event) {
        event.preventDefault();

        // Collect form data
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const title = (document.getElementById("title") as HTMLInputElement).value;
        const about = (document.getElementById("about") as HTMLTextAreaElement).value;
        const job1Title = (document.getElementById("job1-title") as HTMLInputElement).value;
        const job1Company = (document.getElementById("job1-company") as HTMLInputElement).value;
        const job1Duration = (document.getElementById("job1-duration") as HTMLInputElement).value;
        const job2Title = (document.getElementById("job2-title") as HTMLInputElement).value;
        const job2Company = (document.getElementById("job2-company") as HTMLInputElement).value;
        const job2Duration = (document.getElementById("job2-duration") as HTMLInputElement).value;
        const projects = (document.getElementById("projects") as HTMLTextAreaElement).value;
        const degree1 = (document.getElementById("degree1") as HTMLInputElement).value;
        const school1 = (document.getElementById("school1") as HTMLInputElement).value;
        const year1 = (document.getElementById("year1") as HTMLInputElement).value;
        const degree2 = (document.getElementById("degree2") as HTMLInputElement).value;
        const school2 = (document.getElementById("school2") as HTMLInputElement).value;
        const year2 = (document.getElementById("year2") as HTMLInputElement).value;
        const degree3 = (document.getElementById("degree3") as HTMLInputElement).value;
        const school3 = (document.getElementById("school3") as HTMLInputElement).value;
        const year3 = (document.getElementById("year3") as HTMLInputElement).value;
        const skill1 = (document.getElementById("skill1") as HTMLInputElement).value;
        const skill2 = (document.getElementById("skill2") as HTMLInputElement).value;
        const cert1 = (document.getElementById("cert1") as HTMLInputElement).value;
        const cert1Organization = (document.getElementById("cert1-organization") as HTMLInputElement).value;
        const cert1Year = (document.getElementById("cert1-year") as HTMLInputElement).value;

        // Generate resume content
        const resumeContent = `
            <h1>${name}</h1>
            <h2>${title}</h2>
            <p>${about}</p>

            <h3>Work Experience</h3>
            <ul>
                <li><strong>${job1Title}</strong> at ${job1Company} (${job1Duration})</li>
                <li><strong>${job2Title}</strong> at ${job2Company} (${job2Duration})</li>
            </ul>
            <p><strong>Key Projects:</strong> ${projects}</p>

            <h3>Education</h3>
            <ul>
                <li>${degree1} from ${school1} (${year1})</li>
                <li>${degree2} from ${school2} (${year2})</li>
                <li>${degree3} from ${school3} (${year3})</li>
            </ul>

            <h3>Skills</h3>
            <ul>
                <li>${skill1}</li>
                <li>${skill2}</li>
            </ul>

            <h3>Certifications</h3>
            <ul>
                <li>${cert1} from ${cert1Organization} (${cert1Year})</li>
            </ul>
        `;

        // Create a new window to display the resume
        const newWindow = window.open("", "", "width=800,height=600");
        if (newWindow) {
            newWindow.document.write(resumeContent);
            newWindow.document.close();
        }
    });
});

