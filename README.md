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

UI Screenshots
--------------------
User signin page
![image](https://user-images.githubusercontent.com/9819281/86921060-2b827f00-c148-11ea-93a3-aa09c337a706.png)

User signup page
![image](https://user-images.githubusercontent.com/9819281/86921214-64225880-c148-11ea-8320-aea2b65bb31a.png)

Dashboard(With one expanded)
![image](https://user-images.githubusercontent.com/9819281/86921383-ad72a800-c148-11ea-88dd-115ddb856314.png)

Add video stream information
![image](https://user-images.githubusercontent.com/9819281/86921887-7a7ce400-c149-11ea-8bff-cfd6d9b5e5b6.png)

