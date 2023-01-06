#before start
-install package
npm install

-add evironment
create .env and insert
SECRET_KEY
PORT

---

to get secret key past this code on terminal
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
