export const useCurrentCoordinates = () => {
  const getCurrentPosition = async (): Promise<GeolocationPosition> => {
    return new Promise<GeolocationPosition>((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported by this browser."));
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => resolve(position),
        (error: GeolocationPositionError) => reject(error)
      );
    });
  };

  const getCurrentCoordinates = async () => {
    try {
      const {
        coords: { latitude, longitude },
      } = await getCurrentPosition();
      return { latitude, longitude };
    } catch (error) {
      console.error("Error getting coordinates:", error);
    }
  };

  return { getCurrentCoordinates };
};
