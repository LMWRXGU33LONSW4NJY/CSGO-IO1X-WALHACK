const menuButon = document.querySelector('.mobil-menu');
const menuListe = document.querySelector('.menu-liste');

menuButon?.addEventListener('click', () => {
  menuListe?.classList.toggle('acik');
});
