/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["mks-sistemas.nyc3.digitaloceanspaces.com"],
  },
  env: {
    BASE_API_URL:
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products",
  },
};

export default nextConfig;