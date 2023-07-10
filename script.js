var i = 0;
var showPop = (id) => {
  $(".popupBox").addClass("d-none");
  $(`#popupBox_${id}`).removeClass("d-none");
};

$("html").click(function (e) {
  if (!$(e.target).hasClass("popupBtn")) {
    $(".popupBox").addClass("d-none");
  }
});
var markDone = (id) => {
  $(`#done_${id}`).removeClass("d-none");
};
var deleteTask = (id) => {
  $(`#li_${id}`).remove();
};
var addTask = () => {
  let dob = $("#dob").val();
  let fullName = $("#fullName").val().trim();
  let nickName = $("#nickName").val().trim();

  if (dob == "" || dob == null || dob == undefined) {
    alert("Please enter DOB to proceed");
    return;
  } else if (fullName == "" || fullName == null || fullName == undefined) {
    alert("Please enter Full Name to proceed");
    return;
  } else if (nickName == "" || nickName == null || nickName == undefined) {
    alert("Please enter Nick Name to proceed");
    return;
  } else {
    i++;
    tempObj = {};
    tempObj["dob"] = dob;
    tempObj["fullName"] = fullName;
    tempObj["nickName"] = nickName;

    html = `<li class="mb-3" id="li_${i}">
              <div class="row">
                <div class="col-8">
                  <h5>${fullName}</h5>
                  <p class="mb-2"><span class="date">${dob}</span> | <span class="nickName">${nickName}</span></p>
                </div>
                <div class="col-1 px-0 text-center my-auto">
                  <i class="fa fa-check p-2 rounded-pill text-light bg-primaryThemeColor d-none" id="done_${i}"></i>
                </div>
                <div class="col-3 my-auto text-center" style="position: relative;">
                  <button class="border-0" style="background-color:transparent" id="" onclick="showPop('${i}')"><i
                      class="fa fa-ellipsis-v popupBtn" aria-hidden="true"></i></button>
                  <div class="popupBox card p-1 text-start font-12 w-fit-content shadow ms-auto d-none" id="popupBox_${i}">
                    <p class="m-0" style="cursor:pointer;" id="markAsDone" onclick="markDone(${i})">Mark as Done</p>
                    <hr class="my-1">
                    <p class="m-0" id="delete" style="cursor:pointer;" onclick="deleteTask(${i})">Delete</p>
                  </div>
                </div>
              </div>
            </li>`;

    $(".taskListUl").append(html);
    $("#createModal").modal("hide");
    $(".formInp").val("");
  }
};
