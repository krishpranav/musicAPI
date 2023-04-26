const base = require('./repository-base');

const songsString = "./data/songs.json"

exports.findAllSongs = () => {
  return base.findAll(songsString);
};

exports.findSongById = (id) => {
  return base.findById(songsString, id);
};

exports.createSong = (song) => {
  return base.create(songsString, song);
};

exports.updateSong = (id, song) => {
  return base.update(songsString, id, song);
};

exports.deleteSong = (id) => {
  return base.deleteRecord(songsString, id);
};