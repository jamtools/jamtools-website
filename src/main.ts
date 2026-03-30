import './style.css'

const menuBtn = document.getElementById('mobile-menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
const openIcon = document.getElementById('menu-open-icon')
const closeIcon = document.getElementById('menu-close-icon')

menuBtn?.addEventListener('click', () => {
  const isOpen = !mobileMenu?.classList.contains('hidden')
  mobileMenu?.classList.toggle('hidden', isOpen)
  openIcon?.classList.toggle('hidden', !isOpen)
  closeIcon?.classList.toggle('hidden', isOpen)
})

// Close mobile menu when a link is clicked
mobileMenu?.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden')
    openIcon?.classList.remove('hidden')
    closeIcon?.classList.add('hidden')
  })
})
