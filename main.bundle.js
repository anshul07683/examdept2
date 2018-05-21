webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/alloted/alloted.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alloted/alloted.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\r\n  <h4>Alloted Examiners</h4>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col-5\">\r\n        <div class=\"form-group\">\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-addon\">\r\n                <i class=\"fas fa-search\"></i>\r\n              </div>\r\n              <input type=\"text\" id=\"search\" class=\"form-control\" name=\"searchString\" placeholder=\"Type Exam Code...\" [(ngModel)]=\"searchString\">\r\n            </div>\r\n        </div>\r\n      </div>\r\n      \r\n    <div class=\"col-2\">\r\n      <input type=\"checkbox\" id=\"click\" style=\"display:none;\" />\r\n      <label class=\"button-dark\" for=\"click\">\r\n        <a id=\"add\" class=\"btn btn-dark btn-block text-white\" (click)=\"appointmentLetter()\">Generate Proposal letter</a>\r\n      </label>\r\n    </div>\r\n</div>\r\n\r\n   <div> <!-- *ngIf='alloted_examiners.length>0'> -->\r\n    <table class=\"table table-striped table-bordered table-sm\">\r\n      <thead class=\"table-dark\">\r\n        <tr>\r\n          <th> <div class=\"ui-g\" style=\"margin-bottom:10px\">\r\n          <input type=\"checkbox\" name=\"selectAll\" [(ngModel)]=\"all\" (change)=\"selectAll()\">\r\n          </div></th>\r\n          <th>#</th>\r\n          <th>Exam Code</th>\r\n          <!-- <th>Subject Group</th> -->\r\n          <th>Examiner</th>\r\n          <th>Type</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let alloted of alloted_examiners | filter : 'exam_code' : searchString | paginate: { itemsPerPage: 5, currentPage: p}; let idx = index\">\r\n          <td> <input type=\"checkbox\" name=\"cb\" [checked]=\"all\" value=\"{{alloted.exam_code}}\" (change)=\"toggleSelection(alloted.exam_code)\"></td>\r\n          <th scope=\"row\">{{idx+1}}</th>\r\n          \r\n         \r\n          <td>{{alloted.exam_code | uppercase}}</td>\r\n          <!-- <td>{{alloted.subject_code}}</td> -->\r\n          <!-- <td ><span *ngFor=\"let ms of mappedSubjects[ec.examCode]; let last = last\">{{ms.scode}}\r\n            <span *ngIf=\"!last\">/</span> -->\r\n          <!-- <td><span *ngFor=\"let sg of groups[idx]\">{{sg.Code}}/</span></td> -->\r\n          <td>{{alloted.name | uppercase}}</td>\r\n          <td>{{alloted.type | uppercase}}</td>\r\n          <!-- <td>\r\n            <div>\r\n              <div class=\"row\">\r\n              <div class=\"col-8\">\r\n                  <select class=\"form-control\" id=\"#ps\" [(ngModel)]=\"ps_name[idx]\" *ngIf=\"!alloted.ps_name\">  \r\n                      <option value=\"{{alloted.internal_examiner}}\">{{alloted.internal_examiner}}</option>\r\n                      <option value=\"{{alloted.external_examiner}}\">{{alloted.external_examiner}}</option>\r\n                </select>\r\n                <div *ngIf=\"alloted.ps_name\">{{alloted.ps_name}}</div>\r\n              </div>\r\n              <div class=\"col-4\" *ngIf=\"!alloted.ps_name\">\r\n                  <button (click)=\"updateAlloted(alloted, idx)\" class=\"btn btn-sm btn-outline-success\">Update</button>\r\n              </div> \r\n            </div>\r\n          </div>\r\n          </td> -->\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n    <div class=\"form-group export-wrapper\">\r\n        <input type=\"button\" class=\"btn btn-block btn-sm btn-outline-success form-control\" (click)=\"doit('xlsx')\" value=\"Export\">\r\n    </div>\r\n    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/alloted/alloted.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllotedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_subject_service__ = __webpack_require__("../../../../../src/app/services/subject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alloted_service__ = __webpack_require__("../../../../../src/app/services/alloted.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular5_toaster__ = __webpack_require__("../../../../angular5-toaster/dist/bundles/angular5-toaster.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular5_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular5_toaster__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_xlsx__ = __webpack_require__("../../../../xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_examiner_service__ = __webpack_require__("../../../../../src/app/services/examiner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_department_service__ = __webpack_require__("../../../../../src/app/services/department.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var AllotedComponent = (function () {
    function AllotedComponent(http, subjectService, examinerSerivce, allotedService, toasterService, departmentService, notificationService) {
        this.http = http;
        this.subjectService = subjectService;
        this.examinerSerivce = examinerSerivce;
        this.allotedService = allotedService;
        this.toasterService = toasterService;
        this.departmentService = departmentService;
        this.notificationService = notificationService;
        this.ext_ex_codes = [];
        this.int_ex_codes = [];
        this.examCodesArray = [];
        this.allotedExamCodes = [];
        this.alloted_examiners = [];
        this.selectedExaminerToNotify = [];
        this.selectedValues = [];
        this.ranges = [];
        this.message = '';
        this.emails = [];
        this.data = {};
        this.groups = [];
        this.allot = {
            subject_code: '',
            exam_code: '',
            examiner: '',
            type: ''
        };
        this.toAllot = [];
        this.ps_name = [];
        this.subjectGroups = [];
        this.allot = {
            subject_code: '',
            exam_code: '',
            examiner: '',
            type: ''
        };
    }
    AllotedComponent.prototype.ngOnInit = function () {
        this.getCodes();
        this.getDepartments();
        // this.getRange(this.sc);
        // console.log(this.subjects);
        this.getAlloted();
        // this.getSubjectGroups('BM29003');
        this.myform = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormGroup"]({
            scode: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required
            ]),
            internal: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"](''),
            external: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"](''),
            ext_ex_codes: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"](''),
            int_ex_codes: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('')
        });
    };
    AllotedComponent.prototype.isValid = function (field) {
        return !this.myform.get(field).valid && this.myform.get(field).touched;
    };
    AllotedComponent.prototype.getCodes = function () {
        var _this = this;
        this.subjectService.getSubjects().subscribe(function (res) {
            _this.subjects = res;
            // console.log(this.subjects);
        });
    };
    //   allotExaminers() {
    //     if(this.allot_internal === '' && this.allot_external === ''){
    //       this.toasterService.pop('info', 'No Examiner to Allot. Please Select atleast one');
    //       return;
    //     }
    //     else {
    //         if(this.allot_internal != '' && this.allot_internal != null){
    //           this.dupAllot = {
    //             subject_code: this.allot.subject_code,
    //             examiner: this.allot_internal,
    //             type: 'internal',
    //             exam_code: this.int_sub_code || null
    //           }
    //           this.toAllot.push(this.dupAllot);
    //         }
    //       if(this.allot_external != '' && this.allot_external != null ){
    //         this.dupAllot = {
    //           subject_code: this.allot.subject_code,
    //           examiner: this.allot_external,
    //           type: 'external',
    //           exam_code: this.ext_sub_code || null,
    //         }
    //       this.toAllot.push(this.dupAllot);
    //     }
    //         this.allotedService.addAlloted(this.toAllot).subscribe(res => {
    //           if (res.status === true) {
    //             this.toasterService.pop('success', res.message);
    //             this.getAlloted();
    //           }
    //           else{
    //             this.toasterService.pop('error', res.message);
    //           }
    //         });
    //     this.allot = {
    //       subject_code: '',
    //       exam_code: '',
    //       examiner: '',
    //       type: ''
    //     };
    //     this.allot_internal = '',
    //     this.allot_external = '',
    //     this.toAllot = [];
    //     this.ranges = [];
    //     this.closex();
    //   }
    // }
    AllotedComponent.prototype.getAlloted = function () {
        var _this = this;
        this.examinerSerivce.getExaminers().subscribe(function (res) {
            _this.alloted_examiners = res;
            for (var i = 0; i < _this.alloted_examiners.length; i++) {
                _this.alloted_examiners[i]['selected'] = false;
                //this.getSubjectGroups(this.alloted_examiners[i].subject_code);
            }
            // console.log(this.alloted_examiners);
        });
    };
    AllotedComponent.prototype.getDepartments = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.departmentService.getDepartments().toPromise().then(function (res) {
                            _this.departments = res;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AllotedComponent.prototype.getRange = function (ex_name, type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var rangeFound;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rangeFound = false;
                        return [4 /*yield*/, this.departmentService.getDepartment(ex_name).toPromise().then(function (res) {
                                _this.dept_name = res[0].department;
                            })];
                    case 1:
                        _a.sent();
                        this.departments.forEach(function (item) {
                            Object.keys(item).forEach(function (key) {
                                if (item[key] === _this.dept_name) {
                                    rangeFound = true;
                                    _this.createRangeArray(item['start'], item['end'], type);
                                    return;
                                }
                            });
                        });
                        if (rangeFound == false) {
                            this.ranges.push({ 'rangeFound': false, 'type': type, 'department': this.dept_name });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // deleteAlloted(id) {
    //   this.allotedService.deleteAlloted(id).subscribe(res => {
    //     if(res.status === false){
    //       this.toasterService.pop('error',res.message);
    //     }
    //     else{
    //       this.getAlloted();
    //       this.toasterService.pop('success',res.message);
    //     }
    //   });
    // }
    // deleteAllAlloted(){
    //   // console.log(this.alloted_examiners);
    //   if(this.alloted_examiners.length===0){
    //     this.toasterService.pop('info',"No Details Found to Delete");
    //   }
    //   else{
    //       this.allotedService.deleteAllAlloted().subscribe(
    //         res => {
    //           if(res.status===true){
    //             this.toasterService.pop('success',res.message);
    //             this.getAlloted();
    //           }
    //         }
    //       )
    //     }
    //   }
    AllotedComponent.prototype.updateAlloted = function (alloted, idx) {
        if (this.ps_name[idx] === '') {
            this.toasterService.pop("info", "Please Select Papper Setter Name");
            return;
        }
        else {
            console.log(this.ps_name[idx]);
            // this.allotedService.updateAlloted(alloted, this.ps_name[idx]).subscribe(res =>  this.getAlloted());
        }
    };
    AllotedComponent.prototype.doit = function (type, fn, dl) {
        if (this.alloted_examiners.length === 0) {
            this.toasterService.pop("info", "No Data Found To Export");
        }
        else {
            var json = this.alloted_examiners;
            var ws = __WEBPACK_IMPORTED_MODULE_6_xlsx__["utils"].json_to_sheet(json);
            var wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
            __WEBPACK_IMPORTED_MODULE_6_xlsx__["write"](wb, { bookType: type, bookSST: true, type: 'base64' });
            __WEBPACK_IMPORTED_MODULE_6_xlsx__["writeFile"](wb, fn || ('Alloted_Examiners.' + (type || 'xlsx')));
            this.toasterService.pop("success", "Data Exported Successfully");
        }
    };
    AllotedComponent.prototype.myFunction = function (code) {
        var _this = this;
        // get internal Examiners for the subject
        this.http.get('http://localhost:3000/examiner/get_internal_examiners/' + code).subscribe(function (data) {
            _this.internal_examiners = data;
            console.log(_this.internal_examiners);
        });
        this.http.get('http://localhost:3000/examiner/get_external_examiners/' + code).subscribe(function (data) {
            _this.external_examiners = data;
            console.log(_this.external_examiners);
        });
    };
    // Select All Feature to be imeplemented  //
    AllotedComponent.prototype.toggleSelection = function (scode) {
        var idx = this.selectedValues.indexOf(scode);
        if (idx > -1) {
            this.selectedValues.splice(idx, 1);
            this.alloted_examiners[idx]['selected'] = false;
        }
        else {
            this.selectedValues.push(scode);
            var idx_1 = this.selectedValues.indexOf(scode);
            this.alloted_examiners[idx_1]['selected'] = true;
        }
        console.log(this.selectedValues);
    };
    AllotedComponent.prototype.selectAll = function () {
        var _this = this;
        if (this.selectedValues.length === this.alloted_examiners.length) {
            this.alloted_examiners.map(function (item) {
                item['selected'] = false;
                _this.selectedValues.pop();
            });
        }
        else {
            this.alloted_examiners.map(function (item) {
                if (!_this.selectedValues.includes(item.subject_code)) {
                    item['selected'] = true;
                    _this.selectedValues.push(item.subject_code);
                }
            });
        }
        console.log(this.selectedValues);
    };
    AllotedComponent.prototype.openAddWindow = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#entry').val('Add');
        __WEBPACK_IMPORTED_MODULE_5_jquery__('.modal_form').toggleClass('modal_form_on');
        __WEBPACK_IMPORTED_MODULE_5_jquery__('.overlay').toggleClass('overlay_on');
    };
    AllotedComponent.prototype.closex = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery__('.modal_form').toggleClass('modal_form_on');
        __WEBPACK_IMPORTED_MODULE_5_jquery__('.overlay').toggleClass('overlay_on');
    };
    /**********************/
    /**************** Proposal Letter Generation ***********************/
    AllotedComponent.prototype.appointmentLetter = function () {
        var _this = this;
        this.http.get('http://localhost:3000/appointment/generate', { params: { codes: this.selectedValues } }).subscribe(function (res) {
            _this.toasterService.pop('info', res.body);
        });
    };
    /*****************************************************************/
    AllotedComponent.prototype.range = function (input, min, max) {
        // min = parseInt(min); //Make string input int
        // max = parseInt(max);
        for (var i = min; i < max; i++)
            input.push(i);
        return input;
    };
    ;
    // async getExamCode(){
    //     await this.allotedService.getAllotedExamCode().toPromise().then(
    //       res => {
    //         this.examCodesArray = res;
    //       }
    //     ).then(res =>
    //       {
    //         this.examCodesArray.forEach(item => {
    //         this.allotedExamCodes.push(item['exam_code'])
    //         })   
    //       }
    //     )
    // }
    AllotedComponent.prototype.getVal = function (start, end) {
        // console.log(this.allotedExamCodes);
        for (var i = start; i <= end; i++) {
            // console.log(i);
            if (this.allotedExamCodes.indexOf(i) === -1) {
                return i;
            }
        }
        this.toasterService.pop('error', 'All Range Values are alloted');
        return;
    };
    AllotedComponent.prototype.createRangeArray = function (start, end, type) {
        if (type === 'internal') {
            this.int_ex_codes = this.range(this.int_ex_codes, start, end);
        }
        if (type === 'external') {
            this.ext_ex_codes = this.range(this.ext_ex_codes, start, end);
        }
    };
    AllotedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alloted',
            template: __webpack_require__("../../../../../src/app/alloted/alloted.component.html"),
            styles: [__webpack_require__("../../../../../src/app/alloted/alloted.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__services_subject_service__["a" /* SubjectService */],
            __WEBPACK_IMPORTED_MODULE_9__services_examiner_service__["a" /* ExaminerService */],
            __WEBPACK_IMPORTED_MODULE_3__services_alloted_service__["a" /* AllotedService */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular5_toaster__["ToasterService"]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_10__services_department_service__["a" /* DepartmentService */],
            __WEBPACK_IMPORTED_MODULE_8__services_notification_service__["a" /* NotificationService */]])
    ], AllotedComponent);
    return AllotedComponent;
    var _a;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<toaster-container class=\"toast\"></toaster-container>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_checkbox__ = __webpack_require__("../../../../primeng/checkbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__examiners_examiners_component__ = __webpack_require__("../../../../../src/app/examiners/examiners.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup_component__ = __webpack_require__("../../../../../src/app/pages/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_change_password_change_password_component__ = __webpack_require__("../../../../../src/app/pages/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_examiner_service__ = __webpack_require__("../../../../../src/app/services/examiner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__alloted_alloted_component__ = __webpack_require__("../../../../../src/app/alloted/alloted.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__notification_notification_component__ = __webpack_require__("../../../../../src/app/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__help_help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__subjects_subjects_component__ = __webpack_require__("../../../../../src/app/subjects/subjects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_subject_service__ = __webpack_require__("../../../../../src/app/services/subject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_alloted_service__ = __webpack_require__("../../../../../src/app/services/alloted.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__paper_recieved_paper_recieved_component__ = __webpack_require__("../../../../../src/app/paper-recieved/paper-recieved.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__dashboard_home_dashboard_home_component__ = __webpack_require__("../../../../../src/app/dashboard-home/dashboard-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular5_toaster__ = __webpack_require__("../../../../angular5-toaster/dist/bundles/angular5-toaster.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular5_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_angular5_toaster__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__exam_codes_exam_codes_component__ = __webpack_require__("../../../../../src/app/exam-codes/exam-codes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_primeng_editor__ = __webpack_require__("../../../../primeng/editor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_primeng_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_primeng_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_department_service__ = __webpack_require__("../../../../../src/app/services/department.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__departments_departments_component__ = __webpack_require__("../../../../../src/app/departments/departments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__paper_valuation_paper_valuation_component__ = __webpack_require__("../../../../../src/app/paper-valuation/paper-valuation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_paper_valuation_service__ = __webpack_require__("../../../../../src/app/services/paper-valuation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__paper_setter_paper_setter_component__ = __webpack_require__("../../../../../src/app/paper-setter/paper-setter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_paper_setter_service__ = __webpack_require__("../../../../../src/app/services/paper-setter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_paper_recieved_service__ = __webpack_require__("../../../../../src/app/services/paper-recieved.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_9__pages_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_9__pages_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_26__dashboard_home_dashboard_home_component__["a" /* DashboardHomeComponent */], outlet: 'sub' },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_26__dashboard_home_dashboard_home_component__["a" /* DashboardHomeComponent */], outlet: 'sub' },
            { path: 'alloted', component: __WEBPACK_IMPORTED_MODULE_16__alloted_alloted_component__["a" /* AllotedComponent */], outlet: 'sub' },
            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_27__users_users_component__["a" /* UsersComponent */], outlet: 'sub' },
            { path: 'examiners', component: __WEBPACK_IMPORTED_MODULE_8__examiners_examiners_component__["a" /* ExaminersComponent */], outlet: 'sub' },
            { path: 'registerClerk', component: __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup_component__["a" /* SignupComponent */], outlet: 'sub' },
            { path: 'notification', component: __WEBPACK_IMPORTED_MODULE_18__notification_notification_component__["a" /* NotificationComponent */], outlet: 'sub' },
            { path: 'change-password', component: __WEBPACK_IMPORTED_MODULE_13__pages_change_password_change_password_component__["a" /* ChangePasswordComponent */], outlet: 'sub' },
            { path: 'help', component: __WEBPACK_IMPORTED_MODULE_19__help_help_component__["a" /* HelpComponent */], outlet: 'sub' },
            { path: 'scode', component: __WEBPACK_IMPORTED_MODULE_20__subjects_subjects_component__["a" /* SubjectsComponent */], outlet: 'sub' },
            { path: 'departments', component: __WEBPACK_IMPORTED_MODULE_34__departments_departments_component__["a" /* DepartmentsComponent */], outlet: 'sub' },
            { path: 'examcodes', component: __WEBPACK_IMPORTED_MODULE_31__exam_codes_exam_codes_component__["a" /* ExamCodesComponent */], outlet: 'sub' },
            { path: 'paperSetter', component: __WEBPACK_IMPORTED_MODULE_37__paper_setter_paper_setter_component__["a" /* PaperSetterComponent */], outlet: 'sub' },
            { path: 'paperRecieved', component: __WEBPACK_IMPORTED_MODULE_24__paper_recieved_paper_recieved_component__["a" /* PaperRecievedComponent */], outlet: 'sub' },
            { path: 'paperValuation', component: __WEBPACK_IMPORTED_MODULE_35__paper_valuation_paper_valuation_component__["a" /* PaperValuationComponent */], outlet: 'sub' },
        ]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_8__examiners_examiners_component__["a" /* ExaminersComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_change_password_change_password_component__["a" /* ChangePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_16__alloted_alloted_component__["a" /* AllotedComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_18__notification_notification_component__["a" /* NotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_19__help_help_component__["a" /* HelpComponent */],
                __WEBPACK_IMPORTED_MODULE_20__subjects_subjects_component__["a" /* SubjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__paper_recieved_paper_recieved_component__["a" /* PaperRecievedComponent */],
                __WEBPACK_IMPORTED_MODULE_26__dashboard_home_dashboard_home_component__["a" /* DashboardHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_27__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_31__exam_codes_exam_codes_component__["a" /* ExamCodesComponent */],
                __WEBPACK_IMPORTED_MODULE_34__departments_departments_component__["a" /* DepartmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_35__paper_valuation_paper_valuation_component__["a" /* PaperValuationComponent */],
                __WEBPACK_IMPORTED_MODULE_37__paper_setter_paper_setter_component__["a" /* PaperSetterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_28_angular5_toaster__["ToasterModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_checkbox__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_22__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_32_primeng_editor__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_30_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { onSameUrlNavigation: 'reload' })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_examiner_service__["a" /* ExaminerService */], __WEBPACK_IMPORTED_MODULE_21__services_subject_service__["a" /* SubjectService */], __WEBPACK_IMPORTED_MODULE_23__services_alloted_service__["a" /* AllotedService */], __WEBPACK_IMPORTED_MODULE_25__services_users_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_29__services_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_33__services_department_service__["a" /* DepartmentService */], __WEBPACK_IMPORTED_MODULE_36__services_paper_valuation_service__["a" /* PaperValuationService */], __WEBPACK_IMPORTED_MODULE_38__services_paper_setter_service__["a" /* PaperSetterService */], __WEBPACK_IMPORTED_MODULE_39__services_paper_recieved_service__["a" /* PaperRecievedService */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_17__pipes_filter_pipe__["a" /* FilterPipe */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-home/dashboard-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title{\r\n    width:90%;\r\n    margin:0 auto;\r\n}\r\n\r\n.img{\r\n    height: auto;\r\n    width: auto;\r\n    margin: 50px auto;\r\n\r\n}\r\n\r\n.img-wr\r\n{\r\n    width:30%;\r\n    margin:0 auto;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard-home/dashboard-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n<div class=\"col-4\">\r\n  \r\n</div>\r\n<div class=\"col-md-4  col-xs-12 content\">\r\n        \r\n    <div class=\"title\">\r\n            <h3 >Welcome to SGSITS Exam-Pannel</h3>\r\n    </div>\r\n    \r\n    <div class=\"img-wr\"><img class=\"img\" src=\"../../assets/images/SGSITS-Indore-Logo.png\"></div>\r\n    \r\n</div>\r\n<div class=\"col-4\">\r\n  \r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard-home/dashboard-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardHomeComponent = (function () {
    function DashboardHomeComponent() {
    }
    DashboardHomeComponent.prototype.ngOnInit = function () {
    };
    DashboardHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-home',
            template: __webpack_require__("../../../../../src/app/dashboard-home/dashboard-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard-home/dashboard-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardHomeComponent);
    return DashboardHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n    DEMO STYLE\r\n*/\r\n\r\n\r\n:root{\r\n    --dark-blue: #08131c;\r\n    --light-pink: #ef626c;\r\n    --dull-white: #eff9f0;\r\n    --dark-gray: #191919;\r\n}\r\n\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: #999;\r\n}\r\n\r\na, a:hover, a:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n    padding: 15px 10px;\r\n    background: #eff9f0;\r\n    background: var(--dull-white);\r\n    border: none;\r\n    border-radius: 0;\r\n    margin-bottom: 40px;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}\r\n\r\n.line {\r\n    width: 100%;\r\n    height: 1px;\r\n    border-bottom: 1px dashed #ddd;\r\n    margin: 40px 0;\r\n}\r\n\r\ni, span {\r\n    display: inline-block;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n.wrapper {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: stretch;\r\n        align-items: stretch;\r\n}\r\n\r\n#sidebar {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    height: 100vh;\r\n    background: #08131c;\r\n    background: var(--dark-blue);\r\n    color: #eff9f0;\r\n    color: var(--dull-white);\r\n    transition: all 0.3s;\r\n}\r\n\r\n#sidebar.active {\r\n    min-width: 80px;\r\n    max-width: 80px;\r\n    text-align: center;\r\n}\r\n\r\n#sidebar.active .sidebar-header h3, #sidebar.active .CTAs {\r\n    display: none;\r\n}\r\n\r\n#sidebar.active .sidebar-header strong {\r\n    display: block;\r\n}\r\n\r\n#sidebar ul li a {\r\n    text-align: left;\r\n}\r\n\r\n#sidebar.active ul li a {\r\n    padding: 20px 10px;\r\n    text-align: center;\r\n    font-size: 0.85em;\r\n}\r\n\r\n#sidebar.active ul li a i {\r\n    margin-right:  0;\r\n    display: block;\r\n    font-size: 1.8em;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#sidebar.active ul ul a {\r\n    padding: 10px !important;\r\n}\r\n\r\n#sidebar.active a[aria-expanded=\"false\"]::before, #sidebar.active a[aria-expanded=\"true\"]::before {\r\n    top: auto;\r\n    bottom: 5px;\r\n    right: 50%;\r\n    transform: translateX(50%);\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n    padding: 20px;\r\n    background: #08131c;\r\n    background: var(--dark-blue);\r\n}\r\n\r\n#sidebar .sidebar-header strong {\r\n    display: none;\r\n    font-size: 1.8em;\r\n}\r\n\r\n\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    display: block;\r\n    background: #08131c;\r\n    background: var(--dark-blue);\r\n}\r\n#sidebar ul li a:hover {\r\n    color: #eff9f0;\r\n    color: var(--dull-white);\r\n    background: #ef626c;\r\n    background: var(--light-pink);\r\n}\r\n#sidebar ul li a i {\r\n    margin-right: 10px;\r\n}\r\n\r\n#sidebar ul li.active > a, a[aria-expanded=\"true\"] {\r\n    color: #eff9f0;\r\n    color: var(--dull-white);\r\n    background: #ef626c;\r\n    background: var(--light-pink);\r\n}\r\n\r\n\r\na[data-toggle=\"collapse\"] {\r\n    position: relative;\r\n}\r\n\r\na[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\r\n    content: '\\25BC';\r\n    display: block;\r\n    position: absolute;\r\n    right: 20px;\r\n    /* font-family: 'Glyphicons Halflings'; */\r\n    font-size: 0.6em;\r\n\r\n}\r\na[aria-expanded=\"true\"]::before {\r\n    content: '\\25B2';\r\n}\r\n\r\n\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #ef626c;\r\n    background: var(--light-pink);\r\n}\r\n\r\nul.CTAs {\r\n    padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n    text-align: center;\r\n    font-size: 0.9em !important;\r\n    display: block;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.logout-btn\r\n{\r\n    float:right;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n}\r\n\r\n\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n#content {\r\n    padding: 20px;\r\n    min-height: 100vh;\r\n    transition: all 0.3s;\r\n    width:100%;\r\n    background: white;\r\n}\r\n\r\n\r\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\r\n@media (max-width: 768px) {\r\n    #sidebar {\r\n        min-width: 80px;\r\n        max-width: 80px;\r\n        text-align: center;\r\n        margin-left: -80px !important ;\r\n    }\r\n    a[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\r\n        top: auto;\r\n        bottom: 5px;\r\n        right: 50%;\r\n        transform: translateX(50%);\r\n    }\r\n    #sidebar.active {\r\n        margin-left: 0 !important;\r\n    }\r\n\r\n    #sidebar .sidebar-header h3, #sidebar .CTAs {\r\n        display: none;\r\n    }\r\n\r\n    #sidebar .sidebar-header strong {\r\n        display: block;\r\n    }\r\n\r\n    #sidebar ul li a {\r\n        padding: 20px 10px;\r\n    }\r\n\r\n    #sidebar ul li a span {\r\n        font-size: 0.85em;\r\n    }\r\n    #sidebar ul li a i {\r\n        margin-right:  0;\r\n        display: block;\r\n    }\r\n\r\n    #sidebar ul ul a {\r\n        padding: 10px !important;\r\n    }\r\n\r\n    #sidebar ul li a i {\r\n        font-size: 1.3em;\r\n    }\r\n    #sidebar {\r\n        margin-left: 0;\r\n    }\r\n    #sidebarCollapse span {\r\n        display: none;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <!-- Sidebar Holder -->\r\n    <!-- Sidebar Holder -->\r\n<nav id=\"sidebar\">\r\n        <div class=\"sidebar-header\">\r\n          <h3>SGSITS EXAM PANNEL</h3>\r\n          <strong>EP</strong>\r\n        </div>\r\n        <ul class=\"list-unstyled components\">\r\n         <li>\r\n            <a class=\"link\" [routerLink]=\"[{ outlets: { sub: ['home']}}]\">\r\n              <i class=\"fas fa-home\"></i>\r\n            Home\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a class=\"link\" href=\"#pageSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\">\r\n              <span style=\"font-size:1.3rem;padding-left:2px;\">\r\n                <i class=\"fas fa-file-alt\"></i>\r\n              </span>\r\n              Reports\r\n            </a>\r\n            <ul class=\"collapse list-unstyled\" id=\"pageSubmenu\">\r\n              <li>\r\n                  <a class=\"link\" [routerLink]=\"[{ outlets: { sub: ['scode']}}]\">Subject Codes</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"link\" [routerLink]=\"[{ outlets: { sub: ['examiners']}}]\">Registered Examiners</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"link\" [routerLink]=\"[{ outlets: { sub: ['alloted']}}]\">Generate Proposal</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"link\" [routerLink]=\"[{ outlets: { sub: ['examcodes']}}]\">Exam Codes</a>\r\n              </li>\r\n                <li>\r\n                  <a class=\"link\" [routerLink]=\"[{ outlets: { sub: ['paperSetter']}}]\">Paper Setter</a>\r\n                </li>\r\n              <li>\r\n                <a class=\"link\" [routerLink]=\"[{ outlets: { sub: ['paperRecieved']}}]\">Paper Received Status</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"link\" [routerLink]=\"[{ outlets: { sub: ['paperValuation']}}]\">Paper Valuation Status</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li>\r\n            <a class=\"link\" href=\"#pageSubmenu2\" data-toggle=\"collapse\" aria-expanded=\"false\">\r\n              <span style=\"font-size:1.3rem;padding-left:2px;\">\r\n                <i class=\"fas fa-file-alt\"></i>\r\n              </span>\r\n              Users\r\n            </a>\r\n            <ul class=\"collapse list-unstyled\" id=\"pageSubmenu2\">\r\n              <li>\r\n                <a class=\"link\" [routerLink]=\"[{ outlets: { sub: ['registerClerk']}}]\">\r\n                  Register A User</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"link\" [routerLink]=\"[{ outlets: { sub: ['users']}}]\">\r\n                Registered Users</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li>\r\n              <a class=\"link\" [routerLink]=\"[{ outlets: { sub: ['notification']}}]\">\r\n                  <i class=\"fas fa-envelope\"></i>\r\n                Send Notification\r\n              </a>\r\n            </li>\r\n        \r\n          <li>\r\n              <a class=\"link\" [routerLink]=\"[{ outlets: { sub: ['help']}}]\">\r\n                <i class=\"fab fa-hire-a-helper\"></i>\r\n              Help\r\n            </a>\r\n          </li>\r\n      \r\n          <!-- Extra Pages -->\r\n          <li>\r\n            <a class=\"link\" href=\"#pageSubmenu3\" data-toggle=\"collapse\" aria-expanded=\"false\">\r\n              <span style=\"font-size:1.3rem;padding-left:2px;\">\r\n                <i class=\"fas fa-file-alt\"></i>\r\n              </span>\r\n              Extra Pages\r\n            </a>\r\n            <ul class=\"collapse list-unstyled\" id=\"pageSubmenu3\">\r\n              <li>\r\n                <a class=\"link\" [routerLink]=\"[{ outlets: { sub: ['change-password']}}]\">Change Password</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n      <!-- Page Content Holder -->\r\n    <div id=\"content\">\r\n        <nav class=\"navbar navbar-default\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"navbar-header\">\r\n                    <button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-dark navbar-btn\">\r\n                        <i class=\"fas fa-align-right\"></i>\r\n                    </button>\r\n                </div>\r\n                <div class=\"logout-btn\">\r\n                    <i class=\"fas fa-sign-out-alt\"></i>\r\n                    <a class=\"link\" href=\"#\" (click)=\"logOut()\">Logout</a>\r\n                </div>\r\n            </div>\r\n        </nav>\r\n        <div class=\"col-12\">\r\n            <router-outlet name=\"sub\"></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(userService) {
        this.userService = userService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.userService.loginCheck();
        __WEBPACK_IMPORTED_MODULE_1_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#sidebarCollapse').on('click', function () {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#sidebar').toggleClass('active');
            });
            __WEBPACK_IMPORTED_MODULE_1_jquery__(function () {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#sidebar a').click(function () {
                    __WEBPACK_IMPORTED_MODULE_1_jquery__(this).parent().addClass('active').siblings().removeClass('active');
                });
            });
        });
    };
    DashboardComponent.prototype.logOut = function () {
        this.userService.logout();
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UserService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/departments/departments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/departments/departments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\r\n    <div class=\"modal_form\">\r\n      <div class=\"modal__content\">\r\n        <label for=\"click\" style=\"float:right\">\r\n          <a class=\"close-x quit\" (click)=\"closex()\">X</a>\r\n        </label>\r\n    <h4>Add New Department</h4>\r\n    <form (ngSubmit)=\"addDetail()\" [formGroup]=\"myform\" novalidate>\r\n     \r\n        <label for=\"deptName\">Department Name</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"deptName\" id=\"deptName\" [(ngModel)]=\"department.dept_name\" formControlName=\"deptName\">\r\n        <p class=\"small\" *ngIf=\"isValid('deptName')\">Required</p>\r\n  \r\n        <label for=\"deptCode\">Department Code</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"deptCode\" id=\"deptCode\" [(ngModel)]=\"department.dept_code\" formControlName=\"deptCode\">\r\n        <p class=\"small\" *ngIf=\"isValid('deptCode')\">Required</p>\r\n  \r\n        <label for=\"startRange\">Start range</label>\r\n        <input type=\"number\" class=\"form-control\" name=\"startRange\" id=\"startRange\" [(ngModel)]=\"department.start\" formControlName=\"startRange\">\r\n        \r\n  \r\n        <label for=\"endRange\">End range</label>\r\n        <input type=\"number\" class=\"form-control\" name=\"endRange\" id=\"endRange\" [(ngModel)]=\"department.end\" formControlName=\"endRange\">\r\n   \r\n        <br>\r\n  \r\n        <input type=\"submit\" value=\"Add\" id=\"entry\" class=\"btn btn-dark form-control\" [disabled]=\"myform.invalid\">\r\n    </form>\r\n    </div>\r\n    </div>\r\n    <div class=\"overlay\"></div>\r\n    <h4>Exam Codes</h4>\r\n    <hr>\r\n    <div class=\"row\">\r\n      <div class=\"col-5\">\r\n          <div class=\"form-group\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-addon\">\r\n                  <i class=\"fas fa-search\"></i>\r\n                </div>\r\n                <input type=\"text\" id=\"search\" class=\"form-control\" name=\"searchString\" placeholder=\"Type Exam Code...\" [(ngModel)]=\"searchString\">\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-2 nopadding\">\r\n          <input type=\"checkbox\" id=\"click\" style=\"display:none;\" />\r\n          <label class=\"button-dark\" for=\"click\">\r\n            <a id=\"add\" class=\"btn btn-dark text-white\" (click)=\"openAddWindow()\">Add Department</a>\r\n          </label>\r\n        </div>\r\n  </div>\r\n\r\n\r\n<div>\r\n    <table class=\"table table-striped table-bordered table-sm\" id=\"example\">\r\n      <thead class=\"table-dark\">\r\n        <tr>\r\n          <th>#</th>\r\n          <th>Department</th>\r\n          <th>Department Code</th>\r\n          <th>Exam-Code Range</th>\r\n          <th>Action</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let d of departments | filter : 'dept_code' : searchString | paginate: { itemsPerPage: 10, currentPage: p}; let idx = index\">\r\n          <th scope=\"row\">{{idx+1}}</th>\r\n          <td>{{d.dept_name}}</td>\r\n          <td>{{d.dept_code}}</td>\r\n          <td >{{d.start}} - {{d.end}}</td>\r\n          <td>\r\n              <a id=\"update\" (click)=\"openEditWindow(d)\">\r\n                <i class=\"fas fa-edit\"></i>\r\n              </a>\r\n              <a (click)=\"deleteDepatment(d.dept_code)\">\r\n                <i class=\"fas fa-times\"></i>\r\n              </a>\r\n            </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n    <div class=\"export-wrapper\">\r\n        <input type=\"button\" class=\"btn btn-block btn-sm btn-outline-danger\" (click)=\"deleteAllDepartments()\" value=\"Delete All\">\r\n    </div>\r\n  </div>  \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/departments/departments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_department_service__ = __webpack_require__("../../../../../src/app/services/department.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular5_toaster__ = __webpack_require__("../../../../angular5-toaster/dist/bundles/angular5-toaster.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular5_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular5_toaster__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DepartmentsComponent = (function () {
    function DepartmentsComponent(departmentService, toasterService) {
        this.departmentService = departmentService;
        this.toasterService = toasterService;
        this.department = {
            dept_code: '',
            dept_name: '',
            start: 0,
            end: 0
        };
    }
    DepartmentsComponent.prototype.ngOnInit = function () {
        this.getDepartments();
        this.myform = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            deptCode: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required
            ]),
            deptName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required
            ]),
            startRange: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](''),
            endRange: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('')
        });
    };
    DepartmentsComponent.prototype.openAddWindow = function () {
        this.department.dept_code = '',
            this.department.dept_name = '';
        this.department.start = null,
            this.department.end = null;
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#entry').val('Add');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.modal_form').toggleClass('modal_form_on');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.overlay').toggleClass('overlay_on');
    };
    DepartmentsComponent.prototype.closex = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.modal_form').toggleClass('modal_form_on');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.overlay').toggleClass('overlay_on');
    };
    DepartmentsComponent.prototype.openEditWindow = function (department) {
        this.department.dept_code = department.dept_code,
            this.department.dept_name = department.dept_name;
        this.department.start = department.start,
            this.department.end = department.end;
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#entry').val('Update');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.modal_form').toggleClass('modal_form_on');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.overlay').toggleClass('overlay_on');
    };
    DepartmentsComponent.prototype.addDetail = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_jquery__('#entry').val() === 'Add') {
            this.addDepartment();
        }
        if (__WEBPACK_IMPORTED_MODULE_1_jquery__('#entry').val() === 'Update') {
            this.updateRange();
        }
    };
    DepartmentsComponent.prototype.updateRange = function () {
        var _this = this;
        this.departmentService.updateRange(this.department).subscribe(function (res) {
            _this.getDepartments();
            _this.toasterService.pop('info', 'Examiner Details Updated Successfully');
        });
        this.closex();
    };
    DepartmentsComponent.prototype.isValid = function (field) {
        return !this.myform.get(field).valid && this.myform.get(field).touched;
    };
    DepartmentsComponent.prototype.addDepartment = function () {
        var _this = this;
        this.departmentService.addDepartment(this.department).subscribe(function (res) {
            if (res.status == false) {
                _this.toasterService.pop('error', 'Server Error', 'Could not add Department');
            }
            else {
                _this.toasterService.pop('success', 'Department Added Successfully');
            }
            _this.getDepartments();
        });
        this.closex();
    };
    DepartmentsComponent.prototype.deleteDepatment = function (code) {
        var _this = this;
        this.departmentService.deleteDepartment(code).subscribe(function (res) {
            if (res.status === true) {
                _this.toasterService.pop('success', res.message);
            }
            _this.getDepartments();
        });
    };
    DepartmentsComponent.prototype.deleteAllDepartments = function () {
        var _this = this;
        if (this.departments.length === 0) {
            this.toasterService.pop('info', "No Details Found to Delete");
        }
        else {
            this.departmentService.deleteAllDepartments().subscribe(function (res) {
                if (res.status === true) {
                    _this.toasterService.pop('success', res.message);
                    _this.getDepartments();
                }
            });
        }
    };
    DepartmentsComponent.prototype.getDepartments = function () {
        var _this = this;
        this.departmentService.getDepartments().subscribe(function (res) { return _this.departments = res; });
    };
    DepartmentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-departments',
            template: __webpack_require__("../../../../../src/app/departments/departments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/departments/departments.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_department_service__["a" /* DepartmentService */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular5_toaster__["ToasterService"]) === "function" && _a || Object])
    ], DepartmentsComponent);
    return DepartmentsComponent;
    var _a;
}());



