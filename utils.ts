interface PlatformData {
  backgroundColor: string;
  logo: string; // Replace 'string' with the actual type for your logo
}

function getPlatformData(platformId: string): PlatformData | null {
  // Check if the platformId exists in the platform object
  if (platform[platformId]) {
    return platform[platformId];
  } else {
    // Return a default value or handle the case when the platformId is not found
    return null; // You can change this to an appropriate default value or error handling
  }
}
