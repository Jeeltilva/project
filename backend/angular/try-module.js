(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["try-module"],{

/***/ "+1d7":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/lastDayOfISOWeekYear/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lastDayOfISOWeekYear; });
/* harmony import */ var _getISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getISOWeekYear/index.js */ "BKKT");
/* harmony import */ var _startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfISOWeek/index.js */ "1dmy");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name lastDayOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the last day of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the last day of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `lastDayOfISOYear` to `lastDayOfISOWeekYear`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `getWeekYear`.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of an ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of an ISO week-numbering year for 2 July 2005:
 * var result = lastDayOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 00:00:00
 */

function lastDayOfISOWeekYear(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, arguments);
  var year = Object(_getISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(year + 1, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date = Object(_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fourthOfJanuary);
  date.setDate(date.getDate() - 1);
  return date;
}

/***/ }),

/***/ "+7QN":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addLeadingZeros; });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "+LmI":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return assign; });
function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

/***/ }),

/***/ "+lkT":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/setUTCDay/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setUTCDay; });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toInteger/index.js */ "/h9T");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "/Tr7");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requiredArgs/index.js */ "jIYg");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

/***/ }),

/***/ "/Eym":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/subWeeks/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return subWeeks; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _addWeeks_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addWeeks/index.js */ "r4sE");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name subWeeks
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * const result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */

function subWeeks(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
  return Object(_addWeeks_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "/Lp+":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarWeeks/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return differenceInCalendarWeeks; });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startOfWeek/index.js */ "aetl");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "JCDJ");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name differenceInCalendarWeeks
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the number of calendar weeks
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   { weekStartsOn: 1 }
 * )
 * //=> 2
 */

function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var startOfWeekLeft = Object(_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft, dirtyOptions);
  var startOfWeekRight = Object(_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight, dirtyOptions);
  var timestampLeft = startOfWeekLeft.getTime() - Object(_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(startOfWeekLeft);
  var timestampRight = startOfWeekRight.getTime() - Object(_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(startOfWeekRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
}

/***/ }),

/***/ "/Tr7":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toDate; });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "/h9T":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toInteger; });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "/pik":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatRFC3339/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatRFC3339; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isValid/index.js */ "Se/U");
/* harmony import */ var _lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/addLeadingZeros/index.js */ "+7QN");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");




/**
 * @name formatRFC3339
 * @category Common Helpers
 * @summary Format the date according to the RFC 3339 standard (https://tools.ietf.org/html/rfc3339#section-5.6).
 *
 * @description
 * Return the formatted date string in RFC 3339 format. Options may be passed to control the parts and notations of the date.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {0|1|2|3} [options.fractionDigits=0] - number of digits after the decimal point after seconds
 * @returns {String} the formatted date string
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.fractionDigits` must be between 0 and 3
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format:
 * const result = formatRFC3339(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format, 2 digits of second fraction:
 * const result = formatRFC3339(new Date(2019, 8, 18, 19, 0, 52, 234), { fractionDigits: 2 })
 * //=> '2019-09-18T19:00:52.23Z'
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format, 3 digits of second fraction
 * const result = formatRFC3339(new Date(2019, 8, 18, 19, 0, 52, 234), { fractionDigits: 3 })
 * //=> '2019-09-18T19:00:52.234Z'
 */

function formatRFC3339(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
  }

  var originalDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);

  if (!Object(_isValid_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  var options = dirtyOptions || {};
  var fractionDigits = options.fractionDigits == null ? 0 : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options.fractionDigits); // Test if fractionDigits is between 0 and 3 _and_ is not NaN

  if (!(fractionDigits >= 0 && fractionDigits <= 3)) {
    throw new RangeError('fractionDigits must be between 0 and 3 inclusively');
  }

  var day = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getDate(), 2);
  var month = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getMonth() + 1, 2);
  var year = originalDate.getFullYear();
  var hour = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getHours(), 2);
  var minute = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getMinutes(), 2);
  var second = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getSeconds(), 2);
  var fractionalSecond = '';

  if (fractionDigits > 0) {
    var milliseconds = originalDate.getMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, fractionDigits - 3));
    fractionalSecond = '.' + Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fractionalSeconds, fractionDigits);
  }

  var offset = '';
  var tzOffset = originalDate.getTimezoneOffset();

  if (tzOffset !== 0) {
    var absoluteOffset = Math.abs(tzOffset);
    var hourOffset = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(absoluteOffset / 60), 2);
    var minuteOffset = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absoluteOffset % 60, 2); // If less than 0, the sign is +, because it is ahead of time.

    var sign = tzOffset < 0 ? '+' : '-';
    offset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
  } else {
    offset = 'Z';
  }

  return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute, ":").concat(second).concat(fractionalSecond).concat(offset);
}

/***/ }),

/***/ "/pzQ":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isExists/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isExists; });
/**
 * @name isExists
 * @category Common Helpers
 * @summary Is the given date exists?
 *
 * @description
 * Checks if the given arguments convert to an existing date.
 *
 * @param {Number} year of the date to check
 * @param {Number} month of the date to check
 * @param {Number} day of the date to check
 * @returns {Boolean} the date exists
 * @throws {TypeError} 3 arguments required
 *
 * @example
 * // For the valid date:
 * var result = isExists(2018, 0, 31)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isExists(2018, 1, 31)
 * //=> false
 */
function isExists(year, month, day) {
  if (arguments.length < 3) {
    throw new TypeError('3 argument required, but only ' + arguments.length + ' present');
  }

  var date = new Date(year, month, day);
  return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
}

/***/ }),

/***/ "/rh5":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/eachDayOfInterval/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return eachDayOfInterval; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name eachDayOfInterval
 * @category Interval Helpers
 * @summary Return the array of dates within the specified time interval.
 *
 * @description
 * Return the array of dates within the specified time interval.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `eachDay` to `eachDayOfInterval`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   eachDay(new Date(2014, 0, 10), new Date(2014, 0, 20))
 *
 *   // v2.0.0 onward
 *
 *   eachDayOfInterval(
 *     { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) }
 *   )
 *   ```
 *
 * @param {Interval} interval - the interval. See [Interval]{@link docs/types/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.step=1] - the step to increment by. The value should be more than 1.
 * @returns {Date[]} the array with starts of days from the day of the interval start to the day of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.step` must be a number greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * const result = eachDayOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 9, 10)
 * })
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */

function eachDayOfInterval(dirtyInterval, options) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(interval.start);
  var endDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(interval.end);
  var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var dates = [];
  var currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);
  var step = options && 'step' in options ? Number(options.step) : 1;
  if (step < 1 || isNaN(step)) throw new RangeError('`options.step` must be a number greater than 1');

  while (currentDate.getTime() <= endTime) {
    dates.push(Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(currentDate));
    currentDate.setDate(currentDate.getDate() + step);
    currentDate.setHours(0, 0, 0, 0);
  }

  return dates;
}

/***/ }),

/***/ "0/gg":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfToday/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfToday; });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startOfDay/index.js */ "M34a");

/**
 * @name startOfToday
 * @category Day Helpers
 * @summary Return the start of today.
 * @pure false
 *
 * @description
 * Return the start of today.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the start of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */

function startOfToday() {
  return Object(_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Date.now());
}

/***/ }),

/***/ "08aW":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/getHours/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getHours; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * const result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */

function getHours(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var hours = date.getHours();
  return hours;
}

/***/ }),

/***/ "0HXF":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatRelative; });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

/***/ }),

/***/ "0LOL":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfMinute/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfMinute; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a minute
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */

function startOfMinute(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  date.setSeconds(0, 0);
  return date;
}

/***/ }),

/***/ "0UaF":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceStrict/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatDistanceStrict; });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "JCDJ");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../compareAsc/index.js */ "JhOC");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ "qVkf");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "emD/");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../locale/en-US/index.js */ "iSMj");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");







var MINUTES_IN_DAY = 1440;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_YEAR = 525600;
/**
 * @name formatDistanceStrict
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWordsStrict` to `formatDistanceStrict`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsStrict(
 *     new Date(2015, 0, 2),
 *     new Date(2014, 6, 2)
 *   ) //=> '6 months'
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceStrict(
 *     new Date(2014, 6, 2),
 *     new Date(2015, 0, 2)
 *   ) //=> '6 months'
 *   ```
 *
 * - `partialMethod` option is renamed to `roundingMethod`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsStrict(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     { partialMethod: 'ceil' }
 *   ) //=> '2 minutes'
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceStrict(
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { roundingMethod: 'ceil' }
 *   ) //=> '2 minutes'
 *   ```
 *
 * - If `roundingMethod` is not specified, it now defaults to `round` instead of `floor`.
 *
 * - `unit` option now accepts one of the strings:
 *   'second', 'minute', 'hour', 'day', 'month' or 'year' instead of 's', 'm', 'h', 'd', 'M' or 'Y'
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsStrict(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     { unit: 'm' }
 *   )
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceStrict(
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { unit: 'minute' }
 *   )
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.roundingMethod='round'] - which way to round partial units
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.roundingMethod` must be 'floor', 'ceil' or 'round'
 * @throws {RangeError} `options.unit` must be 'second', 'minute', 'hour', 'day', 'month' or 'year'
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = formatDistanceStrict(new Date(2014, 6, 2), new Date(2015, 0, 2))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00?
 * var result = formatDistanceStrict(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0)
 * )
 * //=> '15 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * var result = formatDistanceStrict(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> '1 year ago'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, in minutes?
 * var result = formatDistanceStrict(new Date(2016, 0, 1), new Date(2015, 0, 1), {
 *   unit: 'minute'
 * })
 * //=> '525600 minutes'
 *
 * @example
 * // What is the distance from 1 January 2015
 * // to 28 January 2015, in months, rounded up?
 * var result = formatDistanceStrict(new Date(2015, 0, 28), new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = formatDistanceStrict(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> '1 jaro'
 */

function formatDistanceStrict(dirtyDate, dirtyBaseDate, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(2, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_5__["default"];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain localize.formatDistance property');
  }

  var comparison = Object(_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = Object(_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyBaseDate);
    dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  } else {
    dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
    dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyBaseDate);
  }

  var roundingMethod = options.roundingMethod == null ? 'round' : String(options.roundingMethod);
  var roundingMethodFn;

  if (roundingMethod === 'floor') {
    roundingMethodFn = Math.floor;
  } else if (roundingMethod === 'ceil') {
    roundingMethodFn = Math.ceil;
  } else if (roundingMethod === 'round') {
    roundingMethodFn = Math.round;
  } else {
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  }

  var seconds = Object(_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateRight, dateLeft);
  var offsetInSeconds = (Object(_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dateRight) - Object(_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dateLeft)) / 1000;
  var minutes = roundingMethodFn((seconds - offsetInSeconds) / 60);
  var unit;

  if (options.unit == null) {
    if (minutes < 1) {
      unit = 'second';
    } else if (minutes < 60) {
      unit = 'minute';
    } else if (minutes < MINUTES_IN_DAY) {
      unit = 'hour';
    } else if (minutes < MINUTES_IN_MONTH) {
      unit = 'day';
    } else if (minutes < MINUTES_IN_YEAR) {
      unit = 'month';
    } else {
      unit = 'year';
    }
  } else {
    unit = String(options.unit);
  } // 0 up to 60 seconds


  if (unit === 'second') {
    return locale.formatDistance('xSeconds', seconds, localizeOptions); // 1 up to 60 mins
  } else if (unit === 'minute') {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 1 up to 24 hours
  } else if (unit === 'hour') {
    var hours = roundingMethodFn(minutes / 60);
    return locale.formatDistance('xHours', hours, localizeOptions); // 1 up to 30 days
  } else if (unit === 'day') {
    var days = roundingMethodFn(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 up to 12 months
  } else if (unit === 'month') {
    var months = roundingMethodFn(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', months, localizeOptions); // 1 year up to max Date
  } else if (unit === 'year') {
    var years = roundingMethodFn(minutes / MINUTES_IN_YEAR);
    return locale.formatDistance('xYears', years, localizeOptions);
  }

  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}

/***/ }),

/***/ "0Ug1":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInWeeks/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return differenceInWeeks; });
/* harmony import */ var _differenceInDays_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../differenceInDays/index.js */ "NoME");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name differenceInWeeks
 * @category Week Helpers
 * @summary Get the number of full weeks between the given dates.
 *
 * @description
 * Get the number of full weeks between two dates. Fractional weeks are
 * truncated towards zero.
 *
 * One "full week" is the distance between a local time in one day to the same
 * local time 7 days earlier or later. A full week can sometimes be less than
 * or more than 7*24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 7*24-hour periods, use this instead:
 * `Math.floor(differenceInHours(dateLeft, dateRight)/(7*24))|0`.
 *
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full weeks
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInWeeks(new Date(2014, 6, 20), new Date(2014, 6, 5))
 * //=> 2
 *
 * // How many full weeks are between
 * // 1 March 2020 0:00 and 6 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 8 weeks (54 days),
 * // even if DST starts and the period has
 * // only 54*24-1 hours.
 * var result = differenceInWeeks(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 6)
 * )
 * //=> 8
 */

function differenceInWeeks(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var diff = Object(_differenceInDays_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft, dirtyDateRight) / 7;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

/***/ }),

/***/ "0f5V":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfISOWeekYear/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfISOWeekYear; });
/* harmony import */ var _getISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getISOWeekYear/index.js */ "BKKT");
/* harmony import */ var _startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfISOWeek/index.js */ "1dmy");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */

function startOfISOWeekYear(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, arguments);
  var year = Object(_getISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date = Object(_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "1PZI":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/isYesterday/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isYesterday; });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isSameDay/index.js */ "G6Tw");
/* harmony import */ var _subDays_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subDays/index.js */ "Xep9");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name isYesterday
 * @category Day Helpers
 * @summary Is the given date yesterday?
 * @pure false
 *
 * @description
 * Is the given date yesterday?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is yesterday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * var result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */

function isYesterday(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, arguments);
  return Object(_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate, Object(_subDays_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Date.now(), 1));
}

/***/ }),

/***/ "1dmy":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfISOWeek/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfISOWeek; });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startOfWeek/index.js */ "aetl");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfISOWeek(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate, {
    weekStartsOn: 1
  });
}

/***/ }),

/***/ "1izz":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatDistance; });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

/***/ }),

/***/ "1unF":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfYear/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfYear; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */

