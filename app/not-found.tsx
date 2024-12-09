"use client";
  import React, { useState, useEffect } from "react";
  import { motion } from "framer-motion";
  import { ArrowLeft, RefreshCw, ExternalLink } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import { Card, CardContent } from "@/components/ui/card";

  const InformativeBlock404: React.FC = () => {
    const [typedInfo, setTypedInfo] = useState("");
    const infoText = `404: Page Not Found

  What does this mean?
  - The page you're looking for doesn't exist
  - The URL might be incorrect
  - The page may have been moved or deleted

  What can you do?
  1. Check the URL for typos
  2. Go back to the previous page
  3. Visit our homepage

  Click 'Learn More' for detailed information about HTTP status codes.`;

    useEffect(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < infoText.length) {
          setTypedInfo(infoText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 20);

      return () => clearInterval(typingInterval);
    }, []);

    return (
      <div className="min-h-screen flex flex-col     p-4 font-mono">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl"
        >

              <pre className="text-sm whitespace-pre-wrap break-words">
                <code>{typedInfo}</code>
              </pre>

        </motion.div>

        <motion.div
          className="mt-8 flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
          </Button>
          <Button variant="secondary" onClick={() => window.location.reload()}>
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh
          </Button>
          <Button
            variant="default"
            onClick={() =>
              window.open(
                "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404",
                "_blank"
              )
            }
          >
            <ExternalLink className="mr-2 h-4 w-4" /> Learn More
          </Button>
        </motion.div>
      </div>
    );
  };

  export default InformativeBlock404;
