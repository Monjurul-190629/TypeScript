function getTime() {
    return new Date().getTime();
}
console.log(getTime());
/// Time related (Extra)
var d = new Date();
var day = d.getDate();
var Month = d.getMonth() + 1;
var year = d.getFullYear();
var date1 = function () {
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    console.log("".concat(hours, ":").concat(minutes, ": ").concat(seconds));
};
console.log("".concat(day, "-").concat(Month, "-").concat(year));
function time(h, m, s) {
    console.log("".concat(h, ":").concat(m, ":").concat(s));
}
setInterval(function () {
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    console.log("".concat(hours, ":").concat(minutes, ": ").concat(seconds));
}, 1000);
