var sendToImgur;
var imgurtext = document.getElementById('imgurl');
sendToImgur = function() {
  var authorization;
  authorization = "Client-ID " + '61569d8b93f7e2b';
  $.ajax({
    url: "https://api.imgur.com/3/image",
    method: "POST",
    headers: {
      Authorization: authorization,
      Accept: "application/json"
    },
    data: {
      image: localStorage.dataBase64.replace(/.*,/,''),
      type: "base64"
    },
    success: function(result) {
      var id;
      id = result.data.id;
      imgurtext.style.display = 'block';
      imgurtext.innerHTML = "https://imgur.com/gallery/" + id;
    }
  });
};

