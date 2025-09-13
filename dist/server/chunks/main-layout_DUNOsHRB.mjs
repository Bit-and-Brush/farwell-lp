import { a as createComponent, s as spreadAttributes, u as unescapeHTML, d as renderTemplate, c as createAstro, m as maybeRenderHead, b as renderComponent, e as addAttribute, r as renderSlot, f as renderScript, g as renderHead } from './astro/server_DRQd-RgF.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
import { $ as $$Image } from './_astro_assets_CTJtQqK3.mjs';
import { Heart, ChevronDownIcon, XIcon, MenuIcon, BookIcon, UserIcon, ChevronUpIcon } from 'lucide-react';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { NavigationMenuTrigger } from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import { useRef, useState, useEffect } from 'react';
import sanitizeHTML from 'sanitize-html';
import { twMerge } from 'tailwind-merge';
import { Slot } from '@radix-ui/react-slot';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
/* empty css                         */

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function sanitizeHTMLFromCMS(htmlString) {
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
    "div"
  ];
  const allowedAttributes = {
    a: ["href", "title", "target", "rel"],
    img: ["src", "alt", "title", "width", "height"]
  };
  const safeHTML = sanitizeHTML(htmlString, {
    allowedAttributes,
    allowedTags
  });
  return safeHTML;
}

