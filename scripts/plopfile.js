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
        name: "componentDescription",
        message: "Provider a short description for the component",
        validate: (answer) => answer.length > 0,
      },
      {
        type: "input",
        name: "componentProps",
        message:
          "Props to generate. Use ',' if multiples props needs to be generated",
        validate: (answer) => answer.length > 0,
      },
      {
        type: "input",
        name: "componentFigmaLink",
        message: "Provide the Figma link to the source code",
        validate: (answer) => answer.length > 0,
      },
      {
        type: "list",
        name: "categoryName",
        message: "category of your component",
        choices: [
          "Interaction",
          "Form",
          "Feedback",
          "Navigation",
          "Data display",
          "Skeleton",
        ],
      },
    ],
    actions: ({
      componentName,
      componentDescription,
      componentFigmaLink,
      componentProps,
    }) => {
      const folderName = kebabCase(componentName);
      const componentGithubLink = `https://github.com/Spendesk/grapes/tree/master/src/lib/${componentName}`;
      const componentPropsList = componentProps
        .split(",")
        .map((prop) => prop.trim());

      const actions = [
        {
          type: "addMany",
          templateFiles: "../plop-templates/component/**",
          base: "../plop-templates/component",
          destination: `../src/app/docs/lib/${folderName}`,
          data: {
            componentName,
            componentDescription,
            componentGithubLink,
            componentFigmaLink,
            componentPropsList,
          },
        },
        //         {
        //           type: "append",
        //           path: "../src/index.ts",
        //           pattern: /;$/m,
        //           template: `export { {{componentName}} } from './lib/{{componentName}}';
        // export type { {{componentName}}Props } from './lib/{{componentName}}';`,
        //         },
      ];

      return actions;
    },
  });
};
