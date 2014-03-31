var sendToImgur, imgurURL, fbShare, twShare;
sendToImgur = function() {
  $('#imgurthing').hide();
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
      $('#imgurthing').show();
      id = result.data.id;
      imgurtext.style.display = 'block';
      imgurURL = "https://imgur.com/" + id + '.jpg';
      imgurtext.href = imgurURL;
      imgurtext.innerHTML = imgurURL;
      $('.sharing').show();
      fbShare = 'http://www.facebook.com/sharer.php?s=100&p[title]='+encodeURIComponent('DogeFace') +
        '&p[summary]=' + encodeURIComponent('Such Shibe So Pride Very Doge') + '&p[url]=' +
          encodeURIComponent('http://dvidsilva.github.io/dogeface/launcher.html') + '&p[images][0]=' +
        encodeURIComponent(imgurURL);
      twShare = 'http://twitter.com/share?text=My face with doge, '+imgurURL +' get yours!'
      +'&url=http://dvidsilva.github.io/dogeface/launcher.html&hashtags=dogeface';
      $('.fbshare').attr('href', fbShare);
      $('.twshare').attr('href', twShare);
    }
  });
};

