import "source-map-support/register"; // registering node-source-map-support for typescript stack traces
import './lib/definitions'; // must be loaded before Characteristic and Service class
import * as accessoryLoader from './lib/AccessoryLoader';
import * as uuidFunctions from './lib/util/uuid';
import * as legacyTypes from './accessories/types';

export const AccessoryLoader = accessoryLoader;
export const uuid = uuidFunctions;

export * from './lib/model/HAPStorage';
export * from './lib/Accessory';
export * from './lib/Bridge';
export * from './lib/Service';
export * from './lib/Characteristic';
export * from './lib/AccessoryLoader';
export * from './lib/camera';
export * from './lib/tv/AccessControlManagement';
export * from './lib/HAPServer';
export * from './lib/datastream';
export * from './lib/controller';

export * from './lib/util/clone';
export * from './lib/util/once';
export * from './lib/util/tlv';
export * from './lib/util/hapStatusError';
export * from './lib/util/color-utils';
export * from './lib/util/time';

export * from './types';
export const LegacyTypes = legacyTypes;

function printInit() {
  const packageJson = require("../package.json");
  console.log("Initializing HAP-NodeJS v" + packageJson.version + "...");
}
printInit()
