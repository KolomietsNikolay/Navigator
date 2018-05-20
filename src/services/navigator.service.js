"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var NavigatorService = /** @class */ (function () {
    function NavigatorService(http) {
        this.http = http;
        this.DOMAIN = 'http://10.0.2.2:60832';
    }
    NavigatorService.prototype.Registration = function (name, phone) {
        return this.http.post(this.DOMAIN + '/registry', { name: name, phone: phone }, { headers: this.createRequestHeader() });
    };
    NavigatorService.prototype.GetGroups = function () {
        return this.http.get(this.DOMAIN + '/api/Group', { headers: this.createRequestHeader() });
    };
    NavigatorService.prototype.GetCurrentLeasson = function (groupId) {
        return this.http.get(this.DOMAIN + '/leasson/' + groupId);
    };
    NavigatorService.prototype.createRequestHeader = function () {
        // set headers here e.g.
        var headers = new http_1.HttpHeaders({
            "Content-Type": "application/json",
        });
        return headers;
    };
    NavigatorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], NavigatorService);
    return NavigatorService;
}());
exports.NavigatorService = NavigatorService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXZpZ2F0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw2Q0FBNkU7QUFNN0U7SUFHRSwwQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUY1QixXQUFNLEdBQUcsdUJBQXVCLENBQUE7SUFFQSxDQUFDO0lBRWxDLHVDQUFZLEdBQW5CLFVBQW9CLElBQVksRUFBRSxLQUFhO1FBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBUyxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQ25ILENBQUM7SUFFTSxvQ0FBUyxHQUFoQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVSxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVNLDRDQUFpQixHQUF4QixVQUF5QixPQUFlO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRU8sOENBQW1CLEdBQTNCO1FBQ0Usd0JBQXdCO1FBQ3hCLElBQUksT0FBTyxHQUFHLElBQUksa0JBQVcsQ0FBQztZQUMxQixjQUFjLEVBQUUsa0JBQWtCO1NBQ3BDLENBQUMsQ0FBQztRQUVKLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQXhCWSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTt5Q0FJZSxpQkFBVTtPQUh6QixnQkFBZ0IsQ0F5QjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uL21vZGVscy9ncm91cCc7XHJcbmltcG9ydCB7IExlYXNzb25zIH0gZnJvbSAnLi4vbW9kZWxzL2xlYXNzb24nO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRvclNlcnZpY2Uge1xyXG4gIHByaXZhdGUgRE9NQUlOID0gJ2h0dHA6Ly8xMC4wLjIuMjo2MDgzMidcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgcHVibGljIFJlZ2lzdHJhdGlvbihuYW1lOiBzdHJpbmcsIHBob25lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PHN0cmluZz4odGhpcy5ET01BSU4gKyAnL3JlZ2lzdHJ5JywgeyBuYW1lLCBwaG9uZSB9LCB7aGVhZGVyczogdGhpcy5jcmVhdGVSZXF1ZXN0SGVhZGVyKCl9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBHZXRHcm91cHMoKTogT2JzZXJ2YWJsZTxHcm91cFtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxHcm91cFtdPih0aGlzLkRPTUFJTiArICcvYXBpL0dyb3VwJywge2hlYWRlcnM6IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcigpfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgR2V0Q3VycmVudExlYXNzb24oZ3JvdXBJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxMZWFzc29ucz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8TGVhc3NvbnM+KHRoaXMuRE9NQUlOICsgJy9sZWFzc29uLycgKyBncm91cElkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUmVxdWVzdEhlYWRlcigpIHtcclxuICAgIC8vIHNldCBoZWFkZXJzIGhlcmUgZS5nLlxyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBoZWFkZXJzO1xyXG59XHJcbn0iXX0=