import dotenv from "dotenv";
dotenv.config();
const { DOMAIN } = process.env;

import Singer from "../models/SingerSchema.js";

const getAllSingers = async (req, res) => {
  try {
    const singers = await Singer.find();
    const result = singers.map((singer) => {
      singer.image = `${DOMAIN}/images/${singer.image}`;
      return singer;
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingerByName = async (req, res) => {
  try {
    const { participant } = req.query;
    // const partic = decodeURI(deelnemer);
    const singers = await Singer.find();

    if (participant) {
      const filteredSinger = singers.filter((singer) =>
        singer.participant.toLowerCase().includes(participant.toLowerCase())
      );
      const result = filteredSinger.map((singer) => {
        singer.image = `${DOMAIN}/images/${singer.image}`;
        return singer;
      });
      return res.status(200).json({ data: result[0] });
    }
    const updatedSingers = singers.map((singer) => {
      singer.image = `${DOMAIN}/images/${singer.image}`;
      return singer;
    });
    res.status(200).json(updatedSingers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingerById = async (req, res) => {
  try {
    const { id } = req.params;
    const singer = await Singer.findById(id);
    singer.image = `${DOMAIN}/images/${singer.image}`;
    res.status(200).json(singer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addSinger = async (req, res) => {
  try {
    const { name, image, place, episodeCount, startedEpisode, participant } =
      req.body;
    const result = await Singer.create({
      name,
      image,
      place,
      episodeCount,
      startedEpisode,
      participant,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSinger = async (req, res) => {
  try {
    const { name, image, place, episodeCount, startedEpisode, participant } =
      req.body;
    const result = await Singer.create({
      name,
      place,
      image,
      episodeCount,
      startedEpisode,
      participant,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSinger = async (req, res) => {
  try {
    const { id } = req.params;
    await Singer.deleteOne({ _id: id });
    res.status(200).json("Deleted with success");
  } catch (error) {
    console.error(error);
  }
};

export {
  getAllSingers,
  getSingerByName,
  getSingerById,
  addSinger,
  updateSinger,
  deleteSinger,
};
