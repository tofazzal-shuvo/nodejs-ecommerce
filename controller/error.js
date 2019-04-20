
const path = require('path');
const rootDir = require('../utility/path');

module.exports.get404 = (req, res, next)=>{
    //res.status(404).sendFile(path.join(rootDir, 'views', 'error', 'error.html'));
    res.render('error/error.ejs', {docTitle:"Object Not Found!",path: 'error'});
};