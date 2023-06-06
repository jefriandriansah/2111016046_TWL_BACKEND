const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(express.static('public'));

app.use(cors());
app.use(express.json());


// multer for image upload
const multer = require('multer');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images/Profiles");
  },

  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + " - " + file.originalname);
  }
});

const upload = multer({ storage: storage })

app.get("/api/upload", (req, res) => {
  res.render("upload");
});

app.post("/api/upload", upload.single("image"), (req, res) => {
  const imagePath = req.file.path;
  console.log(imagePath + ' berhasil diupload');

  // Mengembalikan nilai path pada response
  const fileName = path.basename(imagePath);
  console.log( 'Nama File: ' + fileName);
  res.status(200).json({
    message: 'File berhasil diupload',
    path: fileName 
  });

});



// Start the server
app.listen(3001, () => {
  console.log('Server started on port 3001');
});
