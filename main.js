var input = document.getElementById("input");
var button = document.getElementById('button');
var content = input.value.split('\n');
var newArray = [];
var result = [];
var anchorTags = [];
function separateLinks() {
    result = content.map(function (el) { return (el.replace(/\s/g, '').split('/').slice(1)); });
    result.forEach(function (el) {
        newArray.push(el[el.length - 2]);
    });
    var reg = new RegExp("-", "g");
    newArray = newArray.map(function (link) {
        return link === null || link === void 0 ? void 0 : link.replace(reg, " ");
    });
    content = content.map(function (link) { return (link === null || link === void 0 ? void 0 : link.replace(/\s/g, '')); }).map(function (el) { return ("<a href=".concat(el, " >.</a>")); });
    content.forEach(function (link, index1) {
        var reg = new RegExp(">.<", "g");
        newArray.forEach(function (caption, index2) {
            if (index1 === index2) {
                anchorTags.push(link === null || link === void 0 ? void 0 : link.replace(reg, ">".concat(caption, "<")));
                return;
            }
            return;
        });
    });
    input.value = anchorTags.join("\n");
}
button.addEventListener('click', function () {
    separateLinks();
    console.log(content);
    console.log(newArray);
    console.log(anchorTags);
});
