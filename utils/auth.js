// const withAuth = (req, res, next) => {
//     if (!req.session.user_id) {
//         res.redirect('/login');
//     } else {
//         next();
//     }
// };

const models = require('../../models');

function withAuth(email, password) {
    new Promise((resolve, reject) => {
        models.User.findOne({
            email: email,
        }).then(user => {
            user.verifyPassword(password, (err, isCorrect) => {
                if (isCorrect && !err) {
                    resolve({ success: true, message: 'User not found!', user: user});
                } else {
                    reject({success: false, message: 'User not found!'});
                }
            })
        })
    })
}

module.exports = withAuth;