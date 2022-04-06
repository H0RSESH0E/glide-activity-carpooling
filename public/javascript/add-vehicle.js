async function newFormHandler(event) {
    event.preventDefault();
  
    const vehicleYear = document.querySelector('input[name="year"]').value;
    const vehicleMake = document.querySelector('input[name="make"]').value;
    const vehicleModel = document.querySelector('input[name="model"]').value;
    const vehicleFuelEco = document.querySelector('input[name="fuel_eco"]').value;
    const vehicleColor = document.querySelector('input[name="color"]').value;
    const vehicleMaxPassengers = document.querySelector('input[name="max_passengers"]').value;
  
    const response = await fetch(`/api/vehicle`, {
      method: 'POST',
      body: JSON.stringify({
        vehicleYear,
        vehicleMake,
        vehicleModel,
        vehicleFuelEco,
        vehicleColor,
        vehicleMaxPassengers
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.vehicle-create').addEventListener('submit', newFormHandler);
  