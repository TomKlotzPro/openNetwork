const upload = require("../middleware/upload");
const Product = require("../models/product");

const uploadFile = async (req, res) => {
  try {
    await upload(req, res);
    console.log("ID ", req.body.projectId);
    Product.findByIdAndUpdate(
      req.body.projectId,
      { image: req.file.filename },
      (error, docs) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Updated User : ", docs);
        }
      }
    );
    //console.log(req.file);
    if (req.file == undefined) {
      console.log(`You must select a file.`);
    }
    console.log(`File has been uploaded.`);
  } catch (error) {
    //console.log(error);
    console.log(`Error when trying upload image: ${error}`);
  }
};

module.exports = {
  uploadFile: uploadFile
};
