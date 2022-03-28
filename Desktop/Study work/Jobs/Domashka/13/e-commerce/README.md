## Object-Relational Mapping (Oleksandr Aksonenko) Challenge: E-commerce 

1. [ Description. ](#desc)
2. [ Web Address. ](#web-address)
3. [ Usage tips. ](#usage)
4. [ Features. ](#features)
5. [ Credits. ](#credits)
6. [ Licenses. ](#licenses)
7. [ Install Command. ](#commandInstall)
8. [ Test Command. ](#commandTest)
9. [ Contributing. ](#contributing)
9. [ Questions. ](#questions)





<a name="web-address"></a>
## 1. How to Get There

### Open your favorite web browser and enter the following web address to access to the README.md

  https://alexaksonenko.github.io/e-commerce/


<a name="usage"></a>
## 2. Usage Tips

For more information - Please visit the following videos on how the application works and some background information on the app build.

If you want to run locally preform the following:

This application is running under mysql as a local host, you can modify the .env file with your own user/password to start the application.

If you are still intersted in running the application you would need to do the following:
* run mysql terminal at project source location
  source db/schema.sql
* npm i
* npm run seed
* npm start
* use Insomnia (use videos and sample snapshots using Insomnia for Product model for your reference).

https://www.youtube.com/watch?v=VOYzmrsG0ao


Part 2 -  Functionality - Once you open the video.


https://drive.google.com/file/d/1p4UGva7LK76BrCmfX2Xt0Gw46pYO6qAX/view



<a name="features"></a>
## 3. Features




<a name="credits"></a>
## 4. Credits

Thank you Esteban Romero for working on this project.

<a name="licenses"></a>
## 5. Licenses

mit

<a name="commandInstall"></a>
## 6. Install Command

### Database dependency is --> mysql Ver 8.0.23 for Win64 on x86_64  
### npm install command will install javascript dependencies

npm i

<a name="commandTest"></a>
## 7. Test Command

You can sync model changes by changing **force: false** to true. This will also remove all data and start fresh.
Once you have synced, stop the applicatio by using ctrl + c on your keyboard and change the force:true to false and restart the application.

Once the above is done, you can now use Insomnia to do the routes commands.

@ server.js line 14

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});




