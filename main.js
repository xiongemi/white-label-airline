(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../libs/services/api/api.service.ts":
/*!****************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/api/api.service.ts ***!
  \****************************************************************************************/
/*! exports provided: getApiHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiHeaders", function() { return getApiHeaders; });
function getApiHeaders() {
  return {
    'Content-Type': 'application/json',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    'x-rapidapi-key': "84c34636bfmsh84d4a351c5e2185p14352fjsn72ef0884ff8e",
    useQueryString: 'true'
  };
}

/***/ }),

/***/ "../../../libs/services/countries/countries.service.ts":
/*!****************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/countries/countries.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: countriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countriesService", function() { return countriesService; });
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api.service */ "../../../libs/services/api/api.service.ts");


async function getCountries(locale) {
  const response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries" + '/' + locale, {
    headers: Object(_api_api_service__WEBPACK_IMPORTED_MODULE_0__["getApiHeaders"])()
  });

  if (response.ok) {
    return response.json();
  }

  throw response;
}

const countriesService = {
  getCountries
};

/***/ }),

/***/ "../../../libs/services/countries/index.ts":
/*!****************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/countries/index.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countries.service */ "../../../libs/services/countries/countries.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countriesService", function() { return _countries_service__WEBPACK_IMPORTED_MODULE_0__["countriesService"]; });

/* harmony import */ var _models_countries_response_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/countries-response.interface */ "../../../libs/services/countries/models/countries-response.interface.ts");
/* harmony import */ var _models_countries_response_interface__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_countries_response_interface__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models_countries_response_interface__WEBPACK_IMPORTED_MODULE_1__) if(["countriesService","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models_countries_response_interface__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _models_country_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/country.interface */ "../../../libs/services/countries/models/country.interface.ts");
/* harmony import */ var _models_country_interface__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_country_interface__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models_country_interface__WEBPACK_IMPORTED_MODULE_2__) if(["countriesService","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models_country_interface__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "../../../libs/services/countries/models/countries-response.interface.ts":
/*!**********************************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/countries/models/countries-response.interface.ts ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../../libs/services/countries/models/country.interface.ts":
/*!***********************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/countries/models/country.interface.ts ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../../libs/services/currencies/currencies.service.ts":
/*!******************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/currencies/currencies.service.ts ***!
  \******************************************************************************************************/
/*! exports provided: currenciesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currenciesService", function() { return currenciesService; });
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api.service */ "../../../libs/services/api/api.service.ts");


async function getCurrencies() {
  const response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies", {
    headers: Object(_api_api_service__WEBPACK_IMPORTED_MODULE_0__["getApiHeaders"])()
  });

  if (response.ok) {
    return response.json();
  }

  throw response;
}

const currenciesService = {
  getCurrencies
};

/***/ }),

/***/ "../../../libs/services/currencies/index.ts":
/*!*****************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/currencies/index.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _currencies_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currencies.service */ "../../../libs/services/currencies/currencies.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currenciesService", function() { return _currencies_service__WEBPACK_IMPORTED_MODULE_0__["currenciesService"]; });

/* harmony import */ var _models_currencies_response_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/currencies-response.interface */ "../../../libs/services/currencies/models/currencies-response.interface.ts");
/* harmony import */ var _models_currencies_response_interface__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_currencies_response_interface__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models_currencies_response_interface__WEBPACK_IMPORTED_MODULE_1__) if(["currenciesService","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models_currencies_response_interface__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _models_currency_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/currency.interface */ "../../../libs/services/currencies/models/currency.interface.ts");
/* harmony import */ var _models_currency_interface__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_currency_interface__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models_currency_interface__WEBPACK_IMPORTED_MODULE_2__) if(["currenciesService","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models_currency_interface__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "../../../libs/services/currencies/models/currencies-response.interface.ts":
/*!************************************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/currencies/models/currencies-response.interface.ts ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../../libs/services/currencies/models/currency.interface.ts":
/*!*************************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/currencies/models/currency.interface.ts ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../../libs/services/i18n/i18n.ts":
/*!**********************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/i18n/i18n.ts ***!
  \**********************************************************************************/
/*! exports provided: setI18n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setI18n", function() { return setI18n; });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "../../../node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "../../../node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next-browser-languagedetector */ "../../../node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js");
/* harmony import */ var i18next_http_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next-http-backend */ "../../../node_modules/i18next-http-backend/esm/index.js");




function setI18n(loadPath) {
  i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__["default"]).use(react_i18next__WEBPACK_IMPORTED_MODULE_1__["initReactI18next"]).use(i18next_http_backend__WEBPACK_IMPORTED_MODULE_3__["default"]).init({
    backend: {
      loadPath
    },
    lng: 'en-GB',
    fallbackLng: {
      'en-GB': ['en']
    },
    debug: true,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default

    }
  });
  return i18next__WEBPACK_IMPORTED_MODULE_0__["default"];
}

/***/ }),

/***/ "../../../libs/services/i18n/index.ts":
/*!***********************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/i18n/index.ts ***!
  \***********************************************************************************/
/*! exports provided: setI18n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n */ "../../../libs/services/i18n/i18n.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setI18n", function() { return _i18n__WEBPACK_IMPORTED_MODULE_0__["setI18n"]; });



/***/ }),

/***/ "../../../libs/services/places/index.ts":
/*!*************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/places/index.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_place_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/place.interface */ "../../../libs/services/places/models/place.interface.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPlaceLabel", function() { return _models_place_interface__WEBPACK_IMPORTED_MODULE_0__["getPlaceLabel"]; });

/* harmony import */ var _models_places_response_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/places-response.interface */ "../../../libs/services/places/models/places-response.interface.ts");
/* harmony import */ var _models_places_response_interface__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_places_response_interface__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models_places_response_interface__WEBPACK_IMPORTED_MODULE_1__) if(["getPlaceLabel","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models_places_response_interface__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./places.service */ "../../../libs/services/places/places.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placesService", function() { return _places_service__WEBPACK_IMPORTED_MODULE_2__["placesService"]; });





/***/ }),

/***/ "../../../libs/services/places/models/place.interface.ts":
/*!******************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/places/models/place.interface.ts ***!
  \******************************************************************************************************/
/*! exports provided: getPlaceLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlaceLabel", function() { return getPlaceLabel; });
function getPlaceLabel(place) {
  return `${place.PlaceName} (${place.PlaceId})`;
}

/***/ }),

/***/ "../../../libs/services/places/models/places-response.interface.ts":
/*!****************************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/places/models/places-response.interface.ts ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../../libs/services/places/places.service.ts":
/*!**********************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/places/places.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: placesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placesService", function() { return placesService; });
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api.service */ "../../../libs/services/api/api.service.ts");


async function getPlaces(country, currency, locale, query) {
  const url = new URL(`${"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0"}/${country}/${currency}/${locale}/`);
  url.searchParams.set('query', query);
  const response = await fetch(url.toString(), {
    headers: Object(_api_api_service__WEBPACK_IMPORTED_MODULE_0__["getApiHeaders"])()
  });

  if (response.ok) {
    return response.json();
  }

  throw response;
}

const placesService = {
  getPlaces
};

/***/ }),

/***/ "../../../libs/services/quotes/index.ts":
/*!*************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/quotes/index.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quotes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quotes.service */ "../../../libs/services/quotes/quotes.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quotesService", function() { return _quotes_service__WEBPACK_IMPORTED_MODULE_0__["quotesService"]; });

/* harmony import */ var _quotes_data_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotes.data-transform */ "../../../libs/services/quotes/quotes.data-transform.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quotesDataTransfrom", function() { return _quotes_data_transform__WEBPACK_IMPORTED_MODULE_1__["quotesDataTransfrom"]; });

/* harmony import */ var _models_quotes_response_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/quotes-response.interface */ "../../../libs/services/quotes/models/quotes-response.interface.ts");
/* harmony import */ var _models_quotes_response_interface__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_quotes_response_interface__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models_quotes_response_interface__WEBPACK_IMPORTED_MODULE_2__) if(["quotesService","quotesDataTransfrom","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models_quotes_response_interface__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _models_quote_per_leg_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/quote-per-leg.interface */ "../../../libs/services/quotes/models/quote-per-leg.interface.ts");
/* harmony import */ var _models_quote_per_leg_interface__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_models_quote_per_leg_interface__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models_quote_per_leg_interface__WEBPACK_IMPORTED_MODULE_3__) if(["quotesService","quotesDataTransfrom","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models_quote_per_leg_interface__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _models_quote_per_leg_mock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/quote-per-leg.mock */ "../../../libs/services/quotes/models/quote-per-leg.mock.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockQuotePerLeg", function() { return _models_quote_per_leg_mock__WEBPACK_IMPORTED_MODULE_4__["mockQuotePerLeg"]; });

/* harmony import */ var _models_quotes_per_trip_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/quotes-per-trip.interface */ "../../../libs/services/quotes/models/quotes-per-trip.interface.ts");
/* harmony import */ var _models_quotes_per_trip_interface__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_models_quotes_per_trip_interface__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models_quotes_per_trip_interface__WEBPACK_IMPORTED_MODULE_5__) if(["quotesService","quotesDataTransfrom","mockQuotePerLeg","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models_quotes_per_trip_interface__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _models_carrier_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/carrier.interface */ "../../../libs/services/quotes/models/carrier.interface.ts");
/* harmony import */ var _models_carrier_interface__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_models_carrier_interface__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models_carrier_interface__WEBPACK_IMPORTED_MODULE_6__) if(["quotesService","quotesDataTransfrom","mockQuotePerLeg","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models_carrier_interface__WEBPACK_IMPORTED_MODULE_6__[key]; }) }(__WEBPACK_IMPORT_KEY__));








/***/ }),

/***/ "../../../libs/services/quotes/models/carrier.interface.ts":
/*!********************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/quotes/models/carrier.interface.ts ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../../libs/services/quotes/models/quote-per-leg.interface.ts":
/*!**************************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/quotes/models/quote-per-leg.interface.ts ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../../libs/services/quotes/models/quote-per-leg.mock.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/quotes/models/quote-per-leg.mock.ts ***!
  \*********************************************************************************************************/
/*! exports provided: mockQuotePerLeg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockQuotePerLeg", function() { return mockQuotePerLeg; });
const mockQuotePerLeg = {
  id: 1,
  minPrice: 273,
  direct: false,
  carriers: ['Finnair'],
  origin: {
    PlaceId: 96474,
    IataCode: 'YYZ',
    Name: 'Toronto Pearson International',
    Type: 'Station',
    SkyscannerCode: 'YYZ',
    CityName: 'Toronto',
    CityId: 'YTOA',
    CountryName: 'Canada'
  },
  destination: {
    PlaceId: 50290,
    IataCode: 'EWR',
    Name: 'New York Newark',
    Type: 'Station',
    SkyscannerCode: 'EWR',
    CityName: 'New York',
    CityId: 'NYCA',
    CountryName: 'United States'
  }
};

/***/ }),

