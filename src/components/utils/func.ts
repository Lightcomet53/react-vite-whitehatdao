export const linkOtherSite = (url: string) => {
  window.href = url;
}
export const getStepColor = (step: string) => {
  if (step === "Live") return "bg-greenColor";
  else if (step === "Upcoming") return "bg-orange-500";
  else return "bg-purple-500";
}