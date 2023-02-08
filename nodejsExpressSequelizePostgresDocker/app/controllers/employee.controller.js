//business logic for crud
const Employee = require('../models/employees.model');

//get all logic
exports.getAll = async(req,res, next) => {
    try {
        //get all by findAll function
        const ALL = await Employee.findAll();
        return res.status(200).json(ALL);
    } catch (error) {
        return res.status(500).json(error);
    }
}

//getOne employee
exports.getOne = async (req, res, next) => {
    try {
        //get by primarykey // from url
        const employee = await Employee.findByPk(req.params.id);
        return res.status(200).json(employee);
    } catch (error) {
        return res.status(500).json(error);
    }
}
//create one employee
exports.createOne = async (req, res, next) => {
    try {
        //get all the data request
        const EMPLOYEE_MODEL ={
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            dept: req.body.dept,
            title: req.body.title,
            email: req.body.email,
            salary: req.body.salary,
            birthdate: req.body.birthdate,
            joindate: req.body.joindate,

        }
        try {
            //employee created here
            const employee = await Employee.create(EMPLOYEE_MODEL);
            return res.status(200).json(employee)
        } catch (error) {
            //catching error
            return res.status(500).json(error);
        }
    } catch (error) {
        //catching error
        return res.status(500).json(error);
    }
}
exports.updateOne = async(req, res, next) => {
    try {
        const EMPLOYEE_MODEL ={
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            dept: req.body.dept,
            title: req.body.title,
            email: req.body.email,
            salary: req.body.salary,
            birthdate: req.body.birthdate,
            joindate: req.body.joindate,

        }
        try {
            const employee = await Employee.update(EMPLOYEE_MODEL, {where: {id: req.params.id}});
            return res.status(200).json(employee)
        } catch (error) {
            return res.status(500).json(error);

        }
    } catch (error) {
        return res.status(500).json(error);
    }
}


//delete employee
exports.deleteOne = async (req, res, next) => {
    try {
        //delete by id params
        const employee = await Employee.destroy({where:{id: req.params.id}});
        return res.status(200).json(employee)
    } catch (error) {
        return res.status(500).json(error)
    }
}