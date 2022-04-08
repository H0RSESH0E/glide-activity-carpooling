const eventNa = document.querySelector('#eventname');
const eventDe = document.querySelector('#eventeventdescription');
const eventBeTime = document.querySelector('#eventbegining-time');
const eventEnTime = document.querySelector('#eventend-time');
const eventMaxPar = document.querySelector('#eventmax-participants');
const eventMinPar = document.querySelection('#eventmin-participants');
const singleEventCard = document.querySelector('#populate-single-event-card');

async function eventNameEl(e) {
    e.preventDefault();

    if (eventNa && eventDe && eventBeTime && eventEnTime && eventMaxPar && eventMinPar) {

        const response = await fetch('/api/event', {
            method: 'POST',
            body: JSON.stringify({
                eventNa: event_name,
                eventDe: description,
                eventBeTime: time_begin,
                eventEnTime: time_end,
                eventMaxPar: max_participants,
                eventMinPar: min_participants
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('single-event');

        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

// GOOGLE MAPS 
function initMap() {
    var test= {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: test
    });
    var marker = new google.maps.Marker({
      position: test,
      map: map
    });
}


// if (eventNa, EventDe, EventBeTime, eventEnTime, eventMaxPar, EventMinPar) {
//     const response = await fetch('/api/event', {
//         method: 'POST',
//         body: JSON.stringify({
//             eventNa,
//             EventDe,
//             eventBeTime,
//             eventEnTime,
//             eventMaxPar,
//             eventMinPar
//         }),
//         headers: { 'Content-Type': 'application/json' }
//     });

//     if (response.ok) {
//         document.location.replace('/single-event');

//     } else {
//         alert(response.statusText);
//     }
// }
