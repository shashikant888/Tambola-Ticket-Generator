const TambolaTicket = require('../models/tambolaTicket');

const generateRandomUniqueNumber = (min, max, usedNumbers) => {
  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (usedNumbers.has(randomNum));
  usedNumbers.add(randomNum);
  return randomNum;
};

const generateTicket = () => {
  const usedNumbers = new Set();
  const ticket = [];

  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 9; j++) {
      const num = generateRandomUniqueNumber(j * 10 + 1, (j + 1) * 10, usedNumbers);
      row.push(num);
    }
    ticket.push(row);
  }

  return ticket;
};

const generateTickets = async (numberOfSets) => {
  const generatedTickets = {};

  for (let setNumber = 1; setNumber <= numberOfSets; setNumber++) {
    const ticketsInSet = [];

    for (let ticketNumber = 1; ticketNumber <= 6; ticketNumber++) {
      const ticket = generateTicket();

      // Saving the ticket to the database...
      await TambolaTicket.create({
        setNumber,
        ticketNumber,
        number1: ticket[0][0],
        number2: ticket[0][1],
        number3: ticket[0][2],
        number4: ticket[0][3],
        number5: ticket[0][4],
        number6: ticket[1][0],
        number7: ticket[1][1],
        number8: ticket[1][2],
        number9: ticket[1][3],
      });

      ticketsInSet.push(ticket);
    }

    generatedTickets[setNumber] = ticketsInSet;
  }

  return generatedTickets;
};
const findAll = async ({ offset, limit }) => {
  try {
    const tickets = await TambolaTicket.findAll({
      offset,
      limit,
    });
    return tickets;
  } catch (error) {
    throw error;
  }
};

const deleteTicket = async (ticketId) => {
  try {
    const deletedRows = await TambolaTicket.destroy({
      where: { id: ticketId },
    });
    return deletedRows;
  } catch (error) {
    throw error;
  }
};

const deleteAllTickets = async () => {
  try {
    await TambolaTicket.destroy({
      where: {}, // Empty condition will to delete all rows
      truncate: true, // it reset auto-increment counter for the table
    });

    return 'All tickets deleted successfully';
  } catch (error) {
    console.error('Error deleting tickets:', error);
    throw error;
  }
};


module.exports = {
  generateTickets,
  findAll,
  deleteTicket,
  deleteAllTickets
};
