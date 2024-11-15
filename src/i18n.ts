
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: {
          weather: {
            title: "Weather Dashboard",
            city: "City",
            search: "Search",
            error: "Error fetching weather data",
            temperature: "Temperature",
            status: "Status",
            humidity: "Humidity",
            wind_speed: "Wind Speed",
            login: "Login",
            logout: "Logout",
          },
        },
      },
      fa: {
        translation: {
          weather: {
            title: "داشبورد آب و هوا",
            city: "شهر",
            search: "جستجو",
            error: "خطا در دریافت اطلاعات آب و هوا",
            temperature: "دمای هوا",
            status: "وضعیت",
            humidity: "رطوبت",
            wind_speed: "سرعت باد",
            login: "ورود",
            logout: "خروج",
          },
        },
      },
    },
    lng: "en", 
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;