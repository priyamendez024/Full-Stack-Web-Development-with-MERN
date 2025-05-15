const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.uploadToCloud = async (req, res, next) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: req.file.originalname,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
    ACL: 'public-read',
  };

  try {
    const data = await s3.upload(params).promise();
    res.status(201).json({ url: data.Location });
  } catch (err) {
    next(err);
  }
};