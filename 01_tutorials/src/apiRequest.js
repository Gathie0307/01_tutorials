const apiRequest = async(url = '', optionsObj = null, errMsg = null) => {
  try{
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error('Please Reload the app')
  } catch(err) {
    errMsg = err.message;

  } finally {
    return errMsg;
  }
}

export default apiRequest;
