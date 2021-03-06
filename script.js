//accept form input
//TODO: clear input field after enter button click
//create bookmarks box with form input
//add and remove classes to html elements
//mark as .read event
//remove .read event
//delete event


// Time no longer exists wish-list
// * 'Are you sure you want to delete this' message when pressing delete button

var state = {
  activeBookmarksTotal: 0,
  activeBookmarksUnread: 0,
  activeBookmarksRead: 0,
  totalBookmarksCreated: 0,
}

$('.enter-button').on('click', function(e) {
  e.preventDefault();
  removeErrorMessage();
  var bookmarkTitleInput = $('.bookmark-title-input').val();
  var bookmarkUrlInput = $('.bookmark-url-input').val();

  bookmarkTitleInput === '' ? displayErrorMessage('Title cannot be blank!') : null;
  bookmarkUrlInput === '' ? displayErrorMessage('URL cannot be blank!') : null;

  $('.error-message').length > 0 ? null : createBookmarkBox(bookmarkTitleInput, bookmarkUrlInput);

  // if input box === empty disable

  // if something there && valid activate

  // form clear
  resetForm();
  $('.bookmark-title-input').focus();
});

$('.right-side').on('click', '.read-link', function(e) {
  e.preventDefault();
  $(this).closest('article').toggleClass('read-box');
  $(this).closest('article').find('.bookmark-url-link').toggleClass('read-url');
  $(this).toggleClass('read-read');
  $(this).closest('div').find('.delete-link').toggleClass('read-delete');
});

$('.right-side').on('click', '.delete-link', function() {
  $(this).parents().eq(2).remove();
});

function createBookmarkBox(title, url) {
  $('.right-side').prepend(`<article class="bookmark-box">
  <h2 class="bookmark-title">${title}</h2>
  <p class="bookmark-url"><a class="bookmark-url-link" href="${url}">${url}</a></p>
  <div class="bookmark-bottom-line">
    <p class="read-button"><span class="read-link">Read</span></p>
    <p class="delete-button"><span class="delete-link">Delete</span></p>
  </div>
  </article>`);
}

function resetForm() {
  $('input[type="text"]').val('');
}

function displayErrorMessage(cause) {
  console.log('giedkkd');
  $('.left-side').append(`<p class="error-message">Error: <span class="error-cause">${cause}</span></p>`);
};

function removeErrorMessage() {
  $('.error-message').remove();
};

// function isEmpty(input) {
//   input === '' ?  : false;
// }
