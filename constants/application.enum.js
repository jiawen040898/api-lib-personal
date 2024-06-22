"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PulsifiDomains = exports.PulsifiRole = exports.ConsoleCompanyId = exports.DedicatedUserAccountId = exports.HttpHeader = exports.WebApp = void 0;
var WebApp;
(function (WebApp) {
    WebApp["CANDIDATE"] = "candidate";
    WebApp["CONSOLE"] = "console";
    WebApp["EMPLOYEE"] = "employee";
    WebApp["INTEGRATION"] = "integration";
    WebApp["RESELLER"] = "reseller";
    WebApp["TALENT"] = "talent";
})(WebApp || (exports.WebApp = WebApp = {}));
var HttpHeader;
(function (HttpHeader) {
    HttpHeader["REQUEST_ID"] = "x-request-id";
})(HttpHeader || (exports.HttpHeader = HttpHeader = {}));
var DedicatedUserAccountId;
(function (DedicatedUserAccountId) {
    DedicatedUserAccountId[DedicatedUserAccountId["SYSTEM"] = 1] = "SYSTEM";
})(DedicatedUserAccountId || (exports.DedicatedUserAccountId = DedicatedUserAccountId = {}));
var ConsoleCompanyId;
(function (ConsoleCompanyId) {
    ConsoleCompanyId[ConsoleCompanyId["PULSIFI"] = 1] = "PULSIFI";
})(ConsoleCompanyId || (exports.ConsoleCompanyId = ConsoleCompanyId = {}));
var PulsifiRole;
(function (PulsifiRole) {
    PulsifiRole["SUPPORT"] = "pulsifi_support";
})(PulsifiRole || (exports.PulsifiRole = PulsifiRole = {}));
exports.PulsifiDomains = ['pulsifi.me'];
//# sourceMappingURL=application.enum.js.map