const footerLogoImage = new Proxy({"src":"/_astro/footer-logo.BcTJOeEs.png","width":2266,"height":616,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/assets/footer-logo.png";
							}
							
							return target[name];
						}
					});

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const HeaderLogoSVG = createSvgComponent({"meta":{"src":"/_astro/header-logo.BTmsCiS5.svg","width":137,"height":80,"format":"svg"},"attributes":{"width":"137","height":"80","viewBox":"0 0 137 80","fill":"none"},"children":"\n<path d=\"M14.479 53.7294V53.4335C14.482 51.7955 13.406 50.7389 11.689 50.6844H6.66701V58.847H10.561C12.003 58.8211 13.056 57.8089 13.052 56.4433V56.1997L13.338 56.1954V62.6793L13.052 62.6763V62.434C13.056 61.0799 12.02 60.073 10.597 60.0302H6.66701V67.0799C6.68601 68.0574 7.52101 68.8449 8.54901 68.8449H8.92001L8.92401 69.1247H0L0.00500488 68.8449H0.377014C1.40401 68.8449 2.239 68.0574 2.259 67.0799V51.438C2.259 50.5024 1.37701 49.7641 0.381012 49.7641H0.0100098L0.00500488 49.4849H11.267C12.535 49.4741 14.228 49.1941 14.773 48.9747V53.7331L14.479 53.7294Z\" fill=\"#6C6E70\" />\n<path d=\"M24.8932 62.4353L22.0202 55.5465L19.0102 62.4353H24.8932ZM32.0462 67.2153C32.6822 68.3629 33.6872 68.8414 34.5532 68.8414H34.7982V69.1232H25.4392V68.8447H25.6972C26.4562 68.8447 27.2812 68.2064 26.8322 67.0839L25.3872 63.6172H18.4932L16.9902 67.0839C16.5082 68.2064 17.3562 68.8447 18.1142 68.8447H18.3732V69.1232H12.0742V68.8426H12.3382C13.1722 68.8426 14.1862 68.3764 14.8092 67.261L21.6022 52.5983C21.8122 52.1702 22.9762 49.7379 23.0472 48.9216H23.3112L32.0462 67.2153Z\" fill=\"#6C6E70\" />\n<path d=\"M45.7978 49.4838C49.3588 49.4838 52.7848 50.8669 52.7848 54.7746C52.7848 57.136 51.3098 59.7878 47.9758 60.1061C49.2168 60.4939 50.3208 61.6084 50.9728 62.5916C51.0618 62.7285 52.8228 65.3956 53.9308 66.713C55.1968 68.2539 56.0338 68.8187 57.5658 68.8415V69.123H54.7058C51.4928 69.123 49.1548 68.459 47.8068 66.2146C47.0918 65.0258 45.7678 62.2479 45.3588 61.4085C44.7878 60.2382 44.1318 59.6441 43.3698 59.5185V59.2511H44.2658C45.8458 59.2366 47.4518 58.466 47.9758 56.0088C48.0448 55.6679 48.1098 55.2154 48.0848 54.6504C47.9678 51.9673 46.5488 50.7662 44.6198 50.7217C43.8418 50.689 42.7608 50.7207 42.3918 50.7113V67.0784C42.4108 68.0552 43.2448 68.8415 44.2788 68.8415H44.6448L44.6498 69.123H35.7178L35.7228 68.8415H36.0938C37.1178 68.8415 37.9488 68.0628 37.9748 67.0906V51.5256C37.9558 50.5495 37.1208 49.7614 36.0958 49.764H35.7208L35.7168 49.4848L45.7978 49.4838Z\" fill=\"#6C6E70\" />\n<path d=\"M83.2049 49.4847V49.7653H82.9459C82.0749 49.7653 80.8709 50.2373 80.4069 51.4031L75.4709 66.5121C75.4709 66.5121 74.8739 68.2597 74.9539 69.6293H74.6769L68.2679 56.0822L63.6309 66.5121C63.6309 66.5121 62.9379 68.149 62.9069 69.6293H62.6289L55.5999 51.389C55.0619 50.2338 53.9429 49.7653 53.0729 49.7653H52.8379V49.4847H61.7989V49.7626H61.5409C60.7829 49.7626 60.0209 50.3968 60.4049 51.5187L64.0199 61.2541L69.3489 49.0453L69.6229 49.0551L75.4679 61.3787L78.3989 51.5085C78.7219 50.3864 78.0999 49.7626 77.2829 49.7626H77.0239V49.4847H83.2049Z\" fill=\"#6C6E70\" />\n<path d=\"M99.5069 69.1243H84.2969L84.3019 68.8437H84.6739C85.7009 68.8437 86.5349 68.0561 86.5549 67.0792V51.4378C86.4879 50.5024 85.6739 49.7627 84.6769 49.7627H84.3059L84.3019 49.4839H95.5629C96.8289 49.4729 98.5229 49.1939 99.0689 48.9747V53.8791L98.7729 53.8752V53.5458C98.7769 51.8571 97.6659 50.7536 95.9039 50.683H90.9619V58.8462H94.8549C96.2979 58.8198 97.3499 57.8076 97.3459 56.4409V56.1988L97.6329 56.1954V62.6783L97.3459 62.6755V62.4326C97.3499 61.0785 96.3139 60.0724 94.8929 60.0295H90.9609V67.9236H94.8169C97.7519 67.9236 99.6559 66.1829 100.566 63.3989H100.861L99.5069 69.1243Z\" fill=\"#6C6E70\" />\n<path d=\"M117.688 69.1242H102.478L102.483 68.8436H102.854C103.883 68.8436 104.717 68.056 104.736 67.079V51.5291C104.717 50.5512 103.882 49.7638 102.854 49.7638H102.483L102.478 49.4838H111.402L111.397 49.7638H111.026C109.997 49.7638 109.163 50.5512 109.143 51.5291V67.9235H112.999C115.934 67.9235 117.839 66.1828 118.75 63.3988H119.042L117.688 69.1242Z\" fill=\"#6C6E70\" />\n<path d=\"M135.017 69.1242H119.806L119.812 68.8436H120.183C121.211 68.8436 122.044 68.0559 122.064 67.079V51.5291C122.044 50.5512 121.211 49.7638 120.183 49.7638H119.811L119.806 49.4838H128.73L128.725 49.7638H128.354C127.327 49.7638 126.492 50.5512 126.472 51.5291V67.9235H130.329C133.263 67.9235 135.167 66.1828 136.077 63.3988H136.372L135.017 69.1242Z\" fill=\"#6C6E70\" />\n<path d=\"M10.4904 76.9427C10.9284 77.2145 11.1834 77.5828 11.1514 78.1079C11.1074 79.0239 10.3844 79.5641 9.2064 79.5641C8.5454 79.5641 7.92739 79.4021 7.65839 79.137C7.53539 78.8431 7.6404 78.2494 7.8334 77.943H7.89739C7.83939 78.6767 8.4034 79.2816 9.2864 79.2683C9.9264 79.2565 10.3044 78.9175 10.3034 78.4769C10.3044 78.1914 10.1114 78.0025 9.7154 77.7502L8.4314 76.9384C7.9254 76.6167 7.67439 76.1886 7.72739 75.6768C7.78939 74.9481 8.3484 74.4448 9.2774 74.4448C9.5154 74.4448 9.9444 74.4757 10.2804 74.5169H10.7424L10.6464 75.5506H10.5754C10.5744 75.0623 10.1604 74.742 9.53739 74.742C8.95739 74.742 8.5914 75.0402 8.5734 75.4182C8.5554 75.6946 8.77739 75.8802 9.08739 76.0714L10.4904 76.9427Z\" fill=\"#231F20\" />\n<path d=\"M16.9903 77.004C16.9903 75.6084 16.3403 74.741 15.3023 74.741C14.2643 74.741 13.6133 75.6084 13.6133 77.004C13.6133 78.4007 14.2643 79.2684 15.3023 79.2684C16.3403 79.2684 16.9903 78.4007 16.9903 77.004ZM18.1993 77.004C18.1993 78.5844 17.0693 79.5641 15.3023 79.5641C13.5333 79.5641 12.4043 78.5844 12.4043 77.004C12.4043 75.4244 13.5333 74.4448 15.3023 74.4448C17.0693 74.4448 18.1993 75.4244 18.1993 77.004Z\" fill=\"#231F20\" />\n<path d=\"M24.4596 77.4135L24.5306 78.624C24.1996 79.1434 23.5736 79.5648 22.4616 79.5648C20.6536 79.5572 19.4736 78.6028 19.4736 76.9977C19.4736 75.4251 20.6126 74.4449 22.4816 74.4449C23.2656 74.4449 23.8956 74.6187 24.3126 74.8264L24.3266 76.0329H24.2656C23.9976 75.1093 23.3656 74.7419 22.5556 74.7419C21.3876 74.7419 20.6736 75.6011 20.6736 76.9826C20.6736 78.3743 21.3646 79.24 22.4616 79.2684C23.5946 79.267 24.1686 78.796 24.3976 77.4135H24.4596Z\" fill=\"#231F20\" />\n<path d=\"M27.9616 79.4656H25.7246L25.7256 79.3959H25.8186C26.0766 79.3959 26.2856 79.1989 26.2906 78.9534V75.0524C26.2846 74.8087 26.0756 74.6124 25.8186 74.6124H25.7256L25.7246 74.5432H27.9616L27.9606 74.6124H27.8676C27.6106 74.6124 27.4026 74.8083 27.3956 75.0512V78.9534C27.4006 79.1989 27.6096 79.3959 27.8676 79.3959H27.9606L27.9616 79.4656Z\" fill=\"#231F20\" />\n<path d=\"M32.9331 79.4655H29.1201L29.1211 79.3957H29.2141C29.4721 79.3957 29.6811 79.1988 29.6861 78.9533V75.0329C29.6691 74.7989 29.4661 74.6132 29.2151 74.6132H29.1221L29.1211 74.543H31.9441C32.2621 74.5403 32.6861 74.4704 32.8231 74.4149V75.6448L32.7491 75.6434V75.5611C32.7491 75.1381 32.4711 74.862 32.0291 74.8436H30.7911V76.8892H31.7671C32.1291 76.8823 32.3931 76.6297 32.3911 76.2878V76.2257L32.4631 76.2249V77.8502L32.3911 77.8492V77.7881C32.3931 77.4495 32.1331 77.1974 31.7761 77.1854H30.7911V79.1639H31.7571C32.4931 79.1639 32.9701 78.7288 33.1981 78.0303H33.2721L32.9331 79.4655Z\" fill=\"#231F20\" />\n<path d=\"M35.9601 79.1662H36.8711C37.9261 79.1662 38.5841 78.339 38.5841 77.0066C38.5841 75.6708 37.9231 74.8408 36.8711 74.8408H35.9601V79.1662ZM36.9601 74.5432C38.7001 74.5432 39.7831 75.487 39.7831 77.0066C39.7831 78.5247 38.7001 79.4664 36.9601 79.4664H34.2891L34.2901 79.3959H34.3831C34.6411 79.3959 34.8501 79.1989 34.8551 78.9538V75.0158C34.8551 74.7889 34.6301 74.6134 34.3861 74.6134H34.2921V74.5432H36.9601Z\" fill=\"#231F20\" />\n<path d=\"M43.4025 77.7896L42.6824 76.0622L41.9285 77.7896H43.4025ZM45.1954 78.9873C45.3544 79.2742 45.6065 79.3957 45.8235 79.3957H45.8844V79.4656H43.5385V79.3957H43.6035C43.7945 79.3957 44.0004 79.2364 43.8884 78.9536L43.5264 78.0862H41.7975L41.4205 78.9536C41.2995 79.2364 41.5134 79.3963 41.7034 79.3963H41.7675V79.4656H40.1895V79.3957H40.2554C40.4644 79.3957 40.7185 79.2781 40.8745 78.9997L42.5775 75.323C42.6295 75.2164 42.9215 74.6069 42.9395 74.4021H43.0054L45.1954 78.9873Z\" fill=\"#231F20\" />\n<path d=\"M48.1984 79.1662H49.1094C50.1644 79.1662 50.8214 78.339 50.8214 77.0066C50.8214 75.6708 50.1614 74.8408 49.1094 74.8408H48.1984V79.1662ZM49.1984 74.5432C50.9384 74.5432 52.0224 75.487 52.0224 77.0066C52.0224 78.5247 50.9384 79.4664 49.1984 79.4664H46.5264L46.5284 79.3959H46.6204C46.8784 79.3959 47.0874 79.1989 47.0934 78.9538V75.0158C47.0934 74.7889 46.8674 74.6134 46.6244 74.6134H46.5314L46.5304 74.5432H49.1984Z\" fill=\"#231F20\" />\n<path d=\"M56.8423 79.4655H53.0303V79.3957H53.1233C53.3813 79.3957 53.5903 79.1988 53.5953 78.9533V75.0329C53.5793 74.7989 53.3743 74.6132 53.1253 74.6132H53.0313L53.0303 74.543H55.8543C56.1713 74.5403 56.5943 74.4704 56.7323 74.4149V75.6448L56.6573 75.6434V75.5611C56.6593 75.1381 56.3813 74.862 55.9393 74.8436H54.7003V76.8892H55.6753C56.0373 76.8823 56.3013 76.6297 56.3013 76.2878V76.2257L56.3723 76.2249V77.8502L56.3013 77.8492V77.7881C56.3013 77.4495 56.0413 77.1974 55.6863 77.1854H54.7003V79.1639H55.6663C56.4013 79.1639 56.8793 78.7288 57.1073 78.0303H57.1813L56.8423 79.4655Z\" fill=\"#231F20\" />\n<path d=\"M64.2501 75.607V75.5325C64.2511 75.1228 63.9811 74.8583 63.5501 74.8442H62.2921V76.8892H63.2681C63.6291 76.8825 63.8931 76.6299 63.8921 76.288V76.2267L63.9631 76.2249V77.8502L63.8921 77.8492V77.7897C63.8921 77.4495 63.6331 77.1974 63.2761 77.1856H62.2921V78.9533C62.2961 79.1988 62.5051 79.3957 62.7631 79.3957H62.8561L62.8581 79.4663H60.6201L60.6221 79.3957H60.7141C60.9721 79.3957 61.1811 79.1988 61.1861 78.9533V75.0329C61.1861 74.7989 60.9661 74.6134 60.7161 74.6134H60.6231L60.6221 74.543H63.4451C63.7621 74.5405 64.1861 74.4704 64.3221 74.4149V75.6083L64.2501 75.607Z\" fill=\"#231F20\" />\n<path d=\"M67.7384 77.7896L67.0174 76.0622L66.2634 77.7896H67.7384ZM69.5314 78.9873C69.6904 79.2742 69.9424 79.3957 70.1594 79.3957H70.2214V79.4656H67.8754V79.3957H67.9404C68.1294 79.3957 68.3364 79.2364 68.2244 78.9536L67.8624 78.0862H66.1334L65.7574 78.9536C65.6364 79.2364 65.8494 79.3963 66.0384 79.3963H66.1034V79.4656H64.5244V79.3957H64.5904C64.8004 79.3957 65.0534 79.2781 65.2114 78.9997L66.9134 75.323C66.9664 75.2164 67.2574 74.6069 67.2764 74.4021H67.3424L69.5314 78.9873Z\" fill=\"#231F20\" />\n<path d=\"M73.4118 74.5432C74.3038 74.5432 75.1638 74.8901 75.1638 75.8691C75.1638 76.4616 74.7948 77.1257 73.9578 77.205C74.2688 77.3034 74.5458 77.5828 74.7098 77.8281C74.7318 77.862 75.1738 78.5317 75.4508 78.8616C75.7678 79.2476 75.9778 79.389 76.3618 79.3959V79.4656H75.6458C74.8398 79.4656 74.2538 79.2987 73.9158 78.7369C73.7368 78.4383 73.4048 77.7426 73.3018 77.5327C73.1588 77.239 72.9938 77.0891 72.8038 77.059V76.9913H73.0288C73.4248 76.9871 73.8268 76.7944 73.9578 76.1786C73.9758 76.0934 73.9918 75.9801 73.9858 75.8381C73.9568 75.1658 73.6008 74.8647 73.1158 74.8539C72.9208 74.8453 72.6508 74.8525 72.5578 74.851V78.9534C72.5628 79.198 72.7718 79.3959 73.0318 79.3959H73.1228L73.1248 79.4656H70.8858L70.8868 79.3959H70.9798C71.2358 79.3959 71.4448 79.1997 71.4498 78.9562V75.0546C71.4458 74.8099 71.2368 74.6125 70.9798 74.6133H70.8858L70.8848 74.5432H73.4118Z\" fill=\"#231F20\" />\n<path d=\"M83.0167 78.9538C83.0637 79.2326 83.2907 79.3958 83.5537 79.3958H83.6707V79.4656H81.4587V79.3987H81.5727C81.7317 79.3982 81.8767 79.2508 81.8597 79.099L81.5687 76.5518L80.1887 78.8299C80.1887 78.8299 79.9147 79.2635 79.9057 79.6058H79.8367L77.9417 76.5677L77.6517 79.099C77.6337 79.2496 77.7787 79.3982 77.9387 79.3987H78.0527V79.4656H76.5117V79.3958H76.6287C76.8937 79.3958 77.1287 79.2326 77.1677 78.9551L77.7777 74.4448H77.8457L80.1307 78.0323L82.3207 74.4465H82.3887L83.0167 78.9538Z\" fill=\"#231F20\" />\n<path d=\"M87.1564 77.7896L86.4364 76.0622L85.6814 77.7896H87.1564ZM88.9484 78.9873C89.1074 79.2742 89.3604 79.3957 89.5774 79.3957H89.6384V79.4656H87.2924V79.3957H87.3574C87.5474 79.3957 87.7544 79.2364 87.6424 78.9536L87.2794 78.0862H85.5524L85.1744 78.9536C85.0534 79.2364 85.2654 79.3963 85.4554 79.3963H85.5214V79.4656H83.9424V79.3957H84.0084C84.2184 79.3957 84.4714 79.2781 84.6274 78.9997L86.3304 75.323C86.3834 75.2164 86.6744 74.6069 86.6934 74.4021H86.7594L88.9484 78.9873Z\" fill=\"#231F20\" />\n<path d=\"M95.0524 77.4135L95.1244 78.624C94.7934 79.1434 94.1674 79.5648 93.0544 79.5648C91.2474 79.5572 90.0674 78.6028 90.0674 76.9977C90.0674 75.4251 91.2054 74.4449 93.0754 74.4449C93.8594 74.4449 94.4894 74.6187 94.9064 74.8264L94.9214 76.0329H94.8604C94.5914 75.1093 93.9594 74.7419 93.1494 74.7419C91.9814 74.7419 91.2674 75.6011 91.2674 76.9826C91.2674 78.3743 91.9584 79.24 93.0544 79.2684C94.1874 79.267 94.7624 78.796 94.9904 77.4135H95.0524Z\" fill=\"#231F20\" />\n<path d=\"M97.2803 74.1061L97.3293 74.1637L98.3793 73.7062L99.5033 74.1637L99.5523 74.1072L98.4243 73.03H98.3423L97.2803 74.1061ZM100.132 79.4656H96.3193L96.3203 79.3957H96.4133C96.6713 79.3957 96.8803 79.1988 96.8853 78.9533V75.0328C96.8693 74.7989 96.6643 74.6133 96.4143 74.6133H96.3214L96.3203 74.543H99.1433C99.4613 74.5405 99.8843 74.4703 100.022 74.4149V75.6449H99.9483V75.5613C99.9493 75.1382 99.6703 74.862 99.2293 74.8438H97.9893V76.8891H98.9653C99.3273 76.8824 99.5913 76.6299 99.5903 76.288V76.2257L99.6623 76.2249V77.8502L99.5903 77.8492V77.7883C99.5913 77.4495 99.3313 77.1973 98.9753 77.1856H97.9893V79.1639H98.9563C99.6913 79.1639 100.169 78.7289 100.398 78.0302H100.47L100.132 79.4656Z\" fill=\"#231F20\" />\n<path d=\"M107.025 74.5432V74.6133H106.904C106.698 74.6133 106.529 74.7524 106.516 74.9458V77.6835C106.516 78.8387 105.722 79.5641 104.396 79.5641C102.82 79.5641 101.997 78.843 101.997 77.6956V74.9621C101.994 74.7597 101.82 74.6133 101.608 74.6133H101.488V74.5432H103.609V74.6133H103.489C103.279 74.6133 103.11 74.7543 103.101 74.951V77.6346C103.101 78.6356 103.65 79.257 104.53 79.257C105.43 79.257 105.99 78.6712 105.993 77.7254V74.9515C105.983 74.7561 105.813 74.6133 105.604 74.6133H105.484V74.5432H107.025Z\" fill=\"#231F20\" />\n<path d=\"M112.617 75.6344L112.543 75.6338V75.5505C112.544 75.122 112.258 74.8438 111.806 74.8326H110.817V78.9585C110.825 79.2009 111.032 79.3957 111.288 79.3957H111.382L111.383 79.4657H109.144L109.146 79.3957H109.239C109.493 79.3957 109.699 79.2043 109.711 78.9656V74.8326H108.721C108.269 74.8438 107.983 75.122 107.984 75.5505V75.6338L107.908 75.6344V74.4088C108.045 74.4643 108.466 74.5332 108.782 74.5368H111.743C112.061 74.5332 112.481 74.4643 112.617 74.4088V75.6344Z\" fill=\"#231F20\" />\n<path d=\"M115.807 79.4656H113.57L113.572 79.3959H113.665C113.922 79.3959 114.132 79.1989 114.136 78.9534V75.0524C114.13 74.8087 113.922 74.6124 113.665 74.6124H113.572L113.57 74.5432H115.807L115.806 74.6124H115.713C115.456 74.6124 115.248 74.8083 115.241 75.0512V78.9534C115.247 79.1989 115.455 79.3959 115.713 79.3959H115.806L115.807 79.4656Z\" fill=\"#231F20\" />\n<path d=\"M121.827 77.4135L121.896 78.624C121.567 79.1434 120.94 79.5648 119.828 79.5648C118.019 79.5572 116.841 78.6028 116.841 76.9977C116.841 75.4251 117.978 74.4449 119.849 74.4449C120.633 74.4449 121.262 74.6187 121.68 74.8264L121.694 76.0329H121.632C121.364 75.1093 120.733 74.7419 119.922 74.7419C118.755 74.7419 118.041 75.6011 118.041 76.9826C118.041 78.3743 118.731 79.24 119.828 79.2684C120.961 79.267 121.534 78.796 121.764 77.4135H121.827Z\" fill=\"#231F20\" />\n<path d=\"M125.813 77.7896L125.093 76.0622L124.338 77.7896H125.813ZM127.606 78.9873C127.765 79.2742 128.018 79.3957 128.235 79.3957H128.296V79.4656H125.95V79.3957H126.014C126.205 79.3957 126.412 79.2364 126.299 78.9536L125.938 78.0862H124.209L123.832 78.9536C123.711 79.2364 123.923 79.3963 124.114 79.3963H124.179V79.4656H122.6V79.3957H122.666C122.875 79.3957 123.129 79.2781 123.286 78.9997L124.989 75.323C125.041 75.2164 125.332 74.6069 125.35 74.4021H125.417L127.606 78.9873Z\" fill=\"#231F20\" />\n<path d=\"M64.0038 0.816997C62.0698 1.77016 60.6418 3.35877 59.9048 5.35585C59.1678 7.30756 59.2598 9.44083 60.1808 11.3018C60.6418 12.255 61.2408 13.072 62.0698 13.7982L62.3458 14.1159C63.5888 15.4776 65.0628 16.7938 66.5368 18.0193C61.1018 17.7924 56.9578 16.6123 56.9578 15.1598C56.9578 14.3882 58.2008 13.7074 60.1808 13.1627C59.1678 13.3897 58.2468 13.6166 57.4638 13.889C55.5298 14.5698 54.6548 15.3414 54.6548 16.3853C54.6548 16.7484 54.7928 17.1116 55.0698 17.4293C55.7138 23.5567 61.0558 28.3679 67.6878 28.6403V36.1294C67.5498 36.1748 67.3658 36.1748 67.2278 36.2202C65.7998 36.3563 64.4178 36.1748 63.4048 35.7209C61.5168 34.8131 60.0428 33.5422 58.9838 31.9082C58.2008 30.6374 57.9708 29.548 57.9248 29.4573C57.9248 29.2757 57.7868 29.1395 57.6488 29.0488C57.6018 29.0488 57.5558 29.0488 57.4638 29.0488C57.2798 29.0488 57.0958 29.1849 57.0038 29.3665C57.0038 29.4573 57.0038 29.548 57.0038 29.6388C57.4178 31.4544 58.0628 33.043 58.9378 34.45C59.6288 35.5393 60.4578 36.5379 61.3788 37.3095C62.6678 38.4442 63.9578 38.9889 64.4178 39.125C65.4778 39.4882 66.5828 39.6697 67.6878 39.7151V41.4399C56.3128 41.1675 47.1938 31.9536 47.1938 20.6973C47.1938 13.9797 50.4178 7.9884 55.4378 4.22115C49.3128 8.26074 45.2598 15.2052 45.2598 23.0575C45.2598 35.5847 55.5758 45.7518 68.2868 45.7518C80.9968 45.7518 91.3128 35.5847 91.3128 23.0575C91.3128 15.2052 87.2608 8.26074 81.1358 4.22115C86.1548 7.9884 89.3788 13.9797 89.3788 20.6973C89.3788 31.8629 80.3988 41.0314 69.1158 41.4399V40.5321L69.1618 39.6697C70.4508 39.5335 71.6948 39.2158 72.8918 38.6258C75.5628 37.3549 77.5888 35.1308 78.5568 32.3621C79.4318 29.775 79.3388 27.0063 78.2798 24.5099C80.0758 22.6036 81.2738 20.1526 81.5498 17.4293C81.8258 17.1116 82.0108 16.7484 82.0108 16.3853C82.0108 15.3868 81.2278 14.6606 79.3858 13.9797C78.6948 13.7074 77.8658 13.4805 76.9448 13.2535C78.6948 13.7982 79.7998 14.4336 79.7998 15.1598C79.7998 16.4761 76.2998 17.6108 71.5098 17.9286C68.8388 16.113 66.9048 14.479 65.6158 13.2989C63.7738 11.5741 62.9448 10.4848 62.8988 10.4848C61.7008 8.57845 62.4378 6.26363 62.4378 6.26363C62.8528 4.99276 63.8198 3.90343 65.1548 3.2226C66.5828 2.54177 68.1948 2.4056 69.6218 2.90488C71.9708 3.72187 73.4448 5.90053 73.3988 8.26074C72.2928 8.48768 71.4638 9.48623 71.4638 10.6664C71.4638 10.8479 71.4638 11.0295 71.5098 11.2564C71.5568 11.3472 71.5568 11.438 71.6028 11.5741L72.4778 14.9783C72.5238 15.2506 72.7538 15.4776 73.0298 15.5683C73.0758 15.1598 73.2598 14.7967 73.3068 14.7513C73.2138 14.9329 73.1678 15.2506 73.1678 15.5683C73.2138 15.9768 73.3068 16.3853 73.7208 16.7031C73.7208 16.7031 73.3528 16.2946 73.3068 15.6137C73.5368 15.5683 73.7668 15.4322 73.9048 15.2506L76.0238 12.3458C76.0698 12.3004 76.1158 12.2096 76.1618 12.1188C76.4838 11.7103 76.6678 11.211 76.6678 10.6664C76.6678 9.80395 76.2078 9.03234 75.4708 8.57845V8.53306C75.6088 7.17141 75.3328 5.76436 74.6878 4.49348C73.7668 2.58716 72.1088 1.13472 70.0828 0.453888C69.2538 0.181553 68.3788 0 67.5038 0C66.3058 0 65.1088 0.272331 64.0038 0.816997ZM74.7798 20.0618C77.5888 19.6079 79.7998 18.7909 80.9968 17.8378C80.3528 18.9725 78.2798 19.971 75.3788 20.5611C75.1948 20.3795 74.9638 20.2434 74.7798 20.0618ZM55.8058 17.8378C57.7868 19.4718 62.6678 20.6065 68.3788 20.6065C68.8388 20.6065 69.2998 20.5611 69.7598 20.5611C70.0368 20.788 70.3128 20.9696 70.5428 21.1511C69.8528 21.1965 69.1158 21.2419 68.3788 21.2419C62.0698 21.2419 56.8198 19.7441 55.8058 17.8378ZM69.1618 28.6403C71.1418 28.5495 72.9838 28.0048 74.6418 27.1878C75.0108 28.7764 74.8718 29.9565 74.8718 29.9565C74.7338 31.0459 74.3658 32.0444 73.7208 32.9068C73.1218 33.7238 72.3388 34.4046 71.3718 34.9493C70.6818 35.3124 69.9448 35.6301 69.1618 35.8571V28.6403Z\" fill=\"url(#paint0_linear_2020_440)\" />\n<defs>\n<linearGradient id=\"paint0_linear_2020_440\" x1=\"45.2598\" y1=\"22.8759\" x2=\"91.3128\" y2=\"22.8759\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#C45386\" />\n<stop offset=\"1\" stop-color=\"#9C0059\" />\n</linearGradient>\n</defs>\n"});

