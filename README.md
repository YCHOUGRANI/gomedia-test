# Go-Media test

I used laravel/sanctum to authenticate single page applications (SPAs) that need to communicate with a Laravel powered API.

As infrastructure I used an official Docker Composer for Laravel 7  https://hub.docker.com/r/bitnami/laravel
Which contains two containers one for laravel 7 and one for mysql. I added an other container for phpmyadmin exposed via port 8081 (http://localhost:8081)

2.	Install Docker and Docker compose:
      https://docs.docker.com/engine/install/
      https://docs.docker.com/compose/install/
   
3.	Then clone the source code from git https://github.com/YCHOUGRANI/gomedia-test
4.	Position to the onstate_api folder:    cd gomedia-test

5.	Run: Docker-composer up -d

6.	docker exec laravel php artisan migrate
 
7. docker exec laravel npm install

8. docker exec laravel npm run watch