/***/ }),

/***/ "../../../../../src/app/exam-codes/exam-codes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exam-codes/exam-codes.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Alloted Exam Codes</h4>\r\n<div class=\"col-5\">\r\n    <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-addon\">\r\n            <i class=\"fas fa-search\"></i>\r\n          </div>\r\n          <input type=\"text\" id=\"search\" class=\"form-control\" name=\"searchString\" placeholder=\"Type Exam Code...\" [(ngModel)]=\"searchString\">\r\n        </div>\r\n    </div>\r\n  </div>\r\n<div>\r\n<table class=\"table table-striped table-bordered table-sm\" id=\"example\">\r\n  <thead class=\"table-dark\">\r\n    <tr>\r\n      <th>#</th>\r\n      <th>Exam Code</th>\r\n      <!-- <th>Department</th> -->\r\n      <th>Subjects</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let ms of mappedSubjects | filter : 'code' : searchString | paginate: { itemsPerPage: 10, currentPage: p}; let idx = index\">\r\n      <th scope=\"row\">{{idx+1}}</th>\r\n      <td>{{ms.code}}</td>\r\n      <!-- <td>{{ec.dept}}</td> -->\r\n      <td ><span *ngFor=\"let d of ms.data; let last = last\">{{d.Code}}\r\n        <span *ngIf=\"!last\">/</span>\r\n      </span></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n<div class=\"form-group export-wrapper\">\r\n    <input type=\"button\" class=\"btn btn-block btn-sm btn-outline-success form-control\" (click)=\"doit('xlsx')\" value=\"Export\">\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/exam-codes/exam-codes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamCodesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alloted_service__ = __webpack_require__("../../../../../src/app/services/alloted.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_examiner_service__ = __webpack_require__("../../../../../src/app/services/examiner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_subject_service__ = __webpack_require__("../../../../../src/app/services/subject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular5_toaster__ = __webpack_require__("../../../../angular5-toaster/dist/bundles/angular5-toaster.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular5_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular5_toaster__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_xlsx__ = __webpack_require__("../../../../xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_xlsx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ExamCodesComponent = (function () {
    function ExamCodesComponent(allotedService, subjectService, examinerService, toasterService) {
        this.allotedService = allotedService;
        this.subjectService = subjectService;
        this.examinerService = examinerService;
        this.toasterService = toasterService;
        this.examCodes = [];
        this.mappedSubjects = [];
    }
    ExamCodesComponent.prototype.ngOnInit = function () {
        this.getExamCodeData();
    };
    ExamCodesComponent.prototype.getExamCodeData = function () {
        var _this = this;
        this.examinerService.getExamCodes().subscribe(function (res) {
            console.log(res);
            _this.examCodes = res;
            _this.examCodes.forEach(function (item) {
                _this.getSubjectGroup(item['exam_code']);
            });
        });
    };
    ExamCodesComponent.prototype.getSubjectGroup = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // console.log(code);
                    return [4 /*yield*/, this.subjectService.getSubjectGroups(code).subscribe(function (res) {
                            // console.log(res);
                            _this.mappedSubjects.push({ "code": code, "data": res });
                            console.log(_this.mappedSubjects);
                        })];
                    case 1:
                        // console.log(code);
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ExamCodesComponent.prototype.doit = function (type, fn, dl) {
        var examCodesToExport = [];
        if (this.mappedSubjects.length === 0) {
            this.toasterService.pop("info", "No Data Found To Export");
        }
        else {
            for (var _i = 0, _a = this.mappedSubjects; _i < _a.length; _i++) {
                var ms = _a[_i];
                var test = '';
                for (var _b = 0, _c = ms.data; _b < _c.length; _b++) {
                    var d = _c[_b];
                    test = test + d.Code;
                    if (ms.data.indexOf(d) < ms.data.length - 1) {
                        test = test + '/';
                    }
                }
                examCodesToExport.push({ 'Exam Code': ms.code, 'Subject Groups': test });
            }
            var json = examCodesToExport;
            // console.log(json);
            var ws = __WEBPACK_IMPORTED_MODULE_5_xlsx__["utils"].json_to_sheet(json);
            var wb = { Sheets: { 'Exam Code': ws }, SheetNames: ['Exam Code'] };
            __WEBPACK_IMPORTED_MODULE_5_xlsx__["write"](wb, { bookType: type, bookSST: true, type: 'base64' });
            __WEBPACK_IMPORTED_MODULE_5_xlsx__["writeFile"](wb, fn || ('Exam_Codes.' + (type || 'xlsx')));
            this.toasterService.pop('success', 'Data Exported Successfully');
        }
    };
    ExamCodesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-exam-codes',
            template: __webpack_require__("../../../../../src/app/exam-codes/exam-codes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/exam-codes/exam-codes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_alloted_service__["a" /* AllotedService */],
            __WEBPACK_IMPORTED_MODULE_3__services_subject_service__["a" /* SubjectService */],
            __WEBPACK_IMPORTED_MODULE_2__services_examiner_service__["a" /* ExaminerService */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular5_toaster__["ToasterService"]) === "function" && _a || Object])
    ], ExamCodesComponent);
    return ExamCodesComponent;
    var _a;
}());



