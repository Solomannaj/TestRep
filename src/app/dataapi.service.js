"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@Injectable({
//  providedIn: 'root'
//})
var DataapiService = /** @class */ (function () {
    function DataapiService(httpClient) {
        this.httpClient = httpClient;
    }
    DataapiService.prototype.getEmployees = function () {
        return this.httpClient.get("http://localhost:56859/api/Employee/GetEmployees");
    };
    DataapiService.prototype.saveEmployee = function (employee, callback) {
        console.log(employee);
        return this.httpClient.post("http://localhost:56859/api/Employee/SaveEmployee", employee).subscribe(function (data) {
            callback();
        });
    };
    return DataapiService;
}());
exports.DataapiService = DataapiService;
//# sourceMappingURL=dataapi.service.js.map
