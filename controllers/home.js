const Marker = require('../models/marker');
const Post = require('../models/blog');

exports.showHome = (req, res, next) => {
  res.render('home', {
    pageTitle: 'Accueil',
    path: '/',
  });
};

exports.postAddMarker = (req, res, next) => {
  const lieu = req.body.lieu;
  const longitude = req.body.longitude;
  const latitude = req.body.latitude;
  const pays = req.body.pays;
  const ville = req.body.ville;
  const categorie = req.body.categorie;
  const description = req.body.description;
  // la partie sur le coté droit des deux points, font referencee aux donnéées que je reçois de mon action du controleur juste au dessus, les constantes
  // la partie gauche, fait reference aux clé de mon productSchema et on construit un nouveau produit basé sur ce model
  console.log(lieu, longitude, latitude, pays, ville, categorie, description);
  const marker = new Marker({
    lieu: lieu,
    longitude: longitude,
    latitude: latitude,
    pays: pays,
    ville: ville,
    categorie: categorie,
    description: description,
  });
  marker
    .save()
    .then((result) => {
      console.log('le resultat', result);
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postAddPost = (req, res, next) => {
  res.render('page/add-post', {
    pageTitle: 'Ajouter un Article',
    path: '/page/add-post',
  });
  const title = req.body.title;
  const content = req.body.content;
  const imgURL = req.body.imgURL;
  const resume = req.body.resume;
  // la partie sur le coté droit des deux points, font referencee aux donnéées que je reçois de mon action du controleur juste au dessus, les constantes
  // la partie gauche, fait reference aux clé de mon productSchema et on construit un nouveau produit basé sur ce model
  console.log(title, content, imgURL, resume);
  const post = new Post({
    title: title,
    content: content,
    imgURL: imgURL,
    resume: resume,
  });
  post
    .save()
    .then((result) => {
      console.log('le resultat', result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getMarker = (req, res, next) => {
  Marker.find()
    .then((markers) => {
      res.render('page/about', {
        marker: markers,
        pageTitle: 'A Propos',
        path: '/page/about',
        myMarker: markers[1].longitude,
      });
      console.log(markers[0].lieu);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.showMarker = (req, res, next) => {
  Marker.find().then((markers) => {
    res.render('page/destination', {
      marker: markers,
      pageTitle: 'Destination',
      path: '/page/destination',
      lgtd: markers[2].longitude,
      latd: markers[2].latitude,
      lgtd1: markers[3].longitude,
      latd1: markers[3].latitude,
    });

    var testmark = markers[1].lieu;
    console.log('estcequesamarche', testmark);
  });
};

exports.showBlog = (req, res, next) => {
  res.render('page/add-marker', {
    pageTitle: 'Blog',
    path: '/page/add-marker',
  });
};

exports.showContact = (req, res, next) => {
  res.render('page/contact', {
    pageTitle: 'Contact',
    path: '/page/contact',
  });
};
