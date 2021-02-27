/*

Here is a Quiz for you. Please have a look at the `dark_theme` object below.
Use the object destructuring, spread sytax and the rest parameter to achieve the
following:


Feel free to fork the project and submit you answers by creating a file named,

`quiz-od-<github-username>.js`

*/

const dark_theme = {
  id: "T_002",
  name: "Dark",
  colors: {
    body: "#000000",
    text: "#FFFFFF",
    button: {
      text: "#000000",
      background: "#FFFFFF",
    },
    link: {
      text: "teal",
      opacity: 1,
    },
  },
  font: "Roboto",
};

//1. Extract the value of the `font` property and assign it to a variable.
const { font } = dark_theme;

// 2. Extract the value of the `font` property and assign it to a variable with the name `myFont`.
const { font: myFont } = dark_theme;

// 3. Extract the value of the button text color and link opacity.
const {
  colors: {
    button: { text },
  },

  colors: {
    link: { opacity },
  },
} = dark_theme;

console.log(opacity);

// 4. Create a clone of the dark_theme object and add the `border-color` attribute with a color value.

const dark_theme2 = {
  ...dark_theme,
  colors: { ...dark_theme.colors, border-color: "black"},
};

// 5. Consider a `user` object and Merge the user object to the `dark_theme` object.
 const user = {
     'name': 'Alex',
     'id': 'U_001'
 }

const updateUser = {...user, ...dark_theme};

// 6. Destructure the dark_theme object and put the link colors in a seprate object
// using the rest parameter.

const { id, names, ...rest } = dark_theme;
