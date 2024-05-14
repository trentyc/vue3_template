import { App, Directive } from "vue";

const directivesList: { [key: string]: Directive } = {
  // directives
};

const directives = {
  install: function (app: App<Element>) {
    Object.keys(directivesList).forEach(key => {
      app.directive(key, directivesList[key]);
    });
  }
};

export default directives;
