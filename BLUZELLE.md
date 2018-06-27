# Bluzelle

## Start on your local

### Install Docker

Reference: [Docker Installation Guide](https://docs.docker.com/install/)

1. Setup a local docker-compose swarm with the instructions found [here](https://github.com/bluzelle/docker-swarm-deploy)
2. Run docker-compose up in the same directory of your docker-compose.yml. This command will initialize the swarm within your local docker-machine. Full docker-compose documentation can be found [here](https://docs.docker.com/compose/)
3. Nodes are available on localhost port `51010-51012`
4. Connect a websocket client with [Bluzelle websocket API](https://bluzelle.github.io/api/#websocket-api)
5. Create a node server application using Bluzelle node.js [library](https://github.com/bluzelle/bluzelle-js) and [API](https://bluzelle.github.io/api/)
6. CTRL-C to terminate the docker-compose swarm

## Bluzelle Configuration

### Environment Settings

```
export BLUZELLE_WEBSOCKET=<Your IP and Port>
export BLUZELLE_UUID=<Your UUID>
```

### Connect with Bluzelle Swarm DB

```javascript
import bluzelle from 'bluzelle';

bluzelle.connect(BLUZELLE_WEBSOCKET, BLUZELLE_UUID);
```

### Bluzelle CRUD Component

File: [bluzelle.js](./src/lib/bluzelle.js)
API Document: [https://bluzelle.github.io/api/](https://bluzelle.github.io/api/)

API list:
- create
- update
- remove
- read
- keys
- has