import axiosInstance from "../axios";

export async function getGlobalSetting() {
  try {
    const res = await axiosInstance("/global-settings/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch global settings: ${error}`);
  }
}

export async function getHomePage() {
  try {
    const res = await axiosInstance("/homePage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch home page: ${error}`);
  }
}

export async function getTalentPage() {
  try {
    const res = await axiosInstance("/talentPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch talent page: ${error}`);
  }
}


export async function getLifeAtEvereadyPage() {
  try {
    const res = await axiosInstance("/lifeAtEvereadyPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Life At Eveready page: ${error}`);
  }
}



export async function getManufacturingPage() {
  try {
    const res = await axiosInstance("/manufacturingPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Manufacturing page: ${error}`);
  }
}


export async function getContactUsPage() {
  try {
    const res = await axiosInstance("/contactUsPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Contact Us page: ${error}`);
  }
}

export async function getInvestorPage() {
  try {
    const res = await axiosInstance("/investorsPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Investor page: ${error}`);
  }
}


export async function getInvestorInformationPage() {
  try {
    const res = await axiosInstance("/investorsInformationPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Investor Information page: ${error}`);
  }
}


export async function subscribeNewsletter({ email }: { email: string }) {
  try {
    const res = await axiosInstance("/newsletters/add", {
      method: "POST",
      data: JSON.stringify({ email }),
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return {
      status: true,
      data: res?.data?.message,
    };
  } catch (error: any) {
    if (error?.response?.data?.message == "Value must be unique") {
      return {
        status: false,
        message: "You have already subscribed to our newsletter.",
      };
    } else {
      return {
        status: false,
        message: error?.response?.data?.message,
      };
    }
  }
}

export async function getBatteriesPage() {
  try {
    const res = await axiosInstance("/batteriesPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch batteries page: ${error}`);
  }
}

export async function getLightingPage() {
  try {
    const res = await axiosInstance("/lightingPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch lighting page: ${error}`);
  }
}

export async function getFlashlightPage() {
  try {
    const res = await axiosInstance("/flashlightPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Flashlight page: ${error}`);

  }
}

// Flashlight Sub Pages


export async function getBatteryOperatedTorchesPage() {
  try {
    const res = await axiosInstance("/batteryOperatedTorchesPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Battery Operated Torches page: ${error}`);

  }
}

export async function getPowerCellBatteryOperatedTorchesPage() {
  try {
    const res = await axiosInstance("/powercellBatteryOperatedTorchesPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Powercell Battery Operated Torches page: ${error}`);

  }
}


export async function getRechargeableTorchesPage() {
  try {
    const res = await axiosInstance("/rechargeableTorchesPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Rechargeable Torches page: ${error}`);

  }
}



export async function getHeadlampPage() {
  try {
    const res = await axiosInstance("/headlampsPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Headlamp page: ${error}`);

  }
}



export async function getRechargeableLanternPage() {
  try {
    const res = await axiosInstance("/rechargeableLanternPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Rechargeable Lantern page: ${error}`);

  }
}


export async function getLightingProducts({ params }: { params: string }) {
  try {
    const res = await axiosInstance(`/lighting-products/filter?${params}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Lighting Products: ${error}`);
  }
}

export async function getHomeElectricalProducts({ params }: { params: string }) {
  try {
    const res = await axiosInstance(`/home-electricals-products/filter?${params}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Home Electricals Products: ${error}`);
  }
}

export async function getFlashlightProducts({ params }: { params: string }) {
  try {
    const res = await axiosInstance(`/flashlight-products/filter?${params}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Flashlight products: ${error}`);
  }
}

export async function getBatteryProducts({ params }: { params: string }) {
  try {
    const res = await axiosInstance(`/battery-products/filter?${params}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Battery products: ${error}`);
  }
}
// Product Details
// Battery Product Details
export async function getBatteryProductsDetails({ params }: { params: string }) {
  try {
    const res = await axiosInstance(`/battery-products/details?${params}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Battery product Details: ${error}`);
  }
}

// Flashlight Product Details
export async function getFlashlightProductsDetails({ params }: { params: string }) {
  try {
    const res = await axiosInstance(`/flashlight-products/details?${params}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Flashlight product Details: ${error}`);
  }
}
// Lighting Product Details
export async function getLightingProductsDetails({ params }: { params: string }) {
  try {
    const res = await axiosInstance(`/lighting-products/details?${params}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Lighting product Details: ${error}`);
  }
}

// Mobile Accessories Product Details
export async function getMobileAccessoriesProductsDetails({ params }: { params: string }) {
  try {
    const res = await axiosInstance(`/mobile-accessories-products/details?${params}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Lighting product Details: ${error}`);
  }
}

// Appliances & Accessories Product Details
export async function getAppliancesAccessoriesProductsDetails({ params }: { params: string }) {
  try {
    const res = await axiosInstance(`/applicances-accessories-products/details?${params}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Appliances & Accessories product Details: ${error}`);
  }
}

// Home Electricals Product Details
export async function getHomeElectricalsProductsDetails({ params }: { params: string }) {
  try {
    const res = await axiosInstance(`/home-electricals-products/details?${params}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Home Electricals product Details: ${error}`);
  }
}

// Mosquito Racquet Product Details
export async function getMosquitoRacquetProductsDetails({ params }: { params: string }) {
  try {
    const res = await axiosInstance(`/mosquitoRacquet-products/details?${params}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Home Electricals product Details: ${error}`);
  }
}


export async function getMobileAccessoriesProducts({
  params,
}: {
  params: string;
}) {
  try {
    const res = await axiosInstance(
      `/mobile-accessories-products/filter?${params}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_KEY}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Mobile Accessories Products: ${error}`);
  }
}


export async function getSeoSettings(params: { slug: string }) {
  try {
    const res = await axiosInstance("/seo/filter", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
      params: params,
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch SEO settings: ${error}`);
  }
}

export async function getConsumerLightingPage() {
  try {
    const res = await axiosInstance("/consumerLightingPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Consumer Lighting Page: ${error}`);
  }
}

export async function getProfessionalLightingPage() {
  try {
    const res = await axiosInstance("/professionalLightingPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Consumer Lighting Page: ${error}`);
  }
}
export async function getMobileAccessoriesPage() {
  try {
    const res = await axiosInstance("/mobileAccessoriesPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Mobile Accessories Page: ${error}`);
  }
}

export async function getMosquitoRacquetPage() {
  try {
    const res = await axiosInstance("/mosquitoRacquetPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data
  } catch (error: any) {
    throw new Error(`Failed to fetch Mosquio Racquet Page: ${error}`);
  }
}


// Battery Sub Page API's

// Carbon Zinc Batteries
export async function getBatteryCarbonZincPage() {
  try {
    const res = await axiosInstance("/carbonZincPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Ultimate Alkaline Page: ${error}`);
  }
}

// Coin Batteries Page
export async function getCoinBatteriesPage() {
  try {
    const res = await axiosInstance("/coinBatteryPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Ultimate Alkaline Page: ${error}`);
  }
}

// Ultima Coin Batteries Page
export async function getUltimaCoinBatteryPage() {
  try {
    const res = await axiosInstance("/ultimaCoinBatteryPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Ultimate Coin Battery Page: ${error}`);
  }
}


// Ultima Pro Coin Batteries Page
export async function getUltimaProCoinBatteryPage() {
  try {
    const res = await axiosInstance("/ultimaProCoinBatteryPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Ultimata pro Coin Battery Page: ${error}`);
  }
}

// Rechargeable Batteries
export async function getRechargeableBatteriesPage() {
  try {
    const res = await axiosInstance("/rechargeableBatteryPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Ultimate Alkaline Page: ${error}`);
  }
}

// Eveready Rechargeable Batteries Page
export async function getEvereadyRechargeableBatteriesPage() {
  try {
    const res = await axiosInstance("/evereadyRechargeableBatteryPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Ultimate Alkaline Page: ${error}`);
  }
}

// Eveready Ultima Rechargeable Batteries Page
export async function getEvereadyUltimaRechargeableBatteriesPage() {
  try {
    const res = await axiosInstance("/evereadyUltimaRechargeableBatteryPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Ultimate Alkaline Page: ${error}`);
  }
}

// Ultima Alkaline Page
export async function getUltimaAlkalinePage() {
  try {
    const res = await axiosInstance("/ultimaAlkalinePage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Ultimate Alkaline Page: ${error}`);
  }
}

// Ultima Alkaline Sub Page
export async function getUltimaAlkalineSubPage() {
  try {
    const res = await axiosInstance("/ultimaAlkalineSubPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Ultimate Alkaline Sub Page: ${error}`);
  }
}

// Ultima Alkaline Sub Page
export async function getUltimaProAlkalinePage() {
  try {
    const res = await axiosInstance("/ultimaProAlkalineSubPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Ultimate Pro Alkaline Sub Page: ${error}`);
  }
}



// Powecell Carbon Zinc Batteries
export async function getPowercellCarbonZincBatteriesPage() {
  try {
    const res = await axiosInstance("/powercellBatteryPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Ultimate Alkaline Page: ${error}`);
  }
}

// Shakti Carbon Zinc Batteries
export async function getShaktiCarbonZincBatteriesPage() {
  try {
    const res = await axiosInstance("/shaktiBatteryPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Ultimate Alkaline Page: ${error}`);
  }
}

// Uniross Batteries
export async function getBatteryUnirossPage() {
  try {
    const res = await axiosInstance("/unirossBatteryPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Ultimate Alkaline Page: ${error}`);
  }
}

// Uniross Alkaline Batteries

export async function getUnirossAlkalinePage() {
  try {
    const res = await axiosInstance("/unirossAlkalinePage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Ultimate Alkaline Page: ${error}`);
  }
}


// Uniross Rechargeable Batteries

export async function getUnirossRechargeablePage() {
  try {
    const res = await axiosInstance("/unirossRechargeablePage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Ultimate Rechargeable Page: ${error}`);
  }
}


export async function getAboutuspage() {
  try {
    const res = await axiosInstance("/aboutUsPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch About Us Page: ${error}`);
  }
}

// Powering Process Api

export async function getPoweringProcesspage() {
  try {
    const res = await axiosInstance("/poweringProcessPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Powering Process About Us Page: ${error}`);
  }
}
// board of director

export async function getBoardOfDirectorsPage() {
  try {
    const res = await axiosInstance("/boardOfDirectorsPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Board Of Director Page: ${error}`);
  }
}


export async function getLeaderShipAtEvereadyPage() {
  try {
    const res = await axiosInstance("/leadershipAtEvereadyPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Board Of Director Page: ${error}`);
  }
}


export async function getInnovationPage() {
  try {
    const res = await axiosInstance("/innovationPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Innovation Page: ${error}`);
  }
}

export async function getSustainabilityPage() {
  try {
    const res = await axiosInstance("/sustainabilityPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Sustainability Page: ${error}`);
  }
}


// Lighting Page - Consumer Lighting - Sub Pages Url

export async function getConsumerLightingLedBulbPage() {
  try {
    const res = await axiosInstance("/ledBulb/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Consumer Lighting Led Bulb Page: ${error}`);
  }
}

export async function getConsumerArchitecturalRangePage() {
  try {
    const res = await axiosInstance("/architecturalRange/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Consumer Architectural Range Page: ${error}`);
  }
}



export async function getConsumerDecorativeLightingPage() {
  try {
    const res = await axiosInstance("/decorativeLighting/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Consumer Decorative Lighting Page: ${error}`);
  }
}

export async function getConsumerDownlightsPage() {
  try {
    const res = await axiosInstance("/downlights/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Consumer Down Lighting Page: ${error}`);
  }
}

export async function getConsumerEmergencyRangePage() {
  try {
    const res = await axiosInstance("/emergencyRange/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Consumer Emergency Lighting Page: ${error}`);
  }
}

export async function getConsumerFestiveRangePage() {
  try {
    const res = await axiosInstance("/festiveRange/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Consumer Festive Lighting Page: ${error}`);
  }
}

export async function getConsumerLedBattenPage() {
  try {
    const res = await axiosInstance("/ledBatten/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Consumer Led Batten Page: ${error}`);
  }
}

export async function getConsumerLedPanelsPage() {
  try {
    const res = await axiosInstance("/ledPanels/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Consumer Led Panels Page: ${error}`);
  }
}

export async function getConsumerMotionSensorRangePage() {
  try {
    const res = await axiosInstance("/motionSensorRange/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Consumer Motion Sensor Range Page: ${error}`);
  }
}



export async function getConsumerOutdoorLightingPage() {
  try {
    const res = await axiosInstance("/outdoorLighting/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Consumer Motion Sensor Range Page: ${error}`);
  }
}

// Professional Lighting  Sub Page Api's



export async function getProfessionalCommercialLightingPage() {
  try {
    const res = await axiosInstance("/commercial/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Professional Commercial Lighting Page: ${error}`);
  }
}

export async function getProfessionalFacadeLightingPage() {
  try {
    const res = await axiosInstance("/facade/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Professional Facade Lighting Page: ${error}`);
  }
}

export async function getProfessionalFloodLightingPage() {
  try {
    const res = await axiosInstance("/flood/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Professional Flood Lighting Page: ${error}`);
  }
}

export async function getProfessionalIndoorArchitecturalLightingPage() {
  try {
    const res = await axiosInstance("/indoorArchitectural/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Professional Indoor Architectural Lighting Page: ${error}`);
  }
}

export async function getProfessionalIndustrialLightingPage() {
  try {
    const res = await axiosInstance("/industrial/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Professional Industrial Lighting Page: ${error}`);
  }
}

export async function getProfessionalOutdoorArchitecturalLightingPage() {
  try {
    const res = await axiosInstance("/outdoorArchitectural/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Professional Outdoor Architetural Lighting Page: ${error}`);
  }
}


export async function getProfessionalOutdoorLightingPage() {
  try {
    const res = await axiosInstance("/outdoorProfessionalLighting/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Professional Outdoor Lighting Page: ${error}`);
  }
}


export async function getPresencePage() {
  try {
    const res = await axiosInstance("/presencePage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Presence Page: ${error}`);
  }
}

export async function getNewsPage() {
  try {
    const res = await axiosInstance("/newsPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch News List Page: ${error}`);
  }
}


export async function searchNews({ params }: { params: string }) {
  try {
    const res = await axiosInstance(`/inTheNews/find?${params}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Data From News: ${error}`);
  }
}


export async function searchPress({ params }: { params: string }) {
  try {
    const res = await axiosInstance(`/pressReleases/find?${params}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch News Data From Press Releases: ${error}`);
  }
}

export async function getMediaGalleryPage() {
  try {
    const res = await axiosInstance("/mediaGalleryPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Media Gallery Page: ${error}`);
  }
}


// Sustainability Sub Pages

// Project Durga Page 

export async function getProjectDurgaPage() {
  try {
    const res = await axiosInstance("/projectDurga/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Project Durga Page: ${error}`);
  }
}

// Project Sushasthya


export async function getProjectSushasthyaPage() {
  try {
    const res = await axiosInstance("/projectSushasthya/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Project Sushasthya Page: ${error}`);
  }
}


export async function getProjectGoGreenPage() {
  try {
    const res = await axiosInstance("/projectGoGreen/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Project GoGreen Page: ${error}`);
  }
}


export async function getProjectSakshamPage() {
  try {
    const res = await axiosInstance("/projectSaksham/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Project Saksham Page: ${error}`);
  }
}

// Mobile Accessories Sub Pages


export async function getMobileAccessoriesChargerPage() {
  try {
    const res = await axiosInstance("/chargerPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Mobile Accessories Charger Page: ${error}`);
  }
}



export async function getMobileAccessoriesChargingCablesPage() {
  try {
    const res = await axiosInstance("/chargingCablesPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Mobile Accessories Charging Cables Page: ${error}`);
  }
}


export async function getMobileAccessoriesPowerBanksPage() {
  try {
    const res = await axiosInstance("/powerBanksPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Mobile Accessories Power Bank Page: ${error}`);
  }
}

// Get Home Electrical pages


export async function getHomeElectricalPage() {
  try {
    const res = await axiosInstance("/homeElectriacalsPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Home Electrical Page: ${error}`);
  }
}

// Get Home Electrical Sub Pages 


export async function getHomeElectricalSwitchGearSubPage() {
  try {
    const res = await axiosInstance("/switchGear/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Home Electrical Switch Gear Sub Page: ${error}`);
  }
}


export async function getHomeElectricalWiresSubPage() {
  try {
    const res = await axiosInstance("/wires/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Home Electrical Wires Sub Page: ${error}`);
  }
}


// Appliances & Accessories Pages Api

export async function getApplianceAccessoriesPage() {
  try {
    const res = await axiosInstance("/applicancesAccessoriesPage/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Appliances & Accessories Page: ${error}`);
  }
}



export async function getAppliancesAccessoriesProducts({
  params,
}: {
  params: string;
}) {
  try {
    const res = await axiosInstance(`/applicances-accessories-products/filter?${params}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_KEY}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch Appliances & Accessories Products: ${error}`);
  }
}


export async function getAccessoriesSubPage() {
  try {
    const res = await axiosInstance("/accessories/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Accessories Sub Page: ${error}`);
  }
}


export async function getApplianceSubPage() {
  try {
    const res = await axiosInstance("/appliances/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Appliances Sub Page: ${error}`);
  }
}


export async function getApplianceEmergenceRangeSubPage() {
  try {
    const res = await axiosInstance("/emergencyRangeAppliances/live", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_KEY}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Appliances Emergency Sub Page: ${error}`);
  }
}