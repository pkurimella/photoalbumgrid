function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function getRandomSubject() {
  var items = ['cars', 'buildings', 'paris', 'detroit', 'phones', 'india'];
  return items[Math.floor(Math.random() * items.length)];
}
function getRandomStatus() {
  var items = ['fa-check-circle', 'fa-upload', 'fa-exclamation-circle'];
  return items[Math.floor(Math.random() * items.length)];
}
var allImages = "";

for (var i = 0; i < 25; i++) {
  var width = getRandomSize(400, 1200);
  var height =getRandomSize(200, 600);
  var subject = getRandomSubject();
  allImages += '<div class="imgContainer"><a href="#"><i class="fa fa-times-circle-o fa-pull-right"></i></a>';
  allImages += '<img class="imgItem" src="http://www.loremflickr.com/' + width + '/' + height + '/' + subject + '">';
  allImages += '<a href="#"><i class="fa '+getRandomStatus()+' fa-pull-right"></i></a></div>';
}

$('#photos').append(allImages);