function startOfYear(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var cleanDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var date = new Date(0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "1vjI":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfUTCWeek; });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toInteger/index.js */ "/h9T");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "/Tr7");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requiredArgs/index.js */ "jIYg");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "26Ho":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/areIntervalsOverlapping/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return areIntervalsOverlapping; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name areIntervalsOverlapping
 * @category Interval Helpers
 * @summary Is the given time interval overlapping with another time interval?
 *
 * @description
 * Is the given time interval overlapping with another time interval? Adjacent intervals do not count as overlapping.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `areRangesOverlapping` to `areIntervalsOverlapping`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   areRangesOverlapping(
 *     new Date(2014, 0, 10), new Date(2014, 0, 20),
 *     new Date(2014, 0, 17), new Date(2014, 0, 21)
 *   )
 *
 *   // v2.0.0 onward
 *
 *   areIntervalsOverlapping(
 *     { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *     { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 *   )
 *   ```
 *
 * @param {Interval} intervalLeft - the first interval to compare. See [Interval]{@link docs/types/Interval}
 * @param {Interval} intervalRight - the second interval to compare. See [Interval]{@link docs/types/Interval}
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.inclusive=false] - whether the comparison is inclusive or not
 * @returns {Boolean} whether the time intervals are overlapping
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For overlapping time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 * )
 * //=> true
 *
 * @example
 * // For non-overlapping time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 21), end: new Date(2014, 0, 22) }
 * )
 * //=> false
 *
 * @example
 * // For adjacent time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 30) }
 * )
 * //=> false
 *
 * @example
 * // Using the inclusive option:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 24) }
 * )
 * //=> false
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 24) },
 *   { inclusive: true }
 * )
 * //=> true
 */

function areIntervalsOverlapping(dirtyIntervalLeft, dirtyIntervalRight) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    inclusive: false
  };
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var intervalLeft = dirtyIntervalLeft || {};
  var intervalRight = dirtyIntervalRight || {};
  var leftStartTime = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(intervalLeft.start).getTime();
  var leftEndTime = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(intervalLeft.end).getTime();
  var rightStartTime = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(intervalRight.start).getTime();
  var rightEndTime = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(intervalRight.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(leftStartTime <= leftEndTime && rightStartTime <= rightEndTime)) {
    throw new RangeError('Invalid interval');
  }

  if (options.inclusive) {
    return leftStartTime <= rightEndTime && rightStartTime <= leftEndTime;
  }

  return leftStartTime < rightEndTime && rightStartTime < leftEndTime;
}

/***/ }),

/***/ "2AQE":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/eachWeekendOfMonth/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return eachWeekendOfMonth; });
/* harmony import */ var _eachWeekendOfInterval_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../eachWeekendOfInterval/index.js */ "YdWM");
/* harmony import */ var _startOfMonth_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfMonth/index.js */ "9ig3");
/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfMonth/index.js */ "jKzE");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




/**
 * @name eachWeekendOfMonth
 * @category Month Helpers
 * @summary List all the Saturdays and Sundays in the given month.
 *
 * @description
 * Get all the Saturdays and Sundays in the given month.
 *
 * @param {Date|Number} date - the given month
 * @returns {Date[]} an array containing all the Saturdays and Sundays
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The passed date is invalid
 *
 * @example
 * // Lists all Saturdays and Sundays in the given month
 * const result = eachWeekendOfMonth(new Date(2022, 1, 1))
 * //=> [
 * //   Sat Feb 05 2022 00:00:00,
 * //   Sun Feb 06 2022 00:00:00,
 * //   Sat Feb 12 2022 00:00:00,
 * //   Sun Feb 13 2022 00:00:00,
 * //   Sat Feb 19 2022 00:00:00,
 * //   Sun Feb 20 2022 00:00:00,
 * //   Sat Feb 26 2022 00:00:00,
 * //   Sun Feb 27 2022 00:00:00
 * // ]
 */

function eachWeekendOfMonth(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, arguments);
  var startDate = Object(_startOfMonth_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  if (isNaN(startDate.getTime())) throw new RangeError('The passed date is invalid');
  var endDate = Object(_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return Object(_eachWeekendOfInterval_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    start: startDate,
    end: endDate
  });
}

/***/ }),

/***/ "3+Em":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isThisWeek; });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isSameWeek/index.js */ "JO1+");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */

function isThisWeek(dirtyDate, options) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "3REe":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/*! exports provided: isProtectedDayOfYearToken, isProtectedWeekYearToken, throwProtectedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProtectedDayOfYearToken", function() { return isProtectedDayOfYearToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProtectedWeekYearToken", function() { return isProtectedWeekYearToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwProtectedError", function() { return throwProtectedError; });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "3g9J":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/getMinutes/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMinutes; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name getMinutes
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * const result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */

function getMinutes(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var minutes = date.getMinutes();
  return minutes;
}

/***/ }),

/***/ "3nag":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarQuarters/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return differenceInCalendarQuarters; });
/* harmony import */ var _getQuarter_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getQuarter/index.js */ "SFWn");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name differenceInCalendarQuarters
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar quarters
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */

function differenceInCalendarQuarters(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var quarterDiff = Object(_getQuarter_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dateLeft) - Object(_getQuarter_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dateRight);
  return yearDiff * 4 + quarterDiff;
}

/***/ }),

/***/ "3zlk":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarISOWeekYears/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return differenceInCalendarISOWeekYears; });
/* harmony import */ var _getISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getISOWeekYear/index.js */ "BKKT");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name differenceInCalendarISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of calendar ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of calendar ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `differenceInCalendarISOYears` to `differenceInCalendarISOWeekYears`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `addWeekYears`.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar ISO week-numbering years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar ISO week-numbering years are 1 January 2010 and 1 January 2012?
 * var result = differenceInCalendarISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 2
 */

function differenceInCalendarISOWeekYears(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  return Object(_getISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft) - Object(_getISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
}

/***/ }),

/***/ "4+6U":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseISO; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (isNaN(date) || !date) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time) || time === null) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: null
  };
  var year = captures[1] && parseInt(captures[1]);
  var century = captures[2] && parseInt(captures[2]);
  return {
    year: century == null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return null;
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return null;
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return null; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "4G8O":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/getMilliseconds/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMilliseconds; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name getMilliseconds
 * @category Millisecond Helpers
 * @summary Get the milliseconds of the given date.
 *
 * @description
 * Get the milliseconds of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the milliseconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the milliseconds of 29 February 2012 11:45:05.123:
 * const result = getMilliseconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 123
 */

function getMilliseconds(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var milliseconds = date.getMilliseconds();
  return milliseconds;
}

/***/ }),

/***/ "4Ukw":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatISODuration/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatISODuration; });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");

/**
 * @name formatISODuration
 * @category Common Helpers
 * @summary Format a duration object according as ISO 8601 duration string
 *
 * @description
 * Format a duration object according to the ISO 8601 duration standard (https://www.digi.com/resources/documentation/digidocs/90001437-13/reference/r_iso_8601_duration_format.htm)
 *
 * @param {Duration} duration - the duration to format
 *
 * @returns {String} The ISO 8601 duration string
 * @throws {TypeError} Requires 1 argument
 * @throws {Error} Argument must be an object
 *
 * @example
 * // Format the given duration as ISO 8601 string
 * formatISODuration({
 *   years: 39,
 *   months: 2,
 *   days: 20,
 *   hours: 7,
 *   minutes: 5,
 *   seconds: 0
 * })
 * //=> 'P39Y2M20DT0H0M0S'
 */

function formatISODuration(duration) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  if (typeof duration !== 'object') throw new Error('Duration must be an object');
  var _duration$years = duration.years,
      years = _duration$years === void 0 ? 0 : _duration$years,
      _duration$months = duration.months,
      months = _duration$months === void 0 ? 0 : _duration$months,
      _duration$days = duration.days,
      days = _duration$days === void 0 ? 0 : _duration$days,
      _duration$hours = duration.hours,
      hours = _duration$hours === void 0 ? 0 : _duration$hours,
      _duration$minutes = duration.minutes,
      minutes = _duration$minutes === void 0 ? 0 : _duration$minutes,
      _duration$seconds = duration.seconds,
      seconds = _duration$seconds === void 0 ? 0 : _duration$seconds;
  return "P".concat(years, "Y").concat(months, "M").concat(days, "DT").concat(hours, "H").concat(minutes, "M").concat(seconds, "S");
}

/***/ }),

/***/ "4bjS":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/setMinutes/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setMinutes; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * var result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */

function setMinutes(dirtyDate, dirtyMinutes) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var minutes = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyMinutes);
  date.setMinutes(minutes);
  return date;
}

/***/ }),

/***/ "4jLh":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/eachMonthOfInterval/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return eachMonthOfInterval; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name eachMonthOfInterval
 * @category Interval Helpers
 * @summary Return the array of months within the specified time interval.
 *
 * @description
 * Return the array of months within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link docs/types/Interval}
 * @returns {Date[]} the array with starts of months from the month of the interval start to the month of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each month between 6 February 2014 and 10 August 2014:
 * var result = eachMonthOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Sat Feb 01 2014 00:00:00,
 * //   Sat Mar 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Thu May 01 2014 00:00:00,
 * //   Sun Jun 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * //   Fri Aug 01 2014 00:00:00
 * // ]
 */

function eachMonthOfInterval(dirtyInterval) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(interval.start);
  var endDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(interval.end);
  var endTime = endDate.getTime();
  var dates = []; // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);
  currentDate.setDate(1);

  while (currentDate.getTime() <= endTime) {
    dates.push(Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(currentDate));
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return dates;
}

/***/ }),

/***/ "5FpM":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/getISOWeeksInYear/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getISOWeeksInYear; });
/* harmony import */ var _startOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startOfISOWeekYear/index.js */ "0f5V");
/* harmony import */ var _addWeeks_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addWeeks/index.js */ "r4sE");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name getISOWeeksInYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * @description
 * Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of ISO weeks in a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many weeks are in ISO week-numbering year 2015?
 * const result = getISOWeeksInYear(new Date(2015, 1, 11))
 * //=> 53
 */

function getISOWeeksInYear(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, arguments);
  var thisYear = Object(_startOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var nextYear = Object(_startOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_addWeeks_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(thisYear, 60));
  var diff = nextYear.valueOf() - thisYear.valueOf(); // Round the number of weeks to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK);
}

/***/ }),

/***/ "5cON":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/isWednesday/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isWednesday; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isWednesday
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Wednesday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * var result = isWednesday(new Date(2014, 8, 24))
 * //=> true
 */

function isWednesday(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate).getDay() === 3;
}

/***/ }),

/***/ "5wMr":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getTime/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTime; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name getTime
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * const result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */

function getTime(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var timestamp = date.getTime();
  return timestamp;
}

/***/ }),

/***/ "6En+":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/setDayOfYear/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setDayOfYear; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name setDayOfYear
 * @category Day Helpers
 * @summary Set the day of the year to the given date.
 *
 * @description
 * Set the day of the year to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} dayOfYear - the day of the year of the new date
 * @returns {Date} the new date with the day of the year set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 2nd day of the year to 2 July 2014:
 * var result = setDayOfYear(new Date(2014, 6, 2), 2)
 * //=> Thu Jan 02 2014 00:00:00
 */

function setDayOfYear(dirtyDate, dirtyDayOfYear) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dayOfYear = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDayOfYear);
  date.setMonth(0);
  date.setDate(dayOfYear);
  return date;
}

/***/ }),

/***/ "6NQC":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/setYear/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setYear; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * var result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */

function setYear(dirtyDate, dirtyYear) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyYear); // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date

  if (isNaN(date)) {
    return new Date(NaN);
  }

  date.setFullYear(year);
  return date;
}

/***/ }),

/***/ "6wME":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDecade/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfDecade; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name startOfDecade
 * @category Decade Helpers
 * @summary Return the start of a decade for the given date.
 *
 * @description
 * Return the start of a decade for the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a decade
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a decade for 21 October 2015 00:00:00:
 * const result = startOfDecade(new Date(2015, 9, 21, 00, 00, 00))
 * //=> Jan 01 2010 00:00:00
 */

function startOfDecade(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var year = date.getFullYear();
  var decade = Math.floor(year / 10) * 10;
  date.setFullYear(decade, 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "76r+":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/intlFormat/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return intlFormat; });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name intlFormat
 * @category Common Helpers
 * @summary  Format the date with Intl.DateTimeFormat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).
 *
 * @description
 * Return the formatted date string in the given format.
 * The method uses [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) inside.
 * formatOptions are the same as [`Intl.DateTimeFormat` options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options)
 *
 * > ⚠️ Please note that before Node version 13.0.0, only the locale data for en-US is available by default.
 *
 * @param {Date|Number} argument - the original date.
 * @param {Object} [formatOptions] - an object with options.
 * @param {'lookup'|'best fit'} [formatOptions.localeMatcher='best fit'] - locale selection algorithm.
 * @param {'narrow'|'short'|'long'} [formatOptions.weekday] - representation the days of the week.
 * @param {'narrow'|'short'|'long'} [formatOptions.era] - representation of eras.
 * @param {'numeric'|'2-digit'} [formatOptions.year] - representation of years.
 * @param {'numeric'|'2-digit'|'narrow'|'short'|'long'} [formatOptions.month='numeric'] - representation of month.
 * @param {'numeric'|'2-digit'} [formatOptions.day='numeric'] - representation of day.
 * @param {'numeric'|'2-digit'} [formatOptions.hour='numeric'] - representation of hours.
 * @param {'numeric'|'2-digit'} [formatOptions.minute] - representation of minutes.
 * @param {'numeric'|'2-digit'} [formatOptions.second] - representation of seconds.
 * @param {'short'|'long'} [formatOptions.timeZoneName] - representation of names of time zones.
 * @param {'basic'|'best fit'} [formatOptions.formatMatcher='best fit'] - format selection algorithm.
 * @param {Boolean} [formatOptions.hour12] - determines whether to use 12-hour time format.
 * @param {String} [formatOptions.timeZone] - the time zone to use.
 * @param {Object} [localeOptions] - an object with locale.
 * @param {String|String[]} [localeOptions.locale] - the locale code
 * @returns {String} the formatted date string.
 * @throws {TypeError} 1 argument required.
 * @throws {RangeError} `date` must not be Invalid Date
 *
 * @example
 * // Represent 10 October 2019 in German.
 * // Convert the date with format's options and locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *      weekday: 'long',
 *      year: 'numeric',
 *      month: 'long',
 *      day: 'numeric',
 *    }, {
 *      locale: 'de-DE',
 *  })
 * //=> Freitag, 4. Oktober 2019
 *
 * @example
 * // Represent 10 October 2019.
 * // Convert the date with format's options.
 * const result = intlFormat.default(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *      year: 'numeric',
 *      month: 'numeric',
 *      day: 'numeric',
 *      hour: 'numeric',
 *  })
 * //=> 10/4/2019, 12 PM
 *
 * @example
 * // Represent 10 October 2019 in Korean.
 * // Convert the date with locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *      locale: 'ko-KR',
 *  })
 * //=> 2019. 10. 4.
 *
 * @example
 * // Represent 10 October 2019 in middle-endian format:
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456))
 * //=> 10/4/2019
 */
function intlFormat(date, formatOrLocale, localeOptions) {
  var _localeOptions;

  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var formatOptions;

  if (isFormatOptions(formatOrLocale)) {
    formatOptions = formatOrLocale;
  } else {
    localeOptions = formatOrLocale;
  }

  return new Intl.DateTimeFormat((_localeOptions = localeOptions) === null || _localeOptions === void 0 ? void 0 : _localeOptions.locale, formatOptions).format(date);
}

function isFormatOptions(opts) {
  return opts !== undefined && !('locale' in opts);
}

/***/ }),

/***/ "7DTD":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/setISOWeekYear/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setISOWeekYear; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _startOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfISOWeekYear/index.js */ "0f5V");
/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ "gXqy");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");





/**
 * @name setISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `setISOYear` to `setISOWeekYear`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `setWeekYear`.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} isoWeekYear - the ISO week-numbering year of the new date
 * @returns {Date} the new date with the ISO week-numbering year set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * var result = setISOWeekYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */

function setISOWeekYear(dirtyDate, dirtyISOWeekYear) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var isoWeekYear = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyISOWeekYear);
  var diff = Object(_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, Object(_startOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date));
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(isoWeekYear, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  date = Object(_startOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  date.setDate(date.getDate() + diff);
  return date;
}

/***/ }),

/***/ "7gZZ":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/getWeekYear/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWeekYear; });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startOfWeek/index.js */ "aetl");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Number} the local week-numbering year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * var result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * var result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * var result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */

function getWeekYear(dirtyDate, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = Object(_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = Object(_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "7wYy":
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/sub/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sub; });
/* harmony import */ var _subDays_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../subDays/index.js */ "Xep9");
/* harmony import */ var _subMonths_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subMonths/index.js */ "phiu");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");





/**
 * @name sub
 * @category Common Helpers
 * @summary Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @description
 * Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be subtracted
 *
 * | Key     | Description                        |
 * |---------|------------------------------------|
 * | years   | Amount of years to be subtracted   |
 * | months  | Amount of months to be subtracted  |
 * | weeks   | Amount of weeks to be subtracted   |
 * | days    | Amount of days to be subtracted    |
 * | hours   | Amount of hours to be subtracted   |
 * | minutes | Amount of minutes to be subtracted |
 * | seconds | Amount of seconds to be subtracted |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract the following duration from 15 June 2017 15:29:20
 * const result = sub(new Date(2017, 5, 15, 15, 29, 20), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> Mon Sep 1 2014 10:19:50
 */

function sub(dirtyDate, duration) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(2, arguments);
  if (!duration || typeof duration !== 'object') return new Date(NaN);
  var years = 'years' in duration ? Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(duration.years) : 0;
  var months = 'months' in duration ? Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(duration.months) : 0;
  var weeks = 'weeks' in duration ? Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(duration.weeks) : 0;
  var days = 'days' in duration ? Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(duration.days) : 0;
  var hours = 'hours' in duration ? Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(duration.hours) : 0;
  var minutes = 'minutes' in duration ? Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(duration.minutes) : 0;
  var seconds = 'seconds' in duration ? Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(duration.seconds) : 0; // Subtract years and months

  var dateWithoutMonths = Object(_subMonths_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate), months + years * 12); // Subtract weeks and days

  var dateWithoutDays = Object(_subDays_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dateWithoutMonths, days + weeks * 7); // Subtract hours, minutes and seconds

  var minutestoSub = minutes + hours * 60;
  var secondstoSub = seconds + minutestoSub * 60;
  var mstoSub = secondstoSub * 1000;
  var finalDate = new Date(dateWithoutDays.getTime() - mstoSub);
  return finalDate;
}

/***/ }),

/***/ "7xvl":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceToNow/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatDistanceToNow; });
/* harmony import */ var _formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../formatDistance/index.js */ "FVam");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name formatDistanceToNow
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWordsToNow ` to `formatDistanceToNow`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsToNow(new Date(2014, 6, 2), { addSuffix: true })
 *   //=> 'in 6 months'
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true })
 *   //=> 'in 6 months'
 *   ```
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result specifies if now is earlier or later than the passed date
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * var result = formatDistanceToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * var result = formatDistanceToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * var result = formatDistanceToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = formatDistanceToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */

function formatDistanceToNow(dirtyDate, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate, Date.now(), dirtyOptions);
}

/***/ }),

/***/ "83R2":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addBusinessDays/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addBusinessDays; });
/* harmony import */ var _isWeekend_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isWeekend/index.js */ "gLRL");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");
/* harmony import */ var _isSunday_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isSunday/index.js */ "hW07");
/* harmony import */ var _isSaturday_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isSaturday/index.js */ "GxZL");






/**
 * @name addBusinessDays
 * @category Day Helpers
 * @summary Add the specified number of business days (mon - fri) to the given date.
 *
 * @description
 * Add the specified number of business days (mon - fri) to the given date, ignoring weekends.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of business days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the business days added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 10 business days to 1 September 2014:
 * const result = addBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Sep 15 2014 00:00:00 (skipped weekend days)
 */

function addBusinessDays(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var startedOnWeekend = Object(_isWeekend_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) return new Date(NaN);
  var hours = date.getHours();
  var sign = amount < 0 ? -1 : 1;
  var fullWeeks = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(amount / 5);
  date.setDate(date.getDate() + fullWeeks * 7); // Get remaining days not part of a full week

  var restDays = Math.abs(amount % 5); // Loops over remaining days

  while (restDays > 0) {
    date.setDate(date.getDate() + sign);
    if (!Object(_isWeekend_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date)) restDays -= 1;
  } // If the date is a weekend day and we reduce a dividable of
  // 5 from it, we land on a weekend date.
  // To counter this, we add days accordingly to land on the next business day


  if (startedOnWeekend && Object(_isWeekend_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date) && amount !== 0) {
    // If we're reducing days, we want to add days until we land on a weekday
    // If we're adding days we want to reduce days until we land on a weekday
    if (Object(_isSaturday_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date)) date.setDate(date.getDate() + (sign < 0 ? 2 : -1));
    if (Object(_isSunday_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date)) date.setDate(date.getDate() + (sign < 0 ? 1 : -2));
  } // Restore hours to avoid DST lag


  date.setHours(hours);
  return date;
}

/***/ }),

/***/ "8iJe":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/lastDayOfDecade/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lastDayOfDecade; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name lastDayOfDecade
 * @category Decade Helpers
 * @summary Return the last day of a decade for the given date.
 *
 * @description
 * Return the last day of a decade for the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the last day of a decade
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of a decade for 21 December 2012 21:12:00:
 * var result = lastDayOfDecade(new Date(2012, 11, 21, 21, 12, 00))
 * //=> Wed Dec 31 2019 00:00:00
 */

function lastDayOfDecade(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var year = date.getFullYear();
  var decade = 9 + Math.floor(year / 10) * 10;
  date.setFullYear(decade + 1, 0, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "9/EM":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addDays; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "9T1D":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isLeapYear/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isLeapYear; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isLeapYear
 * @category Year Helpers
 * @summary Is the given date in the leap year?
 *
 * @description
 * Is the given date in the leap year?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the leap year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 1 September 2012 in the leap year?
 * var result = isLeapYear(new Date(2012, 8, 1))
 * //=> true
 */

function isLeapYear(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var year = date.getFullYear();
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

/***/ }),

/***/ "9ig3":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfMonth/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfMonth; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfMonth(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "AF4N":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarYears/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return differenceInCalendarYears; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */

function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
  var dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
  return dateLeft.getFullYear() - dateRight.getFullYear();
}

/***/ }),

/***/ "AWcS":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisSecond/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isThisSecond; });
/* harmony import */ var _isSameSecond_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isSameSecond/index.js */ "B3eN");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isThisSecond
 * @category Second Helpers
 * @summary Is the given date in the same second as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same second as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this second
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:15.000 in this second?
 * var result = isThisSecond(new Date(2014, 8, 25, 18, 30, 15))
 * //=> true
 */

function isThisSecond(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_isSameSecond_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Date.now(), dirtyDate);
}

/***/ }),

/***/ "AkX2":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return differenceInMonths; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ "pvlY");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "JhOC");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");
/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ "DX7i");





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */

function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(2, arguments);
  var dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
  var dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
  var sign = Object(_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
  var difference = Math.abs(Object(_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight));
  var result; // Check for the difference of less than month

  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }

    dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value

    var isLastMonthNotFull = Object(_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month

    if (Object(_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft)) && difference === 1 && Object(_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }

    result = sign * (difference - isLastMonthNotFull);
  } // Prevent negative zero


  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "B3eN":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameSecond/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isSameSecond; });
/* harmony import */ var _startOfSecond_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startOfSecond/index.js */ "WJMa");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isSameSecond
 * @category Second Helpers
 * @summary Are the given dates in the same second?
 *
 * @description
 * Are the given dates in the same second?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same second
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
 * // in the same second?
 * var result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 */

function isSameSecond(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var dateLeftStartOfSecond = Object(_startOfSecond_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
  var dateRightStartOfSecond = Object(_startOfSecond_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
  return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime();
}

/***/ }),

/***/ "BKKT":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/getISOWeekYear/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getISOWeekYear; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfISOWeek/index.js */ "1dmy");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `getISOYear` to `getISOWeekYear`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `getWeekYear`.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */

function getISOWeekYear(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var year = date.getFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = Object(_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = Object(_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "Bp6I":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInYears/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return differenceInYears; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInCalendarYears/index.js */ "AF4N");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "JhOC");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
 * //=> 1
 */

function differenceInYears(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(2, arguments);
  var dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
  var dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
  var sign = Object(_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
  var difference = Math.abs(Object(_differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight)); // Set both dates to a valid leap year for accurate comparison when dealing
  // with leap days

  dateLeft.setFullYear('1584');
  dateRight.setFullYear('1584'); // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastYearNotFull = Object(_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign;
  var result = sign * (difference - isLastYearNotFull); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "Ciwb":
/*!*************************************************************************!*\
  !*** ./node_modules/calendar-utils/date-adapters/esm/date-fns/index.js ***!
  \*************************************************************************/
/*! exports provided: adapterFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapterFactory", function() { return adapterFactory; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "b/SL");

function adapterFactory() {
    return {
        addDays: date_fns__WEBPACK_IMPORTED_MODULE_0__["addDays"],
        addHours: date_fns__WEBPACK_IMPORTED_MODULE_0__["addHours"],
        addMinutes: date_fns__WEBPACK_IMPORTED_MODULE_0__["addMinutes"],
        addSeconds: date_fns__WEBPACK_IMPORTED_MODULE_0__["addSeconds"],
        differenceInDays: date_fns__WEBPACK_IMPORTED_MODULE_0__["differenceInDays"],
        differenceInMinutes: date_fns__WEBPACK_IMPORTED_MODULE_0__["differenceInMinutes"],
        differenceInSeconds: date_fns__WEBPACK_IMPORTED_MODULE_0__["differenceInSeconds"],
        endOfDay: date_fns__WEBPACK_IMPORTED_MODULE_0__["endOfDay"],
        endOfMonth: date_fns__WEBPACK_IMPORTED_MODULE_0__["endOfMonth"],
        endOfWeek: date_fns__WEBPACK_IMPORTED_MODULE_0__["endOfWeek"],
        getDay: date_fns__WEBPACK_IMPORTED_MODULE_0__["getDay"],
        getMonth: date_fns__WEBPACK_IMPORTED_MODULE_0__["getMonth"],
        isSameDay: date_fns__WEBPACK_IMPORTED_MODULE_0__["isSameDay"],
        isSameMonth: date_fns__WEBPACK_IMPORTED_MODULE_0__["isSameMonth"],
        isSameSecond: date_fns__WEBPACK_IMPORTED_MODULE_0__["isSameSecond"],
        max: date_fns__WEBPACK_IMPORTED_MODULE_0__["max"],
        setHours: date_fns__WEBPACK_IMPORTED_MODULE_0__["setHours"],
        setMinutes: date_fns__WEBPACK_IMPORTED_MODULE_0__["setMinutes"],
        startOfDay: date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfDay"],
        startOfMinute: date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfMinute"],
        startOfMonth: date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfMonth"],
        startOfWeek: date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfWeek"],
        getHours: date_fns__WEBPACK_IMPORTED_MODULE_0__["getHours"],
        getMinutes: date_fns__WEBPACK_IMPORTED_MODULE_0__["getMinutes"],
    };
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "Ctv7":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/addSeconds/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addSeconds; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "pl0G");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name addSeconds
 * @category Second Helpers
 * @summary Add the specified number of seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * const result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */

function addSeconds(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
  return Object(_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, amount * 1000);
}

/***/ }),

/***/ "CxvL":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfHour/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfHour; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name startOfHour
 * @category Hour Helpers
 * @summary Return the start of an hour for the given date.
 *
 * @description
 * Return the start of an hour for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an hour
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an hour for 2 September 2014 11:55:00:
 * const result = startOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:00:00
 */

function startOfHour(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  date.setMinutes(0, 0, 0);
  return date;
}

/***/ }),

/***/ "D+pV":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/getDecade/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDecade; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name getDecade
 * @category Decade Helpers
 * @summary Get the decade of the given date.
 *
 * @description
 * Get the decade of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year of decade
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which decade belongs 27 November 1942?
 * const result = getDecade(new Date(1942, 10, 27))
 * //=> 1940
 */

function getDecade(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var year = date.getFullYear();
  var decade = Math.floor(year / 10) * 10;
  return decade;
}

/***/ }),

/***/ "D0ch":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isMatch/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isMatch; });
/* harmony import */ var _parse_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parse/index.js */ "LPPQ");
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isValid/index.js */ "Se/U");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name isMatch
 * @category Common Helpers
 * @summary validates the date string against given formats
 *
 * @description
 * Return the true if given date is string correct against the given format else
 * will return false.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * isMatch('23 AM', 'HH a')
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Su            | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 0001, ..., 999               |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `isMatch` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `isMatch` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `isMatch` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `isMatch('50', 'yy') //=> true`
 *
 *    `isMatch('75', 'yy') //=> true`
 *
 *    while `uu` will use the year as is:
 *
 *    `isMatch('50', 'uu') //=> true`
 *
 *    `isMatch('75', 'uu') //=> true`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be checked in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are matched (e.g. when matching string 'January 1st' without a year),
 * the values will be taken from today's using `new Date()` date which works as a context of parsing.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 *
 *
 * @param {String} dateString - the date string to verify
 * @param {String} formatString - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {Boolean}
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Match 11 February 2014 from middle-endian format:
 * var result = isMatch('02/11/2014', 'MM/dd/yyyy')
 * //=> true
 *
 * @example
 * // Match 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = isMatch('28-a de februaro', "do 'de' MMMM", {
 *   locale: eo
 * })
 * //=> true
 */

function isMatch(dateString, formatString, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  return Object(_isValid_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_parse_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dateString, formatString, new Date(), dirtyOptions));
}

/***/ }),

/***/ "DG9o":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "YIOq");
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "Hnpn");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "lgZR");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "gr1v");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "ErpD");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "Szzx");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "+7QN");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
  /*
   * |     | Unit                           |     | Unit                           |
   * |-----|--------------------------------|-----|--------------------------------|
   * |  a  | AM, PM                         |  A* | Milliseconds in day            |
   * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
   * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
   * |  d  | Day of month                   |  D  | Day of year                    |
   * |  e  | Local day of week              |  E  | Day of week                    |
   * |  f  |                                |  F* | Day of week in month           |
   * |  g* | Modified Julian day            |  G  | Era                            |
   * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
   * |  i! | ISO day of week                |  I! | ISO week of year               |
   * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
   * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
   * |  l* | (deprecated)                   |  L  | Stand-alone month              |
   * |  m  | Minute                         |  M  | Month                          |
   * |  n  |                                |  N  |                                |
   * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
   * |  p! | Long localized time            |  P! | Long localized date            |
   * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
   * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
   * |  s  | Second                         |  S  | Fraction of second             |
   * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
   * |  u  | Extended year                  |  U* | Cyclic year                    |
   * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
   * |  w  | Local week of year             |  W* | Week of month                  |
   * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
   * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
   * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
   *
   * Letters marked by * are not implemented but reserved by Unicode standard.
   *
   * Letters marked by ! are non-standard, but implemented by date-fns:
   * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
   * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
   *   i.e. 7 for Sunday, 1 for Monday, etc.
   * - `I` is ISO week of year, as opposed to `w` which is local week of year.
   * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
   *   `R` is supposed to be used in conjunction with `I` and `i`
   *   for universal ISO week-numbering date, whereas
   *   `Y` is supposed to be used in conjunction with `w` and `e`
   *   for week-numbering date specific to the locale.
   * - `P` is long localized date format
   * - `p` is long localized time format
   */

};
var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = Object(_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = Object(_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = Object(_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = Object(_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = Object(_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ __webpack_exports__["default"] = (formatters);

/***/ }),

/***/ "DX7i":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isLastDayOfMonth; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../endOfDay/index.js */ "piIK");
/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfMonth/index.js */ "jKzE");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */

function isLastDayOfMonth(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  return Object(_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date).getTime() === Object(_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime();
}

/***/ }),

/***/ "Da6A":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/addHours/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addHours; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "pl0G");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



var MILLISECONDS_IN_HOUR = 3600000;
/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the hours added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */

function addHours(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
  return Object(_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, amount * MILLISECONDS_IN_HOUR);
}

/***/ }),

/***/ "Dq2l":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/getDayOfYear/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDayOfYear; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _startOfYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfYear/index.js */ "1unF");
/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ "gXqy");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */

function getDayOfYear(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var diff = Object(_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, Object(_startOfYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date));
  var dayOfYear = diff + 1;
  return dayOfYear;
}

/***/ }),

/***/ "EhJz":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isAfter/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isAfter; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */

function isAfter(dirtyDate, dirtyDateToCompare) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var dateToCompare = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/***/ }),

/***/ "EkTD":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/eachWeekendOfYear/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return eachWeekendOfYear; });
/* harmony import */ var _eachWeekendOfInterval_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../eachWeekendOfInterval/index.js */ "YdWM");
/* harmony import */ var _startOfYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfYear/index.js */ "1unF");
/* harmony import */ var _endOfYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfYear/index.js */ "Gqtg");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




/**
 * @name eachWeekendOfYear
 * @category Year Helpers
 * @summary List all the Saturdays and Sundays in the year.
 *
 * @description
 * Get all the Saturdays and Sundays in the year.
 *
 * @param {Date|Number} date - the given year
 * @returns {Date[]} an array containing all the Saturdays and Sundays
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The passed date is invalid
 *
 * @example
 * // Lists all Saturdays and Sundays in the year
 * var result = eachWeekendOfYear(new Date(2020, 1, 1))
 * //=> [
 * //   Sat Jan 03 2020 00:00:00,
 * //   Sun Jan 04 2020 00:00:00,
 * //   ...
 * //   Sun Dec 27 2020 00:00:00
 * // ]
 * ]
 */

function eachWeekendOfYear(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, arguments);
  var startDate = Object(_startOfYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  if (isNaN(startDate)) throw new RangeError('The passed date is invalid');
  var endDate = Object(_endOfYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return Object(_eachWeekendOfInterval_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    start: startDate,
    end: endDate
  });
}

/***/ }),

/***/ "ErpD":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUTCWeek; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../toDate/index.js */ "/Tr7");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "1vjI");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "oADU");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../requiredArgs/index.js */ "jIYg");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var diff = Object(_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options).getTime() - Object(_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "FVam":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatDistance; });
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../compareAsc/index.js */ "JhOC");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMonths/index.js */ "AkX2");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ "qVkf");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../locale/en-US/index.js */ "iSMj");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "emD/");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "JCDJ");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");








var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWords ` to `formatDistance`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWords(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *
 *   // v2.0.0 onward
 *
 *   formatDistance(
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * var result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * var result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(2, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_3__["default"];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = Object(_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = Object(_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
    dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  } else {
    dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
    dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
  }

  var seconds = Object(_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateRight, dateLeft);
  var offsetInSeconds = (Object(_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateRight) - Object(_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', null, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = Object(_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ "Fwbw":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/lastDayOfQuarter/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lastDayOfQuarter; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name lastDayOfQuarter
 * @category Quarter Helpers
 * @summary Return the last day of a year quarter for the given date.
 *
 * @description
 * Return the last day of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the last day of a quarter
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The last day of a quarter for 2 September 2014 11:55:00:
 * var result = lastDayOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */

function lastDayOfQuarter(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3 + 3;
  date.setMonth(month, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "G6Tw":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isSameDay; });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startOfDay/index.js */ "M34a");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var dateLeftStartOfDay = Object(_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = Object(_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "GP2A":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addISOWeekYears/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addISOWeekYears; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _getISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getISOWeekYear/index.js */ "BKKT");
/* harmony import */ var _setISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../setISOWeekYear/index.js */ "7DTD");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




/**
 * @name addISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Add the specified number of ISO week-numbering years to the given date.
 *
 * @description
 * Add the specified number of ISO week-numbering years to the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `addISOYears` to `addISOWeekYears`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `addWeekYears`.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of ISO week-numbering years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the ISO week-numbering years added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 ISO week-numbering years to 2 July 2010:
 * const result = addISOWeekYears(new Date(2010, 6, 2), 5)
 * //=> Fri Jun 26 2015 00:00:00
 */

function addISOWeekYears(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(2, arguments);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
  return Object(_setISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, Object(_getISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) + amount);
}

/***/ }),

/***/ "GobQ":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/getDay/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDay; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */

function getDay(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var day = date.getDay();
  return day;
}

/***/ }),

/***/ "Gqtg":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfYear/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return endOfYear; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * var result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 23:59:59.999
 */

function endOfYear(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var year = date.getFullYear();
  date.setFullYear(year + 1, 0, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "GxZL":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSaturday/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isSaturday; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isSaturday
 * @category Weekday Helpers
 * @summary Is the given date Saturday?
 *
 * @description
 * Is the given date Saturday?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Saturday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 27 September 2014 Saturday?
 * var result = isSaturday(new Date(2014, 8, 27))
 * //=> true
 */

function isSaturday(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate).getDay() === 6;
}

/***/ }),

/***/ "H6X/":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThursday/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isThursday; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isThursday
 * @category Weekday Helpers
 * @summary Is the given date Thursday?
 *
 * @description
 * Is the given date Thursday?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Thursday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 25 September 2014 Thursday?
 * var result = isThursday(new Date(2014, 8, 25))
 * //=> true
 */

function isThursday(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate).getDay() === 4;
}

/***/ }),

/***/ "HM39":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatDistanceToNowStrict; });
/* harmony import */ var _formatDistanceStrict_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../formatDistanceStrict/index.js */ "0UaF");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name formatDistanceToNowStrict
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.roundingMethod='round'] - which way to round partial units
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * var result = formatDistanceToNowStrict(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * var result = formatDistanceToNowStrict(
 *   new Date(2015, 0, 1, 0, 0, 15)
 * )
 * //=> '20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * var result = formatDistanceToNowStrict(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in 1 year'
 *
 * @example
 * // If today is 28 January 2015,
 * // what is the distance to 1 January 2015, in months, rounded up??
 * var result = formatDistanceToNowStrict(new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = formatDistanceToNowStrict(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> '1 jaro'
 */

function formatDistanceToNowStrict(dirtyDate, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_formatDistanceStrict_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate, Date.now(), dirtyOptions);
}

/***/ }),

/***/ "HZtn":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isPast/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPast; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * var result = isPast(new Date(2014, 6, 2))
 * //=> true
 */

function isPast(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate).getTime() < Date.now();
}

/***/ }),

/***/ "Havk":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarISOWeeks/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return differenceInCalendarISOWeeks; });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "JCDJ");
/* harmony import */ var _startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfISOWeek/index.js */ "1dmy");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name differenceInCalendarISOWeeks
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks between the given dates.
 *
 * @description
 * Get the number of calendar ISO weeks between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar ISO weeks
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * var result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6)
 * )
 * //=> 3
 */

function differenceInCalendarISOWeeks(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var startOfISOWeekLeft = Object(_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var startOfISOWeekRight = Object(_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var timestampLeft = startOfISOWeekLeft.getTime() - Object(_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(startOfISOWeekLeft);
  var timestampRight = startOfISOWeekRight.getTime() - Object(_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(startOfISOWeekRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
}

/***/ }),

/***/ "Hnpn":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUTCDayOfYear; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../toDate/index.js */ "/Tr7");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../requiredArgs/index.js */ "jIYg");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "IIV6":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMinute/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return endOfMinute; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name endOfMinute
 * @category Minute Helpers
 * @summary Return the end of a minute for the given date.
 *
 * @description
 * Return the end of a minute for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a minute
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a minute for 1 December 2014 22:15:45.400:
 * const result = endOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:59.999
 */

function endOfMinute(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  date.setSeconds(59, 999);
  return date;
}

/***/ }),

/***/ "ILtH":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/esm/roundToNearestMinutes/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return roundToNearestMinutes; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");


/**
 * @name roundToNearestMinutes
 * @category Minute Helpers
 * @summary Rounds the given date to the nearest minute
 *
 * @description
 * Rounds the given date to the nearest minute (or number of minutes).
 * Rounds up when the given date is exactly between the nearest round minutes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to round
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.nearestTo=1] - nearest number of minutes to round to. E.g. `15` to round to quarter hours.
 * @returns {Date} the new date rounded to the closest minute
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.nearestTo` must be between 1 and 30
 *
 * @example
 * // Round 10 July 2014 12:12:34 to nearest minute:
 * var result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34))
 * //=> Thu Jul 10 2014 12:13:00
 *
 * @example
 * // Round 10 July 2014 12:07:30 to nearest quarter hour:
 * var result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { nearestTo: 15 })
 * // rounds up because given date is exactly between 12:00:00 and 12:15:00
 * //=> Thu Jul 10 2014 12:15:00
 */

function roundToNearestMinutes(dirtyDate, options) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only none provided present');
  }

  var nearestTo = options && 'nearestTo' in options ? Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.nearestTo) : 1;

  if (nearestTo < 1 || nearestTo > 30) {
    throw new RangeError('`options.nearestTo` must be between 1 and 30');
  }

  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var seconds = date.getSeconds(); // relevant if nearestTo is 1, which is the default case

  var minutes = date.getMinutes() + seconds / 60;
  var roundedMinutes = Math.floor(minutes / nearestTo) * nearestTo;
  var remainderMinutes = minutes % nearestTo;
  var addedMinutes = Math.round(remainderMinutes / nearestTo) * nearestTo;
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), roundedMinutes + addedMinutes);
}

/***/ }),

/***/ "IYaI":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMinutes/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addMinutes; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "pl0G");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



var MILLISECONDS_IN_MINUTE = 60000;
/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the minutes added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */

function addMinutes(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
  return Object(_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, amount * MILLISECONDS_IN_MINUTE);
}

/***/ }),

/***/ "Ib5w":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ __webpack_exports__["default"] = (longFormatters);

/***/ }),

/***/ "IjAw":
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/add/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return add; });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addDays/index.js */ "9/EM");
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addMonths/index.js */ "dLU1");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");






/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added       |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(dirtyDate, duration) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(2, arguments);
  if (!duration || typeof duration !== 'object') return new Date(NaN);
  var years = 'years' in duration ? Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(duration.years) : 0;
  var months = 'months' in duration ? Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(duration.months) : 0;
  var weeks = 'weeks' in duration ? Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(duration.weeks) : 0;
  var days = 'days' in duration ? Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(duration.days) : 0;
  var hours = 'hours' in duration ? Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(duration.hours) : 0;
  var minutes = 'minutes' in duration ? Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(duration.minutes) : 0;
  var seconds = 'seconds' in duration ? Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(duration.seconds) : 0; // Add years and months

  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var dateWithMonths = months || years ? Object(_addMonths_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, months + years * 12) : date; // Add weeks and days

  var dateWithDays = days || weeks ? Object(_addDays_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dateWithMonths, days + weeks * 7) : dateWithMonths; // Add days, hours, minutes and seconds

  var minutesToAdd = minutes + hours * 60;
  var secondsToAdd = seconds + minutesToAdd * 60;
  var msToAdd = secondsToAdd * 1000;
  var finalDate = new Date(dateWithDays.getTime() + msToAdd);
  return finalDate;
}

/***/ }),

/***/ "J9JN":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "ku8+");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.

};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (localize);

/***/ }),

