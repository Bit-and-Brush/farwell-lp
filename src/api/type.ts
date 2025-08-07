export interface GetHomePageDataResponse {
  hero: HeroData;
  aboutUs: AboutUsData;
  ourServices: OurServicesData;
  contactUs: ContactUsData;
}

export interface HeroData {
  title: string;
  highlight: string;
  description: string;
  image: string;
  keyValue: KeyValueData[];
}

interface KeyValueData {
  label: string;
  image: string;
}

export interface AboutUsData {
  title: string;
  description: string;
  ourServices: {
    title: string;
    fields: FieldsData;
  }[];
}

interface FieldsData {
  icon: string;
  description: string;
}

export interface OurServicesData {
  title: string;
  description: string;
  services: ServiceData[];
}

interface ServiceData {
  title: string;
  fields: FieldsData;
}

export interface ContactUsData {
  title: string;
  description: string;
  contactUs: ContactData[];
}

interface ContactData {
  title: string;
  fields: {
    icon: boolean;
    value: string;
    title: string;
  };
}
