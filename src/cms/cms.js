import CMS from 'netlify-cms-app';
import LinkFileComponent from "./components/linkFileComponent"
import LinkFileButtonComponent from "./components/linkFileButtonComponent"

CMS.registerEditorComponent(LinkFileComponent);
CMS.registerEditorComponent(LinkFileButtonComponent);


// https://github.com/netlify/netlify-cms/issues/1737 and HELIO-3241
window.CMS_MANUAL_INIT = true;

if (process.env.BRANCH === "preview") {
  console.log("---- USING PREVIEW BACKEND ----")
  CMS.init({
    config: {
      backend: {
        name: 'gitlab',
        repo: 'michigan-publishing/about-ebc',
        branch: 'preview',
        auth_type: 'implicit',
        app_id: '',
        api_root: 'https://gitlab.umich.edu/api/v4',
        base_url: 'https://gitlab.umich.edu',
        auth_endpoint: 'oauth/authorize'
      }
    }
  });
} else {
  CMS.init({
    config: {
      backend: {
        name: 'gitlab',
        repo: 'michigan-publishing/about-ebc',
        branch: 'master',
        auth_type: 'implicit',
        app_id: '60532e95a86f6c52febcb09273cf306ea5439e2bb1cb30bfc33e46810131798b',
        api_root: 'https://gitlab.umich.edu/api/v4',
        base_url: 'https://gitlab.umich.edu',
        auth_endpoint: 'oauth/authorize'
      }
    }
  });
}
