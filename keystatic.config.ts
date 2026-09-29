import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    books: collection({
      label: 'Libros y Reseñas',
      slugField: 'slug',
      path: 'src/content/books/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Título del libro', validation: { isRequired: true } }),
        slug: fields.slug({ name: { label: 'Slug (URL)' } }),
        author: fields.text({ label: 'Autor', validation: { isRequired: true } }),
        isbn13: fields.text({ label: 'ISBN-13' }),
        isbn: fields.text({ label: 'ISBN-10' }),
        publisher: fields.text({ label: 'Editorial' }),
        pages: fields.number({ label: 'Páginas' }),
        year: fields.text({ label: 'Año de publicación' }),
        dateRead: fields.text({ label: 'Fecha de lectura' }),
        status: fields.select({
          label: 'Estado de lectura',
          options: [
            { label: 'Leído', value: 'read' },
            { label: 'Leyendo actualmente', value: 'currently-reading' },
            { label: 'Abandonado (DNF)', value: 'did-not-finish' },
          ],
          defaultValue: 'read',
        }),
        rating: fields.number({
          label: 'Puntuación (0 a 5)',
          validation: { min: 0, max: 5 },
          defaultValue: 0,
        }),
        aiGenerated: fields.checkbox({
          label: 'Contenido generado por IA',
          defaultValue: true,
        }),
        favoriteQuote: fields.text({
          label: 'Cita destacada',
          multiline: true,
        }),
        content: fields.markdoc({
          label: 'Reseña literaria y notas',
        }),
      },
    }),
  },
});
