module.exports = {
  api: '/api/findyou',
  response: function (req, res) {
     res.json({name:`AI智能空间`,url:'aiplat.com',q:req.query});
  }
}