const sqlite3 = require('sqlite3').verbose();

exports.filterByRepositoryIdAndEventType = function(req, res) {
  let db = new sqlite3.Database('./data/event.db');
  let sql = `SELECT type, actor_id,
  actor_login, actor_url, actor_avatar_url, actor_gravatar_id, actor_display_login, repo_id, repo_name, repo_url FROM events where type=? AND repo_id=?`;
  db.each(sql, [req.query.type, req.query.repo_id], (err, row) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(row);
  });
  db.close();
  res.send();
};

exports.getActorDetailsByActorLogin = function(req, res) {
  let db = new sqlite3.Database('./data/event.db');
  let sql = `SELECT type, actor_id,
  actor_login, actor_url, actor_avatar_url, actor_gravatar_id, actor_display_login, repo_id, repo_name, repo_url FROM events where actor_login=?`;
  db.each(sql, [req.query.actor_login], (err, row) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(row);
  });
  db.close();
  res.send();
};

exports.findRepositoryWithMaxEvents = function(req, res) {
  let db = new sqlite3.Database('./data/event.db');
  let sql = `SELECT repo_id, repo_name, repo_url, COUNT(type) FROM events where actor_login=?
  group by repo_id, repo_name, repo_url limit 1`;
  db.each(sql, [req.query.actor_login], (err, row) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(row);
  });
  db.close();
  res.send();
};

exports.listOfRepositories = function(req, res) {
  let db = new sqlite3.Database('./data/event.db');
  let sql = `WITH CTE AS (SELECT actor_login, repo_id, repo_name, repo_url, ROW_NUMBER () OVER (PARTITION by actor_login, repo_id) count from events where actor_login IS NOT NULL)
  SELECT actor_login, repo_id, repo_name, repo_url, count from CTE where count = 1`;
  db.each(sql, [], (err, row) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(row);
  });

  db.close();
  res.send();
};

exports.deleteEvents = function(req, res) {
  if(req.query.actor_login != undefined && req.query.actor_login != null)
  {
  let db = new sqlite3.Database('./data/event.db');
  let sql = `DELETE FROM events WHERE actor_login=?`;
  db.run(sql, req.query.actor_login, function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Deleted`);
  });

  db.close();
  res.send('Deleted');
}
else
  res.send('Bad Request')
};