export const getPackages = async () => {
  const resGithub = fetch(
    "https://api.github.com/repos/JohnVersus/nimbleuikit"
  );
  const resNpm = fetch("https://registry.npmjs.org/@nimbleuikit/atoms");

  const [dataGithub, dataNpm] = await Promise.all([resGithub, resNpm]);

  const githubJson = await dataGithub.json();
  const npmJson = await dataNpm.json();
  console.log("Server");
  return { githubJson, npmJson };
};
