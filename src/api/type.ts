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

export interface GetProductPageDataResponse {
  header: HeaderData;
  products: ProductData[];
  qualityAssurance: QualityAssuranceData;
}

export interface HeaderData {
  title: string;
  description: string;
}

export interface ProductData {
  title: string;
  fields: FieldsWithBulletPointsData;
}

interface FieldsWithBulletPointsData {
  icon: string;
  description: string;
  bulletPoints: {
    description: string;
  }[];
}

export interface QualityAssuranceData {
  title: string;
  description: string;
  keyPoints: {
    icon: string;
    title: string;
    description: string;
  }[];
}