/***/ "../../../libs/services/quotes/models/quotes-per-trip.interface.ts":
/*!****************************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/quotes/models/quotes-per-trip.interface.ts ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../../libs/services/quotes/models/quotes-response.interface.ts":
/*!****************************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/quotes/models/quotes-response.interface.ts ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../../libs/services/quotes/quotes.data-transform.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/quotes/quotes.data-transform.ts ***!
  \*****************************************************************************************************/
/*! exports provided: quotesDataTransfrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quotesDataTransfrom", function() { return quotesDataTransfrom; });
/**
 * Convert quotes response to quotes used by the app
 * @param quotesResponse response got from quotes
 * @param isOutbound whether is search for is outbound or not
 * @return { QuotePerLegInterface[] }
 */
const transformQuotesResponseToQuotes = (quotesResponse, isOutbound = true) => {
  const carriers = quotesResponse.Carriers;
  const places = quotesResponse.Places;
  return quotesResponse.Quotes.map(quote => {
    const leg = isOutbound ? quote.OutboundLeg : quote.InboundLeg;
    return {
      id: quote.QuoteId,
      minPrice: quote.MinPrice,
      direct: quote.Direct,
      carriers: leg.CarrierIds.map(carrierId => {
        var _carriers$find;

        return (_carriers$find = carriers.find(carrier => carrier.CarrierId === carrierId)) === null || _carriers$find === void 0 ? void 0 : _carriers$find.Name;
      }),
      origin: places.find(place => place.PlaceId === leg.OriginId),
      destination: places.find(place => place.PlaceId === leg.DestinationId)
    };
  });
};

const quotesDataTransfrom = {
  transformQuotesResponseToQuotes
};

/***/ }),

/***/ "../../../libs/services/quotes/quotes.service.ts":
/*!**********************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/services/quotes/quotes.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: quotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quotesService", function() { return quotesService; });
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api.service */ "../../../libs/services/api/api.service.ts");


async function getQuotes(country, currency, locale, from, to, departDate, returnDate) {
  const url = new URL(`${"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0"}/${country}/${currency}/${locale}/${from}/${to}/${departDate}`);

  if (returnDate) {
    url.searchParams.set('query', returnDate);
  }

  const response = await fetch(url.toString(), {
    headers: Object(_api_api_service__WEBPACK_IMPORTED_MODULE_0__["getApiHeaders"])()
  });

  if (response.ok) {
    return response.json();
  }

  throw response;
}

const quotesService = {
  getQuotes
};

/***/ }),

/***/ "../../../libs/store/countries/countries.epics.ts":
/*!***********************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/countries/countries.epics.ts ***!
  \***********************************************************************************************/
/*! exports provided: countriesEpics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countriesEpics", function() { return countriesEpics; });
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-observable */ "../../../node_modules/redux-observable/lib/esm/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _white_label_airline_services_countries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @white-label-airline/services/countries */ "../../../libs/services/countries/index.ts");
/* harmony import */ var _language_language_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language/language.selectors */ "../../../libs/store/language/language.selectors.ts");
/* harmony import */ var _error_error_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../error/error.slice */ "../../../libs/store/error/error.slice.ts");
/* harmony import */ var _countries_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./countries.slice */ "../../../libs/store/countries/countries.slice.ts");








const getCountriesEpic = (action$, states$) => action$.pipe(Object(redux_observable__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_countries_slice__WEBPACK_IMPORTED_MODULE_6__["countriesSlice"].actions.getCountries.type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(states$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(_language_language_selectors__WEBPACK_IMPORTED_MODULE_4__["languageSelectors"].getLanguage))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(([_, language]) => {
  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(_white_label_airline_services_countries__WEBPACK_IMPORTED_MODULE_3__["countriesService"].getCountries(language)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => _countries_slice__WEBPACK_IMPORTED_MODULE_6__["countriesSlice"].actions.getCountriesSuccess(response.Countries)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_error_error_slice__WEBPACK_IMPORTED_MODULE_5__["errorSlice"].actions.handleError(error))));
}));

const countriesEpics = [getCountriesEpic];

/***/ }),

/***/ "../../../libs/store/countries/countries.selectors.ts":
/*!***************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/countries/countries.selectors.ts ***!
  \***************************************************************************************************/
/*! exports provided: countriesSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countriesSelectors", function() { return countriesSelectors; });
const getCountries = rootState => rootState.countries;

const countriesSelectors = {
  getCountries
};

/***/ }),

/***/ "../../../libs/store/countries/countries.slice.ts":
/*!***********************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/countries/countries.slice.ts ***!
  \***********************************************************************************************/
/*! exports provided: countriesSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countriesSlice", function() { return countriesSlice; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "../../../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const countriesSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'countries',
  initialState: [],
  reducers: {
    getCountries(state) {
      state = [];
    },

    getCountriesSuccess(_, action) {
      return action.payload;
    }

  }
});

/***/ }),

/***/ "../../../libs/store/countries/index.ts":
/*!*************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/countries/index.ts ***!
  \*************************************************************************************/
/*! exports provided: countriesSelectors, countriesSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _countries_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countries.selectors */ "../../../libs/store/countries/countries.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countriesSelectors", function() { return _countries_selectors__WEBPACK_IMPORTED_MODULE_0__["countriesSelectors"]; });

/* harmony import */ var _countries_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countries.slice */ "../../../libs/store/countries/countries.slice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countriesSlice", function() { return _countries_slice__WEBPACK_IMPORTED_MODULE_1__["countriesSlice"]; });




/***/ }),

/***/ "../../../libs/store/currencies/currencies.epics.ts":
/*!*************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/currencies/currencies.epics.ts ***!
  \*************************************************************************************************/
/*! exports provided: currenciesEpics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currenciesEpics", function() { return currenciesEpics; });
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-observable */ "../../../node_modules/redux-observable/lib/esm/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _white_label_airline_services_currencies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @white-label-airline/services/currencies */ "../../../libs/services/currencies/index.ts");
/* harmony import */ var _error_error_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error/error.slice */ "../../../libs/store/error/error.slice.ts");
/* harmony import */ var _currencies_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currencies.slice */ "../../../libs/store/currencies/currencies.slice.ts");







const getCurrenciesEpic = action$ => action$.pipe(Object(redux_observable__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_currencies_slice__WEBPACK_IMPORTED_MODULE_5__["currenciesSlice"].actions.getCurrencies.type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => {
  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(_white_label_airline_services_currencies__WEBPACK_IMPORTED_MODULE_3__["currenciesService"].getCurrencies()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => _currencies_slice__WEBPACK_IMPORTED_MODULE_5__["currenciesSlice"].actions.getCurrenciesSuccess(response.Currencies)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_error_error_slice__WEBPACK_IMPORTED_MODULE_4__["errorSlice"].actions.handleError(error))));
}));

const currenciesEpics = [getCurrenciesEpic];

/***/ }),

/***/ "../../../libs/store/currencies/currencies.selectors.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/currencies/currencies.selectors.ts ***!
  \*****************************************************************************************************/
/*! exports provided: currenciesSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currenciesSelectors", function() { return currenciesSelectors; });
const getCurrencies = rootState => rootState.currencies;

const currenciesSelectors = {
  getCurrencies
};

/***/ }),

/***/ "../../../libs/store/currencies/currencies.slice.ts":
/*!*************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/currencies/currencies.slice.ts ***!
  \*************************************************************************************************/
/*! exports provided: currenciesSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currenciesSlice", function() { return currenciesSlice; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "../../../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const currenciesSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'currencies',
  initialState: [],
  reducers: {
    getCurrencies(state) {
      state = [];
    },

    getCurrenciesSuccess(_, action) {
      return action.payload;
    }

  }
});

/***/ }),

/***/ "../../../libs/store/currencies/index.ts":
/*!**************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/currencies/index.ts ***!
  \**************************************************************************************/
/*! exports provided: currenciesSelectors, currenciesSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _currencies_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currencies.selectors */ "../../../libs/store/currencies/currencies.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currenciesSelectors", function() { return _currencies_selectors__WEBPACK_IMPORTED_MODULE_0__["currenciesSelectors"]; });