/***/ "JCDJ":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTimezoneOffsetInMilliseconds; });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "JO1+":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isSameWeek; });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startOfWeek/index.js */ "aetl");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week?
 *
 * @description
 * Are the given dates in the same week?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var dateLeftStartOfWeek = Object(_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfWeek = Object(_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight, dirtyOptions);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "JbbM":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/intervalToDuration/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return intervalToDuration; });
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../compareAsc/index.js */ "JhOC");
/* harmony import */ var _differenceInYears_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInYears/index.js */ "Bp6I");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../differenceInMonths/index.js */ "AkX2");
/* harmony import */ var _differenceInDays_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInDays/index.js */ "NoME");
/* harmony import */ var _differenceInHours_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../differenceInHours/index.js */ "moCM");
/* harmony import */ var _differenceInMinutes_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../differenceInMinutes/index.js */ "jG/O");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ "qVkf");
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../isValid/index.js */ "Se/U");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _sub_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sub/index.js */ "7wYy");











/**
 * @name intervalToDuration
 * @category Common Helpers
 * @summary Convert interval to duration
 *
 * @description
 * Convert a interval object to a duration object.
 *
 * @param {Interval} interval - the interval to convert to duration
 *
 * @returns {Duration} The duration Object
 * @throws {TypeError} Requires 2 arguments
 * @throws {RangeError} `start` must not be Invalid Date
 * @throws {RangeError} `end` must not be Invalid Date
 *
 * @example
 * // Get the duration between January 15, 1929 and April 4, 1968.
 * intervalToDuration({
 *   start: new Date(1929, 0, 15, 12, 0, 0),
 *   end: new Date(1968, 3, 4, 19, 5, 0)
 * })
 * // => { years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 }
 */

function intervalToDuration(_ref) {
  var start = _ref.start,
      end = _ref.end;
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(1, arguments);
  var dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(start);
  var dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(end);

  if (!Object(_isValid_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateLeft)) {
    throw new RangeError('Start Date is invalid');
  }

  if (!Object(_isValid_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight)) {
    throw new RangeError('End Date is invalid');
  }

  var duration = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  var sign = Object(_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dateLeft, dateRight);
  duration.years = Math.abs(Object(_differenceInYears_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight));
  var remainingMonths = Object(_sub_index_js__WEBPACK_IMPORTED_MODULE_10__["default"])(dateLeft, {
    years: sign * duration.years
  });
  duration.months = Math.abs(Object(_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(remainingMonths, dateRight));
  var remainingDays = Object(_sub_index_js__WEBPACK_IMPORTED_MODULE_10__["default"])(remainingMonths, {
    months: sign * duration.months
  });
  duration.days = Math.abs(Object(_differenceInDays_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(remainingDays, dateRight));
  var remainingHours = Object(_sub_index_js__WEBPACK_IMPORTED_MODULE_10__["default"])(remainingDays, {
    days: sign * duration.days
  });
  duration.hours = Math.abs(Object(_differenceInHours_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(remainingHours, dateRight));
  var remainingMinutes = Object(_sub_index_js__WEBPACK_IMPORTED_MODULE_10__["default"])(remainingHours, {
    hours: sign * duration.hours
  });
  duration.minutes = Math.abs(Object(_differenceInMinutes_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(remainingMinutes, dateRight));
  var remainingSeconds = Object(_sub_index_js__WEBPACK_IMPORTED_MODULE_10__["default"])(remainingMinutes, {
    minutes: sign * duration.minutes
  });
  duration.seconds = Math.abs(Object(_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(remainingSeconds, dateRight));
  return duration;
}

/***/ }),

/***/ "JhOC":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compareAsc; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
  var dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "L/mj":
/*!***************************************************************************!*\
  !*** ./node_modules/angular-calendar/date-adapters/esm/date-fns/index.js ***!
  \***************************************************************************/
/*! exports provided: adapterFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapterFactory", function() { return adapterFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "7/0x");
/* harmony import */ var calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! calendar-utils/date-adapters/date-fns */ "Ciwb");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "b/SL");



function adapterFactory() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_1__["adapterFactory"])()), { addWeeks: date_fns__WEBPACK_IMPORTED_MODULE_2__["addWeeks"],
        addMonths: date_fns__WEBPACK_IMPORTED_MODULE_2__["addMonths"],
        subDays: date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"],
        subWeeks: date_fns__WEBPACK_IMPORTED_MODULE_2__["subWeeks"],
        subMonths: date_fns__WEBPACK_IMPORTED_MODULE_2__["subMonths"],
        getISOWeek: date_fns__WEBPACK_IMPORTED_MODULE_2__["getISOWeek"],
        setDate: date_fns__WEBPACK_IMPORTED_MODULE_2__["setDate"],
        setMonth: date_fns__WEBPACK_IMPORTED_MODULE_2__["setMonth"],
        setYear: date_fns__WEBPACK_IMPORTED_MODULE_2__["setYear"],
        getDate: date_fns__WEBPACK_IMPORTED_MODULE_2__["getDate"],
        getYear: date_fns__WEBPACK_IMPORTED_MODULE_2__["getYear"] });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "L8hi":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfWeek/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return endOfWeek; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek(dirtyDate, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "LPPQ":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parse; });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale/en-US/index.js */ "iSMj");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "g9KO");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/assign/index.js */ "+LmI");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "Ib5w");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "JCDJ");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "3REe");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _lib_parsers_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_lib/parsers/index.js */ "Rngw");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");










var TIMEZONE_UNIT_PRIORITY = 10; // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 0001, ..., 999               |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Old `parse` was renamed to `toDate`.
 *   Now `parse` is a new function which parses a string using a provided format.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward (toDate no longer accepts a string)
 *   toDate(1392098430000) // Unix to timestamp
 *   toDate(new Date(2014, 1, 11, 11, 30, 30)) // Cloning the date
 *   parse('2016-01-01', 'yyyy-MM-dd', new Date())
 *   ```
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|Number} referenceDate - defines values missing from the parsed dateString
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */

function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(3, arguments);
  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];

  if (!locale.match) {
    throw new RangeError('locale must contain match property');
  }

  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (formatString === '') {
    if (dateString === '') {
      return Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyReferenceDate);
    } else {
      return new Date(NaN);
    }
  }

  var subFnOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale // If timezone isn't specified, it will be set to the system timezone

  };
  var setters = [{
    priority: TIMEZONE_UNIT_PRIORITY,
    subPriority: -1,
    set: dateToSystemTimezone,
    index: 0
  }];
  var i;
  var tokens = formatString.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_4__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong, subFnOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp);
  var usedTokens = [];

  for (i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (!options.useAdditionalWeekYearTokens && Object(_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_6__["isProtectedWeekYearToken"])(token)) {
      Object(_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_6__["throwProtectedError"])(token, formatString, dirtyDateString);
    }

    if (!options.useAdditionalDayOfYearTokens && Object(_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_6__["isProtectedDayOfYearToken"])(token)) {
      Object(_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_6__["throwProtectedError"])(token, formatString, dirtyDateString);
    }

    var firstCharacter = token[0];
    var parser = _lib_parsers_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];

    if (parser) {
      var incompatibleTokens = parser.incompatibleTokens;

      if (Array.isArray(incompatibleTokens)) {
        var incompatibleToken = void 0;

        for (var _i = 0; _i < usedTokens.length; _i++) {
          var usedToken = usedTokens[_i].token;

          if (incompatibleTokens.indexOf(usedToken) !== -1 || usedToken === firstCharacter) {
            incompatibleToken = usedTokens[_i];
            break;
          }
        }

        if (incompatibleToken) {
          throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
        }
      } else if (parser.incompatibleTokens === '*' && usedTokens.length) {
        throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
      }

      usedTokens.push({
        token: firstCharacter,
        fullToken: token
      });
      var parseResult = parser.parse(dateString, token, locale.match, subFnOptions);

      if (!parseResult) {
        return new Date(NaN);
      }

      setters.push({
        priority: parser.priority,
        subPriority: parser.subPriority || 0,
        set: parser.set,
        validate: parser.validate,
        value: parseResult.value,
        index: setters.length
      });
      dateString = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
      } // Replace two single quote characters with one single quote character


      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token);
      } // Cut token from string, or, if string doesn't match the token, return Invalid Date


      if (dateString.indexOf(token) === 0) {
        dateString = dateString.slice(token.length);
      } else {
        return new Date(NaN);
      }
    }
  } // Check if the remaining input contains something other than whitespace


  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return new Date(NaN);
  }

  var uniquePrioritySetters = setters.map(function (setter) {
    return setter.priority;
  }).sort(function (a, b) {
    return b - a;
  }).filter(function (priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function (priority) {
    return setters.filter(function (setter) {
      return setter.priority === priority;
    }).sort(function (a, b) {
      return b.subPriority - a.subPriority;
    });
  }).map(function (setterArray) {
    return setterArray[0];
  });
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyReferenceDate);

  if (isNaN(date)) {
    return new Date(NaN);
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37


  var utcDate = Object(_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, Object(_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date));
  var flags = {};

  for (i = 0; i < uniquePrioritySetters.length; i++) {
    var setter = uniquePrioritySetters[i];

    if (setter.validate && !setter.validate(utcDate, setter.value, subFnOptions)) {
      return new Date(NaN);
    }

    var result = setter.set(utcDate, flags, setter.value, subFnOptions); // Result is tuple (date, flags)

    if (result[0]) {
      utcDate = result[0];
      Object(_lib_assign_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(flags, result[1]); // Result is date
    } else {
      utcDate = result;
    }
  }

  return utcDate;
}

function dateToSystemTimezone(date, flags) {
  if (flags.timestampIsSet) {
    return date;
  }

  var convertedDate = new Date(0);
  convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
  return convertedDate;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "M34a":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfDay; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "MVig":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisMinute/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isThisMinute; });
/* harmony import */ var _isSameMinute_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isSameMinute/index.js */ "s+wp");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isThisMinute
 * @category Minute Helpers
 * @summary Is the given date in the same minute as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same minute as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this minute
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:00 in this minute?
 * var result = isThisMinute(new Date(2014, 8, 25, 18, 30))
 * //=> true
 */

function isThisMinute(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_isSameMinute_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Date.now(), dirtyDate);
}

/***/ }),

/***/ "MkVN":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisYear/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isThisYear; });
/* harmony import */ var _isSameYear_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isSameYear/index.js */ "kJyz");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isThisYear
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this year?
 * var result = isThisYear(new Date(2014, 6, 2))
 * //=> true
 */

function isThisYear(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_isSameYear_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "NXEZ":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/getISODay/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getISODay; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name getISODay
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * const result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */

function getISODay(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day;
}

/***/ }),

/***/ "NoME":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInDays/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return differenceInDays; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ "gXqy");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


 // Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.

function compareLocalAsc(dateLeft, dateRight) {
  var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}
/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.floor(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full days according to the local timezone
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * var result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * var result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
//=> 92
 */


function differenceInDays(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
  var dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
  var sign = compareLocalAsc(dateLeft, dateRight);
  var difference = Math.abs(Object(_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight));
  dateLeft.setDate(dateLeft.getDate() - sign * difference); // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastDayNotFull = compareLocalAsc(dateLeft, dateRight) === -sign;
  var result = sign * (difference - isLastDayNotFull); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "Orh4":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return differenceInMilliseconds; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * var result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
  var dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
  return dateLeft.getTime() - dateRight.getTime();
}

/***/ }),

/***/ "OuL/":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/getDaysInMonth/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDaysInMonth; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */

function getDaysInMonth(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth = new Date(0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}

/***/ }),

/***/ "PQko":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/parseJSON/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseJSON; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name parseJSON
 * @category Common Helpers
 * @summary Parse a JSON date string
 *
 * @description
 * Converts a complete ISO date string in UTC time, the typical format for transmitting
 * a date in JSON, to a JavaScript `Date` instance.
 *
 * This is a minimal implementation for converting dates retrieved from a JSON API to
 * a `Date` instance which can be used with other functions in the `date-fns` library.
 * The following formats are supported:
 *
 * - `2000-03-15T05:20:10.123Z`: The output of `.toISOString()` and `JSON.stringify(new Date())`
 * - `2000-03-15T05:20:10Z`: Without milliseconds
 * - `2000-03-15T05:20:10+00:00`: With a zero offset, the default JSON encoded format in some other languages
 * - `2000-03-15T05:20:10+05:45`: With a positive or negative offset, the default JSON encoded format in some other languages
 * - `2000-03-15T05:20:10+0000`: With a zero offset without a colon
 * - `2000-03-15T05:20:10`: Without a trailing 'Z' symbol
 * - `2000-03-15T05:20:10.1234567`: Up to 7 digits in milliseconds field. Only first 3 are taken into account since JS does not allow fractional milliseconds
 * - `2000-03-15 05:20:10`: With a space instead of a 'T' separator for APIs returning a SQL date without reformatting
 *
 * For convenience and ease of use these other input types are also supported
 * via [toDate]{@link https://date-fns.org/docs/toDate}:
 *
 * - A `Date` instance will be cloned
 * - A `number` will be treated as a timestamp
 *
 * Any other input type or invalid date strings will return an `Invalid Date`.
 *
 * @param {String|Number|Date} argument A fully formed ISO8601 date string to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 */

function parseJSON(argument) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);

  if (typeof argument === 'string') {
    var parts = argument.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);

    if (parts) {
      // Group 8 matches the sign
      return new Date(Date.UTC(+parts[1], parts[2] - 1, +parts[3], +parts[4] - (parts[9] || 0) * (parts[8] == '-' ? -1 : 1), +parts[5] - (parts[10] || 0) * (parts[8] == '-' ? -1 : 1), +parts[6], +((parts[7] || '0') + '00').substring(0, 3)));
    }

    return new Date(NaN);
  }

  return Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(argument);
}

/***/ }),

/***/ "PWs8":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfSecond/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return endOfSecond; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name endOfSecond
 * @category Second Helpers
 * @summary Return the end of a second for the given date.
 *
 * @description
 * Return the end of a second for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a second
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a second for 1 December 2014 22:15:45.400:
 * const result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.999
 */

function endOfSecond(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  date.setMilliseconds(999);
  return date;
}

/***/ }),

/***/ "PdOA":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isTuesday/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isTuesday; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isTuesday
 * @category Weekday Helpers
 * @summary Is the given date Tuesday?
 *
 * @description
 * Is the given date Tuesday?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Tuesday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 23 September 2014 Tuesday?
 * var result = isTuesday(new Date(2014, 8, 23))
 * //=> true
 */

function isTuesday(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate).getDay() === 2;
}

/***/ }),

/***/ "Q0vS":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/setISOWeek/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setISOWeek; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _getISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getISOWeek/index.js */ "sBI4");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




/**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} isoWeek - the ISO week of the new date
 * @returns {Date} the new date with the ISO week set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * var result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */

function setISOWeek(dirtyDate, dirtyISOWeek) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var isoWeek = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyISOWeek);
  var diff = Object(_getISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date) - isoWeek;
  date.setDate(date.getDate() - diff * 7);
  return date;
}

/***/ }),

/***/ "Q2p9":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatRelative/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatRelative; });
/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ "gXqy");
/* harmony import */ var _format_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/index.js */ "sWYD");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locale/en-US/index.js */ "iSMj");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "g9KO");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "JCDJ");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");







/**
 * @name formatRelative
 * @category Common Helpers
 * @summary Represent the date in words relative to the given base date.
 *
 * @description
 * Represent the date in words relative to the given base date.
 *
 * | Distance to the base date | Result                    |
 * |---------------------------|---------------------------|
 * | Previous 6 days           | last Sunday at 04:30 AM   |
 * | Last day                  | yesterday at 04:30 AM     |
 * | Same day                  | today at 04:30 AM         |
 * | Next day                  | tomorrow at 04:30 AM      |
 * | Next 6 days               | Sunday at 04:30 AM        |
 * | Other                     | 12/31/2017                |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to format
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {String} the date in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.locale` must contain `formatRelative` property
 */

function formatRelative(dirtyDate, dirtyBaseDate, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  var baseDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  if (!locale.formatRelative) {
    throw new RangeError('locale must contain formatRelative property');
  }

  var diff = Object(_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date, baseDate);

  if (isNaN(diff)) {
    throw new RangeError('Invalid time value');
  }

  var token;

  if (diff < -6) {
    token = 'other';
  } else if (diff < -1) {
    token = 'lastWeek';
  } else if (diff < 0) {
    token = 'yesterday';
  } else if (diff < 1) {
    token = 'today';
  } else if (diff < 2) {
    token = 'tomorrow';
  } else if (diff < 7) {
    token = 'nextWeek';
  } else {
    token = 'other';
  }

  var utcDate = Object(_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, Object(_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date));
  var utcBaseDate = Object(_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(baseDate, Object(_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(baseDate));
  var formatStr = locale.formatRelative(token, utcDate, utcBaseDate, options);
  return Object(_format_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, formatStr, options);
}

/***/ }),

/***/ "QNJA":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDecade/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return endOfDecade; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name endOfDecade
 * @category Decade Helpers
 * @summary Return the end of a decade for the given date.
 *
 * @description
 * Return the end of a decade for the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a decade
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The end of a decade for 12 May 1984 00:00:00:
 * const result = endOfDecade(new Date(1984, 4, 12, 00, 00, 00))
 * //=> Dec 31 1989 23:59:59.999
 */

function endOfDecade(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var year = date.getFullYear();
  var decade = 9 + Math.floor(year / 10) * 10;
  date.setFullYear(decade, 11, 31);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "R8/v":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfUTCISOWeekYear; });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "gr1v");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "tpup");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requiredArgs/index.js */ "jIYg");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, arguments);
  var year = Object(_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = Object(_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "RaBM":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatISO9075/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatISO9075; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isValid/index.js */ "Se/U");
/* harmony import */ var _lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/addLeadingZeros/index.js */ "+7QN");



/**
 * @name formatISO9075
 * @category Common Helpers
 * @summary Format the date according to the ISO 9075 standard (https://dev.mysql.com/doc/refman/5.7/en/date-and-time-functions.html#function_get-format).
 *
 * @description
 * Return the formatted date string in ISO 9075 format. Options may be passed to control the parts and notations of the date.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {'extended'|'basic'} [options.format='extended'] - if 'basic', hide delimiters between date and time values.
 * @param {'complete'|'date'|'time'} [options.representation='complete'] - format date, time, or both.
 * @returns {String} the formatted date string
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.format` must be 'extended' or 'basic'
 * @throws {RangeError} `options.represenation` must be 'date', 'time' or 'complete'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075 format:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18 19:00:52'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075, short format:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918 190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075 format, date only:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075 format, time only:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52'
 */

function formatISO9075(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
  }

  var originalDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);

  if (!Object(_isValid_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  var options = dirtyOptions || {};
  var format = options.format == null ? 'extended' : String(options.format);
  var representation = options.representation == null ? 'complete' : String(options.representation);

  if (format !== 'extended' && format !== 'basic') {
    throw new RangeError("format must be 'extended' or 'basic'");
  }

  if (representation !== 'date' && representation !== 'time' && representation !== 'complete') {
    throw new RangeError("representation must be 'date', 'time', or 'complete'");
  }

  var result = '';
  var dateDelimiter = format === 'extended' ? '-' : '';
  var timeDelimiter = format === 'extended' ? ':' : ''; // Representation is either 'date' or 'complete'

  if (representation !== 'time') {
    var day = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getDate(), 2);
    var month = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getMonth() + 1, 2);
    var year = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getFullYear(), 4); // yyyyMMdd or yyyy-MM-dd.

    result = "".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);
  } // Representation is either 'time' or 'complete'


  if (representation !== 'date') {
    var hour = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getHours(), 2);
    var minute = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getMinutes(), 2);
    var second = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getSeconds(), 2); // If there's also date, separate it with time with a space

    var separator = result === '' ? '' : ' '; // HHmmss or HH:mm:ss.

    result = "".concat(result).concat(separator).concat(hour).concat(timeDelimiter).concat(minute).concat(timeDelimiter).concat(second);
  }

  return result;
}

/***/ }),

/***/ "RgJi":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/fromUnixTime/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fromUnixTime; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name fromUnixTime
 * @category Timestamp Helpers
 * @summary Create a date from a Unix timestamp.
 *
 * @description
 * Create a date from a Unix timestamp.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Number} unixTime - the given Unix timestamp
 * @returns {Date} the date
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Create the date 29 February 2012 11:45:05:
 * var result = fromUnixTime(1330515905)
 * //=> Wed Feb 29 2012 11:45:05
 */

function fromUnixTime(dirtyUnixTime) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, arguments);
  var unixTime = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyUnixTime);
  return Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(unixTime * 1000);
}

/***/ }),

/***/ "RgwM":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/setMilliseconds/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setMilliseconds; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name setMilliseconds
 * @category Millisecond Helpers
 * @summary Set the milliseconds to the given date.
 *
 * @description
 * Set the milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} milliseconds - the milliseconds of the new date
 * @returns {Date} the new date with the milliseconds set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 300 milliseconds to 1 September 2014 11:30:40.500:
 * var result = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
 * //=> Mon Sep 01 2014 11:30:40.300
 */

function setMilliseconds(dirtyDate, dirtyMilliseconds) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var milliseconds = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyMilliseconds);
  date.setMilliseconds(milliseconds);
  return date;
}

/***/ }),

/***/ "Rngw":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "Szzx");
/* harmony import */ var _lib_setUTCDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/setUTCDay/index.js */ "+lkT");
/* harmony import */ var _lib_setUTCISODay_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_lib/setUTCISODay/index.js */ "zWh8");
/* harmony import */ var _lib_setUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/setUTCISOWeek/index.js */ "pR7g");
/* harmony import */ var _lib_setUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/setUTCWeek/index.js */ "xiNX");
/* harmony import */ var _lib_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/startOfUTCISOWeek/index.js */ "tpup");
/* harmony import */ var _lib_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/startOfUTCWeek/index.js */ "1vjI");







var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var MILLISECONDS_IN_SECOND = 1000;
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999

};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

function parseNumericPattern(pattern, string, valueCallback) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  }

  var value = parseInt(matchResult[0], 10);
  return {
    value: valueCallback ? valueCallback(value) : value,
    rest: string.slice(matchResult[0].length)
  };
}

function parseTimezonePattern(pattern, string) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  } // Input is 'Z'


  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: string.slice(1)
    };
  }

  var sign = matchResult[1] === '+' ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * MILLISECONDS_IN_SECOND),
    rest: string.slice(matchResult[0].length)
  };
}

function parseAnyDigitsSigned(string, valueCallback) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback);
}

function parseNDigits(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback);
  }
}

function parseNDigitsSigned(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback);
  }
}

function dayPeriodEnumToHours(enumValue) {
  switch (enumValue) {
    case 'morning':
      return 4;

    case 'evening':
      return 17;

    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;

    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}

function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0; // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC

  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;

  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result;
}

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // User for validation

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */


var parsers = {
  // Era
  G: {
    priority: 140,
    parse: function (string, token, match, _options) {
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
        // A, B

        case 'GGGGG':
          return match.era(string, {
            width: 'narrow'
          });
        // Anno Domini, Before Christ

        case 'GGGG':
        default:
          return match.era(string, {
            width: 'wide'
          }) || match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
      }
    },
    set: function (date, flags, value, _options) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['R', 'u', 't', 'T']
  },
  // Year
  y: {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'yy'
        };
      };

      switch (token) {
        case 'y':
          return parseNDigits(4, string, valueCallback);

        case 'yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, _options) {
      var currentYear = date.getUTCFullYear();

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Local week-numbering year
  Y: {
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY'
        };
      };

      switch (token) {
        case 'Y':
          return parseNDigits(4, string, valueCallback);

        case 'Yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, options) {
      var currentYear = Object(_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date, options);

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return Object(_lib_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date, options);
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return Object(_lib_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date, options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week-numbering year
  R: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'R') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (_date, _flags, value, _options) {
      var firstWeekOfYear = new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return Object(_lib_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(firstWeekOfYear);
    },
    incompatibleTokens: ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Extended year
  u: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'u') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Quarter
  Q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'Qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'QQQ':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'QQQQQ':
          return match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1st quarter, 2nd quarter, ...

        case 'QQQQ':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone quarter
  q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
        case 'qq':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'qqq':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'qqqqq':
          return match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1st quarter, 2nd quarter, ...

        case 'qqqq':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Month
  M: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'M':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'MM':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Mo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'MMM':
          return match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // J, F, ..., D

        case 'MMMMM':
          return match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // January, February, ..., December

        case 'MMMM':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone month
  L: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'LL':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Lo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'LLL':
          return match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // J, F, ..., D

        case 'LLLLL':
          return match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // January, February, ..., December

        case 'LLLL':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Local week of year
  w: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'w':
          return parseNumericPattern(numericPatterns.week, string);

        case 'wo':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return Object(_lib_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_lib_setUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, value, options), options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week of year
  I: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'I':
          return parseNumericPattern(numericPatterns.week, string);

        case 'Io':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return Object(_lib_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_lib_setUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, value, options), options);
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Day of the month
  d: {
    priority: 90,
    subPriority: 1,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'd':
          return parseNumericPattern(numericPatterns.date, string);

        case 'do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);
      var month = date.getUTCMonth();

      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Day of year
  D: {
    priority: 90,
    subPriority: 1,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'D':
        case 'DD':
          return parseNumericPattern(numericPatterns.dayOfYear, string);

        case 'Do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);

      if (isLeapYear) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']
  },
  // Day of week
  E: {
    priority: 90,
    parse: function (string, token, match, _options) {
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'EEEEE':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'EEEEEE':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'EEEE':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = Object(_lib_setUTCDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T']
  },
  // Local day of week
  e: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'e':
        case 'ee':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'eo':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'eee':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'eeeee':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'eeeeee':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'eeee':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = Object(_lib_setUTCDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']
  },
  // Stand-alone local day of week
  c: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'c':
        case 'cc':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'co':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'ccc':
          return match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // T

        case 'ccccc':
          return match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tu

        case 'cccccc':
          return match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tuesday

        case 'cccc':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = Object(_lib_setUTCDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']
  },
  // ISO day of week
  i: {
    priority: 90,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        if (value === 0) {
          return 7;
        }

        return value;
      };

      switch (token) {
        // 2
        case 'i':
        case 'ii':
          // 02
          return parseNDigits(token.length, string);
        // 2nd

        case 'io':
          return match.ordinalNumber(string, {
            unit: 'day'
          });
        // Tue

        case 'iii':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // T

        case 'iiiii':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tu

        case 'iiiiii':
          return match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tuesday

        case 'iiii':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 7;
    },
    set: function (date, _flags, value, options) {
      date = Object(_lib_setUTCISODay_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']
  },
  // AM or PM
  a: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaaa':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaa':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['b', 'B', 'H', 'K', 'k', 't', 'T']
  },
  // AM, PM, midnight
  b: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'b':
        case 'bb':
        case 'bbb':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbbb':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbb':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'B', 'H', 'K', 'k', 't', 'T']
  },
  // in the morning, in the afternoon, in the evening, at night
  B: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBBB':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBB':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 't', 'T']
  },
  // Hour [1-12]
  h: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'h':
          return parseNumericPattern(numericPatterns.hour12h, string);

        case 'ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 12;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['H', 'K', 'k', 't', 'T']
  },
  // Hour [0-23]
  H: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'H':
          return parseNumericPattern(numericPatterns.hour23h, string);

        case 'Ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 23;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T']
  },
  // Hour [0-11]
  K: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'K':
          return parseNumericPattern(numericPatterns.hour11h, string);

        case 'Ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'k', 't', 'T']
  },
  // Hour [1-24]
  k: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'k':
          return parseNumericPattern(numericPatterns.hour24h, string);

        case 'ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 24;
    },
    set: function (date, _flags, value, _options) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T']
  },
  // Minute
  m: {
    priority: 60,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'm':
          return parseNumericPattern(numericPatterns.minute, string);

        case 'mo':
          return match.ordinalNumber(string, {
            unit: 'minute'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Second
  s: {
    priority: 50,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 's':
          return parseNumericPattern(numericPatterns.second, string);

        case 'so':
          return match.ordinalNumber(string, {
            unit: 'second'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCSeconds(value, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Fraction of second
  S: {
    priority: 30,
    parse: function (string, token, _match, _options) {
      var valueCallback = function (value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };

      return parseNDigits(token.length, string, valueCallback);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMilliseconds(value);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Timezone (ISO-8601. +00:00 is `'Z'`)
  X: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'X':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'XX':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'XXXX':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'XXXXX':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'XXX':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'x']
  },
  // Timezone (ISO-8601)
  x: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'x':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'xx':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'xxxx':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'xxxxx':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'xxx':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'X']
  },
  // Seconds timestamp
  t: {
    priority: 40,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value * 1000), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  },
  // Milliseconds timestamp
  T: {
    priority: 20,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (parsers);

/***/ }),

/***/ "S7Yp":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/lightFormat/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lightFormat; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_format_lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/format/lightFormatters/index.js */ "YIOq");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "JCDJ");
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../isValid/index.js */ "Se/U");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "g9KO");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");





 // This RegExp consists of three parts separated by `|`:
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /(\w)\1*|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name lightFormat
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. Unlike `format`,
 * `lightFormat` doesn't use locales and outputs date using the most popular tokens.
 *
 * > ⚠️ Please note that the `lightFormat` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   |
 * |---------------------------------|---------|-----------------------------------|
 * | AM, PM                          | a..aaa  | AM, PM                            |
 * |                                 | aaaa    | a.m., p.m.                        |
 * |                                 | aaaaa   | a, p                              |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 |
 * |                                 | yy      | 44, 01, 00, 17                    |
 * |                                 | yyy     | 044, 001, 000, 017                |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |
 * |                                 | MM      | 01, 02, ..., 12                   |
 * | Day of month                    | d       | 1, 2, ..., 31                     |
 * |                                 | dd      | 01, 02, ..., 31                   |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |
 * |                                 | hh      | 01, 02, ..., 11, 12               |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |
 * |                                 | HH      | 00, 01, 02, ..., 23               |
 * | Minute                          | m       | 0, 1, ..., 59                     |
 * |                                 | mm      | 00, 01, ..., 59                   |
 * | Second                          | s       | 0, 1, ..., 59                     |
 * |                                 | ss      | 00, 01, ..., 59                   |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |
 * |                                 | SS      | 00, 01, ..., 99                   |
 * |                                 | SSS     | 000, 0001, ..., 999               |
 * |                                 | SSSS    | ...                               |
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * var result = lightFormat(new Date(2014, 1, 11), 'yyyy-MM-dd')
 * //=> '2014-02-11'
 */

