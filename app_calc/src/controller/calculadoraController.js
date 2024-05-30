const calculadora = require('../calculadora/calculadora');

exports.calculate = (req, res) => {
    const { num1, num2, operation } = req.body;
    if (isNaN(num1) || isNaN(num2)) {
        return res.redirect('/error?message=Invalid+input,+please+enter+numeric+values.');
    }

    const result = calculadora.calculate(Number(num1), Number(num2), operation);
    res.render('resultado', { result });
};