/* harmony import */ var _currencies_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currencies.slice */ "../../../libs/store/currencies/currencies.slice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currenciesSlice", function() { return _currencies_slice__WEBPACK_IMPORTED_MODULE_1__["currenciesSlice"]; });




/***/ }),

/***/ "../../../libs/store/error/error.slice.ts":
/*!***************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/error/error.slice.ts ***!
  \***************************************************************************************/
/*! exports provided: errorSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorSlice", function() { return errorSlice; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "../../../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const errorSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'error',
  initialState: null,
  reducers: {
    handleError(_, action) {
      return action.payload;
    },

    clearError() {
      return null;
    }

  }
});

/***/ }),

/***/ "../../../libs/store/error/index.ts":
/*!*********************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/error/index.ts ***!
  \*********************************************************************************/
/*! exports provided: errorSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.slice */ "../../../libs/store/error/error.slice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorSlice", function() { return _error_slice__WEBPACK_IMPORTED_MODULE_0__["errorSlice"]; });



/***/ }),

/***/ "../../../libs/store/index.ts":
/*!***************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/index.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countries */ "../../../libs/store/countries/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countriesSelectors", function() { return _countries__WEBPACK_IMPORTED_MODULE_0__["countriesSelectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countriesSlice", function() { return _countries__WEBPACK_IMPORTED_MODULE_0__["countriesSlice"]; });

/* harmony import */ var _currencies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currencies */ "../../../libs/store/currencies/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currenciesSelectors", function() { return _currencies__WEBPACK_IMPORTED_MODULE_1__["currenciesSelectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currenciesSlice", function() { return _currencies__WEBPACK_IMPORTED_MODULE_1__["currenciesSlice"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "../../../libs/store/error/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorSlice", function() { return _error__WEBPACK_IMPORTED_MODULE_2__["errorSlice"]; });

/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language */ "../../../libs/store/language/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "languageSelectors", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["languageSelectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "languageSlice", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["languageSlice"]; });

/* harmony import */ var _places__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./places */ "../../../libs/store/places/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _places__WEBPACK_IMPORTED_MODULE_4__) if(["countriesSelectors","countriesSlice","currenciesSelectors","currenciesSlice","errorSlice","languageSelectors","languageSlice","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _places__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quotes */ "../../../libs/store/quotes/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quotesSlice", function() { return _quotes__WEBPACK_IMPORTED_MODULE_5__["quotesSlice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quotesSelectors", function() { return _quotes__WEBPACK_IMPORTED_MODULE_5__["quotesSelectors"]; });

/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./root */ "../../../libs/store/root/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _root__WEBPACK_IMPORTED_MODULE_6__) if(["countriesSelectors","countriesSlice","currenciesSelectors","currenciesSlice","errorSlice","languageSelectors","languageSlice","quotesSlice","quotesSelectors","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _root__WEBPACK_IMPORTED_MODULE_6__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _models_fetch_status_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/fetch-status.enum */ "../../../libs/store/models/fetch-status.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FetchStatus", function() { return _models_fetch_status_enum__WEBPACK_IMPORTED_MODULE_7__["FetchStatus"]; });










/***/ }),

/***/ "../../../libs/store/language/index.ts":
/*!************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/language/index.ts ***!
  \************************************************************************************/
/*! exports provided: languageSelectors, languageSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _language_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language.selectors */ "../../../libs/store/language/language.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "languageSelectors", function() { return _language_selectors__WEBPACK_IMPORTED_MODULE_0__["languageSelectors"]; });

/* harmony import */ var _language_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language.slice */ "../../../libs/store/language/language.slice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "languageSlice", function() { return _language_slice__WEBPACK_IMPORTED_MODULE_1__["languageSlice"]; });




/***/ }),

/***/ "../../../libs/store/language/language.selectors.ts":
/*!*************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/language/language.selectors.ts ***!
  \*************************************************************************************************/
/*! exports provided: languageSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languageSelectors", function() { return languageSelectors; });
const getLanguage = rootState => rootState.language;

const languageSelectors = {
  getLanguage
};

/***/ }),

/***/ "../../../libs/store/language/language.slice.ts":
/*!*********************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/language/language.slice.ts ***!
  \*********************************************************************************************/
/*! exports provided: languageSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languageSlice", function() { return languageSlice; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "../../../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const languageSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'language',
  initialState: 'en-GB',
  reducers: {
    setLanguage(state, action) {
      state = action.payload;
    }

  }
});

/***/ }),

/***/ "../../../libs/store/models/fetch-status.enum.ts":
/*!**********************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/models/fetch-status.enum.ts ***!
  \**********************************************************************************************/
/*! exports provided: FetchStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchStatus", function() { return FetchStatus; });
let FetchStatus;

(function (FetchStatus) {
  FetchStatus[FetchStatus["Initial"] = 0] = "Initial";
  FetchStatus[FetchStatus["Loading"] = 1] = "Loading";
  FetchStatus[FetchStatus["Success"] = 2] = "Success";
  FetchStatus[FetchStatus["Error"] = 3] = "Error";
})(FetchStatus || (FetchStatus = {}));

/***/ }),

/***/ "../../../libs/store/places/index.ts":
/*!**********************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/places/index.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _places_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./places.selectors */ "../../../libs/store/places/places.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placesSelectors", function() { return _places_selectors__WEBPACK_IMPORTED_MODULE_0__["placesSelectors"]; });

/* harmony import */ var _places_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./places.slice */ "../../../libs/store/places/places.slice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placesSlice", function() { return _places_slice__WEBPACK_IMPORTED_MODULE_1__["placesSlice"]; });

/* harmony import */ var _places_state_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./places-state.interface */ "../../../libs/store/places/places-state.interface.ts");
/* harmony import */ var _places_state_interface__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_places_state_interface__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _places_state_interface__WEBPACK_IMPORTED_MODULE_2__) if(["placesSelectors","placesSlice","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _places_state_interface__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "../../../libs/store/places/places-state-initial.const.ts":
/*!*******************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/places/places-state-initial.const.ts ***!
  \*******************************************************************************************************/
/*! exports provided: initialPlacesState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialPlacesState", function() { return initialPlacesState; });
const initialPlacesState = {
  query: null,
  results: []
};

/***/ }),

/***/ "../../../libs/store/places/places-state.interface.ts":
/*!***************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/places/places-state.interface.ts ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../../libs/store/places/places.epics.ts":
/*!*****************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/places/places.epics.ts ***!
  \*****************************************************************************************/
/*! exports provided: placesEpics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placesEpics", function() { return placesEpics; });
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-observable */ "../../../node_modules/redux-observable/lib/esm/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _white_label_airline_services_places__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @white-label-airline/services/places */ "../../../libs/services/places/index.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ramda */ "../../../node_modules/ramda/es/index.js");
/* harmony import */ var _error_error_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../error/error.slice */ "../../../libs/store/error/error.slice.ts");
/* harmony import */ var _language_language_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../language/language.selectors */ "../../../libs/store/language/language.selectors.ts");
/* harmony import */ var _places_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./places.slice */ "../../../libs/store/places/places.slice.ts");









const getPlacesEpic = (action$, states$) => action$.pipe(Object(redux_observable__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_places_slice__WEBPACK_IMPORTED_MODULE_7__["placesSlice"].actions.getPlaces.type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(ramda__WEBPACK_IMPORTED_MODULE_4__["equals"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(states$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(_language_language_selectors__WEBPACK_IMPORTED_MODULE_6__["languageSelectors"].getLanguage))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(([action, language]) => {
  const {
    payload
  } = action;
  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(_white_label_airline_services_places__WEBPACK_IMPORTED_MODULE_3__["placesService"].getPlaces(payload.country, payload.currency, language, payload.query)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => _places_slice__WEBPACK_IMPORTED_MODULE_7__["placesSlice"].actions.getPlacesSuccess(response.Places)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_error_error_slice__WEBPACK_IMPORTED_MODULE_5__["errorSlice"].actions.handleError(error))));
}));

const placesEpics = [getPlacesEpic];

/***/ }),

/***/ "../../../libs/store/places/places.selectors.ts":
/*!*********************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/places/places.selectors.ts ***!
  \*********************************************************************************************/
/*! exports provided: placesSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placesSelectors", function() { return placesSelectors; });
const getPlaces = rootState => rootState.places;

const placesSelectors = {
  getPlaces
};

/***/ }),

/***/ "../../../libs/store/places/places.slice.ts":
/*!*****************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/places/places.slice.ts ***!
  \*****************************************************************************************/
/*! exports provided: placesSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placesSlice", function() { return placesSlice; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "../../../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _places_state_initial_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./places-state-initial.const */ "../../../libs/store/places/places-state-initial.const.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const placesSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'places',
  initialState: _places_state_initial_const__WEBPACK_IMPORTED_MODULE_1__["initialPlacesState"],
  reducers: {
    getPlaces: {
      reducer(_, action) {
        return {
          query: action.payload.query,
          results: []
        };
      },

      prepare({
        country,
        currency,
        query
      }) {
        return {
          payload: {
            country,
            currency,
            query
          }
        };
      }

    },

    getPlacesSuccess(state, action) {
      return _objectSpread(_objectSpread({}, state), {}, {
        results: action.payload
      });
    }

  }
});

/***/ }),

/***/ "../../../libs/store/quotes/index.ts":
/*!**********************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/quotes/index.ts ***!
  \**********************************************************************************/
/*! exports provided: quotesSlice, quotesSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quotes_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quotes.slice */ "../../../libs/store/quotes/quotes.slice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quotesSlice", function() { return _quotes_slice__WEBPACK_IMPORTED_MODULE_0__["quotesSlice"]; });

