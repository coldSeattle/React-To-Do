import axios from "axios";

export const root = axios.create({
  headers: {
    "Content-Type": "application/json" /*or whatever type is relevant */,
    Accept: "application/json" /* ditto */,
  },
});
