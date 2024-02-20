const imageToBase64 = (imagePath) => {
    return new Promise((resolve, reject) => {
      fs.readFile(imagePath, (err, data) => {
        if (err) {
          reject(err); // Handle file read errors
        } else {
          const base64Image = Buffer.from(data).toString('base64');
          const imgSrcString = `data:image/jpeg;base64,${base64Image}`;
          resolve(imgSrcString); // Return the Base64 string
        }
      });
    });
  };


  const CusFileName = (file) => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    console.log("file", file);
    const formattedToday = `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
    return `${formattedToday}_${file.originalname}`;
  }

  
module.exports = {
    imageToBase64,
    CusFileName
}