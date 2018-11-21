const express = require('express');

let parcels = [
  {
    parId: 1,
    usId: 2,
    picLoc: "gishushu",
    currentLoc: "klab",
    destination: "gisozi"
  },
  {
    parId: 2,
    usId: 2,
    picLoc: "kimironko",
    currentLoc: "kinamba",
    destination: "nyabugogo"
  },
  {
    parId: 3,
    usId: 2,
    picLoc: "remera",
    currentLoc: "kanombe",
    destination: "kanombe"
  }
]

const server = express();

server.get('/',(req, res) => res.send('What are you doing here man? try "/parcels" instead!'));

server.get('/parcels',(req, res) => res.send(parcels));

server.put('/parcels/:parcelId/cancel', (req, res) => {
  /**
   * Iyi tempIndex nashaka ko ifata index ya parcel yujuje all the conditions
   * just like we did on getting a single parcel
   * Noneho muri forEach ndashaka kunyura kuri every parcel in the array
   * and if the a parcel at a given iteration matches the id sent,
   * I want to set its index to the variable (tempIndex)
   */
  let tempIndex;
  let tempPar;
  parcels.forEach((value, index) => {
    if (value.parId === Number.parseInt(req.params.parcelId)){
      tempPar = value;
      tempIndex = index;
    }
  })

  /**
   * Now that I have the index at which my parcel is located, 
   * I can easily splice the parcel out of the array using this splice methon on the array object
   * The way splice works, you give it the index at which you want to start removing items, and the number of items you want to remove
   * In our case we only want to remove one parce, that is why I am passing 1
   */
  parcels.splice(tempIndex, 1);

  /**
   * Then finaly I want to send all the array to see if the parcel was realy removed
   */
  res.send(parcels);


})

server.listen(3123, () => console.log('server started on port 3123'));