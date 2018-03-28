"use strict";

const tap = require("tap");
const not = require("./isNot");

tap.equal(not(13).thirteen(), false);
tap.equal(not("13").thirteen(), false);

tap.equal(not(14).thirteen(), true);
tap.equal(not("14").thirteen(), true);

// TODO: Add more tests
