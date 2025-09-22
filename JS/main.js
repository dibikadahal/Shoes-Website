
function submitReview() {
      var form = document.getElementById('review-form');
      var usernameInput = document.getElementById('username');
      var reviewTextarea = document.getElementById('user-review');
      var reviewListDiv = document.getElementById('existing-reviews');
      var reviewCountSpan = document.getElementById('review-count');
    
        var username = usernameInput.value.trim();
        var reviewText = reviewTextarea.value.trim();
    
        if (username !== '' && reviewText !== '') {
          var newReview = document.createElement('p');
          var strongName = document.createElement('strong');
          strongName.textContent = username + '.';
          newReview.appendChild(strongName);
          newReview.appendChild(document.createElement('br'));
          newReview.appendChild(document.createTextNode(reviewText));
    
          reviewListDiv.appendChild(newReview);
    
          var currentCount = parseInt(reviewCountSpan.textContent.match(/\d+/)[0]);
          reviewCountSpan.textContent = (currentCount + 1) ;
    
          usernameInput.value = '';
          reviewTextarea.value = '';
        }

        alert("Thanks for the review, " + "!");
        this.reset(); // Clear the form after success
        };