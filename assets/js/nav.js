var show_conference = function(){
  var a = document.getElementById("conference");
  var b = document.getElementById("journal");
  var c = document.getElementById("copyright");
  var d = document.getElementById("patent");
  a.style.display="";
  b.style.display="none";
  c.style.display="none";
  d.style.display="none";
  $("#pubnav li").removeClass("active");
  $("#pubnav li:nth-child(1)").addClass("active");
};

var show_journal = function(){
  var a = document.getElementById("conference");
  var b = document.getElementById("journal");
  var c = document.getElementById("copyright");
  var d = document.getElementById("patent");
  a.style.display="none";
  b.style.display="";
  c.style.display="none";
  d.style.display="none";
  $("#pubnav li").removeClass("active");
  $("#pubnav li:nth-child(2)").addClass("active");

};

var show_patent = function(){
  var a = document.getElementById("conference");
  var b = document.getElementById("journal");
  var c = document.getElementById("copyright");
  var d = document.getElementById("patent");
  a.style.display="none";
  b.style.display="none";
  c.style.display="none";
  d.style.display="";
  $("#pubnav li").removeClass("active");
  $("#pubnav li:nth-child(3)").addClass("active");
};

var show_copyright = function(){
  var a = document.getElementById("conference");
  var b = document.getElementById("journal");
  var c = document.getElementById("copyright");
  var d = document.getElementById("patent");
  a.style.display="none";
  b.style.display="none";
  c.style.display="";
  d.style.display="none";
  $("#pubnav li").removeClass("active");
  $("#pubnav li:nth-child(4)").addClass("active");
};