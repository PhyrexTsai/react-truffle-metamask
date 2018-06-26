import bluzelle from 'bluzelle';

const bluzellePort = process.env.BLUZELLE_WEBSOCKET;
const UUID = process.env.BLUZELLE_UUID;

export const create = (key, value) => {
  if (key.length === 0) return { message: 'invalid input' }
  bluzelle.connect(bluzellePort, UUID);
  bluzelle.create(key, value).then((result) => {
    return {message: 'success'};
  }, error => {
    return error;
  });
}

export const read = (key) => {
  if (key.length === 0) return { message: 'invalid key' }
  bluzelle.connect(bluzellePort, UUID);
  bluzelle.read(key).then(result => {
    return result;
  }, error => {
    return error;
  });
};

export const update = (key, value) => {
  if (key.length === 0) return { message: 'invalid key' }
  bluzelle.connect(bluzellePort, UUID);
  bluzelle.update(key, value).then(() => {
    return {message: 'success'};
  }, error => {
    return error;
  });
}

export const remove = (key) => {
  if (key.length === 0) return { message: 'invalid key' }
  bluzelle.connect(bluzellePort, UUID);
  bluzelle.remove(key).then(() => {
    return {message: 'success'};
  }, error => {
    return error;
  });
}

export const keys = () => {
  bluzelle.keys().then(keys => {
    return keys;
  }, error => {
    return error;
  });
};