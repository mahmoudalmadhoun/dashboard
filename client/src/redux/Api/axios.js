import axiosDefault from "axios";

// const isProduction = process.env.NODE_ENV === "production";

// https://colorhunt.co/palette/245953408e91e49393d8d8d8
// const baseURL = 'https://www.api.mirstad.se'
const baseURL = 'http://localhost:4000'

const defaultOptions = {
  baseURL,
};

const axios = axiosDefault.create(defaultOptions);

export default axios;