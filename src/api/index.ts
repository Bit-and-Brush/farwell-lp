import { API_ENDPOINT } from "astro:env/server";

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
  endpoint: string,
  params: Record<string, string | number | boolean> = {},
): Promise<Response> {
  const url = buildUrl(
    endpoint,
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
  const url = new URL(API_ENDPOINT + endpoint);
  url.search = new URLSearchParams(params).toString();
  return url.toString();
}
