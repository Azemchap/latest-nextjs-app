import { Rule } from "sanity";

// ./sanity/schemas/ebook.js
export const ebook = {
    name: 'ebook',
    title: 'E-Book',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: Rule) => Rule.required().error('Title is required.'),
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail Image',
            type: 'image',
            options: {
                hotspot: true, // Enables image cropping
            },
        },
        {
            name: 'category',
            title: 'Category',
            type: 'array',
            of: [
                { type: "reference", to: [{ type: 'category' }] }
            ],
        },
        {
            name: 'pdfFiles',
            title: 'PDF Files',
            type: 'array',
            of: [{ type: 'file' }],
            options: {
                accept: '.pdf', // Restrict file types to PDF
            },
            validation: (Rule: Rule) => Rule.required().error('At least one PDF file is required.'),
        },
        {
            name: "createdAt",
            title: "Created At",
            type: "datetime",
            initialValue: () => new Date().toISOString()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule: Rule) => Rule.max(200).warning('Description should be under 200 characters.'),
        },
        {
            name: "body",
            title: "Content",
            type: "array",
            of: [
                { type: "block" },
            ],
            validation: (Rule: Rule) => Rule.required().error('Required')
        },
    ],
}