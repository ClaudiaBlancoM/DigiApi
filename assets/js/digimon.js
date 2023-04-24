// Función para mostrar los detalles de un Digimon
function showDetails(digimon) {
  const detailsContainer = document.getElementById("digimon-details");
  detailsContainer.innerHTML = `

  <div class="card text-center">
  <div class="card-header">
  <h5 class="card-title">Digimon: ${digimon.name}</h5>
  </div>
  <div class="card-body">
    <div class="card" style="width: 11rem;">
  <img src="${digimon.img}" alt="${digimon.name}" class="card-img-top" alt="${digimon.name}">
  </div>
  <div class="card-footer text-body-secondary">
  <p class="card-text">Nivel: ${digimon.level}</p>
  </div>
</div>
  
  `;
}

// Hacer petición a la API
fetch("https://digimon-api.vercel.app/api/digimon")
  .then((response) => response.json())
  .then((data) => {
    const digimonSelect = document.getElementById("digimon-select");
    const defaultOption = document.createElement("option"); 
    defaultOption.text = "Seleccionar Digimon"; 
    digimonSelect.add(defaultOption); 
 
// Agregar cada Digimon al select
    for (const digimon of data) {
      const option = document.createElement("option");
      option.textContent = digimon.name;
      option.value = JSON.stringify(digimon);
      digimonSelect.appendChild(option);
    }

// Desplegar información del Digimon elegido
    digimonSelect.addEventListener("change", () => {
      const selectedOption = digimonSelect.options[digimonSelect.selectedIndex];
      const selectedDigimon = JSON.parse(selectedOption.value);
      showDetails(selectedDigimon);
    });
  })
  .catch((error) => {
    console.error(error);
  });
