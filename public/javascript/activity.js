async function getActivity(event) {
    event.preventDefault();

    const response = await fetch(`/api/activity`, {
        method: 'GET',
        body: JSON.stringify({
            title,
            type
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/api/activity');
    } else {
        alert(response.statusText);
    }
}