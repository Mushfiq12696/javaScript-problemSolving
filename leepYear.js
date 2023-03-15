function isLeepYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;

    } else {
        return false;
    }
}
const checkYear = isLeepYear(1900);
console.log(checkYear);