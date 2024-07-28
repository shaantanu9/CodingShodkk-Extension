/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/popup/popup.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/popup/popup.scss ***!
  \***************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #f5f5f5;\n  width: 320px;\n  height: 112px;\n  color: #0f110f;\n  font-family: \"roboto\";\n}", "",{"version":3,"sources":["webpack://./src/popup/popup.scss","webpack://./src/globalStyles/variables.scss"],"names":[],"mappings":"AACA;EACI,yBCDkB;EDElB,YCDS;EDET,aCDU;EDEV,cCDY;EDEZ,qBCDU;ADCd","sourcesContent":["@import '../globalStyles//variables';\nbody {\n    background-color: $bodyBackgroundColor;\n    width: $popupWidth;\n    height: $popupHeight;\n    color: $colorBodyText;\n    font-family: $defaultFont;\n}","// variables and global styles\n$bodyBackgroundColor: #f5f5f5;\n$popupWidth: 320px;\n$popupHeight: 112px;\n$colorBodyText: #0f110f;\n$defaultFont: \"roboto\";"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/popup/popup.scss":
/*!******************************!*\
  !*** ./src/popup/popup.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_popup_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./popup.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/popup/popup.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/App/App.tsx":
/*!************************************!*\
  !*** ./src/components/App/App.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login */ "./src/components/App/Login.tsx");
/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logout */ "./src/components/App/Logout.tsx");
/* harmony import */ var _utils_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/services */ "./src/utils/services/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



// import ProfileTab from "./Profile";

