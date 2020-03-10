/* eslint-disable indent */
const model = require('../models/index');

exports.todo_get_all = (req, res, next) => {
    model.Todo.findAll({})
        .then((todo) => res.json({
            error: false,
            data: todos,
        }))
        .catch((error) => res.json({
            error: true,
            data: [],
            error: error,

        }));
};

exports.todo_post = (req, res, next) => {
    const {
        title,
        description,
    } = req.body;
    model.Todo.create({
            title: title,
            description,
        })
        .then((todo) => res.status(201).json({
            error: false,
            data: todo,
            message: 'New todo has been created.',
        }))
        .catch((error) => res.join({
            error: true,
            data: [],
            error: error,
        }));
};

exports.todo_put = (req, res, next) => {
    const todoId = req.params.id;

    const { title, description } = req.body;

    model.Todo.update({
            title: title,
            description: description,
        }, {
            where: {
                id: todoId,
            },
        })
        .then((todo) => res.json({
            error: false,
            message: 'todo has been updated.',
        }))
        .catch((error) => res.json({
            error: true,
            error: error,
        }));
};

exports.todo_delete = (req, res, next) => {
    const todoId = req.params.id;

    model.Todo.destroy({
            where: {
                id: todoId,
            }
        })
        .then((status) => res.json({
            error: false,
            message: 'todo has been delete.',
        }))
        .catch((error) => res.json({
            error: true,
            error: error,
        }));
};