const express = require("express");
const video = require("../models/video");
const axios = require("axios");

const router= express.Router();

//Helper Function(extract video Id)