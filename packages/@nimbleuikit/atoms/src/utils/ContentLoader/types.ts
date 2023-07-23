export type LoaderTypes = "image" | "text";

export interface ContentLoaderProps {
  width?: number;
  height?: number;
  backgroundColor?: string;
  foregroundColor?: string;
  type?: LoaderTypes;
  quantity?: number;
}
