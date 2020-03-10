/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable indent */
const model = require('../models/index');

exports.todotask_get_all = (req, res, next) => {
    model.TodoTasks.findAll({})
        .then((todo) => res.json({
            error: false,
            data: todo,
        }))
        .catch((error) => res.json({
            error: true,
            data: [],
            error: error,

        }));
};


exports.todotask_post = (req, res, next) => {
    let {
        project_name,
        task_name,
        assignee,
        due_date,
        assigner,
        updates,
        status,
    } = req.body;
    updates = 'None so far';
    status = 'In progress';
    model.TodoTasks.create({
            project_name,
            task_name,
            assignee,
            due_date,
            assigner,
            updates,
            status,
        })
        .then((todo) => res.status(201).json({
            error: false,
            data: todo,
            message: 'New todoTask has been created.',
        }))
        .catch((error) => res.json({
            error: true,
            data: [],
            error: error,
        }));
};


exports.todotask_get_one = (req, res, next) => {
    const task_id = req.prams.id;
    model.TodoTasks.findOne({
            where: {
                id: task_id,
            },
        })
        .then((task) => res.status(200).json({
            error: false,
            data: task,
            message: 'Task found',
        }))
        .catch((error) => res.status(500).json({
            error: true,
            data: [],
            error: error,
        }));
};

exports.todotask_update = async(req, res, next) => {
    const task_id = req.params.id;

    const currentTask = await model.TodoTasks.findOne({
        where: {
            id: task_id,
        },
    });
    const currentUpdate = currentTask.updates;
    const currentUpdateDate = currentTask.updatedAt.toString();
    const updatedValue = `${currentUpdate} at ${currentUpdateDate}\n New update at ${Date.now().toString()}:${req.body.updateMessage}`;
    const updatetask = await model.TodoTasks.update({
        updates: updatedValue,
    }, {
        where: {
            id: task_id,
        },
    });
    if (updatetask) {
        // code to trigger a notification
        return res.status(201).json({
            error: false,
            data: updatetask,
            message: 'Task updated successfuly',
        });
    }
};

exports.todotask_update_completion = async(req, res, next) => {
    const task_id = req.params.id;
    const status = req.body.filedStatus;
    // eslint-disable-next-line no-unused-vars
    const updatestatus = await models.TodoTasks.update({
        status: status,
    }, {
        where: {
            id: task_id,
        },
    });

    return res.status(201).json({
        error: false,
        message: 'Task status updated successfuly',
    });
};