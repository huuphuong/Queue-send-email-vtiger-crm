var queue = require('./queue');
var ObjectId = require('mongoose').Types.ObjectId;
var queueController = {};

queueController.add = function(data) {
    return new Promise(function(res, rej){
        const email = new queue({
            to: data.to,
            queueId: data.queueId,
            subject: data.subject,
            text: data.text,
            html: data.html,
            replyTo: data.replyTo,
            cc: data.cc,
            bcc: data.bcc,
            isSend: data.isSend,
            fileNameSend: data.fileNameSend,
            fileNameServer: data.fileNameServer

        });
        email.save(function (err) {
            if (err) rej(err);
            res('success');
        });
    });
};

queueController.getListByQueueId = function (queueId) {
    return new Promise(function (res, rej) {
        queue.find({queueId: queueId}, function (err, listQueue) {
            if(err) rej(err);
            if(listQueue){
                res(listQueue);
            }
        })
    })
};

module.exports = queueController;