import { API_ENDPOINT } from "astro:env/server";
import type {
  GetCommonPageDataResponse,
  GetFooterPageDataResponse,
  SendMessageRequestBody,
} from "./type";

export const pageResources = {
  home: "/getHomeData",
  products: "/getProductsData",
  about: "/getAboutData",
  services: "/getServiceData",
  contact: "/getContactData",
  distribution: "/getDistributionData",
  common: "/getCommonData",
  footer: "/getFooterData",
} as const;

/**
 * Fetches data from a given endpoint and returns the response as a JSON object to feed the page.
 *
 * @template Response The expected response type.
 * @param endpoint The API endpoint to fetch data from.
 * @param params Optional query parameters to include in the request.
 * @returns A promise that resolves to the response data of type Response.
 * @throws Will throw an error if the network request fails.
 */
export async function getPageData<Response>(
  endpoint: keyof typeof pageResources,
  params: Record<string, string | number | boolean> = {},
): Promise<Response> {
  const resource = pageResources[endpoint] ?? undefined;
  if (!resource) {
    throw new Error(`Endpoint ${endpoint} does not exist in pageResources.`);
  }
  const url = buildUrl(
    resource,
    Object.fromEntries(
      Object.entries(params).map(([key, value]) => [key, value.toString()]),
    ),
  );
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }
  return response.json() as Promise<Response>;
}

/**
 * Builds a URL by appending the given endpoint to the configured API endpoint
 * and including the given query parameters.
 *
 * @param endpoint The API endpoint to append to the base URL.
 * @param params Optional query parameters to include in the URL.
 * @returns The built URL as a string.
 */
function buildUrl(endpoint: string, params: Record<string, string>) {
  const url = new URL(API_ENDPOINT + "/wp-json/wp/v2" + endpoint);
  url.search = new URLSearchParams(params).toString();
  return url.toString();
}

/**
 * Sends a contact form message using the data provided
 *
 * @param data The data to include in the contact form submission.
 * @returns A promise that resolves to the response data from the server.
 * @throws Will throw an error if the network request fails.
 */
export async function sendMessage(data: SendMessageRequestBody) {
  const formDataValues = {
    "first-name": data.firstName,
    "last-name": data.lastName,
    "your-email": data.email,
    phone: data.phone,
    "your-message": data.message,
    _wpcf7_unit_tag: "5f0b306",
  };
  const formData = new FormData();
  Object.entries(formDataValues).forEach(([key, value]) => {
    formData.append(key, value);
  });
  const response = await fetch(
    API_ENDPOINT + "/wp-json/contact-form-7/v1/contact-forms/9/feedback",
    {
      method: "POST",
      body: formData,
    },
  );
  if (!response.ok) {
    console.error("Send Message Response:", await response.json());
    throw new Error("Failed to send message");
  }
  return response.json();
}

export async function getPageDataWithLayoutData<Response>(
  endpoint: keyof typeof pageResources,
  params: Record<string, string | number | boolean> = {},
): Promise<[Response, GetCommonPageDataResponse, GetFooterPageDataResponse]> {
  const [pageBody, headerData, footerData] = await Promise.all([
    getPageData<Response>(endpoint, params),
    getPageData<GetCommonPageDataResponse>("common"),
    getPageData<GetFooterPageDataResponse>("footer"),
  ]);
  return [pageBody, headerData, footerData];
}