/***/ }),

/***/ "../../../../../src/app/examiners/examiners.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examiners/examiners.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\r\n  <div class=\"modal_form\">\r\n    <div class=\"modal__content\">\r\n      <label for=\"click\" style=\"float:right\">\r\n        <a class=\"close-x quit\" (click)=\"closex()\">X</a>\r\n      </label>\r\n      <h4>Enter Following Details</h4>\r\n      <form (ngSubmit)=\"addDetail()\" [formGroup]=\"myform\" novalidate>\r\n\r\n        <label for=\"ex_name\">Examiner Name: </label>\r\n        <input type=\"text\" class=\"form-control\" name=\"name\" id=\"ex_name\" placeholder=\"Examiner Name\" [(ngModel)]=\"examiner.name\"\r\n        formControlName=\"name\" [ngClass]=\"displayFieldCss('name')\">\r\n        <p class=\"small\" *ngIf=\"isValid('name')\">Examiner Name is Mandatory</p>\r\n\r\n        <label for=\"sub\">Subject Code: </label>\r\n        <input list=\"codes\" type=\"text\" class=\"form-control\" name=\"sub\" id=\"sub\" placeholder=\"Subject Code\" [(ngModel)]=\"examiner.subject_code\"\r\n        formControlName=\"scode\" [ngClass]=\"displayFieldCss('scode')\">\r\n\r\n        <datalist id=\"codes\">\r\n            <option value=\"{{value.Code}}\" *ngFor=\"let value of subjects\"></option>\r\n        </datalist>\r\n      \r\n        <p class=\"small\" *ngIf=\"isValid('scode')\">Subject Code is Mandatory</p>\r\n\r\n        <label for=\"ex_code\">Exam Code: </label>\r\n        <input type=\"text\" class=\"form-control\" name=\"ex_code\" id=\"ex_code\" placeholder=\"Exam Code\" [(ngModel)]=\"examiner.exam_code\"\r\n        formControlName=\"ecode\" [ngClass]=\"displayFieldCss('ecode')\">\r\n\r\n        <label for=\"dept\">Department: </label>\r\n        <input type=\"text\" class=\"form-control\" name=\"department\" id=\"dept\" placeholder=\"Department\" [(ngModel)]=\"examiner.department\"\r\n        formControlName=\"department\" [ngClass]=\"displayFieldCss('department')\">\r\n        <p class=\"small\" *ngIf=\"isValid('department')\">Department is Mandatory</p>\r\n\r\n        <label for=\"address\">Address: </label>\r\n        <input type=\"text\" class=\"form-control\" name=\"address\" id=\"address\" placeholder=\"Address\" [(ngModel)]=\"examiner.address\"\r\n        formControlName=\"address\" [ngClass]=\"displayFieldCss('address')\">\r\n        <p class=\"small\" *ngIf=\"isValid('address')\">Address is Mandatory</p>\r\n\r\n        <label for=\"CustomSelect\">Type: </label>\r\n        <select class=\"form-control custom-select\" name=\"type\" id=\"CustomSelect\" [(ngModel)]=\"examiner.type\" formControlName=\"type\" [ngClass]=\"displayFieldCss('type')\">\r\n          <option [disabled]=\"true\" [selected]=\"true\">Choose Type</option>\r\n          <option value=\"Internal\">Internal</option>\r\n          <option value=\"External\">External</option>\r\n        </select>\r\n        <p class=\"small\" *ngIf=\"isValid('type')\">Select Examiner Type</p>\r\n\r\n        <label for=\"email\">Email: </label>\r\n        <input type=\"text\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Email\" [(ngModel)]=\"examiner.email\" formControlName=\"email\" [ngClass]=\"displayFieldCss('email')\">\r\n        <p class=\"small\" *ngIf=\"isValid('email')\">Enter Valid Email Address</p>\r\n\r\n        <label for=\"contact\">Contact: </label>\r\n        <input type=\"number\" class=\"form-control\" name=\"contact\" id=\"contact\" placeholder=\"Contact\" [(ngModel)]=\"examiner.contact\"\r\n        formControlName=\"contact\" [ngClass]=\"displayFieldCss('contact')\"> \r\n        <p class=\"small\" *ngIf=\"isValid('contact')\">Enter Valid Contact Number</p>\r\n\r\n        <br>\r\n        <input type=\"submit\" value=\"Add\" id=\"entry\" [disabled]=\"myform.invalid\" class=\"btn btn-block btn-outline-success\">\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"overlay\"></div>\r\n\r\n  <h4>List of Examiners</h4>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col-4\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-addon\">\r\n            <i class=\"fas fa-search\"></i>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Type Examiner Name...\" [(ngModel)]=\"searchString\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-2 nopadding\">\r\n      <input type=\"checkbox\" id=\"click\" style=\"display:none;\" />\r\n      <label class=\"button-dark\" for=\"click\">\r\n        <a id=\"add\" class=\"btn btn-dark text-white\" (click)=\"openAddWindow()\">Add Examiner</a>\r\n      </label>\r\n    </div>\r\n    <div class=\"col-6 input-group\">\r\n      <div class=\"uploader\">\r\n        <input type=\"file\" (change)=\"incomingfile($event)\" placeholder=\"Upload file\" accept=\".xlsx\">\r\n      </div>\r\n      &nbsp;\r\n      <div style=\"z-index: 1;\">\r\n        <button type=\"button\" class=\"btn btn-sm btn-outline-success\" (click)=\"Upload()\">Upload</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  \r\n\r\n  <div> <!-- *ngIf='examiners.length>0'> -->\r\n    <table class=\"table table-striped table-sm table-bordered\">\r\n      <thead class=\"table-dark\">\r\n        <tr>\r\n          <th>#</th>\r\n          <th>Examiner Name</th>\r\n          <th>Subject Code</th>\r\n          <th>Exam Code</th>\r\n          <th>Department</th>\r\n          <th>Address</th>\r\n          <th>Type</th>\r\n          <th>Email</th>\r\n          <th>Contact</th>\r\n          <th>Action</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let examiner of examiners | filter : 'name' : searchString | paginate: { itemsPerPage: 10, currentPage: p}; let idx = index\">\r\n          <th scope=\"row\">{{idx+1}}</th>\r\n          <td>{{examiner.name}}</td>\r\n          <td>{{examiner.subject_code}}</td>\r\n          <td>{{examiner.exam_code}}</td>\r\n          <td>{{examiner.department}}</td>\r\n          <td>{{examiner.address}}</td>\r\n          <td>{{examiner.type}}</td>\r\n          <td>{{examiner.email}}</td>\r\n          <td>{{examiner.contact}}</td>\r\n          <td>\r\n            <a id=\"update\" (click)=\"openEditWindow(examiner)\">\r\n              <i class=\"fas fa-edit\"></i>\r\n            </a>\r\n            <a (click)=\"deleteExaminer(examiner.id)\">\r\n              <i class=\"fas fa-times\"></i>\r\n            </a>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n    <div class=\"export-wrapper\">\r\n        <input type=\"button\" class=\"btn btn-block btn-sm btn-outline-danger\" (click)=\"deleteAllExaminers()\" value=\"Delete All\">\r\n    </div>\r\n    <div class=\"export-wrapper\">\r\n      <input type=\"button\" class=\"btn btn-block btn-sm btn-outline-success\" (click)=\"doit('xlsx')\" value=\"Export\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/examiners/examiners.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExaminersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular5_toaster__ = __webpack_require__("../../../../angular5-toaster/dist/bundles/angular5-toaster.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular5_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular5_toaster__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_examiner_service__ = __webpack_require__("../../../../../src/app/services/examiner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_xlsx__ = __webpack_require__("../../../../xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_subject_service__ = __webpack_require__("../../../../../src/app/services/subject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_paper_recieved_service__ = __webpack_require__("../../../../../src/app/services/paper-recieved.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ExaminersComponent = (function () {
    //
    function ExaminersComponent(http, router, examinerService, paperRecievedService, subjectService, toasterService) {
        this.http = http;
        this.router = router;
        this.examinerService = examinerService;
        this.paperRecievedService = paperRecievedService;
        this.subjectService = subjectService;
        this.toasterService = toasterService;
        this.examiner = {
            id: '',
            name: '',
            subject_code: '',
            exam_code: '',
            address: '',
            department: '',
            type: '',
            email: '',
            contact: '',
        };
    }
    ExaminersComponent.prototype.incomingfile = function (event) {
        this.file = event.target.files[0];
    };
    ExaminersComponent.prototype.ngOnInit = function () {
        // Fetch All Examiners & Subject Codes
        this.getExaminers();
        this.getCodes();
        this.myform = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email
            ]),
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            scode: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
            ]),
            ecode: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
            ]),
            department: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
            ]),
            type: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](0, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
            ]),
            contact: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [
                // Validators.minLength(10),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
            ])
        });
    };
    ExaminersComponent.prototype.getCodes = function () {
        var _this = this;
        this.subjectService.getSubjects().subscribe(function (res) {
            _this.subjects = res;
        });
    };
    ExaminersComponent.prototype.isValid = function (field) {
        return !this.myform.get(field).valid && this.myform.get(field).touched;
    };
    ExaminersComponent.prototype.displayFieldCss = function (field) {
        if (this.isValid(field)) {
            return 'has-error';
        }
        if (!this.isValid(field)) {
            return 'has-success';
        }
        else {
            return '';
        }
    };
    ExaminersComponent.prototype.getExaminers = function () {
        var _this = this;
        this.examinerService.getExaminers().subscribe(function (res) {
            _this.examiners = res;
        });
    };
    // Modal Window functions
    ExaminersComponent.prototype.openAddWindow = function () {
        this.examiner.id = '';
        this.examiner.name = '';
        this.examiner.subject_code = '';
        this.examiner.exam_code = '';
        this.examiner.address = '';
        this.examiner.department = '';
        this.examiner.type = '';
        this.examiner.email = '';
        this.examiner.contact = '';
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#entry').val('Add');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.modal_form').toggleClass('modal_form_on');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.overlay').toggleClass('overlay_on');
    };
    ExaminersComponent.prototype.closex = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.modal_form').toggleClass('modal_form_on');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.overlay').toggleClass('overlay_on');
    };
    ExaminersComponent.prototype.openEditWindow = function (examiner) {
        this.examiner.id = examiner.id,
            this.examiner.name = examiner.name;
        this.examiner.subject_code = examiner.subject_code,
            this.examiner.exam_code = examiner.exam_code,
            this.examiner.address = examiner.address;
        this.examiner.email = examiner.email;
        this.examiner.contact = examiner.contact;
        this.examiner.department = examiner.department;
        this.examiner.type = examiner.type;
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#entry').val('Update');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.modal_form').toggleClass('modal_form_on');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.overlay').toggleClass('overlay_on');
    };
    ExaminersComponent.prototype.deleteExaminer = function (code) {
        var _this = this;
        this.examinerService.deleteExaminer(code).subscribe(function (res) {
            if (res.status === true) {
                _this.toasterService.pop('success', res.message);
            }
            _this.getExaminers();
        });
    };
    ExaminersComponent.prototype.addDetail = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_jquery__('#entry').val() === 'Add') {
            this.addExaminer();
        }
        if (__WEBPACK_IMPORTED_MODULE_1_jquery__('#entry').val() === 'Update') {
            this.editExaminer();
        }
    };
    ExaminersComponent.prototype.addExaminer = function () {
        var _this = this;
        this.examinerService.addExaminer(this.examiner).subscribe(function (res) {
            if (res.status == false) {
                _this.toasterService.pop('error', 'Error: ', res.message);
            }
            else {
                _this.getExaminers();
                _this.toasterService.pop('success', 'Examiner Details Added Successfully');
                _this.addToPaperRecieved();
            }
        });
        this.closex();
    };
    ExaminersComponent.prototype.editExaminer = function () {
        var _this = this;
        this.examinerService.updateExaminer(this.examiner).subscribe(function (res) {
            _this.getExaminers();
            _this.toasterService.pop('info', 'Examiner Details Updated Successfully');
        });
        this.closex();
    };
    ExaminersComponent.prototype.Upload = function () {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            _this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(_this.arrayBuffer);
            var arr = new Array();
            for (var i = 0; i !== data.length; ++i) {
                arr[i] = String.fromCharCode(data[i]);
            }
            var bstr = arr.join('');
            var workbook = __WEBPACK_IMPORTED_MODULE_7_xlsx__["read"](bstr, { type: 'binary' });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            var myFile = __WEBPACK_IMPORTED_MODULE_7_xlsx__["utils"].sheet_to_json(worksheet, { raw: true });
            _this.examinerService.uploadFile(myFile).subscribe(function (res) {
                if (res.status === false) {
                    _this.toasterService.pop('error', 'Error While Uploading: ', res.message);
                }
                else if (res.status === true) {
                    _this.getExaminers();
                    _this.toasterService.pop('success', res.message);
                }
            });
        };
        fileReader.readAsArrayBuffer(this.file);
    };
    ExaminersComponent.prototype.doit = function (type, fn, dl) {
        var examinersToExport = [];
        // console.log(this.subjects);
        if (this.subjects.length === 0) {
            this.toasterService.pop('info', 'No Details Found to Export');
        }
        else {
            for (var _i = 0, _a = this.examiners; _i < _a.length; _i++) {
                var data = _a[_i];
                examinersToExport.push({
                    'Examiner': data.name,
                    'Subject Code': data.subject_code,
                    'Exam Code': data.exam_code,
                    'Department': data.department,
                    'Address': data.address,
                    'Type': data.type,
                    'Email': data.email,
                    'Contact': data.contact
                });
                var json = examinersToExport;
                // console.log(json);
                var ws = __WEBPACK_IMPORTED_MODULE_7_xlsx__["utils"].json_to_sheet(json);
                var wb = { Sheets: { 'Examiners': ws }, SheetNames: ['Examiners'] };
                __WEBPACK_IMPORTED_MODULE_7_xlsx__["write"](wb, { bookType: type, bookSST: true, type: 'base64' });
                __WEBPACK_IMPORTED_MODULE_7_xlsx__["writeFile"](wb, fn || ('Examiners.' + (type || 'xlsx')));
                this.toasterService.pop('success', 'Data Exported Successfully');
            }
        }
    };
    ExaminersComponent.prototype.deleteAllExaminers = function () {
        var _this = this;
        if (this.examiners.length === 0) {
            this.toasterService.pop('info', "No Details Found to Delete");
        }
        else {
            this.examinerService.deleteAllExaminers().subscribe(function (res) {
                if (res.status === true) {
                    _this.toasterService.pop('success', res.message);
                    _this.getExaminers();
                }
            });
        }
    };
    ExaminersComponent.prototype.addToPaperRecieved = function () {
        this.paperRecievedService.addStatus(this.examiner);
    };
    ExaminersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-examiners',
            template: __webpack_require__("../../../../../src/app/examiners/examiners.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examiners/examiners.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__services_examiner_service__["a" /* ExaminerService */],
            __WEBPACK_IMPORTED_MODULE_9__services_paper_recieved_service__["a" /* PaperRecievedService */],
            __WEBPACK_IMPORTED_MODULE_8__services_subject_service__["a" /* SubjectService */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular5_toaster__["ToasterService"]) === "function" && _a || Object])
    ], ExaminersComponent);
    return ExaminersComponent;
    var _a;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root{\r\n    --dark-blue: #08131c;\r\n    --light-pink: #ef626c;\r\n    --dull-white: #eff9f0;\r\n    --dark-gray: #191919;\r\n}\r\n\r\n\r\n.mycolor{\r\n    background-color: rgb(9, 87, 107);\r\n}\r\n\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: #999;\r\n}\r\n\r\na, a:hover, a:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n    padding: 15px 10px;\r\n    background: #191919;\r\n    background: var(--dark-gray);\r\n    border: none;\r\n    color:white;\r\n    border-radius: 0;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.navbar-btn {\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}\r\n\r\ni, span {\r\n    display: inline-block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"navbar-header\">\r\n        <button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-dak navbar-btn\">\r\n            <i class=\"fas fa-align-right\"></i>\r\n            <!-- <span></span> -->\r\n        </button>\r\n    </div>\r\n    <div class=\"logout-btn\">\r\n        <i class=\"fas fa-sign-out-alt\"></i>\r\n        <a href=\"\">Logout</a>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/help/help.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-3\"></div>\r\n    <div class=\"col-6\">\r\n      <h3>Contact Developers</h3>\r\n      <form (ngSubmit)=\"sendMail()\">\r\n        <label for=\"subject\">Subject: </label>\r\n        <input id=\"subject\" name=\"subject\" type=\"text\" class=\"form-control\" placeholder=\"Write Subject\" [(ngModel)]='data.subject'\r\n          required/>\r\n        <label for=\"content\">Message: </label>\r\n        <textarea id=\"content\" name=\"content\" cols=\"40\" rows=\"5\" class=\"form-control\" placeholder=\"Message\" [(ngModel)]='data.text'\r\n          required></textarea>\r\n        <br>\r\n        <button class=\"btn btn-large btn-dark\" id=\"send_email\">Send Email</button>\r\n        <span id=\"message\">{{message}}</span>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-3\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpComponent = (function () {
    function HelpComponent(http) {
        this.http = http;
        this.message = '';
        this.data = {
            subject: '',
            text: ''
        };
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent.prototype.sendMail = function () {
        var _this = this;
        this.message = 'Sending E-mail please wait...';
        this.http.post('http://localhost:3000/contact_developers', this.data).subscribe(function (res) {
            if (res) {
                _this.message = 'Message Sent Successfully';
            }
        });
    };
    HelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help',
            template: __webpack_require__("../../../../../src/app/help/help.component.html"),
            styles: [__webpack_require__("../../../../../src/app/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notification/notification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-3\"></div>\r\n    <div class=\"col-6\">\r\n      <h3>Send Notification Mail</h3>\r\n      <form (ngSubmit)=\"sendMail()\">\r\n        <label for=\"to\">Recipients: </label>\r\n        <input id=\"to\" name=\"to\" type=\"text\" class=\"form-control\" placeholder=\"Enter Recipient E-mail ID\" [(ngModel)]='data.to' required/>\r\n        <label for=\"subject\">Subject: </label>\r\n        <input id=\"subject\" name=\"subject\" type=\"text\" class=\"form-control\" placeholder=\"Write Subject\" [(ngModel)]='data.subject'\r\n        required/>\r\n        <label for=\"content\">Message: </label>\r\n        <textarea id=\"content\" name=\"content\" cols=\"40\" rows=\"5\" class=\"form-control\" placeholder=\"Message\" [(ngModel)]='data.text'\r\n          required></textarea>\r\n        <br>\r\n        <button class=\"btn btn-large btn-dark\" id=\"send_email\">Send Email</button>\r\n        <span id=\"message\">{{message}}</span>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-3\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationComponent = (function () {
    function NotificationComponent(http) {
        this.http = http;
        this.message = '';
        this.data = {
            to: '',
            subject: '',
            text: ''
        };
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    NotificationComponent.prototype.sendMail = function () {
        var _this = this;
        this.message = 'Sending E-mail please wait...';
        this.http.post('http://localhost:3000/send_mail', this.data).subscribe(function (res) {
            if (res) {
                _this.message = 'Message Sent Successfully';
            }
        });
    };
    NotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__("../../../../../src/app/notification/notification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notification/notification.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/change-password/change-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-wrapper{\r\n    position: absolute;\r\n    left: 40;\r\n    top: 40;\r\n    width: 40%;\r\n    vertical-align: middle;\r\n    padding: 20px 40px;\r\n    margin: 0 auto;\r\n    border-radius: 8px;\r\n   \r\n}\r\n\r\n.img{\r\n    display: block;\r\n    width: 45%;\r\n    margin: 0 auto;\r\n}\r\n\r\nh3{\r\n    font-size: 1.2rem;\r\n    color: black;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <img src=\"../../../assets/images/SGSITS-Indore-Logo.png\" alt=\"SGSITS LOGO\" class=\"img\">\r\n      <h3>Change Password</h3>\r\n    </div>\r\n\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <form action=\"#\" method=\"POST\">\r\n        <div class=\"form-group\">\r\n          <input type=\"password\" class=\"form-control\" id=\"currentPass\" aria-describedby=\"cp\" placeholder=\"Current Password\">\r\n          <input type=\"password\" class=\"form-control\" id=\"newPass\" aria-describedby=\"np\" placeholder=\"New Password\">\r\n          <input type=\"password\" class=\"form-control\" id=\"confirmPass\" placeholder=\"Confirm Password\">\r\n        </div>\r\n        <button type=\"submit\" class=\"button\" id=\"login-btn\">Change</button>\r\n        <br>\r\n        <br>\r\n        <small>&copy;opyright 2018 @ Anuj Jain & Vikram Patel</small>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChangePasswordComponent = (function () {
    function ChangePasswordComponent() {
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__("../../../../../src/app/pages/change-password/change-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.heading\r\n{\r\n    font-family: 'Bitter', serif;\r\n}\r\n\r\n#h3\r\n{\r\n    padding-top: 5px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 1.8rem;\r\n    color: #08131c;\r\n    text-align: center;\r\n}\r\n\r\n.underline\r\n{\r\n    background-color: #191919;\r\n    opacity: 0.3;\r\n    height: 1px;\r\n    margin: auto;\r\n    width: 80%;\r\n\r\n}\r\n\r\n\r\n.img-wrapper{\r\n    width: 60%;\r\n    margin: 0 auto;\r\n}\r\n\r\nimg{\r\n    padding: 5%;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .img-wrapper{\r\n        width: 60%;\r\n        padding: 5%;\r\n    }\r\n    img{\r\n        width: 100%;\r\n        /* height: 80%; */\r\n    }\r\n    #h3\r\n    {\r\n        font-size: 1.2rem;\r\n    }\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\"></div> -->\r\n      <div class=\"col-12\">\r\n      <div class=\"login_form\">\r\n        <div class=\"form_content\">\r\n          <div class=\"img-wrapper\">\r\n            <img src=\"../../../assets/images/SGSITS-Indore-Logo.png\" alt=\"S.G.S.I.T.S Logo\">\r\n          </div>\r\n          <h3 class=\"heading\" id=\"h3\">Login</h3>\r\n          <div class=\"underline\"></div>\r\n          <br>\r\n          <div id=\"\">\r\n            <form method=\"POST\" [formGroup]=\"myform\" class=\"needs-validation\"  novalidate>\r\n              <div class=\"form-group\" >\r\n                <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\"  placeholder=\"Enter email\" formControlName=\"email\" [ngClass]=\"displayFieldCss('email')\" [(ngModel)]=\"loginDetails.uname\">\r\n                <p class=\"small\" *ngIf=\"isValid('email')\">Enter Valid Email Address</p>\r\n                <br>\r\n                <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" formControlName=\"password\" [ngClass]=\"displayFieldCss('password')\" [(ngModel)]=\"loginDetails.pass\">\r\n                <p class=\"small\" *ngIf=\"isValid('password')\">Minimum 8 Characters Required</p>\r\n              </div>\r\n              <br>\r\n              <button type=\"submit\" class=\"btn btn-secondary btn-lg btn-block btn-dark myButton\" [disabled]=\"myform.invalid\" (click)=\"login()\">Login</button>\r\n              <br>\r\n              \r\n              <small>&copy;opyright 2018 @ S.G.S.I.T.S Indore</small>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n      <!-- <div class=\"col-md-2\"></div>\r\n    </div>\r\n  </div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular5_toaster__ = __webpack_require__("../../../../angular5-toaster/dist/bundles/angular5-toaster.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular5_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular5_toaster__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(userService, toasterService) {
        this.userService = userService;
        this.toasterService = toasterService;
        this.loginDetails = {
            uname: '',
            pass: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userService.loginCheck();
        this.myform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])
        });
    };
    LoginComponent.prototype.isValid = function (field) {
        return !this.myform.get(field).valid && this.myform.get(field).touched;
    };
    LoginComponent.prototype.displayFieldCss = function (field) {
        if (this.isValid(field)) {
            return 'has-error';
        }
        else if (!this.isValid(field)) {
            return 'has-success';
        }
        else {
            return '';
        }
    };
    LoginComponent.prototype.login = function () {
        this.userService.getUser(this.loginDetails).subscribe(function (res) {
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UserService */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular5_toaster__["ToasterService"]) === "function" && _a || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());



/***/ }),

/***/ "../../../../../src/app/pages/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.heading\r\n{\r\n    font-family: 'Bitter', serif;\r\n}\r\n\r\n#h3\r\n{\r\n    padding-top: 30px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 32px;\r\n    color: #08131c;\r\n    text-align: center;\r\n}\r\n\r\n.underline\r\n{\r\n    background-color: #191919;\r\n    opacity: 0.3;\r\n    height: 1px;\r\n    margin: auto;\r\n    width: 80%;\r\n\r\n}\r\n\r\n#login-form\r\n{\r\n    margin-left: 15px !important;\r\n    margin-top: 15px !important;\r\n    margin-right: 15px !important;\r\n}\r\n\r\n#login-btn\r\n{\r\n    background-color: #191919 !important;\r\n    color: #eff9f0 !important;\r\n    width: 120px !important;\r\n    border-color: #191919 !important;\r\n    font-size: 20px !important;\r\n    font-weight: 500 !important;\r\n    margin-top: -10px !important;\r\n}\r\n\r\n#login-btn:hover\r\n{\r\n    background-color: #ef626c !important;\r\n    border-color: #ef626c !important;\r\n    /* color: #08131c !important; */\r\n    font-size: 20px !important;\r\n    font-weight: 600 !important;\r\n}\r\n\r\nimg\r\n{\r\n    padding-top:10%;\r\n    padding-left:25%;\r\n}\r\n\r\nsmall{\r\n    color:#08131c;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-2\"></div>\r\n    <div class=\"col-8\">\r\n        <h4>Register A User</h4>\r\n        <form (submit)=\"addUser()\" [formGroup]=\"myform\">\r\n        <label for=\"Input4\">Employee ID: </label>\r\n        <input type=\"text\" class=\"form-control\" name=\"eid\" id=\"Input4\" placeholder=\"Employee ID\" [(ngModel)]=\"clerk.id\" formControlName=\"eid\" [ngClass]=\"displayFieldCss('eid')\">\r\n        <p class=\"small\" *ngIf=\"isValid('eid')\">Employee id is Mandatory</p>\r\n\r\n        <label for=\"Input1\">Name: </label>\r\n        <input type=\"text\" class=\"form-control\" name=\"name\" id=\"Input1\" placeholder=\"Name\" [(ngModel)]=\"clerk.name\" formControlName=\"name\" [ngClass]=\"displayFieldCss('name')\">\r\n        <p class=\"small\" *ngIf=\"isValid('name')\">Name is Mandatory</p>\r\n\r\n        <label for=\"Input2\">Email: </label>\r\n        <input type=\"text\" class=\"form-control\" name=\"email\" id=\"Input2\" placeholder=\"Email\" [(ngModel)]=\"clerk.email\" formControlName=\"email\" [ngClass]=\"displayFieldCss('email')\">\r\n        <p class=\"small\" *ngIf=\"isValid('email')\">Enter Valid Email Address</p>\r\n\r\n        <label for=\"Input3\">Password: </label>\r\n        <input type=\"text\" class=\"form-control\" name=\"password\" id=\"Input3\" placeholder=\"Password\" [(ngModel)]=\"clerk.password\" formControlName=\"password\" [ngClass]=\"displayFieldCss('password')\">\r\n        <p class=\"small\" *ngIf=\"isValid('password')\">Minimum 8 characters are required</p>\r\n\r\n        <label for=\"Input4\">Confirm Password: </label>\r\n        <input type=\"text\" class=\"form-control\" name=\"cpassword\" id=\"Input4\" placeholder=\"Enter Password Again\" [(ngModel)]=\"clerk.cpassword\" formControlName=\"cpassword\" [ngClass]=\"displayFieldCss('cpassword')\">\r\n        <p class=\"small\" *ngIf=\"isValid('cpassword')\">Enter Password same as Password used above</p>\r\n\r\n        <label for=\"Input5\">Role </label>\r\n        <select class=\"form-control custom-select\" name=\"role\" id=\"Input5\" [(ngModel)]=\"clerk.role\" formControlName=\"role\" [ngClass]=\"displayFieldCss('role')\">\r\n          <option [disabled]=\"true\" [selected]=\"true\">Choose Type</option>\r\n          <option value=\"Clerk\">Clerk</option>\r\n          <option value=\"QP\">QP</option>\r\n        </select>\r\n        <p class=\"small\" *ngIf=\"isValid('role')\">Select User Type</p>\r\n        \r\n        <br>\r\n        <br>\r\n        <input type=\"submit\" value=\"Register\" class=\"btn btn-dark btn-secondary btn-lg  btn-block quit\" [disabled]=\"myform.invalid\">\r\n        </form>\r\n    </div>\r\n    <div class=\"col-2\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(userService) {
        this.userService = userService;
        this.clerk = {
            id: null,
            name: null,
            email: null,
            password: null,
            cpassword: null,
            role: null
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.myform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ]),
            eid: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ]),
            cpassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ]),
            role: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ])
        });
    };
    SignupComponent.prototype.isValid = function (field) {
        return !this.myform.get(field).valid && this.myform.get(field).touched;
    };
    SignupComponent.prototype.displayFieldCss = function (field) {
        if (this.isValid(field)) {
            return 'has-error';
        }
        else if (!this.isValid(field)) {
            return 'has-success';
        }
        else
            return '';
    };
    SignupComponent.prototype.addUser = function () {
        this.userService.addUser(this.clerk).subscribe();
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/pages/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UserService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/paper-recieved/paper-recieved.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paper-recieved/paper-recieved.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\r\n\r\n    <div class=\"modal_form\">\r\n        <div class=\"modal__content\">\r\n          <label for=\"click\" style=\"float:right\">\r\n            <a class=\"close-x quit\" (click)=\"closex()\">X</a>\r\n          </label>\r\n      <h4>Send Notification to Selected Examiners</h4>\r\n      <form (ngSubmit)=\"notify()\" [formGroup]=\"myform\" novalidate>\r\n        <label for=\"subject\">Subject</label>\r\n        <input class=\"form-control\" id=\"subject\" type=\"text\" formControlName=\"subject\" [(ngModel)]=\"data.subject\">\r\n        <label for=\"text\">Body</label>\r\n        <!-- <h3 class=\"first\">Default</h3> -->\r\n        <p-editor [(ngModel)]=\"data.html\"  formControlName=\"text\" [style]=\"{'height':'220px'}\"></p-editor>\r\n        <span class=\"small\" *ngIf=\"!isValid('text')\">Body is Required</span>\r\n        <br><br>\r\n        <input type=\"submit\" class=\"btn btn-lg btn-block btn-dark\" [disabled]=\"myform.invalid\" value=\"Notify\">\r\n      </form>\r\n      </div>\r\n      </div>\r\n      <div class=\"overlay\"></div>\r\n\r\n  <h4>Paper Recieved Status</h4>\r\n  <hr>\r\n  <!-- <div *ngIf='allotedService.alloted.length>0'> -->\r\n  <div>\r\n    <!--  temp -->\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-addon\">\r\n              <i class=\"fas fa-search\"></i>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Type to Subject Code...\" [(ngModel)]=\"searchString\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-1\">\r\n        <input type=\"checkbox\" id=\"click\" style=\"display:none;\" />\r\n        <label class=\"button-dark\" for=\"click\">\r\n          <a id=\"add\" class=\"btn btn-dark text-white\" (click)=\"openAddWindow()\">Notify</a>\r\n        </label>\r\n      </div>\r\n  </div>\r\n\r\n \r\n  <table class=\"table table-striped table-bordered table-sm\" id=\"example\">\r\n    <thead class=\"table-dark\">\r\n      <tr>\r\n        <th>\r\n          <div class=\"ui-g\" style=\"margin-bottom:10px\">\r\n            <input type=\"checkbox\" name=\"selectAll\" [(ngModel)]=\"all\" (change)=\"selectAll()\">\r\n            </div>\r\n        </th>\r\n        <th>#</th>\r\n        <th>Exam Code</th>\r\n        <th>Examiner Name</th>\r\n        <th>Proposal</th>\r\n        <!-- <th>Proposal Sent</th> -->\r\n        <th>Status</th>\r\n        <!-- <th>Status Recieved</th> -->\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let alloted of paperStatus | filter : 'exam_code' : searchString | paginate: { itemsPerPage: 10, currentPage: p}; let idx = index\">\r\n        <td>\r\n            <input type=\"checkbox\" name=\"cb\" [checked]=\"all\" value=\"{{alloted.exam_code}}\" (change)=\"toggleSelection(alloted.exam_code)\">\r\n        </td>\r\n        <th scope=\"row\">{{idx+1}}</th>\r\n        <td>{{alloted.exam_code}}</td>\r\n        <td>{{alloted.examiner | uppercase }}</td>\r\n        <td><div id=\"#pp\">\r\n            <div class=\"row\">\r\n            <div class=\"col-8\"> \r\n                <select class=\"form-control input-sm\" [(ngModel)]=\"proposal[idx]\" *ngIf=\"alloted.proposal !== 'Generated'\">\r\n                    <option value=\"Not Generated\">Not Generated</option>\r\n                    <option value=\"Generated\">Generated</option>\r\n              </select>\r\n              <div *ngIf=\"alloted.proposal == 'Generated'\">{{alloted.proposal}}</div>\r\n            </div>\r\n            <div class=\"col-4\" *ngIf=\"alloted.proposal !== 'Generated'\">\r\n                <button (click)=\"updateStatus(alloted, 'proposal', idx)\" class=\"btn btn-sm btn-outline-success\">Update</button>\r\n            </div>\r\n          </div>\r\n        </div></td>\r\n        <!-- <td>{{alloted.proposal_sent}}</td> -->\r\n        <td><div id=\"#ps\">\r\n            <div class=\"row\">\r\n            <div class=\"col-8\"> \r\n                <select class=\"form-control input-sm\" [(ngModel)]=\"status[idx]\" *ngIf=\"alloted.status !== 'Received'\">\r\n                    <option value=\"Not Received\">Not Received</option>\r\n                    <option value=\"Received\">Received</option>\r\n              </select>\r\n              <div *ngIf=\"alloted.status === 'Received'\">{{alloted.status}}</div>\r\n            </div>\r\n            <div class=\"col-4\" *ngIf=\"alloted.status !== 'Received'\">\r\n                <button (click)=\"updateStatus(alloted, 'status', idx)\" class=\"btn btn-sm btn-outline-success\">Update</button>\r\n            </div>\r\n          </div>\r\n        </div></td>\r\n        <!-- <td>{{alloted.recieved_time}}</td> -->\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n  <div class=\"form-group export-wrapper\">\r\n      <input type=\"button\" class=\"btn btn-block btn-sm btn-outline-success form-control\" (click)=\"doit('xlsx')\" value=\"Export\">\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/paper-recieved/paper-recieved.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperRecievedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx__ = __webpack_require__("../../../../xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular5_toaster__ = __webpack_require__("../../../../angular5-toaster/dist/bundles/angular5-toaster.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular5_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular5_toaster__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_examiner_service__ = __webpack_require__("../../../../../src/app/services/examiner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_paper_recieved_service__ = __webpack_require__("../../../../../src/app/services/paper-recieved.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var PaperRecievedComponent = (function () {
    function PaperRecievedComponent(paperReceivedService, http, examinerService, notificationService, toasterService) {
        this.paperReceivedService = paperReceivedService;
        this.http = http;
        this.examinerService = examinerService;
        this.notificationService = notificationService;
        this.toasterService = toasterService;
        this.emails = [];
        this.selectedExaminerToNotify = [];
        this.selectedValues = [];
        this.status = [];
        this.proposal = [];
        this.data = {
            to: [],
            subject: '',
            html: ''
        };
    }
    PaperRecievedComponent.prototype.ngOnInit = function () {
        this.getStatus();
        this.myform = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormGroup"]({
            text: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required
            ]),
            subject: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('')
        });
    };
    PaperRecievedComponent.prototype.updateStatus = function (alloted, type, idx) {
        var _this = this;
        console.log(type);
        if (type === 'proposal') {
            alloted.proposal = this.proposal[idx];
        }
        if (type === 'status') {
            alloted.status = this.status[idx];
            console.log(this.status[idx]);
        }
        this.paperReceivedService.updateStatus(alloted).subscribe(function (res) { return _this.getStatus(); });
    };
    PaperRecievedComponent.prototype.getStatus = function () {
        var _this = this;
        this.paperReceivedService.getStatus().subscribe(function (res) { return _this.paperStatus = res; });
    };
    PaperRecievedComponent.prototype.doit = function (type, fn, dl) {
        var paperRecievedStatusToExport = [];
        if (this.paperStatus.length === 0) {
            this.toasterService.pop("info", "No Data Found to Export");
        }
        else {
            for (var _i = 0, _a = this.paperStatus; _i < _a.length; _i++) {
                var data = _a[_i];
                paperRecievedStatusToExport.push({
                    'Exam Code': data.exam_code,
                    'Examiner': data.examiner,
                    'Proposal': data.proposal,
                    'Status': data.status,
                    'Proposal Sent': data.proposal_sent,
                    'Received Time': data.received_time
                });
            }
            var json = paperRecievedStatusToExport;
            //console.log(json);
            var ws = __WEBPACK_IMPORTED_MODULE_2_xlsx__["utils"].json_to_sheet(json);
            var wb = { Sheets: { 'Paper Recieved Status': ws }, SheetNames: ['Paper Recieved Status'] };
            // console.log(wb);
            __WEBPACK_IMPORTED_MODULE_2_xlsx__["write"](wb, { bookType: type, bookSST: true, type: 'base64' });
            __WEBPACK_IMPORTED_MODULE_2_xlsx__["writeFile"](wb, fn || ('Received_Status.' + (type || 'xlsx')));
            this.toasterService.pop('success', 'Data Exported Successfully');
        }
    };
    PaperRecievedComponent.prototype.notify = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.examinerService.getSelectedEmail(this.selectedValues).toPromise().then(function (res) {
                            _this.selectedExaminerToNotify = res;
                        })];
                    case 1:
                        _a.sent();
                        this.selectedExaminerToNotify.map(function (item) { return _this.emails.push(item.email); });
                        // console.log(this.selectedExaminerToNotify);
                        this.data.to = this.emails;
                        this.sendMail();
                        this.closex();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaperRecievedComponent.prototype.sendMail = function () {
        var _this = this;
        // console.log(this.data);
        //this.message = 'Sending E-mail please wait...';
        this.notificationService.sendMail(this.data).subscribe(function (res) {
            if (res.status === true) {
                _this.toasterService.pop('success', res.message);
            }
            else {
                _this.toasterService.pop('error', res.message);
            }
        });
    };
    PaperRecievedComponent.prototype.toggleSelection = function (scode) {
        var idx = this.selectedValues.indexOf(scode);
        if (idx > -1) {
            this.selectedValues.splice(idx, 1);
            this.paperStatus[idx]['selected'] = false;
        }
        else {
            this.selectedValues.push(scode);
            var idx_1 = this.selectedValues.indexOf(scode);
            this.paperStatus[idx_1]['selected'] = true;
        }
        // console.log(this.selectedValues);
    };
    PaperRecievedComponent.prototype.selectAll = function () {
        var _this = this;
        if (this.selectedValues.length === this.paperStatus.length) {
            this.paperStatus.map(function (item) {
                item['selected'] = false;
                _this.selectedValues.pop();
            });
        }
        else {
            this.paperStatus.map(function (item) {
                if (!_this.selectedValues.includes(item.exam_code)) {
                    item['selected'] = true;
                    _this.selectedValues.push(item.exam_code);
                }
            });
        }
        // console.log(this.selectedValues);
    };
    PaperRecievedComponent.prototype.openAddWindow = function () {
        if (this.selectedValues.length === 0) {
            this.toasterService.pop('info', "Please Select Atleast one E-record");
            this.closex();
        }
        $('#entry').val('Add');
        $('.modal_form').toggleClass('modal_form_on');
        $('.overlay').toggleClass('overlay_on');
    };
    PaperRecievedComponent.prototype.closex = function () {
        $('.modal_form').toggleClass('modal_form_on');
        $('.overlay').toggleClass('overlay_on');
    };
    PaperRecievedComponent.prototype.isValid = function (field) {
        return !this.myform.get(field).valid && this.myform.get(field).touched;
    };
    PaperRecievedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-paper-recieved',
            template: __webpack_require__("../../../../../src/app/paper-recieved/paper-recieved.component.html"),
            styles: [__webpack_require__("../../../../../src/app/paper-recieved/paper-recieved.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_paper_recieved_service__["a" /* PaperRecievedService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__services_examiner_service__["a" /* ExaminerService */],
            __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular5_toaster__["ToasterService"]) === "function" && _a || Object])
    ], PaperRecievedComponent);
    return PaperRecievedComponent;
    var _a;
}());