/* harmony import */ var _quotes_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotes.selectors */ "../../../libs/store/quotes/quotes.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quotesSelectors", function() { return _quotes_selectors__WEBPACK_IMPORTED_MODULE_1__["quotesSelectors"]; });




/***/ }),

/***/ "../../../libs/store/quotes/quotes-state-initial.const.ts":
/*!*******************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/quotes/quotes-state-initial.const.ts ***!
  \*******************************************************************************************************/
/*! exports provided: initialQuotesState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialQuotesState", function() { return initialQuotesState; });
/* harmony import */ var _models_fetch_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/fetch-status.enum */ "../../../libs/store/models/fetch-status.enum.ts");

const initialQuotesState = {
  quotes: {},
  fetchStatus: _models_fetch_status_enum__WEBPACK_IMPORTED_MODULE_0__["FetchStatus"].Initial
};

/***/ }),

/***/ "../../../libs/store/quotes/quotes.epics.ts":
/*!*****************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/quotes/quotes.epics.ts ***!
  \*****************************************************************************************/
/*! exports provided: quotesEpics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quotesEpics", function() { return quotesEpics; });
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-observable */ "../../../node_modules/redux-observable/lib/esm/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _white_label_airline_services_quotes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @white-label-airline/services/quotes */ "../../../libs/services/quotes/index.ts");
/* harmony import */ var _error_error_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error/error.slice */ "../../../libs/store/error/error.slice.ts");
/* harmony import */ var _language_language_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../language/language.selectors */ "../../../libs/store/language/language.selectors.ts");
/* harmony import */ var _quotes_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quotes.slice */ "../../../libs/store/quotes/quotes.slice.ts");








const getQuotesEpic = (action$, states$) => action$.pipe(Object(redux_observable__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_quotes_slice__WEBPACK_IMPORTED_MODULE_6__["quotesSlice"].actions.getQuotes.type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(states$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(_language_language_selectors__WEBPACK_IMPORTED_MODULE_5__["languageSelectors"].getLanguage))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(([action, language]) => {
  const {
    payload
  } = action;
  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(_white_label_airline_services_quotes__WEBPACK_IMPORTED_MODULE_3__["quotesService"].getQuotes(payload.country, payload.currency, language, payload.from, payload.to, payload.departDate, payload.returnDate)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => _white_label_airline_services_quotes__WEBPACK_IMPORTED_MODULE_3__["quotesDataTransfrom"].transformQuotesResponseToQuotes(response, payload.isOutbound)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(quotes => _quotes_slice__WEBPACK_IMPORTED_MODULE_6__["quotesSlice"].actions.getQuotesSuccess({
    quotes,
    isOutbound: payload.isOutbound
  })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([_error_error_slice__WEBPACK_IMPORTED_MODULE_4__["errorSlice"].actions.handleError(error), _quotes_slice__WEBPACK_IMPORTED_MODULE_6__["quotesSlice"].actions.getQuotesError()])));
}));

const quotesEpics = [getQuotesEpic];

/***/ }),

/***/ "../../../libs/store/quotes/quotes.selectors.ts":
/*!*********************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/quotes/quotes.selectors.ts ***!
  \*********************************************************************************************/
/*! exports provided: quotesSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quotesSelectors", function() { return quotesSelectors; });
const getQuotesState = rootState => rootState.quotes;

const getQuotesFetchStatus = rootState => getQuotesState(rootState).fetchStatus;

const getQuotes = rootState => getQuotesState(rootState).quotes;

const getOutboundQuotes = rootState => getQuotes(rootState).outbound;

const getInboundQuotes = rootState => getQuotes(rootState).inbound;

const quotesSelectors = {
  getQuotesFetchStatus,
  getQuotes,
  getOutboundQuotes,
  getInboundQuotes
};

/***/ }),

/***/ "../../../libs/store/quotes/quotes.slice.ts":
/*!*****************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/quotes/quotes.slice.ts ***!
  \*****************************************************************************************/
/*! exports provided: quotesSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quotesSlice", function() { return quotesSlice; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "../../../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _models_fetch_status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/fetch-status.enum */ "../../../libs/store/models/fetch-status.enum.ts");
/* harmony import */ var _quotes_state_initial_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quotes-state-initial.const */ "../../../libs/store/quotes/quotes-state-initial.const.ts");



const quotesSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'quotes',
  initialState: _quotes_state_initial_const__WEBPACK_IMPORTED_MODULE_2__["initialQuotesState"],
  reducers: {
    getQuotes: {
      reducer() {
        return {
          quotes: {},
          fetchStatus: _models_fetch_status_enum__WEBPACK_IMPORTED_MODULE_1__["FetchStatus"].Loading
        };
      },

      prepare(payload) {
        return {
          payload
        };
      }

    },

    getQuotesSuccess(state, action) {
      if (action.payload.isOutbound) {
        state.quotes.outbound = action.payload.quotes;
      } else {
        state.quotes.inbound = action.payload.quotes;
      }

      state.fetchStatus = _models_fetch_status_enum__WEBPACK_IMPORTED_MODULE_1__["FetchStatus"].Success;
    },

    getQuotesError(state) {
      state.fetchStatus = _models_fetch_status_enum__WEBPACK_IMPORTED_MODULE_1__["FetchStatus"].Error;
    }

  }
});

/***/ }),

/***/ "../../../libs/store/root/index.ts":
/*!********************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/root/index.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_state_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root-state.interface */ "../../../libs/store/root/root-state.interface.ts");
/* harmony import */ var _root_state_interface__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_root_state_interface__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _root_state_interface__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _root_state_interface__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root.store */ "../../../libs/store/root/root.store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configureAppStore", function() { return _root_store__WEBPACK_IMPORTED_MODULE_1__["configureAppStore"]; });




/***/ }),

/***/ "../../../libs/store/root/root-state.interface.ts":
/*!***********************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/root/root-state.interface.ts ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../../libs/store/root/root.epic.ts":
/*!************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/root/root.epic.ts ***!
  \************************************************************************************/
/*! exports provided: rootEpic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootEpic", function() { return rootEpic; });
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-observable */ "../../../node_modules/redux-observable/lib/esm/index.js");
/* harmony import */ var _countries_countries_epics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../countries/countries.epics */ "../../../libs/store/countries/countries.epics.ts");
/* harmony import */ var _currencies_currencies_epics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../currencies/currencies.epics */ "../../../libs/store/currencies/currencies.epics.ts");
/* harmony import */ var _places_places_epics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../places/places.epics */ "../../../libs/store/places/places.epics.ts");
/* harmony import */ var _quotes_quotes_epics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quotes/quotes.epics */ "../../../libs/store/quotes/quotes.epics.ts");





const rootEpic = Object(redux_observable__WEBPACK_IMPORTED_MODULE_0__["combineEpics"])(..._countries_countries_epics__WEBPACK_IMPORTED_MODULE_1__["countriesEpics"], ..._currencies_currencies_epics__WEBPACK_IMPORTED_MODULE_2__["currenciesEpics"], ..._places_places_epics__WEBPACK_IMPORTED_MODULE_3__["placesEpics"], ..._quotes_quotes_epics__WEBPACK_IMPORTED_MODULE_4__["quotesEpics"]);

/***/ }),

/***/ "../../../libs/store/root/root.reducer.ts":
/*!***************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/root/root.reducer.ts ***!
  \***************************************************************************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "../../../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _countries_countries_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../countries/countries.slice */ "../../../libs/store/countries/countries.slice.ts");
/* harmony import */ var _error_error_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error/error.slice */ "../../../libs/store/error/error.slice.ts");
/* harmony import */ var _language_language_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/language.slice */ "../../../libs/store/language/language.slice.ts");
/* harmony import */ var _currencies_currencies_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../currencies/currencies.slice */ "../../../libs/store/currencies/currencies.slice.ts");
/* harmony import */ var _places_places_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../places/places.slice */ "../../../libs/store/places/places.slice.ts");
/* harmony import */ var _quotes_quotes_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../quotes/quotes.slice */ "../../../libs/store/quotes/quotes.slice.ts");







const rootReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  countries: _countries_countries_slice__WEBPACK_IMPORTED_MODULE_1__["countriesSlice"].reducer,
  currencies: _currencies_currencies_slice__WEBPACK_IMPORTED_MODULE_4__["currenciesSlice"].reducer,
  language: _language_language_slice__WEBPACK_IMPORTED_MODULE_3__["languageSlice"].reducer,
  places: _places_places_slice__WEBPACK_IMPORTED_MODULE_5__["placesSlice"].reducer,
  error: _error_error_slice__WEBPACK_IMPORTED_MODULE_2__["errorSlice"].reducer,
  quotes: _quotes_quotes_slice__WEBPACK_IMPORTED_MODULE_6__["quotesSlice"].reducer
});

/***/ }),

/***/ "../../../libs/store/root/root.store.ts":
/*!*************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/store/root/root.store.ts ***!
  \*************************************************************************************/
/*! exports provided: configureAppStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureAppStore", function() { return configureAppStore; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "../../../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-observable */ "../../../node_modules/redux-observable/lib/esm/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "../../../node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root.reducer */ "../../../libs/store/root/root.reducer.ts");
/* harmony import */ var _root_epic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root.epic */ "../../../libs/store/root/root.epic.ts");





