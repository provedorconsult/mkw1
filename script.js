document.addEventListener('DOMContentLoaded', function () {
  // Update dynamic content on page load
  updatePageMetaData();
  updateCopyrightYear();

  // Setup WhatsApp button click handlers
  const phoneNumber = '5561985851689'; // MKW's WhatsApp number

  // Handle main Hero section WhatsApp button
  const mainWhatsAppButton = document.querySelector('.main-whatsapp-button');
  if (mainWhatsAppButton) {
    mainWhatsAppButton.addEventListener('click', function () {
      const prefilledMessage = 'Olá! Gostaria de um orçamento para dedetização.';
      handleWhatsAppClick(phoneNumber, prefilledMessage);
    });
  }

  // Handle Services section WhatsApp button
  const servicesWhatsAppButton = document.querySelector('.services-whatsapp-button');
  if (servicesWhatsAppButton) {
    servicesWhatsAppButton.addEventListener('click', function () {
      const prefilledMessage = 'Olá! Gostaria de um orçamento detalhado para controle de pragas.';
      handleWhatsAppClick(phoneNumber, prefilledMessage);
    });
  }
  
  // Handle Final CTA WhatsApp button
  const finalCTAWhatsAppButton = document.querySelector('.final-cta-whatsapp-button');
  if (finalCTAWhatsAppButton) {
    finalCTAWhatsAppButton.addEventListener('click', function () {
      const prefilledMessage = 'Olá! Vi o site e gostaria de falar com um especialista sobre controle de pragas.';
      handleWhatsAppClick(phoneNumber, prefilledMessage);
    });
  }
  
  // Handle header WhatsApp button (<a> tag)
  // No JS needed for the <a> tag if it directly has the href.
  // If it were a <button> like others, you'd add:
  const headerWhatsAppLink = document.querySelector('header .whatsapp-button');
  if (headerWhatsAppLink && headerWhatsAppLink.tagName !== 'A') { // If it's made a button
    headerWhatsAppLink.addEventListener('click', function() {
        const prefilledMessage = 'Olá! Entrei em contato pelo site.';
        handleWhatsAppClick(phoneNumber, prefilledMessage);
    });
  }


  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('header nav a.nav-link[href^="#"]');
  navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

});

function handleWhatsAppClick(phoneNumber, prefilledMessage) {
  const encodedMessage = encodeURIComponent(prefilledMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  console.log('WhatsApp button clicked, opening: ', whatsappUrl); // For tracking/analytics simulation
  window.open(whatsappUrl, '_blank');
}

function updatePageMetaData() {
  document.title = 'MKW Dedetizadora | Controle de Pragas em Brasília - DF';
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Serviço de dedetização profissional em Brasília - DF. Elimine pragas com segurança e eficácia. Fale conosco via WhatsApp para um orçamento rápido e sem compromisso!');
  }
}

function updateCopyrightYear() {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
