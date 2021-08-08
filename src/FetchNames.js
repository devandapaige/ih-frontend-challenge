import axios from "axios";

const boyNames = [];
const girlNames = [];

function getBoyNames() {
  axios
    .get("http://names.drycodes.com/50?nameOptions=boy_names")
    .catch(console.log());
}

function getGirlNames() {
  axios.get("http://names.drycodes.com/50?nameOptions=girl_names");
}

const allNames = boyNames.concat(girlNames);
export default allNames;
