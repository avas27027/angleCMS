import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type scheme = {
  id?: string,
  name: string,
  path: string,
  description?: string,
  icon: string,
  properties?: Record<string, property>,
  subcollections?: Array<scheme>
}

export type property = {
  slug: string,
  name: string,
  description?: string,
  datatype: string,
  url?: string,
  multiline?: boolean,
  storage?: {
    acceptedFiles: Array<string>,
    storagePath: string,
  },
  properties?: Record<string, property>
  of?: {
    datatype: string,
    properties?: Record<string, property>
    url?: string,
    multiline?: boolean,
    storage?: {
      acceptedFiles: Array<string>,
      storagePath: string,
    },
  }
  parent?: property
}