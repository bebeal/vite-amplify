// See https://github.com/pd4d10/vite-plugin-svgr/issues/123
// Defines the type for .svg?url imports to be a string
declare module '*.svg?url' {
  const src: string;
  export default src;
}
// Defines the type for .svg imports to be React components
declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>> & { title?: string };
  export default ReactComponent;
}
/// <reference types="vite/client" />
