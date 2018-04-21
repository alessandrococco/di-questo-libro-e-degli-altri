document.addEventListener('DOMContentLoaded', function () {
  fixGoodreadsWidget();
  displayComments();

  function fixGoodreadsWidget() {
    fixEmptyWidgetFor('alessandro');
    fixEmptyWidgetFor('elisa');
  }

  function fixEmptyWidgetFor(name) {
    var arr = document.getElementsByClassName('gr_custom_each_container_' + name);
    if (arr.length == 0) {
      var element = document.getElementById('gr_custom_widget_' + name);
      element.innerHTML += '<span class="heading is-size-7">Sto scegliendo il prossimo libro 🙂</span>';
    }
  }

  function displayComments() {
    var arr = document.getElementsByClassName('form-comments');
    if (arr.length > 0) {
      arr[0].classList.toggle('is-block');
    }
  }
}, false);

window.onkeydown = function (e) {
  if (e.keyCode == 27) { // ESC
    var arr = document.querySelectorAll(".modal.is-active");
    if (arr.length > 0) {
      arr[0].classList.toggle('is-active');
    }
  }
};

function toggleModal(modalId) {
  document.getElementById(modalId).classList.toggle("is-active");
  setTimeout(function () {
    var arr = document.getElementsByClassName('input');
    if (arr.length > 0) {
      arr[0].focus();
    }
  }, 1);
}

// Function name is linked to navbar.yml/dropdown
function toggleDropdown(dropdownId, hasIcon) {
  var dropdown = this.document.getElementById(dropdownId);
  dropdown.getElementsByClassName('dropdown-content')[0].classList.toggle('is-block');

  if (hasIcon == 'true') {
    var icon = dropdown.getElementsByClassName('icon')[0];
    icon.classList.toggle('ion-ios-arrow-up');
    icon.classList.toggle('ion-ios-arrow-down');
  }
}