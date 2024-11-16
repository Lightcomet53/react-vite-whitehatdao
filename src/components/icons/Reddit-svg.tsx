import { SVGProps } from "react";

const RedditSvg: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10.0001 19.9995C7.68565 20.0001 5.44234 19.1981 3.65298 17.7302C1.86362 16.2623 0.639263 14.2192 0.187395 11.9493C-0.264472 9.67942 0.0847341 7.32304 1.17552 5.28178C2.2663 3.24052 4.03113 1.64078 6.16931 0.754939C8.3075 -0.130903 10.6862 -0.248 12.901 0.423775C15.1158 1.09555 17.0294 2.51453 18.3152 4.43891C19.601 6.3633 20.1799 8.67402 19.9529 10.9773C19.7259 13.2806 18.7071 15.4341 17.0704 17.0704C16.144 18.0019 15.0424 18.7403 13.8288 19.2431C12.6152 19.7459 11.3137 20.0029 10.0001 19.9995ZM5.27018 8.68139C4.97098 8.69155 4.68456 8.8062 4.46107 9.00539C4.23758 9.20458 4.09118 9.47574 4.0468 9.7718C4.01517 10.0521 4.07479 10.3351 4.2166 10.5789C4.26862 10.6997 4.34427 10.8088 4.43959 10.8995C4.53491 10.9903 4.64771 11.0607 4.77101 11.1067C4.77101 11.1433 4.77101 11.1832 4.77101 11.2256C4.77101 11.2366 4.77101 11.2476 4.77101 11.2586V11.3067C4.72223 11.9516 4.89869 12.5936 5.27018 13.1231C5.6366 13.6229 6.11118 14.0337 6.65826 14.325C7.39454 14.7164 8.19584 14.9703 9.0232 15.074C9.36625 15.1221 9.71198 15.1463 10.0584 15.1466C11.4386 15.1507 12.7887 14.7387 13.9311 13.9642C14.4785 13.6086 14.8853 13.0742 15.0829 12.4521C15.2116 12.0104 15.259 11.549 15.223 11.0903H15.2302C15.3021 11.0668 15.371 11.0326 15.4327 10.9888C15.6196 10.8412 15.765 10.6483 15.8562 10.4282C15.9473 10.2082 15.9812 9.96844 15.9534 9.73191C15.9047 9.44845 15.761 9.18997 15.5462 8.99874C15.3128 8.7967 15.0119 8.68948 14.7034 8.69852C14.5387 8.68756 14.3739 8.71495 14.2216 8.77857C14.0693 8.84218 13.9337 8.94039 13.8257 9.06523C13.1762 8.59264 12.4391 8.2544 11.6572 8.07021C11.2169 7.96201 10.7654 7.90431 10.3121 7.89836H10.2231C10.2214 7.89776 10.2196 7.89776 10.218 7.89836L10.8818 5.03296C10.9153 5.04239 11.1714 5.1099 12.8468 5.47127V5.47613C12.8472 5.47714 12.8472 5.47819 12.8468 5.4792C12.8475 5.48213 12.8475 5.48522 12.8468 5.48815C12.8557 5.62213 12.8982 5.75162 12.9716 5.86407C13.045 5.97652 13.1461 6.0682 13.2652 6.13028C13.3984 6.20547 13.549 6.24453 13.7019 6.24382C13.8581 6.24264 14.0112 6.20159 14.1469 6.1244C14.2826 6.0472 14.3965 5.93653 14.4773 5.80295C14.5496 5.67948 14.5881 5.53919 14.5888 5.39609C14.5878 5.2469 14.5523 5.09984 14.4845 4.96698C14.4225 4.84166 14.3285 4.73488 14.2124 4.65705C14.0962 4.57922 13.9621 4.53323 13.8226 4.52356H13.8114C13.7805 4.52356 13.7472 4.51921 13.7152 4.51921C13.4874 4.51183 13.2659 4.59359 13.0974 4.74706C13.028 4.81033 12.9719 4.88701 12.9327 4.97235C12.9204 4.97053 12.908 4.968 12.8959 4.96494C12.3648 4.84658 11.0416 4.55602 10.8777 4.52407L10.8603 4.51921C10.8015 4.50556 10.7417 4.49755 10.6813 4.49517C10.5614 4.49517 10.4921 4.55529 10.4491 4.69617C10.392 4.87738 10.2424 5.49852 9.91824 6.91101C9.8444 7.21791 9.76665 7.55011 9.68809 7.89734C9.19722 7.90659 8.71007 7.97482 8.23557 8.10089C7.85716 8.20017 7.48811 8.33487 7.13493 8.50315C6.80093 8.65468 6.48735 8.84603 6.19898 9.07265C6.12826 8.99644 6.04737 8.93036 5.9586 8.87625C5.75894 8.74838 5.52671 8.68024 5.28962 8.67986L5.27018 8.68139ZM10.0175 13.7892H9.97143C9.47099 13.7764 8.97709 13.6712 8.51482 13.479C8.26497 13.3804 8.02888 13.2503 7.81209 13.0916C7.78738 13.074 7.76675 13.051 7.75174 13.0246C7.73673 12.9982 7.72768 12.969 7.72514 12.9387C7.72602 12.8815 7.74915 12.8268 7.78959 12.7863C7.80598 12.7693 7.82609 12.7559 7.84789 12.7469C7.8697 12.7379 7.89284 12.7334 7.91643 12.7339C7.96908 12.7357 8.02002 12.754 8.06168 12.7863L8.06782 12.7914L8.07395 12.7963L8.09032 12.8073C8.23467 12.9098 8.38729 13.0002 8.54653 13.0776C8.84145 13.2193 9.15766 13.3118 9.48249 13.3514C9.64882 13.3715 9.81618 13.382 9.98371 13.3829C10.4188 13.3876 10.8503 13.3052 11.2531 13.1407C11.4948 13.0512 11.7224 12.9279 11.9293 12.7743C11.9615 12.7459 12.0029 12.7304 12.0459 12.7308C12.0762 12.7308 12.1059 12.7381 12.1328 12.752C12.1597 12.766 12.1828 12.7861 12.2003 12.8108C12.2173 12.8321 12.2296 12.8568 12.2361 12.8832C12.2426 12.9096 12.2434 12.9371 12.2382 12.9638C12.2314 12.9963 12.2177 13.0272 12.1983 13.0543C12.1789 13.0813 12.1543 13.1041 12.1257 13.121L12.1185 13.1256C11.4971 13.5451 10.7671 13.7757 10.0175 13.7892ZM11.9917 11.6299C11.8124 11.6257 11.6385 11.5686 11.4915 11.466C11.3445 11.3633 11.2308 11.2196 11.1652 11.0527C11.0995 10.8859 11.0846 10.7033 11.1222 10.528C11.1597 10.3526 11.2486 10.1922 11.3769 10.0669C11.5052 9.9416 11.6672 9.85691 11.8433 9.82346C12.0195 9.79 12.2018 9.80939 12.3671 9.87895C12.5323 9.94851 12.6729 10.0654 12.7721 10.2147C12.8713 10.3641 12.9245 10.5392 12.9245 10.7185C12.9218 10.9628 12.8219 11.1961 12.6473 11.367C12.4727 11.5379 12.238 11.6324 11.9937 11.6299H11.9917ZM7.93586 11.6299C7.7566 11.6257 7.58267 11.5686 7.43566 11.466C7.28866 11.3633 7.17505 11.2196 7.10936 11.0527C7.04367 10.8859 7.02885 10.7033 7.0664 10.528C7.10395 10.3526 7.19284 10.1922 7.3211 10.0669C7.44936 9.9416 7.61138 9.85691 7.78754 9.82346C7.9637 9.79 8.146 9.80939 8.31127 9.87895C8.47653 9.94851 8.61712 10.0654 8.71633 10.2147C8.81555 10.3641 8.8687 10.5392 8.86875 10.7185C8.86557 10.963 8.76548 11.1964 8.59052 11.3673C8.41555 11.5381 8.18039 11.6326 7.93586 11.6299Z" fill="#CBD5E1" />
    </svg>

  )
}
export default RedditSvg;