const ProfileTab = ({ userData, setToken }) => {
    var _a, _b, _c, _d, _e;
    const [analytics, setAnalytics] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    // const primaryColor = "#4456FF";
    const refreshAnalytics = () => __awaiter(void 0, void 0, void 0, function* () {
        var _f;
        const analyticsData = yield _utils_services__WEBPACK_IMPORTED_MODULE_3__._userAccountService.getAnalytics();
        setAnalytics((_f = analyticsData === null || analyticsData === void 0 ? void 0 : analyticsData.data) === null || _f === void 0 ? void 0 : _f[0]);
    });
    const getSingleUserProfile = () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield _utils_services__WEBPACK_IMPORTED_MODULE_3__._userAccountService.getSingleUserProfile(userData === null || userData === void 0 ? void 0 : userData._id);
        console.log(user);
        setUser(user === null || user === void 0 ? void 0 : user.data);
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        getSingleUserProfile();
        refreshAnalytics();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "24px",
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: userData === null || userData === void 0 ? void 0 : userData.profileImage, alt: "User profile", style: {
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                } }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { style: {
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#4456FF",
                    margin: "8px 0 4px 0",
                } }, userData === null || userData === void 0 ? void 0 : userData.name),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { style: {
                    fontSize: "14px",
                    fontWeight: "normal",
                    color: "gray",
                    margin: 0,
                } }, userData === null || userData === void 0 ? void 0 : userData.currentDesignation),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "8px",
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { 
                    //  style={{
                    //   margin: 0, fontSize: "24px", fontWeight: "normal" }}
                    style: {
                        borderRadius: "12px",
                        backgroundColor: "white",
                        padding: "12px 24px",
                        textAlign: "center",
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "black",
                        transition: "background-color 200ms",
                        border: "1px solid #d1d5db",
                    } },
                    "Token ", user === null || user === void 0 ? void 0 :
                    user.tokens),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { 
                    //  style={{ margin: 0, fontSize: "24px", fontWeight: "normal" }}
                    style: {
                        borderRadius: "12px",
                        backgroundColor: "white",
                        padding: "12px 24px",
                        textAlign: "center",
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "black",
                        transition: "background-color 200ms",
                        border: "1px solid #d1d5db",
                    } },
                    "Token ", user === null || user === void 0 ? void 0 :
                    user.tokenUsage))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                marginBottom: "12px",
                marginTop: "24px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
            } }, [
            { label: "Tasks", value: (_a = analytics === null || analytics === void 0 ? void 0 : analytics.taskCreated) !== null && _a !== void 0 ? _a : 0 },
            { label: "Completed", value: (_b = analytics === null || analytics === void 0 ? void 0 : analytics.taskCompleted) !== null && _b !== void 0 ? _b : 0 },
            { label: "Journal Streak", value: (_c = analytics === null || analytics === void 0 ? void 0 : analytics.journalCreated) !== null && _c !== void 0 ? _c : 0 },
            { label: "Mistakes", value: (_d = analytics === null || analytics === void 0 ? void 0 : analytics.mistakesMade) !== null && _d !== void 0 ? _d : 0 },
            { label: "Quiz Taken", value: (_e = analytics === null || analytics === void 0 ? void 0 : analytics.quizTaken) !== null && _e !== void 0 ? _e : 0 },
            { label: "Following", value: 0 },
        ].map((item, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: index, style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { style: { fontSize: "24px", fontWeight: "bold", color: "#4456FF" } }, item === null || item === void 0 ? void 0 : item.value),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { style: { fontSize: "14px", fontWeight: "normal", color: "gray" } }, item === null || item === void 0 ? void 0 : item.label))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                position: "absolute",
                right: "0",
                bottom: "0",
                padding: "5px",
                zIndex: "1000",
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Logout__WEBPACK_IMPORTED_MODULE_2__["default"], { deleteToken: setToken }))));
};
const JournalTab = ({ userData }) => {
    var _a;
    const primaryColor = "#4456FF";
    const [inputData, setInputData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [hoveredButton, setHoveredButton] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const list = [
        { label: "Bookmark", value: "bookmark" },
        { label: "Personal Dairy", value: "personalDiary" },
    ];
    const submitHandler = () => {
        // Handle submit
    };
    const searchHandler = () => {
        // Handle search
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
            padding: "16px",
            borderRadius: "10px",
            backgroundColor: "#f3f4f6",
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                marginTop: "4px",
                width: "110%",
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                    display: "flex",
                    flexDirection: "column",
                    // alignItems: "center",
                    // justifyContent: "center",
                    gap: "12px",
                    width: "90%",
                    // marginTop: "12px",
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { style: {
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#4456FF",
                        margin: 0,
                    } },
                    "Hi, ", userData === null || userData === void 0 ? void 0 :
                    userData.name.split(" ")[0],
                    " \uD83D\uDC4B"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { style: {
                        fontSize: "16px",
                        fontWeight: "normal",
                        color: "gray",
                        // textAlign: "center",
                        wordSpacing: "1px",
                    } }, "Never forget what you browse,read,learn and share it with your friends")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { style: {
                    height: "50px",
                    width: "75%",
                    margin: "0 auto",
                    marginLeft: "10px",
                    borderRadius: "10px",
                    backgroundColor: "white",
                    padding: "0 16px",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "black",
                    border: "1px solid #d1d5db",
                }, ref: inputRef, value: inputData, onChange: (e) => setInputData(e.target.value) }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    marginTop: "8px",
                    width: "90%",
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { style: {
                        borderRadius: "12px",
                        backgroundColor: "white",
                        padding: "10px 20px",
                        textAlign: "center",
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "black",
                        transition: "background-color 200ms",
                        border: "1px solid #d1d5db",
                    }, onClick: submitHandler, onMouseOver: (e) => (e.currentTarget.style.backgroundColor =
                        "rgba(255, 255, 255, 0.8)"), onMouseOut: (e) => (e.currentTarget.style.backgroundColor = "white"), onMouseDown: (e) => (e.currentTarget.style.backgroundColor =
                        "rgba(255, 255, 255, 0.7)"), onMouseUp: (e) => (e.currentTarget.style.backgroundColor = "white") }, "Add"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { style: {
                        borderRadius: "12px",
                        backgroundColor: "white",
                        padding: "10px 20px",
                        textAlign: "center",
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "black",
                        transition: "background-color 200ms",
                        border: "1px solid #d1d5db",
                    }, onClick: searchHandler, onMouseOver: (e) => (e.currentTarget.style.backgroundColor =
                        "rgba(255, 255, 255, 0.8)"), onMouseOut: (e) => (e.currentTarget.style.backgroundColor = "white"), onMouseDown: (e) => (e.currentTarget.style.backgroundColor =
                        "rgba(255, 255, 255, 0.7)"), onMouseUp: (e) => (e.currentTarget.style.backgroundColor = "white") }, "Search"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                marginTop: "16px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "start",
                gap: "12px",
                padding: "8px",
                borderRadius: "10px",
                // backgroundColor: "#e5e7eb",
            } },
            list.map((item, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { key: index, onClick: () => setSelected(item.value), onMouseOver: () => setHoveredButton(item.value), onMouseOut: () => setHoveredButton(null), style: {
                    borderRadius: "8px",
                    padding: "8px",
                    fontWeight: selected === item.value || hoveredButton === item.value
                        ? "bold"
                        : "normal",
                    backgroundColor: selected === item.value || hoveredButton === item.value
                        ? "#2563eb"
                        : "#9ca3af",
                    color: selected === item.value || hoveredButton === item.value
                        ? "white"
                        : "inherit",
                    borderColor: selected === item.value || hoveredButton === item.value
                        ? "white"
                        : "transparent",
                    borderWidth: selected === item.value || hoveredButton === item.value
                        ? "2px"
                        : "0",
                    borderStyle: "solid",
                    transform: selected === item.value || hoveredButton === item.value
                        ? "scale(1.05)"
                        : "scale(1)",
                    transition: "transform 200ms, font-weight 200ms",
                } }, item.label))), (_a = userData === null || userData === void 0 ? void 0 : userData.menuSelected) === null || _a === void 0 ? void 0 :
            _a.map((item, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { key: index, onClick: () => setSelected(item.value), onMouseOver: () => setHoveredButton(item.value), onMouseOut: () => setHoveredButton(null), style: {
                    borderRadius: "8px",
                    padding: "8px",
                    fontWeight: selected === item.value ? "bold" : "normal",
                    backgroundColor: selected === item.value || hoveredButton === item.value
                        ? "#2563eb"
                        : "#9ca3af",
                    color: selected === item.value || hoveredButton === item.value
                        ? "white"
                        : "inherit",
                    borderColor: selected === item.value || hoveredButton === item.value
                        ? "white"
                        : "transparent",
                    borderWidth: selected === item.value || hoveredButton === item.value
                        ? "2px"
                        : "0",
                    borderStyle: "solid",
                    transform: selected === item.value || hoveredButton === item.value
                        ? "scale(1.05)"
                        : "scale(1)",
                    transition: "transform 200ms, font-weight 200ms",
                } }, item.label))))));
};
const TaskTab = ({ fromPage, taskData, setTasks, tasks }) => {
    const primaryColor = "#4456FF";
    const initialInput = taskData || {
        title: "",
        description: "",
        assignedTo: "self",
        status: "pending",
        priority: "medium",
        dueDate: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000), // Default to current date + 2 days
    };
    const [taskInputData, setTaskInputData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Object.assign({}, initialInput));
    const [isAdvanceOpen, setIsAdvanceOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (titleInputRef.current) {
            titleInputRef.current.focus();
        }
    }, []);
    const changeHandler = (e) => {
        const { id, value } = e.target;
        setTaskInputData((prevData) => (Object.assign(Object.assign({}, prevData), { [id]: id === "dueDate" ? new Date(value) : value })));
    };
    const titleInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const postTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
        const userData = JSON.parse(localStorage.getItem("user") || "{}");
        const res = yield _utils_services__WEBPACK_IMPORTED_MODULE_3__._taskService.createTask(Object.assign(Object.assign({}, task), { assignedTo: task.assignedTo === "self" ? userData._id : task.assignedTo }));
        if (res.statusCode === 200) {
            setTasks && setTasks([...tasks, res.data]);
            setTaskInputData(Object.assign({}, initialInput));
        }
    });
    const updateTask = (taskInputData) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield _utils_services__WEBPACK_IMPORTED_MODULE_3__._taskService.updateTask(taskData === null || taskData === void 0 ? void 0 : taskData._id, taskInputData);
        if (res.statusCode === 200) {
            const updatedList = tasks.map((item) => item._id === (taskData === null || taskData === void 0 ? void 0 : taskData._id) ? Object.assign(Object.assign({}, item), taskInputData) : item);
            setTasks && setTasks(updatedList);
        }
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
            borderRadius: "8px",
            padding: "16px",
            backgroundColor: "white",
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { style: { fontSize: "24px", fontWeight: "bold", color: "#1a202c" } }, taskData ? "Update Task" : "Add Task"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { style: {
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "8px",
                    backgroundColor: primaryColor,
                    padding: "8px 16px",
                    fontWeight: "600",
                    color: "white",
                    cursor: "pointer",
                }, onClick: () => setIsAdvanceOpen(!isAdvanceOpen) }, "Advance")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { onSubmit: (e) => {
                e.preventDefault();
                fromPage === "new"
                    ? postTask(taskInputData)
                    : updateTask(taskInputData);
            }, style: { marginTop: "16px" } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { display: "flex", flexDirection: "column", gap: "16px" } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { display: "flex", flexDirection: "column", gap: "8px" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { htmlFor: "title", style: { fontWeight: "500" } }, "Title*"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", id: "title", required: true, style: {
                            borderRadius: "8px",
                            border: "1px solid #d1d5db",
                            padding: "8px",
                        }, onChange: changeHandler, value: taskInputData.title, ref: titleInputRef })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { display: "flex", flexDirection: "column", gap: "8px" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { htmlFor: "description", style: { fontWeight: "500" } }, "Description"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", { id: "description", style: {
                            borderRadius: "8px",
                            border: "1px solid #d1d5db",
                            padding: "8px",
                        }, onChange: changeHandler, value: taskInputData.description })),
                isAdvanceOpen && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { display: "flex", flexDirection: "column", gap: "8px" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { htmlFor: "assignedTo", style: { fontWeight: "500" } }, "Assigned To"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", id: "assignedTo", style: {
                                borderRadius: "8px",
                                border: "1px solid #d1d5db",
                                padding: "8px",
                            }, onChange: changeHandler, value: taskInputData.assignedTo, disabled: true })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { display: "flex", flexDirection: "column", gap: "8px" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { htmlFor: "status", style: { fontWeight: "500" } }, "Status"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { id: "status", style: {
                                borderRadius: "8px",
                                border: "1px solid #d1d5db",
                                padding: "8px",
                            }, onChange: changeHandler, value: taskInputData.status },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "pending" }, "Pending"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "in-progress" }, "In Progress"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "completed" }, "Completed"))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { display: "flex", flexDirection: "column", gap: "8px" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { htmlFor: "priority", style: { fontWeight: "500" } }, "Priority"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { id: "priority", style: {
                                borderRadius: "8px",
                                border: "1px solid #d1d5db",
                                padding: "8px",
                            }, onChange: changeHandler, value: taskInputData.priority },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "low" }, "Low"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "medium" }, "Medium"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "high" }, "High"))))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { display: "flex", flexDirection: "column", gap: "8px" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { htmlFor: "dueDate", style: { fontWeight: "500" } }, "Due Date"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { min: new Date().toISOString().split("T")[0], value: (taskInputData === null || taskInputData === void 0 ? void 0 : taskInputData.dueDate)
                            ? new Date(taskInputData.dueDate).toISOString().split("T")[0]
                            : fromPage === "new"
                                ? new Date().toISOString().split("T")[0]
                                : "", type: "date", id: "dueDate", style: {
                            borderRadius: "8px",
                            border: "1px solid #d1d5db",
                            padding: "8px",
                        }, onChange: changeHandler })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { type: "submit", style: {
                        borderRadius: "8px",
                        backgroundColor: primaryColor,
                        padding: "12px",
                        color: "white",
                        fontWeight: "600",
                        cursor: "pointer",
                    } }, taskData ? "Update Task" : "Add Task")))));
};
const App = () => {
    const [showComponent, setShowComponent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        bookmark: false,
        text: false,
        url: false,
    });
    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [currentTab, setCurrentTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [inputData, setInputData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [menu, setMenu] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const primaryColor = "#4456FF";
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("journal");
    const [hoveredButton, setHoveredButton] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const toggleComponent = (componentKey) => {
        setShowComponent((prevState) => (Object.assign(Object.assign({}, prevState), { [componentKey]: !prevState[componentKey], bookmark: componentKey === "bookmark" ? !prevState.bookmark : false, text: componentKey === "text" ? !prevState.text : false, url: componentKey === "url" ? !prevState.url : false })));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
            setCurrentTab(tabs[0].url);
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        chrome.storage.sync.get(["token"], (result) => {
            setToken(result.token);
        });
        chrome.storage.sync.get(["user"], (result) => {
            var _a;
            setUser(result.user);
            setMenu((_a = result === null || result === void 0 ? void 0 : result.user) === null || _a === void 0 ? void 0 : _a.menuSelected);
        });
    }, []);
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(inputData);
    };
    return token ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "400px",
            backgroundColor: "#f5f5f5",
            marginTop: "-10px",
            marginLeft: "-9px",
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px",
                borderBottomRightRadius: "20px",
                borderBottomLeftRadius: "20px",
                backgroundColor: primaryColor,
                position: "sticky",
                top: "0",
                width: "100%",
                zIndex: "1000",
            } }, ["profile", "journal", "tasks"].map((tab) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { key: tab, style: Object.assign({ padding: "10px 20px", borderBottomRightRadius: "20px", borderBottomLeftRadius: "20px", backgroundColor: selected === tab ? "#fff" : primaryColor, color: selected === tab ? primaryColor : "#fff", fontWeight: "bold", cursor: "pointer", border: "none", marginTop: "-20px" }, (hoveredButton === tab && selected !== tab
                ? { backgroundColor: "#fff", color: primaryColor }
                : {})), onClick: () => setSelected(tab), onMouseEnter: () => setHoveredButton(tab), onMouseLeave: () => setHoveredButton(null) }, tab.charAt(0).toUpperCase() + tab.slice(1))))),
        selected === "journal" && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JournalTab, { userData: user }),
        selected === "profile" && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProfileTab, { userData: user, setToken: setToken })),
        selected === "tasks" && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TaskTab, { userData: user }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                position: "absolute",
                right: "0",
                bottom: "0",
                padding: "5px",
                marginTop: "10px",
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    color: primaryColor,
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "https://www.soobati.com", target: "_blank", style: {
                        color: primaryColor,
                        textDecoration: "none",
                        fontWeight: "bold",
                    } }, "Soobati AI"))))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login__WEBPACK_IMPORTED_MODULE_1__["default"], { getTokenFrom: setToken }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/components/App/Login.tsx":
