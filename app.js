function cargarUsuarios() {
    const users = [
        { nombre: "Kai", Puesto: "Chef principal", imagen: "assets/kai.png" },
        { nombre: "Yang y Garrapato", Puesto: "Yang ayudante de kai<br>Garrapato practicante", imagen: "assets/yang_garrapato.png" },
        { nombre: "Ying", Puesto: "Ying ayudante de kai", imagen: "assets/yin.png" },
        { nombre: "Nito", Puesto: "Especialista en chocolate", imagen: "assets/nito.png" },
        { nombre: "Mamadzila", Puesto: "Experta decoradora", imagen: "assets/mamadzila.png" }
    ];

    const container = document.getElementById("user-container");
    container.innerHTML = ""; 

    users.forEach(user => {
        const card = document.createElement("div");
        card.className = "user-card1";

        card.innerHTML = `
            <img src="${user.imagen}" alt="Foto de ${user.nombre}">
            <h2 class="text-lg font-semibold">${user.nombre}</h2>
            <p class="text-gray-600">${user.Puesto}</p>
        `;

        container.appendChild(card);
    });
}

setTimeout(cargarUsuarios, 1000);

function cargarPostres() {
    const postres = [
        { nombre: "Pastel Galleta", Precio: "35 pesos", imagen: "assets/pastel_galleta.jpg" },
        { nombre: "Pastel 3 leches con chispas de chocolate", Precio: "35 pesos", imagen: "assets/pastel_tres_leches.jpg" },
        { nombre: "Carlota de fresa", Precio: "30 pesos", imagen: "assets/carlota_fresa.jpg" },
        { nombre: "Carlota de durazno", Precio: "30 pesos", imagen: "assets/carlota_durazno.jpg" },
        { nombre: "Queso napolitano", Precio: "35 pesos", imagen: "assets/queso.jpg" },
        { nombre: "Gelatina mosaico", Precio: "20 pesos", imagen: "assets/gelatina.jpg" }
    ];

    const container = document.getElementById("catalogo-container");
    container.innerHTML = ""; 

    postres.forEach(user => {
        const card = document.createElement("div");
        card.className = "user-card2";

        card.innerHTML = `
            <img src="${user.imagen}" alt="Foto de ${user.nombre}">
            <h2 class="text-lg font-semibold">${user.nombre}</h2>
            <p class="text-gray-600">${user.Precio}</p>
        `;

        container.appendChild(card);
    });
}

setTimeout(cargarPostres, 1000);

document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("toggle-sidebar");
    const headerMenu = document.querySelector(".header__menu"); 
    const sidebarLinks = document.querySelectorAll(".Barra_lateral a");

    
    function isMobile() {
        return window.innerWidth < 768; 
    }

   
    function toggleSidebar() {
        if (isMobile()) {
            const isHidden = sidebar.getAttribute("aria-hidden") === "true";
            sidebar.setAttribute("aria-hidden", !isHidden);
            toggleButton.setAttribute("aria-expanded", isHidden);
            sidebar.classList.toggle("visible");
        }
    }

    toggleButton.addEventListener("click", toggleSidebar);

    
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && sidebar.getAttribute("aria-hidden") === "false" && isMobile()) {
            toggleSidebar();
        }
    });

   
    window.addEventListener("resize", () => {
        if (!isMobile()) {
            sidebar.setAttribute("aria-hidden", "true");
            sidebar.classList.remove("visible");
            toggleButton.setAttribute("aria-expanded", "false");
            
            headerMenu.style.display = "flex";
        } else {
            headerMenu.style.display = "none"; 
        }
    });

    
    if (isMobile()) {
        headerMenu.style.display = "none"; 
    } else {
        headerMenu.style.display = "flex"; 
    }
});
