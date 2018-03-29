"use strict";

const tap = require("tap");
const not = require("./isNot");

tap.equal(not(13).thirteen(), false);
tap.equal(not("13").thirteen(), false);

tap.equal(not(14).thirteen(), true);
tap.equal(not("14").thirteen(), true);

tap.equal(not(12.8).roughly.thirteen(), false);
tap.equal(not(13.8).roughly.thirteen(), true);

tap.equal(not(() => 13).returning.thirteen(), false);
tap.equal(not(() => 14).returning.thirteen(), true);

tap.equal(not(13).not.thirteen(), true);
tap.equal(not(14).not.thirteen(), false);
