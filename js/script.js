// ===== Contact form -> preview (wireframe style) =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const pvNow = document.getElementById("pvNow");
  const pvName = document.getElementById("pvName");
  const pvDob = document.getElementById("pvDob");
  const pvGender = document.getElementById("pvGender");
  const pvMessage = document.getElementById("pvMessage");

  function formatNow() {
    return new Date().toString();
  }

  pvNow.textContent = formatNow();

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const dob = form.dob.value;
      const gender =
        form.querySelector('input[name="gender"]:checked')?.value || "";
      const message = form.message.value.trim();

      // tampilkan data di panel kanan
      pvNow.textContent = formatNow();
      pvName.textContent = name || "—";
      pvDob.textContent = dob || "—";
      pvGender.textContent = gender || "—";
      pvMessage.textContent = message || "—";

      // kosongkan form setelah submit
      form.reset();
    });
  }
});
