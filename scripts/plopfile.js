const kebabCase = require("lodash.kebabcase");

module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "add new component documentation",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "Provider the name of the component (e.g. TextField)",
        validate: (answer) => answer.length > 0,
      },
      {
        type: "input",
        name: "componentProps",
        message:
          "Props to generate. Use ',' if multiples props needs to be generated",
        validate: (answer) => answer.length > 0,
      },
    ],
    actions: ({ componentName, componentProps }) => {
      const folderName = kebabCase(componentName);
      const componentGithubLink = `https://github.com/Spendesk/grapes/tree/master/src/components/${componentName}`;
      const componentPropsList = componentProps
        .split(",")
        .map((prop) => prop.trim());

      const actions = [
        {
          type: "addMany",
          templateFiles: "../plop-templates/component/**",
          base: "../plop-templates/component",
          destination: `../src/app/docs/components/${folderName}`,
          data: {
            componentName,
            componentGithubLink,
            componentPropsList,
          },
        },
      ];

      return actions;
    },
  });
};
