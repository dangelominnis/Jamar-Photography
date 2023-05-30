// BG color change white to black
window.addEventListener('scroll', function() {
    var sections = document.getElementsByClassName('section');
  
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var bounding = section.getBoundingClientRect();
      var offset = window.innerHeight * 0.3; // Offset to trigger the fade-in effect
  
      // Adjust the bounding values based on the padding
      var sectionTop = bounding.top - parseFloat(getComputedStyle(section).paddingTop);
      var sectionBottom = bounding.bottom - parseFloat(getComputedStyle(section).paddingBottom);
  
      // Change opacity based on section visibility
      if (
        (sectionTop + offset >= 0 && sectionTop + offset <= window.innerHeight) ||
        (sectionBottom - offset >= 0 && sectionBottom - offset <= window.innerHeight)
      ) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    }
  });

  // Project Slider
  function filterProjects(category) {
    const projectList = document.getElementsByClassName("project-card");
  
    // Remove "active" class from all buttons
    const buttons = document.getElementsByClassName("slider-button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }
  
    // Show/hide projects based on category
    for (let i = 0; i < projectList.length; i++) {
      const project = projectList[i];
  
      if (category === "all" || project.classList.contains(category)) {
        project.style.display = "block";
        project.classList.add("fade-in");
      } else {
        project.style.display = "none";
        project.classList.remove("fade-in");
      }
    }
  
    // Add "active" class to the clicked button
    event.target.classList.add("active");
  }
  

