export interface CertificateType {
  id: number;
  image: string;
  title: string;
  width: number;
  height: number;
}

export const CertificateData: CertificateType[] = [
  {
    id: 1,
    title: "Responsive Web Design Certificate",
    image: "web_design.webp",
    width: 696,
    height: 463,
  },

  {
    id: 2,
    title: "JavaScript Algorithms and Data Structures Certificate",
    image: "javascript.webp",
    width: 696,
    height: 463,
  },
];
