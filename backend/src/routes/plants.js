const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello plants");
});

// FILE STORAGE
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public"); // TODO change to more meaningful folder, based on userID etc.
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // TODO maybe change name to include plantID etc.
  },
});

var upload = multer({ storage: storage }).single("file");

router.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

router.get("/download/:file", (req, res) => {
  const fileLocation = req.params.file;
  const root = path.join(__dirname, "../../public/");
  res.sendFile(`${fileLocation}`, { root: root });
});

module.exports = router;
