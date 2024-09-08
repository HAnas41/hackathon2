document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Collect form data
        var name = document.getElementById("name").value;
        var title = document.getElementById("title").value;
        var about = document.getElementById("about").value;
        var job1Title = document.getElementById("job1-title").value;
        var job1Company = document.getElementById("job1-company").value;
        var job1Duration = document.getElementById("job1-duration").value;
        var job2Title = document.getElementById("job2-title").value;
        var job2Company = document.getElementById("job2-company").value;
        var job2Duration = document.getElementById("job2-duration").value;
        var projects = document.getElementById("projects").value;
        var degree1 = document.getElementById("degree1").value;
        var school1 = document.getElementById("school1").value;
        var year1 = document.getElementById("year1").value;
        var degree2 = document.getElementById("degree2").value;
        var school2 = document.getElementById("school2").value;
        var year2 = document.getElementById("year2").value;
        var degree3 = document.getElementById("degree3").value;
        var school3 = document.getElementById("school3").value;
        var year3 = document.getElementById("year3").value;
        var skill1 = document.getElementById("skill1").value;
        var skill2 = document.getElementById("skill2").value;
        var cert1 = document.getElementById("cert1").value;
        var cert1Organization = document.getElementById("cert1-organization").value;
        var cert1Year = document.getElementById("cert1-year").value;
        // Generate resume content
        var resumeContent = "\n            <h1>".concat(name, "</h1>\n            <h2>").concat(title, "</h2>\n            <p>").concat(about, "</p>\n\n            <h3>Work Experience</h3>\n            <ul>\n                <li><strong>").concat(job1Title, "</strong> at ").concat(job1Company, " (").concat(job1Duration, ")</li>\n                <li><strong>").concat(job2Title, "</strong> at ").concat(job2Company, " (").concat(job2Duration, ")</li>\n            </ul>\n            <p><strong>Key Projects:</strong> ").concat(projects, "</p>\n\n            <h3>Education</h3>\n            <ul>\n                <li>").concat(degree1, " from ").concat(school1, " (").concat(year1, ")</li>\n                <li>").concat(degree2, " from ").concat(school2, " (").concat(year2, ")</li>\n                <li>").concat(degree3, " from ").concat(school3, " (").concat(year3, ")</li>\n            </ul>\n\n            <h3>Skills</h3>\n            <ul>\n                <li>").concat(skill1, "</li>\n                <li>").concat(skill2, "</li>\n            </ul>\n\n            <h3>Certifications</h3>\n            <ul>\n                <li>").concat(cert1, " from ").concat(cert1Organization, " (").concat(cert1Year, ")</li>\n            </ul>\n        ");
        // Create a new window to display the resume
        var newWindow = window.open("", "", "width=800,height=600");
        if (newWindow) {
            newWindow.document.write(resumeContent);
            newWindow.document.close();
        }
    });
});