function lightFormat(dirtyDate, dirtyFormatStr) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var originalDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);

  if (!Object(_isValid_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = Object(_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate);
  var utcDate = Object(_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(originalDate, timezoneOffset);
  var result = formatStr.match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_1__["default"][firstCharacter];

    if (formatter) {
      return formatter(utcDate, substring, null, {});
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "SFWn":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/getQuarter/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getQuarter; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which quarter is 2 July 2014?
 * const result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */

function getQuarter(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var quarter = Math.floor(date.getMonth() / 3) + 1;
  return quarter;
}

/***/ }),

/***/ "Se/U":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isValid; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  return !isNaN(date);
}

/***/ }),

/***/ "SuC2":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/subSeconds/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return subSeconds; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _addSeconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addSeconds/index.js */ "Ctv7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name subSeconds
 * @category Second Helpers
 * @summary Subtract the specified number of seconds from the given date.
 *
 * @description
 * Subtract the specified number of seconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the seconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 30 seconds from 10 July 2014 12:45:00:
 * const result = subSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:44:30
 */

function subSeconds(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
  return Object(_addSeconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "Szzx":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUTCWeekYear; });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toInteger/index.js */ "/h9T");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "/Tr7");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "1vjI");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../requiredArgs/index.js */ "jIYg");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = Object(_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = Object(_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "TGAR":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameQuarter/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isSameQuarter; });
/* harmony import */ var _startOfQuarter_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startOfQuarter/index.js */ "vHCX");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isSameQuarter
 * @category Quarter Helpers
 * @summary Are the given dates in the same year quarter?
 *
 * @description
 * Are the given dates in the same year quarter?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same quarter
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * var result = isSameQuarter(new Date(2014, 0, 1), new Date(2014, 2, 8))
 * //=> true
 */

function isSameQuarter(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var dateLeftStartOfQuarter = Object(_startOfQuarter_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
  var dateRightStartOfQuarter = Object(_startOfQuarter_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime();
}

/***/ }),

/***/ "TXrr":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfISOWeek/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return endOfISOWeek; });
/* harmony import */ var _endOfWeek_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../endOfWeek/index.js */ "L8hi");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name endOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of an ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * var result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */

function endOfISOWeek(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_endOfWeek_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate, {
    weekStartsOn: 1
  });
}

/***/ }),

/***/ "TjGc":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isToday; });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isSameDay/index.js */ "G6Tw");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "TnmX":
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/max/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return max; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - `max` function now accepts an array of dates rather than spread arguments.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   var date1 = new Date(1989, 6, 10)
 *   var date2 = new Date(1987, 1, 11)
 *   var maxDate = max(date1, date2)
 *
 *   // v2.0.0 onward:
 *   var dates = [new Date(1989, 6, 10), new Date(1987, 1, 11)]
 *   var maxDate = max(dates)
 *   ```
 *
 * @param {Date[]|Number[]} datesArray - the dates to compare
 * @returns {Date} the latest of the dates
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which of these dates is the latest?
 * var result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */

function max(dirtyDatesArray) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var datesArray; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method

  if (dirtyDatesArray && typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array.
  } else if (typeof dirtyDatesArray === 'object' && dirtyDatesArray !== null) {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  } else {
    // `dirtyDatesArray` is non-iterable, return Invalid Date
    return new Date(NaN);
  }

  var result;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);

    if (result === undefined || result < currentDate || isNaN(currentDate)) {
      result = currentDate;
    }
  });
  return result || new Date(NaN);
}

/***/ }),

/***/ "TpeJ":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getDate/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDate; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * const result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */

function getDate(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}

/***/ }),

/***/ "Tx3P":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameISOWeekYear/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isSameISOWeekYear; });
/* harmony import */ var _startOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startOfISOWeekYear/index.js */ "0f5V");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isSameISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Are the given dates in the same ISO week-numbering year?
 *
 * @description
 * Are the given dates in the same ISO week-numbering year?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `isSameISOYear` to `isSameISOWeekYear`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `getWeekYear`.
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO week-numbering year
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
 * var result = isSameISOWeekYear(new Date(2003, 11, 29), new Date(2005, 0, 2))
 * //=> true
 */

function isSameISOWeekYear(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var dateLeftStartOfYear = Object(_startOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
  var dateRightStartOfYear = Object(_startOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
  return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime();
}

/***/ }),

/***/ "UDy6":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/eachHourOfInterval/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return eachHourOfInterval; });
/* harmony import */ var _addHours_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addHours/index.js */ "Da6A");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




/**
 * @name eachHourOfInterval
 * @category Interval Helpers
 * @summary Return the array of hours within the specified time interval.
 *
 * @description
 * Return the array of hours within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link docs/types/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.step=1] - the step to increment by. The value should be more than 1.
 * @returns {Date[]} the array with starts of hours from the hour of the interval start to the hour of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.step` must be a number greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each hour between 6 October 2014, 12:00 and 10 October 2014, 15:00
 * var result = eachHourOfInterval({
 *   start: new Date(2014, 9, 6, 12),
 *   end: new Date(2014, 9, 6, 15)
 * })
 * //=> [
 * //   Mon Oct 06 2014 12:00:00,
 * //   Mon Oct 06 2014 13:00:00,
 * //   Mon Oct 06 2014 14:00:00,
 * //   Mon Oct 06 2014 15:00:00
 * // ]
 */
function eachHourOfInterval(dirtyInterval, options) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.start);
  var endDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.end);
  var startTime = startDate.getTime();
  var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var dates = [];
  var currentDate = startDate;
  currentDate.setMinutes(0, 0, 0);
  var step = options && 'step' in options ? Number(options.step) : 1;
  if (step < 1 || isNaN(step)) throw new RangeError('`options.step` must be a number greater than 1');

  while (currentDate.getTime() <= endTime) {
    dates.push(Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(currentDate));
    currentDate = Object(_addHours_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(currentDate, step);
  }

  return dates;
}

/***/ }),

/***/ "VLv5":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/subQuarters/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return subQuarters; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _addQuarters_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addQuarters/index.js */ "tfX3");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name subQuarters
 * @category Quarter Helpers
 * @summary Subtract the specified number of year quarters from the given date.
 *
 * @description
 * Subtract the specified number of year quarters from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the quarters subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 3 quarters from 1 September 2014:
 * const result = subQuarters(new Date(2014, 8, 1), 3)
 * //=> Sun Dec 01 2013 00:00:00
 */

function subQuarters(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
  return Object(_addQuarters_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "VSY4":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDuration/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatDuration; });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale/en-US/index.js */ "iSMj");

var defaultFormat = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'];
/**
 * @name formatDuration
 * @category Common Helpers
 * @summary Formats a duration in human-readable format
 *
 * @description
 * Return human-readable duration string i.e. "9 months 2 days"
 *
 * @param {Duration} duration - the duration to format
 * @param {Object} [options] - an object with options.

 * @param {string[]} [options.format=['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds']] - the array of units to format
 * @param {boolean} [options.zero=false] - should be zeros be included in the output?
 * @param {string} [options.delimiter=' '] - delimiter string
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {string} the formatted date string
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Format full duration
 * formatDuration({
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> '2 years 9 months 1 week 7 days 5 hours 9 minutes 30 seconds
 *
 * @example
 * // Format partial duration
 * formatDuration({ months: 9, days: 2 })
 * //=> '9 months 2 days'
 *
 * @example
 * // Customize the format
 * formatDuration(
 *   {
 *     years: 2,
 *     months: 9,
 *     weeks: 1,
 *     days: 7,
 *     hours: 5,
 *     minutes: 9,
 *     seconds: 30
 *   },
 *   { format: ['months', 'weeks'] }
 * ) === '9 months 1 week'
 *
 * @example
 * // Customize the zeros presence
 * formatDuration({ years: 0, months: 9 })
 * //=> '9 months'
 * formatDuration({ years: 0, months: 9 }, null, { zero: true })
 * //=> '0 years 9 months'
 *
 * @example
 * // Customize the delimiter
 * formatDuration({ years: 2, months: 9, weeks: 3 }, { delimiter: ', ' })
 * //=> '2 years, 9 months, 3 weeks'
 */

function formatDuration(duration) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
  }

  var format = options.format || defaultFormat;
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  var zero = options.zero || false;
  var delimiter = options.delimiter || ' ';
  var result = format.reduce(function (acc, unit) {
    var token = "x".concat(unit.replace(/(^.)/, function (m) {
      return m.toUpperCase();
    }));
    var addChunk = typeof duration[unit] === 'number' && (zero || duration[unit]);
    return addChunk ? acc.concat(locale.formatDistance(token, duration[unit])) : acc;
  }, []).join(delimiter);
  return result;
}

/***/ }),

/***/ "VlRU":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisHour/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isThisHour; });
/* harmony import */ var _isSameHour_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isSameHour/index.js */ "yzsd");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isThisHour
 * @category Hour Helpers
 * @summary Is the given date in the same hour as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same hour as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this hour
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:00:00 in this hour?
 * var result = isThisHour(new Date(2014, 8, 25, 18))
 * //=> true
 */

function isThisHour(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_isSameHour_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Date.now(), dirtyDate);
}

/***/ }),

/***/ "VxKU":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isFriday/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isFriday; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isFriday
 * @category Weekday Helpers
 * @summary Is the given date Friday?
 *
 * @description
 * Is the given date Friday?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Friday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 26 September 2014 Friday?
 * var result = isFriday(new Date(2014, 8, 26))
 * //=> true
 */

function isFriday(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate).getDay() === 5;
}

/***/ }),

/***/ "W6rj":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subBusinessDays/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return subBusinessDays; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _addBusinessDays_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addBusinessDays/index.js */ "83R2");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name subBusinessDays
 * @category Day Helpers
 * @summary Substract the specified number of business days (mon - fri) to the given date.
 *
 * @description
 * Substract the specified number of business days (mon - fri) to the given date, ignoring weekends.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of business days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the business days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Substract 10 business days from 1 September 2014:
 * var result = subBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Aug 18 2014 00:00:00 (skipped weekend days)
 */

function subBusinessDays(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
  return Object(_addBusinessDays_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "W9Un":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisISOWeek/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isThisISOWeek; });
/* harmony import */ var _isSameISOWeek_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isSameISOWeek/index.js */ "qzLx");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isThisISOWeek
 * @category ISO Week Helpers
 * @summary Is the given date in the same ISO week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same ISO week as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 25 September 2014, is 22 September 2014 in this ISO week?
 * var result = isThisISOWeek(new Date(2014, 8, 22))
 * //=> true
 */

function isThisISOWeek(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_isSameISOWeek_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "WIjQ":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameMonth/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isSameMonth; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */

function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
  var dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}

/***/ }),

/***/ "WJMa":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfSecond/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfSecond; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name startOfSecond
 * @category Second Helpers
 * @summary Return the start of a second for the given date.
 *
 * @description
 * Return the start of a second for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a second
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a second for 1 December 2014 22:15:45.400:
 * const result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.000
 */

function startOfSecond(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  date.setMilliseconds(0);
  return date;
}

/***/ }),

/***/ "WQ3w":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/subHours/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return subHours; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _addHours_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addHours/index.js */ "Da6A");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name subHours
 * @category Hour Helpers
 * @summary Subtract the specified number of hours from the given date.
 *
 * @description
 * Subtract the specified number of hours from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the hours subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 2 hours from 11 July 2014 01:00:00:
 * const result = subHours(new Date(2014, 6, 11, 1, 0), 2)
 * //=> Thu Jul 10 2014 23:00:00
 */

function subHours(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
  return Object(_addHours_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "WYsD":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "vRX4");
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "wzM+");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: Object(_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (match);

/***/ }),

/***/ "XQXX":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/setHours/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setHours; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */

function setHours(dirtyDate, dirtyHours) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var hours = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyHours);
  date.setHours(hours);
  return date;
}

/***/ }),

/***/ "XX+V":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/setWeek/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setWeek; });
/* harmony import */ var _getWeek_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getWeek/index.js */ "eYjL");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




/**
 * @name setWeek
 * @category Week Helpers
 * @summary Set the local week to the given date.
 *
 * @description
 * Set the local week to the given date, saving the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} week - the week of the new date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Date} the new date with the local week set
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Set the 1st week to 2 January 2005 with default options:
 * var result = setWeek(new Date(2005, 0, 2), 1)
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // Set the 1st week to 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January:
 * var result = setWeek(new Date(2005, 0, 2), 1, {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Sun Jan 4 2004 00:00:00
 */

function setWeek(dirtyDate, dirtyWeek, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var week = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyWeek);
  var diff = Object(_getWeek_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date, dirtyOptions) - week;
  date.setDate(date.getDate() - diff * 7);
  return date;
}

/***/ }),

/***/ "Xep9":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/subDays/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return subDays; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addDays/index.js */ "9/EM");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */

function subDays(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
  return Object(_addDays_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "Y1zf":
/*!*******************************!*\
  !*** ./src/app/try/module.ts ***!
  \*******************************/
/*! exports provided: TryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryModule", function() { return TryModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-flatpickr */ "UBqL");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar */ "kRoH");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "L/mj");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _try_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./try.component */ "vMt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth.guard */ "tIkO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");













class TryModule {
}
TryModule.ɵfac = function TryModule_Factory(t) { return new (t || TryModule)(); };
TryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: TryModule });
TryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalModule"],
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_2__["FlatpickrModule"].forRoot(),
            angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_4__["adapterFactory"],
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([
                { path: '', component: _try_component__WEBPACK_IMPORTED_MODULE_6__["TryComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](TryModule, { declarations: [_try_component__WEBPACK_IMPORTED_MODULE_6__["TryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalModule"], angularx_flatpickr__WEBPACK_IMPORTED_MODULE_2__["FlatpickrModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]], exports: [_try_component__WEBPACK_IMPORTED_MODULE_6__["TryComponent"]] }); })();


/***/ }),

/***/ "YIOq":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "+7QN");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (formatters);

/***/ }),

/***/ "YOOs":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfYesterday/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfYesterday; });
/**
 * @name startOfYesterday
 * @category Day Helpers
 * @summary Return the start of yesterday.
 * @pure false
 *
 * @description
 * Return the start of yesterday.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the start of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfYesterday()
 * //=> Sun Oct 5 2014 00:00:00
 */
function startOfYesterday() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var day = now.getDate();
  var date = new Date(0);
  date.setFullYear(year, month, day - 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "YOv4":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfTomorrow/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return endOfTomorrow; });
/**
 * @name endOfTomorrow
 * @category Day Helpers
 * @summary Return the end of tomorrow.
 * @pure false
 *
 * @description
 * Return the end of tomorrow.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the end of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfTomorrow()
 * //=> Tue Oct 7 2014 23:59:59.999
 */