/***/ }),

/***/ "../../../../../src/app/paper-setter/paper-setter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paper-setter/paper-setter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\r\n\r\n  <div class=\"modal_form\">\r\n      <div class=\"modal__content\">\r\n        <label for=\"click\" style=\"float:right\">\r\n          <a class=\"close-x quit\" (click)=\"closex()\">X</a>\r\n        </label>\r\n    <h4>Allot Paper Setter</h4>\r\n    <form (ngSubmit)=\"allotPaperSetter()\" [formGroup]=\"myform\" novalidate>\r\n\r\n        <label for=\"sub_group\">Subject Code</label>&nbsp;\r\n        <select class=\"form-control\" name=\"sub_group\" id=\"sub_group\" (change)=\"getExamCodes(paperSetter.subject_code)\" [(ngModel)]=\"paperSetter.subject_code\" formControlName=\"sub_group\" >\r\n            <option [selected]=\"true\">Select</option>\r\n          <option value=\"{{subject.subject_code}}\" *ngFor=\"let subject of subjects\"> {{ subject.subject_code }} </option>\r\n        </select>\r\n        <br>\r\n        <label for=\"ex_code\">Exam Code</label>&nbsp;\r\n        <select class=\"form-control\" name=\"ex_code\" id=\"ex_code\" (change)=\"getExaminerByExamCode(paperSetter.exam_code)\" [(ngModel)]=\"paperSetter.exam_code\" formControlName=\"ex_code\" >\r\n          <option >Select</option>\r\n          <option value=\"{{examCode.exam_code}}\" *ngFor=\"let examCode of examCodes\"> {{ examCode.exam_code }} </option>\r\n        </select>\r\n        <br>\r\n      <input type=\"submit\" class=\"btn btn-lg btn-block btn-dark\" [disabled]=\"myform.invalid\" value=\"Allot\">\r\n    </form>\r\n    </div>\r\n    </div>\r\n    <div class=\"overlay\"></div>\r\n\r\n<h4>Paper Setter</h4>\r\n<hr>\r\n<!-- <div *ngIf='allotedService.alloted.length>0'> -->\r\n<div>\r\n  <!--  temp -->\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-addon\">\r\n            <i class=\"fas fa-search\"></i>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Type to Subject Code...\" [(ngModel)]=\"searchString\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-1\">\r\n      <input type=\"checkbox\" id=\"click\" style=\"display:none;\" />\r\n      <label class=\"button-dark\" for=\"click\">\r\n        <a id=\"add\" class=\"btn btn-dark text-white\" (click)=\"openAddWindow()\">Allot Paper Setter</a>\r\n      </label>\r\n    </div>\r\n</div>\r\n\r\n\r\n<table class=\"table table-striped table-bordered table-sm\" id=\"example\">\r\n  <thead class=\"table-dark\">\r\n    <tr>\r\n      <th>\r\n        <div class=\"ui-g\" style=\"margin-bottom:10px\">\r\n          <input type=\"checkbox\" name=\"selectAll\" [(ngModel)]=\"all\" (change)=\"selectAll()\">\r\n          </div>\r\n      </th>\r\n      <th>#</th>\r\n      <th>Exam Code</th>\r\n      <th>Subject Code</th>\r\n      <th>Examiner</th>\r\n      <th>Action</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let alloted of allotedPaperSetter | filter : 'exam_code' : searchString | paginate: { itemsPerPage: 10, currentPage: p}; let idx = index\">\r\n      <td>\r\n          <input type=\"checkbox\" name=\"cb\" [checked]=\"all\" value=\"{{alloted.exam_code}}\" (change)=\"toggleSelection(alloted.subject_code)\">\r\n      </td>\r\n      <th scope=\"row\">{{idx+1}}</th>\r\n      <td>{{alloted.subject_code}}</td>\r\n      <td>{{alloted.exam_code | uppercase }}</td>\r\n      <td>{{alloted.examiner | uppercase }}</td>\r\n      <td>\r\n          <a (click)=\"deleteAlloted(alloted.subject_code)\">\r\n            <i class=\"fas fa-times\"></i>\r\n          </a>\r\n        </td>\r\n      <!-- <td>{{alloted.recieved_time}}</td> -->\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n<div class=\"form-group export-wrapper\">\r\n    <input type=\"button\" class=\"btn btn-block btn-sm btn-outline-success form-control\" (click)=\"doit('xlsx')\" value=\"Export\">\r\n</div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/paper-setter/paper-setter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperSetterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alloted_service__ = __webpack_require__("../../../../../src/app/services/alloted.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_examiner_service__ = __webpack_require__("../../../../../src/app/services/examiner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_paper_setter_service__ = __webpack_require__("../../../../../src/app/services/paper-setter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular5_toaster__ = __webpack_require__("../../../../angular5-toaster/dist/bundles/angular5-toaster.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular5_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular5_toaster__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaperSetterComponent = (function () {
    function PaperSetterComponent(allotedService, examinerService, paperSetterService, toasterService) {
        this.allotedService = allotedService;
        this.examinerService = examinerService;
        this.paperSetterService = paperSetterService;
        this.toasterService = toasterService;
        this.examCodes = [];
        this.paperSetter = {
            subject_code: '',
            exam_code: '',
            examiner: ''
        };
        this.subjects = [];
    }
    PaperSetterComponent.prototype.ngOnInit = function () {
        this.getAllotedSubjects();
        this.getAllotedPaperSetter();
        this.myform = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            sub_group: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required
            ]),
            ex_code: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required
            ])
        });
    };
    PaperSetterComponent.prototype.openAddWindow = function () {
        $('#entry').val('Add');
        $('.modal_form').toggleClass('modal_form_on');
        $('.overlay').toggleClass('overlay_on');
    };
    PaperSetterComponent.prototype.closex = function () {
        $('.modal_form').toggleClass('modal_form_on');
        $('.overlay').toggleClass('overlay_on');
    };
    PaperSetterComponent.prototype.getAllotedSubjects = function () {
        var _this = this;
        this.examinerService.getAllotedSubjects().subscribe(function (res) {
            _this.subjects = res;
        });
    };
    PaperSetterComponent.prototype.getExamCodes = function (subject_code) {
        var _this = this;
        this.examinerService.getExamCodesBySubjectCode(subject_code).subscribe(function (res) {
            _this.examCodes = res;
        });
    };
    PaperSetterComponent.prototype.allotPaperSetter = function () {
        var _this = this;
        this.paperSetter.examiner = this.examiner;
        this.paperSetterService.allotPaperSetter(this.paperSetter).subscribe(function (res) {
            _this.getAllotedPaperSetter();
            _this.closex();
        });
        this.paperSetter.examiner = '';
        this.paperSetter.exam_code = '';
        this.paperSetter.subject_code = '';
    };
    PaperSetterComponent.prototype.getAllotedPaperSetter = function () {
        var _this = this;
        this.paperSetterService.getAllotedPaperSetter().subscribe(function (res) {
            _this.allotedPaperSetter = res;
        });
    };
    PaperSetterComponent.prototype.deleteAlloted = function (exam_code) {
        var _this = this;
        this.paperSetterService.deleteAlloted(exam_code).subscribe(function (res) {
            if (res.status === false) {
                _this.toasterService.pop('error', res.message);
            }
            else {
                _this.getAllotedPaperSetter();
                _this.toasterService.pop('success', res.message);
            }
        });
    };
    PaperSetterComponent.prototype.getExaminerByExamCode = function (exam_code) {
        var _this = this;
        //console.log(exam_code);
        this.paperSetterService.getExaminerByExamCode(exam_code).subscribe(function (res) {
            _this.examiner = res[0].name;
        });
    };
    PaperSetterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-paper-setter',
            template: __webpack_require__("../../../../../src/app/paper-setter/paper-setter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/paper-setter/paper-setter.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_alloted_service__["a" /* AllotedService */],
            __WEBPACK_IMPORTED_MODULE_2__services_examiner_service__["a" /* ExaminerService */],
            __WEBPACK_IMPORTED_MODULE_4__services_paper_setter_service__["a" /* PaperSetterService */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular5_toaster__["ToasterService"]) === "function" && _a || Object])
    ], PaperSetterComponent);
    return PaperSetterComponent;
    var _a;
}());



