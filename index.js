// 🌗 Theme Toggle
const body = document.body;
const toggleBtn = document.getElementById('toggleMode');

function applyTheme(mode) {
  if (mode === 'dark') {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
  localStorage.setItem('mode', mode);
}

toggleBtn.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark');
  localStorage.setItem('mode', isDark ? 'dark' : 'light');
});

// Apply saved mode
applyTheme(localStorage.getItem('mode') || 'light');

// 🚀 Form Submit
document.getElementById('vmForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
  };

  try {
    const res = await fetch('https://selfservice-fn.azurewebsites.net/api/request-vm-access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    document.getElementById('status').textContent = result.message || 'Request submitted!';
  } catch (err) {
    document.getElementById('status').textContent = 'Error sending request. Please try again.';
  }
});
