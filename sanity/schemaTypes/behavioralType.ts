import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const behavioralType = defineType({
  name: "behavioral",
  title: "Behavioral",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "category",
      type: "reference",
      to: { type: "category" },
      title: "Category",
      validation: (Rule) =>
        Rule.required().error("A category must be selected."),
    }),
    {
      name: "lesson",
      type: "number",
    },
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
    defineField({
      name: "excerpt",
      type: "text",
      title: "Excerpt",
      validation: (Rule) =>
        Rule.max(200).warning("Excerpt should be 200 characters or fewer."),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