/***/ }),

/***/ "../../../../../src/app/paper-valuation/paper-valuation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paper-valuation/paper-valuation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\r\n\r\n  <div class=\"modal_form\">\r\n      <div class=\"modal__content\">\r\n        <label for=\"click\" style=\"float:right\">\r\n          <a class=\"close-x quit\" (click)=\"closex()\">X</a>\r\n        </label>\r\n    <div id=\"notification\">\r\n    <h4>Send Notification to Selected Examiners</h4>\r\n    <form (ngSubmit)=\"notify()\" id=\"n\" [formGroup]=\"myform\" novalidate>\r\n      <label for=\"subject\">Subject</label>\r\n      <input class=\"form-control\" id=\"subject\" type=\"text\" formControlName=\"subject\" [(ngModel)]=\"data.subject\">\r\n      <label for=\"text\">Body</label>\r\n      <!-- <h3 class=\"first\">Default</h3> -->\r\n      <p-editor [(ngModel)]=\"data.html\"  formControlName=\"text\" [style]=\"{'height':'220px'}\"></p-editor>\r\n      <span class=\"small\" *ngIf=\"!isValid('text')\">Body is Required</span>\r\n      <br><br>\r\n      <input type=\"submit\" class=\"btn btn-lg btn-block btn-dark\" [disabled]=\"myform.invalid\" value=\"Notify\">\r\n    </form>\r\n    </div>\r\n\r\n\r\n    <div id=\"valuer\">\r\n    <h4>Allot Valuer</h4>\r\n    <form (ngSubmit)=\"allotValuer()\" id=\"v\" [formGroup]=\"myformValuer\" novalidate>\r\n      <label for=\"sub_code\">Exam Code</label>&nbsp;\r\n      <select class=\"form-control\" name=\"scode\" id=\"sub_code\" (change)=\"getValuerName()\" formControlName=\"scode\" [(ngModel)]=\"data1.exam_code\">\r\n        <option value=\"{{ecode.exam_code}}\" *ngFor=\"let ecode of exam_codes\"> {{ ecode.exam_code }} </option>\r\n      </select>\r\n      <div class=\"col-12 nopadding\">\r\n        <label for=\"valuer\">Valuer</label>&nbsp;\r\n        <select type=\"text\" name=\"valuer\" id=\"valuer\" class=\"form-control\" [(ngModel)]=\"data1.valuer\" formControlName=\"valuer\" >\r\n          <option value=\"{{valuer}}\">{{valuer}}</option>\r\n        </select>  \r\n        <br>\r\n      </div>\r\n      <div class=\"col-12 nopadding\">\r\n          <label for=\"coval1\">Co-Valuer 1</label>&nbsp;\r\n        <input type=\"text\" name=\"name1\" id=\"coval1\" class=\"form-control\" placeholder=\"Co-Valuer Name\" [(ngModel)]=\"data1.name1\" formControlName=\"name1\"><br>\r\n      </div>\r\n      <div class=\"col-12 nopadding\">\r\n          <label for=\"coval2\">Co-Valuer 2</label>&nbsp;\r\n          <input type=\"text\" name=\"name2\" id=\"coval2\" class=\"form-control\" placeholder=\"Co-Valuer Name\" [(ngModel)]=\"data1.name2\" formControlName=\"name2\"><br>\r\n      </div>\r\n      <div class=\"col-12 nopadding\">\r\n          <label for=\"coval3\">Co-Valuer 3</label>&nbsp;\r\n          <input type=\"text\" name=\"name3\" id=\"coval3\" class=\"form-control\" placeholder=\"Co-Valuer Name\" [(ngModel)]=\"data1.name3\" formControlName=\"name3\"><br>\r\n      </div>\r\n      <br>\r\n    <input type=\"submit\" class=\"btn btn-lg btn-block btn-dark\" [disabled]=\"myformValuer.invalid\" value=\"Allot\">\r\n  </form>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    <div class=\"overlay\"></div>\r\n\r\n<h4>Paper Valuation</h4>\r\n<hr>\r\n<!-- <div *ngIf='allotedService.alloted.length>0'> -->\r\n<div>\r\n  <!--  temp -->\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-addon\">\r\n            <i class=\"fas fa-search\"></i>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Type to Exam Code...\" [(ngModel)]=\"searchString\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-1\">\r\n      <input type=\"checkbox\" id=\"click\" style=\"display:none;\" />\r\n      <label class=\"button-dark\" for=\"click\">\r\n        <a id=\"add\" class=\"btn btn-dark text-white\" (click)=\"openAddWindow('add')\">Notify</a>\r\n      </label>\r\n    </div>\r\n    <div class=\"col-1\">\r\n        <input type=\"checkbox\" id=\"click\" style=\"display:none;\" />\r\n        <label class=\"button-dark\" for=\"click\">\r\n          <a id=\"val\" class=\"btn btn-dark text-white\" (click)=\"openAddWindow('val')\">Add Valuer</a>\r\n        </label>\r\n      </div>\r\n    \r\n</div>\r\n\r\n\r\n<table class=\"table table-striped table-bordered table-sm\" id=\"example\">\r\n  <thead class=\"table-dark\">\r\n    <tr>\r\n      <th>\r\n        <div class=\"ui-g\" style=\"margin-bottom:10px\">\r\n          <input type=\"checkbox\" name=\"selectAll\" [(ngModel)]=\"all\" (change)=\"selectAll()\">\r\n          </div>\r\n      </th>\r\n      <th>#</th>\r\n      <th>Exam Code</th>\r\n      <th>Valuer Name</th>\r\n      <th>Co_Valuer Name</th>\r\n      <th>Co_Valuer Name</th>\r\n      <th>Co_Valuer Name</th>\r\n      <th>Paper Sent Status</th>\r\n      <!-- <th>Proposal Sent</th> -->\r\n      <th>Paper Recieved Status</th>\r\n      <th>Action</th>\r\n      <!-- <th>Status Recieved</th> -->\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let alloted of allotedValuers | filter : 'exam_code' : searchString | paginate: { itemsPerPage: 10, currentPage: p}; let idx = index\">\r\n      <td>\r\n          <input type=\"checkbox\" name=\"cb\" [checked]=\"all\" value=\"{{alloted.exam_code}}\" (change)=\"toggleSelection(alloted.exam_code)\">\r\n      </td>\r\n      <th scope=\"row\">{{idx+1}}</th>\r\n      <td>{{alloted.exam_code}}</td>\r\n      <td>{{alloted.valuer | uppercase }}</td>\r\n      <td>{{alloted.coval1 | uppercase }}</td>\r\n      <td>{{alloted.coval2 | uppercase }}</td>\r\n      <td>{{alloted.coval3 | uppercase }}</td>\r\n      <td><div id=\"#pp\">\r\n          <div class=\"row\">\r\n          <div class=\"col-6\"> \r\n              <select class=\"form-control input-sm\" [(ngModel)]=\"sent[idx]\" *ngIf=\"alloted.sent !== 'Sent'\">\r\n                  <option value=\"Not Sent\">Not Sent</option>\r\n                  <option value=\"Sent\">Sent</option>\r\n            </select>\r\n            <div *ngIf=\"alloted.sent == 'Sent'\">{{alloted.sent}}</div>\r\n          </div>\r\n          <div class=\"col-2\" *ngIf=\"alloted.sent !== 'Sent'\">\r\n              <button (click)=\"updateStatus(alloted, 'sent', idx)\" class=\"btn btn-sm btn-outline-success\">Update</button>\r\n          </div>\r\n        </div>\r\n      </div></td>\r\n      <!-- <td>{{alloted.proposal_sent}}</td> -->\r\n      <td><div id=\"#ps\">\r\n          <div class=\"row\">\r\n          <div class=\"col-8\"> \r\n              <select class=\"form-control input-sm\" [(ngModel)]=\"recieved[idx]\" *ngIf=\"alloted.recieved !== 'Received'\">\r\n                  <option value=\"Not Received\">Not Received</option>\r\n                  <option value=\"Received\">Received</option>\r\n            </select>\r\n            <div *ngIf=\"alloted.recieved === 'Received'\">{{alloted.recieved}}</div>\r\n          </div>\r\n          <div class=\"col-4\" *ngIf=\"alloted.recieved !== 'Received'\">\r\n              <button (click)=\"updateStatus(alloted, 'recieved',idx)\" class=\"btn btn-sm btn-outline-success\">Update</button>\r\n          </div>\r\n        </div>\r\n      </div></td>\r\n      <td>\r\n        <a (click)=\"deleteValuer(alloted.exam_code)\">\r\n          <i class=\"fas fa-times\"></i>\r\n        </a>\r\n      </td>\r\n      <!-- <td>{{alloted.recieved_time}}</td> -->\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n<div class=\"export-wrapper\">\r\n  <input type=\"button\" class=\"btn btn-block btn-sm btn-outline-danger\" (click)=\"deleteAllAllotedValuers()\" value=\"Delete All\">\r\n</div>\r\n<div class=\"form-group export-wrapper\">\r\n    <input type=\"button\" class=\"btn btn-block btn-sm btn-outline-success form-control\" (click)=\"doit('xlsx')\" value=\"Export\">\r\n</div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/paper-valuation/paper-valuation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperValuationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx__ = __webpack_require__("../../../../xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular5_toaster__ = __webpack_require__("../../../../angular5-toaster/dist/bundles/angular5-toaster.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular5_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular5_toaster__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_paper_valuation_service__ = __webpack_require__("../../../../../src/app/services/paper-valuation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_examiner_service__ = __webpack_require__("../../../../../src/app/services/examiner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var PaperValuationComponent = (function () {
    function PaperValuationComponent(examinerService, http, notificationService, toasterService, paperValuationService) {
        this.examinerService = examinerService;
        this.http = http;
        this.notificationService = notificationService;
        this.toasterService = toasterService;
        this.paperValuationService = paperValuationService;
        this.data1 = {
            exam_code: '',
            subject_code: '',
            valuer: '',
            name1: '',
            name2: '',
            name3: '',
            sent: '',
            recieved: ''
        };
        this.emails = [];
        this.selectedExaminerToNotify = [];
        this.selectedValues = [];
        this.sent = [];
        this.recieved = [];
        this.data = {
            to: [],
            subject: '',
            html: ''
        };
    }
    PaperValuationComponent.prototype.ngOnInit = function () {
        this.getExamCodes();
        this.getAllValuers();
        this.myform = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormGroup"]({
            text: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required
            ]),
            subject: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('')
        });
        this.myformValuer = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormGroup"]({
            scode: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required
            ]),
            name1: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](''),
            name2: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](''),
            name3: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](''),
            valuer: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required
            ])
        });
    };
    PaperValuationComponent.prototype.getExamCodes = function () {
        var _this = this;
        this.examinerService.getExamCodes().subscribe(function (res) {
            _this.exam_codes = res;
        });
    };
    PaperValuationComponent.prototype.getAllValuers = function () {
        var _this = this;
        this.paperValuationService.getAllotedValuers().subscribe(function (res) {
            //console.log(res);
            _this.allotedValuers = res;
        });
    };
    PaperValuationComponent.prototype.updateStatus = function (alloted, type, idx) {
        var _this = this;
        console.log(alloted);
        if (type === 'sent') {
            alloted.sent = this.sent[idx];
            // alloted.recieved_time = new Date().getDate();
        }
        if (type === 'recieved') {
            alloted.recieved = this.recieved[idx];
            // alloted.proposal_sent = new Date().getDate();
        }
        this.paperValuationService.updateAllotedValuer(alloted).subscribe(function (res) { return _this.getAllValuers(); });
    };
    // getStatus() {
    //   this.allotedService.getAlloted().subscribe(res => this.alloted_examiners = res);
    // }
    PaperValuationComponent.prototype.doit = function (type, fn, dl) {
        var valuersToExport = [];
        for (var _i = 0, _a = this.allotedValuers; _i < _a.length; _i++) {
            var data = _a[_i];
            valuersToExport.push({
                'Exam Code': data.exam_code,
                'Valuer': data.valuer,
                'Co-Valuer 1': data.coval1,
                'Co-Valuer 2': data.coval2,
                'Co-Valuer 3': data.coval3,
                'Sent Status': data.sent,
                'Recieved Status': data.recieved
            });
        }
        var json = valuersToExport;
        var ws = __WEBPACK_IMPORTED_MODULE_2_xlsx__["utils"].json_to_sheet(json);
        var wb = { Sheets: { 'Alloted Valuers': ws }, SheetNames: ['Alloted Valuers'] };
        __WEBPACK_IMPORTED_MODULE_2_xlsx__["write"](wb, { bookType: type, bookSST: true, type: 'base64' });
        __WEBPACK_IMPORTED_MODULE_2_xlsx__["writeFile"](wb, fn || ('Received_Status.' + (type || 'xlsx')));
    };
    PaperValuationComponent.prototype.notify = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.examinerService.getSelectedEmail(this.selectedValues).toPromise().then(function (res) {
                            _this.selectedExaminerToNotify = res;
                        })];
                    case 1:
                        _a.sent();
                        this.selectedExaminerToNotify.map(function (item) { return _this.emails.push(item.email); });
                        this.data.to = this.emails;
                        this.sendMail();
                        this.closex();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaperValuationComponent.prototype.sendMail = function () {
        var _this = this;
        this.notificationService.sendMail(this.data).subscribe(function (res) {
            if (res.status === true) {
                _this.toasterService.pop('success', res.message);
            }
            else {
                _this.toasterService.pop('error', res.message);
            }
        });
    };
    // Select All Feature to be imeplemented  //
    PaperValuationComponent.prototype.toggleSelection = function (exam_code) {
        var idx = this.selectedValues.indexOf(exam_code);
        if (idx > -1) {
            this.selectedValues.splice(idx, 1);
            this.allotedValuers[idx]['selected'] = false;
        }
        else {
            this.selectedValues.push(exam_code);
            var idx_1 = this.selectedValues.indexOf(exam_code);
            this.allotedValuers[idx_1]['selected'] = true;
        }
        //console.log(this.selectedValues);
    };
    PaperValuationComponent.prototype.selectAll = function () {
        var _this = this;
        if (this.selectedValues.length === this.allotedValuers.length) {
            this.allotedValuers.map(function (item) {
                item['selected'] = false;
                _this.selectedValues.pop();
            });
        }
        else {
            this.allotedValuers.map(function (item) {
                if (!_this.selectedValues.includes(item.exam_code)) {
                    item['selected'] = true;
                    _this.selectedValues.push(item.exam_code);
                }
            });
        }
    };
    // console.log(this.selectedValues);
    PaperValuationComponent.prototype.openAddWindow = function (val) {
        if (this.selectedValues.length === 0 && val === 'add') {
            this.toasterService.pop('info', "Please Select Atleast one record");
            this.closex();
        }
        $('#entry').val('Add');
        $('.modal_form').toggleClass('modal_form_on');
        $('.overlay').toggleClass('overlay_on');
        if (val === 'val') {
            $('#notification').hide();
            $('#valuer').show();
        }
        if (val === 'add') {
            $('#notification').show();
            $('#valuer').hide();
        }
    };
    PaperValuationComponent.prototype.closex = function () {
        $('.modal_form').toggleClass('modal_form_on');
        $('.overlay').toggleClass('overlay_on');
    };
    PaperValuationComponent.prototype.allotValuer = function () {
        var _this = this;
        this.data1.subject_code = this.subject_code;
        this.paperValuationService.allotPaperValuers(this.data1).subscribe(function (res) {
            if (res.status === true) {
                _this.toasterService.pop('success', res.message);
                _this.getAllValuers();
            }
            else {
                _this.toasterService.pop('error', res.message);
            }
        });
        this.closex();
    };
    PaperValuationComponent.prototype.getValuerName = function () {
        var _this = this;
        // console.log(this.data1.exam_code);
        // get internal Examiners for the subject
        this.http.get('http://localhost:3000/alloted/get_valuer/' + this.data1.exam_code).subscribe(function (data) {
            _this.valuer = data[0].name;
            _this.subject_code = data[0].Subject_Code;
            // console.log(this.valuer);
        });
    };
    PaperValuationComponent.prototype.deleteValuer = function (exam_code) {
        var _this = this;
        this.paperValuationService.deleteValuer(exam_code).subscribe(function (res) {
            if (res.status === false) {
                _this.toasterService.pop('error', res.message);
            }
            else {
                _this.getAllValuers();
                _this.toasterService.pop('success', res.message);
            }
        });
    };
    PaperValuationComponent.prototype.deleteAllAllotedValuers = function () {
        var _this = this;
        if (this.allotedValuers.length === 0) {
            this.toasterService.pop('info', "No Details Found to Delete");
        }
        else {
            this.paperValuationService.deleteAllValuer().subscribe(function (res) {
                if (res.status === true) {
                    _this.toasterService.pop('success', res.message);
                    _this.getAllValuers();
                }
            });
        }
    };
    PaperValuationComponent.prototype.isValid = function (field) {
        return !this.myform.get(field).valid && this.myform.get(field).touched;
    };
    PaperValuationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-paper-valuation',
            template: __webpack_require__("../../../../../src/app/paper-valuation/paper-valuation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/paper-valuation/paper-valuation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_examiner_service__["a" /* ExaminerService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular5_toaster__["ToasterService"]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_6__services_paper_valuation_service__["a" /* PaperValuationService */]])
    ], PaperValuationComponent);
    return PaperValuationComponent;
    var _a;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, field, value) {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        return items.filter(function (singleItem) {
            return singleItem[field].toLowerCase().includes(value.toLowerCase());
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/alloted.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AllotedItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllotedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllotedItem = (function () {
    function AllotedItem(id, subject_code, exam_code, examiner, type, proposal, proposal_sent, recieved_time, status) {
        this.id = id;
        this.subject_code = subject_code;
        this.exam_code = exam_code;
        this.examiner = examiner;
        this.type = type;
        this.proposal = proposal;
        this.proposal_sent = proposal_sent;
        this.recieved_time = recieved_time;
        this.status = status;
    }
    return AllotedItem;
}());

var AllotedService = (function () {
    function AllotedService(http) {
        this.http = http;
        this.alloted = [];
    }
    AllotedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AllotedService);
    return AllotedService;
}());



/***/ }),