/*!**************************************!*\
  !*** ./src/components/App/Login.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/services */ "./src/utils/services/index.ts");
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/StateContext */ "./src/components/context/StateContext.tsx");
// // // Create a Login Form and store the token in chrome storage
// // import * as React from "react";
// // import { useContext } from "react";
// // import axios from "axios";
// // import { StateContext } from "../context/StateContext";
// // import { _userAccountService } from "../../utils/services";
// // const Login = ({ getTokenFrom }) => {
// //   const [token, settoken] = React.useState("");
// //   const [error, setError] = React.useState("");
// //   const state = useContext(StateContext);
// //   console.log("state from context", state);
// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     if (token === "") {
// //       setError("Please fill all the fields");
// //     } else {
// //       setError("");
// //       _userAccountService
// //         .loginWithToken({ token })
// //         .then((res) => {
// //           console.log("TOKEN res.data login 26", {
// //             resData: res.data,
// //             token: res?.data?.token,
// //           });
// //           chrome.storage.sync.set({ token: res?.data?.token, user:res?.data?.user }, () => {
// //             getTokenFrom(res?.data?.token);
// //             console.log("saved");
// //           });
// //         })
// //         .catch((err) => {
// //           setError("Invalid Credentials");
// //           console.log(err);
// //         });
// //     }
// //   };
// //   return (
// //     <form
// //       onSubmit={handleLogin}
// //       style={{
// //         display: "flex",
// //         width: "100%",
// //         justifyContent: "between",
// //         alignItems: "center",
// //         // height: "100vh",
// //         backgroundColor: "#f1f1f1",
// //         borderRadius: "30px",
// //       }}
// //     >
// //       <div className="login">
// //         <div className="login__container">
// //           <h1>Login Dee Second Brain</h1>
// //           <textarea
// //             placeholder="Token"
// //             value={token}
// //             required
// //             onChange={(e) => settoken(e.target.value)}
// //             style={{
// //               marginBottom: "5px",
// //               padding: "5px",
// //               borderRadius: "5px",
// //               width: "96%",
// //               height: "40px",
// //               // border color 6A46F9
// //               border: "1px solid #4456FF",
// //             }}
// //           />
// //           <br></br>
// //           <div className="error">{error}</div>
// //           <br></br>
// //           <div
// //             style={{
// //               display: "flex",
// //               justifyContent: "space-between",
// //               alignItems: "center",
// //             }}
// //           >
// //             <button
// //               style={{
// //                 backgroundColor: "#4456FF",
// //                 color: "white",
// //                 padding: "10px",
// //                 textAlign: "center",
// //                 textDecoration: "none",
// //                 display: "inline-block",
// //                 fontSize: "16px",
// //                 margin: "4px 2px",
// //                 cursor: "pointer",
// //                 borderRadius: "12px",
// //                 border: "none",
// //                 // width: "87%",
// //               }}
// //             >
// //               <a
// //                 style={{
// //                   backgroundColor: "#4456FF",
// //                   color: "white",
// //                   textDecoration: "none",
// //                 }}
// //                 href="https://ai.soobati.com/auth/sign-up"
// //                 target="_blank"
// //               >
// //                 SignUp
// //               </a>
// //             </button>
// //             <input
// //               style={{
// //                 backgroundColor: "#4456FF",
// //                 color: "white",
// //                 padding: "10px",
// //                 textAlign: "center",
// //                 textDecoration: "none",
// //                 display: "inline-block",
// //                 fontSize: "16px",
// //                 margin: "4px 2px",
// //                 cursor: "pointer",
// //                 borderRadius: "12px",
// //                 border: "none",
// //                 // width: "87%",
// //               }}
// //               type="submit"
// //               value="Login"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </form>
// //     // register
// //   );
// // };
// // export default Login;
// import React, { useState, useContext } from "react";
// import { _userAccountService } from "../../utils/services";
// import { StateContext } from "../context/StateContext";
// const Login = ({ getTokenFrom }) => {
//   const [token, setToken] = useState("");
//   const [error, setError] = useState("");
//   const state = useContext(StateContext);
//   console.log("state from context", state);
//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (token === "") {
//       setError("Please fill all the fields");
//     } else {
//       setError("");
//       _userAccountService
//         .loginWithToken({ token })
//         .then((res) => {
//           console.log("TOKEN res.data login 26", {
//             resData: res.data,
//             token: res?.data?.token,
//           });
//           chrome.storage.sync.set(
//             { token: res?.data?.token, user: res?.data?.user },
//             () => {
//               getTokenFrom(res?.data?.token);
//               console.log("saved");
//             }
//           );
//         })
//         .catch((err) => {
//           setError("Invalid Credentials");
//           console.log(err);
//         });
//     }
//   };
//   const primaryColor = "#4456FF";
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         width: "100%",
//         height: "100vh",
//         backgroundColor: "#f1f1f1",
//       }}
//     >
//       <form
//         onSubmit={handleLogin}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           width: "300px",
//           padding: "20px",
//           borderRadius: "15px",
//           backgroundColor: "white",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <h1 style={{ color: primaryColor, marginBottom: "20px" }}>Login Dee Second Brain</h1>
//         <textarea
//           placeholder="Token"
//           value={token}
//           required
//           onChange={(e) => setToken(e.target.value)}
//           style={{
//             marginBottom: "10px",
//             padding: "10px",
//             borderRadius: "5px",
//             width: "100%",
//             height: "40px",
//             border: `1px solid ${primaryColor}`,
//             fontSize: "16px",
//           }}
//         />
//         {error && (
//           <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
//         )}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             width: "100%",
//           }}
//         >
//           <button
//             style={{
//               backgroundColor: primaryColor,
//               color: "white",
//               padding: "10px 20px",
//               textAlign: "center",
//               textDecoration: "none",
//               display: "inline-block",
//               fontSize: "16px",
//               margin: "4px 2px",
//               cursor: "pointer",
//               borderRadius: "12px",
//               border: "none",
//               flexGrow: 1,
//               marginRight: "5px",
//             }}
//           >
//             <a
//               style={{
//                 color: "white",
//                 textDecoration: "none",
//               }}
//               href="https://ai.soobati.com/auth/sign-up"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Sign Up
//             </a>
//           </button>
//           <input
//             style={{
//               backgroundColor: primaryColor,
//               color: "white",
//               padding: "10px 20px",
//               textAlign: "center",
//               textDecoration: "none",
//               display: "inline-block",
//               fontSize: "16px",
//               margin: "4px 2px",
//               cursor: "pointer",
//               borderRadius: "12px",
//               border: "none",
//               flexGrow: 1,
//               marginLeft: "5px",
//             }}
//             type="submit"
//             value="Login"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };
// export default Login;
// Final



