import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "/src/css/Scale.css";
import "/src/css/Translate.css";
import "/src/css/Opacity.css";
import "/src/css/Background.css";
import "/src/scss/Cursor.scss";
import "/src/scss/AdditionalSizing.scss";
import "/src/scss/AdditionalColors.scss";
import "/src/scss/AdditionalPositioning.scss";
import "/src/scss/AdditionalStyling.scss";
import App from "./App.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
