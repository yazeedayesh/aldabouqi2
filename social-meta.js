const metaTags = [
  { property: "og:title", content: "الدابوقي لشراء العفش المستعمل" },
  { property: "og:description", content: "نشتري العفش المستعمل في عمان بأفضل الأسعار وخدمة ممتازة." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://www.aldabouqi.com/" },
  { property: "og:image", content: "https://www.aldabouqi.com/logo.png" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "الضبوڤي لشراء العفش المستعمل" },
  { name: "twitter:description", content: "أفضل خدمة في عمان لشراء العفش المستعمل." },
  { name: "twitter:image", content: "https://www.aldabouqi.com/logo.png" }
];

metaTags.forEach(tagData => {
  const tag = document.createElement('meta');
  if (tagData.property) tag.setAttribute('property', tagData.property);
  if (tagData.name) tag.setAttribute('name', tagData.name);
  tag.setAttribute('content', tagData.content);
  document.head.appendChild(tag);
});
