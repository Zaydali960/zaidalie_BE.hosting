const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
      trim: true,
    },
    projectDesc: {
      type: String,
      required: true,
      trim: true,
    },
    projectImg: {
      type: String, // store image URL (from upload service like Cloudinary)
      required: true,
    },
    githubLink: {
      type: String,
      trim: true,
    },
    projectLink: {
      type: String, // live site or deployed link
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
