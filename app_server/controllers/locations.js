const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
}

const formatDistance = (distance) =>{
  let thisDistance=0;
  let unit = 'm';
  if (distance > 1000) {
    thisDistance = parseFloat(distance / 1000).toFixed(1);
    unit = 'km';
  } else {
    thisDistance = Math.floor(distance)
  }
  return thisDistance + unit;
}
/* GET 'home' page */
const homelist = (req, res) => {
  const path = '/api/locations';
  const requestOptions = {
    url : `${apiOptions.server}${path}`,
    method: 'GET',
    json:{},
    qs: {
      lng: -0.9120884,
      lat: 51.455041,
      maxDistance: 20
    }
  }
  request(requestOptions,(err,response, body) => {
    let data;
    data = body.map((item)=>{
      item.distance = formatDistance(item.distance);
      return item;
    })
    renderHomepage(req,res,data)
  })

};

const renderHomepage = (req,res,responseBody) => {
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
    locations: responseBody
  });
}
/* GET 'Location info' page */
const locationInfo = (req, res) => {
  res.render('index', {title: 'Location info'});
};
/* GET 'Add review' page */
const addReview = (req, res) => {
  res.render('index', {title: 'Add review'});
};

module.exports = {
  homelist, locationInfo, addReview
}