const epicMiddleware = Object(redux_observable__WEBPACK_IMPORTED_MODULE_1__["createEpicMiddleware"])();
function configureAppStore(preloadedState) {
  const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
    reducer: _root_reducer__WEBPACK_IMPORTED_MODULE_3__["rootReducer"],
    middleware: [epicMiddleware, redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a],
    preloadedState,
    devTools: true
  });
  epicMiddleware.run(_root_epic__WEBPACK_IMPORTED_MODULE_4__["rootEpic"]);
  return store;
}

/***/ }),

/***/ "../../../libs/ui/hooks/field-errors-touched.hooks.ts":
/*!***************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/hooks/field-errors-touched.hooks.ts ***!
  \***************************************************************************************************/
/*! exports provided: useFieldErrorTouched */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFieldErrorTouched", function() { return useFieldErrorTouched; });
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ "../../../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useFieldErrorTouched(name) {
  const {
    touched,
    errors,
    isSubmitting
  } = Object(formik__WEBPACK_IMPORTED_MODULE_0__["useFormikContext"])();
  const [fieldError, setFieldError] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const [fieldTouched, setFieldTouched] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setFieldError(Object(formik__WEBPACK_IMPORTED_MODULE_0__["getIn"])(errors, name));
  }, [errors, name]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setFieldTouched(Object(formik__WEBPACK_IMPORTED_MODULE_0__["getIn"])(touched, name));
  }, [touched, name]);
  return {
    fieldError,
    fieldTouched,
    isSubmitting
  };
}

/***/ }),

/***/ "../../../libs/ui/hooks/screen-size.hook.ts":
/*!*****************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/hooks/screen-size.hook.ts ***!
  \*****************************************************************************************/
/*! exports provided: IsScreenSizeSm, IsScreenSizeMd, IsScreenSizeLg, IsScreenSizeXl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsScreenSizeSm", function() { return IsScreenSizeSm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsScreenSizeMd", function() { return IsScreenSizeMd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsScreenSizeLg", function() { return IsScreenSizeLg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsScreenSizeXl", function() { return IsScreenSizeXl; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");

function IsScreenSizeSm() {
  const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["useTheme"])();
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["useMediaQuery"])(theme.breakpoints.down('sm'));
}
function IsScreenSizeMd() {
  const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["useTheme"])();
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["useMediaQuery"])(theme.breakpoints.between('sm', 'md'));
}
function IsScreenSizeLg() {
  const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["useTheme"])();
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["useMediaQuery"])(theme.breakpoints.between('md', 'lg'));
}
function IsScreenSizeXl() {
  const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["useTheme"])();
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["useMediaQuery"])(theme.breakpoints.up('lg'));
}

/***/ }),

/***/ "../../../libs/ui/loading-fetch-status/loading-fetch-status.tsx":
/*!*************************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/loading-fetch-status/loading-fetch-status.tsx ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _white_label_airline_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @white-label-airline/store */ "../../../libs/store/index.ts");
/* harmony import */ var _loading_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loading/loading */ "../../../libs/ui/loading/loading.tsx");




const LoadingFetchStatus = ({
  fetchStatus,
  children
}) => {
  return fetchStatus === _white_label_airline_store__WEBPACK_IMPORTED_MODULE_1__["FetchStatus"].Loading || fetchStatus === _white_label_airline_store__WEBPACK_IMPORTED_MODULE_1__["FetchStatus"].Initial ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loading_loading__WEBPACK_IMPORTED_MODULE_2__["default"], null) :
  /*#__PURE__*/
  // eslint-disable-next-line react/jsx-no-useless-fragment
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children);
};

/* harmony default export */ __webpack_exports__["default"] = (LoadingFetchStatus);

/***/ }),

/***/ "../../../libs/ui/loading/index.ts":
/*!********************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/loading/index.ts ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading */ "../../../libs/ui/loading/loading.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_loading__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../../../libs/ui/loading/loading.tsx":
/*!***********************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/loading/loading.tsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "../../../node_modules/react-i18next/dist/es/index.js");




const Loading = () => {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    textAlign: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CircularProgress"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "subtitle1"
  }, t('loading')));
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "../../../libs/ui/models/feature-toggle-names.enum.ts":
/*!***************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/models/feature-toggle-names.enum.ts ***!
  \***************************************************************************************************/
/*! exports provided: FeatureToggleNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureToggleNames", function() { return FeatureToggleNames; });
let FeatureToggleNames;

(function (FeatureToggleNames) {
  FeatureToggleNames["ShowCountry"] = "ShowCountry";
  FeatureToggleNames["ShowCurrency"] = "ShowCurrency";
})(FeatureToggleNames || (FeatureToggleNames = {}));

/***/ }),

/***/ "../../../libs/ui/quotes/components/no-flights-found/no-flight-found.tsx":
/*!**********************************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/quotes/components/no-flights-found/no-flight-found.tsx ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "../../../node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");




const NoFlightsFound = ({
  modifySearch
}) => {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    textAlign: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4",
    gutterBottom: true
  }, t('quotes.noFlightsFound.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1",
    gutterBottom: true
  }, t('quotes.noFlightsFound.description')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mt: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "primary",
    variant: "contained",
    size: "large",
    onClick: () => {
      modifySearch && modifySearch();
    }
  }, t('quotes.modifySearch'))));
};

/* harmony default export */ __webpack_exports__["default"] = (NoFlightsFound);

/***/ }),

/***/ "../../../libs/ui/quotes/components/quote-details/quote-details.tsx":
/*!*****************************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/quotes/components/quote-details/quote-details.tsx ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");



const QuoteDetails = ({
  quote
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, quote.origin.CityName, " (", quote.origin.IataCode, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, quote.destination.CityName, " (", quote.destination.IataCode, ")"));
};

/* harmony default export */ __webpack_exports__["default"] = (QuoteDetails);

/***/ }),

/***/ "../../../libs/ui/quotes/components/quote-header/quote-header.tsx":
/*!***************************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/quotes/components/quote-header/quote-header.tsx ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "../../../node_modules/react-i18next/dist/es/index.js");




const QuoteHeader = ({
  quote,
  language,
  currency
}) => {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "subtitle1"
  }, quote.carriers.join(', '))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "subtitle2"
  }, quote.origin.IataCode, " - ", quote.destination.IataCode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "subtitle2"
  }, t(quote.direct ? 'quotes.direct' : 'quotes.layover'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, new Intl.NumberFormat(language, {
    style: 'currency',
    currency
  }).format(quote.minPrice))));
};

/* harmony default export */ __webpack_exports__["default"] = (QuoteHeader);

/***/ }),

/***/ "../../../libs/ui/quotes/components/quote/quote.tsx":
/*!*************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/quotes/components/quote/quote.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "../../../node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "../../../node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _quote_details_quote_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quote-details/quote-details */ "../../../libs/ui/quotes/components/quote-details/quote-details.tsx");
/* harmony import */ var _quote_header_quote_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../quote-header/quote-header */ "../../../libs/ui/quotes/components/quote-header/quote-header.tsx");







const Quote = ({
  quote,
  language,
  currency
}) => {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    button: true,
    onClick: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_quote_header_quote_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    quote: quote,
    language: language,
    currency: currency
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemSecondaryAction"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    edge: "end",
    "aria-label": "view details",
    onClick: handleClick
  }, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_2___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3___default.a, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    in: open,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_quote_details_quote_details__WEBPACK_IMPORTED_MODULE_4__["default"], {
    quote: quote
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Quote);

/***/ }),

/***/ "../../../libs/ui/quotes/components/quotes-list/quotes-list.tsx":
/*!*************************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/quotes/components/quotes-list/quotes-list.tsx ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _quote_quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote/quote */ "../../../libs/ui/quotes/components/quote/quote.tsx");
/* harmony import */ var _no_flights_found_no_flight_found__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../no-flights-found/no-flight-found */ "../../../libs/ui/quotes/components/no-flights-found/no-flight-found.tsx");





const QuotesList = ({
  quotes,
  currency,
  language,
  modifySearch
}) => {
  return quotes && quotes.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, quotes.map(quote => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_quote_quote__WEBPACK_IMPORTED_MODULE_2__["default"], {
      quote: quote,
      currency: currency,
      language: language
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], null));
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_no_flights_found_no_flight_found__WEBPACK_IMPORTED_MODULE_3__["default"], {
    modifySearch: modifySearch
  });
};

/* harmony default export */ __webpack_exports__["default"] = (QuotesList);

/***/ }),

/***/ "../../../libs/ui/quotes/index.ts":
/*!*******************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/quotes/index.ts ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quotes */ "../../../libs/ui/quotes/quotes.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_quotes__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../../../libs/ui/quotes/quotes.props.ts":
/*!**************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/quotes/quotes.props.ts ***!
  \**************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var _white_label_airline_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @white-label-airline/store */ "../../../libs/store/index.ts");

const mapStateToProps = state => {
  return {
    quotes: _white_label_airline_store__WEBPACK_IMPORTED_MODULE_0__["quotesSelectors"].getQuotes(state),
    language: _white_label_airline_store__WEBPACK_IMPORTED_MODULE_0__["languageSelectors"].getLanguage(state),
    quotesFetchStatus: _white_label_airline_store__WEBPACK_IMPORTED_MODULE_0__["quotesSelectors"].getQuotesFetchStatus(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getQuotes(getQuotesPayload) {
      dispatch(_white_label_airline_store__WEBPACK_IMPORTED_MODULE_0__["quotesSlice"].actions.getQuotes(getQuotesPayload));
    }

  };
};

/***/ }),

