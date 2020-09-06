// var mongoose = require('mongoose');
//
// var locationSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true //必填项
//   },
//   address: String,
//   rating: {
//     type: Number,
//     'default': 0, //添加默认值
//     min: 0,
//     max: 5 //取值范围
//   },
//   facilities: [String],
//   coords: {
//     type: {type: String},
//     coordinates: [Number]
//   }
// });
// locationSchema.index({coords: '2dsphere'})
// mongoose.model('Location', locationSchema);
