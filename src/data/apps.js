import resumecraftIcon from '../assets/apps/resumecraft.svg'
import statusflowIcon from '../assets/apps/statusflow-ai.svg'
import qrScannerIcon from '../assets/apps/qr-scanner.svg'

/*
 * To add a new app, copy one of the objects below and update its fields.
 * - icon: put the app icon in src/assets/apps/ and import it above.
 * - playStoreUrl: the official Google Play URL, or null if not published yet.
 *   Cards with a null playStoreUrl show a disabled "Coming Soon" button.
 */
export const apps = [
  {
    id: 'resumecraft',
    name: 'ResumeCraft',
    tagline: 'CV & Resume Maker',
    description:
      'Create professional resumes and CVs quickly with easy-to-use templates and a simple mobile experience.',
    category: 'Productivity',
    icon: resumecraftIcon,
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.resumecraft',
  },
  {
    id: 'statusflow-ai',
    name: 'StatusFlow AI',
    tagline: 'Status Saver',
    description:
      'Save and manage your favorite status media with a simple and convenient mobile experience.',
    category: 'Utilities',
    icon: statusflowIcon,
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ratndevelopers.statusflowai',
  },
  {
    id: 'qr-scanner',
    name: 'QR Scanner',
    tagline: 'QR & Barcode Scanner',
    description: 'Fast and simple QR and barcode scanning for everyday use.',
    category: 'Utilities',
    icon: qrScannerIcon,
    // TODO: add the Google Play URL once QR Scanner is published.
    playStoreUrl: null,
  },
]

export const publishedApps = apps.filter((app) => app.playStoreUrl)
