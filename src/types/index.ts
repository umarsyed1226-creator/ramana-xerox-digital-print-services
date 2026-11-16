export type Language = 'en' | 'ta';

export interface PrintItemPricing {
  id: string;
  name: string;
  nameTa: string;
  paperSize: 'A4' | 'A3' | 'Legal' | 'Photo-4x6' | 'Photo-A4';
  paperGsm: '75 GSM' | '85 GSM' | '100 GSM Bond' | '220 GSM Glossy';
  bwSingle: number;
  bwDouble: number;
  colorSingle: number;
  colorDouble: number;
}

export interface BindingOption {
  id: string;
  name: string;
  nameTa: string;
  price: number;
  description: string;
}

export interface LaminationOption {
  id: string;
  name: string;
  nameTa: string;
  price: number;
}

export interface OrderItem {
  id: string;
  token: string;
  fileName: string;
  fileSize: string;
  pageCount: number;
  copies: number;
  paperType: string;
  printMode: 'bw' | 'color';
  sides: 'single' | 'double';
  binding: string;
  lamination: string;
  customerName: string;
  phone: string;
  notes?: string;
  pickupTime: string;
  estimatedCost: number;
  status: 'Ready for Print' | 'Printing' | 'Completed';
  createdAt: string;
}
