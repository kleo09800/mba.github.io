
$(document).ready(function () {
  
    // FETCHING DATA FROM JSON FILE
    $.getJSON("json/deskTowers.json", 
            function (data) {
        let p = '';

        // ITERATING THROUGH OBJECTS
        $.each(data, function (key, value) {

            //CONSTRUCTION OF ROWS HAVING
            // DATA FROM JSON OBJECT
            p += '<tr>';

            p += '<td>' + 
                value.Description + '</td>';

            p += '<td>' + 
                value.Category + '</td>';

            p += '<td>' + 
                value.Manufacturer + '</td>';

            p += '<td>' + 
                value.Shipped + '</td>';

            p += '<td>' + 
                value.Serial + '</td>';

            p += '<td>' + 
                value.Location + '</td>';

            p += '<td>' + 
                value.Tag + '</td>';

            p += '</tr>';
        });
          
        //INSERTING ROWS INTO TABLE 
        $('#table').append(p);
    });
});
















// $.ajax({
//     url: 'json/lapJSON.json',
//     type: 'POST',
//     data: {
//         json: jsonData
//     },
//     success: function (response) {
//         var trHTML = '';
//         $.each(response, function (i, item) {
//             trHTML += '<tr><td>' + item.rank + '</td><td>' + item.content + '</td><td>' + item.UID + '</td></tr>';
//         });
//         $('#records_table').append(trHTML);
//     }
// });




// const jsonData = 
// function updateTable(tableId, jsonData){

//     var tableHTML = "<tr>";
//     for (var headers in jsonData[0]) {
//       tableHTML += "<th>" + headers + "</th>";
//     }
//     tableHTML += "</tr>";
  
//     for (var eachItem in jsonData) {
//       tableHTML += "<tr>";
//       var dataObj = jsonData[eachItem];
//       for (var eachValue in dataObj){
//         tableHTML += "<td>" + dataObj[eachValue] + "</td>";
//       }
//       tableHTML += "</tr>";
//     }
  
//     document.getElementById(tableId).innerHTML = tableHTML;
//   }
