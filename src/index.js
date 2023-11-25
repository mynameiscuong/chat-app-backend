import React from "react";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider as ReduxProvider } from 'react-redux';

// contexts
import SettingsProvider from "./contexts/SettingsContext";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
i18n
  .use(initReactI18next)
  .init({
    lng: 'en', // Ngôn ngữ mặc định
    fallbackLng: 'en', // Ngôn ngữ dự fallback
    resources: {
      en: {
        translation: {
          // Định nghĩa các cặp key-value cho ngôn ngữ tiếng Anh
        }
      },
      fr: {
        translation: {
          // Định nghĩa các cặp key-value cho ngôn ngữ tiếng Pháp
        }
      },
      // Thêm các ngôn ngữ khác nếu cần
    }
  });
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <ReduxProvider store={store}>
      <SettingsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SettingsProvider>
      </ReduxProvider>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
