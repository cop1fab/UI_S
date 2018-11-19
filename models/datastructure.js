import allParcels from "./data.json"

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

