# EventApi

## COMMANDS to run database (data is flattended to perform Search & Delete operations)
1. Open CMD
2. Go to data folder under the main folder
3. Just write **Sqlite3** and '.open event.db' (this will connect to event db)
4. Now write in cmd **.read schema.sql**, hit enter
5. Write 'Select count(*) from events', just to make sure schema is created successfully
6. Write in cmd **.read data.sql**, hit enter
7. Write 'Select count(actor_login) from events', it will return some count
8. You're done **:)**

## To RUN this project
1. open terminal and hit **npm install**
2. Run **nodemon server.js** 
3. That's it, you're done! :)
