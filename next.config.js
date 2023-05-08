/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.stack.imgur.com",
        port: "",
        pathname: "http://i.stack.imgur.com/SBv4T.gif",
      },
    ],
  },
};
