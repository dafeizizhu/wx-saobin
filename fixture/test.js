var fs = require('fs')

var files = [
  'fixture//CCInvitation/getInvitationForMe',
  'fixture//CCInvitation/getMyInvitation',
  'fixture//CCRequest/answerRequest',
  'fixture//CCRequest/delMyRequest',
  'fixture//CCRequest/getMyRequest',
  'fixture//CCRequest/getRequestForMe',
  'fixture//CCRequest/postRequest',
  'fixture//CCRequest/searchRequest',
  'fixture//CCTravel/getMyComment',
  'fixture//CCTravel/getMyTravel',
  'fixture//CCTravel/postTravel',
  'fixture//CCTravel/searchTravel',
  'fixture//CCUsers/getAccountStatus',
  'fixture//CCUsers/getUserInfo',
  'fixture//CCUsers/register'
]

files.forEach(filePath => {
  fs.readFile(filePath, {
    encoding: 'utf-8'
  }, (err, body) => {
    console.log(filePath, body.length)
    console.log(JSON.parse(body))
  })
})