const Login = ({ getTokenFrom }) => {
    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.StateContext);
    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [hoverS, setHoverS] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleLogin = (e) => {
        e.preventDefault();
        if (token === "") {
            setError("Please fill all the fields");
        }
        else {
            setError("");
            setLoading(true);
            _utils_services__WEBPACK_IMPORTED_MODULE_1__._userAccountService.loginWithToken({ token })
                .then((res) => {
                var _a, _b;
                chrome.storage.sync.set({ token: (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.token, user: (_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.user }, () => {
                    var _a;
                    getTokenFrom((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.token);
                    setLoading(false);
                });
            })
                .catch((err) => {
                setError("Invalid Credentials");
                setLoading(false);
            });
        }
    };
    const primaryColor = "#4456FF";
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // width: "100%",
            // height: "100vh",
            backgroundColor: "#f1f1f1",
            // padding: "20px",
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { onSubmit: handleLogin, style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "400px",
                padding: "20px",
                borderRadius: "15px",
                backgroundColor: "white",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: "/SoobatiAILogo.png", alt: "Logo", style: { width: "100px" } }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { style: { color: primaryColor, marginBottom: "-10px" } }, "Login to Soobati AI"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { style: { textAlign: "center", color: "#333", marginBottom: "20px", textDecoration: "bold",
                    fontSize: "14px", fontWeight: "bold"
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Your AI Companion for Life")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { style: { marginBottom: "20px", textAlign: "center", color: "#333" } }, "Paste your token to login. If you don't have a token, please sign up."),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", { placeholder: "Token", value: token, required: true, onChange: (e) => setToken(e.target.value), style: {
                    marginBottom: "10px",
                    padding: "10px",
                    borderRadius: "5px",
                    width: "100%",
                    height: "40px",
                    border: `1px solid ${primaryColor}`,
                    fontSize: "16px",
                    minHeight: "80px",
                } }),
            error && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { color: "red", marginBottom: "10px" } }, error)),
            loading && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { marginBottom: "10px", color: primaryColor } }, "Loading...")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { style: {
                        backgroundColor: hover ? "#3548d4" : primaryColor,
                        color: "white",
                        padding: "10px 20px",
                        textAlign: "center",
                        textDecoration: "none",
                        display: "inline-block",
                        fontSize: "16px",
                        margin: "4px 2px",
                        cursor: "pointer",
                        borderRadius: "12px",
                        border: "none",
                        flexGrow: 1,
                        marginRight: "5px",
                    }, onMouseLeave: () => setHover(false), onMouseOver: () => setHover(true) },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { style: {
                            color: "white",
                            textDecoration: "none",
                        }, href: "https://ai.soobati.com/auth/sign-up", target: "_blank", rel: "noopener noreferrer" }, "Sign Up")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { style: {
                        backgroundColor: hoverS ? "#3548d4" : primaryColor,
                        color: "white",
                        padding: "10px 20px",
                        textAlign: "center",
                        textDecoration: "none",
                        display: "inline-block",
                        fontSize: "16px",
                        margin: "4px 2px",
                        cursor: "pointer",
                        borderRadius: "12px",
                        border: "none",
                        flexGrow: 1,
                        marginLeft: "5px",
                    }, onMouseOver: () => setHoverS(true), onMouseLeave: () => setHoverS(false), type: "submit", value: "Login" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { style: { marginTop: "20px", color: "#777", textAlign: "center" } },
                "By logging in, you agree to our",
                " ",
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "https://ai.soobati.com/privacy-policy", target: "_blank", rel: "noopener noreferrer", style: { color: primaryColor } }, "Privacy Policy")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


/***/ }),

/***/ "./src/components/App/Logout.tsx":
/*!***************************************!*\
  !*** ./src/components/App/Logout.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Logout = ({ deleteToken }) => {
    const handleLogout = () => {
        chrome.storage.sync.set({ token: null }, () => {
            deleteToken(null);
            console.log("saved");
        });
    };
    const primaryColor = "#4456FF";
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { style: {
                borderRadius: "12px",
                backgroundColor: "white",
                padding: "10px 20px",
                textAlign: "center",
                fontSize: "16px",
                fontWeight: "500",
                color: primaryColor,
                transition: "background-color 200ms",
                border: "1px solid #d1d5db",
                cursor: "pointer",
                // fontWeight: "bold",
            }, onClick: handleLogout },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Logout"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logout);


/***/ }),

/***/ "./src/components/App/index.tsx":
/*!**************************************!*\
  !*** ./src/components/App/index.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/components/App/App.tsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_App__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/context/StateContext.tsx":
/*!*************************************************!*\
  !*** ./src/components/context/StateContext.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateContext": () => (/* binding */ StateContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/components/context/reducer/index.ts");


const initialState = {
    token: null,
    isAuthenticated: false,
    loading: true,
    error: null,
};
const StateContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(typeof initialState);
const StateContextProvider = ({ children }) => {
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_1__["default"], initialState);
    return (
    // <StateContext.Provider value={{ state, dispatch }}>
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, children)
    // </StateContext.Provider>
    );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StateContextProvider);


/***/ }),

/***/ "./src/components/context/creator/index.ts":
/*!*************************************************!*\
  !*** ./src/components/context/creator/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "login_fail": () => (/* binding */ login_fail),
/* harmony export */   "login_success": () => (/* binding */ login_success),
/* harmony export */   "logout": () => (/* binding */ logout)
/* harmony export */ });
const login_success = (state, action) => {
    return Object.assign(Object.assign({}, state), { token: action.token, isAuthenticated: true, loading: false });
};
const login_fail = (state, action) => {
    return Object.assign(Object.assign({}, state), { error: action.error, loading: false });
};
const logout = (state, action) => {
    return Object.assign(Object.assign({}, state), { token: null, isAuthenticated: false });
};



/***/ }),

/***/ "./src/components/context/reducer/index.ts":
/*!*************************************************!*\
  !*** ./src/components/context/reducer/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/components/context/types/index.ts");
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../creator */ "./src/components/context/creator/index.ts");


const reducer = (state, action) => {
    switch (action.type) {
        case _types__WEBPACK_IMPORTED_MODULE_0__.LOGIN_SUCCESS:
            return (0,_creator__WEBPACK_IMPORTED_MODULE_1__.login_success)(state, action);
        case _types__WEBPACK_IMPORTED_MODULE_0__.LOGIN_FAILURE:
            return (0,_creator__WEBPACK_IMPORTED_MODULE_1__.login_fail)(state, action);
        case _types__WEBPACK_IMPORTED_MODULE_0__.LOGOUT:
            return (0,_creator__WEBPACK_IMPORTED_MODULE_1__.logout)(state, action);
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);


/***/ }),

