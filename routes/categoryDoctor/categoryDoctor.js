const CategoryDoctor = require("../../database/Schema/Schema").CategoryDoctor;

const categoryDoctor = (req, res) => {
  CategoryDoctor.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(403).json(error);
    });
};

const deleteCategory = (req, res) => {
  const { _id } = req.body;

  CategoryDoctor.deleteOne({ _id })
    .then((sucess) => {
      res.send("success");
    })
    .catch((err) => {
      res.send("error");
    });
};

const editCategory = (req, res) => {
  const { name, description, image, _id } = req.body;
  CategoryDoctor.updateOne({ _id }, { $set: { name, description, image } })
    .then((cate) => {
      res.send("success");
    })
    .catch((err) => {
      res.send("error");
    });
};

const addCategories = (req, res) => {
  const { name, image, description } = req.body;
  const category = new CategoryDoctor({ name, image, description });

  category
    .save()
    .then((category) => {
      res.status(200).end("success");
    })
    .catch((err) => {
      res.status(200).send("Error: " + err);
    });
};

module.exports = {
  categoryDoctor,
  editCategory,
  deleteCategory,
  addCategories,
};
