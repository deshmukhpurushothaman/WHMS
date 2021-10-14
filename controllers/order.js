const Order = require('../models/order');
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

exports.createOrder = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  const orderId = 'order_' + nanoid();
  const confinement_no = 'cn_' + nanoid();
  let order = new Order();
  order.orderId = orderId;
  order.customerName = req.body.customerName;
  order.customerAddress = req.body.customerAddress;
  order.phoneNumber = req.body.phoneNumber;
  order.products = req.body.products;
  order.status = req.body.status;
  order.confinement_no = confinement_no;
  order.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    return res.json({ result });
  });

  // form.parse(req, async (err, fields, files) => {
  //   if (err) {
  //     return res.status(400).json({
  //       error: 'Issue in parsing Input',
  //     });
  //   }
  //   console.log('Create Order ', req.body);
  //   const { customerName, customerAddress, phoneNumber, status } = fields;

  //   let order = new Order();
  //   order.orderId = orderId;
  //   order.save((err, result) => {
  //     if (err) {
  //       return res.status(400).json({
  //         error: errorHandler(err),
  //       });
  //     }
  //     return res.json({ result });
  //   });
  // });
};