/***/ "../../../../../src/app/services/department.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DepartmentItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DepartmentItem = (function () {
    function DepartmentItem(dept_code, dept_name, start, end) {
        this.dept_code = dept_code;
        this.dept_name = dept_name;
        this.start = start;
        this.end = end;
    }
    return DepartmentItem;
}());

var DepartmentService = (function () {
    function DepartmentService(http) {
        this.http = http;
    }
    DepartmentService.prototype.addDepartment = function (dept) {
        return this.http.post('http://localhost:3000/department/add_department', dept)
            .map(function (res) {
            // console.log(res.json());
            return res.json();
        });
    };
    DepartmentService.prototype.getDepartments = function () {
        return this.http
            .get('http://localhost:3000/department/get_departments')
            .map(function (res) {
            return res.json().map(function (item) {
                return new DepartmentItem(item.dept_code, item.dept_name, item.start, item.end);
            });
        });
    };
    DepartmentService.prototype.getDepartment = function (name) {
        return this.http.get('http://localhost:3000/department/get_department/' + name)
            .map(function (res) {
            // console.log(res);
            return res.json();
        });
    };
    DepartmentService.prototype.deleteDepartment = function (code) {
        return this.http.delete('http://localhost:3000/department/delete_department/' + code)
            .map(function (res) {
            return res.json();
        });
    };
    DepartmentService.prototype.deleteAllDepartments = function () {
        return this.http.delete('http://localhost:3000/department/delete_all')
            .map(function (res) {
            return res.json();
        });
    };
    DepartmentService.prototype.updateRange = function (dept) {
        var _this = this;
        return this.http.post('http://localhost:3000/department/update_range', dept)
            .map(function (res) {
            _this.getDepartments();
            res.json();
        });
    };
    DepartmentService.prototype.uploadFile = function (file) {
        var _this = this;
        return this.http.post('http://localhost:3000/department/upload_file', file)
            .map(function (res) {
            _this.getDepartments();
            return res.json();
        });
    };
    DepartmentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DepartmentService);
    return DepartmentService;
}());



