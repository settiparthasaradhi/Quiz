const data = require('../Data/questions');

const Questions = async (req, res) => {
    try {
        const questionsData = await data;  
        res.status(200).json(questionsData);
    } catch (error) {
        //console.error('Error fetching questions:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = Questions;
