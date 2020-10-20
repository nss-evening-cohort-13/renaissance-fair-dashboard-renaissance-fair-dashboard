const eventsView = () => {
  $('#add-button').html(
    `<div id="add-event">
       <a href='#'
       class="add-event btn btn-primary btn-lg"><i class="fas fa-plus-circle"></i> Add Event</a>
    </div>`
  );
  $('#app').html('<h2>Hello Events View Linked</h2>');
};

export default { eventsView };
