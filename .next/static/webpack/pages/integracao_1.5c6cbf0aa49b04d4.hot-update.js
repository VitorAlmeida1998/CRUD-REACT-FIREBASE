"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/integracao_1",{

/***/ "./src/pages/integracao_1.jsx":
/*!************************************!*\
  !*** ./src/pages/integracao_1.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ integracao; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction integracao() {\n    _s();\n    const [codigo, setCodigo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [cliente, setCliente] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    function obterCliente() {\n        fetch(\"http://localhost:3000/api/clientes/123\").then((resp)=>resp.json()).then((dados)=>setCliente(dados));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: codigo,\n                        onChange: setCodigo((e)=>e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/vitor/React/CRUD-FB/CRUD-REACT-FIREBASE/src/pages/integracao_1.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: obterCliente,\n                        children: \"Obter Cliente\"\n                    }, void 0, false, {\n                        fileName: \"/home/vitor/React/CRUD-FB/CRUD-REACT-FIREBASE/src/pages/integracao_1.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vitor/React/CRUD-FB/CRUD-REACT-FIREBASE/src/pages/integracao_1.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"C\\xf3digo: \",\n                                cliente.id\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/vitor/React/CRUD-FB/CRUD-REACT-FIREBASE/src/pages/integracao_1.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"Nome: \",\n                                cliente.nome\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/vitor/React/CRUD-FB/CRUD-REACT-FIREBASE/src/pages/integracao_1.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"E-mail: \",\n                                cliente.email,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/vitor/React/CRUD-FB/CRUD-REACT-FIREBASE/src/pages/integracao_1.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/vitor/React/CRUD-FB/CRUD-REACT-FIREBASE/src/pages/integracao_1.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/vitor/React/CRUD-FB/CRUD-REACT-FIREBASE/src/pages/integracao_1.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vitor/React/CRUD-FB/CRUD-REACT-FIREBASE/src/pages/integracao_1.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(integracao, \"M/rsVVyZS2FAKqkz6/K1dhfDNMQ=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW50ZWdyYWNhb18xLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBaUM7QUFDUztBQUUzQixTQUFTRSxhQUFhOztJQUNuQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDSyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDLENBQUM7SUFFeEMsU0FBU08sZUFBZTtRQUN0QkMsTUFBTSwwQ0FDSEMsSUFBSSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLElBQUksSUFDeEJGLElBQUksQ0FBQyxDQUFDRyxRQUFVTixXQUFXTTtJQUNoQztJQUVBLHFCQUNFLDhEQUFDWCwwREFBTUE7OzBCQUNMLDhEQUFDWTs7a0NBQ0MsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFTQyxPQUFTYjt3QkFBUWMsVUFBVWIsVUFBVWMsQ0FBQUEsSUFBS0EsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBQzdFLDhEQUFDSTt3QkFBT0MsU0FBU2Q7a0NBQWM7Ozs7Ozs7Ozs7OzswQkFFakMsOERBQUNNOzBCQUNDLDRFQUFDUzs7c0NBQ0MsOERBQUNDOztnQ0FBRztnQ0FBU2xCLFFBQVFtQixFQUFFOzs7Ozs7O3NDQUN2Qiw4REFBQ0Q7O2dDQUFHO2dDQUFPbEIsUUFBUW9CLElBQUk7Ozs7Ozs7c0NBQ3ZCLDhEQUFDRjs7Z0NBQUc7Z0NBQVNsQixRQUFRcUIsS0FBSztnQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JDLENBQUM7R0F6QnVCeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2ludGVncmFjYW9fMS5qc3g/NDBiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW50ZWdyYWNhbygpIHtcbiAgY29uc3QgW2NvZGlnbywgc2V0Q29kaWdvXSA9IHVzZVN0YXRlKDEpICBcbiAgY29uc3QgW2NsaWVudGUsIHNldENsaWVudGVdID0gdXNlU3RhdGUoe30pO1xuXG4gIGZ1bmN0aW9uIG9idGVyQ2xpZW50ZSgpIHtcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvY2xpZW50ZXMvMTIzXCIpXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAudGhlbigoZGFkb3MpID0+IHNldENsaWVudGUoZGFkb3MpKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWUgPSB7Y29kaWdvfSBvbkNoYW5nZT17c2V0Q29kaWdvKGUgPT4gZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17b2J0ZXJDbGllbnRlfT5PYnRlciBDbGllbnRlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+Q8OzZGlnbzoge2NsaWVudGUuaWR9PC9saT5cbiAgICAgICAgICA8bGk+Tm9tZToge2NsaWVudGUubm9tZX08L2xpPlxuICAgICAgICAgIDxsaT5FLW1haWw6IHtjbGllbnRlLmVtYWlsfSA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMYXlvdXQiLCJpbnRlZ3JhY2FvIiwiY29kaWdvIiwic2V0Q29kaWdvIiwiY2xpZW50ZSIsInNldENsaWVudGUiLCJvYnRlckNsaWVudGUiLCJmZXRjaCIsInRoZW4iLCJyZXNwIiwianNvbiIsImRhZG9zIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJsaSIsImlkIiwibm9tZSIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/integracao_1.jsx\n"));

/***/ })

});