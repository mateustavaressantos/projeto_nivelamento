// Filtro de Ecopontos (página mapa.html)
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const ecopontos = document.querySelectorAll('.ecoponto-card');

  if (filterButtons.length && ecopontos.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        ecopontos.forEach(card => {
          if (filterValue === 'todos') {
            card.style.display = 'block';
          } else {
            const materiais = card.getAttribute('data-materiais');
            if (materiais && materiais.includes(filterValue)) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  }

  // Feedback de envio de formulários (denunciar.html e agendar.html)
  const denunciaForm = document.getElementById('form-denuncia');
  if (denunciaForm) {
    denunciaForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Denúncia registrada com sucesso! (simulação)');
      this.reset();
    });
  }

  const coletaForm = document.getElementById('form-coleta');
  if (coletaForm) {
    coletaForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Solicitação de coleta enviada! (simulação)');
      this.reset();
    });
  }
}); 