function endOfTomorrow() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var day = now.getDate();
  var date = new Date(0);
  date.setFullYear(year, month, day + 1);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "YTra":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isWithinInterval/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isWithinInterval; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `isWithinRange` to `isWithinInterval`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   isWithinRange(
 *     new Date(2014, 0, 3),
 *     new Date(2014, 0, 1), new Date(2014, 0, 7)
 *   )
 *
 *   // v2.0.0 onward
 *
 *   isWithinInterval(
 *     new Date(2014, 0, 3),
 *     { start: new Date(2014, 0, 1), end: new Date(2014, 0, 7) }
 *   )
 *   ```
 *
 * @param {Date|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date }) // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end }) // => true
 */

function isWithinInterval(dirtyDate, dirtyInterval) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var interval = dirtyInterval || {};
  var time = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate).getTime();
  var startTime = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(interval.start).getTime();
  var endTime = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(interval.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  return time >= startTime && time <= endTime;
}

/***/ }),

/***/ "YdWM":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/esm/eachWeekendOfInterval/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return eachWeekendOfInterval; });
/* harmony import */ var _eachDayOfInterval_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../eachDayOfInterval/index.js */ "/rh5");
/* harmony import */ var _isSunday_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSunday/index.js */ "hW07");
/* harmony import */ var _isWeekend_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../isWeekend/index.js */ "gLRL");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




/**
 * @name eachWeekendOfInterval
 * @category Interval Helpers
 * @summary List all the Saturdays and Sundays in the given date interval.
 *
 * @description
 * Get all the Saturdays and Sundays in the given date interval.
 *
 * @param {Interval} interval - the given interval. See [Interval]{@link docs/types/Interval}
 * @returns {Date[]} an array containing all the Saturdays and Sundays
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Lists all Saturdays and Sundays in the given date interval
 * const result = eachWeekendOfInterval({
 *   start: new Date(2018, 8, 17),
 *   end: new Date(2018, 8, 30)
 * })
 * //=> [
 * //   Sat Sep 22 2018 00:00:00,
 * //   Sun Sep 23 2018 00:00:00,
 * //   Sat Sep 29 2018 00:00:00,
 * //   Sun Sep 30 2018 00:00:00
 * // ]
 */

function eachWeekendOfInterval(interval) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, arguments);
  var dateInterval = Object(_eachDayOfInterval_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(interval);
  var weekends = [];
  var index = 0;

  while (index < dateInterval.length) {
    var date = dateInterval[index++];

    if (Object(_isWeekend_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date)) {
      weekends.push(date);
      if (Object(_isSunday_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date)) index = index + 5;
    }
  }

  return weekends;
}

/***/ }),

/***/ "a3h9":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/subMinutes/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return subMinutes; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _addMinutes_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addMinutes/index.js */ "IYaI");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name subMinutes
 * @category Minute Helpers
 * @summary Subtract the specified number of minutes from the given date.
 *
 * @description
 * Subtract the specified number of minutes from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the minutes subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 30 minutes from 10 July 2014 12:00:00:
 * const result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 11:30:00
 */

function subMinutes(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
  return Object(_addMinutes_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "a7HJ":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInQuarters/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return differenceInQuarters; });
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../differenceInMonths/index.js */ "AkX2");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name differenceInQuarters
 * @category Quarter Helpers
 * @summary Get the number of full quarters between the given dates.
 *
 * @description
 * Get the number of full quarters between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full quarters
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInQuarters(new Date(2014, 6, 2), new Date(2013, 11, 31))
 * //=> 2
 */

function differenceInQuarters(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var diff = Object(_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft, dirtyDateRight) / 3;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

/***/ }),

/***/ "aakf":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInBusinessDays/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return differenceInBusinessDays; });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isValid/index.js */ "Se/U");
/* harmony import */ var _isWeekend_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isWeekend/index.js */ "gLRL");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ "gXqy");
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../addDays/index.js */ "9/EM");
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isSameDay/index.js */ "G6Tw");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");








/**
 * @name differenceInBusinessDays
 * @category Day Helpers
 * @summary Get the number of business days between the given dates.
 *
 * @description
 * Get the number of business day periods between the given dates.
 * Business days being days that arent in the weekend.
 * Like `differenceInCalendarDays`, the function removes the times from
 * the dates before calculating the difference.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of business days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many business days are between
 * // 10 January 2014 and 20 July 2014?
 * var result = differenceInBusinessDays(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 0, 10)
 * )
 * //=> 136
 */

function differenceInBusinessDays(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(2, arguments);
  var dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDateLeft);
  var dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDateRight);
  if (!Object(_isValid_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dateLeft) || !Object(_isValid_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dateRight)) return new Date(NaN);
  var calendarDifference = Object(_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight);
  var sign = calendarDifference < 0 ? -1 : 1;
  var weeks = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(calendarDifference / 7);
  var result = weeks * 5;
  dateRight = Object(_addDays_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dateRight, weeks * 7); // the loop below will run at most 6 times to account for the remaining days that don't makeup a full week

  while (!Object(_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateLeft, dateRight)) {
    // sign is used to account for both negative and positive differences
    result += Object(_isWeekend_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight) ? 0 : sign;
    dateRight = Object(_addDays_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dateRight, sign);
  }

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "accU":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/getSeconds/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSeconds; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name getSeconds
 * @category Second Helpers
 * @summary Get the seconds of the given date.
 *
 * @description
 * Get the seconds of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * const result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */

function getSeconds(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var seconds = date.getSeconds();
  return seconds;
}

/***/ }),

/***/ "aetl":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfWeek; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "aova":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/milliseconds/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return milliseconds; });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");

// Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
// 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
var yearInDays = 365.2425;
/**
 * @name milliseconds
 * @category Millisecond Helpers
 * @summary Returns the number of milliseconds in the specified, years, months, weeks, days, hours, minutes and seconds.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * One month is a year devided by 12.
 *
 * @description
 * Returns the number of milliseconds in the specified, years, months, weeks, days, hours, minutes and seconds.
 *
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {number} the milliseconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // 1 year in milliseconds
 * milliseconds({ year: 1 })
 * //=> 31556952000
 *
 * // 3 months in milliseconds
 * milliseconds({ month: 3 })
 * //=> 7889238000
 */

function milliseconds(_ref) {
  var years = _ref.years,
      months = _ref.months,
      weeks = _ref.weeks,
      days = _ref.days,
      hours = _ref.hours,
      minutes = _ref.minutes,
      seconds = _ref.seconds;
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var totalDays = 0;
  if (years) totalDays += years * yearInDays;
  if (months) totalDays += months * (yearInDays / 12);
  if (weeks) totalDays += weeks * 7;
  if (days) totalDays += days;
  var totalSeconds = totalDays * 24 * 60 * 60;
  if (hours) totalSeconds += hours * 60 * 60;
  if (minutes) totalSeconds += minutes * 60;
  if (seconds) totalSeconds += seconds;
  return Math.round(totalSeconds * 1000);
}

/***/ }),

/***/ "b/SL":
/*!********************************************!*\
  !*** ./node_modules/date-fns/esm/index.js ***!
  \********************************************/
/*! exports provided: add, addBusinessDays, addDays, addHours, addISOWeekYears, addMilliseconds, addMinutes, addMonths, addQuarters, addSeconds, addWeeks, addYears, areIntervalsOverlapping, closestIndexTo, closestTo, compareAsc, compareDesc, differenceInBusinessDays, differenceInCalendarDays, differenceInCalendarISOWeekYears, differenceInCalendarISOWeeks, differenceInCalendarMonths, differenceInCalendarQuarters, differenceInCalendarWeeks, differenceInCalendarYears, differenceInDays, differenceInHours, differenceInISOWeekYears, differenceInMilliseconds, differenceInMinutes, differenceInMonths, differenceInQuarters, differenceInSeconds, differenceInWeeks, differenceInYears, eachDayOfInterval, eachHourOfInterval, eachMonthOfInterval, eachQuarterOfInterval, eachWeekOfInterval, eachWeekendOfInterval, eachWeekendOfMonth, eachWeekendOfYear, eachYearOfInterval, endOfDay, endOfDecade, endOfHour, endOfISOWeek, endOfISOWeekYear, endOfMinute, endOfMonth, endOfQuarter, endOfSecond, endOfToday, endOfTomorrow, endOfWeek, endOfYear, endOfYesterday, format, formatDistance, formatDistanceStrict, formatDistanceToNow, formatDistanceToNowStrict, formatDuration, formatISO, formatISO9075, formatISODuration, formatRFC3339, formatRFC7231, formatRelative, fromUnixTime, getDate, getDay, getDayOfYear, getDaysInMonth, getDaysInYear, getDecade, getHours, getISODay, getISOWeek, getISOWeekYear, getISOWeeksInYear, getMilliseconds, getMinutes, getMonth, getOverlappingDaysInIntervals, getQuarter, getSeconds, getTime, getUnixTime, getWeek, getWeekOfMonth, getWeekYear, getWeeksInMonth, getYear, intervalToDuration, intlFormat, isAfter, isBefore, isDate, isEqual, isExists, isFirstDayOfMonth, isFriday, isFuture, isLastDayOfMonth, isLeapYear, isMatch, isMonday, isPast, isSameDay, isSameHour, isSameISOWeek, isSameISOWeekYear, isSameMinute, isSameMonth, isSameQuarter, isSameSecond, isSameWeek, isSameYear, isSaturday, isSunday, isThisHour, isThisISOWeek, isThisMinute, isThisMonth, isThisQuarter, isThisSecond, isThisWeek, isThisYear, isThursday, isToday, isTomorrow, isTuesday, isValid, isWednesday, isWeekend, isWithinInterval, isYesterday, lastDayOfDecade, lastDayOfISOWeek, lastDayOfISOWeekYear, lastDayOfMonth, lastDayOfQuarter, lastDayOfWeek, lastDayOfYear, lightFormat, max, milliseconds, min, parse, parseISO, parseJSON, roundToNearestMinutes, set, setDate, setDay, setDayOfYear, setHours, setISODay, setISOWeek, setISOWeekYear, setMilliseconds, setMinutes, setMonth, setQuarter, setSeconds, setWeek, setWeekYear, setYear, startOfDay, startOfDecade, startOfHour, startOfISOWeek, startOfISOWeekYear, startOfMinute, startOfMonth, startOfQuarter, startOfSecond, startOfToday, startOfTomorrow, startOfWeek, startOfWeekYear, startOfYear, startOfYesterday, sub, subBusinessDays, subDays, subHours, subISOWeekYears, subMilliseconds, subMinutes, subMonths, subQuarters, subSeconds, subWeeks, subYears, toDate, maxTime, minTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/index.js */ "IjAw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "add", function() { return _add_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _addBusinessDays_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addBusinessDays/index.js */ "83R2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addBusinessDays", function() { return _addBusinessDays_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays/index.js */ "9/EM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addDays", function() { return _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _addHours_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addHours/index.js */ "Da6A");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addHours", function() { return _addHours_index_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _addISOWeekYears_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addISOWeekYears/index.js */ "GP2A");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addISOWeekYears", function() { return _addISOWeekYears_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addMilliseconds/index.js */ "pl0G");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addMilliseconds", function() { return _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _addMinutes_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addMinutes/index.js */ "IYaI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addMinutes", function() { return _addMinutes_index_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addMonths/index.js */ "dLU1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addMonths", function() { return _addMonths_index_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _addQuarters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addQuarters/index.js */ "tfX3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addQuarters", function() { return _addQuarters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _addSeconds_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addSeconds/index.js */ "Ctv7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addSeconds", function() { return _addSeconds_index_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _addWeeks_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./addWeeks/index.js */ "r4sE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addWeeks", function() { return _addWeeks_index_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _addYears_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./addYears/index.js */ "zbbA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addYears", function() { return _addYears_index_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _areIntervalsOverlapping_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./areIntervalsOverlapping/index.js */ "26Ho");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "areIntervalsOverlapping", function() { return _areIntervalsOverlapping_index_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _closestIndexTo_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./closestIndexTo/index.js */ "wigk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closestIndexTo", function() { return _closestIndexTo_index_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _closestTo_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./closestTo/index.js */ "oYTe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closestTo", function() { return _closestTo_index_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./compareAsc/index.js */ "JhOC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareAsc", function() { return _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _compareDesc_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./compareDesc/index.js */ "fePA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareDesc", function() { return _compareDesc_index_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _differenceInBusinessDays_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./differenceInBusinessDays/index.js */ "aakf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differenceInBusinessDays", function() { return _differenceInBusinessDays_index_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./differenceInCalendarDays/index.js */ "gXqy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differenceInCalendarDays", function() { return _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _differenceInCalendarISOWeekYears_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./differenceInCalendarISOWeekYears/index.js */ "3zlk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differenceInCalendarISOWeekYears", function() { return _differenceInCalendarISOWeekYears_index_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _differenceInCalendarISOWeeks_index_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./differenceInCalendarISOWeeks/index.js */ "Havk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differenceInCalendarISOWeeks", function() { return _differenceInCalendarISOWeeks_index_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./differenceInCalendarMonths/index.js */ "pvlY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differenceInCalendarMonths", function() { return _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _differenceInCalendarQuarters_index_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./differenceInCalendarQuarters/index.js */ "3nag");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differenceInCalendarQuarters", function() { return _differenceInCalendarQuarters_index_js__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _differenceInCalendarWeeks_index_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./differenceInCalendarWeeks/index.js */ "/Lp+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differenceInCalendarWeeks", function() { return _differenceInCalendarWeeks_index_js__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./differenceInCalendarYears/index.js */ "AF4N");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differenceInCalendarYears", function() { return _differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _differenceInDays_index_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./differenceInDays/index.js */ "NoME");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differenceInDays", function() { return _differenceInDays_index_js__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _differenceInHours_index_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./differenceInHours/index.js */ "moCM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differenceInHours", function() { return _differenceInHours_index_js__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _differenceInISOWeekYears_index_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./differenceInISOWeekYears/index.js */ "vAQ4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differenceInISOWeekYears", function() { return _differenceInISOWeekYears_index_js__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./differenceInMilliseconds/index.js */ "Orh4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differenceInMilliseconds", function() { return _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _differenceInMinutes_index_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./differenceInMinutes/index.js */ "jG/O");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differenceInMinutes", function() { return _differenceInMinutes_index_js__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./differenceInMonths/index.js */ "AkX2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differenceInMonths", function() { return _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _differenceInQuarters_index_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./differenceInQuarters/index.js */ "a7HJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differenceInQuarters", function() { return _differenceInQuarters_index_js__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./differenceInSeconds/index.js */ "qVkf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differenceInSeconds", function() { return _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _differenceInWeeks_index_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./differenceInWeeks/index.js */ "0Ug1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differenceInWeeks", function() { return _differenceInWeeks_index_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _differenceInYears_index_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./differenceInYears/index.js */ "Bp6I");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differenceInYears", function() { return _differenceInYears_index_js__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _eachDayOfInterval_index_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./eachDayOfInterval/index.js */ "/rh5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eachDayOfInterval", function() { return _eachDayOfInterval_index_js__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _eachHourOfInterval_index_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./eachHourOfInterval/index.js */ "UDy6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eachHourOfInterval", function() { return _eachHourOfInterval_index_js__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _eachMonthOfInterval_index_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./eachMonthOfInterval/index.js */ "4jLh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eachMonthOfInterval", function() { return _eachMonthOfInterval_index_js__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _eachQuarterOfInterval_index_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./eachQuarterOfInterval/index.js */ "cjyC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eachQuarterOfInterval", function() { return _eachQuarterOfInterval_index_js__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _eachWeekOfInterval_index_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./eachWeekOfInterval/index.js */ "knTs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eachWeekOfInterval", function() { return _eachWeekOfInterval_index_js__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _eachWeekendOfInterval_index_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./eachWeekendOfInterval/index.js */ "YdWM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eachWeekendOfInterval", function() { return _eachWeekendOfInterval_index_js__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _eachWeekendOfMonth_index_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./eachWeekendOfMonth/index.js */ "2AQE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eachWeekendOfMonth", function() { return _eachWeekendOfMonth_index_js__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _eachWeekendOfYear_index_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./eachWeekendOfYear/index.js */ "EkTD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eachWeekendOfYear", function() { return _eachWeekendOfYear_index_js__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _eachYearOfInterval_index_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./eachYearOfInterval/index.js */ "diJF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eachYearOfInterval", function() { return _eachYearOfInterval_index_js__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./endOfDay/index.js */ "piIK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endOfDay", function() { return _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _endOfDecade_index_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./endOfDecade/index.js */ "QNJA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endOfDecade", function() { return _endOfDecade_index_js__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _endOfHour_index_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./endOfHour/index.js */ "rH8F");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endOfHour", function() { return _endOfHour_index_js__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _endOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./endOfISOWeek/index.js */ "TXrr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endOfISOWeek", function() { return _endOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _endOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./endOfISOWeekYear/index.js */ "bbbT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endOfISOWeekYear", function() { return _endOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _endOfMinute_index_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./endOfMinute/index.js */ "IIV6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endOfMinute", function() { return _endOfMinute_index_js__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./endOfMonth/index.js */ "jKzE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endOfMonth", function() { return _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _endOfQuarter_index_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./endOfQuarter/index.js */ "qh+W");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endOfQuarter", function() { return _endOfQuarter_index_js__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _endOfSecond_index_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./endOfSecond/index.js */ "PWs8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endOfSecond", function() { return _endOfSecond_index_js__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony import */ var _endOfToday_index_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./endOfToday/index.js */ "lv2b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endOfToday", function() { return _endOfToday_index_js__WEBPACK_IMPORTED_MODULE_53__["default"]; });

/* harmony import */ var _endOfTomorrow_index_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./endOfTomorrow/index.js */ "YOv4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endOfTomorrow", function() { return _endOfTomorrow_index_js__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _endOfWeek_index_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./endOfWeek/index.js */ "L8hi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endOfWeek", function() { return _endOfWeek_index_js__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony import */ var _endOfYear_index_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./endOfYear/index.js */ "Gqtg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endOfYear", function() { return _endOfYear_index_js__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony import */ var _endOfYesterday_index_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./endOfYesterday/index.js */ "bKex");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endOfYesterday", function() { return _endOfYesterday_index_js__WEBPACK_IMPORTED_MODULE_57__["default"]; });

/* harmony import */ var _format_index_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./format/index.js */ "sWYD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _format_index_js__WEBPACK_IMPORTED_MODULE_58__["default"]; });

/* harmony import */ var _formatDistance_index_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./formatDistance/index.js */ "FVam");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDistance", function() { return _formatDistance_index_js__WEBPACK_IMPORTED_MODULE_59__["default"]; });

/* harmony import */ var _formatDistanceStrict_index_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./formatDistanceStrict/index.js */ "0UaF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDistanceStrict", function() { return _formatDistanceStrict_index_js__WEBPACK_IMPORTED_MODULE_60__["default"]; });

/* harmony import */ var _formatDistanceToNow_index_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./formatDistanceToNow/index.js */ "7xvl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDistanceToNow", function() { return _formatDistanceToNow_index_js__WEBPACK_IMPORTED_MODULE_61__["default"]; });

/* harmony import */ var _formatDistanceToNowStrict_index_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./formatDistanceToNowStrict/index.js */ "HM39");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDistanceToNowStrict", function() { return _formatDistanceToNowStrict_index_js__WEBPACK_IMPORTED_MODULE_62__["default"]; });

/* harmony import */ var _formatDuration_index_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./formatDuration/index.js */ "VSY4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDuration", function() { return _formatDuration_index_js__WEBPACK_IMPORTED_MODULE_63__["default"]; });

/* harmony import */ var _formatISO_index_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./formatISO/index.js */ "c32n");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatISO", function() { return _formatISO_index_js__WEBPACK_IMPORTED_MODULE_64__["default"]; });

/* harmony import */ var _formatISO9075_index_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./formatISO9075/index.js */ "RaBM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatISO9075", function() { return _formatISO9075_index_js__WEBPACK_IMPORTED_MODULE_65__["default"]; });

/* harmony import */ var _formatISODuration_index_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./formatISODuration/index.js */ "4Ukw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatISODuration", function() { return _formatISODuration_index_js__WEBPACK_IMPORTED_MODULE_66__["default"]; });

/* harmony import */ var _formatRFC3339_index_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./formatRFC3339/index.js */ "/pik");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatRFC3339", function() { return _formatRFC3339_index_js__WEBPACK_IMPORTED_MODULE_67__["default"]; });

/* harmony import */ var _formatRFC7231_index_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./formatRFC7231/index.js */ "bd2w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatRFC7231", function() { return _formatRFC7231_index_js__WEBPACK_IMPORTED_MODULE_68__["default"]; });

/* harmony import */ var _formatRelative_index_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./formatRelative/index.js */ "Q2p9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatRelative", function() { return _formatRelative_index_js__WEBPACK_IMPORTED_MODULE_69__["default"]; });

/* harmony import */ var _fromUnixTime_index_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./fromUnixTime/index.js */ "RgJi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromUnixTime", function() { return _fromUnixTime_index_js__WEBPACK_IMPORTED_MODULE_70__["default"]; });

/* harmony import */ var _getDate_index_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./getDate/index.js */ "TpeJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDate", function() { return _getDate_index_js__WEBPACK_IMPORTED_MODULE_71__["default"]; });

/* harmony import */ var _getDay_index_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./getDay/index.js */ "GobQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDay", function() { return _getDay_index_js__WEBPACK_IMPORTED_MODULE_72__["default"]; });

/* harmony import */ var _getDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./getDayOfYear/index.js */ "Dq2l");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDayOfYear", function() { return _getDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_73__["default"]; });

/* harmony import */ var _getDaysInMonth_index_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./getDaysInMonth/index.js */ "OuL/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDaysInMonth", function() { return _getDaysInMonth_index_js__WEBPACK_IMPORTED_MODULE_74__["default"]; });

/* harmony import */ var _getDaysInYear_index_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./getDaysInYear/index.js */ "kKrM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDaysInYear", function() { return _getDaysInYear_index_js__WEBPACK_IMPORTED_MODULE_75__["default"]; });

/* harmony import */ var _getDecade_index_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./getDecade/index.js */ "D+pV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDecade", function() { return _getDecade_index_js__WEBPACK_IMPORTED_MODULE_76__["default"]; });

/* harmony import */ var _getHours_index_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./getHours/index.js */ "08aW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHours", function() { return _getHours_index_js__WEBPACK_IMPORTED_MODULE_77__["default"]; });

/* harmony import */ var _getISODay_index_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./getISODay/index.js */ "NXEZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getISODay", function() { return _getISODay_index_js__WEBPACK_IMPORTED_MODULE_78__["default"]; });

/* harmony import */ var _getISOWeek_index_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./getISOWeek/index.js */ "sBI4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getISOWeek", function() { return _getISOWeek_index_js__WEBPACK_IMPORTED_MODULE_79__["default"]; });

/* harmony import */ var _getISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./getISOWeekYear/index.js */ "BKKT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getISOWeekYear", function() { return _getISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_80__["default"]; });

/* harmony import */ var _getISOWeeksInYear_index_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./getISOWeeksInYear/index.js */ "5FpM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getISOWeeksInYear", function() { return _getISOWeeksInYear_index_js__WEBPACK_IMPORTED_MODULE_81__["default"]; });

/* harmony import */ var _getMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./getMilliseconds/index.js */ "4G8O");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMilliseconds", function() { return _getMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_82__["default"]; });

/* harmony import */ var _getMinutes_index_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./getMinutes/index.js */ "3g9J");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMinutes", function() { return _getMinutes_index_js__WEBPACK_IMPORTED_MODULE_83__["default"]; });

/* harmony import */ var _getMonth_index_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./getMonth/index.js */ "cHAT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMonth", function() { return _getMonth_index_js__WEBPACK_IMPORTED_MODULE_84__["default"]; });

/* harmony import */ var _getOverlappingDaysInIntervals_index_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./getOverlappingDaysInIntervals/index.js */ "tiw6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOverlappingDaysInIntervals", function() { return _getOverlappingDaysInIntervals_index_js__WEBPACK_IMPORTED_MODULE_85__["default"]; });

/* harmony import */ var _getQuarter_index_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./getQuarter/index.js */ "SFWn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQuarter", function() { return _getQuarter_index_js__WEBPACK_IMPORTED_MODULE_86__["default"]; });

/* harmony import */ var _getSeconds_index_js__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./getSeconds/index.js */ "accU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSeconds", function() { return _getSeconds_index_js__WEBPACK_IMPORTED_MODULE_87__["default"]; });

/* harmony import */ var _getTime_index_js__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./getTime/index.js */ "5wMr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTime", function() { return _getTime_index_js__WEBPACK_IMPORTED_MODULE_88__["default"]; });

/* harmony import */ var _getUnixTime_index_js__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./getUnixTime/index.js */ "odh7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUnixTime", function() { return _getUnixTime_index_js__WEBPACK_IMPORTED_MODULE_89__["default"]; });

/* harmony import */ var _getWeek_index_js__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./getWeek/index.js */ "eYjL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWeek", function() { return _getWeek_index_js__WEBPACK_IMPORTED_MODULE_90__["default"]; });

/* harmony import */ var _getWeekOfMonth_index_js__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./getWeekOfMonth/index.js */ "kMzH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWeekOfMonth", function() { return _getWeekOfMonth_index_js__WEBPACK_IMPORTED_MODULE_91__["default"]; });

/* harmony import */ var _getWeekYear_index_js__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./getWeekYear/index.js */ "7gZZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWeekYear", function() { return _getWeekYear_index_js__WEBPACK_IMPORTED_MODULE_92__["default"]; });

/* harmony import */ var _getWeeksInMonth_index_js__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./getWeeksInMonth/index.js */ "pxe6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWeeksInMonth", function() { return _getWeeksInMonth_index_js__WEBPACK_IMPORTED_MODULE_93__["default"]; });

/* harmony import */ var _getYear_index_js__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./getYear/index.js */ "cnyc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getYear", function() { return _getYear_index_js__WEBPACK_IMPORTED_MODULE_94__["default"]; });

/* harmony import */ var _intervalToDuration_index_js__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./intervalToDuration/index.js */ "JbbM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intervalToDuration", function() { return _intervalToDuration_index_js__WEBPACK_IMPORTED_MODULE_95__["default"]; });

/* harmony import */ var _intlFormat_index_js__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./intlFormat/index.js */ "76r+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intlFormat", function() { return _intlFormat_index_js__WEBPACK_IMPORTED_MODULE_96__["default"]; });

/* harmony import */ var _isAfter_index_js__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./isAfter/index.js */ "EhJz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAfter", function() { return _isAfter_index_js__WEBPACK_IMPORTED_MODULE_97__["default"]; });

/* harmony import */ var _isBefore_index_js__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./isBefore/index.js */ "dndX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBefore", function() { return _isBefore_index_js__WEBPACK_IMPORTED_MODULE_98__["default"]; });

/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./isDate/index.js */ "p+Ro");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _isDate_index_js__WEBPACK_IMPORTED_MODULE_99__["default"]; });

/* harmony import */ var _isEqual_index_js__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./isEqual/index.js */ "zHMj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _isEqual_index_js__WEBPACK_IMPORTED_MODULE_100__["default"]; });

/* harmony import */ var _isExists_index_js__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./isExists/index.js */ "/pzQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isExists", function() { return _isExists_index_js__WEBPACK_IMPORTED_MODULE_101__["default"]; });

/* harmony import */ var _isFirstDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./isFirstDayOfMonth/index.js */ "wK6H");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFirstDayOfMonth", function() { return _isFirstDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_102__["default"]; });

/* harmony import */ var _isFriday_index_js__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./isFriday/index.js */ "VxKU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFriday", function() { return _isFriday_index_js__WEBPACK_IMPORTED_MODULE_103__["default"]; });

/* harmony import */ var _isFuture_index_js__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./isFuture/index.js */ "uh5Q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFuture", function() { return _isFuture_index_js__WEBPACK_IMPORTED_MODULE_104__["default"]; });

/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./isLastDayOfMonth/index.js */ "DX7i");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLastDayOfMonth", function() { return _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_105__["default"]; });

/* harmony import */ var _isLeapYear_index_js__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./isLeapYear/index.js */ "9T1D");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLeapYear", function() { return _isLeapYear_index_js__WEBPACK_IMPORTED_MODULE_106__["default"]; });

/* harmony import */ var _isMatch_index_js__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./isMatch/index.js */ "D0ch");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMatch", function() { return _isMatch_index_js__WEBPACK_IMPORTED_MODULE_107__["default"]; });

/* harmony import */ var _isMonday_index_js__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./isMonday/index.js */ "wTf+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMonday", function() { return _isMonday_index_js__WEBPACK_IMPORTED_MODULE_108__["default"]; });

/* harmony import */ var _isPast_index_js__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./isPast/index.js */ "HZtn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPast", function() { return _isPast_index_js__WEBPACK_IMPORTED_MODULE_109__["default"]; });

/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./isSameDay/index.js */ "G6Tw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameDay", function() { return _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_110__["default"]; });

/* harmony import */ var _isSameHour_index_js__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./isSameHour/index.js */ "yzsd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameHour", function() { return _isSameHour_index_js__WEBPACK_IMPORTED_MODULE_111__["default"]; });

/* harmony import */ var _isSameISOWeek_index_js__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./isSameISOWeek/index.js */ "qzLx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameISOWeek", function() { return _isSameISOWeek_index_js__WEBPACK_IMPORTED_MODULE_112__["default"]; });

/* harmony import */ var _isSameISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./isSameISOWeekYear/index.js */ "Tx3P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameISOWeekYear", function() { return _isSameISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_113__["default"]; });

/* harmony import */ var _isSameMinute_index_js__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./isSameMinute/index.js */ "s+wp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameMinute", function() { return _isSameMinute_index_js__WEBPACK_IMPORTED_MODULE_114__["default"]; });

/* harmony import */ var _isSameMonth_index_js__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./isSameMonth/index.js */ "WIjQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameMonth", function() { return _isSameMonth_index_js__WEBPACK_IMPORTED_MODULE_115__["default"]; });

/* harmony import */ var _isSameQuarter_index_js__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./isSameQuarter/index.js */ "TGAR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameQuarter", function() { return _isSameQuarter_index_js__WEBPACK_IMPORTED_MODULE_116__["default"]; });

/* harmony import */ var _isSameSecond_index_js__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./isSameSecond/index.js */ "B3eN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameSecond", function() { return _isSameSecond_index_js__WEBPACK_IMPORTED_MODULE_117__["default"]; });

/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./isSameWeek/index.js */ "JO1+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameWeek", function() { return _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_118__["default"]; });

/* harmony import */ var _isSameYear_index_js__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./isSameYear/index.js */ "kJyz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameYear", function() { return _isSameYear_index_js__WEBPACK_IMPORTED_MODULE_119__["default"]; });

/* harmony import */ var _isSaturday_index_js__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./isSaturday/index.js */ "GxZL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSaturday", function() { return _isSaturday_index_js__WEBPACK_IMPORTED_MODULE_120__["default"]; });

/* harmony import */ var _isSunday_index_js__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./isSunday/index.js */ "hW07");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSunday", function() { return _isSunday_index_js__WEBPACK_IMPORTED_MODULE_121__["default"]; });

/* harmony import */ var _isThisHour_index_js__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./isThisHour/index.js */ "VlRU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isThisHour", function() { return _isThisHour_index_js__WEBPACK_IMPORTED_MODULE_122__["default"]; });

/* harmony import */ var _isThisISOWeek_index_js__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./isThisISOWeek/index.js */ "W9Un");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isThisISOWeek", function() { return _isThisISOWeek_index_js__WEBPACK_IMPORTED_MODULE_123__["default"]; });

/* harmony import */ var _isThisMinute_index_js__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./isThisMinute/index.js */ "MVig");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isThisMinute", function() { return _isThisMinute_index_js__WEBPACK_IMPORTED_MODULE_124__["default"]; });

/* harmony import */ var _isThisMonth_index_js__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./isThisMonth/index.js */ "u/yc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isThisMonth", function() { return _isThisMonth_index_js__WEBPACK_IMPORTED_MODULE_125__["default"]; });

/* harmony import */ var _isThisQuarter_index_js__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ./isThisQuarter/index.js */ "w3Pf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isThisQuarter", function() { return _isThisQuarter_index_js__WEBPACK_IMPORTED_MODULE_126__["default"]; });

/* harmony import */ var _isThisSecond_index_js__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ./isThisSecond/index.js */ "AWcS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isThisSecond", function() { return _isThisSecond_index_js__WEBPACK_IMPORTED_MODULE_127__["default"]; });

/* harmony import */ var _isThisWeek_index_js__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ./isThisWeek/index.js */ "3+Em");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isThisWeek", function() { return _isThisWeek_index_js__WEBPACK_IMPORTED_MODULE_128__["default"]; });

/* harmony import */ var _isThisYear_index_js__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ./isThisYear/index.js */ "MkVN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isThisYear", function() { return _isThisYear_index_js__WEBPACK_IMPORTED_MODULE_129__["default"]; });

/* harmony import */ var _isThursday_index_js__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ./isThursday/index.js */ "H6X/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isThursday", function() { return _isThursday_index_js__WEBPACK_IMPORTED_MODULE_130__["default"]; });

/* harmony import */ var _isToday_index_js__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ./isToday/index.js */ "TjGc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isToday", function() { return _isToday_index_js__WEBPACK_IMPORTED_MODULE_131__["default"]; });

/* harmony import */ var _isTomorrow_index_js__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ./isTomorrow/index.js */ "jZMG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTomorrow", function() { return _isTomorrow_index_js__WEBPACK_IMPORTED_MODULE_132__["default"]; });

/* harmony import */ var _isTuesday_index_js__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ./isTuesday/index.js */ "PdOA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTuesday", function() { return _isTuesday_index_js__WEBPACK_IMPORTED_MODULE_133__["default"]; });

/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ./isValid/index.js */ "Se/U");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValid", function() { return _isValid_index_js__WEBPACK_IMPORTED_MODULE_134__["default"]; });

/* harmony import */ var _isWednesday_index_js__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ./isWednesday/index.js */ "5cON");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWednesday", function() { return _isWednesday_index_js__WEBPACK_IMPORTED_MODULE_135__["default"]; });

/* harmony import */ var _isWeekend_index_js__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ./isWeekend/index.js */ "gLRL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWeekend", function() { return _isWeekend_index_js__WEBPACK_IMPORTED_MODULE_136__["default"]; });

/* harmony import */ var _isWithinInterval_index_js__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ./isWithinInterval/index.js */ "YTra");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWithinInterval", function() { return _isWithinInterval_index_js__WEBPACK_IMPORTED_MODULE_137__["default"]; });

/* harmony import */ var _isYesterday_index_js__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ./isYesterday/index.js */ "1PZI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isYesterday", function() { return _isYesterday_index_js__WEBPACK_IMPORTED_MODULE_138__["default"]; });

/* harmony import */ var _lastDayOfDecade_index_js__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ./lastDayOfDecade/index.js */ "8iJe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastDayOfDecade", function() { return _lastDayOfDecade_index_js__WEBPACK_IMPORTED_MODULE_139__["default"]; });

/* harmony import */ var _lastDayOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ./lastDayOfISOWeek/index.js */ "gA5F");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastDayOfISOWeek", function() { return _lastDayOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_140__["default"]; });

/* harmony import */ var _lastDayOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ./lastDayOfISOWeekYear/index.js */ "+1d7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastDayOfISOWeekYear", function() { return _lastDayOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_141__["default"]; });

/* harmony import */ var _lastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ./lastDayOfMonth/index.js */ "kKUf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastDayOfMonth", function() { return _lastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_142__["default"]; });

/* harmony import */ var _lastDayOfQuarter_index_js__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ./lastDayOfQuarter/index.js */ "Fwbw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastDayOfQuarter", function() { return _lastDayOfQuarter_index_js__WEBPACK_IMPORTED_MODULE_143__["default"]; });

/* harmony import */ var _lastDayOfWeek_index_js__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ./lastDayOfWeek/index.js */ "gH8E");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastDayOfWeek", function() { return _lastDayOfWeek_index_js__WEBPACK_IMPORTED_MODULE_144__["default"]; });

/* harmony import */ var _lastDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ./lastDayOfYear/index.js */ "wQoA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastDayOfYear", function() { return _lastDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_145__["default"]; });

/* harmony import */ var _lightFormat_index_js__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ./lightFormat/index.js */ "S7Yp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lightFormat", function() { return _lightFormat_index_js__WEBPACK_IMPORTED_MODULE_146__["default"]; });

/* harmony import */ var _max_index_js__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ./max/index.js */ "TnmX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _max_index_js__WEBPACK_IMPORTED_MODULE_147__["default"]; });

/* harmony import */ var _milliseconds_index_js__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ./milliseconds/index.js */ "aova");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "milliseconds", function() { return _milliseconds_index_js__WEBPACK_IMPORTED_MODULE_148__["default"]; });

/* harmony import */ var _min_index_js__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ./min/index.js */ "edZA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min_index_js__WEBPACK_IMPORTED_MODULE_149__["default"]; });

/* harmony import */ var _parse_index_js__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ./parse/index.js */ "LPPQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parse_index_js__WEBPACK_IMPORTED_MODULE_150__["default"]; });

/* harmony import */ var _parseISO_index_js__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ./parseISO/index.js */ "4+6U");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseISO", function() { return _parseISO_index_js__WEBPACK_IMPORTED_MODULE_151__["default"]; });

/* harmony import */ var _parseJSON_index_js__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ./parseJSON/index.js */ "PQko");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseJSON", function() { return _parseJSON_index_js__WEBPACK_IMPORTED_MODULE_152__["default"]; });

/* harmony import */ var _roundToNearestMinutes_index_js__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ./roundToNearestMinutes/index.js */ "ILtH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roundToNearestMinutes", function() { return _roundToNearestMinutes_index_js__WEBPACK_IMPORTED_MODULE_153__["default"]; });

/* harmony import */ var _set_index_js__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ./set/index.js */ "gME1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "set", function() { return _set_index_js__WEBPACK_IMPORTED_MODULE_154__["default"]; });

/* harmony import */ var _setDate_index_js__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ./setDate/index.js */ "tSIP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDate", function() { return _setDate_index_js__WEBPACK_IMPORTED_MODULE_155__["default"]; });

/* harmony import */ var _setDay_index_js__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! ./setDay/index.js */ "ksg9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDay", function() { return _setDay_index_js__WEBPACK_IMPORTED_MODULE_156__["default"]; });

/* harmony import */ var _setDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ./setDayOfYear/index.js */ "6En+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDayOfYear", function() { return _setDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_157__["default"]; });

/* harmony import */ var _setHours_index_js__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! ./setHours/index.js */ "XQXX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setHours", function() { return _setHours_index_js__WEBPACK_IMPORTED_MODULE_158__["default"]; });

/* harmony import */ var _setISODay_index_js__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! ./setISODay/index.js */ "hroe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setISODay", function() { return _setISODay_index_js__WEBPACK_IMPORTED_MODULE_159__["default"]; });

/* harmony import */ var _setISOWeek_index_js__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! ./setISOWeek/index.js */ "Q0vS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setISOWeek", function() { return _setISOWeek_index_js__WEBPACK_IMPORTED_MODULE_160__["default"]; });

/* harmony import */ var _setISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! ./setISOWeekYear/index.js */ "7DTD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setISOWeekYear", function() { return _setISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_161__["default"]; });

/* harmony import */ var _setMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! ./setMilliseconds/index.js */ "RgwM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMilliseconds", function() { return _setMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_162__["default"]; });

/* harmony import */ var _setMinutes_index_js__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! ./setMinutes/index.js */ "4bjS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMinutes", function() { return _setMinutes_index_js__WEBPACK_IMPORTED_MODULE_163__["default"]; });

/* harmony import */ var _setMonth_index_js__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! ./setMonth/index.js */ "nQ4q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMonth", function() { return _setMonth_index_js__WEBPACK_IMPORTED_MODULE_164__["default"]; });

/* harmony import */ var _setQuarter_index_js__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! ./setQuarter/index.js */ "pl+E");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setQuarter", function() { return _setQuarter_index_js__WEBPACK_IMPORTED_MODULE_165__["default"]; });

/* harmony import */ var _setSeconds_index_js__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! ./setSeconds/index.js */ "wXd3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSeconds", function() { return _setSeconds_index_js__WEBPACK_IMPORTED_MODULE_166__["default"]; });

/* harmony import */ var _setWeek_index_js__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! ./setWeek/index.js */ "XX+V");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWeek", function() { return _setWeek_index_js__WEBPACK_IMPORTED_MODULE_167__["default"]; });

/* harmony import */ var _setWeekYear_index_js__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! ./setWeekYear/index.js */ "p0jx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWeekYear", function() { return _setWeekYear_index_js__WEBPACK_IMPORTED_MODULE_168__["default"]; });

/* harmony import */ var _setYear_index_js__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! ./setYear/index.js */ "6NQC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setYear", function() { return _setYear_index_js__WEBPACK_IMPORTED_MODULE_169__["default"]; });

/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! ./startOfDay/index.js */ "M34a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOfDay", function() { return _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_170__["default"]; });

/* harmony import */ var _startOfDecade_index_js__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! ./startOfDecade/index.js */ "6wME");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOfDecade", function() { return _startOfDecade_index_js__WEBPACK_IMPORTED_MODULE_171__["default"]; });

/* harmony import */ var _startOfHour_index_js__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! ./startOfHour/index.js */ "CxvL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOfHour", function() { return _startOfHour_index_js__WEBPACK_IMPORTED_MODULE_172__["default"]; });

/* harmony import */ var _startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! ./startOfISOWeek/index.js */ "1dmy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOfISOWeek", function() { return _startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_173__["default"]; });

/* harmony import */ var _startOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! ./startOfISOWeekYear/index.js */ "0f5V");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOfISOWeekYear", function() { return _startOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_174__["default"]; });

/* harmony import */ var _startOfMinute_index_js__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! ./startOfMinute/index.js */ "0LOL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOfMinute", function() { return _startOfMinute_index_js__WEBPACK_IMPORTED_MODULE_175__["default"]; });

/* harmony import */ var _startOfMonth_index_js__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! ./startOfMonth/index.js */ "9ig3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOfMonth", function() { return _startOfMonth_index_js__WEBPACK_IMPORTED_MODULE_176__["default"]; });

/* harmony import */ var _startOfQuarter_index_js__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! ./startOfQuarter/index.js */ "vHCX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOfQuarter", function() { return _startOfQuarter_index_js__WEBPACK_IMPORTED_MODULE_177__["default"]; });

/* harmony import */ var _startOfSecond_index_js__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! ./startOfSecond/index.js */ "WJMa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOfSecond", function() { return _startOfSecond_index_js__WEBPACK_IMPORTED_MODULE_178__["default"]; });

/* harmony import */ var _startOfToday_index_js__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! ./startOfToday/index.js */ "0/gg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOfToday", function() { return _startOfToday_index_js__WEBPACK_IMPORTED_MODULE_179__["default"]; });

/* harmony import */ var _startOfTomorrow_index_js__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! ./startOfTomorrow/index.js */ "iWuq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOfTomorrow", function() { return _startOfTomorrow_index_js__WEBPACK_IMPORTED_MODULE_180__["default"]; });

/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! ./startOfWeek/index.js */ "aetl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOfWeek", function() { return _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_181__["default"]; });

/* harmony import */ var _startOfWeekYear_index_js__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(/*! ./startOfWeekYear/index.js */ "qdtj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOfWeekYear", function() { return _startOfWeekYear_index_js__WEBPACK_IMPORTED_MODULE_182__["default"]; });

/* harmony import */ var _startOfYear_index_js__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(/*! ./startOfYear/index.js */ "1unF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOfYear", function() { return _startOfYear_index_js__WEBPACK_IMPORTED_MODULE_183__["default"]; });

/* harmony import */ var _startOfYesterday_index_js__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(/*! ./startOfYesterday/index.js */ "YOOs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOfYesterday", function() { return _startOfYesterday_index_js__WEBPACK_IMPORTED_MODULE_184__["default"]; });

/* harmony import */ var _sub_index_js__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(/*! ./sub/index.js */ "7wYy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return _sub_index_js__WEBPACK_IMPORTED_MODULE_185__["default"]; });

/* harmony import */ var _subBusinessDays_index_js__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(/*! ./subBusinessDays/index.js */ "W6rj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subBusinessDays", function() { return _subBusinessDays_index_js__WEBPACK_IMPORTED_MODULE_186__["default"]; });

/* harmony import */ var _subDays_index_js__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(/*! ./subDays/index.js */ "Xep9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subDays", function() { return _subDays_index_js__WEBPACK_IMPORTED_MODULE_187__["default"]; });

/* harmony import */ var _subHours_index_js__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(/*! ./subHours/index.js */ "WQ3w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subHours", function() { return _subHours_index_js__WEBPACK_IMPORTED_MODULE_188__["default"]; });

/* harmony import */ var _subISOWeekYears_index_js__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(/*! ./subISOWeekYears/index.js */ "pIWV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subISOWeekYears", function() { return _subISOWeekYears_index_js__WEBPACK_IMPORTED_MODULE_189__["default"]; });

/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(/*! ./subMilliseconds/index.js */ "g9KO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subMilliseconds", function() { return _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_190__["default"]; });

/* harmony import */ var _subMinutes_index_js__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(/*! ./subMinutes/index.js */ "a3h9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subMinutes", function() { return _subMinutes_index_js__WEBPACK_IMPORTED_MODULE_191__["default"]; });

/* harmony import */ var _subMonths_index_js__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(/*! ./subMonths/index.js */ "phiu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subMonths", function() { return _subMonths_index_js__WEBPACK_IMPORTED_MODULE_192__["default"]; });

/* harmony import */ var _subQuarters_index_js__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(/*! ./subQuarters/index.js */ "VLv5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subQuarters", function() { return _subQuarters_index_js__WEBPACK_IMPORTED_MODULE_193__["default"]; });

/* harmony import */ var _subSeconds_index_js__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(/*! ./subSeconds/index.js */ "SuC2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subSeconds", function() { return _subSeconds_index_js__WEBPACK_IMPORTED_MODULE_194__["default"]; });

/* harmony import */ var _subWeeks_index_js__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(/*! ./subWeeks/index.js */ "/Eym");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subWeeks", function() { return _subWeeks_index_js__WEBPACK_IMPORTED_MODULE_195__["default"]; });

/* harmony import */ var _subYears_index_js__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(/*! ./subYears/index.js */ "sdC+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subYears", function() { return _subYears_index_js__WEBPACK_IMPORTED_MODULE_196__["default"]; });

/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(/*! ./toDate/index.js */ "/Tr7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDate", function() { return _toDate_index_js__WEBPACK_IMPORTED_MODULE_197__["default"]; });

/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(/*! ./constants/index.js */ "w3qX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxTime", function() { return _constants_index_js__WEBPACK_IMPORTED_MODULE_198__["maxTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minTime", function() { return _constants_index_js__WEBPACK_IMPORTED_MODULE_198__["minTime"]; });

// This file is generated automatically by `scripts/build/indices.js`. Please, don't change it.








































































































































































































/***/ }),

/***/ "bKex":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfYesterday/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return endOfYesterday; });
/**
 * @name endOfYesterday
 * @category Day Helpers
 * @summary Return the end of yesterday.
 * @pure false
 *
 * @description
 * Return the end of yesterday.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the end of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfYesterday()
 * //=> Sun Oct 5 2014 23:59:59.999
 */
function endOfYesterday() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var day = now.getDate();
  var date = new Date(0);
  date.setFullYear(year, month, day - 1);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "bbbT":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfISOWeekYear/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return endOfISOWeekYear; });
/* harmony import */ var _getISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getISOWeekYear/index.js */ "BKKT");
/* harmony import */ var _startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfISOWeek/index.js */ "1dmy");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name endOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the end of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the end of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `endOfISOYear` to `endOfISOWeekYear`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `addWeekYears`.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of an ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of an ISO week-numbering year for 2 July 2005:
 * const result = endOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 23:59:59.999
 */

function endOfISOWeekYear(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, arguments);
  var year = Object(_getISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var date = Object(_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fourthOfJanuaryOfNextYear);
  date.setMilliseconds(date.getMilliseconds() - 1);
  return date;
}

/***/ }),

/***/ "bd2w":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatRFC7231/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatRFC7231; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isValid/index.js */ "Se/U");
/* harmony import */ var _lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/addLeadingZeros/index.js */ "+7QN");



var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/**
 * @name formatRFC7231
 * @category Common Helpers
 * @summary Format the date according to the RFC 7231 standard (https://tools.ietf.org/html/rfc7231#section-7.1.1.1).
 *
 * @description
 * Return the formatted date string in RFC 7231 format.
 * The result will always be in UTC timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {String} the formatted date string
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in RFC 7231 format:
 * const result = formatRFC7231(new Date(2019, 8, 18, 19, 0, 52))
 * //=> 'Wed, 18 Sep 2019 19:00:52 GMT'
 */

function formatRFC7231(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
  }

  var originalDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);

  if (!Object(_isValid_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  var dayName = days[originalDate.getUTCDay()];
  var dayOfMonth = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getUTCDate(), 2);
  var monthName = months[originalDate.getUTCMonth()];
  var year = originalDate.getUTCFullYear();
  var hour = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getUTCHours(), 2);
  var minute = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getUTCMinutes(), 2);
  var second = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getUTCSeconds(), 2); // Result variables.

  return "".concat(dayName, ", ").concat(dayOfMonth, " ").concat(monthName, " ").concat(year, " ").concat(hour, ":").concat(minute, ":").concat(second, " GMT");
}

/***/ }),

/***/ "c32n":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/formatISO/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatISO; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isValid/index.js */ "Se/U");
/* harmony import */ var _lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/addLeadingZeros/index.js */ "+7QN");



/**
 * @name formatISO
 * @category Common Helpers
 * @summary Format the date according to the ISO 8601 standard (http://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm).
 *
 * @description
 * Return the formatted date string in ISO 8601 format. Options may be passed to control the parts and notations of the date.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {'extended'|'basic'} [options.format='extended'] - if 'basic', hide delimiters between date and time values.
 * @param {'complete'|'date'|'time'} [options.representation='complete'] - format date, time with time zone, or both.
 * @returns {String} the formatted date string
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.format` must be 'extended' or 'basic'
 * @throws {RangeError} `options.represenation` must be 'date', 'time' or 'complete'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format (UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601, short format (UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918T190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, date only:
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, time only (UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52Z'
 */

function formatISO(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
  }

  var originalDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);

  if (!Object(_isValid_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  var options = dirtyOptions || {};
  var format = options.format == null ? 'extended' : String(options.format);
  var representation = options.representation == null ? 'complete' : String(options.representation);

  if (format !== 'extended' && format !== 'basic') {
    throw new RangeError("format must be 'extended' or 'basic'");
  }

  if (representation !== 'date' && representation !== 'time' && representation !== 'complete') {
    throw new RangeError("representation must be 'date', 'time', or 'complete'");
  }

  var result = '';
  var tzOffset = '';
  var dateDelimiter = format === 'extended' ? '-' : '';
  var timeDelimiter = format === 'extended' ? ':' : ''; // Representation is either 'date' or 'complete'

  if (representation !== 'time') {
    var day = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getDate(), 2);
    var month = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getMonth() + 1, 2);
    var year = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getFullYear(), 4); // yyyyMMdd or yyyy-MM-dd.

    result = "".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);
  } // Representation is either 'time' or 'complete'


  if (representation !== 'date') {
    // Add the timezone.
    var offset = originalDate.getTimezoneOffset();

    if (offset !== 0) {
      var absoluteOffset = Math.abs(offset);
      var hourOffset = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absoluteOffset / 60), 2);
      var minuteOffset = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absoluteOffset % 60, 2); // If less than 0, the sign is +, because it is ahead of time.

      var sign = offset < 0 ? '+' : '-';
      tzOffset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
    } else {
      tzOffset = 'Z';
    }

    var hour = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getHours(), 2);
    var minute = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getMinutes(), 2);
    var second = Object(_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getSeconds(), 2); // If there's also date, separate it with time with 'T'

    var separator = result === '' ? '' : 'T'; // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.

    var time = [hour, minute, second].join(timeDelimiter); // HHmmss or HH:mm:ss.

    result = "".concat(result).concat(separator).concat(time).concat(tzOffset);
  }

  return result;
}

