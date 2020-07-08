Inside backend folder run following commands:
--------------------------------------------
1. py -m venv env_videoapp
2. .\env_videoapp\Scripts\activate
3. pip install -r requirements.txt
4. set ENV_FILE_LOCATION=./.env
5. python
6. from app import db
7. db.create_all()
8. exit()
9. python run.py

Now server is up and running

Inside VideoStreamAPi directory run following command for front-end
------------------------------------------------------------------
1. npm install
2. yarn start

