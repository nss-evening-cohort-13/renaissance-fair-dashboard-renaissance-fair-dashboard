const filterDropdown = () => {
  $('#dropdownContainer').html(`
        <div class="dropdown" id="filter-dropdown">
            <h2>Filter Event Details</h2>
            <div id="success-message"></div>
            <div>
                <div id="error-message"></div>
                <div class="form-group row">
                    <label for="board">Category</label>
                    <select class="form-control" id="category">
                        <option value="">Select a Category</option>
                        <option value="food">Food</option>
                        <option value="show">Show</option>
                        <option value="souvenir">Souvenir</option>
                        <option value="staff">Staff</option>
                    </select>
                </div>
                <button id="filter-btn" type="button" class="btn btn-warning dropdown-btn">Filter</button>
            </div>
        </div>`);
  // const domSrting = `
  //       <div class="dropdown" id="filter-dropdown">
  //           <h2>Filter Event Details</h2>
  //           <div id="success-message"></div>
  //           <div>
  //               <div id="error-message"></div>
  //               <div class="form-group row">
  //                   <label for="board">Category</label>
  //                   <select class="form-control" id="category">
  //                       <option value="">Select a Category</option>
  //                       <option value="food">Food</option>
  //                       <option value="show">Show</option>
  //                       <option value="souvenir">Souvenir</option>
  //                       <option value="staff">Staff</option>
  //                   </select>
  //               </div>
  //               <button id="filter-btn" type="button" class="btn dropdown-btn">Filter</button>
  //           </div>
  //       </div>`;
  // return domSrting;
};

export default { filterDropdown };