const $$Astro$3 = createAstro("https://farwell.co.ao");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const { description, services, contacts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-secondary text-secondary-foreground py-12"> <div class="container mb-8 grid grid-cols-1 gap-8 md:grid-cols-3"> <div class="space-y-4"> ${renderComponent($$result, "Image", $$Image, { "src": footerLogoImage, "alt": "Farwell", "loading": "lazy", "width": 256, "height": 70 })} <p class="text-sm"> ${description} </p> </div> <div> ${services && services.length > 0 && renderTemplate`<p class="text-background mb-4 font-bold">Serviços</p>
          <ul class="space-y-2 text-sm"> ${services.map((service) => renderTemplate`<li>${service}</li>`)} </ul>`} </div> <div> ${contacts && contacts.length > 0 && renderTemplate`<p class="text-background mb-4 font-bold">Contactos</p>
        <ul class="space-y-2 text-sm"> ${contacts.map(({ value }) => renderTemplate`<li>${value}</li>`)} </ul>`} </div> </div> <div class="border-background/20 text-background/60 container flex items-center justify-center gap-1 border-t pt-8 text-center text-sm"> <p class="max-md:flex-1">© ${year} FARWELL. Feito com</p> ${renderComponent($$result, "Heart", Heart, { "size": 16, "className": "text-primary" })} <p class="max-md:flex-1">para a saúde em Angola.</p> </div> </footer>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/common/footer.astro", void 0);

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    NavigationMenuPrimitive.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": viewport,
      className: cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      ),
      ...props,
      children: [
        children,
        viewport && /* @__PURE__ */ jsx(NavigationMenuViewport, {})
      ]
    }
  );
}
function NavigationMenuList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.List,
    {
      "data-slot": "navigation-menu-list",
      className: cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.Item,
    {
      "data-slot": "navigation-menu-item",
      className: cn("relative", className),
      ...props
    }
  );
}
cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function NavigationMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.Content,
    {
      "data-slot": "navigation-menu-content",
      className: cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-background group-data-[viewport=false]/navigation-menu:text-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuViewport({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ jsx(
        NavigationMenuPrimitive.Viewport,
        {
          "data-slot": "navigation-menu-viewport",
          className: cn(
            "origin-top-center bg-background text-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
            className
          ),
          ...props
        }
      )
    }
  );
}
function NavigationMenuLink({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.Link,
    {
      "data-slot": "navigation-menu-link",
      className: cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}

const ROUTES = [
  {
    text: "Apresentação",
    children: [
      { text: "Quem Somos", href: "/about" },
      { text: "Missão, Visão e Valores", href: "/about#mission" },
      { text: "Politica da Qualidade", href: "/quality-policy" },
      { text: "A Nossa Equipa", href: "/team" },
      { text: "Instalações", href: "/facilities" }
    ]
  },
  {
    text: "Distribuição Farmacêutica",
    href: "/distribution"
  },
  {
    text: "Diagnósticos",
    href: "/diagnostics"
  },
  {
    text: "Contactos",
    href: "/contact"
  }
];

const routes$1 = ROUTES;
function DesktopNavMenu({ pathname }) {
  return /* @__PURE__ */ jsx(NavigationMenu, { className: "hidden lg:block", viewport: false, children: /* @__PURE__ */ jsx(NavigationMenuList, { className: "text-secondary gap-8 text-sm leading-6", children: routes$1.map(
    ({ text, children, href }, index) => children ? /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsxs(
        NavigationMenuTrigger,
        {
          "data-state": "open",
          className: "hover:text-primary/70 flex cursor-pointer items-center",
          children: [
            text,
            " ",
            /* @__PURE__ */ jsx(ChevronDownIcon, { size: 18 })
          ]
        }
      ),
      /* @__PURE__ */ jsx(NavigationMenuContent, { asChild: true, children: /* @__PURE__ */ jsx("ul", { className: "md:w-max", children: children.map(({ text: text2, href: href2 }, index2) => /* @__PURE__ */ jsx(
        NavigationMenuLink,
        {
          className: cn(
            "hover:text-primary/70 w-fit cursor-pointer",
            pathname === href2 && "text-primary"
          ),
          href: href2,
          children: text2
        },
        index2
      )) }) })
    ] }, index) : /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsx(
      NavigationMenuLink,
      {
        className: cn(
          "hover:text-primary/70 cursor-pointer",
          pathname === href && "text-primary"
        ),
        href,
        children: text
      }
    ) }, index)
  ) }) });
}

const buttonVariants = cva(
  "inline-flex items-center justify-center  gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none cursor-pointer disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "px-8 py-2.5 has-[>svg]:px-3",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

function Collapsible({
  ...props
}) {
  return /* @__PURE__ */ jsx(CollapsiblePrimitive.Root, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(
    CollapsiblePrimitive.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      ...props
    }
  );
}
function CollapsibleContent({
  ...props
}) {
  return /* @__PURE__ */ jsx(
    CollapsiblePrimitive.CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      ...props
    }
  );
}

const routes = ROUTES;
function MobileNavMenu({
  pathname,
  catalogUrl,
  clientAreaUrl
}) {
  const sidebarRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (!sidebarRef.current) return;
    sidebarRef.current.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenuOnClick);
    });
    return () => {
      sidebarRef.current?.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("click", closeMenuOnClick);
      });
    };
  }, []);
  const openMenuOnClick = () => {
    if (!sidebarRef.current) return;
    sidebarRef.current.style.height = "calc(100vh - 70px)";
    document.body.style.overflow = "hidden";
    setShowMenu(true);
  };
  const closeMenuOnClick = () => {
    if (!sidebarRef.current) return;
    sidebarRef.current.style.height = "0";
    document.body.style.overflow = "auto";
    setShowMenu(false);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    showMenu ? /* @__PURE__ */ jsx(
      "button",
      {
        "aria-label": "Fechar menu",
        onClick: closeMenuOnClick,
        className: "text-secondary lg:hidden",
        children: /* @__PURE__ */ jsx(XIcon, {})
      }
    ) : /* @__PURE__ */ jsx(
      "button",
      {
        "aria-label": "Abrir menu",
        onClick: openMenuOnClick,
        className: "text-secondary lg:hidden",
        children: /* @__PURE__ */ jsx(MenuIcon, {})
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: sidebarRef,
        className: "bg-background fixed top-[70px] left-0 z-50 h-0 w-screen overflow-x-hidden duration-500",
        children: /* @__PURE__ */ jsxs("div", { className: "relative flex h-full flex-col items-center justify-evenly px-10", children: [
          /* @__PURE__ */ jsx("nav", { className: "self-stretch lg:hidden", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-5 text-center", children: routes.map(
            ({ text, children, href }, index) => !children ? /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href,
                className: pathname === href ? "text-primary" : "",
                children: text
              }
            ) }, index) : /* @__PURE__ */ jsxs(Collapsible, { children: [
              /* @__PURE__ */ jsxs(CollapsibleTrigger, { className: "flex w-full items-center justify-center", children: [
                text,
                " ",
                /* @__PURE__ */ jsx(ChevronDownIcon, { size: 18 })
              ] }),
              /* @__PURE__ */ jsx(CollapsibleContent, { asChild: true, children: /* @__PURE__ */ jsx("ul", { className: "bg-grey-950 space-y-2.5 rounded-xl py-2", children: children.map(({ text: text2, href: href2 }, index2) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: href2,
                  className: pathname === href2 ? "text-primary" : "",
                  children: text2
                }
              ) }, index2)) }) })
            ] }, index)
          ) }) }),
          /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-full max-w-md items-center justify-center gap-2", children: [
            catalogUrl && /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsx(
              "a",
              {
                href: catalogUrl,
                download: true,
                onClick: closeMenuOnClick,
                title: "Ver Catálogo",
                children: "Ver Catálogo"
              }
            ) }),
            clientAreaUrl && /* @__PURE__ */ jsx(Button, { children: /* @__PURE__ */ jsx(
              "a",
              {
                title: "Área de Clientes",
                target: "_blank",
                onClick: closeMenuOnClick,
                href: clientAreaUrl,
                children: "Área de Clientes"
              }
            ) })
          ] })
        ] })
      }
    )
  ] });
}

const $$Astro$2 = createAstro("https://farwell.co.ao");
const $$ButtonLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ButtonLink;
  const { variant = "default", size = "default", ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(cn(buttonVariants({ variant, size }), props.class), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/common/button-link.astro", void 0);

const $$Astro$1 = createAstro("https://farwell.co.ao");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { catalogUrl, clientAreaUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="bg-background fixed top-0 right-0 left-0 z-20 border-b shadow-sm"> <div class="container flex items-center justify-between py-4"> <a href="/" title="Página Inicial" aria-label="Página Inicial"> ${renderComponent($$result, "HeaderLogoSVG", HeaderLogoSVG, { "height": 50 })} </a> ${renderComponent($$result, "DesktopNavMenu", DesktopNavMenu, { "client:visible": true, "pathname": Astro2.url.pathname, "client:component-hydration": "visible", "client:component-path": "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/interactive/desktop-nav-menu", "client:component-export": "default" })} <div> <div class="flex items-center gap-6 text-sm max-lg:hidden"> ${catalogUrl && renderTemplate`${renderComponent($$result, "ButtonLink", $$ButtonLink, { "title": "Ver Cat\xE1logo", "download": true, "target": "_blank", "href": catalogUrl }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BookIcon", BookIcon, {})} <span class="max-xl:hidden">Ver Catálogo</span> ` })}`} ${clientAreaUrl && renderTemplate`${renderComponent($$result, "ButtonLink", $$ButtonLink, { "title": "\xC1rea de Clientes", "target": "_blank", "href": clientAreaUrl }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "UserIcon", UserIcon, {})} <span class="max-xl:hidden">Área de Clientes</span> ` })}`} </div> ${renderComponent($$result, "MobileNavMenu", MobileNavMenu, { "client:visible": true, "pathname": Astro2.url.pathname, "catalogUrl": catalogUrl, "clientAreaUrl": clientAreaUrl, "client:component-hydration": "visible", "client:component-path": "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/interactive/mobile-nav-menu", "client:component-export": "default" })} </div> </div> </header>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/common/header.astro", void 0);

const $$ScrollToTopButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Button", Button, { "id": "scroll-to-top-button", "aria-label": "Navegar para o topo da p\xE1gina", "title": "Navegar para o topo da p\xE1gina", "className": "fixed right-4 bottom-4 size-12 rounded-full p-0 opacity-0 shadow duration-300 lg:hidden" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ChevronUpIcon", ChevronUpIcon, {})} ` })} ${renderScript($$result, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/common/scroll-to-top-button.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/common/scroll-to-top-button.astro", void 0);

const $$Astro = createAstro("https://farwell.co.ao");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    extendedTitle = "Estamos aqui para fazer melhor",
    headerLinks,
    footer
  } = Astro2.props;
  return renderTemplate`<html lang="pt-AO"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><!-- Start Favicon --><link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="shortcut icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><!-- End Favicon --><title>Farwell - ${extendedTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, { "catalogUrl": headerLinks?.catalog, "clientAreaUrl": headerLinks?.clientArea })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "contacts": footer?.contacts ?? [], "description": footer?.description, "services": footer?.services ?? [] })} ${renderComponent($$result, "ScrollToTopButton", $$ScrollToTopButton, {})} </body></html>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/layouts/main-layout.astro", void 0);

export { $$MainLayout as $, Button as B, $$ButtonLink as a, cn as c, sanitizeHTMLFromCMS as s };
