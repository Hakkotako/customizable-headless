export type ServiceData = {
  title: string;
  text: string; // \n til linjeskift
};

const servicesDummy: ServiceData[] = [
  {
    title: "Architecture",
    text: "• Scalable site design\n• Secure system integration\n• Multi-site architecture"
  },
  {
    title: "Development",
    text: "• Headless Sitecore builds\n• Custom module development\n• API integrations\n• DevOps automation"
  },
  {
    title: "Creative",
    text: "• UX-first design\n• Responsive interfaces\n• Visual brand alignment\n• Accessibility focus"
  },
  {
    title: "Innovation",
    text: "• AI-driven personalization\n• Composable DXP solutions\n• Emerging tech pilots"
  }
];

export default servicesDummy;
