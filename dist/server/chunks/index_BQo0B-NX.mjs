import { s as setOnSetGetEnv } from './runtime_BaX0UJyD.mjs';

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-check

setOnSetGetEnv(() => {
	
});
const API_ENDPOINT = "https://cms.farwell.co.ao";

const pageResources = {
  home: "/getHomeData",
  about: "/getAboutData",
  contact: "/getContactData",
  distribution: "/getDistributionData",
  common: "/getCommonData",
  footer: "/getFooterData",
  team: "/getOurTeamData",
  diagnostics: "/getOurDiagnosticData",
  facilities: "/getOurInstalationsData",
  qualityPolicy: "/getQualityPolicyData"
};
async function getPageData(endpoint, params = {}) {
  const resource = pageResources[endpoint] ?? void 0;
  if (!resource) {
    throw new Error(`Endpoint ${endpoint} does not exist in pageResources.`);
  }
  const url = buildUrl(
    resource,
    Object.fromEntries(
      Object.entries(params).map(([key, value]) => [key, value.toString()])
    )
  );
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }
  return response.json();
}
function buildUrl(endpoint, params) {
  const url = new URL(API_ENDPOINT + "/wp-json/wp/v2" + endpoint);
  url.search = new URLSearchParams(params).toString();
  return url.toString();
}
async function sendMessage(data) {
  const formDataValues = {
    "first-name": data.firstName,
    "last-name": data.lastName,
    "your-email": data.email,
    phone: data.phone,
    "your-message": data.message,
    _wpcf7_unit_tag: "5f0b306"
  };
  const formData = new FormData();
  Object.entries(formDataValues).forEach(([key, value]) => {
    formData.append(key, value);
  });
  const response = await fetch(
    API_ENDPOINT + "/wp-json/contact-form-7/v1/contact-forms/9/feedback",
    {
      method: "POST",
      body: formData
    }
  );
  if (!response.ok) {
    console.error("Send Message Response:", await response.json());
    throw new Error("Failed to send message");
  }
  return response.json();
}
async function getPageDataWithLayoutData(endpoint, params = {}) {
  const [pageBody, headerData, footerData] = await Promise.all([
    getPageData(endpoint, params),
    getPageData("common"),
    getPageData("footer")
  ]);
  return [pageBody, headerData, footerData];
}

export { getPageData as a, getPageDataWithLayoutData as g, sendMessage as s };
