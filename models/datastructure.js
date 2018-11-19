const allParcels = [
  {
    parId: 1, usId: 1, weight: 20, picLoc: 'Kinamba', dest: 'Karongi', Descr: 'Must be wrapped', Pri: 20000, status: 'Delivered',
  },
  {
    parId: 2, usId: 2, weight: 20, picLoc: 'Kisimenti', dest: 'Huye', Descr: 'only one box', Pri: 48000, status: 'not Delivered',
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

const getParcelById = (parcelId) => {
  const parcel = allParcels.find(parcel => parcel.parId === Number.parseInt(req.params.parid, 10));
    return parcel;
}
const getParcelsByUserId = (userId) => {
const tempParcels = []
  allParcels.forEach((parcel) => {
    if (parcel.usId === userId) {
      tempParcels.push(parcel);
    }
  });
return tempParcels;
}
const putParcelsById = (parcelId) => {
  let tempIndex;
  allParcels.forEach((value, index) => {
    if (value.parId === parcelId) {
      tempIndex = index;
    }
  });
  allParcels.splice(tempIndex, 1);
  return allParcels;
}
const postParcels = (body) => {
  const newParcel = { ...body, parId: new Date() };
  allParcels.push(newParcel);
  return allParcels;
}

export default allParcels;

export {
  getParcelById,
  getParcelsByUserId,
  putParcelsById,
  postParcels,
}

