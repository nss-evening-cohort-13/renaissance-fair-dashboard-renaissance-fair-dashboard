// import eventData from '../../helpers/data/eventData';
import eventFood from '../../helpers/data/event_food';
// import eventShows from '../../helpers/data/event_shows';
// import eventSouvenirs from '../../helpers/data/event_souvenirs';
import eventStaff from '../../helpers/data/event_staff';
// import showData from '../../helpers/data/showsData';
import foodData from '../../helpers/data/foodData';
// import souvenirsData from '../../helpers/data/souvenirsData';
import staffData from '../../helpers/data/staffData';

const foodModal = (eventFirebaseKey) => {
  $('#event-details-view')
    .append(`<div class="modal" id="addFoodModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <div class="form-group eventSelector">
        <label for="foodSelectionModal">Select Food</label>
        <select multiple class="form-control" id="foodSelectionModal">
        </select>
      </div>
        </div>
        <div class="modal-footer">
          <button id="submitFood" type="button" class="btn btn-primary">Save changes</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`);
  foodData.getAllFood().then((response) => {
    $('#foodSelectionModal').html('');
    response.forEach((food) => {
      $('#foodSelectionModal').append(
        `<option value="${food.firebaseKey}">${food.name}</option>`
      );
    });
  });
  $('#submitFood').on('click', (e) => {
    e.preventDefault();
    const eventFoodArray = $('#foodSelectionModal').val();
    eventFoodArray.forEach((item) => {
      const foodObject = {
        foodUid: item,
        eventUid: eventFirebaseKey,
      };
      eventFood.addFoodOfEvents(foodObject);
    });
    setTimeout(() => {
      $('#addFoodModal').modal('hide');
      eventFood.getEventFood(eventFirebaseKey).then((foodArray) => {
        foodArray.forEach((food) => {
          foodData.getSingleFoodItem(food.foodUid).then((foodObject) => {
            $('#foodLineItems').append(
              `<div class="line-item" id="${food.firebaseKey}">
                    <div>${foodObject.name}<button id="${food.firebaseKey}" class="btn btn-outline delete-event-food icon-btn"><i id="food-icon" class="fas fa-times"></i></button></div>
                    <div>${foodObject.price}</div>
                  </div>`
            );
          });
        });
      });
    }, 2000);
  });
};

const staffModal = (eventFirebaseKey) => {
  $('#event-details-view')
    .append(`<div class="modal" id="addStaffModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Staff to this Event</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <div class="form-group eventSelector">
          <label for="staffSelectionModal">Select Staff</label>
          <select multiple class="form-control" id="staffSelectionModal">
          </select>
        </div>
          </div>
          <div class="modal-footer">
            <button id="submitStaff" type="button" class="btn btn-primary">Save changes</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`);
  staffData.getAllStaff().then((response) => {
    $('#staffSelectionModal').html('');
    response.forEach((staff) => {
      $('#staffSelectionModal').append(
        `<option value="${staff.firebaseKey}">${staff.name}</option>`
      );
    });
  });
  $('#submitStaff').on('click', (e) => {
    e.preventDefault();
    const eventStaffArray = $('#staffSelectionModal').val();
    eventStaffArray.forEach((item) => {
      const staffObject = {
        staffUid: item,
        eventUid: eventFirebaseKey,
      };
      eventStaff.addStaffOfEvents(staffObject);
    });
    setTimeout(() => {
      $('#addStaffModal').modal('hide');
      eventStaff.getEventStaff(eventFirebaseKey).then((staffArray) => {
        staffArray.forEach((staff) => {
          staffData.getSingleStaff(staff.staffUid).then((staffObject) => {
            $('#staffLineItems').append(`
              <div class="line-item" id="${staff.firebaseKey}">
                <div>${staffObject.name}<button id="${staff.firebaseKey}" class="btn btn-outline delete-event-staff icon-btn"><i id="staff-icon" class="fas fa-times"></i></button></div>
                <div>${staffObject.price}</div>
              </div>`);
          });
        });
      });
    }, 2000);
  });
};

export default {
  foodModal,
  staffModal,
};
