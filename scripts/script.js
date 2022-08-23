
// Students
$(document).ready(function () {
        $.getJSON("data/students.json", function (data) {
            var student = '';

            $.each(data, function (key, value) {
                $("#students-table").append("<tr>" +
                    "<td>" + value.id + "</td>" +
                    "<td>" + value.firstName + "</td>" +
                    "<td>" + value.lastName + "</td>" +
                    "<td>" + "<input type='button' class='deletebtn' value='Delete' onclick=$(this).parent().parent().remove()></td>" +
                    "</tr>");
            });
        });
    });

function addStudent(tableId, fn, ln)
{
    var studentsTable = document.getElementById(tableId);

    var id = parseInt(studentsTable.rows[studentsTable.rows.length - 1].cells[0].innerText) + 1;

    var studentRow = studentsTable.insertRow(-1);
    var idCell = studentRow.insertCell(0);
    var fnCell = studentRow.insertCell(1);
    var lnCell = studentRow.insertCell(2);
    var delBtnCell = studentRow.insertCell(3);
    
    var newId = document.createTextNode(id);
    var newFn = document.createTextNode(document.getElementById(fn).value);
    var newLn = document.createTextNode(document.getElementById(ln).value);

    idCell.appendChild(newId);
    fnCell.appendChild(newFn);
    lnCell.appendChild(newLn);
    delBtnCell.insertAdjacentHTML("beforeend", "<input type='button' class='deletebtn' value='Delete' onclick=$(this).parent().parent().remove()>");
}

// Courses
$(document).ready(function () {
    $.getJSON("data/courses.json", function (data) {
        var course = '';

        $.each(data, function (key, value) {
            $("#courses-table").append(`<tr><td>${value.id}</td><td>${value.name}</td><td>${value.description}</td><td>${value.isPartFunded
                }</td><td><input type='button' class='deletebtn' value='Delete' onclick=$(this).parent().parent().remove()></td></tr>`);
        });
    });
});

function addCourse(tableId, n, d, f) {
    var coursesTable = document.getElementById(tableId);

    var id = parseInt(coursesTable.rows[coursesTable.rows.length - 1].cells[0].innerText) + 1;

    var courseRow = coursesTable.insertRow(-1);
    var idCell = courseRow.insertCell(0);
    var nCell = courseRow.insertCell(1);
    var dCell = courseRow.insertCell(2);
    var fCell = courseRow.insertCell(3);
    var delBtnCell = courseRow.insertCell(4);

    var newId = document.createTextNode(id);
    var newN = document.createTextNode(document.getElementById(n).value);
    var newD = document.createTextNode(document.getElementById(d).value);
    var newF = document.createTextNode(document.querySelector('input[name="isPartFunded"]:checked').id);

    idCell.appendChild(newId);
    nCell.appendChild(newN);
    dCell.appendChild(newD);
    fCell.appendChild(newF);
    delBtnCell.insertAdjacentHTML("beforeend", "<input type='button' class='deletebtn' value='Delete' onclick=$(this).parent().parent().remove()>");
}

// Subjects
$(document).ready(function () {
    $.getJSON("data/subjects.json", function (data) {
        var subjects = '';

        $.each(data, function (key, value) {
            $("#subjects-table").append("<tr>" +
                "<td>" + value.id + "</td>" +
                "<td>" + value.name + "</td>" +
                "<td>" + value.description + "</td>" +
                "<td>" + "<input type='button' class='deletebtn' value='Delete' onclick=$(this).parent().parent().remove()></td>" +
                "</tr>");
        });
    });
});

function addSubject(tableId, n, d) {
    var subjectsTable = document.getElementById(tableId);

    var id = parseInt(subjectsTable.rows[subjectsTable.rows.length - 1].cells[0].innerText) + 1;

    var subjectRow = subjectsTable.insertRow(-1);
    var idCell = subjectRow.insertCell(0);
    var nCell = subjectRow.insertCell(1);
    var dCell = subjectRow.insertCell(2);
    var delBtnCell = subjectRow.insertCell(3);

    var newId = document.createTextNode(id);
    var newN = document.createTextNode(document.getElementById(n).value);
    var newD = document.createTextNode(document.getElementById(d).value);

    idCell.appendChild(newId);
    nCell.appendChild(newN);
    dCell.appendChild(newD);
    delBtnCell.insertAdjacentHTML("beforeend", "<input type='button' class='deletebtn' value='Delete' onclick=$(this).parent().parent().remove()>");
}

function clear() {
    document.getElementById("add-form").reset();
} 