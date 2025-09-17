import PageTemplate from "@/components/PageTemplate";
import ServiceGrid from "@/components/ServiceGrid";
import serviceData from "@/data/servicesDummy.json";
import GalleryComponent from "@/components/Gallery";
import gallerydata from "@/data/gallery.json";

export default function Service() {
  return (
    <PageTemplate
      heroTitle="Our Services"
      heroSubtitle="Here you can learn more about what we offer."
      components={[
        <ServiceGrid key={"services-grid"} services={serviceData} />,
        <GalleryComponent key={"services-gallery"} items={gallerydata} columns={2} />
      ]}
    />
  );
}