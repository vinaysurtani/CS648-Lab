let sally = 'Sally Smith';
let mark = 'Mark Martin';
let holly = 'Holly Unlikely';
let jane = 'Jane Smith';
let newGuy = 'John Doe';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, jane.toUpperCase()), /*#__PURE__*/React.createElement("li", null, newGuy));
ReactDOM.render(element, document.getElementById('content'));