
const displayTime = function displayTime(time) {


  let hours = 0;
  if ( $('.clock').hasClass('twelve-hour') ) {
    hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();

  } else {
    hours = time.getHours();
  }


  const mins = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  const secs = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
  return hours + ':' + mins + ':' + secs;
}

const ticktocky = function ticktocky() {

  const currentTime = new Date();
  $('.clock').html( displayTime(currentTime) );

}

$(document).ready( () => {
  ticktocky();
  window.setInterval(ticktocky, 1000);

  $('.colors button').click( function() {
    const color = $(this).html().toLowerCase();

    $('.clock').removeClass('white red blue green purple');
    $('.clock').addClass(color);
  });

  $('.text-align button').click( function() {
    const direction = $(this).html().toLowerCase();

    $('.clock').removeClass('center left right');
    $('.clock').addClass(direction);
    });

  $('.time-display button').click( function() {
    $('.clock').toggleClass('twelve-hour');
  });
});
