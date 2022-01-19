import React from 'react';

export type IconType = {
  viewBox: string;
  paths: JSX.Element;
};

export type IconName =
  | 'link'
  | 'next'
  | 'back'
  | 'sound-off'
  | 'sound-on'
  | 'wallet'
  | 'phantom'
  | 'twitter';

export type IconMap = { [name in IconName]: IconType };

export const icons: IconMap = {
  link: {
    viewBox: `0 0 16 15`,
    paths: (
      <path d="M6.664 4.569c.811 0 1.592.296 2.199.827l.16.15.716.715a.337.337 0 01-.417.526l-.06-.048-.715-.715a2.662 2.662 0 00-3.625-.13l-.14.13-2.274 2.273a3.143 3.143 0 004.3 4.581l.145-.136.665-.666a.338.338 0 01.526.416l-.048.061-.666.666a3.818 3.818 0 01-5.548-5.242l.149-.157 2.273-2.273a3.337 3.337 0 012.36-.978zm7.305-2.538a3.818 3.818 0 01.15 5.242l-.15.157-2.273 2.273a3.337 3.337 0 01-4.559.151l-.16-.15-.716-.715a.338.338 0 01.417-.526l.06.048.715.715a2.662 2.662 0 003.625.13l.14-.13 2.274-2.273a3.143 3.143 0 00-4.3-4.581l-.145.136-.665.666a.338.338 0 01-.526-.416l.048-.061.666-.666a3.818 3.818 0 015.4 0z" />
    ),
  },
  next: {
    viewBox: `0 0 14 16`,
    paths: (
      <>
        <path d="M13.169 7.708l-12-6.924a.338.338 0 00-.507.293v13.846c0 .26.282.422.507.293l12-6.924a.337.337 0 000-.584zM12.325 8L1.338 14.338V1.661L12.325 8z" />
        <path d="M5.174 7.708c.138.08.199.243.154.39l-.03.071-4.006 6.923a.337.337 0 01-.615-.267l.03-.072 4.006-6.922a.337.337 0 01.461-.123z" />
        <path d="M13.5 7.838c0 .163-.116.299-.27.33l-.068.007H5.167a.338.338 0 01-.068-.668l.068-.007h7.995c.187 0 .338.151.338.338z" />
        <path d="M5.295 7.828a.337.337 0 01-.533.406l-.047-.062L.71 1.422a.337.337 0 01.533-.406l.047.062 4.005 6.75z" />
      </>
    ),
  },
  back: {
    viewBox: `0 0 14 16`,
    paths: (
      <>
        <path d="M.994 7.708l12-6.924a.338.338 0 01.506.293v13.846c0 .26-.281.422-.506.293l-12-6.924a.337.337 0 010-.584zM1.837 8l10.987 6.338V1.661L1.837 8z" />
        <path d="M8.988 7.708a.338.338 0 00-.154.39l.031.071 4.005 6.923a.337.337 0 00.616-.267l-.031-.072L9.45 7.831a.337.337 0 00-.462-.123z" />
        <path d="M.662 7.837c0 .164.116.3.27.331L1 8.175h7.995a.338.338 0 00.068-.668L8.995 7.5H1a.338.338 0 00-.338.337z" />
        <path d="M8.867 7.828a.338.338 0 00.534.406l.047-.062 4.005-6.75a.337.337 0 00-.534-.406l-.047.062-4.005 6.75z" />
      </>
    ),
  },
  'sound-off': {
    viewBox: `0 0 15 12`,
    paths: (
      <path d="M7.957 1.4l.006.113v8.973c0 .888-.996 1.387-1.7.9l-.09-.07-2.891-2.448H1.625c-.56 0-1.022-.424-1.081-.968L.538 7.78V4.22c0-.56.424-1.022.969-1.081l.118-.007h1.657L6.171.683C6.85.11 7.872.546 7.957 1.4zm-1.284-.247l-.064.045-2.985 2.528-.011.01a.338.338 0 01-.037.025l.048-.035a.338.338 0 01-.15.073l-.03.005a.339.339 0 01-.029.002h-1.79c-.2 0-.366.142-.404.33l-.009.083V7.78c0 .2.142.366.33.404l.083.009h1.79l.03.001-.039-.001a.339.339 0 01.114.019l.023.01a.108.108 0 01.017.007l.022.013.03.02.012.01 2.985 2.528c.247.21.616.064.671-.236l.007-.079V1.513a.412.412 0 00-.614-.36zm4.565 2.827l.06.049 1.45 1.448 1.448-1.448a.337.337 0 01.526.416l-.048.061-1.448 1.449 1.448 1.449a.337.337 0 01-.417.526l-.06-.049-1.45-1.448L11.3 7.88a.337.337 0 01-.526-.416l.048-.061 1.449-1.45-1.449-1.448a.337.337 0 01.417-.526z" />
    ),
  },
  'sound-on': {
    viewBox: `0 0 16 12`,
    paths: (
      <path d="M6.172.683l-2.89 2.448H1.625c-.6 0-1.087.487-1.087 1.088V7.78l.006.119c.059.544.52.969 1.081.969l1.657-.001 2.89 2.449c.707.6 1.79.097 1.79-.83V1.513c0-.927-1.084-1.43-1.79-.83zm1.115.83v8.974c0 .352-.41.542-.678.315L3.624 8.274a.338.338 0 00-.218-.08H1.625a.413.413 0 01-.413-.413V4.22c0-.228.185-.413.413-.413h1.781c.08 0 .157-.028.218-.08L6.61 1.198a.412.412 0 01.678.315zm3.08 1.324a.337.337 0 01.465-.106c.999.628 1.63 1.882 1.63 3.273 0 1.392-.633 2.646-1.631 3.266a.338.338 0 01-.356-.573c.79-.492 1.313-1.525 1.313-2.693 0-1.168-.522-2.203-1.315-2.702a.338.338 0 01-.106-.465zM12.62.482a.338.338 0 01.476-.036c1.476 1.266 2.367 3.32 2.367 5.556 0 2.233-.89 4.286-2.363 5.553a.337.337 0 11-.44-.512c1.32-1.135 2.128-3 2.128-5.04 0-2.044-.81-3.91-2.132-5.045a.338.338 0 01-.036-.476z" />
    ),
  },
  wallet: {
    viewBox: `0 0 17 13`,
    paths: (
      <path d="M12.63.84l1.307.01c.542.013.963.43.976.98.007.321 0 .646 0 .97v2.306h.622c.274.007.461.197.468.474.004.185.006.37.006.556l-.006 1.114v.805c0 .04.003.084 0 .125a.457.457 0 01-.441.446l.023-.004-.02.004h-.652v.64c0 .588.008 1.178.008 1.767l-.008.883a.982.982 0 01-.973.987c-.127.004-.25 0-.377 0H2.492c-.448 0-.893.004-1.34 0-.522-.006-.963-.388-.994-.926-.006-.125 0-.257 0-.382V6.087c0-1.42-.036-2.843 0-4.264A.982.982 0 011.145.85h8.871L12.63.84zm-10.767.347h-.692c-.37 0-.672.248-.682.636-.003.129 0 .257 0 .386v5.454c0 1.416-.036 2.84 0 4.257.007.385.305.635.676.639h8.784c1.32 0 2.638.01 3.958 0 .374-.004.665-.268.669-.656.003-.342 0-.68 0-1.021V8.626h-2.544c-.424 0-.843.024-1.242-.13l-.169-.076c-.839-.446-1.16-1.532-.722-2.377.207-.402.575-.71 1.003-.852.217-.07.441-.084.665-.084h3.011v-.592l.003-1.329-.002-1.329c-.003-.389-.278-.666-.659-.67H2.555c-.461 0-.922-.003-1.384 0zm13.692 4.258c-.124-.017-.257 0-.381 0h-.397a.193.193 0 01-.062 0H12.54c-.364 0-.729-.004-1.093 0-.82.01-1.471.706-1.41 1.538.053.764.708 1.302 1.44 1.305h4.085l.049-.012c.052-.027.056-.092.061-.157.01-.534 0-1.072 0-1.606v-.778c0-.115.033-.27-.117-.29zm-4.743.992c.316 0 .547.256.563.563a.572.572 0 01-.563.563A.57.57 0 0110.25 7a.57.57 0 01.562-.563zM11.06 7c-.016-.316-.496-.322-.496 0s.48.316.496 0z" />
    ),
  },
  phantom: {
    viewBox: `0 0 128 106`,
    paths: (
      <path d="M120.471 52.0091H106.139C106.139 23.2846 82.3791 0 53.0684 0C24.1204 0 0.585366 22.7145 0.0093645 50.9471C-0.586549 80.1302 27.3517 105.472 57.1345 105.472H60.8807C87.1378 105.472 122.331 85.329 127.829 60.7858C128.845 56.2616 125.198 52.0091 120.471 52.0091ZM31.7705 53.2886C31.7705 57.1299 28.5648 60.2715 24.6452 60.2715C20.7255 60.2715 17.5198 57.1285 17.5198 53.2886V41.992C17.5198 38.1507 20.7255 35.0091 24.6452 35.0091C28.5648 35.0091 31.7705 38.1507 31.7705 41.992V53.2886ZM56.513 53.2886C56.513 57.1299 53.3073 60.2715 49.3877 60.2715C45.468 60.2715 42.2623 57.1285 42.2623 53.2886V41.992C42.2623 38.1507 45.4694 35.0091 49.3877 35.0091C53.3073 35.0091 56.513 38.1507 56.513 41.992V53.2886Z" />
    ),
  },
  twitter: {
    viewBox: `0 0 32 32`,
    paths: (
      <path d="M26.791 9.308a9.259 9.259 0 01-2.549.699 4.405 4.405 0 001.947-2.446c-.855.51-1.799.87-2.806 1.071a4.423 4.423 0 00-7.654 3.026c0 .351.03.688.102 1.009-3.678-.179-6.933-1.942-9.12-4.628a4.45 4.45 0 00-.606 2.237c0 1.532.789 2.891 1.965 3.677a4.377 4.377 0 01-1.999-.545v.049a4.446 4.446 0 003.545 4.348c-.36.099-.753.146-1.16.146-.283 0-.569-.016-.838-.076.573 1.752 2.2 3.04 4.134 3.082a8.888 8.888 0 01-5.486 1.887 8.2 8.2 0 01-1.059-.061 12.457 12.457 0 006.788 1.986c8.142 0 12.593-6.745 12.593-12.591 0-.196-.007-.384-.016-.572a8.844 8.844 0 002.218-2.297z" />
    ),
  },
};
