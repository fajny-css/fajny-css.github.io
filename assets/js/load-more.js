//Load more
// cache vars

var parent = document.getElementById("list-icons"),
     items = parent.querySelectorAll('li'),
     loadMoreBtn = document.querySelector('#load-more-comments'),
     maxItems = 12,
     hiddenClass = "visually-hidden";


[].forEach.call(items, function (item, idx) {
     if (idx > maxItems - 1) {
          item.classList.add(hiddenClass);
     }
});

loadMoreBtn.addEventListener('click', function () {
     [].forEach.call(document.querySelectorAll('.' + hiddenClass), function (item, idx) {
          console.log(item);
          if (idx < maxItems - 1) {
               item.classList.remove(hiddenClass);
          }

          if (document.querySelectorAll('.' + hiddenClass).length === 0) {
               loadMoreBtn.style.display = 'none';
          }
     });
});