const { UserActJunc } = require('../models');

const userActivityData = async () => {
    try {
        
        // Declare variable and set it equal to an array
        let activitiesWithUsers = [];

        // a is the activity
        for (let a = 0; a < 55; a++) {

            // i is the number of users to associate
            let numberOfUsers = Math.floor(Math.random() * 5 + 1)
            for (let i = 0; i < numberOfUsers; i++) {

                let activityAndUsers = {
                    user_id: Math.floor(Math.random() * 10 + 1),
                    activity_id: a + 1
                }
    
            activitiesWithUsers.push(activityAndUsers);
            }
    
        }

        console.table(activitiesWithUsers);
       await UserActJunc.bulkCreate(activitiesWithUsers);
    } catch (err) {
        console.error(err);
    }
};

module.exports = userActivityData;