/***/ "./src/components/context/types/index.ts":
/*!***********************************************!*\
  !*** ./src/components/context/types/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOGIN_FAILURE": () => (/* binding */ LOGIN_FAILURE),
/* harmony export */   "LOGIN_SUCCESS": () => (/* binding */ LOGIN_SUCCESS),
/* harmony export */   "LOGOUT": () => (/* binding */ LOGOUT)
/* harmony export */ });
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';



/***/ }),

/***/ "./src/popup/index.tsx":
/*!*****************************!*\
  !*** ./src/popup/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var fontsource_roboto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fontsource-roboto */ "./node_modules/fontsource-roboto/index.css");
/* harmony import */ var _popup_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup.scss */ "./src/popup/popup.scss");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/App */ "./src/components/App/index.tsx");
/* harmony import */ var _components_context_StateContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/context/StateContext */ "./src/components/context/StateContext.tsx");





const container = document.getElementById("root-popup");
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);

root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_context_StateContext__WEBPACK_IMPORTED_MODULE_5__["default"], null,
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_App__WEBPACK_IMPORTED_MODULE_4__["default"], null)));


/***/ }),

/***/ "./src/utils/config.ts":
/*!*****************************!*\
  !*** ./src/utils/config.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONFIG": () => (/* binding */ CONFIG)
/* harmony export */ });
const CONFIG = {
    // BASE_URL: "http://localhost:8088/api",
    BASE_URL: "https://api.soobati.com/api",
    // BASE_URL: "https://curiously-major-quetzal.ngrok-free.app/api",
    // BASE_URL: "https://secondbrain.wtfglob.com/api",
    // BASE_URL: "https://secondbrain.soobati.com/api",
};
// matt.ns.cloudflare.com
// leia.ns.cloudflare.com


/***/ }),

/***/ "./src/utils/constant.ts":
/*!*******************************!*\
  !*** ./src/utils/constant.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_ATTACHMENT": () => (/* binding */ ADD_ATTACHMENT),
