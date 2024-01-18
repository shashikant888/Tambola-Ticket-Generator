const tambolaService = require("../services/tambolaService");
const TambolaTicket = require('../models/tambolaTicket');


const generateTickets = async (req, res, next) => {
  try {
    const { numberOfSets } = req.body;
    const tickets = await tambolaService.generateTickets(numberOfSets);
    res.json({ tickets });
  } catch (error) {
    next(error);
  }
};

const getAllTickets = async (req, res, next) => {
  try {
    const { page, pageSize } = req.body;
    const offset = (page - 1) * pageSize;

    const data = await tambolaService.findAll({
      offset,
      limit: pageSize,
    });

    const totalRecords = await TambolaTicket.count();

    res.json({
      data,
      meta: {
        totalRecords,
        currentPage: page,
        pageSize,
      },
    });
  } catch (error) {
    next(error);
  }
};

const deleteTicket = async (req, res, next) => {
  try {
    const { ticketId } = req.params;
    const deletedRows = await tambolaService.deleteTicket(ticketId);

    if (deletedRows > 0) {
      res.json({ message: 'Ticket deleted successfully' });
    } else {
      res.status(404).json({ message: 'Ticket not found' });
    }
  } catch (error) {
    next(error);
  }
};


const deleteAllTickets = async (req, res, next) => {
  try {
    const deletedRows = await tambolaService.deleteAllTickets();

    res.json({ message: `Deleted ${deletedRows} tickets` });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  generateTickets,
  getAllTickets,
  deleteTicket,
  deleteAllTickets
};
