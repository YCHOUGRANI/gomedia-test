# Go-Media test

I used laravel/sanctum to authenticate single page applications (SPAs) that need to communicate with a Laravel powered API.

As infrastructure I used an official Docker Composer for Laravel 7  https://hub.docker.com/r/bitnami/laravel
Which contains two containers one for laravel 7 and one for mysql. I added an other container for phpmyadmin exposed via port 8081 (http://localhost:8081)

2.	Install Docker and Docker compose:
      https://docs.docker.com/engine/install/
      https://docs.docker.com/compose/install/
   
3.	Then clone the source code from git https://github.com/YCHOUGRANI/gomedia-test
4.	Position to the gomedia-test folder:    cd gomedia-test

5.	Run: Docker-composer up -d

6.	docker exec laravel php artisan migrate
 
7. docker exec laravel npm install

8. docker exec laravel npm run watch



![login](https://user-images.githubusercontent.com/61298854/114736624-26d5a180-9d3e-11eb-9dd8-ba7333401e47.PNG)

![register](https://user-images.githubusercontent.com/61298854/114736652-2b9a5580-9d3e-11eb-96f9-df543a393d1b.PNG)

![dashboard](https://user-images.githubusercontent.com/61298854/114736692-37861780-9d3e-11eb-9821-162e6d31917b.PNG)

![database](https://user-images.githubusercontent.com/61298854/114736733-41a81600-9d3e-11eb-92f4-3252218e8db7.PNG)


