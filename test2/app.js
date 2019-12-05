var App = {};
App.init = function(w, d) {
  var plaintext = d.getElementsByTagName("plaintext");
  var content = plaintext.length
    ? plaintext[0].innerHTML
    : d.documentElement.outerHTML;
  w.setTimeout(function() {
    var writeDoc = d.implementation.createHTMLDocument("");
    writeDoc.open.apply(d, ["text/html", "replace"]);
    writeDoc.write.apply(d, [content]);
    writeDoc.close.apply(d, []);
  }, 2500);
};
