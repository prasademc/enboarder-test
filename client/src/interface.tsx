/**
 * All the interfaces
 */

export interface IState {
  capsules: Array<Capsule>;
  landingpad: object;
}

export interface IAction {
  type: string;
  capload: any;
  landingpad: any;
}

export interface Capsule {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch: null;
  original_launch_unix: null;
  missions: Array<any>;
  landings: number;
  type: string;
  details: string;
  reuse_count: number;
}

export interface LandingPad {
  id: string;
  full_name: string;
  status: string;
  location: {
    name: string;
    region: string;
    latitude: string;
    longitude: string;
  };
}
