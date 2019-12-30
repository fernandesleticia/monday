const moment = require('moment-timezone');

exports.post = (req, res, next) => {
    
    let dateReceived = req.body.today
    
    if(!dateReceived) {
        return res.status(400).send({
          success: 'false',
          message: 'today is required'
        });
    } else if(!(moment(dateReceived, "YYYY-MM-DD", true).isValid())){
        return res.status(400).send({
          success: 'false',
          message: 'invalid format of date'
        });
    }
  
    const today = moment.tz(dateReceived + " 00:00:00", "America/Fortaleza");
    const tomorrow = moment(today).add(1, 'days');
    
    const data = {
       tomorrow: tomorrow.format('YYYY-MM-DD HH:mm:ss Z')
    }
    
    return res.status(201).send({
      success: 'true',
      message: 'date retrieved successfully',
      data
    })
};
