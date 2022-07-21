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
let theadC = tableInfor.tableHeader;
let tdataC = tableInfor.tableContent;

let trh = document.createElement("tr");
trh.id = "tablehead";
document.getElementsByClassName("table").appendChild(trh);
let thead = theadC.map((ele) => {
  let th = document.createElement("th");
  th.textContent = ele;
  return th;
});
document.getElementById("tablehead").appendChild(...thead);

let tabledata = tdataC.map((eleC) => {
  let tr = document.createElement("tr");
  let data = theadC.map((ele) => {
    let td = document.createElement("td");
    td.textContent = eleC[ele];
    return td;
  });
  document.querySelector("tr").appendChild(...data);
  return tr;
});
document.getElementById("tablehead").appendChild(...tabledata);

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

let li = list.map((ele) => {
  let item = document.createElement("li");
  item.textContent = ele;
  return item;
});

document.getElementsByClassName("ul").appendChild(...li);
document.getElementsByClassName("ol").appendChild(...li);

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let option = dropDownList.map((ele) => {
  let option = document.createElement("option");
  option.value = ele.value;
  option.text = ele.content;
  return option;
});

document.getElementById("city").appendChild(...option);
