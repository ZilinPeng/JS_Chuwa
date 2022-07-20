const tableInfor = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

let body = document.getElementById("body");

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

body.appendChild(table);

let row = document.createElement("tr");
tableInfor.tableHeader.forEach((ele) => {
  let thead = document.createElement("th");
  thead.innerHTML(ele);
  row.appendChild(thead);
});
thead.appendChild(row);

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
let ul = document.createElement("ul");
let ol = document.createElement("ol");
list.forEach((ele) => {
  let li = createElement("li");
  li.innerHTML = ele;
  ul.appendChild(li);
  ol.appendChild(li);
});
body.appendChild(ul);
body.appendChild(ol);

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];
let select = document.createElement("select");
select.name = "city";
select.id = "city";
dropDownList.forEach((ele) => {
  let option = document.createElement("option");
  option.value = ele.value;
  option.text = ele.content;
  select.appendChild(option);
});
body.appendChild(select);
