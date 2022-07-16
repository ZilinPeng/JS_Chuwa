const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

function double({ quantity, price }) {
  return { quantity: quantity * 2, price: price * 2 };
}

function doubleItemObject(itemsObject) {
  return itemsObject.map(double);
}

console.log(doubleItemObject(itemsObject));

function filterCb(ele) {
  return ele.price > 300 && ele.quantity > 2;
}

function greater(itemsObject) {
  return itemsObject.filter(filterCb);
}

console.log(greater(itemsObject));

function add(num, num2) {
  return {
    quantity: num.quantity + num2.quantity,
    price: num.price + num2.price * num2.quantity,
  };
}

function sum(list) {
  return list.reduce(add);
}

console.log(sum(itemsObject));

function filterStr(s) {
  return s != "";
}

function editString(s) {
  let strArray = s
    .trim()
    .replace(/[^0-9a-z]/gi, " ")
    .split(" ");
  strArray = strArray.filter(filterStr);
  strArray = strArray.map((ele) => {
    return ele.toLocaleLowerCase();
  });
  return strArray.join(" ");
}
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

console.log(editString(string));

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];
const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

function combine(l1, l2) {
  let temp = new Array();
  let map = new Map();

  temp = l1.concat(l2);
  temp = temp.map((ele) => {
    return {
      uuid: ele.uuid,
      name: !ele.name ? null : ele.name,
      role: !ele.role ? null : ele.role,
    };
  });

  let result = new Array();
  temp.forEach((ele) => {
    if (map[ele.uuid]) {
      if (ele.name) {
        map[ele.uuid].name = ele.name;
      } else {
        map[ele.uuid].role = ele.role;
      }
    } else {
      map[ele.uuid] = ele;
    }
    result.push(map[ele.uuid]);
  });
  result = [...new Set(result)];
  result = result.sort(compare);
  return result;
}

function compare(e1, e2) {
  if (e1.uuid > e2.uuid) {
    return 1;
  }
  if (e1.uuid < e2.uuid) {
    return -1;
  }
  return 0;
}

console.log(combine(first, second));
