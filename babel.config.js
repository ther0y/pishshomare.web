module.exports = {
  presets: [require.resolve("next/babel")],
  plugins: [[require.resolve("babel-plugin-macros")]],
};

function pbcopy(data) {
  var proc = require("child_process").spawn("pbcopy");
  proc.stdin.write(data);
  proc.stdin.end();
}

function gen(obj, name) {
  const faNums = obj.name
    .replace(name, "")
    .split(" ")
    .filter((n) => n.length);
  const enNums = obj.eng
    .replace(name, "")
    .split(" ")
    .filter((n) => n.length);

  return pbcopy(
    JSON.stringify({
      name: {
        fa: name,
        en: "",
      },
      number: {
        fa: faNums,
        en: enNums,
      },
      metadata: {
        areas: obj.areas.map((a) => a.name),
      },
      type: obj.type,
    })
  );
}
