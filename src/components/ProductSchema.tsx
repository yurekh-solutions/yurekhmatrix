import { useEffect } from "react";

interface ProductSchemaProps {
  name: string;
  description: string;
  image?: string;
  category?: string;
  brand?: string;
  sku?: string;
}

const ProductSchema: React.FC<ProductSchemaProps> = ({
  name,
  description,
  image = "https://ritzyard.com/ritzlogo.png",
  category = "Construction Materials",
  brand = "ritzyard",
  sku
}) => {
  useEffect(() => {
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": name,
      "description": description,
      "image": image,
      "brand": {
        "@type": "Brand",
        "name": brand
      },
      "category": category,
      "sku": sku,
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "ritzyard"
        }
      }
    };

    let script = document.querySelector('script[data-product-schema="true"]');
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-product-schema", "true");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(productSchema);

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector('script[data-product-schema="true"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [name, description, image, category, brand, sku]);

  return null;
};

export default ProductSchema;