/* harmony export */   "ADD_COMMENT": () => (/* binding */ ADD_COMMENT),
/* harmony export */   "ADD_QUESTION": () => (/* binding */ ADD_QUESTION),
/* harmony export */   "ADD_RESPONSE": () => (/* binding */ ADD_RESPONSE),
/* harmony export */   "ADD_TAGS": () => (/* binding */ ADD_TAGS),
/* harmony export */   "ASSIGN_REMINDER": () => (/* binding */ ASSIGN_REMINDER),
/* harmony export */   "ASSIGN_TASK": () => (/* binding */ ASSIGN_TASK),
/* harmony export */   "BOOKMARK_BY_ID": () => (/* binding */ BOOKMARK_BY_ID),
/* harmony export */   "CREATE_BOOKMARK": () => (/* binding */ CREATE_BOOKMARK),
/* harmony export */   "CREATE_PROGRESS": () => (/* binding */ CREATE_PROGRESS),
/* harmony export */   "CREATE_QUIZ": () => (/* binding */ CREATE_QUIZ),
/* harmony export */   "CREATE_REMINDER": () => (/* binding */ CREATE_REMINDER),
/* harmony export */   "CREATE_TASK": () => (/* binding */ CREATE_TASK),
/* harmony export */   "CREATE_USER": () => (/* binding */ CREATE_USER),
/* harmony export */   "DELETE_BOOKMARK": () => (/* binding */ DELETE_BOOKMARK),
/* harmony export */   "DELETE_PROGRESS": () => (/* binding */ DELETE_PROGRESS),
/* harmony export */   "DELETE_QUIZ": () => (/* binding */ DELETE_QUIZ),
/* harmony export */   "DELETE_REMINDER": () => (/* binding */ DELETE_REMINDER),
/* harmony export */   "DELETE_TASK": () => (/* binding */ DELETE_TASK),
/* harmony export */   "GET_BOOKMARK": () => (/* binding */ GET_BOOKMARK),
/* harmony export */   "GET_BOOKMARKS_BY_COMPANY": () => (/* binding */ GET_BOOKMARKS_BY_COMPANY),
/* harmony export */   "GET_BOOKMARKS_BY_COMPANY_AND_SEARCH": () => (/* binding */ GET_BOOKMARKS_BY_COMPANY_AND_SEARCH),
/* harmony export */   "GET_BOOKMARKS_BY_COMPANY_AND_TAG": () => (/* binding */ GET_BOOKMARKS_BY_COMPANY_AND_TAG),
/* harmony export */   "GET_BOOKMARKS_BY_TAG": () => (/* binding */ GET_BOOKMARKS_BY_TAG),
/* harmony export */   "GET_BOOKMARKS_BY_TAG_AND_SEARCH": () => (/* binding */ GET_BOOKMARKS_BY_TAG_AND_SEARCH),
/* harmony export */   "GET_BOOKMARKS_BY_USER": () => (/* binding */ GET_BOOKMARKS_BY_USER),
/* harmony export */   "GET_BOOKMARKS_BY_USER_AND_COMPANY": () => (/* binding */ GET_BOOKMARKS_BY_USER_AND_COMPANY),
/* harmony export */   "GET_BOOKMARKS_BY_USER_AND_SEARCH": () => (/* binding */ GET_BOOKMARKS_BY_USER_AND_SEARCH),
/* harmony export */   "GET_BOOKMARKS_BY_USER_AND_TAG": () => (/* binding */ GET_BOOKMARKS_BY_USER_AND_TAG),
/* harmony export */   "GET_BOOKMARKS_BY_USER_COMPANY_AND_SEARCH": () => (/* binding */ GET_BOOKMARKS_BY_USER_COMPANY_AND_SEARCH),
/* harmony export */   "GET_BOOKMARKS_BY_USER_COMPANY_AND_TAG": () => (/* binding */ GET_BOOKMARKS_BY_USER_COMPANY_AND_TAG),
/* harmony export */   "GET_BOOKMARK_BY_ID": () => (/* binding */ GET_BOOKMARK_BY_ID),
/* harmony export */   "GET_COMPANY_BOOKMARKS": () => (/* binding */ GET_COMPANY_BOOKMARKS),
/* harmony export */   "GET_COMPANY_REMINDERS": () => (/* binding */ GET_COMPANY_REMINDERS),
/* harmony export */   "GET_COMPANY_TASKS": () => (/* binding */ GET_COMPANY_TASKS),
/* harmony export */   "GET_PERSONAL_REMINDERS": () => (/* binding */ GET_PERSONAL_REMINDERS),
/* harmony export */   "GET_PERSONAL_TASKS": () => (/* binding */ GET_PERSONAL_TASKS),
/* harmony export */   "GET_PROGRESS": () => (/* binding */ GET_PROGRESS),
/* harmony export */   "GET_PROGRESS_BY_ID": () => (/* binding */ GET_PROGRESS_BY_ID),
/* harmony export */   "GET_QUIZZES": () => (/* binding */ GET_QUIZZES),
/* harmony export */   "GET_QUIZ_BY_ID": () => (/* binding */ GET_QUIZ_BY_ID),
/* harmony export */   "GET_REMINDER": () => (/* binding */ GET_REMINDER),
/* harmony export */   "GET_REMINDERS_ASSIGNED_TO_USER": () => (/* binding */ GET_REMINDERS_ASSIGNED_TO_USER),
/* harmony export */   "GET_REMINDERS_BY_USER": () => (/* binding */ GET_REMINDERS_BY_USER),
/* harmony export */   "GET_SHARED_BOOKMARKS": () => (/* binding */ GET_SHARED_BOOKMARKS),
/* harmony export */   "GET_SINGLE_QUIZ": () => (/* binding */ GET_SINGLE_QUIZ),
/* harmony export */   "GET_SUMMARY_BY_VIDEO_ID": () => (/* binding */ GET_SUMMARY_BY_VIDEO_ID),
/* harmony export */   "GET_TASK": () => (/* binding */ GET_TASK),
/* harmony export */   "GET_TASKS_ASSIGNED_TO_USER": () => (/* binding */ GET_TASKS_ASSIGNED_TO_USER),
/* harmony export */   "GET_TASKS_BY_USER": () => (/* binding */ GET_TASKS_BY_USER),
/* harmony export */   "GET_USER": () => (/* binding */ GET_USER),
/* harmony export */   "INCREMENT_ACCESS_COUNT": () => (/* binding */ INCREMENT_ACCESS_COUNT),
/* harmony export */   "LOGO_BASE64": () => (/* binding */ LOGO_BASE64),
/* harmony export */   "MARK_REMINDER_AS_NOTIFIED": () => (/* binding */ MARK_REMINDER_AS_NOTIFIED),
/* harmony export */   "MARK_TASK_AS_COMPLETED": () => (/* binding */ MARK_TASK_AS_COMPLETED),
/* harmony export */   "REASSIGN_REMINDER": () => (/* binding */ REASSIGN_REMINDER),
/* harmony export */   "REASSIGN_TASK": () => (/* binding */ REASSIGN_TASK),
/* harmony export */   "REMOVE_ATTACHMENT": () => (/* binding */ REMOVE_ATTACHMENT),
/* harmony export */   "REMOVE_QUESTION": () => (/* binding */ REMOVE_QUESTION),
/* harmony export */   "REMOVE_TAGS": () => (/* binding */ REMOVE_TAGS),
/* harmony export */   "SEARCH_BOOKMARKS": () => (/* binding */ SEARCH_BOOKMARKS),
/* harmony export */   "SHARE_BOOKMARK": () => (/* binding */ SHARE_BOOKMARK),
/* harmony export */   "UNSHARE_BOOKMARK": () => (/* binding */ UNSHARE_BOOKMARK),
/* harmony export */   "UPDATE_BOOKMARK": () => (/* binding */ UPDATE_BOOKMARK),
/* harmony export */   "UPDATE_PROGRESS": () => (/* binding */ UPDATE_PROGRESS),
/* harmony export */   "UPDATE_QUIZ": () => (/* binding */ UPDATE_QUIZ),
/* harmony export */   "UPDATE_REMINDER": () => (/* binding */ UPDATE_REMINDER),
/* harmony export */   "UPDATE_TASK": () => (/* binding */ UPDATE_TASK),
/* harmony export */   "UPDATE_USER": () => (/* binding */ UPDATE_USER),
/* harmony export */   "USER_LOGIN": () => (/* binding */ USER_LOGIN),
/* harmony export */   "USER_PROFILE": () => (/* binding */ USER_PROFILE)
/* harmony export */ });
// user
const USER_LOGIN = "/users/login-user-with-token";
const USER_PROFILE = (_id) => {
    return `/users/${_id}`;
};
const CREATE_USER = "/users";
const GET_USER = "/users";
const UPDATE_USER = "/users";
// bookmark
const CREATE_BOOKMARK = "/bookmarks";
const GET_BOOKMARK = "/bookmarks";
const GET_SUMMARY_BY_VIDEO_ID = "/bookmarks/get-summary-by-videoid";
const GET_BOOKMARK_BY_ID = (id) => `/bookmarks/${id}`;
const BOOKMARK_BY_ID = (id) => `bookmarks/${id}`;
const UPDATE_BOOKMARK = "/bookmarks";
const DELETE_BOOKMARK = "/bookmarks";
const SHARE_BOOKMARK = "/bookmarks/share";
const UNSHARE_BOOKMARK = "/bookmarks/unshare";
const GET_SHARED_BOOKMARKS = "/bookmarks/shared";
const GET_COMPANY_BOOKMARKS = "/bookmarks/company";
const INCREMENT_ACCESS_COUNT = "/bookmarks/access-count";
const ADD_TAGS = "/bookmarks/add-tags";
const REMOVE_TAGS = "/bookmarks/remove-tags";
// Aggrgation
const GET_BOOKMARKS_BY_TAG = "/bookmarks/tag";
const GET_BOOKMARKS_BY_USER = "/bookmarks/user";
const GET_BOOKMARKS_BY_COMPANY = "/bookmarks/company";
const GET_BOOKMARKS_BY_USER_AND_COMPANY = "/bookmarks/user-company";
const GET_BOOKMARKS_BY_USER_AND_TAG = "/bookmarks/user-tag";
const GET_BOOKMARKS_BY_COMPANY_AND_TAG = "/bookmarks/company-tag";
const GET_BOOKMARKS_BY_USER_COMPANY_AND_TAG = "/bookmarks/user-company-tag";
const GET_BOOKMARKS_BY_USER_AND_SEARCH = "/bookmarks/user-search";
const GET_BOOKMARKS_BY_COMPANY_AND_SEARCH = "/bookmarks/company-search";
const GET_BOOKMARKS_BY_USER_COMPANY_AND_SEARCH = "/bookmarks/user-company-search";
const GET_BOOKMARKS_BY_TAG_AND_SEARCH = "/bookmarks/tag-search";
// end
const SEARCH_BOOKMARKS = "/bookmarks/search";
// task
const CREATE_TASK = "/tasks";
const GET_TASK = "/tasks";
const UPDATE_TASK = "/tasks";
const DELETE_TASK = "/tasks";
const ASSIGN_TASK = "/tasks/assign";
const REASSIGN_TASK = "/tasks/reassign";
const GET_TASKS_BY_USER = "/tasks/user";
const GET_TASKS_ASSIGNED_TO_USER = "/tasks/assigned";
const GET_PERSONAL_TASKS = "/tasks/personal";
const GET_COMPANY_TASKS = "/tasks/company";
const MARK_TASK_AS_COMPLETED = "/tasks/mark-completed";
const ADD_COMMENT = "/tasks/add-comment";
const ADD_ATTACHMENT = "/tasks/add-attachment";
const REMOVE_ATTACHMENT = "/tasks/remove-attachment";
// reminder
const CREATE_REMINDER = "/reminders";
const GET_REMINDER = "/reminders";
const UPDATE_REMINDER = "/reminders";
const DELETE_REMINDER = "/reminders";
const ASSIGN_REMINDER = "/reminders/assign";
const REASSIGN_REMINDER = "/reminders/reassign";
const MARK_REMINDER_AS_NOTIFIED = "/reminders/mark-notified";
const GET_REMINDERS_BY_USER = "/reminders/user";
const GET_REMINDERS_ASSIGNED_TO_USER = "/reminders/assigned";
const GET_PERSONAL_REMINDERS = "/reminders/personal";
const GET_COMPANY_REMINDERS = "/reminders/company";
const LOGO_BASE64 = "data:image/png;base64,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";
// Quiz Prgrogress
const CREATE_PROGRESS = 'quiz-progress';
const GET_PROGRESS = 'quiz-progress';
const GET_PROGRESS_BY_ID = (id) => `quiz-progress/${id}`;
const UPDATE_PROGRESS = 'quiz-progress';
const DELETE_PROGRESS = 'quiz-progress';
const ADD_RESPONSE = (progressId) => `quiz-progress/${progressId}/responses`;
// Quiz
const CREATE_QUIZ = 'quiz';
const GET_QUIZZES = 'quiz';
const GET_SINGLE_QUIZ = 'quiz/url';
const GET_QUIZ_BY_ID = (id) => `quiz/${id}`;
const UPDATE_QUIZ = 'quiz';
const DELETE_QUIZ = 'quiz';
const ADD_QUESTION = (quizId) => `quiz/${quizId}/questions`;
const REMOVE_QUESTION = (quizId, questionId) => `/quiz/${quizId}/questions/${questionId}`;


/***/ }),

