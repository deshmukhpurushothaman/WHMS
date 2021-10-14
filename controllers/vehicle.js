const Vehicle = require('../models/vehicle');
const _ = require('lodash');
const formidable = require('formidable');
const fs = require('fs');
const normalize = require('normalize-url');
const dotenv = require('dotenv');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  25
);

exports.createVehicle = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  let vehicle = new Vehicle();
  vehicle.vehicleNumber = req.body.vehicleNumber;
  vehicle.vehicleName = req.body.vehicleName;
  vehicle.capacity = req.body.capacity;

  vehicle.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    return res.json({ result });
  });

  //   form.parse(req, async (err, fields, files) => {
  //     if (err) {
  //       return res.status(400).json({
  //         error: 'Issue in parsing Input',
  //       });
  //     }
  //     console.log('Create Vehicle ', req.body);
  //     //const { customerName, customerAddress, phoneNumber, status } = fields;

  //     let vehicle = new Vehicle();

  //     vehicle.save((err, result) => {
  //       if (err) {
  //         return res.status(400).json({
  //           error: errorHandler(err),
  //         });
  //       }
  //       return res.json({ result });
  //     });
  //   });
};
