const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const adminRoutes = require('./routes/admin');

const homePage = require('./controllers/home');

app.use(adminRoutes);
app.use(homePage.postAddPost);
app.use(homePage.postAddMarker);
app.use(homePage.showHome);
app.use(homePage.showMarker);
app.use(homePage.showBlog);
app.use(homePage.getMarker);
app.use(homePage.showContact);

//Création du Schema Marker

//Les elements pour le marker, longitude, latitude, lieu, categorie du lieu, informations complémentaire
// const Schema = mongoose.Schema;

// const markerSchema = new Schema({
//   lieu: {
//     type: String,
//     required: true
//   },
//   longitude: {
//     type: "Point",
//     coordinate: [40,5]
//   },
//   latitude: {
//     type: "Point",
//     coordinate,
//   }
// })

// const City = db.model('City', new Schema({
//   name: String,
//   location: pointSchema
// }));

mongoose
  .connect('Renseigne ton lien de connection a mongoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
