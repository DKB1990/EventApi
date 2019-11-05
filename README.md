# EventApi

Node: v10.15.3 \n
Database: SQLite3 \n
NPM packages: express, body-parser, SQLite3\n

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

## API endpoints
•	Return records filtered by the repository id and event type
   http://localhost:8085/api/events/getbyid?type=<event_type>&repo_id=<actor_name>

• Return actor details and list of contributed repositories by actor login
   http://localhost:8085/api/events/getActorDetails?actor_login=<actor_name>
   
•	Find the repository with the highest number of events from an actor (by login). If multiple repos have the same number of events, return the one with the latest event.
   http://localhost:8085/api/events/getActorDetails?actor_login=<actor_name>
   
•	Return list of all repositories with their top contributor (actor with most events).
   http://localhost:8085/api/events/getTopContributors
   
•	Delete the history of actor’s events by login
   http://localhost:8085/api/events/delete?actor_login=<actor_name>
