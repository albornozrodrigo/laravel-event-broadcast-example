# laravel-event-broadcast-example
Laravel realtime event broadcast example using [Redis](http://redis.io), [Node.JS](https://nodejs.org) and [Socket.IO](http://socket.io).

# Setup
Download or clone this repository and install the Composer dependencies.
```
composer install
```

# Copy the .env file
Copy the .env file with the code below.
```
cp .env.example .env
```

# Generate key
Generate the app key.
```
php artisan key:generate
```

# Install Node.JS modules
Make sure that you have already installed  [Node.JS](https://nodejs.org).
```
npm install
```

# Running Node.JS server
Run the NodeJS server with the command below.
```
node socket.js
```

# Running Redis server
Make sure that you have already installed [Redis](http://redis.io) and run the Redis server with the command below.  
Note: If you are using Windows, install [Redis for Windows](https://github.com/rgl/redis/downloads), go to `C:\Program Files\Redis` and execute the `redis-server.exe` program.
```
redis-server --port 3001
```

# Running Laravel
Run the application with the command below.
```
php artisan serve
```

# Testing
Now, open `http://localhost:8000/show` to see the results and `http://localhost:8000/fire` to fire the event.
