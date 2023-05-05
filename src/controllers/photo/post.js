const postPhoto = async (req, res) => {
  //parse the request
  //interact with model
  //send a response
  const {
    session,
    db: { Photo },
    body: { url, caption },
  } = req;
  
  const photo = await Photo.post(url, caption, session.userId);
  // console.log(session.userId)
  res.send(photo);
}


module.exports = postPhoto;
