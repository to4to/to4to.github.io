const sameAs = [
    "https://github.com/to4to",
    "https://www.linkedin.com/in/to4to/",
    "https://x.com/im_to4to",
    "https://instagram.com/im_to4to",
    "https://threads.net/@im_to4to",
    "https://bsky.app/profile/imto4to.bsky.social",
];

const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": "https://to4to.dev/#person",
            name: "Himanshu Kumar Singh",
            alternateName: "to4to",
            url: "https://to4to.dev/",
            image: "https://to4to.dev/brand/to4to-mark.png",
            email: "contact@to4to.dev",
            jobTitle: "Software Developer",
            sameAs,
            knowsAbout: [
                "Software Development",
                "Web Applications",
                "Frontend Development",
                "Developer Tooling",
                "Reliable Software",
            ],
        },
        {
            "@type": "WebSite",
            "@id": "https://to4to.dev/#website",
            name: "to4to.dev",
            url: "https://to4to.dev/",
            description:
                "Personal website of Himanshu Kumar Singh, a software developer focused on reliable products, clear interfaces, and maintainable systems.",
            inLanguage: "en",
            publisher: {
                "@id": "https://to4to.dev/#person",
            },
        },
        {
            "@type": "ProfilePage",
            "@id": "https://to4to.dev/#profile",
            url: "https://to4to.dev/",
            name: "Himanshu Kumar Singh | Software Developer",
            description:
                "Personal profile, work focus, social links, and contact details for Himanshu Kumar Singh.",
            inLanguage: "en",
            isPartOf: {
                "@id": "https://to4to.dev/#website",
            },
            mainEntity: {
                "@id": "https://to4to.dev/#person",
            },
        },
    ],
};

const StructuredData = () => {
    const json = JSON.stringify(structuredData).replace(/</g, "\\u003c");

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: json }}
        />
    );
};

export default StructuredData;