/***/ }),

/***/ "cHAT":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/getMonth/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMonth; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */

function getMonth(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var month = date.getMonth();
  return month;
}

/***/ }),

/***/ "cjyC":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/esm/eachQuarterOfInterval/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return eachQuarterOfInterval; });
/* harmony import */ var _addQuarters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addQuarters/index.js */ "tfX3");
/* harmony import */ var _startOfQuarter_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfQuarter/index.js */ "vHCX");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




/**
 * @name eachQuarterOfInterval
 * @category Interval Helpers
 * @summary Return the array of quarters within the specified time interval.
 *
 * @description
 * Return the array of quarters within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link docs/types/Interval}
 * @returns {Date[]} the array with starts of quarters from the quarter of the interval start to the quarter of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each quarter within interval 6 February 2014 - 10 August 2014:
 * var result = eachQuarterOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * // ]
 */

function eachQuarterOfInterval(dirtyInterval) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(interval.start);
  var endDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(interval.end);
  var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var startDateQuarter = Object(_startOfQuarter_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(startDate);
  var endDateQuarter = Object(_startOfQuarter_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(endDate);
  endTime = endDateQuarter.getTime();
  var quarters = [];
  var currentQuarter = startDateQuarter;

  while (currentQuarter.getTime() <= endTime) {
    quarters.push(Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentQuarter));
    currentQuarter = Object(_addQuarters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(currentQuarter, 1);
  }

  return quarters;
}

/***/ }),

/***/ "cnyc":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getYear/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getYear; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */

function getYear(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var year = date.getFullYear();
  return year;
}

/***/ }),

/***/ "dLU1":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addMonths; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 1, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),

/***/ "diJF":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/eachYearOfInterval/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return eachYearOfInterval; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name eachYearOfInterval
 * @category Interval Helpers
 * @summary Return the array of yearly timestamps within the specified time interval.
 *
 * @description
 * Return the array of yearly timestamps within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link docs/types/Interval}
 * @returns {Date[]} the array with starts of yearly timestamps from the month of the interval start to the month of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each year between 6 February 2014 and 10 August 2017:
 * var result = eachYearOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2017, 7, 10)
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Thu Jan 01 2015 00:00:00,
 * //   Fri Jan 01 2016 00:00:00,
 * //   Sun Jan 01 2017 00:00:00
 * // ]
 */

function eachYearOfInterval(dirtyInterval) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(interval.start);
  var endDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(interval.end);
  var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var dates = [];
  var currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);
  currentDate.setMonth(0, 1);

  while (currentDate.getTime() <= endTime) {
    dates.push(Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(currentDate));
    currentDate.setFullYear(currentDate.getFullYear() + 1);
  }

  return dates;
}

/***/ }),

/***/ "dndX":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isBefore/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isBefore; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */

function isBefore(dirtyDate, dirtyDateToCompare) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var dateToCompare = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

/***/ }),

/***/ "eYjL":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getWeek/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWeek; });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startOfWeek/index.js */ "aetl");
/* harmony import */ var _startOfWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeekYear/index.js */ "qdtj");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Number} the week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * var result = getISOWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(dirtyDate, options) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var diff = Object(_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date, options).getTime() - Object(_startOfWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "edZA":
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/min/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return min; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name min
 * @category Common Helpers
 * @summary Return the earliest of the given dates.
 *
 * @description
 * Return the earliest of the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - `min` function now accepts an array of dates rather than spread arguments.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   var date1 = new Date(1989, 6, 10)
 *   var date2 = new Date(1987, 1, 11)
 *   var minDate = min(date1, date2)
 *
 *   // v2.0.0 onward:
 *   var dates = [new Date(1989, 6, 10), new Date(1987, 1, 11)]
 *   var minDate = min(dates)
 *   ```
 *
 * @param {Date[]|Number[]} datesArray - the dates to compare
 * @returns {Date} the earliest of the dates
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which of these dates is the earliest?
 * var result = min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */

function min(dirtyDatesArray) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var datesArray; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method

  if (dirtyDatesArray && typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array.
  } else if (typeof dirtyDatesArray === 'object' && dirtyDatesArray !== null) {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  } else {
    // `dirtyDatesArray` is non-iterable, return Invalid Date
    return new Date(NaN);
  }

  var result;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);

    if (result === undefined || result > currentDate || isNaN(currentDate)) {
      result = currentDate;
    }
  });
  return result || new Date(NaN);
}

/***/ }),

/***/ "emD/":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cloneObject; });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "+LmI");

function cloneObject(dirtyObject) {
  return Object(_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dirtyObject);
}

/***/ }),

/***/ "fePA":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/compareDesc/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compareDesc; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name compareDesc
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * const result = compareDesc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */

function compareDesc(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
  var dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff > 0) {
    return -1;
  } else if (diff < 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "g9KO":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return subMilliseconds; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "pl0G");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
  return Object(_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "gA5F":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/lastDayOfISOWeek/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lastDayOfISOWeek; });
/* harmony import */ var _lastDayOfWeek_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lastDayOfWeek/index.js */ "gH8E");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name lastDayOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the last day of an ISO week for the given date.
 *
 * @description
 * Return the last day of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the last day of an ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of an ISO week for 2 September 2014 11:55:00:
 * var result = lastDayOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 00:00:00
 */

function lastDayOfISOWeek(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_lastDayOfWeek_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate, {
    weekStartsOn: 1
  });
}

/***/ }),

/***/ "gH8E":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/lastDayOfWeek/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lastDayOfWeek; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




/**
 * @name lastDayOfWeek
 * @category Week Helpers
 * @summary Return the last day of a week for the given date.
 *
 * @description
 * Return the last day of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the last day of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The last day of a week for 2 September 2014 11:55:00:
 * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the last day of the week for 2 September 2014 11:55:00:
 * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 00:00:00
 */
function lastDayOfWeek(dirtyDate, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6');
  }

  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + diff);
  return date;
}

/***/ }),

/***/ "gLRL":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isWeekend/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isWeekend; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isWeekend
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date falls on a weekend
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * var result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */

function isWeekend(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var day = date.getDay();
  return day === 0 || day === 6;
}

/***/ }),

/***/ "gME1":
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/set/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return set; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _setMonth_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../setMonth/index.js */ "nQ4q");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");





/**
 * @name set
 * @category Common Helpers
 * @summary Set date values to a given date.
 *
 * @description
 * Set date values to a given date.
 *
 * Sets time values to date from object `values`.
 * A value is not set if it is undefined or null or doesn't exist in `values`.
 *
 * Note about bundle size: `set` does not internally use `setX` functions from date-fns but instead opts
 * to use native `Date#setX` methods. If you use this function, you may not want to include the
 * other `setX` functions that date-fns provides if you are concerned about the bundle size.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Object} values - an object with options
 * @param {Number} [values.year] - the number of years to be set
 * @param {Number} [values.month] - the number of months to be set
 * @param {Number} [values.date] - the number of days to be set
 * @param {Number} [values.hours] - the number of hours to be set
 * @param {Number} [values.minutes] - the number of minutes to be set
 * @param {Number} [values.seconds] - the number of seconds to be set
 * @param {Number} [values.milliseconds] - the number of milliseconds to be set
 * @returns {Date} the new date with options set
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `values` must be an object
 *
 * @example
 * // Transform 1 September 2014 into 20 October 2015 in a single line:
 * var result = set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 })
 * //=> Tue Oct 20 2015 00:00:00
 *
 * @example
 * // Set 12 PM to 1 September 2014 01:23:45 to 1 September 2014 12:00:00:
 * var result = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 12 })
 * //=> Mon Sep 01 2014 12:23:45
 */
function set(dirtyDate, values) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(2, arguments);

  if (typeof values !== 'object' || values === null) {
    throw new RangeError('values parameter must be an object');
  }

  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate); // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date

  if (isNaN(date.getTime())) {
    return new Date(NaN);
  }

  if (values.year != null) {
    date.setFullYear(values.year);
  }

  if (values.month != null) {
    date = Object(_setMonth_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, values.month);
  }

  if (values.date != null) {
    date.setDate(Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(values.date));
  }

  if (values.hours != null) {
    date.setHours(Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(values.hours));
  }

  if (values.minutes != null) {
    date.setMinutes(Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(values.minutes));
  }

  if (values.seconds != null) {
    date.setSeconds(Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(values.seconds));
  }

  if (values.milliseconds != null) {
    date.setMilliseconds(Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(values.milliseconds));
  }

  return date;
}

/***/ }),

/***/ "gXqy":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return differenceInCalendarDays; });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "JCDJ");
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "M34a");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



var MILLISECONDS_IN_DAY = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * var result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var startOfDayLeft = Object(_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var startOfDayRight = Object(_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - Object(_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - Object(_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ "gr1v":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUTCISOWeekYear; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../toDate/index.js */ "/Tr7");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "tpup");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requiredArgs/index.js */ "jIYg");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = Object(_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = Object(_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "hW07":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isSunday/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isSunday; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isSunday
 * @category Weekday Helpers
 * @summary Is the given date Sunday?
 *
 * @description
 * Is the given date Sunday?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 21 September 2014 Sunday?
 * var result = isSunday(new Date(2014, 8, 21))
 * //=> true
 */

function isSunday(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate).getDay() === 0;
}

/***/ }),

/***/ "hroe":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/setISODay/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setISODay; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "9/EM");
/* harmony import */ var _getISODay_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getISODay/index.js */ "NXEZ");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");





/**
 * @name setISODay
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} day - the day of the ISO week of the new date
 * @returns {Date} the new date with the day of the ISO week set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * var result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */

function setISODay(dirtyDate, dirtyDay) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDay);
  var currentDay = Object(_getISODay_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date);
  var diff = day - currentDay;
  return Object(_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, diff);
}

/***/ }),

/***/ "iSMj":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "1izz");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "xMRN");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "0HXF");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "J9JN");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "WYsD");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "iWuq":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfTomorrow/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfTomorrow; });
/**
 * @name startOfTomorrow
 * @category Day Helpers
 * @summary Return the start of tomorrow.
 * @pure false
 *
 * @description
 * Return the start of tomorrow.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the start of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfTomorrow()
 * //=> Tue Oct 7 2014 00:00:00
 */
function startOfTomorrow() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var day = now.getDate();
  var date = new Date(0);
  date.setFullYear(year, month, day + 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "jG/O":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMinutes/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return differenceInMinutes; });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "Orh4");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


var MILLISECONDS_IN_MINUTE = 60000;
/**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the signed number of full (rounded towards 0) minutes between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of minutes
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * var result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 *
 * @example
 * // How many minutes are from 10:01:59 to 10:00:00
 * var result = differenceInMinutes(
 *   new Date(2000, 0, 1, 10, 0, 0),
 *   new Date(2000, 0, 1, 10, 1, 59)
 * )
 * //=> -1
 */

function differenceInMinutes(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var diff = Object(_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

/***/ }),

/***/ "jIYg":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return requiredArgs; });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "jKzE":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return endOfMonth; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "jZMG":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isTomorrow/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isTomorrow; });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addDays/index.js */ "9/EM");
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "G6Tw");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is tomorrow
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * var result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */

function isTomorrow(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, arguments);
  return Object(_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Object(_addDays_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Date.now(), 1));
}

/***/ }),

/***/ "kJyz":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameYear/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isSameYear; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same year
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * var result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */

function isSameYear(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
  var dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear();
}

/***/ }),

/***/ "kKUf":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/lastDayOfMonth/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lastDayOfMonth; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name lastDayOfMonth
 * @category Month Helpers
 * @summary Return the last day of a month for the given date.
 *
 * @description
 * Return the last day of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of a month for 2 September 2014 11:55:00:
 * var result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */

function lastDayOfMonth(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "kKrM":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/getDaysInYear/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDaysInYear; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _isLeapYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isLeapYear/index.js */ "9T1D");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name getDaysInYear
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in 2012?
 * const result = getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */

function getDaysInYear(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);

  if (String(new Date(date)) === 'Invalid Date') {
    return NaN;
  }

  return Object(_isLeapYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date) ? 366 : 365;
}

/***/ }),

/***/ "kMzH":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/getWeekOfMonth/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWeekOfMonth; });
/* harmony import */ var _getDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getDate/index.js */ "TpeJ");
/* harmony import */ var _getDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getDay/index.js */ "GobQ");
/* harmony import */ var _startOfMonth_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfMonth/index.js */ "9ig3");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");





/**
 * @name getWeekOfMonth
 * @category Week Helpers
 * @summary Get the week of the month of the given date.
 *
 * @description
 * Get the week of the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the week of month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Which week of the month is 9 November 2017?
 * var result = getWeekOfMonth(new Date(2017, 10, 9))
 * //=> 2
 */

function getWeekOfMonth(date, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var currentDayOfMonth = Object(_getDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date);

  if (isNaN(currentDayOfMonth)) {
    return currentDayOfMonth;
  }

  var startWeekDay = Object(_getDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_startOfMonth_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date));
  var lastDayOfFirstWeek = 0;

  if (startWeekDay >= weekStartsOn) {
    lastDayOfFirstWeek = weekStartsOn + 7 - startWeekDay;
  } else {
    lastDayOfFirstWeek = weekStartsOn - startWeekDay;
  }

  var weekNumber = 1;

  if (currentDayOfMonth > lastDayOfFirstWeek) {
    var remainingDaysAfterFirstWeek = currentDayOfMonth - lastDayOfFirstWeek;
    weekNumber = weekNumber + Math.ceil(remainingDaysAfterFirstWeek / 7);
  }

  return weekNumber;
}

/***/ }),

/***/ "knTs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/eachWeekOfInterval/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return eachWeekOfInterval; });
/* harmony import */ var _addWeeks_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addWeeks/index.js */ "r4sE");
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "aetl");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




/**
 * @name eachWeekOfInterval
 * @category Interval Helpers
 * @summary Return the array of weeks within the specified time interval.
 *
 * @description
 * Return the array of weeks within the specified time interval.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Interval} interval - the interval. See [Interval]{@link docs/types/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date[]} the array with starts of weeks from the week of the interval start to the week of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be 0, 1, ..., 6
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each week within interval 6 October 2014 - 23 November 2014:
 * var result = eachWeekOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 10, 23)
 * })
 * //=> [
 * //   Sun Oct 05 2014 00:00:00,
 * //   Sun Oct 12 2014 00:00:00,
 * //   Sun Oct 19 2014 00:00:00,
 * //   Sun Oct 26 2014 00:00:00,
 * //   Sun Nov 02 2014 00:00:00,
 * //   Sun Nov 09 2014 00:00:00,
 * //   Sun Nov 16 2014 00:00:00,
 * //   Sun Nov 23 2014 00:00:00
 * // ]
 */

function eachWeekOfInterval(dirtyInterval, options) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(interval.start);
  var endDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(interval.end);
  var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var startDateWeek = Object(_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(startDate, options);
  var endDateWeek = Object(_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(endDate, options); // Some timezones switch DST at midnight, making start of day unreliable in these timezones, 3pm is a safe bet

  startDateWeek.setHours(15);
  endDateWeek.setHours(15);
  endTime = endDateWeek.getTime();
  var weeks = [];
  var currentWeek = startDateWeek;

  while (currentWeek.getTime() <= endTime) {
    currentWeek.setHours(0);
    weeks.push(Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentWeek));
    currentWeek = Object(_addWeeks_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(currentWeek, 1);
    currentWeek.setHours(15);
  }

  return weeks;
}

/***/ }),

/***/ "ksg9":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/setDay/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setDay; });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addDays/index.js */ "9/EM");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




/**
 * @name setDay
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} day - the day of the week of the new date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the new date with the day of the week set
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Set week day to Sunday, with the default weekStartsOn of Sunday:
 * var result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Set week day to Sunday, with a weekStartsOn of Monday:
 * var result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 00:00:00
 */

function setDay(dirtyDate, dirtyDay, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(2, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, options);
  var day = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDay);
  var currentDay = date.getDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var delta = 7 - weekStartsOn;
  var diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
  return Object(_addDays_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date, diff, options);
}

/***/ }),

/***/ "ku8+":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return buildLocalizeFn; });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

/***/ }),

/***/ "lgZR":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUTCISOWeek; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../toDate/index.js */ "/Tr7");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "tpup");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "R8/v");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../requiredArgs/index.js */ "jIYg");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var diff = Object(_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date).getTime() - Object(_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "lv2b":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfToday/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return endOfToday; });
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../endOfDay/index.js */ "piIK");

/**
 * @name endOfToday
 * @category Day Helpers
 * @summary Return the end of today.
 * @pure false
 *
 * @description
 * Return the end of today.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the end of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfToday()
 * //=> Mon Oct 6 2014 23:59:59.999
 */

function endOfToday() {
  return Object(_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Date.now());
}

/***/ }),

/***/ "moCM":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInHours/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return differenceInHours; });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "Orh4");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


var MILLISECONDS_IN_HOUR = 3600000;
/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of hours
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * var result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */

function differenceInHours(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var diff = Object(_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_HOUR;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

/***/ }),

/***/ "nQ4q":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/setMonth/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setMonth; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _getDaysInMonth_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getDaysInMonth/index.js */ "OuL/");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set February to 1 September 2014:
 * var result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */

function setMonth(dirtyDate, dirtyMonth) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyMonth);
  var year = date.getFullYear();
  var day = date.getDate();
  var dateWithDesiredMonth = new Date(0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = Object(_getDaysInMonth_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateWithDesiredMonth); // Set the last day of the new month
  // if the original date was the last day of the longer month

  date.setMonth(month, Math.min(day, daysInMonth));
  return date;
}

/***/ }),

/***/ "oADU":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfUTCWeekYear; });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toInteger/index.js */ "/h9T");
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "Szzx");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "1vjI");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../requiredArgs/index.js */ "jIYg");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options.firstWeekContainsDate);
  var year = Object(_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = Object(_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "oYTe":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/closestTo/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return closestTo; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name closestTo
 * @category Common Helpers
 * @summary Return a date from the array closest to the given date.
 *
 * @description
 * Return a date from the array closest to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now, `closestTo` doesn't throw an exception
 *   when the second argument is not an array, and returns Invalid Date instead.
 *
 * @param {Date|Number} dateToCompare - the date to compare with
 * @param {Date[]|Number[]} datesArray - the array to search
 * @returns {Date} the date from the array closest to the given date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
 * var dateToCompare = new Date(2015, 8, 6)
 * var result = closestTo(dateToCompare, [
 *   new Date(2000, 0, 1),
 *   new Date(2030, 0, 1)
 * ])
 * //=> Tue Jan 01 2030 00:00:00
 */

function closestTo(dirtyDateToCompare, dirtyDatesArray) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var dateToCompare = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateToCompare);

  if (isNaN(dateToCompare)) {
    return new Date(NaN);
  }

  var timeToCompare = dateToCompare.getTime();
  var datesArray; // `dirtyDatesArray` is undefined or null

  if (dirtyDatesArray == null) {
    datesArray = []; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
  } else if (typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array. Otherwise, make it empty Array
  } else {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  }

  var result;
  var minDistance;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);

    if (isNaN(currentDate)) {
      result = new Date(NaN);
      minDistance = NaN;
      return;
    }

    var distance = Math.abs(timeToCompare - currentDate.getTime());

    if (result == null || distance < minDistance) {
      result = currentDate;
      minDistance = distance;
    }
  });
  return result;
}

