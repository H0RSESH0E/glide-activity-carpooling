async function newFormHandler(event) {
    event.preventDefault();
  
    const eventName = document.querySelector('input[name="name"]').value;
    const eventDescription = document.querySelector('input[name="description"]').value;
    const eventLocation = document.querySelector('input[name="location"]').value;
    const eventBeginTime = document.querySelector('input[name="time-begin"]').value;
    const eventEndTime = document.querySelector('input[name="time-end"]').value;
    const eventMaxParticipants = document.querySelector('input[name="max_participants"]').value;
    const eventMinParticipants = document.querySelector('input[name="min_participants"]').value;

    const response = await fetch(`/api/event`, {
      method: 'POST',
      body: JSON.stringify({
        eventName,
        eventDescription,
        eventLocation,
        eventBeginTime,
        eventEndTime,
        eventMaxParticipants,
        eventMinParticipants
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.event-create').addEventListener('submit', newFormHandler);