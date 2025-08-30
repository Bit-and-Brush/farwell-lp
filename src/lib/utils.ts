import { clsx, type ClassValue } from "clsx";
import sanitizeHTML from "sanitize-html";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Sanitizes HTML string from CMS.
 *
 * Strips out all HTML tags that are not in the allowedTags array and all
 * attributes that are not in the allowedAttributes object.
 *
 * @param htmlString - The HTML string to sanitize.
 * @returns The sanitized HTML string.
 */
export function sanitizeHTMLFromCMS(htmlString: string): string {
  const allowedTags = [
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "strong",
    "em",
    "ul",
    "ol",
    "li",
    "a",
    "blockquote",
    "code",
    "pre",
    "img",
    "br",
    "hr",
    "span",
    "div",
  ];
  const allowedAttributes = {
    a: ["href", "title", "target", "rel"],
    img: ["src", "alt", "title", "width", "height"],
  };
  const safeHTML = sanitizeHTML(htmlString, {
    allowedAttributes,
    allowedTags,
  });
  return safeHTML;
}