/***/ }),

/***/ "odh7":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/getUnixTime/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUnixTime; });
/* harmony import */ var _getTime_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getTime/index.js */ "5wMr");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name getUnixTime
 * @category Timestamp Helpers
 * @summary Get the seconds timestamp of the given date.
 *
 * @description
 * Get the seconds timestamp of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05 CET:
 * const result = getUnixTime(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 1330512305
 */

function getUnixTime(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Math.floor(Object(_getTime_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate) / 1000);
}

/***/ }),

/***/ "p+Ro":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isDate; });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * var result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * var result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * var result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * var result = isDate({})
 * //=> false
 */

function isDate(value) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "p0jx":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/setWeekYear/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setWeekYear; });
/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ "gXqy");
/* harmony import */ var _startOfWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeekYear/index.js */ "qdtj");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");





/**
 * @name setWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Set the local week-numbering year to the given date.
 *
 * @description
 * Set the local week-numbering year to the given date,
 * saving the week number and the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} weekYear - the local week-numbering year of the new date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Date} the new date with the local week-numbering year set
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Set the local week-numbering year 2004 to 2 January 2010 with default options:
 * var result = setWeekYear(new Date(2010, 0, 2), 2004)
 * //=> Sat Jan 03 2004 00:00:00
 *
 * @example
 * // Set the local week-numbering year 2004 to 2 January 2010,
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * var result = setWeekYear(new Date(2010, 0, 2), 2004, {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Sat Jan 01 2005 00:00:00
 */

function setWeekYear(dirtyDate, dirtyWeekYear, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(2, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options.firstWeekContainsDate);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var weekYear = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyWeekYear);
  var diff = Object(_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date, Object(_startOfWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, dirtyOptions));
  var firstWeek = new Date(0);
  firstWeek.setFullYear(weekYear, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  date = Object(_startOfWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(firstWeek, dirtyOptions);
  date.setDate(date.getDate() + diff);
  return date;
}

/***/ }),

/***/ "pIWV":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subISOWeekYears/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return subISOWeekYears; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _addISOWeekYears_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addISOWeekYears/index.js */ "GP2A");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name subISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Subtract the specified number of ISO week-numbering years from the given date.
 *
 * @description
 * Subtract the specified number of ISO week-numbering years from the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `subISOYears` to `subISOWeekYears`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `setWeekYear`.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of ISO week-numbering years to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the ISO week-numbering years subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 ISO week-numbering years from 1 September 2014:
 * const result = subISOWeekYears(new Date(2014, 8, 1), 5)
 * //=> Mon Aug 31 2009 00:00:00
 */

function subISOWeekYears(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
  return Object(_addISOWeekYears_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "pR7g":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/setUTCISOWeek/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setUTCISOWeek; });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toInteger/index.js */ "/h9T");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "/Tr7");
/* harmony import */ var _getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCISOWeek/index.js */ "lgZR");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../requiredArgs/index.js */ "jIYg");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var isoWeek = Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyISOWeek);
  var diff = Object(_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

/***/ }),

/***/ "phiu":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/subMonths/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return subMonths; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addMonths/index.js */ "dLU1");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */

function subMonths(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
  return Object(_addMonths_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "piIK":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return endOfDay; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "pl+E":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/setQuarter/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setQuarter; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _setMonth_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../setMonth/index.js */ "nQ4q");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




/**
 * @name setQuarter
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} quarter - the quarter of the new date
 * @returns {Date} the new date with the quarter set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * var result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */

function setQuarter(dirtyDate, dirtyQuarter) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var quarter = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyQuarter);
  var oldQuarter = Math.floor(date.getMonth() / 3) + 1;
  var diff = quarter - oldQuarter;
  return Object(_setMonth_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, date.getMonth() + diff * 3);
}

/***/ }),

/***/ "pl0G":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addMilliseconds; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var timestamp = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "pvlY":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return differenceInCalendarMonths; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
  var dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ "pxe6":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/getWeeksInMonth/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWeeksInMonth; });
/* harmony import */ var _differenceInCalendarWeeks_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../differenceInCalendarWeeks/index.js */ "/Lp+");
/* harmony import */ var _lastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lastDayOfMonth/index.js */ "kKUf");
/* harmony import */ var _startOfMonth_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfMonth/index.js */ "9ig3");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




/**
 * @name getWeeksInMonth
 * @category Week Helpers
 * @summary Get the number of calendar weeks a month spans.
 *
 * @description
 * Get the number of calendar weeks the month in the given date spans.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the number of calendar weeks
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // How many calendar weeks does February 2015 span?
 * var result = getWeeksInMonth(new Date(2015, 1, 8))
 * //=> 4
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks does July 2017 span?
 * var result = getWeeksInMonth(new Date(2017, 6, 5), { weekStartsOn: 1 })
 * //=> 6
 */

function getWeeksInMonth(date, options) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, arguments);
  return Object(_differenceInCalendarWeeks_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_lastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date), Object(_startOfMonth_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date), options) + 1;
}

/***/ }),

/***/ "qVkf":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return differenceInSeconds; });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "Orh4");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * var result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var diff = Object(_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft, dirtyDateRight) / 1000;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

/***/ }),

/***/ "qdtj":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeekYear/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfWeekYear; });
/* harmony import */ var _getWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getWeekYear/index.js */ "7gZZ");
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "aetl");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Date} the start of a week-numbering year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * var result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * var result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */

function startOfWeekYear(dirtyDate, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate);
  var year = Object(_getWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  var date = Object(_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "qh+W":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfQuarter/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return endOfQuarter; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name endOfQuarter
 * @category Quarter Helpers
 * @summary Return the end of a year quarter for the given date.
 *
 * @description
 * Return the end of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a quarter for 2 September 2014 11:55:00:
 * const result = endOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfQuarter(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3 + 3;
  date.setMonth(month, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "qzLx":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameISOWeek/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isSameISOWeek; });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isSameWeek/index.js */ "JO1+");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isSameISOWeek
 * @category ISO Week Helpers
 * @summary Are the given dates in the same ISO week?
 *
 * @description
 * Are the given dates in the same ISO week?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO week
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
 * var result = isSameISOWeek(new Date(2014, 8, 1), new Date(2014, 8, 7))
 * //=> true
 */

function isSameISOWeek(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  return Object(_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft, dirtyDateRight, {
    weekStartsOn: 1
  });
}

/***/ }),

/***/ "r4sE":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/addWeeks/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addWeeks; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addDays/index.js */ "9/EM");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */

function addWeeks(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
  var days = amount * 7;
  return Object(_addDays_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, days);
}

/***/ }),

/***/ "rH8F":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfHour/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return endOfHour; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name endOfHour
 * @category Hour Helpers
 * @summary Return the end of an hour for the given date.
 *
 * @description
 * Return the end of an hour for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of an hour
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of an hour for 2 September 2014 11:55:00:
 * const result = endOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:59:59.999
 */

function endOfHour(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  date.setMinutes(59, 59, 999);
  return date;
}

/***/ }),

/***/ "s+wp":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameMinute/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isSameMinute; });
/* harmony import */ var _startOfMinute_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startOfMinute/index.js */ "0LOL");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isSameMinute
 * @category Minute Helpers
 * @summary Are the given dates in the same minute?
 *
 * @description
 * Are the given dates in the same minute?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same minute
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15
 * // in the same minute?
 * var result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 4, 6, 30, 15)
 * )
 * //=> true
 */

function isSameMinute(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var dateLeftStartOfMinute = Object(_startOfMinute_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
  var dateRightStartOfMinute = Object(_startOfMinute_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
  return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime();
}

/***/ }),

/***/ "sBI4":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/getISOWeek/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getISOWeek; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfISOWeek/index.js */ "1dmy");
/* harmony import */ var _startOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfISOWeekYear/index.js */ "0f5V");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");




var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */

function getISOWeek(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var diff = Object(_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date).getTime() - Object(_startOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "sWYD":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isValid/index.js */ "Se/U");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "iSMj");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "g9KO");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "DG9o");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "Ib5w");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "JCDJ");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "3REe");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 0001, ..., 999               |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);

  if (!Object(_isValid_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = Object(_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = Object(_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_5__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_4__["default"][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && Object(_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_7__["isProtectedWeekYearToken"])(substring)) {
        Object(_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_7__["throwProtectedError"])(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && Object(_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_7__["isProtectedDayOfYearToken"])(substring)) {
        Object(_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_7__["throwProtectedError"])(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "sdC+":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/subYears/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return subYears; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _addYears_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addYears/index.js */ "zbbA");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name subYears
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the years subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * const result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */

function subYears(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
  return Object(_addYears_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "tSIP":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/setDate/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setDate; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name setDate
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} dayOfMonth - the day of the month of the new date
 * @returns {Date} the new date with the day of the month set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * var result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */

function setDate(dirtyDate, dirtyDayOfMonth) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dayOfMonth = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDayOfMonth);
  date.setDate(dayOfMonth);
  return date;
}

/***/ }),

/***/ "tfX3":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/addQuarters/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addQuarters; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addMonths/index.js */ "dLU1");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name addQuarters
 * @category Quarter Helpers
 * @summary Add the specified number of year quarters to the given date.
 *
 * @description
 * Add the specified number of year quarters to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the quarters added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 1 quarter to 1 September 2014:
 * const result = addQuarters(new Date(2014, 8, 1), 1)
 * //=> Mon Dec 01 2014 00:00:00
 */

function addQuarters(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
  var months = amount * 3;
  return Object(_addMonths_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, months);
}

/***/ }),

/***/ "tiw6":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/getOverlappingDaysInIntervals/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOverlappingDaysInIntervals; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


var MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
/**
 * @name getOverlappingDaysInIntervals
 * @category Interval Helpers
 * @summary Get the number of days that overlap in two time intervals
 *
 * @description
 * Get the number of days that overlap in two time intervals
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `getOverlappingDaysInRanges` to `getOverlappingDaysInIntervals`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   getOverlappingDaysInRanges(
 *     new Date(2014, 0, 10), new Date(2014, 0, 20),
 *     new Date(2014, 0, 17), new Date(2014, 0, 21)
 *   )
 *
 *   // v2.0.0 onward
 *
 *   getOverlappingDaysInIntervals(
 *     { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *     { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 *   )
 *   ```
 *
 * @param {Interval} intervalLeft - the first interval to compare. See [Interval]{@link docs/Interval}
 * @param {Interval} intervalRight - the second interval to compare. See [Interval]{@link docs/Interval}
 * @returns {Number} the number of days that overlap in two time intervals
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For overlapping time intervals adds 1 for each started overlapping day:
 * getOverlappingDaysInIntervals(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 * )
 * //=> 3
 *
 * @example
 * // For non-overlapping time intervals returns 0:
 * getOverlappingDaysInIntervals(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 21), end: new Date(2014, 0, 22) }
 * )
 * //=> 0
 */

function getOverlappingDaysInIntervals(dirtyIntervalLeft, dirtyIntervalRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var intervalLeft = dirtyIntervalLeft || {};
  var intervalRight = dirtyIntervalRight || {};
  var leftStartTime = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(intervalLeft.start).getTime();
  var leftEndTime = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(intervalLeft.end).getTime();
  var rightStartTime = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(intervalRight.start).getTime();
  var rightEndTime = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(intervalRight.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(leftStartTime <= leftEndTime && rightStartTime <= rightEndTime)) {
    throw new RangeError('Invalid interval');
  }

  var isOverlapping = leftStartTime < rightEndTime && rightStartTime < leftEndTime;

  if (!isOverlapping) {
    return 0;
  }

  var overlapStartDate = rightStartTime < leftStartTime ? leftStartTime : rightStartTime;
  var overlapEndDate = rightEndTime > leftEndTime ? leftEndTime : rightEndTime;
  var differenceInMs = overlapEndDate - overlapStartDate;
  return Math.ceil(differenceInMs / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ "tpup":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfUTCISOWeek; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../toDate/index.js */ "/Tr7");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../requiredArgs/index.js */ "jIYg");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "u/yc":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisMonth/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isThisMonth; });
/* harmony import */ var _isSameMonth_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isSameMonth/index.js */ "WIjQ");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isThisMonth
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * var result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */

function isThisMonth(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_isSameMonth_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Date.now(), dirtyDate);
}

/***/ }),

/***/ "uh5Q":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isFuture/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isFuture; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isFuture
 * @category Common Helpers
 * @summary Is the given date in the future?
 * @pure false
 *
 * @description
 * Is the given date in the future?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the future
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 31 December 2014 in the future?
 * var result = isFuture(new Date(2014, 11, 31))
 * //=> true
 */

function isFuture(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate).getTime() > Date.now();
}

/***/ }),

/***/ "vAQ4":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInISOWeekYears/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return differenceInISOWeekYears; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _differenceInCalendarISOWeekYears_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInCalendarISOWeekYears/index.js */ "3zlk");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "JhOC");
/* harmony import */ var _subISOWeekYears_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subISOWeekYears/index.js */ "pIWV");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");





/**
 * @name differenceInISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of full ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of full ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `differenceInISOYears` to `differenceInISOWeekYears`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `addWeekYears`.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full ISO week-numbering years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
 * var result = differenceInISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 1
 */