/***/ "../../../libs/ui/quotes/quotes.tsx":
/*!*********************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/quotes/quotes.tsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var _loading_fetch_status_loading_fetch_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loading-fetch-status/loading-fetch-status */ "../../../libs/ui/loading-fetch-status/loading-fetch-status.tsx");
/* harmony import */ var _quotes_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quotes.props */ "../../../libs/ui/quotes/quotes.props.ts");
/* harmony import */ var _components_quotes_list_quotes_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/quotes-list/quotes-list */ "../../../libs/ui/quotes/components/quotes-list/quotes-list.tsx");






const Quotes = ({
  quotes,
  getQuotesPayload,
  modifySearch,
  language,
  getQuotes,
  quotesFetchStatus
}) => {
  const [isOutbound, setIsOutbound] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (getQuotesPayload) {
      getQuotesPayload.isOutbound = isOutbound;
      getQuotes(getQuotesPayload);
    }
  }, [getQuotes, getQuotesPayload, isOutbound]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loading_fetch_status_loading_fetch_status__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fetchStatus: quotesFetchStatus
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_quotes_list_quotes_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
    language: language,
    currency: getQuotesPayload === null || getQuotesPayload === void 0 ? void 0 : getQuotesPayload.currency,
    modifySearch: modifySearch,
    quotes: isOutbound ? quotes.outbound : quotes.inbound
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(_quotes_props__WEBPACK_IMPORTED_MODULE_3__["mapStateToProps"], _quotes_props__WEBPACK_IMPORTED_MODULE_3__["mapDispatchToProps"])(Quotes));

/***/ }),

/***/ "../../../libs/ui/search-form/components/country/country.props.ts":
/*!***************************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/search-form/components/country/country.props.ts ***!
  \***************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var _white_label_airline_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @white-label-airline/store */ "../../../libs/store/index.ts");

const mapStateToProps = state => {
  return {
    countries: _white_label_airline_store__WEBPACK_IMPORTED_MODULE_0__["countriesSelectors"].getCountries(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCountries() {
      dispatch(_white_label_airline_store__WEBPACK_IMPORTED_MODULE_0__["countriesSlice"].actions.getCountries());
    }

  };
};

/***/ }),

/***/ "../../../libs/ui/search-form/components/country/country.tsx":
/*!**********************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/search-form/components/country/country.tsx ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "../../../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var formik_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik-material-ui-lab */ "../../../node_modules/formik-material-ui-lab/dist/formik-material-ui.es6.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "../../../node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _hooks_field_errors_touched_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/field-errors-touched.hooks */ "../../../libs/ui/hooks/field-errors-touched.hooks.ts");
/* harmony import */ var _country_props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./country.props */ "../../../libs/ui/search-form/components/country/country.props.ts");









const Country = ({
  getCountries,
  countries,
  name,
  label
}) => {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
  const {
    fieldError,
    fieldTouched
  } = Object(_hooks_field_errors_touched_hooks__WEBPACK_IMPORTED_MODULE_6__["useFieldErrorTouched"])(name);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!countries || !countries.length) {
      getCountries();
    }
  }, [getCountries, countries]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    loading: !countries || !countries.length,
    component: formik_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["Autocomplete"],
    options: countries,
    getOptionLabel: option => option.Name || option.Code,
    getOptionSelected: (option, value) => option.Code === value.Code,
    name: name,
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], Object.assign({}, params, {
      label: label,
      error: fieldTouched && !!fieldError,
      helperText: t(fieldError, {
        field: label
      })
    }))
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(_country_props__WEBPACK_IMPORTED_MODULE_7__["mapStateToProps"], _country_props__WEBPACK_IMPORTED_MODULE_7__["mapDispatchToProps"])(Country));

/***/ }),

/***/ "../../../libs/ui/search-form/components/currency/currency.props.ts":
/*!*****************************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/search-form/components/currency/currency.props.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var _white_label_airline_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @white-label-airline/store */ "../../../libs/store/index.ts");

const mapStateToProps = state => {
  return {
    currencies: _white_label_airline_store__WEBPACK_IMPORTED_MODULE_0__["currenciesSelectors"].getCurrencies(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCurrencies() {
      dispatch(_white_label_airline_store__WEBPACK_IMPORTED_MODULE_0__["currenciesSlice"].actions.getCurrencies());
    }

  };
};

/***/ }),

/***/ "../../../libs/ui/search-form/components/currency/currency.tsx":
/*!************************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/search-form/components/currency/currency.tsx ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextField */ "../../../node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var formik_material_ui_lab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik-material-ui-lab */ "../../../node_modules/formik-material-ui-lab/dist/formik-material-ui.es6.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "../../../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "../../../node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _hooks_field_errors_touched_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/field-errors-touched.hooks */ "../../../libs/ui/hooks/field-errors-touched.hooks.ts");
/* harmony import */ var _currency_props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./currency.props */ "../../../libs/ui/search-form/components/currency/currency.props.ts");









const Currency = ({
  currencies,
  name,
  label,
  getCurrencies
}) => {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
  const {
    fieldError,
    fieldTouched
  } = Object(_hooks_field_errors_touched_hooks__WEBPACK_IMPORTED_MODULE_6__["useFieldErrorTouched"])(name);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!currencies || !currencies.length) {
      getCurrencies();
    }
  }, [currencies, getCurrencies]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
    loading: !currencies || !currencies.length,
    component: formik_material_ui_lab__WEBPACK_IMPORTED_MODULE_2__["Autocomplete"],
    options: currencies,
    getOptionLabel: option => option.Code,
    getOptionSelected: (option, value) => option.Code === value.Code,
    name: name,
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, params, {
      label: label,
      error: fieldTouched && !!fieldError,
      helperText: t(fieldError, {
        field: label
      })
    }))
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(_currency_props__WEBPACK_IMPORTED_MODULE_7__["mapStateToProps"], _currency_props__WEBPACK_IMPORTED_MODULE_7__["mapDispatchToProps"])(Currency));

/***/ }),

/***/ "../../../libs/ui/search-form/components/place/place.props.ts":
/*!***********************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/search-form/components/place/place.props.ts ***!
  \***********************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var _white_label_airline_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @white-label-airline/store */ "../../../libs/store/index.ts");

const mapStateToProps = state => {
  return {
    places: _white_label_airline_store__WEBPACK_IMPORTED_MODULE_0__["placesSelectors"].getPlaces(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getPlaces({
      country,
      currency,
      query
    }) {
      dispatch(_white_label_airline_store__WEBPACK_IMPORTED_MODULE_0__["placesSlice"].actions.getPlaces({
        country: country.Code,
        currency: currency.Code,
        query
      }));
    }

  };
};

/***/ }),

/***/ "../../../libs/ui/search-form/components/place/place.tsx":
/*!******************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/search-form/components/place/place.tsx ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextField */ "../../../node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var formik_material_ui_lab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik-material-ui-lab */ "../../../node_modules/formik-material-ui-lab/dist/formik-material-ui.es6.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "../../../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "../../../node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _hooks_field_errors_touched_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/field-errors-touched.hooks */ "../../../libs/ui/hooks/field-errors-touched.hooks.ts");
/* harmony import */ var _place_props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./place.props */ "../../../libs/ui/search-form/components/place/place.props.ts");









const Place = ({
  places,
  country,
  currency,
  getPlaces,
  invalidPlaces,
  name,
  label
}) => {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
  const [query, setQuery] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [filteredPlaces, setFilteredPlaces] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    fieldError,
    fieldTouched,
    isSubmitting
  } = Object(_hooks_field_errors_touched_hooks__WEBPACK_IMPORTED_MODULE_6__["useFieldErrorTouched"])(name);

  const handleChange = event => {
    const element = event.currentTarget;
    const userInput = element.value;

    if (userInput.length >= 3 && query !== userInput) {
      getPlaces({
        country: country,
        currency: currency,
        query: userInput
      });
      setQuery(userInput);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (places.query === query) {
      if (invalidPlaces && invalidPlaces.length) {
        const invalidPlacesIds = invalidPlaces.map(place => place.PlaceId);
        setFilteredPlaces(places.results.filter(place => !invalidPlacesIds.includes(place.PlaceId)));
      } else {
        setFilteredPlaces(places.results);
      }
    }
  }, [query, places, invalidPlaces]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
    loading: !filteredPlaces || !filteredPlaces.length,
    component: formik_material_ui_lab__WEBPACK_IMPORTED_MODULE_2__["Autocomplete"],
    disabled: !currency || !country || isSubmitting,
    options: filteredPlaces,
    getOptionLabel: option => option.PlaceName ? `${option.PlaceName} (${option.PlaceId})` : option.PlaceId,
    getOptionSelected: (option, value) => (option === null || option === void 0 ? void 0 : option.PlaceId) === (value === null || value === void 0 ? void 0 : value.PlaceId),
    name: name,
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, params, {
      label: label,
      onChange: handleChange,
      error: fieldTouched && !!fieldError,
      helperText: t(fieldError, {
        field: label
      })
    }))
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(_place_props__WEBPACK_IMPORTED_MODULE_7__["mapStateToProps"], _place_props__WEBPACK_IMPORTED_MODULE_7__["mapDispatchToProps"])(Place));

/***/ }),

/***/ "../../../libs/ui/search-form/components/trip-type/trip-type.tsx":
/*!**************************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/search-form/components/trip-type/trip-type.tsx ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "../../../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "../../../node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "../../../node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "../../../node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik-material-ui */ "../../../node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "../../../node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_trip_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/trip-type.enum */ "../../../libs/ui/search-form/models/trip-type.enum.ts");








let count = 0;

