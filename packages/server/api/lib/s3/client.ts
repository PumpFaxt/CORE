const s3 = new Bun.S3Client({
    accessKeyId: Bun.env.R2_ACCESS_KEY_ID,
    secretAccessKey: Bun.env.R2_SECRET_ACCESS_KEY,
    bucket: Bun.env.R2_BUCKET_NAME,
    endpoint: Bun.env.R2_ENDPOINT,
});

export default s3;
