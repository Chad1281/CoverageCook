import { useEffect } from "react";

export default function SaltEmbed() {

    const url = "https://insuranceform.app/chadcookfireflyagency/embed.js";

    useEffect(() => {        
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
          }
        }, [url]);
  }
