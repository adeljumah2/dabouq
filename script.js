function doPost(e) {
    try {
      var folder = DriveApp.getFolderById("1PjwDfsvkXV-dgeatnzmTifr6BLvJhrLP"); 
      var name = e.parameter.name;
      var email = e.parameter.email;
      var coverLetter = e.parameter.coverLetter;
  
     
      var blob = Utilities.newBlob(Utilities.base64Decode(e.parameter.fileData), e.parameter.fileType, e.parameter.fileName);
      var file = folder.createFile(blob);
      file.setDescription("Uploaded by: " + name + " | Email: " + email + " | Cover Letter: " + coverLetter);
  
    
      MailApp.sendEmail({
        to: "352ufhy2u3ceg@gmail.com", 
        subject: "New Job Application from " + name,
        body: "Name: " + name + "\nEmail: " + email + "\nCover Letter: " + coverLetter + "\nFile: " + file.getUrl()
      });
  
      return ContentService.createTextOutput("SUCCESS").setMimeType(ContentService.MimeType.TEXT);
    } catch (error) {
      return ContentService.createTextOutput("ERROR: " + error).setMimeType(ContentService.MimeType.TEXT);
    }
  }

  // Fade-in on Scroll
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    let updateCount = () => {
        let target = +counter.getAttribute('data-target');
        let count = +counter.innerText;
        let increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 30);
        } else {
            counter.innerText = target + '+';
        }
    };
    updateCount();
});