const TripType = props => {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    htmlFor: props.name + count++
  }, props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["Select"],
    id: props.name + count++,
    name: props.name
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: _models_trip_type_enum__WEBPACK_IMPORTED_MODULE_7__["TripTypeEnum"].OneWay
  }, t(_models_trip_type_enum__WEBPACK_IMPORTED_MODULE_7__["TripTypeEnum"].OneWay)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: _models_trip_type_enum__WEBPACK_IMPORTED_MODULE_7__["TripTypeEnum"].RoundTrip
  }, t(_models_trip_type_enum__WEBPACK_IMPORTED_MODULE_7__["TripTypeEnum"].RoundTrip))));
};

/* harmony default export */ __webpack_exports__["default"] = (TripType);

/***/ }),

/***/ "../../../libs/ui/search-form/index.ts":
/*!************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/search-form/index.ts ***!
  \************************************************************************************/
/*! exports provided: default, SearchFormInterface, TripTypeEnum, searchFormDataTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-form */ "../../../libs/ui/search-form/search-form.tsx");
/* harmony import */ var _models_search_form_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/search-form.interface */ "../../../libs/ui/search-form/models/search-form.interface.ts");
/* harmony import */ var _models_search_form_interface__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_search_form_interface__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchFormInterface", function() { return _models_search_form_interface__WEBPACK_IMPORTED_MODULE_1__["SearchFormInterface"]; });

/* harmony import */ var _models_trip_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/trip-type.enum */ "../../../libs/ui/search-form/models/trip-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TripTypeEnum", function() { return _models_trip_type_enum__WEBPACK_IMPORTED_MODULE_2__["TripTypeEnum"]; });

/* harmony import */ var _search_form_data_transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-form.data-transform */ "../../../libs/ui/search-form/search-form.data-transform.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchFormDataTransform", function() { return _search_form_data_transform__WEBPACK_IMPORTED_MODULE_3__["searchFormDataTransform"]; });





/* harmony default export */ __webpack_exports__["default"] = (_search_form__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../../../libs/ui/search-form/models/search-form-default.const.ts":
/*!***************************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/search-form/models/search-form-default.const.ts ***!
  \***************************************************************************************************************/
/*! exports provided: defaultSearchForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSearchForm", function() { return defaultSearchForm; });
/* harmony import */ var _trip_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trip-type.enum */ "../../../libs/ui/search-form/models/trip-type.enum.ts");

const defaultSearchForm = {
  country: null,
  tripType: _trip_type_enum__WEBPACK_IMPORTED_MODULE_0__["TripTypeEnum"].OneWay,
  currency: null,
  from: null,
  departDate: null,
  to: null,
  returnDate: null
};

/***/ }),

/***/ "../../../libs/ui/search-form/models/search-form.interface.ts":
/*!***********************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/search-form/models/search-form.interface.ts ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../../libs/ui/search-form/models/search-form.schema.ts":
/*!********************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/search-form/models/search-form.schema.ts ***!
  \********************************************************************************************************/
/*! exports provided: searchFormSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchFormSchema", function() { return searchFormSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "../../../node_modules/yup/es/index.js");
/* harmony import */ var _trip_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trip-type.enum */ "../../../libs/ui/search-form/models/trip-type.enum.ts");


const searchFormSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  country: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().nullable().required('messages.required').typeError('messages.required'),
  tripType: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable().required('messages.required').oneOf([_trip_type_enum__WEBPACK_IMPORTED_MODULE_1__["TripTypeEnum"].OneWay, _trip_type_enum__WEBPACK_IMPORTED_MODULE_1__["TripTypeEnum"].RoundTrip]).typeError('messages.required'),
  currency: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().nullable().required('messages.required').typeError('messages.required'),
  from: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().nullable().required('messages.required').typeError('messages.required'),
  departDate: yup__WEBPACK_IMPORTED_MODULE_0__["date"]().required('messages.required'),
  to: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().nullable().required('messages.required').typeError('messages.required'),
  returnDate: yup__WEBPACK_IMPORTED_MODULE_0__["date"]().nullable().when('tripType', {
    is: _trip_type_enum__WEBPACK_IMPORTED_MODULE_1__["TripTypeEnum"].RoundTrip,
    then: yup__WEBPACK_IMPORTED_MODULE_0__["date"]().required('messages.required')
  })
});

/***/ }),

/***/ "../../../libs/ui/search-form/models/trip-type.enum.ts":
/*!****************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/search-form/models/trip-type.enum.ts ***!
  \****************************************************************************************************/
/*! exports provided: TripTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripTypeEnum", function() { return TripTypeEnum; });
let TripTypeEnum;

(function (TripTypeEnum) {
  TripTypeEnum["OneWay"] = "search.oneWay";
  TripTypeEnum["RoundTrip"] = "search.roundTrip";
})(TripTypeEnum || (TripTypeEnum = {}));

/***/ }),

/***/ "../../../libs/ui/search-form/search-form.data-transform.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/search-form/search-form.data-transform.ts ***!
  \*********************************************************************************************************/
/*! exports provided: searchFormDataTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchFormDataTransform", function() { return searchFormDataTransform; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "../../../node_modules/date-fns/esm/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "../../../node_modules/ramda/es/index.js");
/* harmony import */ var _models_search_form_default_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/search-form-default.const */ "../../../libs/ui/search-form/models/search-form-default.const.ts");
/* harmony import */ var _models_trip_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/trip-type.enum */ "../../../libs/ui/search-form/models/trip-type.enum.ts");




const dateFormat = 'yyyy-MM-dd';

const transformSearchFormValuesToGetQuotesPayload = searchForm => {
  const getQuotesPayload = {
    country: searchForm.country.Code,
    currency: searchForm.currency.Code,
    from: searchForm.from.PlaceId,
    to: searchForm.to.PlaceId,
    departDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(searchForm.departDate, dateFormat)
  };

  if (searchForm.tripType === _models_trip_type_enum__WEBPACK_IMPORTED_MODULE_3__["TripTypeEnum"].RoundTrip && searchForm.returnDate) {
    getQuotesPayload['returnDate'] = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(searchForm.returnDate, dateFormat);
  }

  return getQuotesPayload;
};

const transfromGetQuotesPayloadToSearchForm = getQuotesPayload => {
  return Object(ramda__WEBPACK_IMPORTED_MODULE_1__["mergeDeepRight"])(_models_search_form_default_const__WEBPACK_IMPORTED_MODULE_2__["defaultSearchForm"], {
    country: {
      Code: getQuotesPayload.country
    },
    currency: {
      Code: getQuotesPayload.currency
    },
    from: {
      PlaceId: getQuotesPayload.from
    },
    to: {
      PlaceId: getQuotesPayload.to
    },
    departDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["parse"])(getQuotesPayload.departDate, dateFormat, new Date()),
    returnDate: getQuotesPayload.returnDate && Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["parse"])(getQuotesPayload.returnDate, dateFormat, new Date()),
    tripType: getQuotesPayload.returnDate ? _models_trip_type_enum__WEBPACK_IMPORTED_MODULE_3__["TripTypeEnum"].RoundTrip : _models_trip_type_enum__WEBPACK_IMPORTED_MODULE_3__["TripTypeEnum"].OneWay
  });
};

const searchFormDataTransform = {
  transformSearchFormValuesToGetQuotesPayload,
  transfromGetQuotesPayloadToSearchForm
};

/***/ }),

/***/ "../../../libs/ui/search-form/search-form.tsx":
/*!*******************************************************************************************!*\
  !*** /Users/emilyxiong/Documents/white-label-airline/libs/ui/search-form/search-form.tsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "../../../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "../../../node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var formik_material_ui_pickers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik-material-ui-pickers */ "../../../node_modules/formik-material-ui-pickers/dist/formik-material-ui-pickers.es6.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @date-io/date-fns */ "../../../node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/pickers */ "../../../node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var react_feature_toggles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-feature-toggles */ "../../../node_modules/react-feature-toggles/lib/index.js");
/* harmony import */ var react_feature_toggles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_feature_toggles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_screen_size_hook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/screen-size.hook */ "../../../libs/ui/hooks/screen-size.hook.ts");
/* harmony import */ var _models_feature_toggle_names_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/feature-toggle-names.enum */ "../../../libs/ui/models/feature-toggle-names.enum.ts");
/* harmony import */ var _components_country_country__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/country/country */ "../../../libs/ui/search-form/components/country/country.tsx");
/* harmony import */ var _components_currency_currency__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/currency/currency */ "../../../libs/ui/search-form/components/currency/currency.tsx");
/* harmony import */ var _components_place_place__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/place/place */ "../../../libs/ui/search-form/components/place/place.tsx");
/* harmony import */ var _models_search_form_default_const__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./models/search-form-default.const */ "../../../libs/ui/search-form/models/search-form-default.const.ts");
/* harmony import */ var _components_trip_type_trip_type__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/trip-type/trip-type */ "../../../libs/ui/search-form/components/trip-type/trip-type.tsx");
/* harmony import */ var _models_search_form_schema__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./models/search-form.schema */ "../../../libs/ui/search-form/models/search-form.schema.ts");
/* harmony import */ var _models_trip_type_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./models/trip-type.enum */ "../../../libs/ui/search-form/models/trip-type.enum.ts");


















