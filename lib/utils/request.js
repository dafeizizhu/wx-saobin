export function postFormData(url, formData, cb) {
  const defaultData = {
    error_code: -1,
    msg: 'Ajax Error'
  }

  const req = new XMLHttpRequest()
  req.onreadystatechange = () => {
    if (req.readyState == 4) {
      if (req.status == 200) {
        try {
          cb(JSON.parse(req.responseText))
        } catch (err) {
          cb(defaultData)
        }
      } else {
        cb(defaultData)
      }
    }
  }
  req.open('POST', url)
  req.send(formData)
}
