import CMS from 'decap-cms-app';
import LinkFileComponent from "./components/linkFileComponent"
import LinkFileButtonComponent from "./components/linkFileButtonComponent"

CMS.registerEditorComponent(LinkFileComponent);
CMS.registerEditorComponent(LinkFileButtonComponent);

const branch = process.env.GATSBY_CMS_BRANCH || "master";

CMS.init({
  config: {
    backend: {
      name: 'github',
      repo: 'mlibrary/about-ebc',
      branch,
    }
  }
});