const SearchForm = ({
  bottonProps,
  values,
  errors,
  setSubmitting
}) => {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
  const isScreenSizeSm = Object(_hooks_screen_size_hook__WEBPACK_IMPORTED_MODULE_8__["IsScreenSizeSm"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setSubmitting(false);
  }, [setSubmitting]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_6__["MuiPickersUtilsProvider"], {
    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feature_toggles__WEBPACK_IMPORTED_MODULE_7__["FeatureToggle"], {
    featureName: _models_feature_toggle_names_enum__WEBPACK_IMPORTED_MODULE_9__["FeatureToggleNames"].ShowCountry
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 6,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_country_country__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "country",
    label: t('search.country')
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feature_toggles__WEBPACK_IMPORTED_MODULE_7__["FeatureToggle"], {
    featureName: _models_feature_toggle_names_enum__WEBPACK_IMPORTED_MODULE_9__["FeatureToggleNames"].ShowCurrency
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 6,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_currency_currency__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "currency",
    label: t('search.currency')
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 6,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_trip_type_trip_type__WEBPACK_IMPORTED_MODULE_14__["default"], {
    name: "tripType",
    label: t('search.tripType')
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 6,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_place_place__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: t('search.from'),
    name: "from",
    country: values.country,
    currency: values.currency
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 6,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_place_place__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: t('search.to'),
    name: "to",
    country: values.country,
    currency: values.currency,
    invalidPlaces: values.from && [values.from]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 6,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    fullWidth: true,
    component: formik_material_ui_pickers__WEBPACK_IMPORTED_MODULE_4__["KeyboardDatePicker"],
    name: "departDate",
    label: t('search.departDate'),
    minDate: Date.now(),
    helperText: t(Object(formik__WEBPACK_IMPORTED_MODULE_1__["getIn"])(errors, 'departDate'), {
      field: t('search.departDate')
    })
  })), values.tripType === _models_trip_type_enum__WEBPACK_IMPORTED_MODULE_16__["TripTypeEnum"].RoundTrip && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 6,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    fullWidth: true,
    component: formik_material_ui_pickers__WEBPACK_IMPORTED_MODULE_4__["KeyboardDatePicker"],
    name: "returnDate",
    label: t('search.returnDate'),
    minDate: values.departDate,
    minDateMessage: t('messages.minDate', {
      departDate: t('search.departDate'),
      returnDate: t('search.returnDate')
    }),
    helperText: t(Object(formik__WEBPACK_IMPORTED_MODULE_1__["getIn"])(errors, 'returnDate'), {
      field: t('search.returnDate')
    })
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mt: 3,
    display: "flex",
    justifyContent: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], Object.assign({
    variant: "contained",
    type: "submit",
    fullWidth: isScreenSizeSm,
    color: "primary",
    size: "large"
  }, bottonProps), t('search.search')))));
};

const SearchFormik = Object(formik__WEBPACK_IMPORTED_MODULE_1__["withFormik"])({
  displayName: 'SearchForm',
  enableReinitialize: true,
  mapPropsToValues: props => {
    return props.initSearchForm || _models_search_form_default_const__WEBPACK_IMPORTED_MODULE_13__["defaultSearchForm"];
  },
  validationSchema: _models_search_form_schema__WEBPACK_IMPORTED_MODULE_15__["searchFormSchema"],
  handleSubmit: (searchForm, {
    props,
    setSubmitting
  }) => {
    props.submitSearch(searchForm, {
      setSubmitting
    });
  }
})(SearchForm);
/* harmony default export */ __webpack_exports__["default"] = (SearchFormik);

/***/ }),

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _white_label_airline_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @white-label-airline/store */ "../../../libs/store/index.ts");
/* harmony import */ var _white_label_airline_services_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @white-label-airline/services/i18n */ "../../../libs/services/i18n/index.ts");
/* harmony import */ var react_feature_toggles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feature-toggles */ "../../../node_modules/react-feature-toggles/lib/index.js");
/* harmony import */ var react_feature_toggles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_feature_toggles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _white_label_airline_ui_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @white-label-airline/ui/loading */ "../../../libs/ui/loading/index.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./app/routes.tsx");
/* harmony import */ var _features_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features.const */ "./app/features.const.ts");









Object(_white_label_airline_services_i18n__WEBPACK_IMPORTED_MODULE_3__["setI18n"])('./assets/i18n/{{lng}}.json');
const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feature_toggles__WEBPACK_IMPORTED_MODULE_4__["FeatureToggleProvider"], {
    featureToggleList: _features_const__WEBPACK_IMPORTED_MODULE_8__["features"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_0__["Provider"], {
    store: Object(_white_label_airline_store__WEBPACK_IMPORTED_MODULE_2__["configureAppStore"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: _white_label_airline_ui_loading__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_7__["default"], null)))));
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./app/features.const.ts":
/*!*******************************!*\
  !*** ./app/features.const.ts ***!
  \*******************************/
/*! exports provided: features */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "features", function() { return features; });
/* harmony import */ var _white_label_airline_ui_models_feature_toggle_names_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @white-label-airline/ui/models/feature-toggle-names.enum */ "../../../libs/ui/models/feature-toggle-names.enum.ts");

const features = {
  [_white_label_airline_ui_models_feature_toggle_names_enum__WEBPACK_IMPORTED_MODULE_0__["FeatureToggleNames"].ShowCountry]: true,
  [_white_label_airline_ui_models_feature_toggle_names_enum__WEBPACK_IMPORTED_MODULE_0__["FeatureToggleNames"].ShowCurrency]: true
};

/***/ }),

/***/ "./app/routes.tsx":
/*!************************!*\
  !*** ./app/routes.tsx ***!
  \************************/
/*! exports provided: Routes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routes", function() { return Routes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_search_search_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/search/search-page */ "./pages/search/search-page.tsx");
/* harmony import */ var _pages_quotes_quotes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/quotes/quotes-page */ "./pages/quotes/quotes-page.tsx");




const Routes = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/quotes"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_quotes_quotes_page__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_search_search_page__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
};
/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_app__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('root'));

/***/ }),

/***/ "./pages/quotes/quotes-page.tsx":
/*!**************************************!*\
  !*** ./pages/quotes/quotes-page.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _white_label_airline_ui_quotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @white-label-airline/ui/quotes */ "../../../libs/ui/quotes/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "../../../node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);





const QuotesPage = () => {
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const {
    search
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])();
  const [queryParams, setQueryParams] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const modifySearch = () => {
    history.push({
      pathname: '/search',
      search: search
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setQueryParams(Object(query_string__WEBPACK_IMPORTED_MODULE_3__["parse"])(search));
  }, [search]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_white_label_airline_ui_quotes__WEBPACK_IMPORTED_MODULE_1__["default"], {
    modifySearch: modifySearch,
    getQuotesPayload: queryParams
  });
};

/* harmony default export */ __webpack_exports__["default"] = (QuotesPage);

/***/ }),

/***/ "./pages/search/country.const.ts":
/*!***************************************!*\
  !*** ./pages/search/country.const.ts ***!
  \***************************************/
/*! exports provided: country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "country", function() { return country; });
const country = {
  Code: 'CA',
  Name: 'Canada'
};

/***/ }),

/***/ "./pages/search/search-form-init.const.ts":
/*!************************************************!*\
  !*** ./pages/search/search-form-init.const.ts ***!
  \************************************************/
/*! exports provided: initSearchForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSearchForm", function() { return initSearchForm; });
/* harmony import */ var _white_label_airline_ui_search_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @white-label-airline/ui/search-form */ "../../../libs/ui/search-form/index.ts");
/* harmony import */ var _country_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country.const */ "./pages/search/country.const.ts");


const initSearchForm = {
  country: _country_const__WEBPACK_IMPORTED_MODULE_1__["country"],
  tripType: _white_label_airline_ui_search_form__WEBPACK_IMPORTED_MODULE_0__["TripTypeEnum"].RoundTrip,
  currency: {
    Code: 'CAD',
    DecimalDigits: 2,
    DecimalSeparator: '.',
    RoundingCoefficient: 0,
    SpaceBetweenAmountAndSymbol: false,
    Symbol: 'C$',
    SymbolOnLeft: true,
    ThousandsSeparator: ','
  },
  from: null,
  departDate: new Date(),
  to: null,
  returnDate: null
};

/***/ }),

/***/ "./pages/search/search-page.tsx":
/*!**************************************!*\
  !*** ./pages/search/search-page.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _white_label_airline_ui_search_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @white-label-airline/ui/search-form */ "../../../libs/ui/search-form/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "../../../node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _search_form_init_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-form-init.const */ "./pages/search/search-form-init.const.ts");






const SearchPage = () => {
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const {
    search
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])();
  const [queryParams, setQueryParams] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (search) {
      const query = Object(query_string__WEBPACK_IMPORTED_MODULE_3__["parse"])(search);
      const searchFormValuesFromQuery = _white_label_airline_ui_search_form__WEBPACK_IMPORTED_MODULE_1__["searchFormDataTransform"].transfromGetQuotesPayloadToSearchForm(query);
      setQueryParams(searchFormValuesFromQuery);
    }
  }, [search]);

  const submitSearch = (searchFormValues, {
    setSubmitting
  }) => {
    const searchParams = new URLSearchParams();
    const query = _white_label_airline_ui_search_form__WEBPACK_IMPORTED_MODULE_1__["searchFormDataTransform"].transformSearchFormValuesToGetQuotesPayload(searchFormValues);

    for (const key in query) {
      searchParams.set(key, query[key]);
    }

    setSubmitting(false);
    history.push({
      pathname: '/quotes',
      search: searchParams.toString()
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_white_label_airline_ui_search_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    initSearchForm: queryParams || _search_form_init_const__WEBPACK_IMPORTED_MODULE_4__["initSearchForm"],
    submitSearch: submitSearch
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SearchPage);

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/emilyxiong/Documents/white-label-airline/apps/white-label-airline/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map