/***/ "./src/utils/interceptors/token.interceptors.ts":
/*!******************************************************!*\
  !*** ./src/utils/interceptors/token.interceptors.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/utils/config.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const axiosInterceptorInstance = axios__WEBPACK_IMPORTED_MODULE_1__["default"].create({
    baseURL: _config__WEBPACK_IMPORTED_MODULE_0__.CONFIG.BASE_URL,
});
let showLoader = false;
let skipErrorPopup = false;
// Request interceptor
axiosInterceptorInstance.interceptors.request.use((request) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let headers = {};
    let token = "";
    console.log("TOKEN BEFORE", token);
    try {
        const result = yield new Promise((resolve, reject) => {
            chrome.storage.sync.get(["token"], function (result) {
                if (chrome.runtime.lastError) {
                    return reject(chrome.runtime.lastError);
                }
                resolve(result.token);
            });
        });
        token = result;
    }
    catch (error) {
        console.error("Error retrieving token:", error);
    }
    let config = {};
    config = JSON.parse(((_a = request === null || request === void 0 ? void 0 : request.headers) === null || _a === void 0 ? void 0 : _a.config) || "{}");
    console.log("TOKEN AFTER", token);
    if (token) {
        headers["authorization"] = "Bearer " + token;
        console.log("token from 40", token, headers);
        // headers["secretkey"] = secretkey || "";
    }
    let customHeader = {
        devicedetails: {
            token: "device to",
            deviceId: "nmmzzefewfwf",
        },
        offset: new Date().getTimezoneOffset(),
        lang: "en",
        "Content-Type": "application/json",
    };
    if (config &&
        config.optionalHeaders &&
        Object.keys(config.optionalHeaders).length) {
        customHeader = Object.assign(Object.assign({}, customHeader), config.optionalHeaders);
    }
    if (customHeader) {
        if (customHeader === null || customHeader === void 0 ? void 0 : customHeader.devicedetails) {
            headers["devicedetails"] = JSON.stringify(customHeader === null || customHeader === void 0 ? void 0 : customHeader.devicedetails);
            headers["offset"] = JSON.stringify(new Date().getTimezoneOffset());
            headers["lang"] = "en";
        }
    }
    request.headers = Object.assign(Object.assign({}, request.headers), headers);
    if (config && config.showLoader) {
        showLoader = config.showLoader;
        // loader(true);
    }
    if (config === null || config === void 0 ? void 0 : config.skipErrorPopup) {
        skipErrorPopup = config.skipErrorPopup;
    }
    return request;
}), (error) => {
    if (showLoader) {
        // loader(false);
    }
    console.log({ requestError: error });
    return;
});
// End of Request interceptor
// Response interceptor
axiosInterceptorInstance.interceptors.response.use((response) => {
    if (showLoader) {
        // loader(false);
    }
    return response;
}, (error) => {
    var _a, _b;
    const response = error === null || error === void 0 ? void 0 : error.response;
    if (showLoader) {
        // loader(false);
    }
    if (!skipErrorPopup) {
        if (((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) &&
            typeof ((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.message.message) === "string") {
            // _utilityService.showErrorAlert(
            //   response?.data?.message.message || 'Something went wrong',
            // );
        }
        else if ((response === null || response === void 0 ? void 0 : response.data.message) == "No token provided." &&
            (response === null || response === void 0 ? void 0 : response.data.auth) == false) {
            null;
        }
        else {
            // _utilityService.showErrorAlert(
            //   response?.data?.message || 'Something went wrong',
            // );
        }
    }
    throw new Error(error);
});
// End of Response interceptor
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInterceptorInstance);


/***/ }),

/***/ "./src/utils/services/api/bookmark.service.ts":
/*!****************************************************!*\
  !*** ./src/utils/services/api/bookmark.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookmarkAccountService": () => (/* binding */ BookmarkAccountService),
/* harmony export */   "_bookmarkAccountService": () => (/* binding */ _bookmarkAccountService)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constant */ "./src/utils/constant.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/utils/services/http.service.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class BookmarkAccountService extends _http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService {
    constructor() {
        super();
    }
    createBookmark(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post(_constant__WEBPACK_IMPORTED_MODULE_0__.CREATE_BOOKMARK, data);
        });
    }
    getBookmarkById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get((0,_constant__WEBPACK_IMPORTED_MODULE_0__.GET_BOOKMARK_BY_ID)(id));
        });
    }
    getBookmarks(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get(_constant__WEBPACK_IMPORTED_MODULE_0__.GET_BOOKMARK, query);
        });
    }
    getSummaryByVideoId(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post(_constant__WEBPACK_IMPORTED_MODULE_0__.GET_SUMMARY_BY_VIDEO_ID, payload);
        });
    }
}
const _bookmarkAccountService = new BookmarkAccountService();


/***/ }),

/***/ "./src/utils/services/api/reminder.service.ts":
/*!****************************************************!*\
  !*** ./src/utils/services/api/reminder.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReminderAccountService": () => (/* binding */ ReminderAccountService),
/* harmony export */   "_reminderAccountService": () => (/* binding */ _reminderAccountService)
/* harmony export */ });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http.service */ "./src/utils/services/http.service.ts");

class ReminderAccountService extends _http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
    constructor() {
        super();
    }
}
const _reminderAccountService = new ReminderAccountService();


/***/ }),

/***/ "./src/utils/services/api/task.service.ts":
/*!************************************************!*\
  !*** ./src/utils/services/api/task.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskService": () => (/* binding */ TaskService),
/* harmony export */   "_taskService": () => (/* binding */ _taskService)
/* harmony export */ });
/* harmony import */ var _task_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../task.urls */ "./src/utils/task.urls.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/utils/services/http.service.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class TaskService extends _http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService {
    constructor() {
        super();
    }
    createTask(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post(_task_urls__WEBPACK_IMPORTED_MODULE_0__.CREATE_TASK, payload);
        });
    }
    getTaskById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get((0,_task_urls__WEBPACK_IMPORTED_MODULE_0__.GET_TASK_BY_ID)(id));
        });
    }
    getTasksByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get((0,_task_urls__WEBPACK_IMPORTED_MODULE_0__.GET_TASKS_BY_USER)(userId));
        });
    }
    getTasksAssignedToUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get((0,_task_urls__WEBPACK_IMPORTED_MODULE_0__.GET_TASKS_ASSIGNED_TO_USER)(userId));
        });
    }
    getTaskListing(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get(_task_urls__WEBPACK_IMPORTED_MODULE_0__.GET_TASK_LISTING, query);
        });
    }
    getCompanyTasks(companyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get((0,_task_urls__WEBPACK_IMPORTED_MODULE_0__.GET_COMPANY_TASKS)(companyId));
        });
    }
    updateTask(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.put((0,_task_urls__WEBPACK_IMPORTED_MODULE_0__.UPDATE_TASK)(id), payload);
        });
    }
    deleteTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.delete((0,_task_urls__WEBPACK_IMPORTED_MODULE_0__.DELETE_TASK)(id));
        });
    }
    assignTask(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post((0,_task_urls__WEBPACK_IMPORTED_MODULE_0__.ASSIGN_TASK)(id), payload);
        });
    }
    reassignTask(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post((0,_task_urls__WEBPACK_IMPORTED_MODULE_0__.REASSIGN_TASK)(id), payload);
        });
    }
    // async markTaskAsCompleted(id: string) {
    //   return await this.post(MARK_TASK_AS_COMPLETED(id));
    // }
    addCommentToTask(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post((0,_task_urls__WEBPACK_IMPORTED_MODULE_0__.ADD_COMMENT_TO_TASK)(id), payload);
        });
    }
    addAttachmentToTask(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post((0,_task_urls__WEBPACK_IMPORTED_MODULE_0__.ADD_ATTACHMENT_TO_TASK)(id), payload);
        });
    }
    removeAttachmentFromTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.delete((0,_task_urls__WEBPACK_IMPORTED_MODULE_0__.REMOVE_ATTACHMENT_FROM_TASK)(id));
        });
    }
    updateTaskStatus(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.patch((0,_task_urls__WEBPACK_IMPORTED_MODULE_0__.UPDATE_TASK_STATUS)(id), payload);
        });
    }
}
const _taskService = new TaskService();


/***/ }),

/***/ "./src/utils/services/api/user.service.ts":
/*!************************************************!*\
  !*** ./src/utils/services/api/user.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserAccountService": () => (/* binding */ UserAccountService),
