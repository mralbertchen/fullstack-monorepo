import AlgorithmSvg from './svg/AlgorithmSvg';
import AntennaeSvg from './svg/AntennaeSvg';
import AppleSvg from './svg/AppleSvg';
import BackSvg from './svg/BackSvg';
import BodySvg from './svg/BodySvg';
import CheckSvg from './svg/CheckSvg';
import ChevronSvg from './svg/ChevronSvg';
import CloseSvg from './svg/CloseSvg';
import ConnectSvg from './svg/ConnectSvg';
import CreateAccountSvg from './svg/CreateAccountSvg';
import DiscordSvg from './svg/DiscordSvg';
import EarsSvg from './svg/EarsSvg';
import EmailSvg from './svg/EmailSvg';
import EmailOutlineSvg from './svg/EmailOutlineSvg';
import EmissionColorSvg from './svg/EmissionColorSvg';
import EyesSvg from './svg/EyesSvg';
import FacebookSvg from './svg/FacebookSvg';
import GoogleSvg from './svg/GoogleSvg';
import HeadSvg from './svg/HeadSvg';
import HornSvg from './svg/HornSvg';
import InstagramSvg from './svg/InstagramSvg';
import LedgerSvg from './svg/LedgerSvg';
import LockOutlineSvg from './svg/LockOutlineSvg';
import LoginWireframeSvg from './svg/LoginWireframeSvg';
import ManeSvg from './svg/ManeSvg';
import MediumSvg from './svg/MediumSvg';
import ParallaxColorSvg from './svg/ParallaxColorSvg';
import PasteSvg from './svg/PasteSvg';
import PhantomSvg from './svg/PhantomSvg';
import PrimaryColorSvg from './svg/PrimaryColorSvg';
import SecondaryColorSvg from './svg/SecondaryColorSvg';
import SignupSvg from './svg/SignupSvg';
import SlopeSvg from './svg/SlopeSvg';
import SolflareSvg from './svg/SolfareSvg';
import SolletExtensionSvg from './svg/SolletExtensionSvg';
import TailSvg from './svg/TailSvg';
import TattooSvg from './svg/TattooSvg';
import TertiaryColorSvg from './svg/TertiaryColorSvg';
import TorusSvg from './svg/TorusSvg';
import TwitterSvg from './svg/TwitterSvg';
import VerifySvg from './svg/VerifySvg';
import WalletAddressSvg from './svg/WalletAddressSvg';
import WarningSvg from './svg/WarningSvg';
import CornerEyeSvg from './svg/CornerEyeSvg';
import GenopetsLogoSvg from './svg/GenopetsLogoSvg';

export type SvgIconName =
  | 'Algorithm'
  | 'Antennae'
  | 'Apple'
  | 'Back'
  | 'Body'
  | 'Check'
  | 'Chevron'
  | 'Close'
  | 'Connect'
  | 'CornerEye'
  | 'CreateAccount'
  | 'Discord'
  | 'Ears'
  | 'Email'
  | 'EmailOutline'
  | 'EmissionColor'
  | 'Eyes'
  | 'Facebook'
  | 'GenopetsLogo'
  | 'Google'
  | 'Head'
  | 'Horn'
  | 'Instagram'
  | 'Ledger'
  | 'LockOutline'
  | 'LoginWireframe'
  | 'Mane'
  | 'Medium'
  | 'ParallaxColor'
  | 'Paste'
  | 'Phantom'
  | 'PrimaryColor'
  | 'SecondaryColor'
  | 'Signup'
  | 'Slope'
  | 'Solana'
  | 'Sollet'
  | 'Sollet (Extension)'
  | 'Solflare'
  | 'SummonedBy'
  | 'Tail'
  | 'Tattoo'
  | 'TertiaryColor'
  | 'Torus'
  | 'Twitter'
  | 'Verify'
  | 'WalletAddress'
  | 'Warning';

export type SvgIcon = React.FC<Record<string, never>>;
export type SvgIconMap = { [name in SvgIconName]: SvgIcon };

const solanaSvg = () => (
  <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.54265 12.6134C3.64279 12.5132 3.74292 12.4131 3.94319 12.4131H16.7604C16.9607 12.4131 17.0609 12.7135 16.9607 12.8136L14.4573 15.317C14.3572 15.4171 14.2571 15.5173 14.0568 15.5173H1.23955C1.03928 15.5173 0.939149 15.2169 1.03928 15.1167L3.54265 12.6134Z"
      fill="currentColor"
    />
    <path
      d="M3.54265 3.20027C3.64279 3.10013 3.74292 3 3.94319 3H16.7604C16.9607 3 17.0609 3.3004 16.9607 3.40054L14.4573 5.90391C14.3572 6.00404 14.2571 6.10418 14.0568 6.10418H1.23955C1.03928 6.10418 0.939149 5.80377 1.03928 5.70364L3.54265 3.20027Z"
      fill="currentColor"
    />
    <path
      d="M14.3572 7.90584C14.2571 7.8057 14.1569 7.70557 13.9567 7.70557H1.23955C1.03928 7.70557 0.939149 8.00597 1.03928 8.10611L3.54265 10.6095C3.64279 10.7096 3.74292 10.8097 3.94319 10.8097H16.7604C16.9607 10.8097 17.0609 10.5093 16.9607 10.4092L14.3572 7.90584Z"
      fill="currentColor"
    />
  </svg>
);

const svgIcons: SvgIconMap = {
  Algorithm: AlgorithmSvg,
  Antennae: AntennaeSvg,
  Apple: AppleSvg,
  Back: BackSvg,
  Body: BodySvg,
  Check: CheckSvg,
  Chevron: ChevronSvg,
  Close: CloseSvg,
  Connect: ConnectSvg,
  CornerEye: CornerEyeSvg,
  CreateAccount: CreateAccountSvg,
  Discord: DiscordSvg,
  Ears: EarsSvg,
  Email: EmailSvg,
  EmailOutline: EmailOutlineSvg,
  EmissionColor: EmissionColorSvg,
  Eyes: EyesSvg,
  Facebook: FacebookSvg,
  GenopetsLogo: GenopetsLogoSvg,
  Google: GoogleSvg,
  Head: HeadSvg,
  Horn: HornSvg,
  Instagram: InstagramSvg,
  Ledger: LedgerSvg,
  LockOutline: LockOutlineSvg,
  LoginWireframe: LoginWireframeSvg,
  Mane: ManeSvg,
  Medium: MediumSvg,
  ParallaxColor: ParallaxColorSvg,
  Paste: PasteSvg,
  Phantom: PhantomSvg,
  PrimaryColor: PrimaryColorSvg,
  SecondaryColor: SecondaryColorSvg,
  Signup: SignupSvg,
  Slope: SlopeSvg,
  Solana: solanaSvg,
  Solflare: SolflareSvg,
  // sollet wallet icon is intentionally the same as Solana's
  Sollet: solanaSvg,
  'Sollet (Extension)': SolletExtensionSvg,
  SummonedBy: WalletAddressSvg,
  Tail: TailSvg,
  Tattoo: TattooSvg,
  TertiaryColor: TertiaryColorSvg,
  Torus: TorusSvg,
  Twitter: TwitterSvg,
  Verify: VerifySvg,
  WalletAddress: WalletAddressSvg,
  Warning: WarningSvg,
};

export default svgIcons;
