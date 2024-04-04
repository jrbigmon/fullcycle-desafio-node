const getArgs = (key) => {
  const args = process.argv.slice(2);

  if (!args?.length) return;

  const arg = args.find((arg) => arg.split("=")[0] === key);

  if (!arg) return;

  return arg?.split("=")?.[1] ?? arg?.split("=")?.[0];
};

module.exports = getArgs;