/***/ }),

/***/ "../../../../../src/app/services/examiner.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ExaminerItem */
/* unused harmony export EmailItem */
/* unused harmony export SubjecCodetItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExaminerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular5_toaster__ = __webpack_require__("../../../../angular5-toaster/dist/bundles/angular5-toaster.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular5_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular5_toaster__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExaminerItem = (function () {
    function ExaminerItem(id, name, subject_code, exam_code, department, address, type, email, contact) {
        this.id = id;
        this.name = name;
        this.subject_code = subject_code;
        this.exam_code = exam_code;
        this.department = department;
        this.address = address;
        this.type = type;
        this.email = email;
        this.contact = contact;
    }
    return ExaminerItem;
}());

var EmailItem = (function () {
    function EmailItem(email) {
        this.email = email;
    }
    return EmailItem;
}());

var SubjecCodetItem = (function () {
    function SubjecCodetItem(subject_code) {
        this.subject_code = subject_code;
    }
    return SubjecCodetItem;
}());

var ExaminerService = (function () {
    function ExaminerService(http, toasterService) {
        this.http = http;
        this.toasterService = toasterService;
        this.examiners = [];
    }
    ExaminerService.prototype.addExaminer = function (examiner) {
        var _this = this;
        return this.http.post('http://localhost:3000/examiner/add_examiner', examiner)
            .map(function (res) {
            // console.log(res.json());
            _this.getExaminers();
            return res.json();
        });
    };
    ExaminerService.prototype.uploadFile = function (file) {
        var _this = this;
        return this.http.post('http://localhost:3000/examiner/upload_file', file)
            .map(function (res) {
            _this.getExaminers();
            return res.json();
        });
    };
    ExaminerService.prototype.updateExaminer = function (examiner) {
        var _this = this;
        return this.http.post('http://localhost:3000/examiner/update_examiner', examiner)
            .map(function (res) {
            _this.getExaminers();
            res.json();
        });
    };
    ExaminerService.prototype.deleteExaminer = function (id) {
        return this.http.delete('http://localhost:3000/examiner/delete_examiner/' + id)
            .map(function (res) {
            return res.json();
        });
    };
    ExaminerService.prototype.getExamCodes = function () {
        return this.http.get('http://localhost:3000/examiner/get_exam_codes')
            .map(function (res) {
            return res.json();
        });
    };
    ExaminerService.prototype.getAllotedSubjects = function () {
        return this.http.get('http://localhost:3000/examiner/get_subjects')
            .map(function (res) {
            return res.json();
        });
    };
    ExaminerService.prototype.deleteAllExaminers = function () {
        return this.http.delete('http://localhost:3000/examiner/delete_all')
            .map(function (res) {
            return res.json();
        });
    };
    ExaminerService.prototype.getExamCodesBySubjectCode = function (subject_code) {
        return this.http.get('http://localhost:3000/examiner/get_exam_codes_by_subject_codes/' + subject_code)
            .map(function (res) {
            return res.json();
        });
    };
    ExaminerService.prototype.getExaminers = function () {
        var _this = this;
        return this.http
            .get('http://localhost:3000/examiner/get_examiners_list')
            .map(function (res) {
            // Success
            _this.examiners = res.json();
            return res.json().map(function (item) {
                // console.log(item);
                return new ExaminerItem(item.id, item.name, item.Subject_Code, item.exam_code, item.department, item.address, item.type, item.email, item.contact);
            });
        });
    };
    ExaminerService.prototype.getSelectedEmail = function (codes) {
        return this.http
            .get('http://localhost:3000/alloted/get_selected_email', { params: { 'codes': codes } })
            .map(function (res) {
            return res.json().map(function (item) {
                return new EmailItem(item.email
                // item.name
                );
            });
        });
    };
    ExaminerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular5_toaster__["ToasterService"]) === "function" && _a || Object])
    ], ExaminerService);
    return ExaminerService;
    var _a;
}());



/***/ }),

/***/ "../../../../../src/app/services/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = (function () {
    function NotificationService(http) {
        this.http = http;
    }
    NotificationService.prototype.sendMail = function (data) {
        return this.http.post('http://localhost:3000/notify/send_mail', data)
            .map(function (res) {
            return res.json();
        });
    };
    NotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/paper-recieved.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PaperStatus */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperRecievedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaperStatus = (function () {
    function PaperStatus(exam_code, examiner, proposal, status, proposal_sent, received_time) {
        this.exam_code = exam_code;
        this.examiner = examiner;
        this.proposal = proposal;
        this.status = status;
        this.proposal_sent = proposal_sent;
        this.received_time = received_time;
    }
    return PaperStatus;
}());

var PaperRecievedService = (function () {
    function PaperRecievedService(http) {
        this.http = http;
        this.paperStatus = [];
    }
    PaperRecievedService.prototype.addStatus = function (alloted) {
        var _this = this;
        return this.http.post('http://localhost:3000/papers/addStatus', alloted)
            .subscribe(function (res) {
            _this.getStatus();
            return res.json();
        });
    };
    PaperRecievedService.prototype.addAllotedToStatus = function (alloted) {
        var _this = this;
        return this.http.post('http://localhost:3000/papers/addAllotedToStatus', alloted)
            .subscribe(function (res) {
            _this.getStatus();
            return res.json();
        });
    };
    PaperRecievedService.prototype.updateStatus = function (alloted) {
        var _this = this;
        return this.http.post('http://localhost:3000/papers/updateStatus', alloted)
            .map(function (res) {
            _this.getStatus();
            return res.json();
        });
    };
    PaperRecievedService.prototype.getStatus = function () {
        return this.http.get('http://localhost:3000/papers/getStatus')
            .map(function (res) {
            return res.json().map(function (item) {
                return new PaperStatus(item.exam_code, item.examiner, item.proposal, item.status, item.proposal_sent, item.received_time);
            });
        });
    };
    PaperRecievedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], PaperRecievedService);
    return PaperRecievedService;
}());



/***/ }),

/***/ "../../../../../src/app/services/paper-setter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AllotedPaperSetterItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperSetterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllotedPaperSetterItem = (function () {
    function AllotedPaperSetterItem(subject_code, exam_code, examiner) {
        this.subject_code = subject_code;
        this.exam_code = exam_code;
        this.examiner = examiner;
    }
    return AllotedPaperSetterItem;
}());

var PaperSetterService = (function () {
    function PaperSetterService(http) {
        this.http = http;
    }
    PaperSetterService.prototype.getAllotedPaperSetter = function () {
        return this.http.get('http://localhost:3000/paperSetter/get_alloted')
            .map(function (res) {
            return res.json().map(function (item) {
                return new AllotedPaperSetterItem(item.exam_code, item.subject_code, item.examiner);
            });
        });
    };
    PaperSetterService.prototype.allotPaperSetter = function (data) {
        return this.http.post('http://localhost:3000/paperSetter/allot_paper_setter', data)
            .map(function (res) {
            return res.json();
        });
    };
    PaperSetterService.prototype.deleteAlloted = function (exam_code) {
        return this.http.delete('http://localhost:3000/paperSetter/delete_alloted/' + exam_code)
            .map(function (res) {
            return res.json();
        });
    };
    PaperSetterService.prototype.getExaminerByExamCode = function (exam_code) {
        return this.http.get('http://localhost:3000/paperSetter/get_examiner/' + exam_code)
            .map(function (res) {
            return res.json();
        });
    };
    PaperSetterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PaperSetterService);
    return PaperSetterService;
}());



/***/ }),

