var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: '/upload' });
var IPFS = require('ipfs')
var node = new IPFS();

/* GET upload page */
router.get('/upload', function(req, res, next) {
  res.render('upload');
});
/* POST upload page */
router.post('/upload', upload.single('filetoupload'), function(req, res, next) {
      var uploadedfile = {
        upload_path: req.file.path,
        target_path: './temp/' + req.file.originalname,
        original_name: req.file.originalname,
        encoding: req.file.encoding,
        mimeType: req.file.mimetype,
        sizeInBytes: req.file.size,
        uploaderIP: (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress,
        timeOfUpload: Date.now()
      };

      // Kopiere das File in das temp Verzeichnis und lösche den Upload-Stream
      fs.rename(uploadedfile.upload_path, uploadedfile.target_path, function(err) {
          if (err) throw err;
          fs.unlink(uploadedfile.upload_path, function() {
              if (err) throw err;
              res.send('File uploaded to: ' + uploadedfile.target_path + ' - ' + uploadedfile.sizeInBytes + ' bytes');
          });
      });
      //Speichere die Meta-Informationen als Log in die BigChainDB
      //TODO: Code mich bitte!


      //Lade Datei in das IPFS Netzwerk & zeige den Fortschritt an
      node.on('ready', () => {
        node.id((err, id) => {
            if (err) {
                return console.log(err)
            }
            console.log(id)
        })
        // Der Node ist jetzt ready
        const files = [
          {
            path: uploadedfile.target_path,
            content: File.read(uploadedfile.target_path, null)
          }
        ];
        
        ipfs.files.add(files, function (err, files) {
          // 'files' will be an array of objects containing paths and the multihashes of the files added
          if (err) {
              console.log(err);
          } else {
              console.log(files)
          }
        });

        // Einen Node anhalten
        node.stop(() => {
          // Node ist jetzt offline
          
        })
      });
});
module.exports = router;
