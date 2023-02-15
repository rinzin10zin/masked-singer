import mongoose from "mongoose";

const singerSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: false,
  },
  episodeCount: {
    type: String,
    required: false,
  },
  startedEpisode: {
    type: String,
    required: true,
  },
  participant: {
    type: String,
    required: false,
  },
});

const Singer = mongoose.model("Singer", singerSchema);

export default Singer;
