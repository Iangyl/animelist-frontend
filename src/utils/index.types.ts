export type UnitOfDigitalInformation = 'b' | 'kb' | 'mb' | 'gb' | 'tb';

export interface UnitForConvert {
  unitType: UnitOfDigitalInformation;
  value: string | number;
}
