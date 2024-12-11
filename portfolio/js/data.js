async function loadData() {
    try {
      const response = await fetch("data.json");
      const data = await response.json();
  
      renderContent("box-container-marketing", data.marketing);
      renderContent("box-container-hobbies", data.hobbies);
      renderContent("box-container-webdev", data.webdev);
    } catch (error) {
      console.error("Error loading data.json:", error);
    }
  }
  
  function renderContent(containerClass, items) {
    const container = document.querySelector(`.${containerClass}`);
    if (!container || !items) return;
  
    items.forEach(item => {
      const box = document.createElement("div");
      box.classList.add("box");
  
      if (item.images) {
        item.images.forEach(imgSrc => {
          const img = document.createElement("img");
          img.src = imgSrc;
          img.alt = item.description || "Portfolio image"; 
          img.classList.add("collage-img");
          box.appendChild(img);
        });
      }
  
      if (item.description) {
        const description = document.createElement("p");
        description.textContent = item.description;
        box.appendChild(description);
      }
  
      if (item.links) {
        item.links.forEach(linkData => {
          const link = document.createElement("a");
          link.href = linkData.url;
          link.textContent = linkData.text;
          link.target = "_blank"; 
          link.classList.add("project-link");
          box.appendChild(link);
        });
      }
  
      container.appendChild(box);
    });
  }
  
  document.addEventListener("DOMContentLoaded", loadData);
  