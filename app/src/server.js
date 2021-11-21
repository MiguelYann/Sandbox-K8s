const http = require('http');
const fs = require('fs');
const DEFAULT_MOUNT_FILE_PATH = '/etc/app/firstName';

const request = (request, response) => {
  fs.readFile(DEFAULT_MOUNT_FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.log('Something bad happen');
    } else {
      response.writeHead(200, 'Ok Good', {
        'Content-Type': 'text/html',
        'My-Custom-Header': 'k8s',
      });
      response.write(
        `<p>The content of file load from configMap is ${data}</p> <p>The User from env is ${process.env.USER}`
      );

      response.end();
    }
  });
};

http.createServer(request).listen(3000);
