const routes = require('express').Router(); // Calling router function

// First route
routes.route('/api/categories')
    .get((req,res) => res.json('Get request from Categories') ); // Get request/ handler function

module.exports = routes;