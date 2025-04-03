// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Referencias a elementos del DOM
    const navbar = document.querySelector(".navbar")
    const menuToggle = document.querySelector(".menu-toggle")
    const navMenu = document.querySelector(".nav-menu")
    const navLinks = document.querySelectorAll(".nav-link")
    const skillBars = document.querySelectorAll(".skill-progress")
    const contactForm = document.getElementById("contactForm")
    const http = "https://portafolio-dvhu.vercel.app/"
  
    // Función para cambiar el estilo del navbar al hacer scroll
    function toggleNavbarBackground() {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled")
      } else {
        navbar.classList.remove("scrolled")
      }
    }
  
    // Función para activar el link de navegación según la sección visible
    function highlightNavLink() {
      const sections = document.querySelectorAll("section, header")
      const scrollPosition = window.scrollY + 100
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove("active")
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active")
            }
          })
        }
      })
    }
  
    // Función para animar las barras de habilidades cuando son visibles
    function animateSkillBars() {
      const skillsSection = document.querySelector(".skills-grid")
      const sectionPosition = skillsSection.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3
  
      if (sectionPosition < screenPosition) {
        skillBars.forEach((bar) => {
          const width = bar.style.width
          bar.style.width = "0"
          setTimeout(() => {
            bar.style.width = width
          }, 100)
        })
        // Remover el evento una vez que se han animado las barras
        window.removeEventListener("scroll", animateSkillBars)
      }
    }
  
    // Evento para mostrar/ocultar el menú móvil
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      menuToggle.classList.toggle("active")
    })
  
    // Cerrar el menú al hacer clic en un enlace
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        menuToggle.classList.remove("active")
      })
    })
  
    // Manejar el envío del formulario de contacto
    if (contactForm) {
      contactForm.addEventListener("submit", async function (e) {
        e.preventDefault()
  
        const formData = new FormData(this)
        const data = Object.fromEntries(formData.entries())
        const submitButton = document.getElementById("contactFormButton")
  
        submitButton.textContent = "Enviando..."
        submitButton.disabled = true
  
        try {
          const response = await fetch(http + "send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          })
  
          const result = await response.text()
          alert(result)
          contactForm.reset()
        } catch (error) {
          console.error("Error al enviar el mensaje:", error)
          alert("No se pudo enviar el mensaje. Inténtelo de nuevo más tarde.")
        } finally {
          submitButton.textContent = "Enviar mensaje"
          submitButton.disabled = false
        }
      })
    }
  
    // Agregar eventos de scroll
    window.addEventListener("scroll", toggleNavbarBackground)
    window.addEventListener("scroll", highlightNavLink)
    window.addEventListener("scroll", animateSkillBars)
  
    // Inicializar funciones al cargar la página
    toggleNavbarBackground()
    highlightNavLink()
  
    // Funcionalidad para abrir enlaces de GitHub al hacer clic en los proyectos
    document.getElementById("laraMobile").addEventListener("click", () => {
      window.open("https://github.com/Gonzalo689/LaraMobile/", "_blank")
    })
  
    document.getElementById("eventosEmerita").addEventListener("click", () => {
      window.open("https://github.com/Gonzalo689/Proyecto_-Eventos-Emerita", "_blank")
    })
  
    document.getElementById("portafolioLink").addEventListener("click", () => {
      window.open("https://github.com/Gonzalo689/Portafolio", "_blank")
    })
  
    // Mejora visual para indicar que los proyectos son clickeables
    const portfolioItems = document.querySelectorAll(".portfolio-item")
    portfolioItems.forEach((item) => {
      item.style.cursor = "pointer"
    })
  })
  
  