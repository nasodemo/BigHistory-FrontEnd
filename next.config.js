/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          "www.gravatar.com",
          "localhost",
          "ec2-3-38-106-172.ap-northeast-2.compute.amazonaws.com"
        ]
      }
}

module.exports = nextConfig