// const popularActivitiyTitle = document.querySelector('#popular-activity-title');
// const popularActivityFee = document.querySelector('#popular-activity-fee');
const popActContainer = document.querySelector('#pop-container');

async function popularActivities(event) {
    event.preventDefault();
    
    // <img name="image" src="{{Comment.image}}">
    // const image = document.querySelector('img[name="image"]').value;
    const title = document.querySelector('#pop-act-title').value;
    const fee = document.querySelector('#pop-act-fee').value;
  
if (title, fee) {
    const response = await fetch('/api/activity', {
      method: 'POST',
      body: JSON.stringify({
        title,
        fee
        // image
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
  }
}

document.querySelector('#pop-act-btn').addEventListener('click', popularActivities);

// async function fetchActivityInfo() {
//     await fetch(`/api/activities`, {
//         method: 'GET',
//         body: JSON.stringify({
//             title,
//             fee
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//           }
//     })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         const popContainerEl = document.querySelector('#pop-container');
//         // const title = document.querySelector('#pop-act-title').value.trim();
//         // const fee = document.querySelector('#pop-act-fee').value.trim();

//         for (let i = 1; i < 55; i++) {
//             console.log(data[i]);

//             let popActCard = $("<div>")
//                 .addClass("card row col-3");
//                 popContainerEl.append(popActCard);

//                 let cardBodyDiv = $("<div>")
//                     .addClass("card-body");
//                     popActCard.append(cardBodyDiv);

//                 // Append cost and fee to popular activity cards
//                 var popAct = "<p>Activity: " + data[i].title;
//                 cardBodyDiv.append(popAct);

//                 var popFee = "<p>Fee: " + data[i].fee;
//                 cardBodyDiv.append(popFee);

//                 console.log(i);
//         }
//     })
// });