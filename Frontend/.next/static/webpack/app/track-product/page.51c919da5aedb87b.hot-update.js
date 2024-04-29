"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/track-product/page",{

/***/ "(app-pages-browser)/./src/components/ProductStats.tsx":
/*!*****************************************!*\
  !*** ./src/components/ProductStats.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_AreaChart_tremor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=AreaChart!=!@tremor/react */ \"(app-pages-browser)/__barrel_optimize__?names=AreaChart!=!./node_modules/@tremor/react/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ProductStats(param) {\n    let {} = param;\n    _s();\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [fetchCount, setFetchCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUserDetails = async ()=>{\n            try {\n                const response = await fetch(\"\".concat(\"http://192.168.238.223:3000\", \"/get-log-detail\"), {\n                    method: \"POST\",\n                    headers: {\n                        \"content-type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        batchId: 263967062395604\n                    })\n                });\n                const result = await response.json();\n                if (result.success) {\n                    setChartData(result.Data);\n                } else {\n                    console.error(result.message);\n                }\n                console.log(\"result: \", result);\n                setFetchCount((prevCount)=>prevCount + 1);\n            } catch (error) {\n                console.error(error.message);\n            }\n        };\n        const intervalId = setInterval(fetchUserDetails, 10000); // Call fetchUserDetails every 10 seconds\n        return ()=>{\n            clearInterval(intervalId);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex justify-center text-white max-w-7xl mx-auto font-poppins\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full flex flex-col gap-4 p-7\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold\",\n                    children: \"Log Details\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Innohacks\\\\supplysync\\\\src\\\\components\\\\ProductStats.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"\",\n                    children: \"Temperature Humidity & Shock\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Innohacks\\\\supplysync\\\\src\\\\components\\\\ProductStats.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AreaChart_tremor_react__WEBPACK_IMPORTED_MODULE_2__.AreaChart, {\n                    showAnimation: true,\n                    className: \"h-80\",\n                    data: chartData,\n                    index: \"time\",\n                    categories: [\n                        \"temperature\",\n                        \"humidity\",\n                        \"shock\"\n                    ],\n                    colors: [\n                        \"indigo\",\n                        \"rose\",\n                        \"green\"\n                    ],\n                    yAxisWidth: 20,\n                    showGridLines: true,\n                    onValueChange: (v)=>console.log(v)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Innohacks\\\\supplysync\\\\src\\\\components\\\\ProductStats.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Innohacks\\\\supplysync\\\\src\\\\components\\\\ProductStats.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Innohacks\\\\supplysync\\\\src\\\\components\\\\ProductStats.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductStats, \"KmOd064a1wgwaHzIVm7OFNYbCq0=\");\n_c = ProductStats;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductStats);\nvar _c;\n$RefreshReg$(_c, \"ProductStats\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RTdGF0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNtRDtBQUNUO0FBSzFDLFNBQVNJLGFBQWEsS0FBUztRQUFULEVBQVMsR0FBVDs7SUFDcEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFNLEVBQUU7SUFDbEQsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDO0lBRTdDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1RLG1CQUFtQjtZQUN2QixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsR0FBbUMsT0FBaENDLDZCQUErQixFQUFDLG9CQUNuQztvQkFDRUcsUUFBUTtvQkFDUkMsU0FBUzt3QkFDUCxnQkFBZ0I7b0JBQ2xCO29CQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7d0JBQ25CQyxTQUFTO29CQUNYO2dCQUNGO2dCQUdGLE1BQU1DLFNBQVMsTUFBTVgsU0FBU1ksSUFBSTtnQkFFbEMsSUFBSUQsT0FBT0UsT0FBTyxFQUFFO29CQUNsQmpCLGFBQWFlLE9BQU9HLElBQUk7Z0JBQzFCLE9BQU87b0JBQ0xDLFFBQVFDLEtBQUssQ0FBQ0wsT0FBT00sT0FBTztnQkFDOUI7Z0JBRUFGLFFBQVFHLEdBQUcsQ0FBQyxZQUFZUDtnQkFDeEJiLGNBQWNxQixDQUFBQSxZQUFhQSxZQUFZO1lBQ3pDLEVBQUUsT0FBT0gsT0FBWTtnQkFDbkJELFFBQVFDLEtBQUssQ0FBQ0EsTUFBTUMsT0FBTztZQUM3QjtRQUNGO1FBRUEsTUFBTUcsYUFBYUMsWUFBWXRCLGtCQUFrQixRQUFRLHlDQUF5QztRQUVsRyxPQUFPO1lBQ0x1QixjQUFjRjtRQUNoQjtJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQXFCOzs7Ozs7OEJBQ25DLDhEQUFDRTtvQkFBRUYsV0FBVTs4QkFBRzs7Ozs7OzhCQUNoQiw4REFBQy9CLG9GQUFTQTtvQkFDUmtDLGVBQWU7b0JBQ2ZILFdBQVU7b0JBQ1ZJLE1BQU1qQztvQkFDTmtDLE9BQU07b0JBQ05DLFlBQVk7d0JBQUM7d0JBQWU7d0JBQVk7cUJBQVE7b0JBQ2hEQyxRQUFRO3dCQUFDO3dCQUFVO3dCQUFRO3FCQUFRO29CQUNuQ0MsWUFBWTtvQkFDWkMsZUFBZTtvQkFDZkMsZUFBZSxDQUFDQyxJQUFNcEIsUUFBUUcsR0FBRyxDQUFDaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVDO0dBNURTekM7S0FBQUE7QUE4RFQsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdFN0YXRzLnRzeD82MzcwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcmVhQ2hhcnQgfSBmcm9tIFwiQHRyZW1vci9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VRUkRhdGFTdG9yZSB9IGZyb20gXCJAL3N0b3JlL3FyRGF0YVwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHt9O1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdFN0YXRzKHt9OiBQcm9wcykge1xyXG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcclxuICBjb25zdCBbZmV0Y2hDb3VudCwgc2V0RmV0Y2hDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoVXNlckRldGFpbHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VVUkx9L2dldC1sb2ctZGV0YWlsYCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgYmF0Y2hJZDogMjYzOTY3MDYyMzk1NjA0LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc2V0Q2hhcnREYXRhKHJlc3VsdC5EYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdDogXCIsIHJlc3VsdCk7XHJcbiAgICAgICAgc2V0RmV0Y2hDb3VudChwcmV2Q291bnQgPT4gcHJldkNvdW50ICsgMSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmZXRjaFVzZXJEZXRhaWxzLCAxMDAwMCk7IC8vIENhbGwgZmV0Y2hVc2VyRGV0YWlscyBldmVyeSAxMCBzZWNvbmRzXHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgbWF4LXctN3hsIG14LWF1dG8gZm9udC1wb3BwaW5zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2wgZ2FwLTQgcC03XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPkxvZyBEZXRhaWxzPC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5UZW1wZXJhdHVyZSBIdW1pZGl0eSAmIFNob2NrPC9wPlxyXG4gICAgICAgIDxBcmVhQ2hhcnRcclxuICAgICAgICAgIHNob3dBbmltYXRpb249e3RydWV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTgwXCJcclxuICAgICAgICAgIGRhdGE9e2NoYXJ0RGF0YX1cclxuICAgICAgICAgIGluZGV4PVwidGltZVwiXHJcbiAgICAgICAgICBjYXRlZ29yaWVzPXtbXCJ0ZW1wZXJhdHVyZVwiLCBcImh1bWlkaXR5XCIsIFwic2hvY2tcIl19XHJcbiAgICAgICAgICBjb2xvcnM9e1tcImluZGlnb1wiLCBcInJvc2VcIiwgXCJncmVlblwiXX1cclxuICAgICAgICAgIHlBeGlzV2lkdGg9ezIwfVxyXG4gICAgICAgICAgc2hvd0dyaWRMaW5lcz17dHJ1ZX1cclxuICAgICAgICAgIG9uVmFsdWVDaGFuZ2U9eyh2KSA9PiBjb25zb2xlLmxvZyh2KX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RTdGF0cztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcmVhQ2hhcnQiLCJQcm9kdWN0U3RhdHMiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJmZXRjaENvdW50Iiwic2V0RmV0Y2hDb3VudCIsImZldGNoVXNlckRldGFpbHMiLCJyZXNwb25zZSIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0JBU0VVUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJiYXRjaElkIiwicmVzdWx0IiwianNvbiIsInN1Y2Nlc3MiLCJEYXRhIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSIsImxvZyIsInByZXZDb3VudCIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJzaG93QW5pbWF0aW9uIiwiZGF0YSIsImluZGV4IiwiY2F0ZWdvcmllcyIsImNvbG9ycyIsInlBeGlzV2lkdGgiLCJzaG93R3JpZExpbmVzIiwib25WYWx1ZUNoYW5nZSIsInYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProductStats.tsx\n"));

/***/ })

});