/***/ "../../../../../src/app/services/paper-valuation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AllotedValuerItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperValuationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllotedValuerItem = (function () {
    function AllotedValuerItem(exam_code, subject_code, valuer, coval1, coval2, coval3, sent, recieved) {
        this.exam_code = exam_code;
        this.subject_code = subject_code;
        this.valuer = valuer;
        this.coval1 = coval1;
        this.coval2 = coval2;
        this.coval3 = coval3;
        this.sent = sent;
        this.recieved = recieved;
    }
    return AllotedValuerItem;
}());

var PaperValuationService = (function () {
    function PaperValuationService(http) {
        this.http = http;
    }
    PaperValuationService.prototype.allotPaperValuers = function (data) {
        var _this = this;
        return this.http.post('http://localhost:3000/valuer/add_valuer', data)
            .map(function (res) {
            _this.getAllotedValuers();
            return res.json();
        });
    };
    PaperValuationService.prototype.getAllotedValuers = function () {
        return this.http.get('http://localhost:3000/valuer/get_all_valuers')
            .map(function (res) {
            return res.json().map(function (item) {
                // console.log(item);
                return new AllotedValuerItem(item.Exam_Code, item.subject_code, item.Valuer_Name, item.Co_valuer_1, item.Co_valuer_2, item.Co_valuer_3, item.Sent_Status, item.Recieved_Status);
            });
        });
    };
    PaperValuationService.prototype.deleteValuer = function (exam_code) {
        var _this = this;
        return this.http.delete('http://localhost:3000/valuer/delete_valuer/' + exam_code)
            .map(function (res) {
            _this.getAllotedValuers();
            return res.json();
        });
    };
    PaperValuationService.prototype.deleteAllValuer = function () {
        var _this = this;
        return this.http.delete('http://localhost:3000/valuer/delete_all')
            .map(function (res) {
            _this.getAllotedValuers();
            return res.json();
        });
    };
    PaperValuationService.prototype.updateAllotedValuer = function (data) {
        return this.http.post("http://localhost:3000/valuer/update_valuer", data)
            .map(function (res) {
            return res.json();
        });
    };
    PaperValuationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PaperValuationService);
    return PaperValuationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/subject.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SubjectItem */
/* unused harmony export CodeItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubjectItem = (function () {
    function SubjectItem(Code, Nomenclature, group_id) {
        this.Code = Code;
        this.Nomenclature = Nomenclature;
        this.group_id = group_id;
    }
    return SubjectItem;
}());

var CodeItem = (function () {
    function CodeItem(Code) {
        this.Code = Code;
    }
    return CodeItem;
}());

var SubjectService = (function () {
    function SubjectService(http) {
        this.http = http;
        this.subjects = [];
    }
    SubjectService.prototype.addSCode = function (subject) {
        var _this = this;
        return this.http.post('http://localhost:3000/subject/add_subject', subject)
            .map(function (res) {
            _this.getSubjects();
            return res.json();
        });
    };
    SubjectService.prototype.deleteSubject = function (code) {
        return this.http.delete('http://localhost:3000/subject/delete_subject/' + code)
            .map(function (res) {
            return res.json();
        });
    };
    SubjectService.prototype.deleteAllSubjects = function () {
        return this.http.delete('http://localhost:3000/subject/delete_all')
            .map(function (res) {
            return res.json();
        });
    };
    SubjectService.prototype.uploadFile = function (file) {
        // console.log(file);
        return this.http.post('http://localhost:3000/subject/upload_file', file)
            .map(function (res) {
            console.log(res);
            return res.json();
        });
    };
    SubjectService.prototype.getSubjects = function () {
        return this.http
            .get('http://localhost:3000/subject/get_subjects')
            .map(function (res) {
            // Success
            return res.json().map(function (item) {
                return new SubjectItem(item.Code, item.Nomenclature, item.group_id);
            });
        });
    };
    SubjectService.prototype.getSubjectGroups = function (ex_code) {
        return this.http.get('http://localhost:3000/subject/get_group/' + ex_code)
            .map(function (res) {
            return res.json().map(function (item) {
                return new CodeItem(item.Code);
            });
        });
    };
    SubjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], SubjectService);
    return SubjectService;
}());



/***/ }),

/***/ "../../../../../src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular5_toaster__ = __webpack_require__("../../../../angular5-toaster/dist/bundles/angular5-toaster.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular5_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular5_toaster__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserItem = (function () {
    function UserItem(id, name, email, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
    return UserItem;
}());

var UserService = (function () {
    function UserService(http, ht, router, toasterService) {
        this.http = http;
        this.ht = ht;
        this.router = router;
        this.toasterService = toasterService;
        this.users = [];
    }
    UserService.prototype.addUser = function (clerk) {
        var _this = this;
        return this.http.post('http://localhost:3000/users/addUser', clerk)
            .map(function (res) {
            _this.toasterService.pop('success', "User Added Successfully");
        });
    };
    UserService.prototype.loginCheck = function () {
        var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        // console.log(currentUser);
        if (currentUser) {
            // this.toasterService.pop('info', 'User Already Logged In, Please LogOut First');
            this.router.navigate(['/dashboard']);
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    UserService.prototype.logout = function () {
        sessionStorage.removeItem('currentUser');
        this.toasterService.pop('info', 'User Logged Out Successfully');
        this.router.navigate(['/login']);
    };
    UserService.prototype.getUser = function (user) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]().set('email', user.uname).set('password', user.pass); // Create new HttpParams
        return this.http.get('http://localhost:3000/users/getUser', { params: params })
            .map(function (res) {
            if (!res[0]) {
                _this.toasterService.pop('error', 'Authentication Error', 'Provide Valid Email and Password');
            }
            else {
                _this.toasterService.pop('success', 'Login Succeful', 'Welcome ' + res[0].name);
                sessionStorage.setItem('currentUser', JSON.stringify(res));
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    UserService.prototype.getAllUsers = function () {
        return this.ht.get('http://localhost:3000/users/getAllUsers')
            .map(function (res) {
            return res.json().map(function (item) {
                return new UserItem(item.id, item.name, item.email, item.role);
            });
        });
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete('http://localhost:3000/users/deleteUser/' + id)
            .map(function (res) {
            return { message: 'Deletion of User was Successful' };
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_angular5_toaster__["ToasterService"]) === "function" && _a || Object])
    ], UserService);
    return UserService;
    var _a;
}());



/***/ }),

/***/ "../../../../../src/app/subjects/subjects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lmargin{\r\n    margin-left: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subjects/subjects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\r\n    <div class=\"modal_form\">\r\n        <div class=\"modal__content\">\r\n          <label for=\"click\" style=\"float:right\">\r\n            <a class=\"close-x quit\" (click)=\"closex()\">X</a>\r\n          </label>\r\n          <h4>Enter Suject Code Details</h4>\r\n          <form (ngSubmit)=\"addSCode()\" [formGroup]=\"myform\" novalidate>\r\n\r\n                  <label for=\"scode\">Subject Code: </label>\r\n                  <input type=\"text\" name=\"scode\" id=\"scode\" class=\"form-control\"  formControlName=\"scode\"  placeholder=\"Subject Code\" [ngClass]=\"displayFieldCss('scode')\" [(ngModel)]=\"subject.Code\">\r\n                  <p class=\"small\" *ngIf=\"isValid('scode')\">Subject Code is Mandatory</p>\r\n\r\n                  <label for=\"sNomen\">Subject Nomenclature: </label>\r\n                  <input type=\"text\" name=\"sNomen\" id=\"sNomen\" class=\"form-control\" formControlName=\"sNomen\" placeholder=\"Subject Nomenclature\" [ngClass]=\"displayFieldCss('sNomen')\" [(ngModel)]=\"subject.Nomenclature\">\r\n                  <p class=\"small\" *ngIf=\"isValid('sNomen')\">Subject Nomenclature is Mandatory</p>\r\n\r\n                  <label for=\"group\">Group Id: </label>\r\n                  <input type=\"number\" name=\"group\" id=\"group\" class=\"form-control\" formControlName=\"group\" placeholder=\"Group Id\" [ngClass]=\"displayFieldCss('group')\" [(ngModel)]=\"subject.group_id\">\r\n                  <p class=\"small\" *ngIf=\"isValid('group')\">Mandatory(If None Insert 0)</p>\r\n                  <br>\r\n                  <input type=\"submit\" class=\"btn btn-block btn btn-outline-success\" [disabled]=\"myform.invalid\" value=\"Add \"/>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    \r\n      <div class=\"overlay\"></div>\r\n\r\n  <h4>Manage Subject Codes</h4>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col-4\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-addon\">\r\n            <i class=\"fas fa-search\"></i>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Type Subject Code...\" [(ngModel)]=\"searchString\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-2 nopadding\">\r\n      <input type=\"checkbox\" id=\"click\" style=\"display:none;\" />\r\n      <label class=\"button-dark\" for=\"click\">\r\n        <a id=\"add\" class=\"btn btn-dark text-white\" (click)=\"openAddWindow()\">Add Subject Code</a>\r\n      </label>\r\n    </div>\r\n    <div class=\"col-6 input-group\">\r\n      <div class=\"uploader\">\r\n          <input type=\"file\" (change)=\"incomingfile($event)\" placeholder=\"Upload file\" accept=\".xlsx\">\r\n      </div>\r\n      <div style=\"z-index: 1;\">\r\n        <button type=\"button\" class=\"btn btn-sm btn-outline-success\" (click)=\"Upload()\">Upload</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n   <div> <!-- *ngIf='subjects.length>0'> -->\r\n    <table class=\"table table-striped table-bordered table-sm\" id=\"data-table\">\r\n      <thead class=\"table-dark\">\r\n        <tr>\r\n          <th>#</th>\r\n          <th>Subject Code:</th>\r\n          <th>Nomenclature:</th>\r\n          <th>Group ID:</th>\r\n          <th>Action</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let subject of subjects | filter : 'Code' : searchString | paginate: { itemsPerPage: 10, currentPage: p}; let idx = index\">\r\n          <th scope=\"row\">{{idx+1}}</th>\r\n          <td>{{subject.Code}}</td>\r\n          <td>{{subject.Nomenclature}}</td>\r\n          <td>{{subject.group_id}}</td>\r\n          <td> <a (click)=\"deleteSubject(subject.Code)\">\r\n            <i class=\"fas fa-times\"></i>\r\n          </a>\r\n        </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n    <div class=\"export-wrapper\">\r\n        <input type=\"button\" class=\"btn btn-block btn-sm btn-outline-danger\" (click)=\"deleteAllSubjects()\" value=\"Delete All\">\r\n    </div>\r\n    <div class=\"export-wrapper\">\r\n      <input type=\"button\" class=\"btn btn-block btn-sm btn-outline-success\" (click)=\"doit('xlsx')\" value=\"Export\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/subjects/subjects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_subject_service__ = __webpack_require__("../../../../../src/app/services/subject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xlsx__ = __webpack_require__("../../../../xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular5_toaster__ = __webpack_require__("../../../../angular5-toaster/dist/bundles/angular5-toaster.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular5_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular5_toaster__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var SubjectsComponent = (function () {
    //
    function SubjectsComponent(subjectService, toasterService) {
        this.subjectService = subjectService;
        this.toasterService = toasterService;
        this.subject = {
            Code: '',
            Nomenclature: '',
            group_id: ''
        };
    }
    SubjectsComponent.prototype.incomingfile = function (event) {
        this.file = event.target.files[0];
    };
    SubjectsComponent.prototype.ngOnInit = function () {
        this.getSubjects();
        this.myform = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormGroup"]({
            scode: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required
            ]),
            sNomen: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]),
            group: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]),
        });
    };
    SubjectsComponent.prototype.addSCode = function () {
        var _this = this;
        this.subjectService.addSCode(this.subject).subscribe(function (res) {
            if (res.status === false) {
                _this.toasterService.pop('error', res.message);
            }
            else {
                _this.getSubjects();
                _this.toasterService.pop('success', res.message);
            }
        });
        this.closex();
    };
    SubjectsComponent.prototype.getSubjects = function () {
        var _this = this;
        this.subjectService.getSubjects().subscribe(function (res) { return _this.subjects = res; });
    };
    SubjectsComponent.prototype.deleteSubject = function (code) {
        var _this = this;
        this.subjectService.deleteSubject(code).subscribe(function (res) { return _this.getSubjects(); });
    };
    SubjectsComponent.prototype.Upload = function () {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            _this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(_this.arrayBuffer);
            var arr = new Array();
            for (var i = 0; i !== data.length; ++i) {
                arr[i] = String.fromCharCode(data[i]);
            }
            var bstr = arr.join('');
            var workbook = __WEBPACK_IMPORTED_MODULE_3_xlsx__["read"](bstr, { type: 'binary' });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            var myFile = __WEBPACK_IMPORTED_MODULE_3_xlsx__["utils"].sheet_to_json(worksheet, { raw: true });
            _this.subjectService.uploadFile(myFile).subscribe(function (res) {
                if (res.status === false) {
                    _this.toasterService.pop('error', 'Error While Uploading: ', res.message);
                }
                else if (res.status === true) {
                    _this.getSubjects();
                    _this.toasterService.pop('success', res.message);
                }
            });
        };
        fileReader.readAsArrayBuffer(this.file);
    };
    SubjectsComponent.prototype.doit = function (type, fn, dl) {
        // console.log(this.subjects);
        if (this.subjects.length === 0) {
            this.toasterService.pop('info', 'No Details Found to Export');
        }
        else {
            var json = this.subjects;
            // console.log(json);
            var ws = __WEBPACK_IMPORTED_MODULE_3_xlsx__["utils"].json_to_sheet(json);
            var wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
            __WEBPACK_IMPORTED_MODULE_3_xlsx__["write"](wb, { bookType: type, bookSST: true, type: 'base64' });
            __WEBPACK_IMPORTED_MODULE_3_xlsx__["writeFile"](wb, fn || ('Subjects.' + (type || 'xlsx')));
            this.toasterService.pop('success', 'Data Exported Successfully');
        }
    };
    // Modal Window functions
    SubjectsComponent.prototype.openAddWindow = function () {
        this.subject.Code = '';
        this.subject.Nomenclature = '';
        this.subject.group_id = '';
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#entry').val('Add');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.modal_form').toggleClass('modal_form_on');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.overlay').toggleClass('overlay_on');
    };
    SubjectsComponent.prototype.closex = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.modal_form').toggleClass('modal_form_on');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.overlay').toggleClass('overlay_on');
    };
    SubjectsComponent.prototype.openEditWindow = function (subject) {
        this.subject.Code = subject.code,
            this.subject.Nomenclature = subject.Nomenclature;
        this.subject.group_id = subject.group_id,
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#entry').val('Update');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.modal_form').toggleClass('modal_form_on');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.overlay').toggleClass('overlay_on');
    };
    SubjectsComponent.prototype.isValid = function (field) {
        return !this.myform.get(field).valid && this.myform.get(field).touched;
    };
    SubjectsComponent.prototype.displayFieldCss = function (field) {
        if (this.isValid(field)) {
            return 'has-error';
        }
        if (!this.isValid(field)) {
            return 'has-success';
        }
        else {
            return '';
        }
    };
    SubjectsComponent.prototype.deleteAllSubjects = function () {
        var _this = this;
        // console.log(this.subjects);
        if (this.subjects.length === 0) {
            this.toasterService.pop('info', 'No Details Found to Delete');
        }
        else {
            this.subjectService.deleteAllSubjects().subscribe(function (res) {
                if (res.status === false) {
                    _this.toasterService.pop('error', res.message);
                }
                if (res.status === true) {
                    _this.toasterService.pop('success', res.message);
                    _this.getSubjects();
                }
            });
        }
    };
    SubjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subjects',
            template: __webpack_require__("../../../../../src/app/subjects/subjects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/subjects/subjects.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_subject_service__["a" /* SubjectService */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular5_toaster__["ToasterService"]) === "function" && _a || Object])
    ], SubjectsComponent);
    return SubjectsComponent;
    var _a;
}());



/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\r\n  <h4>Registered Users</h4>\r\n  <hr>\r\n  <!-- <div *ngIf='allotedService.alloted.length>0'> -->\r\n  <div>\r\n    <!--  temp -->\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-addon\">\r\n              <i class=\"fas fa-search\"></i>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Type User's Name to search...\" [(ngModel)]=\"searchString\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n\r\n \r\n  <table class=\"table table-striped table-bordered table-sm\" id=\"example\">\r\n    <thead class=\"table-dark\">\r\n      <tr>\r\n        <th>#</th>\r\n        <th>Employee Id</th>\r\n        <th>User Name</th>\r\n        <th>Email</th>\r\n        <th>Role</th>\r\n        <th>Action</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let user of users | filter : 'name' : searchString | paginate: { itemsPerPage: 10, currentPage: p}; let idx = index\">\r\n        <th scope=\"row\">{{idx+1}}</th>\r\n        <td>{{user.id}}</td>\r\n        <td>{{user.name | uppercase }}</td>\r\n        <td>{{user.email}}</td>\r\n        <td>{{user.role | uppercase }}</td>\r\n        <td>\r\n          <a (click)=\"deleteExaminer(user.id)\">\r\n            <i class=\"fas fa-times\"></i>\r\n          </a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = (function () {
    function UsersComponent(userService) {
        this.userService = userService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.deleteExaminer = function (id) {
        var _this = this;
        this.userService.deleteUser(id).subscribe(function (res) {
            console.log(res);
            _this.getUsers();
        });
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAllUsers().subscribe(function (res) { return _this.users = res; });
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UserService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map