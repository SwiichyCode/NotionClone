const db = require("../models");
const Board = db.board;

exports.addBoard = (req, res) => {
  const board = new Board({
    id: req.body.id,
    name: req.body.name,
    owner: req.body.owner,
  });

  board.save((err, board) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "Board was added successfully!" });
  });
};

exports.getBoards = (req, res) => {
  Board.find({ owner: req.params._id }, (err, boards) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send(boards);
  });
};

exports.deleteBoard = (req, res) => {
  Board.findOneAndDelete({ id: req.params.id }, (err, board) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "Board was deleted successfully!" });
  });
};
