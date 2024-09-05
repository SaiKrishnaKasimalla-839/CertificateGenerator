document.getElementById("certificateForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    var certificateType = document.getElementById("certificateType").value;
    var employeeName = document.getElementById("employeeName").value;
    var organizationName = document.getElementById("organizationName").value;
    var duration = document.getElementById("duration").value;
    var designation = document.getElementById("designation").value;
  
    var certificateContent = "";
    var certificateTitle = "";
  
    switch (certificateType) {
      case "experience":
        certificateTitle = "Experience Certificate";
        certificateContent = `
          <p>This is to certify that <strong>${employeeName}</strong> has worked as a <strong>${designation}</strong> at <strong>${organizationName}</strong> for a duration of <strong>${duration}</strong>.</p>
          <p>During their tenure, they demonstrated excellent performance and contributed significantly to the success of our organization.</p>
          <p>We wish them all the best in their future endeavors.</p>
        `;
        break;
      case "course":
        certificateTitle = "Course Completion Certificate";
        certificateContent = `
          <p>This is to certify that <strong>${employeeName}</strong> has successfully completed the <strong>${designation}</strong> course at <strong>${organizationName}</strong> for a duration of <strong>${duration}</strong>.</p>
          <p>They have shown remarkable dedication and understanding throughout the course.</p>
          <p>We congratulate them on their accomplishment.</p>
        `;
        break;
      case "internship":
        certificateTitle = "Internship Completion Certificate";
        certificateContent = `
          <p>This is to certify that <strong>${employeeName}</strong> has completed an internship as a <strong>${designation}</strong> at <strong>${organizationName}</strong> for a duration of <strong>${duration}</strong>.</p>
          <p>During the internship, they gained valuable experience and demonstrated commendable skills.</p>
          <p>We wish them success in their future career endeavors.</p>
        `;
        break;
    }
  
    document.getElementById("certificateTitle").innerText = certificateTitle;
    document.getElementById("certificateContent").innerHTML = certificateContent;
    document.getElementById("certificateOutput").style.display = "block";
  });
  
  document.getElementById("downloadBtn").addEventListener("click", function () {
    var certificateContent = document.getElementById("certificateContent").innerText;
    var blob = new Blob([certificateContent], { type: "text/plain" });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
  
    link.href = url;
    link.download = "certificate.txt";
    link.click();
  
    URL.revokeObjectURL(url);
  });
  