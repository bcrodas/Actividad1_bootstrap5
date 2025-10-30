// main.js

// Activar tooltips y popovers
document.addEventListener('DOMContentLoaded', function () {
  // tooltips
  var tipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tipTriggerList.map(function (el) { return new bootstrap.Tooltip(el); });

  // popovers
  var popTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  popTriggerList.map(function (el) { return new bootstrap.Popover(el); });

  // Toast demo
  var toastEl = document.getElementById('liveToast');
  var toast = toastEl ? new bootstrap.Toast(toastEl) : null;
  var btn = document.getElementById('showToast');
  if (btn && toast) btn.addEventListener('click', function () { toast.show(); });

  // Form validation (Bootstrap)
  var forms = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
});