/* harmony export */   "_userAccountService": () => (/* binding */ _userAccountService)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constant */ "./src/utils/constant.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/utils/services/http.service.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class UserAccountService extends _http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService {
    constructor() {
        super();
    }
    loginWithToken(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post(_constant__WEBPACK_IMPORTED_MODULE_0__.USER_LOGIN, data);
        });
    }
    registerUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post(_constant__WEBPACK_IMPORTED_MODULE_0__.USER_LOGIN, data);
        });
    }
    // analytics
    getAnalytics() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get((0,_constant__WEBPACK_IMPORTED_MODULE_0__.USER_PROFILE)("analytics"));
        });
    }
    getSingleUserProfile(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get((0,_constant__WEBPACK_IMPORTED_MODULE_0__.USER_PROFILE)(_id));
        });
    }
}
const _userAccountService = new UserAccountService();


/***/ }),

/***/ "./src/utils/services/http.service.ts":
/*!********************************************!*\
  !*** ./src/utils/services/http.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var _interceptors_token_interceptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interceptors/token.interceptors */ "./src/utils/interceptors/token.interceptors.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/utils/config.ts");
// import axiosInterceptorInstance from '../../interceptors/token.interceptors';


// import {} from '../../env';
class HttpService {
    constructor() {
        this.http = _interceptors_token_interceptors__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.apiUrl = _config__WEBPACK_IMPORTED_MODULE_1__.CONFIG.BASE_URL;
    }
    //
    post(url, data, config = { showLoader: true }) {
        console.log("this.apiUrl + url", this.apiUrl + url);
        console.log("data from post data", data);
        return this.http
            .post(this.apiUrl + url, data, this.getCustomHeader(config))
            .then((response) => {
            return response.data;
        });
    }
    put(url, data, config = { showLoader: true }) {
        return this.http
            .put(this.apiUrl + url, data, this.getCustomHeader(config))
            .then((response) => response.data);
    }
    patch(url, data, config = { showLoader: true }) {
        return this.http
            .patch(this.apiUrl + url, data, this.getCustomHeader(config))
            .then((response) => response.data);
    }
    get(url, httpParams, config = { showLoader: true }) {
        for (let item in httpParams) {
            if (httpParams[item] === "" ||
                httpParams[item] === undefined ||
                httpParams[item] === null) {
                delete httpParams[item];
            }
        }
        const header = this.getCustomHeader(config);
        if (httpParams) {
            header["params"] = httpParams;
        }
        console.log("this.apiUrl + url", {
            url: this.apiUrl + url,
            header: header,
        });
        return this.http
            .get(this.apiUrl + url, header)
            .then((response) => response.data);
    }
    delete(url, httpParams, config) {
        for (let item in httpParams) {
            if (httpParams[item] === "" ||
                httpParams[item] === undefined ||
                httpParams[item] === null) {
                delete httpParams[item];
            }
        }
        const header = this.getCustomHeader(config);
        if (httpParams) {
            header["params"] = httpParams;
        }
        return this.http
            .delete(this.apiUrl + url, header)
            .then((response) => response.data);
    }
    getCustomHeader(config) {
        return {
            headers: {
                config: JSON.stringify(config || {}),
            },
        };
    }
    getExternalHeader() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return headers;
    }
}


/***/ }),

/***/ "./src/utils/services/index.ts":
/*!*************************************!*\
  !*** ./src/utils/services/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_bookmarkAccountService": () => (/* reexport safe */ _api_bookmark_service__WEBPACK_IMPORTED_MODULE_0__._bookmarkAccountService),
/* harmony export */   "_reminderAccountService": () => (/* reexport safe */ _api_reminder_service__WEBPACK_IMPORTED_MODULE_1__._reminderAccountService),
/* harmony export */   "_taskService": () => (/* reexport safe */ _api_task_service__WEBPACK_IMPORTED_MODULE_2__._taskService),
/* harmony export */   "_userAccountService": () => (/* reexport safe */ _api_user_service__WEBPACK_IMPORTED_MODULE_3__._userAccountService)
/* harmony export */ });
/* harmony import */ var _api_bookmark_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/bookmark.service */ "./src/utils/services/api/bookmark.service.ts");
/* harmony import */ var _api_reminder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/reminder.service */ "./src/utils/services/api/reminder.service.ts");
/* harmony import */ var _api_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/task.service */ "./src/utils/services/api/task.service.ts");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/user.service */ "./src/utils/services/api/user.service.ts");





// userService,};


/***/ }),

/***/ "./src/utils/task.urls.ts":
/*!********************************!*\
  !*** ./src/utils/task.urls.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_ATTACHMENT_TO_TASK": () => (/* binding */ ADD_ATTACHMENT_TO_TASK),
/* harmony export */   "ADD_COMMENT_TO_TASK": () => (/* binding */ ADD_COMMENT_TO_TASK),
/* harmony export */   "ASSIGN_TASK": () => (/* binding */ ASSIGN_TASK),
/* harmony export */   "CREATE_TASK": () => (/* binding */ CREATE_TASK),
/* harmony export */   "DELETE_TASK": () => (/* binding */ DELETE_TASK),
/* harmony export */   "GET_COMPANY_TASKS": () => (/* binding */ GET_COMPANY_TASKS),
/* harmony export */   "GET_PERSONAL_TASKS": () => (/* binding */ GET_PERSONAL_TASKS),
/* harmony export */   "GET_TASKS_ASSIGNED_TO_USER": () => (/* binding */ GET_TASKS_ASSIGNED_TO_USER),
/* harmony export */   "GET_TASKS_BY_USER": () => (/* binding */ GET_TASKS_BY_USER),
/* harmony export */   "GET_TASK_BY_ID": () => (/* binding */ GET_TASK_BY_ID),
/* harmony export */   "GET_TASK_LISTING": () => (/* binding */ GET_TASK_LISTING),
/* harmony export */   "MARK_TASK_AS_COMPLETED": () => (/* binding */ MARK_TASK_AS_COMPLETED),
/* harmony export */   "REASSIGN_TASK": () => (/* binding */ REASSIGN_TASK),
/* harmony export */   "REMOVE_ATTACHMENT_FROM_TASK": () => (/* binding */ REMOVE_ATTACHMENT_FROM_TASK),
/* harmony export */   "UPDATE_TASK": () => (/* binding */ UPDATE_TASK),
/* harmony export */   "UPDATE_TASK_STATUS": () => (/* binding */ UPDATE_TASK_STATUS)
/* harmony export */ });
const CREATE_TASK = "/tasks";
const GET_TASK_BY_ID = (id) => `/tasks/${id}`;
const GET_TASKS_BY_USER = (userId) => `/tasks/user/${userId}`;
const GET_TASKS_ASSIGNED_TO_USER = (userId) => `/tasks/assigned/${userId}`;
const GET_PERSONAL_TASKS = (userId) => `/tasks/personal/${userId}`;
const GET_COMPANY_TASKS = (companyId) => `/tasks/company/${companyId}`;
const UPDATE_TASK = (id) => `/tasks/${id}`;
const DELETE_TASK = (id) => `/tasks/${id}`;
const ASSIGN_TASK = (id) => `/tasks/assign/${id}`;
const REASSIGN_TASK = (id) => `/tasks/reassign/${id}`;
const MARK_TASK_AS_COMPLETED = (id) => `/tasks/complete/${id}`;
const ADD_COMMENT_TO_TASK = (id) => `/tasks/comment/${id}`;
const ADD_ATTACHMENT_TO_TASK = (id) => `/tasks/attachment/${id}`;
const REMOVE_ATTACHMENT_FROM_TASK = (id) => `/tasks/attachment/${id}`;
const GET_TASK_LISTING = "tasks/listing";
const UPDATE_TASK_STATUS = (id) => `/tasks/status/${id}`;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcodingshodkk_extension"] = self["webpackChunkcodingshodkk_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-b53f7e","vendors-node_modules_fontsource-roboto_index_css-node_modules_axios_lib_axios_js"], () => (__webpack_require__("./src/popup/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map