const reqCars = require.context ( './cars', true, /\.jpeg$/ )

const images = reqCars.keys().map ( path => ({ path, src: reqCars ( path ) }) )

export default images;
