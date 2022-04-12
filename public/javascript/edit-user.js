async function editFormHandler(event) {
  event.preventDefault();

  const firstName = document.querySelector('input[name="edit-first_name"]').value.trim();
  const lastName = document.querySelector('input[name="edit-last-name"]').value.trim();
  const email = document.querySelector('input[name="edit-email"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      firstName,
      lastName,
      email
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-profile').addEventListener('submit', editFormHandler);