const Express = require('express');

const server = Express();

server.use(Express.json());

const allParcels = [
  {
    parId: 1, usId: 1, weight: 20, picLoc: 'Kinamba', dest: 'Karongi', Descr: 'Must be wrapped', Pri: 20000, status: 'Delivered',
  },
  {
    ParId: 2, usId: 2, weight: 20, picLoc: 'Kisimenti', dest: 'Huye', Descr: 'only one box', Pri: 48000, status: 'not Delivered',
  },
  {
    parId: 3, usId: 1, weight: 56, picLoc: 'Kimisagara', dest: 'Nyanza', Descr: 'handle with care', Pri: 90870, status: 'not Delivered',
  },
  {
    parId: 5, usId: 3, weight: 86, picLoc: 'Gacuriro', dest: 'Muhanga', Descr: 'Tomatoes', Pri: 120000, status: 'Delivered',
  },
  {
    parId: 9, usId: 1, weight: 12, picLoc: 'Kimironko', dest: 'Nyamagabe', Descr: 'eggs', Pri: 14000, status: 'Delivered',
  },
  {
    parId: 8, usId: 2, weight: 34, picLoc: 'Kacyiru', dest: 'Gicumbi', Descr: 'clothes', Pri: 28300, status: 'Delivered',
  },
];

const appVersion = '/api/v1';

server.get(`${appVersion}/parcels`, (req, res) => {
  res.json(allParcels);
});

server.get(`${appVersion}/parcels/:parid`, (req, res) => {
  const temparcel = allParcels
    .find(parcel => parcel.parId === Number.parseInt(req.params.parid, 10));
  if (!temparcel) {
    res.send('sorry, no match found');
  } else {
    res.send(temparcel);
  }
});

server.get(`${appVersion}/users/:usid/parcels`, (req, res) => {
  const tempParcels = [];

  allParcels.forEach((parcel) => {
    if (parcel.usId === Number.parseInt(req.params.usid, 10)) {
      tempParcels.push(parcel);
    }
  });
  if (!tempParcels.length) {
    res.send('No user registered');
  } else {
    res.send(tempParcels);
  }
});

server.put(`${appVersion}/parcels/:parid/cancel`, (req, res) => {
  let tempIndex;
  allParcels.forEach((value, index) => {
    if (value.parId === Number.parseInt(req.params.parid, 10)) {
      tempIndex = index;
    }
  });
  allParcels.splice(tempIndex, 1);
  res.send(allParcels);
});
server.post(`${appVersion}/parcels`, (req, res) => {
  const newParcel = { ...req.body, parId: new Date() };
  allParcels.push(newParcel);
  res.send(allParcels);
});

// eslint-disable-next-line no-console
server.listen(3500, () => console.log('listening on 3500'));