function differenceInISOWeekYears(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(2, arguments);
  var dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
  var dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
  var sign = Object(_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
  var difference = Math.abs(Object(_differenceInCalendarISOWeekYears_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight));
  dateLeft = Object(_subISOWeekYears_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, sign * difference); // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
  // if last calendar ISO year is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastISOWeekYearNotFull = Object(_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign;
  var result = sign * (difference - isLastISOWeekYearNotFull); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "vHCX":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfQuarter/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startOfQuarter; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name startOfQuarter
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * const result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */

function startOfQuarter(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3;
  date.setMonth(month, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "vMt+":
/*!**************************************!*\
  !*** ./src/app/try/try.component.ts ***!
  \**************************************/
/*! exports provided: TryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryComponent", function() { return TryComponent; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-calendar */ "kRoH");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/case.service */ "eECP");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = ["modalContent"];
function TryComponent_div_14_mwl_calendar_month_view_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mwl-calendar-month-view", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dayClicked", function TryComponent_div_14_mwl_calendar_month_view_1_Template_mwl_calendar_month_view_dayClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r5.dayClicked($event.day); })("eventClicked", function TryComponent_div_14_mwl_calendar_month_view_1_Template_mwl_calendar_month_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r7.handleEvent("Clicked", $event.event); })("eventTimesChanged", function TryComponent_div_14_mwl_calendar_month_view_1_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r8.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const events_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("viewDate", ctx_r2.viewDate)("events", events_r1)("refresh", ctx_r2.refresh)("activeDayIsOpen", ctx_r2.activeDayIsOpen);
} }
function TryComponent_div_14_mwl_calendar_week_view_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mwl-calendar-week-view", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("eventClicked", function TryComponent_div_14_mwl_calendar_week_view_2_Template_mwl_calendar_week_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r10.handleEvent("Clicked", $event.event); })("eventTimesChanged", function TryComponent_div_14_mwl_calendar_week_view_2_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r12.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const events_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("viewDate", ctx_r3.viewDate)("events", events_r1)("refresh", ctx_r3.refresh);
} }
function TryComponent_div_14_mwl_calendar_day_view_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mwl-calendar-day-view", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("eventClicked", function TryComponent_div_14_mwl_calendar_day_view_3_Template_mwl_calendar_day_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r14.handleEvent("Clicked", $event.event); })("eventTimesChanged", function TryComponent_div_14_mwl_calendar_day_view_3_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r16.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const events_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("viewDate", ctx_r4.viewDate)("events", events_r1)("refresh", ctx_r4.refresh);
} }
function TryComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TryComponent_div_14_mwl_calendar_month_view_1_Template, 1, 4, "mwl-calendar-month-view", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TryComponent_div_14_mwl_calendar_week_view_2_Template, 1, 3, "mwl-calendar-week-view", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TryComponent_div_14_mwl_calendar_day_view_3_Template, 1, 3, "mwl-calendar-day-view", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx_r0.view);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", ctx_r0.CalendarView.Month);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", ctx_r0.CalendarView.Week);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", ctx_r0.CalendarView.Day);
} }
const colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF',
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA',
    },
};
class TryComponent {
    constructor(modal, caseService, http) {
        this.modal = modal;
        this.caseService = caseService;
        this.http = http;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fas fa-fw fa-pencil-alt"></i>',
                a11yLabel: 'Edit',
                onClick: ({ event }) => {
                    this.handleEvent('Edited', event);
                },
            },
            {
                label: '<i class="fas fa-fw fa-trash-alt"></i>',
                a11yLabel: 'Delete',
                onClick: ({ event }) => {
                    this.events = this.events.filter((iEvent) => iEvent !== event);
                    this.handleEvent('Deleted', event);
                },
            },
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.events = [{
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfDay"])(new Date()), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions,
                allDay: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true,
                },
                draggable: true,
            }
        ];
        this.activeDayIsOpen = true;
        this.orders = [];
    }
    dayClicked({ date, events, }) {
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }
    eventTimesChanged({ event, newStart, newEnd, }) {
        this.events = this.events.map((iEvent) => {
            if (iEvent === event) {
                return Object.assign(Object.assign({}, event), { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    }
    handleEvent(action, event) {
        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: 'lg' });
    }
    setView(view) {
        this.view = view;
    }
    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }
    ngOnInit() {
        this.events$ = this.http
            .get('http://localhost:4000/api/calendarOrders')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((results) => {
            return results.map((film) => {
                return {
                    title: `${film.id}: ${film.orderNote}`,
                    start: new Date(film.orderDate),
                    color: colors.yellow,
                    allDay: true,
                    meta: {
                        film,
                    },
                };
            });
        }));
    }
}
TryComponent.ɵfac = function TryComponent_Factory(t) { return new (t || TryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_case_service__WEBPACK_IMPORTED_MODULE_6__["CaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"])); };
TryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TryComponent, selectors: [["mwl-demo-component"]], viewQuery: function TryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.modalContent = _t.first);
    } }, decls: 16, vars: 13, consts: [[1, "grid-container"], ["mat-h3", ""], ["mat-flat-button", "", "color", "primary", "mwlCalendarPreviousView", "", 3, "view", "viewDate", "viewDateChange"], ["mat-flat-button", "", "mwlCalendarToday", "", 3, "viewDate", "viewDateChange"], ["mat-flat-button", "", "color", "primary", "mwlCalendarNextView", "", 3, "view", "viewDate", "viewDateChange"], ["div", "", 3, "ngSwitch", 4, "ngIf"], ["div", "", 3, "ngSwitch"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged"]], template: function TryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "calendarDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("viewDateChange", function TryComponent_Template_button_viewDateChange_7_listener($event) { return ctx.viewDate = $event; })("viewDateChange", function TryComponent_Template_button_viewDateChange_7_listener() { return ctx.closeOpenMonthViewDay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("viewDateChange", function TryComponent_Template_button_viewDateChange_9_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Today ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("viewDateChange", function TryComponent_Template_button_viewDateChange_11_listener($event) { return ctx.viewDate = $event; })("viewDateChange", function TryComponent_Template_button_viewDateChange_11_listener() { return ctx.closeOpenMonthViewDay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, TryComponent_div_14_Template, 4, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](4, 7, ctx.viewDate, ctx.view + "ViewTitle", "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 11, ctx.events$));
    } }, directives: [angular_calendar__WEBPACK_IMPORTED_MODULE_2__["ɵf"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["ɵh"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["ɵg"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarMonthViewComponent"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarWeekViewComponent"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarDayViewComponent"]], pipes: [angular_calendar__WEBPACK_IMPORTED_MODULE_2__["ɵi"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".cal-month-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bolder; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%] {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%] {\n  border: 1px solid;\n  border-bottom: 0; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-cell-top[_ngcontent-%COMP%] {\n  min-height: 78px;\n  flex: 1; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%] {\n  -js-display: flex;\n  display: flex; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%] {\n  float: left;\n  flex: 1;\n  -js-display: flex;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%] {\n    pointer-events: all !important; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%] {\n  min-height: 100px; }\n\n@media all and (-ms-high-contrast: none) {\n    .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%] {\n      display: block; } }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 1px solid; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-day-badge[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  margin-left: 10px;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-events[_ngcontent-%COMP%] {\n  flex: 1;\n  align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  -js-display: flex;\n  display: flex;\n  flex-wrap: wrap; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-in-month.cal-has-events[_ngcontent-%COMP%] {\n  cursor: pointer; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-out-month[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%] {\n  opacity: 0.1;\n  cursor: default; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-today[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%] {\n  font-size: 1.9em; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-open-day-events[_ngcontent-%COMP%] {\n  padding: 15px; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-open-day-events[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%] {\n  position: relative;\n  top: 2px; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-out-month[_ngcontent-%COMP%]   .cal-day-badge[_ngcontent-%COMP%], .cal-month-view[_ngcontent-%COMP%]   .cal-out-month[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%] {\n  opacity: 0.3; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-draggable[_ngcontent-%COMP%] {\n  cursor: move; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-drag-active[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: none; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-event-title[_ngcontent-%COMP%] {\n  cursor: pointer; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-event-title[_ngcontent-%COMP%]:hover {\n    text-decoration: underline; }\n\n.cal-month-view[_ngcontent-%COMP%] {\n  background-color: #fff; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]:hover {\n    background-color: #fafafa; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]:hover, .cal-month-view[_ngcontent-%COMP%]   .cal-cell.cal-has-events.cal-open[_ngcontent-%COMP%] {\n    background-color: #ededed; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%] {\n    border-color: #e1e1e1; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]:not(:last-child) {\n    border-right-color: #e1e1e1; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%] {\n    border-bottom-color: #e1e1e1; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-day-badge[_ngcontent-%COMP%] {\n    background-color: #b94a48;\n    color: #fff; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%] {\n    background-color: #1e90ff;\n    border-color: #d1e8ff;\n    color: #fff; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-weekend[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%] {\n    color: #8b0000; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-today[_ngcontent-%COMP%] {\n    background-color: #e8fde7; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-drag-over[_ngcontent-%COMP%] {\n    background-color: #e0e0e0 !important; }\n\n.cal-month-view[_ngcontent-%COMP%]   .cal-open-day-events[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #555;\n    box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n\n.cal-week-view[_ngcontent-%COMP%] {\n   }\n\n.cal-week-view[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    box-sizing: border-box; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%] {\n    -js-display: flex;\n    display: flex;\n    padding-left: 70px;\n    border: 1px solid; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%] {\n    flex: 1;\n    text-align: center;\n    padding: 5px; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:not(:last-child) {\n      border-right: 1px solid; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:first-child {\n      border-left: 1px solid; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 400;\n    opacity: 0.5; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    border-left: solid 1px; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border: 1px solid; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-time-label-column[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 100%; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-current-time-marker[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    z-index: 2; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%] {\n    border: solid 1px;\n    border-top: 0;\n    border-bottom-width: 3px;\n    padding-top: 3px;\n    position: relative; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-day-columns[_ngcontent-%COMP%] {\n      height: 100%;\n      width: 100%;\n      -js-display: flex;\n      display: flex;\n      position: absolute;\n      top: 0;\n      z-index: 0; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-events-row[_ngcontent-%COMP%] {\n      position: relative;\n      height: 31px;\n      margin-left: 70px; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-event-container[_ngcontent-%COMP%] {\n      display: inline-block;\n      position: absolute; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-event-container.resize-active[_ngcontent-%COMP%] {\n        z-index: 1;\n        pointer-events: none; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%] {\n      padding: 0 5px;\n      margin-left: 2px;\n      margin-right: 2px;\n      height: 28px;\n      line-height: 28px; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-starts-within-week[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%] {\n      border-top-left-radius: 5px;\n      border-bottom-left-radius: 5px; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-ends-within-week[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%] {\n      border-top-right-radius: 5px;\n      border-bottom-right-radius: 5px; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-time-label-column[_ngcontent-%COMP%] {\n      -js-display: flex;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 14px; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-resize-handle[_ngcontent-%COMP%] {\n      width: 6px;\n      height: 100%;\n      cursor: col-resize;\n      position: absolute;\n      top: 0; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-resize-handle.cal-resize-handle-after-end[_ngcontent-%COMP%] {\n        right: 0; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%], .cal-week-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%] {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-drag-active[_ngcontent-%COMP%] {\n    pointer-events: none;\n    z-index: 1; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-drag-active[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n      pointer-events: none; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%] {\n    position: relative;\n    border: solid 1px;\n    border-top: 0;\n    -js-display: flex;\n    display: flex; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-day-columns[_ngcontent-%COMP%] {\n      -js-display: flex;\n      display: flex;\n      flex-grow: 1; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%] {\n      position: relative; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-events-container[_ngcontent-%COMP%] {\n      position: relative; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-event-container[_ngcontent-%COMP%] {\n      position: absolute;\n      z-index: 1; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%] {\n      width: calc(100% - 2px);\n      height: calc(100% - 2px);\n      margin: 1px;\n      padding: 0 5px;\n      line-height: 25px; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-resize-handle[_ngcontent-%COMP%] {\n      width: 100%;\n      height: 4px;\n      cursor: row-resize;\n      position: absolute; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-resize-handle.cal-resize-handle-after-end[_ngcontent-%COMP%] {\n        bottom: 0; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-hour-segment[_ngcontent-%COMP%] {\n    position: relative; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-hour-segment[_ngcontent-%COMP%]::after {\n      content: '\\00a0'; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-event-container[_ngcontent-%COMP%]:not(.cal-draggable) {\n    cursor: pointer; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-draggable[_ngcontent-%COMP%] {\n    cursor: move; }\n\n.cal-week-view[_ngcontent-%COMP%]   mwl-calendar-week-view-hour-segment[_ngcontent-%COMP%], .cal-week-view[_ngcontent-%COMP%]   .cal-hour-segment[_ngcontent-%COMP%] {\n    display: block; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-hour[_ngcontent-%COMP%]:not(:last-child)   .cal-hour-segment[_ngcontent-%COMP%], .cal-week-view[_ngcontent-%COMP%]   .cal-hour[_ngcontent-%COMP%]:last-child   [_ngcontent-%COMP%]:not(:last-child)   .cal-hour-segment[_ngcontent-%COMP%] {\n    border-bottom: thin dashed; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-time[_ngcontent-%COMP%] {\n    font-weight: bold;\n    padding-top: 5px;\n    width: 70px;\n    text-align: center; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-hour-segment.cal-after-hour-start[_ngcontent-%COMP%]   .cal-time[_ngcontent-%COMP%] {\n    display: none; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-starts-within-day[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%] {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-ends-within-day[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%] {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n\n.cal-week-view[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-top: solid 1px #e1e1e1; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%] {\n    border-color: #e1e1e1;\n    border-top: 0; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:not(:last-child) {\n    border-right-color: #e1e1e1; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:first-child {\n    border-left-color: #e1e1e1; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:hover, .cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-drag-over[_ngcontent-%COMP%] {\n    background-color: #ededed; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%] {\n    border-left-color: #e1e1e1; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%] {\n    background-color: #d1e8ff;\n    border-color: #1e90ff;\n    color: #1e90ff; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%] {\n    border-color: #e1e1e1; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-header.cal-today[_ngcontent-%COMP%] {\n    background-color: #e8fde7; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-header.cal-weekend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #8b0000; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%] {\n    border-color: #e1e1e1; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-day-columns[_ngcontent-%COMP%]:not(.cal-resize-active)   .cal-hour-segment[_ngcontent-%COMP%]:hover {\n      background-color: #ededed; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-hour-odd[_ngcontent-%COMP%] {\n    background-color: #fafafa; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-drag-over[_ngcontent-%COMP%]   .cal-hour-segment[_ngcontent-%COMP%] {\n    background-color: #ededed; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-hour[_ngcontent-%COMP%]:not(:last-child)   .cal-hour-segment[_ngcontent-%COMP%], .cal-week-view[_ngcontent-%COMP%]   .cal-hour[_ngcontent-%COMP%]:last-child   [_ngcontent-%COMP%]:not(:last-child)   .cal-hour-segment[_ngcontent-%COMP%] {\n    border-bottom-color: #e1e1e1; }\n\n.cal-week-view[_ngcontent-%COMP%]   .cal-current-time-marker[_ngcontent-%COMP%] {\n    background-color: #ea4334; }\n\n.cal-day-view[_ngcontent-%COMP%] {\n   }\n\n.cal-day-view[_ngcontent-%COMP%]   mwl-calendar-week-view-header[_ngcontent-%COMP%] {\n    display: none; }\n\n.cal-day-view[_ngcontent-%COMP%]   .cal-events-container[_ngcontent-%COMP%] {\n    margin-left: 70px; }\n\n.cal-day-view[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%] {\n    border-left: 0; }\n\n.cal-day-view[_ngcontent-%COMP%]   .cal-current-time-marker[_ngcontent-%COMP%] {\n    margin-left: 70px;\n    width: calc(100% - 70px); }\n\n.cal-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n\n.cal-tooltip.cal-tooltip-top[_ngcontent-%COMP%] {\n  padding: 5px 0;\n  margin-top: -3px; }\n\n.cal-tooltip.cal-tooltip-top[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0; }\n\n.cal-tooltip.cal-tooltip-right[_ngcontent-%COMP%] {\n  padding: 0 5px;\n  margin-left: 3px; }\n\n.cal-tooltip.cal-tooltip-right[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0; }\n\n.cal-tooltip.cal-tooltip-bottom[_ngcontent-%COMP%] {\n  padding: 5px 0;\n  margin-top: 3px; }\n\n.cal-tooltip.cal-tooltip-bottom[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%] {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px; }\n\n.cal-tooltip.cal-tooltip-left[_ngcontent-%COMP%] {\n  padding: 0 5px;\n  margin-left: -3px; }\n\n.cal-tooltip.cal-tooltip-left[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%] {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px; }\n\n.cal-tooltip-inner[_ngcontent-%COMP%] {\n  max-width: 200px;\n  padding: 3px 8px;\n  text-align: center;\n  border-radius: 0.25rem; }\n\n.cal-tooltip-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.cal-tooltip.cal-tooltip-top[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%] {\n  border-top-color: #000; }\n\n.cal-tooltip.cal-tooltip-right[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%] {\n  border-right-color: #000; }\n\n.cal-tooltip.cal-tooltip-bottom[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%] {\n  border-bottom-color: #000; }\n\n.cal-tooltip.cal-tooltip-left[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%] {\n  border-left-color: #000; }\n\n.cal-tooltip-inner[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #000; }\n\nh3[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n\npre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyLWNhbGVuZGFyL2Nzcy9hbmd1bGFyLWNhbGVuZGFyLmNzcyIsIi4uXFwuLlxcLi5cXHRyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBRTs7QUFFdkI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBRWIsdUJBQXVCO0VBQzFCLGNBQWM7RUFDZCxtQkFBbUIsRUFBRTs7QUFFdkI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUU7O0FBRXBCO0VBQ0UsZ0JBQWdCO0VBR1IsT0FBTyxFQUFFOztBQUVuQjtFQUdFLGlCQUFpQjtFQUNqQixhQUFhLEVBQUU7O0FBRWpCO0VBQ0UsV0FBVztFQUdILE9BQU87RUFHZixpQkFBaUI7RUFDakIsYUFBYTtFQUlMLHNCQUFzQjtFQUd0QixvQkFBb0IsRUFBRTs7QUFDOUI7SUFDRSw4QkFBOEIsRUFBRTs7QUFFcEM7RUFDRSxpQkFBaUIsRUFBRTs7QUFDbkI7SUFDRTtNQUNFLGNBQWMsRUFBRSxFQUFFOztBQUV4QjtFQUNFLHVCQUF1QixFQUFFOztBQUUzQjtFQUNFLHdCQUF3QixFQUFFOztBQUU1QjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUU7O0FBRXZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CLEVBQUU7O0FBRXZCO0VBR1UsT0FBTztFQUdQLHFCQUFxQjtFQUM3QixXQUFXO0VBQ1gsaUJBQWlCO0VBR2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBRVQsZUFBZSxFQUFFOztBQUV2QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXLEVBQUU7O0FBRWY7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsWUFBWTtFQUNaLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxnQkFBZ0IsRUFBRTs7QUFFcEI7RUFDRSxhQUFhLEVBQUU7O0FBRWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVEsRUFBRTs7QUFFWjs7RUFFRSxZQUFZLEVBQUU7O0FBRWhCO0VBQ0UsWUFBWSxFQUFFOztBQUVoQjtFQUNFLG9CQUFvQixFQUFFOztBQUV4QjtFQUNFLGVBQWUsRUFBRTs7QUFDakI7SUFDRSwwQkFBMEIsRUFBRTs7QUFFaEM7RUFDRSxzQkFBc0IsRUFBRTs7QUFDeEI7SUFDRSx5QkFBeUIsRUFBRTs7QUFDN0I7O0lBRUUseUJBQXlCLEVBQUU7O0FBQzdCO0lBQ0UscUJBQXFCLEVBQUU7O0FBQ3pCO0lBQ0UsMkJBQTJCLEVBQUU7O0FBQy9CO0lBQ0UsNEJBQTRCLEVBQUU7O0FBQ2hDO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVcsRUFBRTs7QUFDZjtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsV0FBVyxFQUFFOztBQUNmO0lBQ0UsY0FBYyxFQUFFOztBQUNsQjtJQUNFLHlCQUF5QixFQUFFOztBQUM3QjtJQUNFLG9DQUFvQyxFQUFFOztBQUN4QztJQUNFLFdBQVc7SUFDWCxzQkFBc0I7SUFFZCwrQ0FBK0MsRUFBRTs7QUFFN0Q7RUFDRSx5REFBeUQsRUFBRTs7QUFDM0Q7SUFFVSxzQkFBc0IsRUFBRTs7QUFDbEM7SUFHRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBRTs7QUFDckI7SUFHVSxPQUFPO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVksRUFBRTs7QUFDZDtNQUNFLHVCQUF1QixFQUFFOztBQUMzQjtNQUNFLHNCQUFzQixFQUFFOztBQUM1QjtJQUNFLGdCQUFnQjtJQUNoQixZQUFZLEVBQUU7O0FBQ2hCO0lBR1UsWUFBWTtJQUNwQixzQkFBc0IsRUFBRTs7QUFDMUI7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCLEVBQUU7O0FBQ3JCO0lBQ0UsV0FBVztJQUNYLFlBQVksRUFBRTs7QUFDaEI7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVLEVBQUU7O0FBQ2Q7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUU7O0FBQ3BCO01BQ0UsWUFBWTtNQUNaLFdBQVc7TUFHWCxpQkFBaUI7TUFDakIsYUFBYTtNQUNiLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sVUFBVSxFQUFFOztBQUNkO01BQ0Usa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixpQkFBaUIsRUFBRTs7QUFDckI7TUFDRSxxQkFBcUI7TUFDckIsa0JBQWtCLEVBQUU7O0FBQ3BCO1FBQ0UsVUFBVTtRQUNWLG9CQUFvQixFQUFFOztBQUMxQjtNQUNFLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLFlBQVk7TUFDWixpQkFBaUIsRUFBRTs7QUFDckI7TUFDRSwyQkFBMkI7TUFDM0IsOEJBQThCLEVBQUU7O0FBQ2xDO01BQ0UsNEJBQTRCO01BQzVCLCtCQUErQixFQUFFOztBQUNuQztNQUdFLGlCQUFpQjtNQUNqQixhQUFhO01BR0wsbUJBQW1CO01BR25CLHVCQUF1QjtNQUMvQixlQUFlLEVBQUU7O0FBQ25CO01BQ0UsVUFBVTtNQUNWLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLE1BQU0sRUFBRTs7QUFDUjtRQUNFLFFBQVEsRUFBRTs7QUFDaEI7O0lBRUUsZ0JBQWdCO0lBRWIsdUJBQXVCO0lBQzFCLG1CQUFtQixFQUFFOztBQUN2QjtJQUNFLG9CQUFvQjtJQUNwQixVQUFVLEVBQUU7O0FBQ1o7TUFDRSxvQkFBb0IsRUFBRTs7QUFDMUI7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFHYixpQkFBaUI7SUFDakIsYUFBYSxFQUFFOztBQUNmO01BR0UsaUJBQWlCO01BQ2pCLGFBQWE7TUFHTCxZQUFZLEVBQUU7O0FBQ3hCO01BQ0Usa0JBQWtCLEVBQUU7O0FBQ3RCO01BQ0Usa0JBQWtCLEVBQUU7O0FBQ3RCO01BQ0Usa0JBQWtCO01BQ2xCLFVBQVUsRUFBRTs7QUFDZDtNQUNFLHVCQUF1QjtNQUN2Qix3QkFBd0I7TUFDeEIsV0FBVztNQUNYLGNBQWM7TUFDZCxpQkFBaUIsRUFBRTs7QUFDckI7TUFDRSxXQUFXO01BQ1gsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixrQkFBa0IsRUFBRTs7QUFDcEI7UUFDRSxTQUFTLEVBQUU7O0FBQ2pCO0lBQ0Usa0JBQWtCLEVBQUU7O0FBQ3BCO01BQ0UsZ0JBQWdCLEVBQUU7O0FBQ3RCO0lBQ0UsZUFBZSxFQUFFOztBQUNuQjtJQUNFLFlBQVksRUFBRTs7QUFDaEI7O0lBRUUsY0FBYyxFQUFFOztBQUNsQjs7SUFFRSwwQkFBMEIsRUFBRTs7QUFDOUI7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0IsRUFBRTs7QUFDdEI7SUFDRSxhQUFhLEVBQUU7O0FBQ2pCO0lBQ0UsMkJBQTJCO0lBQzNCLDRCQUE0QixFQUFFOztBQUNoQztJQUNFLDhCQUE4QjtJQUM5QiwrQkFBK0IsRUFBRTs7QUFFckM7RUFDRSxzQkFBc0I7RUFDdEIsNkJBQTZCLEVBQUU7O0FBQy9CO0lBQ0UscUJBQXFCO0lBQ3JCLGFBQWEsRUFBRTs7QUFDakI7SUFDRSwyQkFBMkIsRUFBRTs7QUFDL0I7SUFDRSwwQkFBMEIsRUFBRTs7QUFDOUI7O0lBRUUseUJBQXlCLEVBQUU7O0FBQzdCO0lBQ0UsMEJBQTBCLEVBQUU7O0FBQzlCO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixjQUFjLEVBQUU7O0FBQ2xCO0lBQ0UscUJBQXFCLEVBQUU7O0FBQ3pCO0lBQ0UseUJBQXlCLEVBQUU7O0FBQzdCO0lBQ0UsY0FBYyxFQUFFOztBQUNsQjtJQUNFLHFCQUFxQixFQUFFOztBQUN2QjtNQUNFLHlCQUF5QixFQUFFOztBQUMvQjtJQUNFLHlCQUF5QixFQUFFOztBQUM3QjtJQUNFLHlCQUF5QixFQUFFOztBQUM3Qjs7SUFFRSw0QkFBNEIsRUFBRTs7QUFDaEM7SUFDRSx5QkFBeUIsRUFBRTs7QUFFL0I7RUFDRSx5REFBeUQsRUFBRTs7QUFDM0Q7SUFDRSxhQUFhLEVBQUU7O0FBQ2pCO0lBQ0UsaUJBQWlCLEVBQUU7O0FBQ3JCO0lBQ0UsY0FBYyxFQUFFOztBQUNsQjtJQUNFLGlCQUFpQjtJQUNqQix3QkFBd0IsRUFBRTs7QUFFOUI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVksRUFBRTs7QUFFaEI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUU7O0FBRXBCO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsdUJBQXVCLEVBQUU7O0FBRTNCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQixFQUFFOztBQUVwQjtFQUNFLFFBQVE7RUFDUixPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLDJCQUEyQixFQUFFOztBQUUvQjtFQUNFLGNBQWM7RUFDZCxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsTUFBTTtFQUNOLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsdUJBQXVCLEVBQUU7O0FBRTNCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQixFQUFFOztBQUVyQjtFQUNFLFFBQVE7RUFDUixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLDJCQUEyQixFQUFFOztBQUUvQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFFOztBQUUxQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBRTs7QUFFdkI7RUFDRSxzQkFBc0IsRUFBRTs7QUFFMUI7RUFDRSx3QkFBd0IsRUFBRTs7QUFFNUI7RUFDRSx5QkFBeUIsRUFBRTs7QUFFN0I7RUFDRSx1QkFBdUIsRUFBRTs7QUFFM0I7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCLEVBQUU7O0FDamUxQjtFQUNJLGdCQUFBO0FBRUo7O0FBQ0U7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUFFSiIsImZpbGUiOiJ0cnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsLW1vbnRoLXZpZXcgLmNhbC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtaGVhZGVyIC5jYWwtY2VsbCB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheXMge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbTogMDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLXRvcCB7XG4gIG1pbi1oZWlnaHQ6IDc4cHg7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWNlbGwtcm93IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAtanMtZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogZmxleDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC1qcy1kaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBzdHJldGNoO1xuICAgICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbCAuY2FsLWV2ZW50IHtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsICFpbXBvcnRhbnQ7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwge1xuICBtaW4taGVpZ2h0OiAxMDBweDsgfVxuICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcbiAgICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbCB7XG4gICAgICBkaXNwbGF5OiBibG9jazsgfSB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXlzIC5jYWwtY2VsbC1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWJhZGdlIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAxMHB4O1xuICBwYWRkaW5nOiAzcHggN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LW51bWJlciB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZXZlbnRzIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XG4gICAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgbWFyZ2luOiAzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC1qcy1kaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgICAgZmxleC13cmFwOiB3cmFwOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWV2ZW50IHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMnB4OyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsLmNhbC1pbi1tb250aC5jYWwtaGFzLWV2ZW50cyB7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbC5jYWwtb3V0LW1vbnRoIC5jYWwtZGF5LW51bWJlciB7XG4gIG9wYWNpdHk6IDAuMTtcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsLmNhbC10b2RheSAuY2FsLWRheS1udW1iZXIge1xuICBmb250LXNpemU6IDEuOWVtOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyB7XG4gIHBhZGRpbmc6IDE1cHg7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzIC5jYWwtZXZlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4OyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLW91dC1tb250aCAuY2FsLWRheS1iYWRnZSxcbi5jYWwtbW9udGgtdmlldyAuY2FsLW91dC1tb250aCAuY2FsLWV2ZW50IHtcbiAgb3BhY2l0eTogMC4zOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRyYWdnYWJsZSB7XG4gIGN1cnNvcjogbW92ZTsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kcmFnLWFjdGl2ZSAqIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZXZlbnQtdGl0bGUge1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtZXZlbnQtdGl0bGU6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG5cbi5jYWwtbW9udGgtdmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC1yb3c6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC1yb3cgLmNhbC1jZWxsOmhvdmVyLFxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLmNhbC1oYXMtZXZlbnRzLmNhbC1vcGVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkOyB9XG4gIC5jYWwtbW9udGgtdmlldyAuY2FsLWRheXMge1xuICAgIGJvcmRlci1jb2xvcjogI2UxZTFlMTsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNlMWUxZTE7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtZGF5cyAuY2FsLWNlbGwtcm93IHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZTFlMWUxOyB9XG4gIC5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1iYWRnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I5NGE0ODtcbiAgICBjb2xvcjogI2ZmZjsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1ldmVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlOTBmZjtcbiAgICBib3JkZXItY29sb3I6ICNkMWU4ZmY7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLXdlZWtlbmQgLmNhbC1kYXktbnVtYmVyIHtcbiAgICBjb2xvcjogIzhiMDAwMDsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbC5jYWwtdG9kYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGZkZTc7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLWRyYWctb3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMCAhaW1wb3J0YW50OyB9XG4gIC5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cblxuLmNhbC13ZWVrLXZpZXcge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2VsZWN0b3ItdHlwZS1uby11bmtub3duICovIH1cbiAgLmNhbC13ZWVrLXZpZXcgKiB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAtanMtZGlzcGxheTogZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctbGVmdDogNzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgICAgICAtbXMtZmxleDogMTtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXI6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXI6Zmlyc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgb3BhY2l0eTogMC41OyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWNvbHVtbiB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWxhYmVsLWNvbHVtbiB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiAxMDAlOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtY3VycmVudC10aW1lLW1hcmtlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIHotaW5kZXg6IDI7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHg7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtZGF5LWNvbHVtbnMge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgei1pbmRleDogMDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1ldmVudHMtcm93IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMzFweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4OyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWV2ZW50LWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1ldmVudC1jb250YWluZXIucmVzaXplLWFjdGl2ZSB7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWV2ZW50IHtcbiAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtc3RhcnRzLXdpdGhpbi13ZWVrIC5jYWwtZXZlbnQge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4OyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWVuZHMtd2l0aGluLXdlZWsgLmNhbC1ldmVudCB7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC10aW1lLWxhYmVsLWNvbHVtbiB7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDE0cHg7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtcmVzaXplLWhhbmRsZSB7XG4gICAgICB3aWR0aDogNnB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwOyB9XG4gICAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtcmVzaXplLWhhbmRsZS5jYWwtcmVzaXplLWhhbmRsZS1hZnRlci1lbmQge1xuICAgICAgICByaWdodDogMDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50LFxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhlYWRlciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZHJhZy1hY3RpdmUge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IDE7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWRyYWctYWN0aXZlICoge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlcjogc29saWQgMXB4O1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gICAgZGlzcGxheTogZmxleDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1kYXktY29sdW1ucyB7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICAgICAgICAgICAgZmxleC1ncm93OiAxOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWRheS1jb2x1bW4ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWV2ZW50cy1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWV2ZW50LWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWV2ZW50IHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAycHgpO1xuICAgICAgbWFyZ2luOiAxcHg7XG4gICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4OyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLXJlc2l6ZS1oYW5kbGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIGN1cnNvcjogcm93LXJlc2l6ZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAgICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLXJlc2l6ZS1oYW5kbGUuY2FsLXJlc2l6ZS1oYW5kbGUtYWZ0ZXItZW5kIHtcbiAgICAgICAgYm90dG9tOiAwOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWhvdXItc2VnbWVudDo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJ1xcMDBhMCc7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudC1jb250YWluZXI6bm90KC5jYWwtZHJhZ2dhYmxlKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZHJhZ2dhYmxlIHtcbiAgICBjdXJzb3I6IG1vdmU7IH1cbiAgLmNhbC13ZWVrLXZpZXcgbXdsLWNhbGVuZGFyLXdlZWstdmlldy1ob3VyLXNlZ21lbnQsXG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhvdXI6bm90KDpsYXN0LWNoaWxkKSAuY2FsLWhvdXItc2VnbWVudCxcbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyOmxhc3QtY2hpbGQgOm5vdCg6bGFzdC1jaGlsZCkgLmNhbC1ob3VyLXNlZ21lbnQge1xuICAgIGJvcmRlci1ib3R0b206IHRoaW4gZGFzaGVkOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyLXNlZ21lbnQuY2FsLWFmdGVyLWhvdXItc3RhcnQgLmNhbC10aW1lIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtc3RhcnRzLXdpdGhpbi1kYXkgLmNhbC1ldmVudCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1lbmRzLXdpdGhpbi1kYXkgLmNhbC1ldmVudCB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IH1cblxuLmNhbC13ZWVrLXZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2UxZTFlMTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIHtcbiAgICBib3JkZXItY29sb3I6ICNlMWUxZTE7XG4gICAgYm9yZGVyLXRvcDogMDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2UxZTFlMTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2UxZTFlMTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyOmhvdmVyLFxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtZHJhZy1vdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWNvbHVtbiB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNlMWUxZTE7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZThmZjtcbiAgICBib3JkZXItY29sb3I6ICMxZTkwZmY7XG4gICAgY29sb3I6ICMxZTkwZmY7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZTFlMWUxOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaGVhZGVyLmNhbC10b2RheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZmRlNzsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhlYWRlci5jYWwtd2Vla2VuZCBzcGFuIHtcbiAgICBjb2xvcjogIzhiMDAwMDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLXRpbWUtZXZlbnRzIHtcbiAgICBib3JkZXItY29sb3I6ICNlMWUxZTE7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLXRpbWUtZXZlbnRzIC5jYWwtZGF5LWNvbHVtbnM6bm90KC5jYWwtcmVzaXplLWFjdGl2ZSkgLmNhbC1ob3VyLXNlZ21lbnQ6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhvdXItb2RkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZHJhZy1vdmVyIC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaG91cjpub3QoOmxhc3QtY2hpbGQpIC5jYWwtaG91ci1zZWdtZW50LFxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhvdXI6bGFzdC1jaGlsZCA6bm90KDpsYXN0LWNoaWxkKSAuY2FsLWhvdXItc2VnbWVudCB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2UxZTFlMTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWN1cnJlbnQtdGltZS1tYXJrZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYTQzMzQ7IH1cblxuLmNhbC1kYXktdmlldyB7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzZWxlY3Rvci10eXBlLW5vLXVua25vd24gKi8gfVxuICAuY2FsLWRheS12aWV3IG13bC1jYWxlbmRhci13ZWVrLXZpZXctaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1ldmVudHMtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogNzBweDsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtZGF5LWNvbHVtbiB7XG4gICAgYm9yZGVyLWxlZnQ6IDA7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWN1cnJlbnQtdGltZS1tYXJrZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTsgfVxuXG4uY2FsLXRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwNzA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGxpbmUtYnJlYWs6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG9wYWNpdHk6IDAuOTsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtdG9wIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIG1hcmdpbi10b3A6IC0zcHg7IH1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLXRvcCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGJvcmRlci13aWR0aDogNXB4IDVweCAwOyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1yaWdodCB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBtYXJnaW4tbGVmdDogM3B4OyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1yaWdodCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgYm9yZGVyLXdpZHRoOiA1cHggNXB4IDVweCAwOyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1ib3R0b20ge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luLXRvcDogM3B4OyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1ib3R0b20gLmNhbC10b29sdGlwLWFycm93IHtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBib3JkZXItd2lkdGg6IDAgNXB4IDVweDsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtbGVmdCB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBtYXJnaW4tbGVmdDogLTNweDsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtbGVmdCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGJvcmRlci13aWR0aDogNXB4IDAgNXB4IDVweDsgfVxuXG4uY2FsLXRvb2x0aXAtaW5uZXIge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07IH1cblxuLmNhbC10b29sdGlwLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkOyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC10b3AgLmNhbC10b29sdGlwLWFycm93IHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtcmlnaHQgLmNhbC10b29sdGlwLWFycm93IHtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMDAwOyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1ib3R0b20gLmNhbC10b29sdGlwLWFycm93IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtbGVmdCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzAwMDsgfVxuXG4uY2FsLXRvb2x0aXAtaW5uZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgfVxuIiwiaDMge1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICB9XHJcblxyXG4gIHByZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcblxyXG4gIEBpbXBvcnQgXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhci1jYWxlbmRhci9jc3MvYW5ndWxhci1jYWxlbmRhci5jc3NcIlxyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "vRX4":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return buildMatchPatternFn; });
function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var matchResult = string.match(args.matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);

    if (!parseResult) {
      return null;
    }

    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

/***/ }),

/***/ "w3Pf":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisQuarter/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isThisQuarter; });
/* harmony import */ var _isSameQuarter_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isSameQuarter/index.js */ "TGAR");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isThisQuarter
 * @category Quarter Helpers
 * @summary Is the given date in the same quarter as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same quarter as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this quarter?
 * var result = isThisQuarter(new Date(2014, 6, 2))
 * //=> true
 */

function isThisQuarter(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_isSameQuarter_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Date.now(), dirtyDate);
}

/***/ }),

/***/ "w3qX":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/*! exports provided: maxTime, minTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxTime", function() { return maxTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minTime", function() { return minTime; });
/**
 *  Maximum allowed time.
 *  @constant
 *  @type {number}
 *  @default
 */
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 *  Minimum allowed time.
 *  @constant
 *  @type {number}
 *  @default
 */

var minTime = -maxTime;

/***/ }),

/***/ "wK6H":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/isFirstDayOfMonth/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isFirstDayOfMonth; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isFirstDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the first day of a month?
 *
 * @description
 * Is the given date the first day of a month?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the first day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 1 September 2014 the first day of a month?
 * var result = isFirstDayOfMonth(new Date(2014, 8, 1))
 * //=> true
 */

function isFirstDayOfMonth(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate).getDate() === 1;
}

/***/ }),

/***/ "wQoA":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/lastDayOfYear/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lastDayOfYear; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name lastDayOfYear
 * @category Year Helpers
 * @summary Return the last day of a year for the given date.
 *
 * @description
 * Return the last day of a year for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the last day of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of a year for 2 September 2014 11:55:00:
 * var result = lastDayOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 00:00:00
 */

function lastDayOfYear(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
  var year = date.getFullYear();
  date.setFullYear(year + 1, 0, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "wTf+":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isMonday/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isMonday; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isMonday
 * @category Weekday Helpers
 * @summary Is the given date Monday?
 *
 * @description
 * Is the given date Monday?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Monday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 22 September 2014 Monday?
 * var result = isMonday(new Date(2014, 8, 22))
 * //=> true
 */

function isMonday(date) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date).getDay() === 1;
}

/***/ }),

/***/ "wXd3":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/setSeconds/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setSeconds; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name setSeconds
 * @category Second Helpers
 * @summary Set the seconds to the given date.
 *
 * @description
 * Set the seconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} seconds - the seconds of the new date
 * @returns {Date} the new date with the seconds set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * var result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */

function setSeconds(dirtyDate, dirtySeconds) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var seconds = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtySeconds);
  date.setSeconds(seconds);
  return date;
}

/***/ }),

/***/ "wigk":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/closestIndexTo/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return closestIndexTo; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name closestIndexTo
 * @category Common Helpers
 * @summary Return an index of the closest date from the array comparing to the given date.
 *
 * @description
 * Return an index of the closest date from the array comparing to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now, `closestIndexTo` doesn't throw an exception
 *   when the second argument is not an array, and returns Invalid Date instead.
 *
 * @param {Date|Number} dateToCompare - the date to compare with
 * @param {Date[]|Number[]} datesArray - the array to search
 * @returns {Number} an index of the date closest to the given date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Which date is closer to 6 September 2015?
 * var dateToCompare = new Date(2015, 8, 6)
 * var datesArray = [
 *   new Date(2015, 0, 1),
 *   new Date(2016, 0, 1),
 *   new Date(2017, 0, 1)
 * ]
 * var result = closestIndexTo(dateToCompare, datesArray)
 * //=> 1
 */

function closestIndexTo(dirtyDateToCompare, dirtyDatesArray) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var dateToCompare = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateToCompare);

  if (isNaN(dateToCompare)) {
    return NaN;
  }

  var timeToCompare = dateToCompare.getTime();
  var datesArray; // `dirtyDatesArray` is undefined or null

  if (dirtyDatesArray == null) {
    datesArray = []; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
  } else if (typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array. Otherwise, make it empty Array
  } else {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  }

  var result;
  var minDistance;
  datesArray.forEach(function (dirtyDate, index) {
    var currentDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);

    if (isNaN(currentDate)) {
      result = NaN;
      minDistance = NaN;
      return;
    }

    var distance = Math.abs(timeToCompare - currentDate.getTime());

    if (result == null || distance < minDistance) {
      result = index;
      minDistance = distance;
    }
  });
  return result;
}

/***/ }),

/***/ "wzM+":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return buildMatchFn; });
function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var value;

    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = findIndex(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
}

/***/ }),

/***/ "xMRN":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "zMQz");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: Object(_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: Object(_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: Object(_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (formatLong);

/***/ }),

/***/ "xiNX":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/setUTCWeek/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setUTCWeek; });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toInteger/index.js */ "/h9T");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "/Tr7");
/* harmony import */ var _getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeek/index.js */ "ErpD");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../requiredArgs/index.js */ "jIYg");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCWeek(dirtyDate, dirtyWeek, options) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var week = Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyWeek);
  var diff = Object(_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

/***/ }),

/***/ "yzsd":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameHour/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isSameHour; });
/* harmony import */ var _startOfHour_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startOfHour/index.js */ "CxvL");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isSameHour
 * @category Hour Helpers
 * @summary Are the given dates in the same hour?
 *
 * @description
 * Are the given dates in the same hour?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same hour
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
 * var result = isSameHour(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 6, 30))
 * //=> true
 */

function isSameHour(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var dateLeftStartOfHour = Object(_startOfHour_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
  var dateRightStartOfHour = Object(_startOfHour_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
  return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime();
}

/***/ }),

/***/ "zHMj":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isEqual/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isEqual; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "/Tr7");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");


/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Boolean} the dates are equal
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * var result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0),
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */

function isEqual(dirtyLeftDate, dirtyRightDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  var dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyLeftDate);
  var dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyRightDate);
  return dateLeft.getTime() === dateRight.getTime();
}

/***/ }),

/***/ "zMQz":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return buildFormatLongFn; });
function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "zWh8":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/setUTCISODay/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setUTCISODay; });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toInteger/index.js */ "/h9T");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "/Tr7");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requiredArgs/index.js */ "jIYg");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISODay(dirtyDate, dirtyDay) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var day = Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

/***/ }),

/***/ "zbbA":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/addYears/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addYears; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "/h9T");
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addMonths/index.js */ "dLU1");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "jIYg");



/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the years added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */

function addYears(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
  return Object(_addMonths_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, amount * 12);
}

/***/ })

}]);
//# sourceMappingURL=try-module.js.map