// app.js: shared script loaded by every page.
document.addEventListener('DOMContentLoaded', function () {
  // 1. Mark the menu link of the page we are on.
  var current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#menu a').forEach(function (link) {
    if (link.getAttribute('href') === current) {
      link.setAttribute('aria-current', 'page');
    }
  });

  // 2. Put the current year in the footer.
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // 3. Forms with a data-message show a confirmation instead of reloading.
  document.querySelectorAll('form[data-message]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var box = form.querySelector('.msg');
      box.textContent = form.dataset.message;
      box.hidden = false;
      form.reset();
    });
  });
});
